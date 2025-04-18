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
} from "./common";

export interface SettlementSurplusAuctioneerInterface extends utils.Interface {
  functions: {
    "accountingEngine()": FunctionFragment;
    "addAuthorization(address)": FunctionFragment;
    "auctionSurplus()": FunctionFragment;
    "authorizedAccounts(address)": FunctionFragment;
    "authorizedAccounts()": FunctionFragment;
    "lastSurplusTime()": FunctionFragment;
    "modifyParameters(bytes32,bytes)": FunctionFragment;
    "removeAuthorization(address)": FunctionFragment;
    "safeEngine()": FunctionFragment;
    "surplusAuctionHouse()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accountingEngine"
      | "addAuthorization"
      | "auctionSurplus"
      | "authorizedAccounts(address)"
      | "authorizedAccounts()"
      | "lastSurplusTime"
      | "modifyParameters"
      | "removeAuthorization"
      | "safeEngine"
      | "surplusAuctionHouse"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accountingEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAuthorization",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "auctionSurplus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedAccounts(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedAccounts()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastSurplusTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modifyParameters",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAuthorization",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "safeEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "surplusAuctionHouse",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "accountingEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auctionSurplus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedAccounts(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedAccounts()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastSurplusTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "surplusAuctionHouse",
    data: BytesLike
  ): Result;

  events: {
    "AddAuthorization(address)": EventFragment;
    "AuctionSurplus(uint256,uint256,uint256)": EventFragment;
    "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
    "RemoveAuthorization(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionSurplus"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
}

export interface AddAuthorizationEventObject {
  _account: string;
}
export type AddAuthorizationEvent = TypedEvent<
  [string],
  AddAuthorizationEventObject
>;

export type AddAuthorizationEventFilter =
  TypedEventFilter<AddAuthorizationEvent>;

export interface AuctionSurplusEventObject {
  _id: BigNumber;
  _lastSurplusAuctionTime: BigNumber;
  _coinBalance: BigNumber;
}
export type AuctionSurplusEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  AuctionSurplusEventObject
>;

export type AuctionSurplusEventFilter = TypedEventFilter<AuctionSurplusEvent>;

export interface ModifyParametersEventObject {
  _param: string;
  _cType: string;
  _data: string;
}
export type ModifyParametersEvent = TypedEvent<
  [string, string, string],
  ModifyParametersEventObject
>;

export type ModifyParametersEventFilter =
  TypedEventFilter<ModifyParametersEvent>;

export interface RemoveAuthorizationEventObject {
  _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<
  [string],
  RemoveAuthorizationEventObject
>;

export type RemoveAuthorizationEventFilter =
  TypedEventFilter<RemoveAuthorizationEvent>;

export interface SettlementSurplusAuctioneer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SettlementSurplusAuctioneerInterface;

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
    accountingEngine(overrides?: CallOverrides): Promise<[string]>;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    auctionSurplus(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _authorized: boolean }>;

    "authorizedAccounts()"(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _accounts: string[] }>;

    lastSurplusTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    safeEngine(overrides?: CallOverrides): Promise<[string]>;

    surplusAuctionHouse(overrides?: CallOverrides): Promise<[string]>;
  };

  accountingEngine(overrides?: CallOverrides): Promise<string>;

  addAuthorization(
    _account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  auctionSurplus(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "authorizedAccounts(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;

  lastSurplusTime(overrides?: CallOverrides): Promise<BigNumber>;

  modifyParameters(
    _param: BytesLike,
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  removeAuthorization(
    _account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  safeEngine(overrides?: CallOverrides): Promise<string>;

  surplusAuctionHouse(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    accountingEngine(overrides?: CallOverrides): Promise<string>;

    addAuthorization(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    auctionSurplus(overrides?: CallOverrides): Promise<BigNumber>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;

    lastSurplusTime(overrides?: CallOverrides): Promise<BigNumber>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAuthorization(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    safeEngine(overrides?: CallOverrides): Promise<string>;

    surplusAuctionHouse(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
    AddAuthorization(_account?: null): AddAuthorizationEventFilter;

    "AuctionSurplus(uint256,uint256,uint256)"(
      _id?: BigNumberish | null,
      _lastSurplusAuctionTime?: null,
      _coinBalance?: null
    ): AuctionSurplusEventFilter;
    AuctionSurplus(
      _id?: BigNumberish | null,
      _lastSurplusAuctionTime?: null,
      _coinBalance?: null
    ): AuctionSurplusEventFilter;

    "ModifyParameters(bytes32,bytes32,bytes)"(
      _param?: BytesLike | null,
      _cType?: BytesLike | null,
      _data?: null
    ): ModifyParametersEventFilter;
    ModifyParameters(
      _param?: BytesLike | null,
      _cType?: BytesLike | null,
      _data?: null
    ): ModifyParametersEventFilter;

    "RemoveAuthorization(address)"(
      _account?: null
    ): RemoveAuthorizationEventFilter;
    RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
  };

  estimateGas: {
    accountingEngine(overrides?: CallOverrides): Promise<BigNumber>;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    auctionSurplus(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastSurplusTime(overrides?: CallOverrides): Promise<BigNumber>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    safeEngine(overrides?: CallOverrides): Promise<BigNumber>;

    surplusAuctionHouse(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountingEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    auctionSurplus(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "authorizedAccounts()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastSurplusTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    surplusAuctionHouse(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
