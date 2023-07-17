import { ethers, run } from "hardhat";

async function main() {
  const betFee = ethers.utils.parseEther("0.01");
  const qrngFee = ethers.utils.parseEther("0.005");
  const AirnodeRrpV0_Polygon = "0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd";
  const Automate_Polygon = "0x527a819db1eb0e34426297b03bae11F2f8B3A19E";

  const airnode_ANU = "0x9d3C147cA16DB954873A498e0af5852AB39139f2";
  const endpointIdUint256_ANU =
    "0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78";

  const verifying = true;
  const houseAddress = "0x33C8Dd92700965bDdfe5BebB074590ee57cBcA3D";
  const ffcAddress = "0x12c7159ee5Cb747859b96620cA5DEa971aa47c66";
  const oddAndEvenAddress = "0x94163fB9d8E2D7466f2336DfA03E017a9d2ebd33";
  const bettingAddress = "0x5ae80EE70bCA0fCda0d4913E9E969c053ecd1e90";
  const sponsorWallet = "0xD192D7686Daf1635070E8Bd35bBa9123D66681Ed";

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
        AirnodeRrpV0_Polygon,
        Automate_Polygon,
        ffc.address,
        deployer.address,
        house.address,
        oddAndEven.address
      );
  await betting.deployed();
  console.log(`Betting Contract deployed to ${betting.address}`);

  // npx @api3/airnode-admin derive-sponsor-wallet-address
  // --airnode-xpub xpub6DXSDTZBd4aPVXnv6Q3SmnGUweFv6j24SK77W4qrSFuhGgi666awUiXakjXruUSCDQhhctVG7AQt67gMdaRAsDnDXv23bBRKsMWvRzo6kbf
  // --airnode-address 0x9d3C147cA16DB954873A498e0af5852AB39139f2
  // --sponsor-address 0x5ae80EE70bCA0fCda0d4913E9E969c053ecd1e90
  // Sponsor wallet address: <output>

  if (verifying) {
    console.log("Setting Parameters...");
    await house.setBettingContract(bettingAddress);
    await house.setFlyFlutterCoin(ffcAddress);
    await ffc.setBettingContract(bettingAddress);
    await betting.setRequestParameters(
      airnode_ANU,
      endpointIdUint256_ANU,
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
        AirnodeRrpV0_Polygon,
        Automate_Polygon,
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
