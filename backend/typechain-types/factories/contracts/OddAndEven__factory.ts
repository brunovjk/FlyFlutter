/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  OddAndEven,
  OddAndEvenInterface,
} from "../../contracts/OddAndEven";

const _abi = [
  {
    inputs: [],
    name: "InvalidGuesses",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidHand",
    type: "error",
  },
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
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6102e061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806304b47eb51461003a575b600080fd5b61004d6100483660046101bc565b610063565b60405161005a91906101ff565b60405180910390f35b606060058460ff161180610075575060005b80610083575060058260ff16115b156100a1576040516366bd2d5f60e01b815260040160405180910390fd5b60ff8316158015906100b757508260ff16600114155b156100d55760405163215f37ff60e01b815260040160405180910390fd5b60006100e1838661024d565b90506100ee60028261027a565b60ff161580156100ff575060ff8416155b1561012d57505060408051808201909152600b81526a506c617965722077696e7360a81b602082015261019f565b61013860028261027a565b60ff16600114801561014d57508360ff166001145b1561017b57505060408051808201909152600b81526a506c617965722077696e7360a81b602082015261019f565b505060408051808201909152600a815269486f7573652077696e7360b01b60208201525b9392505050565b803560ff811681146101b757600080fd5b919050565b6000806000606084860312156101d157600080fd5b6101da846101a6565b92506101e8602085016101a6565b91506101f6604085016101a6565b90509250925092565b600060208083528351808285015260005b8181101561022c57858101830151858201604001528201610210565b506000604082860101526040601f19601f8301168501019250505092915050565b60ff818116838216019081111561027457634e487b7160e01b600052601160045260246000fd5b92915050565b600060ff83168061029b57634e487b7160e01b600052601260045260246000fd5b8060ff8416069150509291505056fea2646970667358221220c779864ebcc9fdeefe9c7ee98c3d0df79323c807dfa6b0ac07ce19275b7dfd1e64736f6c63430008130033";

type OddAndEvenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OddAndEvenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OddAndEven__factory extends ContractFactory {
  constructor(...args: OddAndEvenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OddAndEven> {
    return super.deploy(overrides || {}) as Promise<OddAndEven>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OddAndEven {
    return super.attach(address) as OddAndEven;
  }
  override connect(signer: Signer): OddAndEven__factory {
    return super.connect(signer) as OddAndEven__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OddAndEvenInterface {
    return new utils.Interface(_abi) as OddAndEvenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OddAndEven {
    return new Contract(address, _abi, signerOrProvider) as OddAndEven;
  }
}
