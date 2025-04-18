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

export declare namespace IDebtAuctionHouse {
  export type DebtAuctionHouseParamsStruct = {
    bidDecrease: BigNumberish;
    amountSoldIncrease: BigNumberish;
    bidDuration: BigNumberish;
    totalAuctionLength: BigNumberish;
  };

  export type DebtAuctionHouseParamsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    bidDecrease: BigNumber;
    amountSoldIncrease: BigNumber;
    bidDuration: BigNumber;
    totalAuctionLength: BigNumber;
  };

  export type AuctionStruct = {
    bidAmount: BigNumberish;
    amountToSell: BigNumberish;
    highBidder: string;
    bidExpiry: BigNumberish;
    auctionDeadline: BigNumberish;
  };

  export type AuctionStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber
  ] & {
    bidAmount: BigNumber;
    amountToSell: BigNumber;
    highBidder: string;
    bidExpiry: BigNumber;
    auctionDeadline: BigNumber;
  };
}

export interface DebtAuctionHouseInterface extends utils.Interface {
  functions: {
    "AUCTION_HOUSE_TYPE()": FunctionFragment;
    "_auctions(uint256)": FunctionFragment;
    "_params()": FunctionFragment;
    "accountingEngine()": FunctionFragment;
    "activeDebtAuctions()": FunctionFragment;
    "addAuthorization(address)": FunctionFragment;
    "auctions(uint256)": FunctionFragment;
    "auctionsStarted()": FunctionFragment;
    "authorizedAccounts(address)": FunctionFragment;
    "authorizedAccounts()": FunctionFragment;
    "contractEnabled()": FunctionFragment;
    "decreaseSoldAmount(uint256,uint256)": FunctionFragment;
    "disableContract()": FunctionFragment;
    "modifyParameters(bytes32,bytes)": FunctionFragment;
    "params()": FunctionFragment;
    "protocolToken()": FunctionFragment;
    "removeAuthorization(address)": FunctionFragment;
    "restartAuction(uint256)": FunctionFragment;
    "safeEngine()": FunctionFragment;
    "settleAuction(uint256)": FunctionFragment;
    "startAuction(address,uint256,uint256)": FunctionFragment;
    "terminateAuctionPrematurely(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AUCTION_HOUSE_TYPE"
      | "_auctions"
      | "_params"
      | "accountingEngine"
      | "activeDebtAuctions"
      | "addAuthorization"
      | "auctions"
      | "auctionsStarted"
      | "authorizedAccounts(address)"
      | "authorizedAccounts()"
      | "contractEnabled"
      | "decreaseSoldAmount"
      | "disableContract"
      | "modifyParameters"
      | "params"
      | "protocolToken"
      | "removeAuthorization"
      | "restartAuction"
      | "safeEngine"
      | "settleAuction"
      | "startAuction"
      | "terminateAuctionPrematurely"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "AUCTION_HOUSE_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_auctions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "_params", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "accountingEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activeDebtAuctions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAuthorization",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "auctions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "auctionsStarted",
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
    functionFragment: "contractEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseSoldAmount",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "disableContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modifyParameters",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "params", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "protocolToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeAuthorization",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "restartAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "settleAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startAuction",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "terminateAuctionPrematurely",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "AUCTION_HOUSE_TYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_auctions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "accountingEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeDebtAuctions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "auctions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "auctionsStarted",
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
    functionFragment: "contractEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseSoldAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restartAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "settleAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "terminateAuctionPrematurely",
    data: BytesLike
  ): Result;

