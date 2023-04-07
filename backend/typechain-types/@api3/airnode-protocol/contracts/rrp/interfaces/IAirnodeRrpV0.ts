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
} from "../../../../../common";

export interface IAirnodeRrpV0Interface extends utils.Interface {
  functions: {
    "checkAuthorizationStatus(address[],address,bytes32,bytes32,address,address)": FunctionFragment;
    "checkAuthorizationStatuses(address[],address,bytes32[],bytes32[],address[],address[])": FunctionFragment;
    "createTemplate(address,bytes32,bytes)": FunctionFragment;
    "fail(bytes32,address,address,bytes4,string)": FunctionFragment;
    "fulfill(bytes32,address,address,bytes4,bytes,bytes)": FunctionFragment;
    "fulfillWithdrawal(bytes32,address,address)": FunctionFragment;
    "getTemplates(bytes32[])": FunctionFragment;
    "makeFullRequest(address,bytes32,address,address,address,bytes4,bytes)": FunctionFragment;
    "makeTemplateRequest(bytes32,address,address,address,bytes4,bytes)": FunctionFragment;
    "requestIsAwaitingFulfillment(bytes32)": FunctionFragment;
    "requestWithdrawal(address,address)": FunctionFragment;
    "requesterToRequestCountPlusOne(address)": FunctionFragment;
    "setSponsorshipStatus(address,bool)": FunctionFragment;
    "sponsorToRequesterToSponsorshipStatus(address,address)": FunctionFragment;
    "sponsorToWithdrawalRequestCount(address)": FunctionFragment;
    "templates(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "checkAuthorizationStatus"
      | "checkAuthorizationStatuses"
      | "createTemplate"
      | "fail"
      | "fulfill"
      | "fulfillWithdrawal"
      | "getTemplates"
      | "makeFullRequest"
      | "makeTemplateRequest"
      | "requestIsAwaitingFulfillment"
      | "requestWithdrawal"
      | "requesterToRequestCountPlusOne"
      | "setSponsorshipStatus"
      | "sponsorToRequesterToSponsorshipStatus"
      | "sponsorToWithdrawalRequestCount"
      | "templates"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkAuthorizationStatus",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "checkAuthorizationStatuses",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<string>[],
      PromiseOrValue<string>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createTemplate",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fail",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfill",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillWithdrawal",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTemplates",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "makeFullRequest",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "makeTemplateRequest",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "requestIsAwaitingFulfillment",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "requestWithdrawal",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "requesterToRequestCountPlusOne",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSponsorshipStatus",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "sponsorToRequesterToSponsorshipStatus",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "sponsorToWithdrawalRequestCount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "templates",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkAuthorizationStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkAuthorizationStatuses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createTemplate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fail", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fulfillWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTemplates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makeFullRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "makeTemplateRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestIsAwaitingFulfillment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requesterToRequestCountPlusOne",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSponsorshipStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sponsorToRequesterToSponsorshipStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sponsorToWithdrawalRequestCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "templates", data: BytesLike): Result;

