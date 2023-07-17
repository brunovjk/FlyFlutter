// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@api3/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol";

import "./helpers/AutomateTaskCreator.sol";

interface OddsAndEven {
    function winner(
        uint8 playerHand,
        uint8 playerGuess,
        uint8 houseHand
    ) external pure returns (string memory winner);
}

interface FlyFlutterCoin {
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

contract Betting is Ownable, RrpRequesterV0, AutomateTaskCreator {
    struct Bet {
        address playerAddress;
        uint8 playerHand;
        uint8 playerGuess;
        uint8 betAmount;
        uint8 houseHand;
        bytes32 requestId;
        bytes32 taskId;
        bool waitingFulfillment;
        bool waitingCloseBet;
        string winner;
    }

    uint256 public constant MIN_HAND = 0;
    uint256 public constant MAX_HAND = 5;
    uint256 public constant GUESS_ODD = 1;
    uint256 public constant GUESS_EVEN = 0;
    uint256 public constant MIN_FFC_BET = 1;
    uint256 public constant MAX_FFC_BET = 99;
    uint256 public betFee;
    uint256 public qrngFee;

    address public airnode;
    bytes32 public endpointIdUint256;
    address public sponsorWallet;

    mapping(bytes32 => Bet) public bets;
    mapping(address => bytes32[]) public betIDsPerPlayer;

    event BetPlaced(
        bytes32 indexed requestId,
        address indexed player,
        uint8 playerHand,
        uint8 playerGuess,
        uint8 betAmount
    );
    event ReceivedUint256(bytes32 indexed requestId, uint8 indexed houseHand);
    event RequestedUint256(bytes32 indexed requestId);

    event TaskCreated(bytes32 indexed requestId);
    event TaskExecuted(bytes32 indexed requestId, string indexed winner);

    FlyFlutterCoin public flyFlutterCoinContract;
    HouseContract public houseContract;
    OddsAndEven public oddsAndEvenContract;

    error AddressIsZero();
    error IncorrectFeeAmount();
    error InvalidPlayerHand();
    error InvalidPlayerGuess();
    error InvalidBetAmount();
    error FailedFundSponsorWallet();
    error TransferFailed();
    error NoFundsToWithdraw();
    error ReceiveBetFailed();
    error RequestIdNotKnown();
    error SendBetFailed();
    error SetWinnerFailed();
    error WithdrawalFailed();

    modifier addressIsZero(address value) {
        if (value == address(0)) revert AddressIsZero();
        _;
    }

    constructor(
        uint256 _betFee,
        uint256 _qrngFee,
        address _airnodeRrp,
        address payable _automate,
        address _flyFlutterCoinContract,
        address _fundsOwner,
        address _houseContract,
        address _oddsAndEvenContract
    )
        addressIsZero(_airnodeRrp)
        addressIsZero(_automate)
        addressIsZero(_flyFlutterCoinContract)
        addressIsZero(_fundsOwner)
        addressIsZero(_houseContract)
        addressIsZero(_oddsAndEvenContract)
        AutomateTaskCreator(_automate, _fundsOwner)
        RrpRequesterV0(_airnodeRrp)
    {
        betFee = _betFee;
        qrngFee = _qrngFee;
        flyFlutterCoinContract = FlyFlutterCoin(_flyFlutterCoinContract);
        houseContract = HouseContract(_houseContract);
        oddsAndEvenContract = OddsAndEven(_oddsAndEvenContract);
    }

    receive() external payable {}

    function placeBet(
        uint8 playerHand,
        uint8 playerGuess,
        uint8 betAmount
    ) external payable returns (bool, Bet memory) {
        if (msg.value != betFee) {
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

        // Fund a sponsor wallet (QRNG wallet) with qrngFee before makeRequestUint256()
        (bool success, ) = sponsorWallet.call{value: qrngFee}("");
        if (!success) revert FailedFundSponsorWallet();

        // Make request Uint256 QRNG, emit RequestedUint256
        bytes32 requestId = makeRequestUint256();

        // Create a Gelato task, emit TaskCreated
        bytes32 taskId = createTask(requestId);

        Bet memory newBet = Bet({
            playerAddress: msg.sender,
            playerHand: playerHand,
            playerGuess: playerGuess,
            betAmount: betAmount,
            houseHand: 99,
            requestId: requestId,
            taskId: taskId,
            waitingFulfillment: true,
            waitingCloseBet: false,
            winner: ""
        });
        bets[requestId] = newBet;
        betIDsPerPlayer[msg.sender].push(requestId);

        // Send the FlyFlutterCoin betAmount to the House Contract.
        if (
            !flyFlutterCoinContract.transferFrom(
                msg.sender,
                address(houseContract),
                betAmount
            )
        ) revert TransferFailed();

        // House Contract receive the bet
        if (!houseContract.receiveBet(betAmount)) revert ReceiveBetFailed();

        emit BetPlaced(
            requestId,
            msg.sender,
            playerHand,
            playerGuess,
            betAmount
        );
        return (true, newBet);
    }

    function getHouseHand(
        bytes calldata randomNumber
    ) internal pure returns (uint8 houseHand) {
        houseHand = uint8((abi.decode(randomNumber, (uint256))) % 5);
    }

    function setWinner(
        bytes32 requestId
    ) internal returns (bool success, string memory winner) {
        winner = oddsAndEvenContract.winner(
            bets[requestId].playerHand,
            bets[requestId].playerGuess,
            bets[requestId].houseHand
        );
        if (
            keccak256(abi.encodePacked(winner)) ==
            keccak256(abi.encodePacked(string("Player wins")))
        ) {
            bets[requestId].winner = winner;
            // Send the FlyFlutterCoin betAmount to the Winner.
            if (
                !flyFlutterCoinContract.transferFrom(
                    address(houseContract),
                    bets[requestId].playerAddress,
                    2 * bets[requestId].betAmount
                )
            ) revert TransferFailed();
            // House Contract send the bet
            if (
                !houseContract.sendBet(
                    bets[requestId].playerAddress,
                    bets[requestId].betAmount
                )
            ) revert SendBetFailed();
        } else {
            bets[requestId].winner = winner;
        }
        bets[requestId].waitingCloseBet = false;
        success = true;
        _cancelTask(bets[requestId].taskId);
    }

    function getBetsPerPlayer(
        address player,
        uint256 endIndex
    ) public view returns (Bet[] memory) {
        uint256 outputBetLength;
        bytes32[] memory betIDsPerPlayer_ = betIDsPerPlayer[player];

        if (betIDsPerPlayer_.length > endIndex) {
            outputBetLength = endIndex;
        } else {
            outputBetLength = betIDsPerPlayer_.length;
        }

        Bet[] memory outputBets = new Bet[](outputBetLength);

        for (uint256 i = 0; i < outputBetLength; i++) {
            bytes32 betID = betIDsPerPlayer_[betIDsPerPlayer_.length - 1 - i];
            outputBets[i] = bets[betID];
        }

        return outputBets;
    }

    // *** QRNG functions **************************************************//
    function fulfillUint256(
        bytes32 requestId,
        bytes calldata data
    ) external onlyAirnodeRrp {
        if (!bets[requestId].waitingFulfillment) revert RequestIdNotKnown();
        uint8 houseHand = getHouseHand(data);
        bets[requestId].houseHand = houseHand;
        bets[requestId].waitingFulfillment = false;
        bets[requestId].waitingCloseBet = true;
        emit ReceivedUint256(requestId, houseHand);
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
    }

    // *** Gelato functions ************************************************//
    function checker(
        bytes32 requestId
    ) external view returns (bool canExec, bytes memory execPayload) {
        canExec = bets[requestId].waitingCloseBet;
        execPayload = abi.encodeCall(this.perfomTask, (requestId));
    }

    function createTask(bytes32 requestId) internal returns (bytes32 taskId) {
        ModuleData memory moduleData = ModuleData({
            modules: new Module[](2),
            args: new bytes[](2)
        });
        moduleData.modules[0] = Module.RESOLVER;
        moduleData.modules[1] = Module.PROXY;
        moduleData.args[0] = _resolverModuleArg(
            address(this),
            abi.encodeCall(this.checker, (requestId))
        );
        moduleData.args[1] = _proxyModuleArg();
        taskId = _createTask(
            address(this),
            abi.encode(this.perfomTask.selector),
            moduleData,
            ETH
        );
        emit TaskCreated(requestId);
    }

    function perfomTask(bytes32 requestId) external onlyDedicatedMsgSender {
        if (bets[requestId].waitingCloseBet) {
            (bool success, string memory winner) = setWinner(requestId);
            if (!success) revert SetWinnerFailed();
            emit TaskExecuted(requestId, winner);
        }
        (uint256 fee, address feeToken) = _getFeeDetails();
        _transfer(fee, feeToken);
    }

    // *** Admin functions *************************************************//
    function setFlyFlutterCoinContract(
        address _flyFlutterCoinContract
    ) external addressIsZero(_flyFlutterCoinContract) onlyOwner {
        flyFlutterCoinContract = FlyFlutterCoin(_flyFlutterCoinContract);
    }

    function setFees(uint256 _betFee, uint256 _qrngFee) external onlyOwner {
        betFee = _betFee;
        qrngFee = _qrngFee;
    }

    function setHouseContract(
        address _houseContract
    ) external addressIsZero(_houseContract) onlyOwner {
        houseContract = HouseContract(_houseContract);
    }

    function setOddsAndEvenContract(
        address _oddsAndEvenContract
    ) external addressIsZero(_oddsAndEvenContract) onlyOwner {
        oddsAndEvenContract = OddsAndEven(_oddsAndEvenContract);
    }

    function setRequestParameters(
        address _airnode,
        bytes32 _endpointIdUint256,
        address _sponsorWallet
    ) external addressIsZero(_airnode) addressIsZero(_sponsorWallet) onlyOwner {
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
}
