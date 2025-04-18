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

export declare namespace IAccountingEngine {
  export type AccountingEngineParamsStruct = {
    surplusIsTransferred: BigNumberish;
    surplusDelay: BigNumberish;
    popDebtDelay: BigNumberish;
    disableCooldown: BigNumberish;
    surplusAmount: BigNumberish;
    surplusBuffer: BigNumberish;
    debtAuctionMintedTokens: BigNumberish;
    debtAuctionBidSize: BigNumberish;
  };

  export type AccountingEngineParamsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    surplusIsTransferred: BigNumber;
    surplusDelay: BigNumber;
    popDebtDelay: BigNumber;
    disableCooldown: BigNumber;
    surplusAmount: BigNumber;
    surplusBuffer: BigNumber;
    debtAuctionMintedTokens: BigNumber;
    debtAuctionBidSize: BigNumber;
  };
}

export interface IAccountingEngineInterface extends utils.Interface {
  functions: {
    "_params()": FunctionFragment;
    "addAuthorization(address)": FunctionFragment;
    "auctionDebt()": FunctionFragment;
    "auctionSurplus()": FunctionFragment;
    "authorizedAccounts(address)": FunctionFragment;
    "authorizedAccounts()": FunctionFragment;
    "cancelAuctionedDebtWithSurplus(uint256)": FunctionFragment;
    "contractEnabled()": FunctionFragment;
    "debtAuctionHouse()": FunctionFragment;
    "debtQueue(uint256)": FunctionFragment;
    "disableContract()": FunctionFragment;
    "disableTimestamp()": FunctionFragment;
    "extraSurplusReceiver()": FunctionFragment;
    "lastSurplusTime()": FunctionFragment;
    "modifyParameters(bytes32,bytes)": FunctionFragment;
    "params()": FunctionFragment;
    "popDebtFromQueue(uint256)": FunctionFragment;
    "postSettlementSurplusDrain()": FunctionFragment;
    "pushDebtToQueue(uint256)": FunctionFragment;
    "removeAuthorization(address)": FunctionFragment;
    "safeEngine()": FunctionFragment;
    "settleDebt(uint256)": FunctionFragment;
    "surplusAuctionHouse()": FunctionFragment;
    "totalOnAuctionDebt()": FunctionFragment;
    "totalQueuedDebt()": FunctionFragment;
    "transferExtraSurplus()": FunctionFragment;
    "transferPostSettlementSurplus()": FunctionFragment;
    "unqueuedUnauctionedDebt()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_params"
      | "addAuthorization"
      | "auctionDebt"
      | "auctionSurplus"
      | "authorizedAccounts(address)"
      | "authorizedAccounts()"
      | "cancelAuctionedDebtWithSurplus"
      | "contractEnabled"
      | "debtAuctionHouse"
      | "debtQueue"
      | "disableContract"
      | "disableTimestamp"
      | "extraSurplusReceiver"
      | "lastSurplusTime"
      | "modifyParameters"
      | "params"
      | "popDebtFromQueue"
      | "postSettlementSurplusDrain"
      | "pushDebtToQueue"
      | "removeAuthorization"
      | "safeEngine"
      | "settleDebt"
      | "surplusAuctionHouse"
      | "totalOnAuctionDebt"
      | "totalQueuedDebt"
      | "transferExtraSurplus"
      | "transferPostSettlementSurplus"
      | "unqueuedUnauctionedDebt"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "_params", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addAuthorization",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "auctionDebt",
    values?: undefined
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
    functionFragment: "cancelAuctionedDebtWithSurplus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contractEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "debtAuctionHouse",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "debtQueue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "disableContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disableTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "extraSurplusReceiver",
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
  encodeFunctionData(functionFragment: "params", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "popDebtFromQueue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "postSettlementSurplusDrain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pushDebtToQueue",
    values: [BigNumberish]
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
    functionFragment: "settleDebt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "surplusAuctionHouse",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalOnAuctionDebt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalQueuedDebt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferExtraSurplus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferPostSettlementSurplus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unqueuedUnauctionedDebt",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auctionDebt",
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
    functionFragment: "cancelAuctionedDebtWithSurplus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "debtAuctionHouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debtQueue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "disableContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extraSurplusReceiver",
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
  decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "popDebtFromQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "postSettlementSurplusDrain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushDebtToQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settleDebt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "surplusAuctionHouse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalOnAuctionDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalQueuedDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferExtraSurplus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferPostSettlementSurplus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unqueuedUnauctionedDebt",
    data: BytesLike
  ): Result;

  events: {
    "AddAuthorization(address)": EventFragment;
    "AuctionDebt(uint256,uint256,uint256)": EventFragment;
    "AuctionSurplus(uint256,uint256,uint256)": EventFragment;
    "CancelDebt(uint256,uint256,uint256)": EventFragment;
    "DisableContract()": EventFragment;
    "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
    "PopDebtFromQueue(uint256,uint256)": EventFragment;
    "PushDebtToQueue(uint256,uint256)": EventFragment;
    "RemoveAuthorization(address)": EventFragment;
    "SettleDebt(uint256,uint256,uint256)": EventFragment;
    "TransferSurplus(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionDebt"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionSurplus"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CancelDebt"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisableContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PopDebtFromQueue"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PushDebtToQueue"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SettleDebt"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSurplus"): EventFragment;
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

export interface AuctionDebtEventObject {
  _id: BigNumber;
  _initialBid: BigNumber;
  _debtAuctioned: BigNumber;
}
export type AuctionDebtEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  AuctionDebtEventObject
>;

export type AuctionDebtEventFilter = TypedEventFilter<AuctionDebtEvent>;

export interface AuctionSurplusEventObject {
  _id: BigNumber;
  _initialBid: BigNumber;
  _surplusAuctioned: BigNumber;
}
export type AuctionSurplusEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  AuctionSurplusEventObject
>;

export type AuctionSurplusEventFilter = TypedEventFilter<AuctionSurplusEvent>;

export interface CancelDebtEventObject {
  _rad: BigNumber;
  _coinBalance: BigNumber;
  _debtBalance: BigNumber;
}
export type CancelDebtEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  CancelDebtEventObject
>;

export type CancelDebtEventFilter = TypedEventFilter<CancelDebtEvent>;

export interface DisableContractEventObject {}
export type DisableContractEvent = TypedEvent<[], DisableContractEventObject>;

export type DisableContractEventFilter = TypedEventFilter<DisableContractEvent>;

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

export interface PopDebtFromQueueEventObject {
  _timestamp: BigNumber;
  _debtAmount: BigNumber;
}
export type PopDebtFromQueueEvent = TypedEvent<
  [BigNumber, BigNumber],
  PopDebtFromQueueEventObject
>;

export type PopDebtFromQueueEventFilter =
  TypedEventFilter<PopDebtFromQueueEvent>;

export interface PushDebtToQueueEventObject {
  _timestamp: BigNumber;
  _debtAmount: BigNumber;
}
export type PushDebtToQueueEvent = TypedEvent<
  [BigNumber, BigNumber],
  PushDebtToQueueEventObject
>;

export type PushDebtToQueueEventFilter = TypedEventFilter<PushDebtToQueueEvent>;

export interface RemoveAuthorizationEventObject {
  _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<
  [string],
  RemoveAuthorizationEventObject
>;

export type RemoveAuthorizationEventFilter =
  TypedEventFilter<RemoveAuthorizationEvent>;

export interface SettleDebtEventObject {
  _rad: BigNumber;
  _coinBalance: BigNumber;
  _debtBalance: BigNumber;
}
export type SettleDebtEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  SettleDebtEventObject
>;

export type SettleDebtEventFilter = TypedEventFilter<SettleDebtEvent>;

export interface TransferSurplusEventObject {
  _extraSurplusReceiver: string;
  _surplusTransferred: BigNumber;
}
export type TransferSurplusEvent = TypedEvent<
  [string, BigNumber],
  TransferSurplusEventObject
>;

export type TransferSurplusEventFilter = TypedEventFilter<TransferSurplusEvent>;

export interface IAccountingEngine extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAccountingEngineInterface;

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
    _params(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        _surplusIsTransferred: BigNumber;
        _surplusDelay: BigNumber;
        _popDebtDelay: BigNumber;
        _disableCooldown: BigNumber;
        _surplusAmount: BigNumber;
        _surplusBuffer: BigNumber;
        _debtAuctionMintedTokens: BigNumber;
        _debtAuctionBidSize: BigNumber;
      }
    >;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    auctionDebt(
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

    cancelAuctionedDebtWithSurplus(
      _rad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    contractEnabled(
      overrides?: CallOverrides
    ): Promise<[boolean] & { _contractEnabled: boolean }>;

    debtAuctionHouse(
      overrides?: CallOverrides
    ): Promise<[string] & { _debtAuctionHouse: string }>;

    debtQueue(
      _blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _debtBlock: BigNumber }>;

    disableContract(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    disableTimestamp(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _disableTimestamp: BigNumber }>;

    extraSurplusReceiver(
      overrides?: CallOverrides
    ): Promise<[string] & { _extraSurplusReceiver: string }>;

    lastSurplusTime(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _lastSurplusTime: BigNumber }>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    params(
      overrides?: CallOverrides
    ): Promise<
      [IAccountingEngine.AccountingEngineParamsStructOutput] & {
        _params: IAccountingEngine.AccountingEngineParamsStructOutput;
      }
    >;

    popDebtFromQueue(
      _debtBlockTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    postSettlementSurplusDrain(
      overrides?: CallOverrides
    ): Promise<[string] & { _postSettlementSurplusDrain: string }>;

    pushDebtToQueue(
      _debtBlock: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    safeEngine(
      overrides?: CallOverrides
    ): Promise<[string] & { _safeEngine: string }>;

    settleDebt(
      _rad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    surplusAuctionHouse(
      overrides?: CallOverrides
    ): Promise<[string] & { _surplusAuctionHouse: string }>;

    totalOnAuctionDebt(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalOnAuctionDebt: BigNumber }>;

    totalQueuedDebt(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalQueuedDebt: BigNumber }>;

    transferExtraSurplus(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferPostSettlementSurplus(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    unqueuedUnauctionedDebt(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _unqueuedUnauctionedDebt: BigNumber }>;
  };

  _params(
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      _surplusIsTransferred: BigNumber;
      _surplusDelay: BigNumber;
      _popDebtDelay: BigNumber;
      _disableCooldown: BigNumber;
      _surplusAmount: BigNumber;
      _surplusBuffer: BigNumber;
      _debtAuctionMintedTokens: BigNumber;
      _debtAuctionBidSize: BigNumber;
    }
  >;

  addAuthorization(
    _account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  auctionDebt(
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

  cancelAuctionedDebtWithSurplus(
    _rad: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  contractEnabled(overrides?: CallOverrides): Promise<boolean>;

  debtAuctionHouse(overrides?: CallOverrides): Promise<string>;

  debtQueue(
    _blockTimestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  disableContract(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  disableTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  extraSurplusReceiver(overrides?: CallOverrides): Promise<string>;

  lastSurplusTime(overrides?: CallOverrides): Promise<BigNumber>;

  modifyParameters(
    _param: BytesLike,
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  params(
    overrides?: CallOverrides
  ): Promise<IAccountingEngine.AccountingEngineParamsStructOutput>;

  popDebtFromQueue(
    _debtBlockTimestamp: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  postSettlementSurplusDrain(overrides?: CallOverrides): Promise<string>;

  pushDebtToQueue(
    _debtBlock: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  removeAuthorization(
    _account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  safeEngine(overrides?: CallOverrides): Promise<string>;

  settleDebt(
    _rad: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  surplusAuctionHouse(overrides?: CallOverrides): Promise<string>;

  totalOnAuctionDebt(overrides?: CallOverrides): Promise<BigNumber>;

  totalQueuedDebt(overrides?: CallOverrides): Promise<BigNumber>;

  transferExtraSurplus(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferPostSettlementSurplus(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  unqueuedUnauctionedDebt(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    _params(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        _surplusIsTransferred: BigNumber;
        _surplusDelay: BigNumber;
        _popDebtDelay: BigNumber;
        _disableCooldown: BigNumber;
        _surplusAmount: BigNumber;
        _surplusBuffer: BigNumber;
        _debtAuctionMintedTokens: BigNumber;
        _debtAuctionBidSize: BigNumber;
      }
    >;

    addAuthorization(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    auctionDebt(overrides?: CallOverrides): Promise<BigNumber>;

    auctionSurplus(overrides?: CallOverrides): Promise<BigNumber>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;

    cancelAuctionedDebtWithSurplus(
      _rad: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    contractEnabled(overrides?: CallOverrides): Promise<boolean>;

    debtAuctionHouse(overrides?: CallOverrides): Promise<string>;

    debtQueue(
      _blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disableContract(overrides?: CallOverrides): Promise<void>;

    disableTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    extraSurplusReceiver(overrides?: CallOverrides): Promise<string>;

    lastSurplusTime(overrides?: CallOverrides): Promise<BigNumber>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    params(
      overrides?: CallOverrides
    ): Promise<IAccountingEngine.AccountingEngineParamsStructOutput>;

    popDebtFromQueue(
      _debtBlockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    postSettlementSurplusDrain(overrides?: CallOverrides): Promise<string>;

    pushDebtToQueue(
      _debtBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAuthorization(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    safeEngine(overrides?: CallOverrides): Promise<string>;

    settleDebt(_rad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    surplusAuctionHouse(overrides?: CallOverrides): Promise<string>;

    totalOnAuctionDebt(overrides?: CallOverrides): Promise<BigNumber>;

    totalQueuedDebt(overrides?: CallOverrides): Promise<BigNumber>;

    transferExtraSurplus(overrides?: CallOverrides): Promise<void>;

    transferPostSettlementSurplus(overrides?: CallOverrides): Promise<void>;

    unqueuedUnauctionedDebt(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
    AddAuthorization(_account?: null): AddAuthorizationEventFilter;

    "AuctionDebt(uint256,uint256,uint256)"(
      _id?: BigNumberish | null,
      _initialBid?: null,
      _debtAuctioned?: null
    ): AuctionDebtEventFilter;
    AuctionDebt(
      _id?: BigNumberish | null,
      _initialBid?: null,
      _debtAuctioned?: null
    ): AuctionDebtEventFilter;

    "AuctionSurplus(uint256,uint256,uint256)"(
      _id?: BigNumberish | null,
      _initialBid?: null,
      _surplusAuctioned?: null
    ): AuctionSurplusEventFilter;
    AuctionSurplus(
      _id?: BigNumberish | null,
      _initialBid?: null,
      _surplusAuctioned?: null
    ): AuctionSurplusEventFilter;

    "CancelDebt(uint256,uint256,uint256)"(
      _rad?: null,
      _coinBalance?: null,
      _debtBalance?: null
    ): CancelDebtEventFilter;
    CancelDebt(
      _rad?: null,
      _coinBalance?: null,
      _debtBalance?: null
    ): CancelDebtEventFilter;

    "DisableContract()"(): DisableContractEventFilter;
    DisableContract(): DisableContractEventFilter;

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

    "PopDebtFromQueue(uint256,uint256)"(
      _timestamp?: BigNumberish | null,
      _debtAmount?: null
    ): PopDebtFromQueueEventFilter;
    PopDebtFromQueue(
      _timestamp?: BigNumberish | null,
      _debtAmount?: null
    ): PopDebtFromQueueEventFilter;

    "PushDebtToQueue(uint256,uint256)"(
      _timestamp?: BigNumberish | null,
      _debtAmount?: null
    ): PushDebtToQueueEventFilter;
    PushDebtToQueue(
      _timestamp?: BigNumberish | null,
      _debtAmount?: null
    ): PushDebtToQueueEventFilter;

    "RemoveAuthorization(address)"(
      _account?: null
    ): RemoveAuthorizationEventFilter;
    RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;

    "SettleDebt(uint256,uint256,uint256)"(
      _rad?: null,
      _coinBalance?: null,
      _debtBalance?: null
    ): SettleDebtEventFilter;
    SettleDebt(
      _rad?: null,
      _coinBalance?: null,
      _debtBalance?: null
    ): SettleDebtEventFilter;

    "TransferSurplus(address,uint256)"(
      _extraSurplusReceiver?: string | null,
      _surplusTransferred?: null
    ): TransferSurplusEventFilter;
    TransferSurplus(
      _extraSurplusReceiver?: string | null,
      _surplusTransferred?: null
    ): TransferSurplusEventFilter;
  };

  estimateGas: {
    _params(overrides?: CallOverrides): Promise<BigNumber>;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    auctionDebt(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    auctionSurplus(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;

    cancelAuctionedDebtWithSurplus(
      _rad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    contractEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    debtAuctionHouse(overrides?: CallOverrides): Promise<BigNumber>;

    debtQueue(
      _blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    disableContract(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    disableTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    extraSurplusReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    lastSurplusTime(overrides?: CallOverrides): Promise<BigNumber>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    params(overrides?: CallOverrides): Promise<BigNumber>;

    popDebtFromQueue(
      _debtBlockTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    postSettlementSurplusDrain(overrides?: CallOverrides): Promise<BigNumber>;

    pushDebtToQueue(
      _debtBlock: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    safeEngine(overrides?: CallOverrides): Promise<BigNumber>;

    settleDebt(
      _rad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    surplusAuctionHouse(overrides?: CallOverrides): Promise<BigNumber>;

    totalOnAuctionDebt(overrides?: CallOverrides): Promise<BigNumber>;

    totalQueuedDebt(overrides?: CallOverrides): Promise<BigNumber>;

    transferExtraSurplus(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferPostSettlementSurplus(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    unqueuedUnauctionedDebt(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    auctionDebt(
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

    cancelAuctionedDebtWithSurplus(
      _rad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    contractEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    debtAuctionHouse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    debtQueue(
      _blockTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    disableContract(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    disableTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    extraSurplusReceiver(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastSurplusTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    params(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    popDebtFromQueue(
      _debtBlockTimestamp: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    postSettlementSurplusDrain(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pushDebtToQueue(
      _debtBlock: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    settleDebt(
      _rad: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    surplusAuctionHouse(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalOnAuctionDebt(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalQueuedDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferExtraSurplus(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferPostSettlementSurplus(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    unqueuedUnauctionedDebt(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
