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

export declare namespace IGlobalSettlement {
  export type GlobalSettlementParamsStruct = { shutdownCooldown: BigNumberish };

  export type GlobalSettlementParamsStructOutput = [BigNumber] & {
    shutdownCooldown: BigNumber;
  };
}

export interface IGlobalSettlementInterface extends utils.Interface {
  functions: {
    "_params()": FunctionFragment;
    "accountingEngine()": FunctionFragment;
    "addAuthorization(address)": FunctionFragment;
    "authorizedAccounts(address)": FunctionFragment;
    "authorizedAccounts()": FunctionFragment;
    "calculateCashPrice(bytes32)": FunctionFragment;
    "coinBag(address)": FunctionFragment;
    "coinJoin()": FunctionFragment;
    "coinsUsedToRedeem(bytes32,address)": FunctionFragment;
    "collateralAuctionHouseFactory()": FunctionFragment;
    "collateralCashPrice(bytes32)": FunctionFragment;
    "collateralJoinFactory()": FunctionFragment;
    "collateralShortfall(bytes32)": FunctionFragment;
    "collateralTotalDebt(bytes32)": FunctionFragment;
    "contractEnabled()": FunctionFragment;
    "disableContract()": FunctionFragment;
    "fastTrackAuction(bytes32,uint256)": FunctionFragment;
    "finalCoinPerCollateralPrice(bytes32)": FunctionFragment;
    "freeCollateral(bytes32)": FunctionFragment;
    "freezeCollateralType(bytes32)": FunctionFragment;
    "liquidationEngine()": FunctionFragment;
    "modifyParameters(bytes32,bytes)": FunctionFragment;
    "oracleRelayer()": FunctionFragment;
    "outstandingCoinSupply()": FunctionFragment;
    "params()": FunctionFragment;
    "prepareCoinsForRedeeming(uint256)": FunctionFragment;
    "processSAFE(bytes32,address)": FunctionFragment;
    "redeemCollateral(bytes32,uint256)": FunctionFragment;
    "removeAuthorization(address)": FunctionFragment;
    "safeEngine()": FunctionFragment;
    "setOutstandingCoinSupply()": FunctionFragment;
    "shutdownSystem()": FunctionFragment;
    "shutdownTime()": FunctionFragment;
    "stabilityFeeTreasury()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_params"
      | "accountingEngine"
      | "addAuthorization"
      | "authorizedAccounts(address)"
      | "authorizedAccounts()"
      | "calculateCashPrice"
      | "coinBag"
      | "coinJoin"
      | "coinsUsedToRedeem"
      | "collateralAuctionHouseFactory"
      | "collateralCashPrice"
      | "collateralJoinFactory"
      | "collateralShortfall"
      | "collateralTotalDebt"
      | "contractEnabled"
      | "disableContract"
      | "fastTrackAuction"
      | "finalCoinPerCollateralPrice"
      | "freeCollateral"
      | "freezeCollateralType"
      | "liquidationEngine"
      | "modifyParameters"
      | "oracleRelayer"
      | "outstandingCoinSupply"
      | "params"
      | "prepareCoinsForRedeeming"
      | "processSAFE"
      | "redeemCollateral"
      | "removeAuthorization"
      | "safeEngine"
      | "setOutstandingCoinSupply"
      | "shutdownSystem"
      | "shutdownTime"
      | "stabilityFeeTreasury"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "_params", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "accountingEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAuthorization",
    values: [string]
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
    functionFragment: "calculateCashPrice",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "coinBag", values: [string]): string;
  encodeFunctionData(functionFragment: "coinJoin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "coinsUsedToRedeem",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralAuctionHouseFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collateralCashPrice",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralJoinFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collateralShortfall",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralTotalDebt",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "contractEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disableContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fastTrackAuction",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalCoinPerCollateralPrice",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "freeCollateral",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "freezeCollateralType",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modifyParameters",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleRelayer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "outstandingCoinSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "params", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "prepareCoinsForRedeeming",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "processSAFE",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemCollateral",
    values: [BytesLike, BigNumberish]
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
    functionFragment: "setOutstandingCoinSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shutdownSystem",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shutdownTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stabilityFeeTreasury",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "accountingEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAuthorization",
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
    functionFragment: "calculateCashPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "coinBag", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "coinJoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "coinsUsedToRedeem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralAuctionHouseFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralCashPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralJoinFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralShortfall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralTotalDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fastTrackAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalCoinPerCollateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freeCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freezeCollateralType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "outstandingCoinSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "prepareCoinsForRedeeming",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processSAFE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOutstandingCoinSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shutdownSystem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shutdownTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stabilityFeeTreasury",
    data: BytesLike
  ): Result;

