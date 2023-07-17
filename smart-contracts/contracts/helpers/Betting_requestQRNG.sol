// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@api3/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol";

interface OddsAndEven {
    function winner(
        uint8 playerHand,
        uint8 playerGuess,
        uint8 houseHand
    ) external pure returns (string memory winner);
}

interface FlyFlutterCoin {
    function transfer(
        address recipient,
        uint256 amount
    ) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

interface HouseContract {
    function receiveBet(uint256 amount) external returns (bool);

    function sendBet(address recipient, uint256 amount) external returns (bool);
}

contract BettingContract is Ownable, RrpRequesterV0 {
    using Counters for Counters.Counter;
    Counters.Counter private betCount;

    struct Bet {
        uint256 betId;
        address playerAddress;
        uint8 playerHand;
        uint8 playerGuess;
        uint8 betAmount;
        uint8 houseHand;
        bytes32 requestId;
        bytes32 taskId;
        string winner;
    }

    uint256 public constant MIN_HAND = 0;
    uint256 public constant MAX_HAND = 5;
    uint256 public constant GUESS_ODD = 1;
    uint256 public constant GUESS_EVEN = 0;
    uint256 public constant MIN_FFC_BET = 1;
    uint256 public constant MAX_FFC_BET = 99;
    uint256 public constant BET_FEE = 0.5 ether;

    address public airnode;
    bytes32 public endpointIdUint256;
    address public sponsorWallet;

    mapping(uint256 => Bet) public bets;
    uint256 placedBets;
    mapping(bytes32 => bool) public waitingFulfillment;
    mapping(bytes32 => bool) public waitingCloseBet;

    event BetPlaced(
        uint256 indexed newBetId,
        address indexed player,
        uint8 playerHand,
        uint8 playerGuess,
        uint8 betAmount
    );
    event ReceivedUint256(bytes32 indexed requestId, uint8 houseHand);
    event RequestedUint256(bytes32 indexed requestId);

    event TaskCreated(bytes32 taskId);
    event TaskExecuted(bytes32 taskId);

    FlyFlutterCoin public flyFlutterCoinContract;
    HouseContract public houseContract;
    OddsAndEven public oddsAndEvenContract;

    error AddressIsZero();
    error IncorrectFeeAmount();
    error InvalidPlayerHand();
    error InvalidPlayerGuess();
    error InvalidBetAmount();
    error TransferFailed();
    error NoFundsToWithdraw();
    error ReceiveBetFailed();
    error WithdrawalFailed();

    modifier addressIsZero(address value) {
        if (value == address(0)) revert AddressIsZero();
        _;
    }

    constructor(
        address _airnodeRrp,
        address _flyFlutterCoinContract,
        address _houseContract,
        address _oddsAndEvenContract
    )
        addressIsZero(_airnodeRrp)
        addressIsZero(_flyFlutterCoinContract)
        addressIsZero(_houseContract)
        addressIsZero(_oddsAndEvenContract)

        RrpRequesterV0(_airnodeRrp)
    {
        flyFlutterCoinContract = FlyFlutterCoin(_flyFlutterCoinContract);
        houseContract = HouseContract(_houseContract);
        oddsAndEvenContract = OddsAndEven(_oddsAndEvenContract);
    }

    function placeBet(
        uint8 playerHand,
        uint8 playerGuess,
        uint8 betAmount
    ) external payable returns (bool, Bet memory) {
        if (msg.value != BET_FEE) {
            revert IncorrectFeeAmount();
        }

        if (playerHand < MIN_HAND || playerHand > MAX_HAND) {
            revert InvalidPlayerHand();
        }

        if (playerGuess != GUESS_ODD && playerGuess != GUESS_EVEN) {
            revert InvalidPlayerGuess();
        }

        if (betAmount < MIN_FFC_BET || betAmount > MAX_FFC_BET) {
            revert InvalidBetAmount();
        }

        // Fund a sponsor wallet (QRNG wallet) with 0.05 MATIC
        (bool success, ) = sponsorWallet.call{value: 0.05 ether}("");
        require(success, "BettingContract: failed to fund sponsor wallet");

        // Make request Uint256 QRNG, emit RequestedUint256
        bytes32 requestId = makeRequestUint256();
        waitingFulfillment[requestId] = true;

        // Create a Gelato task, emit TaskCreated
        bytes32 taskId = createTask(requestId);
        waitingCloseBet[taskId] = false;

        // Send the FlyFlutterCoin betAmount to the House Contract.
        if (
            !flyFlutterCoinContract.transferFrom(
                msg.sender,
                address(houseContract),
                betAmount
            )
        ) revert TransferFailed();

        uint256 newBetId = betCount.current();
        betCount.increment();
        // Receive the bet, emit BetPlaced
        if (!houseContract.receiveBet(betAmount)) revert ReceiveBetFailed();
        Bet memory newBet = Bet({
            betId: newBetId,
            playerAddress: msg.sender,
            playerHand: playerHand,
            playerGuess: playerGuess,
            betAmount: betAmount,
            houseHand: 99,
            requestId: requestId,
            taskId: taskId,
            winner: ""
        });        
        bets[newBetId] = newBet;
        placedBets++;
        emit BetPlaced(newBetId, msg.sender, playerHand, playerGuess, betAmount);
        return (true, newBet);
    }

    function executeTask() external returns (bool) {}

    function fulfillUint256(bytes32 requestId, bytes calldata data)
        external
        onlyAirnodeRrp
    {
        require(
            waitingFulfillment[requestId],
            "Request ID not known"
        );

        uint8 houseHand = uint8((abi.decode(data, (uint256))) % 5);

        // Find the Bet in the bets mapping related to this requestId and update the houseHand on it
        for (uint i = 0; i < placedBets; i++) {
            if (bets[i].requestId == requestId) {
                bets[i].houseHand = houseHand;
                waitingCloseBet[bets[i].taskId] = true;
                break;
            }
        }

        waitingFulfillment[requestId] = false;
        emit ReceivedUint256(requestId, houseHand);
    }

    function setFlyFlutterCoinContract(
        address _flyFlutterCoinContract
    ) external onlyOwner {
        flyFlutterCoinContract = FlyFlutterCoin(_flyFlutterCoinContract);
    }

    function setHouseContract(address _houseContract) external onlyOwner {
        houseContract = HouseContract(_houseContract);
    }

    function setOddsAndEvenContract(
        address _oddsAndEvenContract
    ) external onlyOwner {
        oddsAndEvenContract = OddsAndEven(_oddsAndEvenContract);
    }

    function setRequestParameters(
        address _airnode,
        bytes32 _endpointIdUint256,
        address _sponsorWallet
    ) external onlyOwner {
        airnode = _airnode;
        endpointIdUint256 = _endpointIdUint256;
        sponsorWallet = _sponsorWallet;
    }

    function withdrawFunds() external onlyOwner {
        uint256 balance = address(this).balance;
        if (balance == 0) revert NoFundsToWithdraw();
        (bool success, ) = msg.sender.call{value: balance}("");
        if (!success) revert WithdrawalFailed();
    }

    function checker()
        external
        view
        returns (bool canExec, bytes memory execPayload)
    {}

    function createTask(bytes32 requestId) internal returns (bytes32 taskId) {
        taskId = keccak256(
            abi.encodePacked(
                requestId
            )
        );
        emit TaskCreated(taskId);
    }

    function makeRequestUint256() internal returns (bytes32 requestId) {
        requestId = airnodeRrp.makeFullRequest(
            airnode,
            endpointIdUint256,
            address(this),
            sponsorWallet,
            address(this),
            this.fulfillUint256.selector,
            ""
        );
        emit RequestedUint256(requestId);
    }}
