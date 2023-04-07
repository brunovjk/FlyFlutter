/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  OddsAndEven,
  OddsAndEvenInterface,
} from "../../../contracts/Betting.sol/OddsAndEven";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "playerHand",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "playerGuess",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "houseHand",
        type: "uint8",
      },
    ],
    name: "winner",
    outputs: [
      {
        internalType: "string",
        name: "winner",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class OddsAndEven__factory {
  static readonly abi = _abi;
  static createInterface(): OddsAndEvenInterface {
    return new utils.Interface(_abi) as OddsAndEvenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OddsAndEven {
    return new Contract(address, _abi, signerOrProvider) as OddsAndEven;
  }
}
