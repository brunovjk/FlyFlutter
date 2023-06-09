/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IAirnodeRrpV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAirnodeRrpV0__factory>;
    getContractFactory(
      name: "IAuthorizationUtilsV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAuthorizationUtilsV0__factory>;
    getContractFactory(
      name: "ITemplateUtilsV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITemplateUtilsV0__factory>;
    getContractFactory(
      name: "IWithdrawalUtilsV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWithdrawalUtilsV0__factory>;
    getContractFactory(
      name: "RrpRequesterV0",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RrpRequesterV0__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Betting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Betting__factory>;
    getContractFactory(
      name: "FlyFlutterCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlyFlutterCoin__factory>;
    getContractFactory(
      name: "HouseContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HouseContract__factory>;
    getContractFactory(
      name: "OddsAndEven",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OddsAndEven__factory>;
    getContractFactory(
      name: "FlyFlutterCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlyFlutterCoin__factory>;
    getContractFactory(
      name: "AutomateReady",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomateReady__factory>;
    getContractFactory(
      name: "AutomateTaskCreator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AutomateTaskCreator__factory>;
    getContractFactory(
      name: "BettingContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BettingContract__factory>;
    getContractFactory(
      name: "FlyFlutterCoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FlyFlutterCoin__factory>;
    getContractFactory(
      name: "HouseContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HouseContract__factory>;
    getContractFactory(
      name: "OddsAndEven",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OddsAndEven__factory>;
    getContractFactory(
      name: "CounterResolverTaskCreatorWT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CounterResolverTaskCreatorWT__factory>;
    getContractFactory(
      name: "DummyBetting",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DummyBetting__factory>;
    getContractFactory(
      name: "IHouse",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHouse__factory>;
    getContractFactory(
      name: "RemixQrngExample",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RemixQrngExample__factory>;
    getContractFactory(
      name: "IAutomate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAutomate__factory>;
    getContractFactory(
      name: "IOpsProxyFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOpsProxyFactory__factory>;
    getContractFactory(
      name: "ITaskTreasuryUpgradable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITaskTreasuryUpgradable__factory>;
    getContractFactory(
      name: "FFC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FFC__factory>;
    getContractFactory(
      name: "House",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.House__factory>;
    getContractFactory(
      name: "OddAndEven",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OddAndEven__factory>;

    getContractAt(
      name: "IAirnodeRrpV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAirnodeRrpV0>;
    getContractAt(
      name: "IAuthorizationUtilsV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAuthorizationUtilsV0>;
    getContractAt(
      name: "ITemplateUtilsV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITemplateUtilsV0>;
    getContractAt(
      name: "IWithdrawalUtilsV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWithdrawalUtilsV0>;
    getContractAt(
      name: "RrpRequesterV0",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RrpRequesterV0>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Betting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Betting>;
    getContractAt(
      name: "FlyFlutterCoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlyFlutterCoin>;
    getContractAt(
      name: "HouseContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HouseContract>;
    getContractAt(
      name: "OddsAndEven",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OddsAndEven>;
    getContractAt(
      name: "FlyFlutterCoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlyFlutterCoin>;
    getContractAt(
      name: "AutomateReady",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomateReady>;
    getContractAt(
      name: "AutomateTaskCreator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AutomateTaskCreator>;
    getContractAt(
      name: "BettingContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BettingContract>;
    getContractAt(
      name: "FlyFlutterCoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FlyFlutterCoin>;
    getContractAt(
      name: "HouseContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HouseContract>;
    getContractAt(
      name: "OddsAndEven",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OddsAndEven>;
    getContractAt(
      name: "CounterResolverTaskCreatorWT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CounterResolverTaskCreatorWT>;
    getContractAt(
      name: "DummyBetting",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DummyBetting>;
    getContractAt(
      name: "IHouse",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHouse>;
    getContractAt(
      name: "RemixQrngExample",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RemixQrngExample>;
    getContractAt(
      name: "IAutomate",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAutomate>;
    getContractAt(
      name: "IOpsProxyFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOpsProxyFactory>;
    getContractAt(
      name: "ITaskTreasuryUpgradable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITaskTreasuryUpgradable>;
    getContractAt(
      name: "FFC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FFC>;
    getContractAt(
      name: "House",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.House>;
    getContractAt(
      name: "OddAndEven",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OddAndEven>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
