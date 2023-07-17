// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";

contract FlyFlutterCoin is ERC20, Ownable, ERC20Permit {
    uint256 public constant MAX_SUPPLY = 1000000; // 1M

    address public bettingContract;
    address public houseContract;

    error AddressIsZero();
    error BalanceGreaterThanTen();
    error TransferFromOnlyHouseContract();
    error TransferOnlyToHouseContract();
    error ApproveOnlyTheBettingContract();

    modifier addressIsZero(address value) {
        if (value == address(0)) revert AddressIsZero();
        _;
    }

    constructor(
        address _houseContract
    )
        addressIsZero(_houseContract)
        ERC20("FlyFlutterCoin", "FFC")
        ERC20Permit("FlyFlutterCoin")
    {
        houseContract = _houseContract;
        // Mint 10.000 tokens to houseContract
        _mint(_houseContract, 10000);
    }

    function setBettingContract(
        address _bettingContract
    ) external onlyOwner addressIsZero(_bettingContract) returns (bool) {
        bettingContract = _bettingContract;
        return true;
    }

    function setHouseContract(
        address _houseContract
    ) external onlyOwner addressIsZero(_houseContract) returns (bool) {
        houseContract = _houseContract;
        return true;
    }

    function mint() public returns (bool) {
        if (balanceOf(msg.sender) > 10) revert BalanceGreaterThanTen();
        _mint(msg.sender, 100);
        return true;
    }

    function approve(
        address spender,
        uint256 amount
    ) public override returns (bool) {
        if (spender != bettingContract) revert ApproveOnlyTheBettingContract();
        return super.approve(spender, amount);
    }

    function decreaseAllowance(
        address spender,
        uint256 addedValue
    ) public override returns (bool) {
        if (spender != bettingContract) revert ApproveOnlyTheBettingContract();
        return super.decreaseAllowance(spender, addedValue);
    }

    function increaseAllowance(
        address spender,
        uint256 addedValue
    ) public override returns (bool) {
        if (spender != bettingContract) revert ApproveOnlyTheBettingContract();
        return super.increaseAllowance(spender, addedValue);
    }

    function permit(
        address owner,
        address spender,
        uint256 value,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public override {
        if (spender != bettingContract) revert ApproveOnlyTheBettingContract();
        super.permit(owner, spender, value, deadline, v, r, s);
    }

    function transfer(
        address recipient,
        uint256 amount
    ) public override returns (bool) {
        if (recipient != houseContract) revert TransferOnlyToHouseContract();
        return super.transfer(recipient, amount);
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public override returns (bool) {
        if (sender == houseContract || recipient == houseContract) {
            return super.transferFrom(sender, recipient, amount);
        } else {
            revert TransferFromOnlyHouseContract();
        }
    }

    function decimals() public pure override returns (uint8) {
        return 0;
    }

    function maxSupply() public pure returns (uint256) {
        return MAX_SUPPLY;
    }
}
