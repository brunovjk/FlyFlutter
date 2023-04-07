// Import necessary contracts and libraries
const { expect } = require("chai");
const { ethers } = require("hardhat");

// Define test suite for House contract
describe("House Contract", function () {
  let house, dummyBetting, ffc, owner, player;

  // Define a beforeEach function to deploy the contract and set up the testing environment
  beforeEach(async function () {
    // Get player accounts to use for testing
    [owner, player] = await ethers.getSigners();
    // Deploy House contract and get contract instance
    const House = await ethers.getContractFactory("House");
    house = await House.deploy();

    const Betting = await ethers.getContractFactory("DummyBetting");
    dummyBetting = await Betting.deploy(house.address);

    // Deploy FlyFlutterCoin contract and get contract instance
    const FlyFlutterCoin = await ethers.getContractFactory(
      "contracts/FlyFlutterCoin.sol:FlyFlutterCoin"
    );
    ffc = await FlyFlutterCoin.deploy(house.address);
    await ffc.setBettingContract(dummyBetting.address);

    // Set parameters at deployment
    await house.connect(owner).setBettingContract(dummyBetting.address);
    await house.connect(owner).setFlyFlutterCoin(ffc.address);
    await house.connect(owner).approveBettingContract();
  });
  // Test case
  // Test for House contract FFC balance:
  it("Should check if the House contract FFC balance has balance after FFC deployment ", async function () {
    // Verify that the House Contract can check its FFC balance.
    const ffcBalance = await ffc.balanceOf(house.address);
    expect(ffcBalance).to.equal(10000);
  });

  // Test for Betting Contract and House Contract function and events:
  it("Should check interaction with Betting Contract and House Contract FFC balance", async function () {
    // Verify that the Betting Contract can call functions on the House Contract
    // to increase or decrease the FFC balance.
    const initialTotalReceived = await house.totalReceived();
    const initialTotalSent = await house.totalSent();
    const betAmount = 99;

    await ffc.connect(player).mint();

    // Place a bet to increase the amount of HouseContract FFC balance
    const receiveBet = await dummyBetting.receiveBet(betAmount);

    // Verify that the House contract emits an event after receiving FFC tokens from
    // Betting Contract.
    await expect(receiveBet).to.emit(house, "BetReceived").withArgs(betAmount);

    const totalReceived = await house.totalReceived();
    expect(totalReceived).to.equal(initialTotalReceived.add(betAmount));

    // Pay the winner to decrease the amount of HouseContract FFC balance
    const sendBet = await dummyBetting.sendBet(player.address, betAmount);

    //  Verify that the House contract emits an event after sending FFC tokens to the
    // Betting Contract.
    await expect(sendBet)
      .to.emit(house, "BetSent")
      .withArgs(player.address, betAmount);

    const totalSent = await house.totalSent();
    expect(totalSent).to.equal(initialTotalSent.add(betAmount));
  });

  // Test for transfer functionality:
  it("Should allow for FFC token transfers", async function () {
    // Verify that the House Contract can receive FFC tokens from any address
    const initialBalance = await ffc.balanceOf(house.address);
    const amount = 99;

    await ffc.connect(player).mint();

    await ffc.connect(player).transfer(house.address, amount);

    const newBalance = await ffc.balanceOf(house.address);
    expect(newBalance).to.equal(initialBalance.add(amount));

    // Verify that the House contract allow Betting Contract to use maxAmount of FFC
    expect(await ffc.allowance(house.address, dummyBetting.address)).to.equal(
      10000
    );
  });

  // Test for error handling:
  it("Should handle unauthorized access and invalid actions", async function () {
    // Verify error when attempting to perform invalid actions
    const amount = 99;

    await expect(ffc.connect(player).transfer(house.address, amount)).to.be
      .reverted; // error InsufficientBalance();

    await expect(house.connect(player).approveBettingContract()).to.be.reverted; // error Unauthorized();

    // Verify that only Betting Contract address can call functions on the House Contract
    await ffc.connect(player).mint(); // Will be minted 100 FFC to the player wallet
    await expect(house.connect(player).receiveBet(amount)).to.be.reverted; // error Unauthorized();
  });

  // Test for scalability:
  it("Should handle a large volume of FFC token transactions without crashing", async function () {
    const houseInitialBalance = await ffc.balanceOf(house.address);
    // Set up a loop to execute many FFC token transfers
    // For async tests and hooks, ensure "done()" is called;
    // if returning a Promise, ensure it resolves.
    const largeVolume = 1; // Change this number to test larger volume
    const numTransfers = 99;

    for (let i = 0; i < largeVolume; i++) {
      await ffc.connect(player).mint(); // Will be minted 100 FFC to the player wallet

      for (let j = 0; j < numTransfers; j++) {
        await ffc.connect(player).transfer(house.address, 1);
      }
    }
    // Verify that the House Contract received the correct amount of FFC tokens
    const houseBalance = await ffc.balanceOf(house.address);
    expect(houseBalance).to.equal(
      houseInitialBalance.add(largeVolume * numTransfers)
    );
  });
});
