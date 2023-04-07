/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface OddsAndEvenInterface extends utils.Interface {
  functions: {
    "winner(uint8,uint8,uint8)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "winner"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "winner",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "winner", data: BytesLike): Result;

  events: {};
}

export interface OddsAndEven extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OddsAndEvenInterface;

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
    winner(
      playerHand: PromiseOrValue<BigNumberish>,
      playerGuess: PromiseOrValue<BigNumberish>,
      houseHand: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { winner: string }>;
  };

  winner(
    playerHand: PromiseOrValue<BigNumberish>,
    playerGuess: PromiseOrValue<BigNumberish>,
    houseHand: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    winner(
      playerHand: PromiseOrValue<BigNumberish>,
      playerGuess: PromiseOrValue<BigNumberish>,
      houseHand: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    winner(
      playerHand: PromiseOrValue<BigNumberish>,
      playerGuess: PromiseOrValue<BigNumberish>,
      houseHand: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    winner(
      playerHand: PromiseOrValue<BigNumberish>,
      playerGuess: PromiseOrValue<BigNumberish>,
      houseHand: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