  events: {
    "CreatedTemplate(bytes32,address,bytes32,bytes)": EventFragment;
    "FailedRequest(address,bytes32,string)": EventFragment;
    "FulfilledRequest(address,bytes32,bytes)": EventFragment;
    "FulfilledWithdrawal(address,address,bytes32,address,uint256)": EventFragment;
    "MadeFullRequest(address,bytes32,uint256,uint256,address,bytes32,address,address,address,bytes4,bytes)": EventFragment;
    "MadeTemplateRequest(address,bytes32,uint256,uint256,address,bytes32,address,address,address,bytes4,bytes)": EventFragment;
    "RequestedWithdrawal(address,address,bytes32,address)": EventFragment;
    "SetSponsorshipStatus(address,address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreatedTemplate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FailedRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FulfilledRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FulfilledWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MadeFullRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MadeTemplateRequest"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestedWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetSponsorshipStatus"): EventFragment;
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

export interface FailedRequestEventObject {
  airnode: string;
  requestId: string;
  errorMessage: string;
}
export type FailedRequestEvent = TypedEvent<
  [string, string, string],
  FailedRequestEventObject
>;

export type FailedRequestEventFilter = TypedEventFilter<FailedRequestEvent>;

export interface FulfilledRequestEventObject {
  airnode: string;
  requestId: string;
  data: string;
}
export type FulfilledRequestEvent = TypedEvent<
  [string, string, string],
  FulfilledRequestEventObject
>;

export type FulfilledRequestEventFilter =
  TypedEventFilter<FulfilledRequestEvent>;

export interface FulfilledWithdrawalEventObject {
  airnode: string;
  sponsor: string;
  withdrawalRequestId: string;
  sponsorWallet: string;
  amount: BigNumber;
}
export type FulfilledWithdrawalEvent = TypedEvent<
  [string, string, string, string, BigNumber],
  FulfilledWithdrawalEventObject
>;

export type FulfilledWithdrawalEventFilter =
  TypedEventFilter<FulfilledWithdrawalEvent>;

export interface MadeFullRequestEventObject {
  airnode: string;
  requestId: string;
  requesterRequestCount: BigNumber;
  chainId: BigNumber;
  requester: string;
  endpointId: string;
  sponsor: string;
  sponsorWallet: string;
  fulfillAddress: string;
  fulfillFunctionId: string;
  parameters: string;
}
export type MadeFullRequestEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ],
  MadeFullRequestEventObject
>;

export type MadeFullRequestEventFilter = TypedEventFilter<MadeFullRequestEvent>;

export interface MadeTemplateRequestEventObject {
  airnode: string;
  requestId: string;
  requesterRequestCount: BigNumber;
  chainId: BigNumber;
  requester: string;
  templateId: string;
  sponsor: string;
  sponsorWallet: string;
  fulfillAddress: string;
  fulfillFunctionId: string;
  parameters: string;
}
export type MadeTemplateRequestEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ],
  MadeTemplateRequestEventObject
>;

export type MadeTemplateRequestEventFilter =
  TypedEventFilter<MadeTemplateRequestEvent>;

export interface RequestedWithdrawalEventObject {
  airnode: string;
  sponsor: string;
  withdrawalRequestId: string;
  sponsorWallet: string;
}
export type RequestedWithdrawalEvent = TypedEvent<
  [string, string, string, string],
  RequestedWithdrawalEventObject
>;

export type RequestedWithdrawalEventFilter =
  TypedEventFilter<RequestedWithdrawalEvent>;

export interface SetSponsorshipStatusEventObject {
  sponsor: string;
  requester: string;
  sponsorshipStatus: boolean;
}
export type SetSponsorshipStatusEvent = TypedEvent<
  [string, string, boolean],
  SetSponsorshipStatusEventObject
>;

export type SetSponsorshipStatusEventFilter =
  TypedEventFilter<SetSponsorshipStatusEvent>;

