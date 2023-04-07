/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../../../../common";

export interface ITemplateUtilsV0Interface extends utils.Interface {
  functions: {
    "createTemplate(address,bytes32,bytes)": FunctionFragment;
    "getTemplates(bytes32[])": FunctionFragment;
    "templates(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createTemplate" | "getTemplates" | "templates"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createTemplate",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTemplates",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "templates",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createTemplate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTemplates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "templates", data: BytesLike): Result;

  events: {
    "CreatedTemplate(bytes32,address,bytes32,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreatedTemplate"): EventFragment;
}

export interface CreatedTemplateEventObject {
  templateId: string;
  airnode: string;
  endpointId: string;
  parameters: string;
}
export type CreatedTemplateEvent = TypedEvent<
  [string, string, string, string],
  CreatedTemplateEventObject
>;

export type CreatedTemplateEventFilter = TypedEventFilter<CreatedTemplateEvent>;

export interface ITemplateUtilsV0 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITemplateUtilsV0Interface;

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
    createTemplate(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getTemplates(
      templateIds: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], string[]] & {
        airnodes: string[];
        endpointIds: string[];
        parameters: string[];
      }
    >;

    templates(
      templateId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        airnode: string;
        endpointId: string;
        parameters: string;
      }
    >;
  };

  createTemplate(
    airnode: PromiseOrValue<string>,
    endpointId: PromiseOrValue<BytesLike>,
    parameters: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getTemplates(
    templateIds: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<
    [string[], string[], string[]] & {
      airnodes: string[];
      endpointIds: string[];
      parameters: string[];
    }
  >;

  templates(
    templateId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      airnode: string;
      endpointId: string;
      parameters: string;
    }
  >;

  callStatic: {
    createTemplate(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTemplates(
      templateIds: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<
      [string[], string[], string[]] & {
        airnodes: string[];
        endpointIds: string[];
        parameters: string[];
      }
    >;

    templates(
      templateId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        airnode: string;
        endpointId: string;
        parameters: string;
      }
    >;
  };

  filters: {
    "CreatedTemplate(bytes32,address,bytes32,bytes)"(
      templateId?: PromiseOrValue<BytesLike> | null,
      airnode?: null,
      endpointId?: null,
      parameters?: null
    ): CreatedTemplateEventFilter;
    CreatedTemplate(
      templateId?: PromiseOrValue<BytesLike> | null,
      airnode?: null,
      endpointId?: null,
      parameters?: null
    ): CreatedTemplateEventFilter;
  };

  estimateGas: {
    createTemplate(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getTemplates(
      templateIds: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    templates(
      templateId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createTemplate(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getTemplates(
      templateIds: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    templates(
      templateId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
