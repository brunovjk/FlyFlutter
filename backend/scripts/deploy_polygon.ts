import { ethers, run } from "hardhat";

async function main() {
  const betFee = ethers.utils.parseEther("0.01");
  const qrngFee = ethers.utils.parseEther("0.005");
  const AirnodeRrpV0_Nodary_Polygon = "";
  const Automate_Polygon = "";

  const airnode_Nodary = "";
  const endpointIdUint256_Nodary = "";

  const verifying = false;
  const houseAddress = "";
  const ffcAddress = "";
  const oddAndEvenAddress = "";
  const bettingAddress = "";
  const sponsorWallet = "";

  // Check deployer
  const [deployer] = await ethers.getSigners();
  console.log("Deployer: " + deployer.address);

  const bal = await deployer.getBalance();
  console.log("Deployer balance: " + bal);

  // Deploy House contract
  console.log("Deploying House contract...");
  const House = await ethers.getContractFactory("contracts/House.sol:House");
  let house = verifying
    ? await House.attach(houseAddress)
    : await House.deploy();
  await house.deployed();
  console.log(`House Contract deployed to ${house.address}`);

  // Deploy FlyFlutterCoin contract
  console.log("Deploying FlyFlutterCoin contract...");
  const FlyFlutterCoin = await ethers.getContractFactory(
    "contracts/FlyFlutterCoin.sol:FlyFlutterCoin"
  );
  let ffc = verifying
    ? await FlyFlutterCoin.attach(ffcAddress)
    : await FlyFlutterCoin.deploy(house.address);
  await ffc.deployed();
  console.log(`FlyFlutterCoin Contract deployed to ${ffc.address}`);

  // Deploy OddAndEven contract
  console.log("Deploying OddAndEven contract...");
  const OddAndEven = await ethers.getContractFactory(
    "contracts/OddAndEven.sol:OddAndEven"
  );
  let oddAndEven = verifying
    ? await OddAndEven.attach(oddAndEvenAddress)
    : await OddAndEven.deploy();
  await oddAndEven.deployed();
  console.log(`OddAndEven Contract deployed to ${oddAndEven.address}`);

  // Deploy Betting contract
  console.log("Deploying Betting contract...");
  const Betting = await ethers.getContractFactory(
    "contracts/Betting.sol:Betting"
  );
  let betting = verifying
    ? await Betting.attach(bettingAddress)
    : await Betting.deploy(
        betFee,
        qrngFee,
        AirnodeRrpV0_Nodary_Polygon,
        Automate_Polygon,
        ffc.address,
        deployer.address,
        house.address,
        oddAndEven.address
      );
  await betting.deployed();
  console.log(`Betting Contract deployed to ${betting.address}`);

  // npx @api3/airnode-admin derive-sponsor-wallet-address \
  // --airnode-xpub Get Polygon values \
  // --airnode-address Get Polygon values \
  // --sponsor-address betting.address
  // Sponsor wallet address: <output>

  if (verifying) {
    console.log("Verifying contracts...");
    await run("verify:verify", {
      address: house.address,
      contract: "contracts/House.sol:House",
      constructorArguments: [],
    });

    await run("verify:verify", {
      address: ffc.address,
      contract: "contracts/FlyFlutterCoin.sol:FlyFlutterCoin",
      constructorArguments: [houseAddress],
    });

    await run("verify:verify", {
      address: oddAndEven.address,
      contract: "contracts/OddAndEven.sol:OddAndEven",
      constructorArguments: [],
    });

    await run("verify:verify", {
      address: betting.address,
      contract: "contracts/Betting.sol:Betting",
      constructorArguments: [
        betFee,
        qrngFee,
        AirnodeRrpV0_Nodary_Polygon,
        Automate_Polygon,
        ffcAddress,
        deployer.address,
        houseAddress,
        oddAndEvenAddress,
      ],
    });

    console.log("Setting Parameters...");
    await house.setBettingContract(bettingAddress);
    await house.setFlyFlutterCoin(ffcAddress);
    await ffc.setBettingContract(bettingAddress);
    await betting.setRequestParameters(
      airnode_Nodary,
      endpointIdUint256_Nodary,
      sponsorWallet
    );

    console.log("Approving Betting contract...");
    await house.approveBettingContract();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
