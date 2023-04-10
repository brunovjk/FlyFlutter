import { ethers, run } from "hardhat";

async function main() {
  const betFee = ethers.utils.parseEther("0.01");
  const qrngFee = ethers.utils.parseEther("0.005");
  const AirnodeRrpV0_Nodary_Mumbai =
    "0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd";
  const Automate_Mumbai = "0xB3f5503f93d5Ef84b06993a1975B9D21B962892F";

  const airnode_Nodary = "0x6238772544f029ecaBfDED4300f13A3c4FE84E1D";
  const endpointIdUint256_Nodary =
    "0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78";

  const verifying = true;
  const houseAddress = "0x8dd49685c8EA4cb4fE910d3BB223C0F10549F5e5";
  const ffcAddress = "0xa3e40d9AfeD50B0971781D5d40525010c981324F";
  const oddAndEvenAddress = "0xaC94c48DEd4544627786B97c18D89192f6E9040b";
  const bettingAddress = "0xA1B26BA7e525B51eD7786f5b1937262fA13dE869";
  const sponsorWallet = "0xA52201Bb06f6B5340978771580F3FFc82Cf64D9f";

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
        AirnodeRrpV0_Nodary_Mumbai,
        Automate_Mumbai,
        ffc.address,
        deployer.address,
        house.address,
        oddAndEven.address
      );
  await betting.deployed();
  console.log(`Betting Contract deployed to ${betting.address}`);

  // npx @api3/airnode-admin derive-sponsor-wallet-address \
  // --airnode-xpub xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo \
  // --airnode-address 0x6238772544f029ecaBfDED4300f13A3c4FE84E1D \
  // --sponsor-address betting.address
  // Sponsor wallet address: <output>

  if (verifying) {
    console.log("Setting Parameters...");
    await house.setBettingContract(bettingAddress);
    await house.setFlyFlutterCoin(ffcAddress);
    await ffc.setBettingContract(bettingAddress);
    await betting.setRequestParameters(
      airnode_Nodary,
      endpointIdUint256_Nodary,
      sponsorWallet
    );

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
        AirnodeRrpV0_Nodary_Mumbai,
        Automate_Mumbai,
        ffcAddress,
        deployer.address,
        houseAddress,
        oddAndEvenAddress,
      ],
    });

    console.log("Approving Betting contract...");
    await house.approveBettingContract();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
