// Import necessary contracts and libraries
const { expect } = require("chai");
const { ethers } = require("hardhat");

// Define test suite for OddAndEven contract
describe("OddAndEven Contract", function () {
  let oddAndEven;

  // Define a beforeEach function to deploy the contract and set up the testing environment
  beforeEach(async function () {
    const OddAndEven = await ethers.getContractFactory("OddAndEven");
    oddAndEven = await OddAndEven.deploy();
  });

  it("Should return 'Player wins' when the sum of the input numbers is odd and Player guessed 'Odd'", async function () {
    const playerHand = 1;
    const playerGuess = 1; // 1 = odd
    const houseHand = 2;

    expect(
      await oddAndEven.winner(playerHand, playerGuess, houseHand)
    ).to.equal("Player wins");
  });

  it("Should return 'Player wins' when the sum of the input numbers is even and Player guessed 'Even'", async function () {
    const playerHand = 2;
    const playerGuess = 0; // 0 = Even
    const houseHand = 2;

    expect(
      await oddAndEven.winner(playerHand, playerGuess, houseHand)
    ).to.equal("Player wins");
  });

  it("Should return 'House wins' when the sum of the input numbers is odd and player guessed 'Even'", async function () {
    const playerHand = 1;
    const playerGuess = 0;
    const houseHand = 2;

    expect(
      await oddAndEven.winner(playerHand, playerGuess, houseHand)
    ).to.equal("House wins");
  });

  it("Should return 'House wins' when the sum of the input numbers is even and ouse guesses 'Odd'", async function () {
    const playerHand = 2;
    const playerGuess = 1;
    const houseHand = 2;

    expect(
      await oddAndEven.winner(playerHand, playerGuess, houseHand)
    ).to.equal("House wins");
  });

  it("Should return the correct result for different combinations of hands and guesses", async function () {
    const testCases = [
      {
        playerHand: 1,
        playerGuess: 1,
        houseHand: 2,
        expected: "Player wins",
      },
      {
        playerHand: 2,
        playerGuess: 0,
        houseHand: 2,
        expected: "Player wins",
      },
      {
        playerHand: 1,
        playerGuess: 0,
        houseHand: 2,
        expected: "House wins",
      },
      {
        playerHand: 2,
        playerGuess: 1,
        houseHand: 2,
        expected: "House wins",
      },
      {
        playerHand: 0,
        playerGuess: 1,
        houseHand: 0,
        expected: "House wins",
      },
      {
        playerHand: 0,
        playerGuess: 0,
        houseHand: 1,
        expected: "House wins",
      },
      {
        playerHand: 3,
        playerGuess: 1,
        houseHand: 1,
        expected: "House wins",
      },
      {
        playerHand: 4,
        playerGuess: 0,
        houseHand: 4,
        expected: "Player wins",
      },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const { playerHand, playerGuess, houseHand, expected } = testCases[i];

      const result = await oddAndEven.winner(
        playerHand,
        playerGuess,
        houseHand
      );

      expect(result).to.equal(expected);
    }
  });

  it("Should throw an error when the one of the inputs is out of range (less than 0 or greater than 5)", async function () {
    const playerHand = 10;
    const playerGuess = 1;
    const houseHand = 20;

    await expect(oddAndEven.winner(playerHand, playerGuess, houseHand)).to.be
      .reverted;
  });

  it("Should throw an error when the one of the inputs is out of range (less than 0 or greater than 5), long list", async function () {
    const testCases = [
      { playerHand: 10, playerGuess: 1, houseHand: 20 },
      { playerHand: 1, playerGuess: 10, houseHand: 2 },
      { playerHand: 30, playerGuess: 1, houseHand: 1 },
      { playerHand: 6, playerGuess: 0, houseHand: 3 },
    ];

    for (let i = 0; i < testCases.length; i++) {
      const { playerHand, playerGuess, houseHand } = testCases[i];

      await expect(oddAndEven.winner(playerHand, playerGuess, houseHand)).to.be
        .reverted;
    }
  });

  it("Should throw an error when both player guessed a out of range outcome", async function () {
    const playerHand = 1;
    const playerGuess = 2;
    const houseHand = 2;

    await expect(oddAndEven.winner(playerHand, playerGuess, houseHand)).to.be
      .reverted;
  });
});
