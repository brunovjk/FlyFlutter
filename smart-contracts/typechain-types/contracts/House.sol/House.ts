/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface HouseInterface extends utils.Interface {
  functions: {
    "approveBettingContract()": FunctionFragment;
    "bettingContract()": FunctionFragment;
    "ffc()": FunctionFragment;
    "owner()": FunctionFragment;
    "receiveBet(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sendBet(address,uint256)": FunctionFragment;
    "setBettingContract(address)": FunctionFragment;
    "setFlyFlutterCoin(address)": FunctionFragment;
    "totalReceived()": FunctionFragment;
    "totalSent()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveBettingContract"
      | "bettingContract"
      | "ffc"
      | "owner"
      | "receiveBet"
      | "renounceOwnership"
      | "sendBet"
      | "setBettingContract"
      | "setFlyFlutterCoin"
      | "totalReceived"
      | "totalSent"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveBettingContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bettingContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ffc", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "receiveBet",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendBet",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setBettingContract",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFlyFlutterCoin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalReceived",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "totalSent", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveBettingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bettingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ffc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "receiveBet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendBet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBettingContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFlyFlutterCoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "totalSent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "BetReceived(uint256)": EventFragment;
    "BetSent(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BetReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BetSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface BetReceivedEventObject {
  amount: BigNumber;
}
export type BetReceivedEvent = TypedEvent<[BigNumber], BetReceivedEventObject>;

export type BetReceivedEventFilter = TypedEventFilter<BetReceivedEvent>;

export interface BetSentEventObject {
  recipient: string;
  amount: BigNumber;
}
export type BetSentEvent = TypedEvent<[string, BigNumber], BetSentEventObject>;

export type BetSentEventFilter = TypedEventFilter<BetSentEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface House extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HouseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approveBettingContract(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    bettingContract(overrides?: CallOverrides): Promise<[string]>;

    ffc(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    receiveBet(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendBet(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setBettingContract(
      _bettingContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFlyFlutterCoin(
      _ffcAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalReceived(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSent(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approveBettingContract(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  bettingContract(overrides?: CallOverrides): Promise<string>;

  ffc(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  receiveBet(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendBet(
    recipient: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setBettingContract(
    _bettingContract: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFlyFlutterCoin(
    _ffcAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalReceived(overrides?: CallOverrides): Promise<BigNumber>;

  totalSent(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveBettingContract(overrides?: CallOverrides): Promise<boolean>;

    bettingContract(overrides?: CallOverrides): Promise<string>;

    ffc(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    receiveBet(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sendBet(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setBettingContract(
      _bettingContract: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setFlyFlutterCoin(
      _ffcAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalReceived(overrides?: CallOverrides): Promise<BigNumber>;

    totalSent(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BetReceived(uint256)"(
      amount?: PromiseOrValue<BigNumberish> | null
    ): BetReceivedEventFilter;
    BetReceived(
      amount?: PromiseOrValue<BigNumberish> | null
    ): BetReceivedEventFilter;

    "BetSent(address,uint256)"(
      recipient?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): BetSentEventFilter;
    BetSent(
      recipient?: PromiseOrValue<string> | null,
      amount?: PromiseOrValue<BigNumberish> | null
    ): BetSentEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    approveBettingContract(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    bettingContract(overrides?: CallOverrides): Promise<BigNumber>;

    ffc(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    receiveBet(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendBet(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setBettingContract(
      _bettingContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFlyFlutterCoin(
      _ffcAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalReceived(overrides?: CallOverrides): Promise<BigNumber>;

    totalSent(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveBettingContract(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    bettingContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ffc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receiveBet(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendBet(
      recipient: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setBettingContract(
      _bettingContract: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFlyFlutterCoin(
      _ffcAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalReceived(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}