  events: {
    "AddAuthorization(address)": EventFragment;
    "DecreaseSoldAmount(uint256,address,uint256,uint256,uint256,uint256)": EventFragment;
    "DisableContract()": EventFragment;
    "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
    "RemoveAuthorization(address)": EventFragment;
    "RestartAuction(uint256,uint256,uint256)": EventFragment;
    "SettleAuction(uint256,uint256,address,uint256)": EventFragment;
    "StartAuction(uint256,address,uint256,uint256,uint256,uint256)": EventFragment;
    "TerminateAuctionPrematurely(uint256,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DecreaseSoldAmount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisableContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RestartAuction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SettleAuction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StartAuction"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TerminateAuctionPrematurely"
  ): EventFragment;
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

export interface DecreaseSoldAmountEventObject {
  _id: BigNumber;
  _bidder: string;
  _blockTimestamp: BigNumber;
  _raisedAmount: BigNumber;
  _soldAmount: BigNumber;
  _bidExpiry: BigNumber;
}
export type DecreaseSoldAmountEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber],
  DecreaseSoldAmountEventObject
>;

export type DecreaseSoldAmountEventFilter =
  TypedEventFilter<DecreaseSoldAmountEvent>;

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

export interface RemoveAuthorizationEventObject {
  _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<
  [string],
  RemoveAuthorizationEventObject
>;

export type RemoveAuthorizationEventFilter =
  TypedEventFilter<RemoveAuthorizationEvent>;

export interface RestartAuctionEventObject {
  _id: BigNumber;
  _blockTimestamp: BigNumber;
  _auctionDeadline: BigNumber;
}
export type RestartAuctionEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  RestartAuctionEventObject
>;

export type RestartAuctionEventFilter = TypedEventFilter<RestartAuctionEvent>;

export interface SettleAuctionEventObject {
  _id: BigNumber;
  _blockTimestamp: BigNumber;
  _highBidder: string;
  _raisedAmount: BigNumber;
}
export type SettleAuctionEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  SettleAuctionEventObject
>;

export type SettleAuctionEventFilter = TypedEventFilter<SettleAuctionEvent>;

export interface StartAuctionEventObject {
  _id: BigNumber;
  _auctioneer: string;
  _blockTimestamp: BigNumber;
  _amountToSell: BigNumber;
  _amountToRaise: BigNumber;
  _auctionDeadline: BigNumber;
}
export type StartAuctionEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber],
  StartAuctionEventObject
>;

export type StartAuctionEventFilter = TypedEventFilter<StartAuctionEvent>;

export interface TerminateAuctionPrematurelyEventObject {
  _id: BigNumber;
  _blockTimestamp: BigNumber;
  _highBidder: string;
  _raisedAmount: BigNumber;
}
export type TerminateAuctionPrematurelyEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  TerminateAuctionPrematurelyEventObject
>;

export type TerminateAuctionPrematurelyEventFilter =
  TypedEventFilter<TerminateAuctionPrematurelyEvent>;

