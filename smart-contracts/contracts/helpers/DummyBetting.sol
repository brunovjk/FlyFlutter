// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IHouse {
    function receiveBet(uint256 amount) external;
    function sendBet(address recipient, uint256 amount) external;
}
contract DummyBetting is Ownable {
    IHouse private house;

    constructor(address houseAddress) {
        house = IHouse(houseAddress);
    }

    function receiveBet(uint256 amount) onlyOwner public {
        house.receiveBet(amount);
    }

    function sendBet(address player, uint256 amount) onlyOwner public {
        house.sendBet(player, amount);
    }
}
