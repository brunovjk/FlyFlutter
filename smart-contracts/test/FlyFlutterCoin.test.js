// Import necessary contracts and libraries
const { expect } = require("chai");
const { ethers } = require("hardhat");

// Define test suite for FlyFlutterCoin contract
describe("FlyFlutterCoin", function () {
  const bettingContractAddress = ethers.utils.getAddress(
    ethers.utils.hexlify(ethers.utils.randomBytes(20))
  );
  const houseContractAddress = ethers.utils.getAddress(
    ethers.utils.hexlify(ethers.utils.randomBytes(20))
  );
  let ffc, owner, user, unauthorizedUser;

  // Define a beforeEach function to deploy the contract and set up the testing environment
  beforeEach(async function () {
    // Deploy FlyFlutterCoin contract and get contract instance
    const FlyFlutterCoin = await ethers.getContractFactory(
      "contracts/FlyFlutterCoin.sol:FlyFlutterCoin"
    );
    ffc = await FlyFlutterCoin.deploy(houseContractAddress);
    await ffc.setBettingContract(bettingContractAddress);
    // Get user accounts to use for testing
    [owner, user, unauthorizedUser] = await ethers.getSigners();
  });
  //Test Case
  // Test deployment of FlyFlutterCoin contract:
  it("Should deploy FlyFlutterCoin contract and verify contract properties", async function () {
    // Verify that the contract has been deployed successfully by checking the contract address
    expect(await ffc.address).to.not.equal(0);

    // Verify that the max supply of FlyFlutterCoin is 1,000,000 tokens
    expect(await ffc.maxSupply()).to.equal(1000000);

    // Verify that the owner of the contract is the address that deployed the contract
    expect(await ffc.owner()).to.equal(owner.address);

    // Verify that the bettingContract and houseContract addresses are set correctly
    expect(await ffc.bettingContract()).to.equal(bettingContractAddress);
    expect(await ffc.houseContract()).to.equal(houseContractAddress);

    // Verify that the houseContract has 10.000 tokens
    expect(await ffc.balanceOf(houseContractAddress)).to.equal(10000);
  });

  // Test minting functionality:
  it("Should allow user to mint 100 tokens at a time and verify total supply increase", async function () {
    const totalSupplyBeforeMint = await ffc.totalSupply();
    // Verify that a user can only mint 100 tokens at a time
    await ffc.connect(user).mint();
    expect(await ffc.balanceOf(user.address)).to.equal(100);

    // Verify that the total supply of FlyFlutterCoin increases by 100 tokens after each successful minting
    expect(await ffc.totalSupply()).to.equal(totalSupplyBeforeMint.add(100));

    // Verify that a user cannot mint tokens if their balance is greater than to 10 tokens
    await expect(ffc.connect(user).mint()).to.be.reverted;
  });

  // Test transfer functionality:
  it("Should allow user to transfer FFC tokens to the houseContract and disallow transfers to any other address or wallet", async function () {
    // Mint some FFC tokens to user
    await ffc.connect(user).mint();
    const userBalanceBeforeTransfer = await ffc.balanceOf(user.address);
    const houseContractBalanceBeforeTransfer = await ffc.balanceOf(
      houseContractAddress
    );

    // Verify that a user can transfer FFC tokens to the houseContract
    await ffc.connect(user).transfer(houseContractAddress, 50);
    expect(await ffc.balanceOf(user.address)).to.equal(
      userBalanceBeforeTransfer.sub(50)
    );
    expect(await ffc.balanceOf(houseContractAddress)).to.equal(
      houseContractBalanceBeforeTransfer.add(50)
    );

    // Verify that a user cannot transfer FFC tokens to any other address or wallet
    const otherAddress = ethers.utils.getAddress(
      ethers.utils.hexlify(ethers.utils.randomBytes(20))
    );
    await expect(ffc.connect(user).transfer(otherAddress, 50)).to.be.reverted;

    // Verify that the bettingContract can transfer FFC tokens from the user wallet to the houseContract and vice versa
    await ffc.connect(user).approve(bettingContractAddress, 50);
    expect(
      await ffc.connect(user).allowance(user.address, bettingContractAddress)
    ).to.be.equal(50);

    // // Verify that the bettingContract is the only address allowed to transferFrom the user wallet
    const otherContractAddress = ethers.utils.getAddress(
      ethers.utils.hexlify(ethers.utils.randomBytes(20))
    );
    await expect(ffc.connect(user).approve(otherContractAddress, 50)).to.be
      .reverted;
    expect(
      await ffc.connect(user).allowance(user.address, otherContractAddress)
    ).to.be.equal(0);
  });

  // Test user restrictions:
  it("Should prevent users from transferring tokens to any other wallet or allowing transferFrom to other wallets", async function () {
    await ffc.connect(user).mint();
    // Verify that a user cannot transfer tokens to any other wallet
    const recipient = ethers.utils.getAddress(
      ethers.utils.hexlify(ethers.utils.randomBytes(20))
    );
    await expect(ffc.connect(user).transfer(recipient, 100)).to.be.reverted;

    // Verify that a user cannot approve transferFrom of their tokens to any other wallet
    await expect(ffc.connect(user).approve(recipient, 100)).to.be.reverted;
  });

  // Test permit functionality:
  it("should allow only bettingContract to spend ffc in user's name", async function () {
    const allowanceAmount = 100; // or any other value
    const deadline = Math.floor(Date.now() / 1000) + 3600; // set deadline to 1 hour from now
    const v = 27; // or any other value
    const r =
      "0x1234567890123456789012345678901234567890123456789012345678901234";
    const s =
      "0x1234567890123456789012345678901234567890123456789012345678901234";

    await expect(
      ffc
        .connect(user)
        .permit(
          user.address,
          bettingContractAddress,
          allowanceAmount,
          deadline,
          v,
          r,
          s
        )
    ).to.be.reverted;
  });

  // Test setting bettingContract and houseContract:
  it("Should allow only owner to set parameters and revert if unauthorized user tries to set the parameters", async function () {
    // Set a new bettingContract address
    const newBettingContractAddress = ethers.utils.getAddress(
      ethers.utils.hexlify(ethers.utils.randomBytes(20))
    );
    await ffc.connect(owner).setBettingContract(newBettingContractAddress);

    // Check that the new bettingContract address is set correctly
    expect(await ffc.bettingContract()).to.equal(newBettingContractAddress);

    // Set a new houseContract address
    const newHouseContractAddress = ethers.utils.getAddress(
      ethers.utils.hexlify(ethers.utils.randomBytes(20))
    );
    await ffc.connect(owner).setHouseContract(newHouseContractAddress);

    // Check that the new houseContract address is set correctly
    expect(await ffc.houseContract()).to.equal(newHouseContractAddress);

    // Test that an unauthorized user cannot set the bettingContract
    await expect(
      ffc
        .connect(unauthorizedUser)
        .setBettingContract(newBettingContractAddress)
    ).to.be.revertedWith("Ownable: caller is not the owner");

    // Test that an unauthorized user cannot set the houseContract
    await expect(
      ffc.connect(unauthorizedUser).setHouseContract(newHouseContractAddress)
    ).to.be.revertedWith("Ownable: caller is not the owner");

    // Try setting with zero address
    await expect(ffc.setBettingContract(ethers.constants.AddressZero)).to.be
      .reverted;
    await expect(ffc.setHouseContract(ethers.constants.AddressZero)).to.be
      .reverted;
  });
});