export interface DebtAuctionHouse extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DebtAuctionHouseInterface;

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
    AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<[string]>;

    _auctions(
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, BigNumber] & {
        bidAmount: BigNumber;
        amountToSell: BigNumber;
        highBidder: string;
        bidExpiry: BigNumber;
        auctionDeadline: BigNumber;
      }
    >;

    _params(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bidDecrease: BigNumber;
        amountSoldIncrease: BigNumber;
        bidDuration: BigNumber;
        totalAuctionLength: BigNumber;
      }
    >;

    accountingEngine(overrides?: CallOverrides): Promise<[string]>;

    activeDebtAuctions(overrides?: CallOverrides): Promise<[BigNumber]>;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    auctions(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [IDebtAuctionHouse.AuctionStructOutput] & {
        _auction: IDebtAuctionHouse.AuctionStructOutput;
      }
    >;

    auctionsStarted(overrides?: CallOverrides): Promise<[BigNumber]>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _authorized: boolean }>;

    "authorizedAccounts()"(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _accounts: string[] }>;

    contractEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    decreaseSoldAmount(
      _id: BigNumberish,
      _amountToBuy: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    disableContract(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    params(
      overrides?: CallOverrides
    ): Promise<
      [IDebtAuctionHouse.DebtAuctionHouseParamsStructOutput] & {
        _dahParams: IDebtAuctionHouse.DebtAuctionHouseParamsStructOutput;
      }
    >;

    protocolToken(overrides?: CallOverrides): Promise<[string]>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    restartAuction(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    safeEngine(overrides?: CallOverrides): Promise<[string]>;

    settleAuction(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    startAuction(
      _incomeReceiver: string,
      _amountToSell: BigNumberish,
      _initialBid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    terminateAuctionPrematurely(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<string>;

  _auctions(
    _auctionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, BigNumber, BigNumber] & {
      bidAmount: BigNumber;
      amountToSell: BigNumber;
      highBidder: string;
      bidExpiry: BigNumber;
      auctionDeadline: BigNumber;
    }
  >;

  _params(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      bidDecrease: BigNumber;
      amountSoldIncrease: BigNumber;
      bidDuration: BigNumber;
      totalAuctionLength: BigNumber;
    }
  >;

  accountingEngine(overrides?: CallOverrides): Promise<string>;

  activeDebtAuctions(overrides?: CallOverrides): Promise<BigNumber>;

  addAuthorization(
    _account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  auctions(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<IDebtAuctionHouse.AuctionStructOutput>;

  auctionsStarted(overrides?: CallOverrides): Promise<BigNumber>;

  "authorizedAccounts(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;

  contractEnabled(overrides?: CallOverrides): Promise<boolean>;

  decreaseSoldAmount(
    _id: BigNumberish,
    _amountToBuy: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  disableContract(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  modifyParameters(
    _param: BytesLike,
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  params(
    overrides?: CallOverrides
  ): Promise<IDebtAuctionHouse.DebtAuctionHouseParamsStructOutput>;

  protocolToken(overrides?: CallOverrides): Promise<string>;

  removeAuthorization(
    _account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  restartAuction(
    _id: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  safeEngine(overrides?: CallOverrides): Promise<string>;

  settleAuction(
    _id: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  startAuction(
    _incomeReceiver: string,
    _amountToSell: BigNumberish,
    _initialBid: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  terminateAuctionPrematurely(
    _id: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<string>;

    _auctions(
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, BigNumber, BigNumber] & {
        bidAmount: BigNumber;
        amountToSell: BigNumber;
        highBidder: string;
        bidExpiry: BigNumber;
        auctionDeadline: BigNumber;
      }
    >;

    _params(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        bidDecrease: BigNumber;
        amountSoldIncrease: BigNumber;
        bidDuration: BigNumber;
        totalAuctionLength: BigNumber;
      }
    >;

    accountingEngine(overrides?: CallOverrides): Promise<string>;

    activeDebtAuctions(overrides?: CallOverrides): Promise<BigNumber>;

    addAuthorization(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    auctions(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<IDebtAuctionHouse.AuctionStructOutput>;

    auctionsStarted(overrides?: CallOverrides): Promise<BigNumber>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;

    contractEnabled(overrides?: CallOverrides): Promise<boolean>;

    decreaseSoldAmount(
      _id: BigNumberish,
      _amountToBuy: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    disableContract(overrides?: CallOverrides): Promise<void>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    params(
      overrides?: CallOverrides
    ): Promise<IDebtAuctionHouse.DebtAuctionHouseParamsStructOutput>;

    protocolToken(overrides?: CallOverrides): Promise<string>;

    removeAuthorization(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    restartAuction(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    safeEngine(overrides?: CallOverrides): Promise<string>;

    settleAuction(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    startAuction(
      _incomeReceiver: string,
      _amountToSell: BigNumberish,
      _initialBid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    terminateAuctionPrematurely(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
    AddAuthorization(_account?: null): AddAuthorizationEventFilter;

    "DecreaseSoldAmount(uint256,address,uint256,uint256,uint256,uint256)"(
      _id?: BigNumberish | null,
      _bidder?: null,
      _blockTimestamp?: null,
      _raisedAmount?: null,
      _soldAmount?: null,
      _bidExpiry?: null
    ): DecreaseSoldAmountEventFilter;
    DecreaseSoldAmount(
      _id?: BigNumberish | null,
      _bidder?: null,
      _blockTimestamp?: null,
      _raisedAmount?: null,
      _soldAmount?: null,
      _bidExpiry?: null
    ): DecreaseSoldAmountEventFilter;

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

    "RemoveAuthorization(address)"(
      _account?: null
    ): RemoveAuthorizationEventFilter;
    RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;

    "RestartAuction(uint256,uint256,uint256)"(
      _id?: BigNumberish | null,
      _blockTimestamp?: null,
      _auctionDeadline?: null
    ): RestartAuctionEventFilter;
    RestartAuction(
      _id?: BigNumberish | null,
      _blockTimestamp?: null,
      _auctionDeadline?: null
    ): RestartAuctionEventFilter;

    "SettleAuction(uint256,uint256,address,uint256)"(
      _id?: BigNumberish | null,
      _blockTimestamp?: null,
      _highBidder?: null,
      _raisedAmount?: null
    ): SettleAuctionEventFilter;
    SettleAuction(
      _id?: BigNumberish | null,
      _blockTimestamp?: null,
      _highBidder?: null,
      _raisedAmount?: null
    ): SettleAuctionEventFilter;

    "StartAuction(uint256,address,uint256,uint256,uint256,uint256)"(
      _id?: BigNumberish | null,
      _auctioneer?: string | null,
      _blockTimestamp?: null,
      _amountToSell?: null,
      _amountToRaise?: null,
      _auctionDeadline?: null
    ): StartAuctionEventFilter;
    StartAuction(
      _id?: BigNumberish | null,
      _auctioneer?: string | null,
      _blockTimestamp?: null,
      _amountToSell?: null,
      _amountToRaise?: null,
      _auctionDeadline?: null
    ): StartAuctionEventFilter;

    "TerminateAuctionPrematurely(uint256,uint256,address,uint256)"(
      _id?: BigNumberish | null,
      _blockTimestamp?: null,
      _highBidder?: null,
      _raisedAmount?: null
    ): TerminateAuctionPrematurelyEventFilter;
    TerminateAuctionPrematurely(
      _id?: BigNumberish | null,
      _blockTimestamp?: null,
      _highBidder?: null,
      _raisedAmount?: null
    ): TerminateAuctionPrematurelyEventFilter;
  };

  estimateGas: {
    AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<BigNumber>;

    _auctions(
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _params(overrides?: CallOverrides): Promise<BigNumber>;

    accountingEngine(overrides?: CallOverrides): Promise<BigNumber>;

    activeDebtAuctions(overrides?: CallOverrides): Promise<BigNumber>;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    auctions(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    auctionsStarted(overrides?: CallOverrides): Promise<BigNumber>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;

    contractEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseSoldAmount(
      _id: BigNumberish,
      _amountToBuy: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    disableContract(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    params(overrides?: CallOverrides): Promise<BigNumber>;

    protocolToken(overrides?: CallOverrides): Promise<BigNumber>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    restartAuction(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    safeEngine(overrides?: CallOverrides): Promise<BigNumber>;

    settleAuction(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    startAuction(
      _incomeReceiver: string,
      _amountToSell: BigNumberish,
      _initialBid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    terminateAuctionPrematurely(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AUCTION_HOUSE_TYPE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _auctions(
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accountingEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activeDebtAuctions(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    auctions(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    auctionsStarted(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "authorizedAccounts()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseSoldAmount(
      _id: BigNumberish,
      _amountToBuy: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    disableContract(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    params(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    restartAuction(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    settleAuction(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    startAuction(
      _incomeReceiver: string,
      _amountToSell: BigNumberish,
      _initialBid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    terminateAuctionPrematurely(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
