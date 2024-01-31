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
  PayableOverrides,
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

export interface CounterResolverTaskCreatorWTInterface extends utils.Interface {
  functions: {
    "automate()": FunctionFragment;
    "checker(bytes32)": FunctionFragment;
    "createTask()": FunctionFragment;
    "dedicatedMsgSender()": FunctionFragment;
    "fundsOwner()": FunctionFragment;
    "perfomTask(bytes32)": FunctionFragment;
    "taks(bytes32)": FunctionFragment;
    "taksIdPerAddress(address,uint256)": FunctionFragment;
    "taskTreasury()": FunctionFragment;
    "testPerfomTask(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "automate"
      | "checker"
      | "createTask"
      | "dedicatedMsgSender"
      | "fundsOwner"
      | "perfomTask"
      | "taks"
      | "taksIdPerAddress"
      | "taskTreasury"
      | "testPerfomTask"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "automate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checker",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createTask",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dedicatedMsgSender",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fundsOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "perfomTask",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "taks",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "taksIdPerAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "taskTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testPerfomTask",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "automate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checker", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createTask", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dedicatedMsgSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fundsOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "perfomTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "taks", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "taksIdPerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taskTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "testPerfomTask",
    data: BytesLike
  ): Result;

  events: {
    "CounterTaskCreated(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CounterTaskCreated"): EventFragment;
}

export interface CounterTaskCreatedEventObject {
  taskId: string;
}
export type CounterTaskCreatedEvent = TypedEvent<
  [string],
  CounterTaskCreatedEventObject
>;

export type CounterTaskCreatedEventFilter =
  TypedEventFilter<CounterTaskCreatedEvent>;

export interface CounterResolverTaskCreatorWT extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CounterResolverTaskCreatorWTInterface;

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
    automate(overrides?: CallOverrides): Promise<[string]>;

    checker(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    createTask(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dedicatedMsgSender(overrides?: CallOverrides): Promise<[string]>;

    fundsOwner(overrides?: CallOverrides): Promise<[string]>;

    perfomTask(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    taks(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, boolean] & {
        taskAccomplished: string;
        requestId: string;
        taskId: string;
        waitingPerformTask: boolean;
      }
    >;

    taksIdPerAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    taskTreasury(overrides?: CallOverrides): Promise<[string]>;

    testPerfomTask(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  automate(overrides?: CallOverrides): Promise<string>;

  checker(
    requestId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

  createTask(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dedicatedMsgSender(overrides?: CallOverrides): Promise<string>;

  fundsOwner(overrides?: CallOverrides): Promise<string>;

  perfomTask(
    requestId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  taks(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, boolean] & {
      taskAccomplished: string;
      requestId: string;
      taskId: string;
      waitingPerformTask: boolean;
    }
  >;

  taksIdPerAddress(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  taskTreasury(overrides?: CallOverrides): Promise<string>;

  testPerfomTask(
    requestId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    automate(overrides?: CallOverrides): Promise<string>;

    checker(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    createTask(overrides?: CallOverrides): Promise<void>;

    dedicatedMsgSender(overrides?: CallOverrides): Promise<string>;

    fundsOwner(overrides?: CallOverrides): Promise<string>;

    perfomTask(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    taks(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, boolean] & {
        taskAccomplished: string;
        requestId: string;
        taskId: string;
        waitingPerformTask: boolean;
      }
    >;

    taksIdPerAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    taskTreasury(overrides?: CallOverrides): Promise<string>;

    testPerfomTask(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CounterTaskCreated(bytes32)"(taskId?: null): CounterTaskCreatedEventFilter;
    CounterTaskCreated(taskId?: null): CounterTaskCreatedEventFilter;
  };

  estimateGas: {
    automate(overrides?: CallOverrides): Promise<BigNumber>;

    checker(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createTask(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dedicatedMsgSender(overrides?: CallOverrides): Promise<BigNumber>;

    fundsOwner(overrides?: CallOverrides): Promise<BigNumber>;

    perfomTask(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    taks(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taksIdPerAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taskTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    testPerfomTask(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    automate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checker(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createTask(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dedicatedMsgSender(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fundsOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    perfomTask(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    taks(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taksIdPerAddress(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taskTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    testPerfomTask(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}