  events: {
    "AddAuthorization(address)": EventFragment;
    "CalculateCashPrice(bytes32,uint256)": EventFragment;
    "DisableContract()": EventFragment;
    "FastTrackAuction(bytes32,uint256,uint256)": EventFragment;
    "FreeCollateral(bytes32,address,uint256)": EventFragment;
    "FreezeCollateralType(bytes32,uint256)": EventFragment;
    "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
    "PrepareCoinsForRedeeming(address,uint256)": EventFragment;
    "ProcessSAFE(bytes32,address,uint256)": EventFragment;
    "RedeemCollateral(bytes32,address,uint256,uint256)": EventFragment;
    "RemoveAuthorization(address)": EventFragment;
    "SetOutstandingCoinSupply(uint256)": EventFragment;
    "ShutdownSystem()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CalculateCashPrice"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisableContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FastTrackAuction"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FreeCollateral"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FreezeCollateralType"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PrepareCoinsForRedeeming"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProcessSAFE"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RedeemCollateral"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetOutstandingCoinSupply"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ShutdownSystem"): EventFragment;
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

export interface CalculateCashPriceEventObject {
  _cType: string;
  _collateralCashPrice: BigNumber;
}
export type CalculateCashPriceEvent = TypedEvent<
  [string, BigNumber],
  CalculateCashPriceEventObject
>;

export type CalculateCashPriceEventFilter =
  TypedEventFilter<CalculateCashPriceEvent>;

export interface DisableContractEventObject {}
export type DisableContractEvent = TypedEvent<[], DisableContractEventObject>;

export type DisableContractEventFilter = TypedEventFilter<DisableContractEvent>;

export interface FastTrackAuctionEventObject {
  _cType: string;
  _auctionId: BigNumber;
  _collateralTotalDebt: BigNumber;
}
export type FastTrackAuctionEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  FastTrackAuctionEventObject
>;

export type FastTrackAuctionEventFilter =
  TypedEventFilter<FastTrackAuctionEvent>;

export interface FreeCollateralEventObject {
  _cType: string;
  _sender: string;
  _collateralAmount: BigNumber;
}
export type FreeCollateralEvent = TypedEvent<
  [string, string, BigNumber],
  FreeCollateralEventObject
>;

export type FreeCollateralEventFilter = TypedEventFilter<FreeCollateralEvent>;

export interface FreezeCollateralTypeEventObject {
  _cType: string;
  _finalCoinPerCollateralPrice: BigNumber;
}
export type FreezeCollateralTypeEvent = TypedEvent<
  [string, BigNumber],
  FreezeCollateralTypeEventObject
>;

export type FreezeCollateralTypeEventFilter =
  TypedEventFilter<FreezeCollateralTypeEvent>;

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

export interface PrepareCoinsForRedeemingEventObject {
  _sender: string;
  _coinBag: BigNumber;
}
export type PrepareCoinsForRedeemingEvent = TypedEvent<
  [string, BigNumber],
  PrepareCoinsForRedeemingEventObject
>;

export type PrepareCoinsForRedeemingEventFilter =
  TypedEventFilter<PrepareCoinsForRedeemingEvent>;

export interface ProcessSAFEEventObject {
  _cType: string;
  _safe: string;
  _collateralShortfall: BigNumber;
}
export type ProcessSAFEEvent = TypedEvent<
  [string, string, BigNumber],
  ProcessSAFEEventObject
>;

export type ProcessSAFEEventFilter = TypedEventFilter<ProcessSAFEEvent>;

export interface RedeemCollateralEventObject {
  _cType: string;
  _sender: string;
  _coinsAmount: BigNumber;
  _collateralAmount: BigNumber;
}
export type RedeemCollateralEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  RedeemCollateralEventObject
>;

export type RedeemCollateralEventFilter =
  TypedEventFilter<RedeemCollateralEvent>;

export interface RemoveAuthorizationEventObject {
  _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<
  [string],
  RemoveAuthorizationEventObject
>;

export type RemoveAuthorizationEventFilter =
  TypedEventFilter<RemoveAuthorizationEvent>;

export interface SetOutstandingCoinSupplyEventObject {
  _outstandingCoinSupply: BigNumber;
}
export type SetOutstandingCoinSupplyEvent = TypedEvent<
  [BigNumber],
  SetOutstandingCoinSupplyEventObject
>;

export type SetOutstandingCoinSupplyEventFilter =
  TypedEventFilter<SetOutstandingCoinSupplyEvent>;

export interface ShutdownSystemEventObject {}
export type ShutdownSystemEvent = TypedEvent<[], ShutdownSystemEventObject>;

export type ShutdownSystemEventFilter = TypedEventFilter<ShutdownSystemEvent>;

export interface IGlobalSettlement extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGlobalSettlementInterface;

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
    ): Promise<[BigNumber] & { _shutdownCooldown: BigNumber }>;