export interface IAirnodeRrpV0 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAirnodeRrpV0Interface;

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
    checkAuthorizationStatus(
      authorizers: PromiseOrValue<string>[],
      airnode: PromiseOrValue<string>,
      requestId: PromiseOrValue<BytesLike>,
      endpointId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { status: boolean }>;

    checkAuthorizationStatuses(
      authorizers: PromiseOrValue<string>[],
      airnode: PromiseOrValue<string>,
      requestIds: PromiseOrValue<BytesLike>[],
      endpointIds: PromiseOrValue<BytesLike>[],
      sponsors: PromiseOrValue<string>[],
      requesters: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[boolean[]] & { statuses: boolean[] }>;

    createTemplate(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fail(
      requestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      errorMessage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fulfill(
      requestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fulfillWithdrawal(
      withdrawalRequestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      sponsor: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
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

    makeFullRequest(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    makeTemplateRequest(
      templateId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestIsAwaitingFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isAwaitingFulfillment: boolean }>;

    requestWithdrawal(
      airnode: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requesterToRequestCountPlusOne(
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { requestCountPlusOne: BigNumber }>;

    setSponsorshipStatus(
      requester: PromiseOrValue<string>,
      sponsorshipStatus: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sponsorToRequesterToSponsorshipStatus(
      sponsor: PromiseOrValue<string>,
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { sponsorshipStatus: boolean }>;

    sponsorToWithdrawalRequestCount(
      sponsor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { withdrawalRequestCount: BigNumber }>;

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

  checkAuthorizationStatus(
    authorizers: PromiseOrValue<string>[],
    airnode: PromiseOrValue<string>,
    requestId: PromiseOrValue<BytesLike>,
    endpointId: PromiseOrValue<BytesLike>,
    sponsor: PromiseOrValue<string>,
    requester: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  checkAuthorizationStatuses(
    authorizers: PromiseOrValue<string>[],
    airnode: PromiseOrValue<string>,
    requestIds: PromiseOrValue<BytesLike>[],
    endpointIds: PromiseOrValue<BytesLike>[],
    sponsors: PromiseOrValue<string>[],
    requesters: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  createTemplate(
    airnode: PromiseOrValue<string>,
    endpointId: PromiseOrValue<BytesLike>,
    parameters: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fail(
    requestId: PromiseOrValue<BytesLike>,
    airnode: PromiseOrValue<string>,
    fulfillAddress: PromiseOrValue<string>,
    fulfillFunctionId: PromiseOrValue<BytesLike>,
    errorMessage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fulfill(
    requestId: PromiseOrValue<BytesLike>,
    airnode: PromiseOrValue<string>,
    fulfillAddress: PromiseOrValue<string>,
    fulfillFunctionId: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fulfillWithdrawal(
    withdrawalRequestId: PromiseOrValue<BytesLike>,
    airnode: PromiseOrValue<string>,
    sponsor: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
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

  makeFullRequest(
    airnode: PromiseOrValue<string>,
    endpointId: PromiseOrValue<BytesLike>,
    sponsor: PromiseOrValue<string>,
    sponsorWallet: PromiseOrValue<string>,
    fulfillAddress: PromiseOrValue<string>,
    fulfillFunctionId: PromiseOrValue<BytesLike>,
    parameters: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  makeTemplateRequest(
    templateId: PromiseOrValue<BytesLike>,
    sponsor: PromiseOrValue<string>,
    sponsorWallet: PromiseOrValue<string>,
    fulfillAddress: PromiseOrValue<string>,
    fulfillFunctionId: PromiseOrValue<BytesLike>,
    parameters: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestIsAwaitingFulfillment(
    requestId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  requestWithdrawal(
    airnode: PromiseOrValue<string>,
    sponsorWallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requesterToRequestCountPlusOne(
    requester: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setSponsorshipStatus(
    requester: PromiseOrValue<string>,
    sponsorshipStatus: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sponsorToRequesterToSponsorshipStatus(
    sponsor: PromiseOrValue<string>,
    requester: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  sponsorToWithdrawalRequestCount(
    sponsor: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

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
    checkAuthorizationStatus(
      authorizers: PromiseOrValue<string>[],
      airnode: PromiseOrValue<string>,
      requestId: PromiseOrValue<BytesLike>,
      endpointId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    checkAuthorizationStatuses(
      authorizers: PromiseOrValue<string>[],
      airnode: PromiseOrValue<string>,
      requestIds: PromiseOrValue<BytesLike>[],
      endpointIds: PromiseOrValue<BytesLike>[],
      sponsors: PromiseOrValue<string>[],
      requesters: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    createTemplate(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    fail(
      requestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      errorMessage: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    fulfill(
      requestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { callSuccess: boolean; callData: string }>;

    fulfillWithdrawal(
      withdrawalRequestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      sponsor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

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

    makeFullRequest(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    makeTemplateRequest(
      templateId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    requestIsAwaitingFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    requestWithdrawal(
      airnode: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    requesterToRequestCountPlusOne(
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setSponsorshipStatus(
      requester: PromiseOrValue<string>,
      sponsorshipStatus: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    sponsorToRequesterToSponsorshipStatus(
      sponsor: PromiseOrValue<string>,
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    sponsorToWithdrawalRequestCount(
      sponsor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

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

    "FailedRequest(address,bytes32,string)"(
      airnode?: PromiseOrValue<string> | null,
      requestId?: PromiseOrValue<BytesLike> | null,
      errorMessage?: null
    ): FailedRequestEventFilter;
    FailedRequest(
      airnode?: PromiseOrValue<string> | null,
      requestId?: PromiseOrValue<BytesLike> | null,
      errorMessage?: null
    ): FailedRequestEventFilter;

    "FulfilledRequest(address,bytes32,bytes)"(
      airnode?: PromiseOrValue<string> | null,
      requestId?: PromiseOrValue<BytesLike> | null,
      data?: null
    ): FulfilledRequestEventFilter;
    FulfilledRequest(
      airnode?: PromiseOrValue<string> | null,
      requestId?: PromiseOrValue<BytesLike> | null,
      data?: null
    ): FulfilledRequestEventFilter;

    "FulfilledWithdrawal(address,address,bytes32,address,uint256)"(
      airnode?: PromiseOrValue<string> | null,
      sponsor?: PromiseOrValue<string> | null,
      withdrawalRequestId?: PromiseOrValue<BytesLike> | null,
      sponsorWallet?: null,
      amount?: null
    ): FulfilledWithdrawalEventFilter;
    FulfilledWithdrawal(
      airnode?: PromiseOrValue<string> | null,
      sponsor?: PromiseOrValue<string> | null,
      withdrawalRequestId?: PromiseOrValue<BytesLike> | null,
      sponsorWallet?: null,
      amount?: null
    ): FulfilledWithdrawalEventFilter;

    "MadeFullRequest(address,bytes32,uint256,uint256,address,bytes32,address,address,address,bytes4,bytes)"(
      airnode?: PromiseOrValue<string> | null,
      requestId?: PromiseOrValue<BytesLike> | null,
      requesterRequestCount?: null,
      chainId?: null,
      requester?: null,
      endpointId?: null,
      sponsor?: null,
      sponsorWallet?: null,
      fulfillAddress?: null,
      fulfillFunctionId?: null,
      parameters?: null
    ): MadeFullRequestEventFilter;
    MadeFullRequest(
      airnode?: PromiseOrValue<string> | null,
      requestId?: PromiseOrValue<BytesLike> | null,
      requesterRequestCount?: null,
      chainId?: null,
      requester?: null,
      endpointId?: null,
      sponsor?: null,
      sponsorWallet?: null,
      fulfillAddress?: null,
      fulfillFunctionId?: null,
      parameters?: null
    ): MadeFullRequestEventFilter;

    "MadeTemplateRequest(address,bytes32,uint256,uint256,address,bytes32,address,address,address,bytes4,bytes)"(
      airnode?: PromiseOrValue<string> | null,
      requestId?: PromiseOrValue<BytesLike> | null,
      requesterRequestCount?: null,
      chainId?: null,
      requester?: null,
      templateId?: null,
      sponsor?: null,
      sponsorWallet?: null,
      fulfillAddress?: null,
      fulfillFunctionId?: null,
      parameters?: null
    ): MadeTemplateRequestEventFilter;
    MadeTemplateRequest(
      airnode?: PromiseOrValue<string> | null,
      requestId?: PromiseOrValue<BytesLike> | null,
      requesterRequestCount?: null,
      chainId?: null,
      requester?: null,
      templateId?: null,
      sponsor?: null,
      sponsorWallet?: null,
      fulfillAddress?: null,
      fulfillFunctionId?: null,
      parameters?: null
    ): MadeTemplateRequestEventFilter;

    "RequestedWithdrawal(address,address,bytes32,address)"(
      airnode?: PromiseOrValue<string> | null,
      sponsor?: PromiseOrValue<string> | null,
      withdrawalRequestId?: PromiseOrValue<BytesLike> | null,
      sponsorWallet?: null
    ): RequestedWithdrawalEventFilter;
    RequestedWithdrawal(
      airnode?: PromiseOrValue<string> | null,
      sponsor?: PromiseOrValue<string> | null,
      withdrawalRequestId?: PromiseOrValue<BytesLike> | null,
      sponsorWallet?: null
    ): RequestedWithdrawalEventFilter;

    "SetSponsorshipStatus(address,address,bool)"(
      sponsor?: PromiseOrValue<string> | null,
      requester?: PromiseOrValue<string> | null,
      sponsorshipStatus?: null
    ): SetSponsorshipStatusEventFilter;
    SetSponsorshipStatus(
      sponsor?: PromiseOrValue<string> | null,
      requester?: PromiseOrValue<string> | null,
      sponsorshipStatus?: null
    ): SetSponsorshipStatusEventFilter;
  };

  estimateGas: {
    checkAuthorizationStatus(
      authorizers: PromiseOrValue<string>[],
      airnode: PromiseOrValue<string>,
      requestId: PromiseOrValue<BytesLike>,
      endpointId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkAuthorizationStatuses(
      authorizers: PromiseOrValue<string>[],
      airnode: PromiseOrValue<string>,
      requestIds: PromiseOrValue<BytesLike>[],
      endpointIds: PromiseOrValue<BytesLike>[],
      sponsors: PromiseOrValue<string>[],
      requesters: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createTemplate(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fail(
      requestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      errorMessage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fulfill(
      requestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fulfillWithdrawal(
      withdrawalRequestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      sponsor: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getTemplates(
      templateIds: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    makeFullRequest(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    makeTemplateRequest(
      templateId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestIsAwaitingFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requestWithdrawal(
      airnode: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requesterToRequestCountPlusOne(
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setSponsorshipStatus(
      requester: PromiseOrValue<string>,
      sponsorshipStatus: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sponsorToRequesterToSponsorshipStatus(
      sponsor: PromiseOrValue<string>,
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sponsorToWithdrawalRequestCount(
      sponsor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    templates(
      templateId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkAuthorizationStatus(
      authorizers: PromiseOrValue<string>[],
      airnode: PromiseOrValue<string>,
      requestId: PromiseOrValue<BytesLike>,
      endpointId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkAuthorizationStatuses(
      authorizers: PromiseOrValue<string>[],
      airnode: PromiseOrValue<string>,
      requestIds: PromiseOrValue<BytesLike>[],
      endpointIds: PromiseOrValue<BytesLike>[],
      sponsors: PromiseOrValue<string>[],
      requesters: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createTemplate(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fail(
      requestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      errorMessage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fulfill(
      requestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fulfillWithdrawal(
      withdrawalRequestId: PromiseOrValue<BytesLike>,
      airnode: PromiseOrValue<string>,
      sponsor: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getTemplates(
      templateIds: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    makeFullRequest(
      airnode: PromiseOrValue<string>,
      endpointId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    makeTemplateRequest(
      templateId: PromiseOrValue<BytesLike>,
      sponsor: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      fulfillAddress: PromiseOrValue<string>,
      fulfillFunctionId: PromiseOrValue<BytesLike>,
      parameters: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestIsAwaitingFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestWithdrawal(
      airnode: PromiseOrValue<string>,
      sponsorWallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requesterToRequestCountPlusOne(
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setSponsorshipStatus(
      requester: PromiseOrValue<string>,
      sponsorshipStatus: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sponsorToRequesterToSponsorshipStatus(
      sponsor: PromiseOrValue<string>,
      requester: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sponsorToWithdrawalRequestCount(
      sponsor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    templates(
      templateId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
