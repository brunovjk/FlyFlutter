/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { House, HouseInterface } from "../../../contracts/House.sol/House";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "UnauthorizedAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BetReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BetSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "approveBettingContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bettingContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ffc",
    outputs: [
      {
        internalType: "contract FFC",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "receiveBet",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendBet",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bettingContract",
        type: "address",
      },
    ],
    name: "setBettingContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ffcAddress",
        type: "address",
      },
    ],
    name: "setFlyFlutterCoin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalReceived",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a33610029565b60006003819055600455610079565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610704806100886000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638da5cb5b116100715780638da5cb5b1461014857806396d0c18a14610159578063a3c2c4621461016c578063c2252daa14610175578063e69c2d6114610188578063f2fde38b1461019b57600080fd5b806321cb4831146100b95780632209e991146100e957806330fce48b1461010c57806346f990631461011f57806349e455f914610136578063715018a61461013e575b600080fd5b6002546100cc906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100fc6100f736600461060d565b6101ae565b60405190151581526020016100e0565b6100fc61011a366004610637565b6102e0565b61012860045481565b6040519081526020016100e0565b6100fc610339565b6101466103c5565b005b6000546001600160a01b03166100cc565b6100fc610167366004610637565b6103d9565b61012860035481565b6100fc610183366004610659565b610430565b6001546100cc906001600160a01b031681565b6101466101a9366004610637565b6104c9565b6002546000906001600160a01b031633146101dc5760405163585594bb60e11b815260040160405180910390fd5b816000036101fd5760405163162908e360e11b815260040160405180910390fd5b6001546040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610245573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102699190610672565b82111561028957604051631e9acf1760e31b815260040160405180910390fd5b816004600082825461029b919061068b565b909155505060405182906001600160a01b038516907f827b67bfa3659eece896a0f8de203e1363076768330ed10c8e35c5bec25f969290600090a35060015b92915050565b60006102ea610547565b816001600160a01b0381166103125760405163867915ab60e01b815260040160405180910390fd5b600280546001600160a01b0385166001600160a01b03199091161790556001915050919050565b6000610343610547565b60015460025460405163095ea7b360e01b81526001600160a01b039182166004820152612710602482015291169063095ea7b3906044016020604051808303816000875af1158015610399573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103bd91906106ac565b506001905090565b6103cd610547565b6103d760006105a1565b565b60006103e3610547565b816001600160a01b03811661040b5760405163867915ab60e01b815260040160405180910390fd5b600180546001600160a01b0385166001600160a01b0319909116178155915050919050565b6002546000906001600160a01b0316331461045e5760405163585594bb60e11b815260040160405180910390fd5b8160000361047f5760405163162908e360e11b815260040160405180910390fd5b8160036000828254610491919061068b565b909155505060405182907f8a1f3e1fd188913ca10db14d36789a52ea1c918bed66475035e3079cafb0f20390600090a2506001919050565b6104d1610547565b6001600160a01b03811661053b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610544816105a1565b50565b6000546001600160a01b031633146103d75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610532565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461060857600080fd5b919050565b6000806040838503121561062057600080fd5b610629836105f1565b946020939093013593505050565b60006020828403121561064957600080fd5b610652826105f1565b9392505050565b60006020828403121561066b57600080fd5b5035919050565b60006020828403121561068457600080fd5b5051919050565b808201808211156102da57634e487b7160e01b600052601160045260246000fd5b6000602082840312156106be57600080fd5b8151801515811461065257600080fdfea26469706673582212202b31727de944872df4340cb0aec60444e96e63061f31f25cbcf8a0a6801bc01864736f6c63430008130033";

type HouseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HouseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class House__factory extends ContractFactory {
  constructor(...args: HouseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<House> {
    return super.deploy(overrides || {}) as Promise<House>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): House {
    return super.attach(address) as House;
  }
  override connect(signer: Signer): House__factory {
    return super.connect(signer) as House__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HouseInterface {
    return new utils.Interface(_abi) as HouseInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): House {
    return new Contract(address, _abi, signerOrProvider) as House;
  }
}