    accountingEngine(
      overrides?: CallOverrides
    ): Promise<[string] & { _accountingEngine: string }>;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _authorized: boolean }>;

    "authorizedAccounts()"(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _accounts: string[] }>;

    calculateCashPrice(
      _cType: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    coinBag(
      _coinHolder: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _coinBag: BigNumber }>;

    coinJoin(
      overrides?: CallOverrides
    ): Promise<[string] & { _coinJoin: string }>;

    coinsUsedToRedeem(
      _cType: BytesLike,
      _coinHolder: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _coinsUsedToRedeem: BigNumber }>;

    collateralAuctionHouseFactory(
      overrides?: CallOverrides
    ): Promise<[string] & { _collateralAuctionHouseFactory: string }>;

    collateralCashPrice(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _collateralCashPrice: BigNumber }>;

    collateralJoinFactory(
      overrides?: CallOverrides
    ): Promise<[string] & { _collateralJoinFactory: string }>;

    collateralShortfall(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _collateralShortfall: BigNumber }>;

    collateralTotalDebt(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _collateralTotalDebt: BigNumber }>;

    contractEnabled(
      overrides?: CallOverrides
    ): Promise<[boolean] & { _contractEnabled: boolean }>;

    disableContract(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    fastTrackAuction(
      _cType: BytesLike,
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    finalCoinPerCollateralPrice(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _finalCoinPerCollateralPrice: BigNumber }>;

    freeCollateral(
      _cType: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    freezeCollateralType(
      _cType: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    liquidationEngine(
      overrides?: CallOverrides
    ): Promise<[string] & { _liquidationEngine: string }>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    oracleRelayer(
      overrides?: CallOverrides
    ): Promise<[string] & { _oracleRelayer: string }>;

    outstandingCoinSupply(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _outstandingCoinSupply: BigNumber }>;

    params(
      overrides?: CallOverrides
    ): Promise<
      [IGlobalSettlement.GlobalSettlementParamsStructOutput] & {
        _globalSettlementParams: IGlobalSettlement.GlobalSettlementParamsStructOutput;
      }
    >;

    prepareCoinsForRedeeming(
      _coinAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    processSAFE(
      _cType: BytesLike,
      _safe: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    redeemCollateral(
      _cType: BytesLike,
      _coinsAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    safeEngine(
      overrides?: CallOverrides
    ): Promise<[string] & { _safeEngine: string }>;

    setOutstandingCoinSupply(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    shutdownSystem(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    shutdownTime(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _shutdownTime: BigNumber }>;

    stabilityFeeTreasury(
      overrides?: CallOverrides
    ): Promise<[string] & { _stabilityFeeTreasury: string }>;
  };

  _params(overrides?: CallOverrides): Promise<BigNumber>;

  accountingEngine(overrides?: CallOverrides): Promise<string>;

  addAuthorization(
    _account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "authorizedAccounts(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;

  calculateCashPrice(
    _cType: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  coinBag(_coinHolder: string, overrides?: CallOverrides): Promise<BigNumber>;

  coinJoin(overrides?: CallOverrides): Promise<string>;

  coinsUsedToRedeem(
    _cType: BytesLike,
    _coinHolder: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collateralAuctionHouseFactory(overrides?: CallOverrides): Promise<string>;

  collateralCashPrice(
    _cType: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collateralJoinFactory(overrides?: CallOverrides): Promise<string>;

  collateralShortfall(
    _cType: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collateralTotalDebt(
    _cType: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  contractEnabled(overrides?: CallOverrides): Promise<boolean>;

  disableContract(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  fastTrackAuction(
    _cType: BytesLike,
    _auctionId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  finalCoinPerCollateralPrice(
    _cType: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  freeCollateral(
    _cType: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  freezeCollateralType(
    _cType: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  liquidationEngine(overrides?: CallOverrides): Promise<string>;

  modifyParameters(
    _param: BytesLike,
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  oracleRelayer(overrides?: CallOverrides): Promise<string>;

  outstandingCoinSupply(overrides?: CallOverrides): Promise<BigNumber>;

  params(
    overrides?: CallOverrides
  ): Promise<IGlobalSettlement.GlobalSettlementParamsStructOutput>;

  prepareCoinsForRedeeming(
    _coinAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  processSAFE(
    _cType: BytesLike,
    _safe: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  redeemCollateral(
    _cType: BytesLike,
    _coinsAmount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  removeAuthorization(
    _account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  safeEngine(overrides?: CallOverrides): Promise<string>;

  setOutstandingCoinSupply(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  shutdownSystem(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  shutdownTime(overrides?: CallOverrides): Promise<BigNumber>;

  stabilityFeeTreasury(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _params(overrides?: CallOverrides): Promise<BigNumber>;

    accountingEngine(overrides?: CallOverrides): Promise<string>;

    addAuthorization(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;

    calculateCashPrice(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    coinBag(_coinHolder: string, overrides?: CallOverrides): Promise<BigNumber>;

    coinJoin(overrides?: CallOverrides): Promise<string>;

    coinsUsedToRedeem(
      _cType: BytesLike,
      _coinHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralAuctionHouseFactory(overrides?: CallOverrides): Promise<string>;

    collateralCashPrice(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralJoinFactory(overrides?: CallOverrides): Promise<string>;

    collateralShortfall(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralTotalDebt(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractEnabled(overrides?: CallOverrides): Promise<boolean>;

    disableContract(overrides?: CallOverrides): Promise<void>;

    fastTrackAuction(
      _cType: BytesLike,
      _auctionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    finalCoinPerCollateralPrice(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    freeCollateral(_cType: BytesLike, overrides?: CallOverrides): Promise<void>;

    freezeCollateralType(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidationEngine(overrides?: CallOverrides): Promise<string>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    oracleRelayer(overrides?: CallOverrides): Promise<string>;

    outstandingCoinSupply(overrides?: CallOverrides): Promise<BigNumber>;

    params(
      overrides?: CallOverrides
    ): Promise<IGlobalSettlement.GlobalSettlementParamsStructOutput>;

    prepareCoinsForRedeeming(
      _coinAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    processSAFE(
      _cType: BytesLike,
      _safe: string,
      overrides?: CallOverrides
    ): Promise<void>;

    redeemCollateral(
      _cType: BytesLike,
      _coinsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAuthorization(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    safeEngine(overrides?: CallOverrides): Promise<string>;

    setOutstandingCoinSupply(overrides?: CallOverrides): Promise<void>;

    shutdownSystem(overrides?: CallOverrides): Promise<void>;

    shutdownTime(overrides?: CallOverrides): Promise<BigNumber>;

    stabilityFeeTreasury(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
    AddAuthorization(_account?: null): AddAuthorizationEventFilter;

    "CalculateCashPrice(bytes32,uint256)"(
      _cType?: BytesLike | null,
      _collateralCashPrice?: null
    ): CalculateCashPriceEventFilter;
    CalculateCashPrice(
      _cType?: BytesLike | null,
      _collateralCashPrice?: null
    ): CalculateCashPriceEventFilter;

    "DisableContract()"(): DisableContractEventFilter;
    DisableContract(): DisableContractEventFilter;

    "FastTrackAuction(bytes32,uint256,uint256)"(
      _cType?: BytesLike | null,
      _auctionId?: BigNumberish | null,
      _collateralTotalDebt?: null
    ): FastTrackAuctionEventFilter;
    FastTrackAuction(
      _cType?: BytesLike | null,
      _auctionId?: BigNumberish | null,
      _collateralTotalDebt?: null
    ): FastTrackAuctionEventFilter;

    "FreeCollateral(bytes32,address,uint256)"(
      _cType?: BytesLike | null,
      _sender?: string | null,
      _collateralAmount?: null
    ): FreeCollateralEventFilter;
    FreeCollateral(
      _cType?: BytesLike | null,
      _sender?: string | null,
      _collateralAmount?: null
    ): FreeCollateralEventFilter;

    "FreezeCollateralType(bytes32,uint256)"(
      _cType?: BytesLike | null,
      _finalCoinPerCollateralPrice?: null
    ): FreezeCollateralTypeEventFilter;
    FreezeCollateralType(
      _cType?: BytesLike | null,
      _finalCoinPerCollateralPrice?: null
    ): FreezeCollateralTypeEventFilter;

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

    "PrepareCoinsForRedeeming(address,uint256)"(
      _sender?: string | null,
      _coinBag?: null
    ): PrepareCoinsForRedeemingEventFilter;
    PrepareCoinsForRedeeming(
      _sender?: string | null,
      _coinBag?: null
    ): PrepareCoinsForRedeemingEventFilter;

    "ProcessSAFE(bytes32,address,uint256)"(
      _cType?: BytesLike | null,
      _safe?: string | null,
      _collateralShortfall?: null
    ): ProcessSAFEEventFilter;
    ProcessSAFE(
      _cType?: BytesLike | null,
      _safe?: string | null,
      _collateralShortfall?: null
    ): ProcessSAFEEventFilter;

    "RedeemCollateral(bytes32,address,uint256,uint256)"(
      _cType?: BytesLike | null,
      _sender?: string | null,
      _coinsAmount?: null,
      _collateralAmount?: null
    ): RedeemCollateralEventFilter;
    RedeemCollateral(
      _cType?: BytesLike | null,
      _sender?: string | null,
      _coinsAmount?: null,
      _collateralAmount?: null
    ): RedeemCollateralEventFilter;

    "RemoveAuthorization(address)"(
      _account?: null
    ): RemoveAuthorizationEventFilter;
    RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;

    "SetOutstandingCoinSupply(uint256)"(
      _outstandingCoinSupply?: null
    ): SetOutstandingCoinSupplyEventFilter;
    SetOutstandingCoinSupply(
      _outstandingCoinSupply?: null
    ): SetOutstandingCoinSupplyEventFilter;

    "ShutdownSystem()"(): ShutdownSystemEventFilter;
    ShutdownSystem(): ShutdownSystemEventFilter;
  };

  estimateGas: {
    _params(overrides?: CallOverrides): Promise<BigNumber>;

    accountingEngine(overrides?: CallOverrides): Promise<BigNumber>;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;

    calculateCashPrice(
      _cType: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    coinBag(_coinHolder: string, overrides?: CallOverrides): Promise<BigNumber>;

    coinJoin(overrides?: CallOverrides): Promise<BigNumber>;

    coinsUsedToRedeem(
      _cType: BytesLike,
      _coinHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralAuctionHouseFactory(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralCashPrice(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralJoinFactory(overrides?: CallOverrides): Promise<BigNumber>;

    collateralShortfall(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralTotalDebt(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    contractEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    disableContract(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    fastTrackAuction(
      _cType: BytesLike,
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    finalCoinPerCollateralPrice(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    freeCollateral(
      _cType: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    freezeCollateralType(
      _cType: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    liquidationEngine(overrides?: CallOverrides): Promise<BigNumber>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    oracleRelayer(overrides?: CallOverrides): Promise<BigNumber>;

    outstandingCoinSupply(overrides?: CallOverrides): Promise<BigNumber>;

    params(overrides?: CallOverrides): Promise<BigNumber>;

    prepareCoinsForRedeeming(
      _coinAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    processSAFE(
      _cType: BytesLike,
      _safe: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    redeemCollateral(
      _cType: BytesLike,
      _coinsAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    safeEngine(overrides?: CallOverrides): Promise<BigNumber>;

    setOutstandingCoinSupply(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    shutdownSystem(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    shutdownTime(overrides?: CallOverrides): Promise<BigNumber>;

    stabilityFeeTreasury(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accountingEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "authorizedAccounts()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateCashPrice(
      _cType: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    coinBag(
      _coinHolder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    coinJoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    coinsUsedToRedeem(
      _cType: BytesLike,
      _coinHolder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralAuctionHouseFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralCashPrice(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralJoinFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralShortfall(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralTotalDebt(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    contractEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disableContract(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    fastTrackAuction(
      _cType: BytesLike,
      _auctionId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    finalCoinPerCollateralPrice(
      _cType: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    freeCollateral(
      _cType: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    freezeCollateralType(
      _cType: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    liquidationEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    modifyParameters(
      _param: BytesLike,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    oracleRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    outstandingCoinSupply(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    params(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prepareCoinsForRedeeming(
      _coinAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    processSAFE(
      _cType: BytesLike,
      _safe: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    redeemCollateral(
      _cType: BytesLike,
      _coinsAmount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOutstandingCoinSupply(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    shutdownSystem(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    shutdownTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stabilityFeeTreasury(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
