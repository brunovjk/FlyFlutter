import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import dotenv from "dotenv";

dotenv.config();

const {
  MUMBAI_RPC_ENDPOINT,
  POLYGON_RPC_ENDPOINT,
  PRIVATE_KEY,
  POLYGONSCAN_API_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygonMumbai: {
      url: MUMBAI_RPC_ENDPOINT,
      chainId: 80001,
      accounts: [PRIVATE_KEY],
    },
    polygon: {
      url: POLYGON_RPC_ENDPOINT,
      chainId: 137,
      accounts: [PRIVATE_KEY],
      gasPrice: 8000000000,
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_KEY,
      polygon: POLYGONSCAN_API_KEY,
    },
  },
};

export default config;
