// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.19;

interface FFC {
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    function balanceOf(address account) external view returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);
}

contract House is Ownable {
    FFC public ffc;
    address public bettingContract;
    uint256 public totalReceived;
    uint256 public totalSent;

    event BetReceived(uint256 indexed amount);
    event BetSent(address indexed recipient, uint256 indexed amount);

    error AddressIsZero();
    error InvalidAmount();
    error InsufficientBalance();
    error UnauthorizedAddress();

    modifier addressIsZero(address value) {
        if (value == address(0)) revert AddressIsZero();
        _;
    }

    constructor() {
        totalReceived = 0;
        totalSent = 0;
    }

    function approveBettingContract() external onlyOwner returns (bool) {
        ffc.approve(bettingContract, 10000);
        return true;
    }

    function receiveBet(uint256 amount) external returns (bool) {
        if (msg.sender != bettingContract) revert UnauthorizedAddress();
        if (amount == 0) revert InvalidAmount();
        totalReceived += amount;
        emit BetReceived(amount);
        return true;
    }

    function sendBet(
        address recipient,
        uint256 amount
    ) external returns (bool) {
        if (msg.sender != bettingContract) revert UnauthorizedAddress();
        if (amount == 0) revert InvalidAmount();
        if (amount > ffc.balanceOf(address(this))) revert InsufficientBalance();
        totalSent += amount;
        emit BetSent(recipient, amount);
        return true;
    }

    function setBettingContract(
        address _bettingContract
    ) external onlyOwner addressIsZero(_bettingContract) returns (bool) {
        bettingContract = _bettingContract;
        return true;
    }

    function setFlyFlutterCoin(
        address _ffcAddress
    ) external onlyOwner addressIsZero(_ffcAddress) returns (bool) {
        ffc = FFC(_ffcAddress);
        return true;
    }
}
