/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace IStabilityFeeTreasury {
  export type AllowanceStruct = { total: BigNumberish; perHour: BigNumberish };

  export type AllowanceStructOutput = [total: bigint, perHour: bigint] & {
    total: bigint;
    perHour: bigint;
  };

  export type StabilityFeeTreasuryParamsStruct = {
    treasuryCapacity: BigNumberish;
    pullFundsMinThreshold: BigNumberish;
    surplusTransferDelay: BigNumberish;
  };

  export type StabilityFeeTreasuryParamsStructOutput = [
    treasuryCapacity: bigint,
    pullFundsMinThreshold: bigint,
    surplusTransferDelay: bigint
  ] & {
    treasuryCapacity: bigint;
    pullFundsMinThreshold: bigint;
    surplusTransferDelay: bigint;
  };
}

export interface IStabilityFeeTreasuryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_allowance"
      | "_params"
      | "addAuthorization"
      | "allowance"
      | "authorizedAccounts(address)"
      | "authorizedAccounts()"
      | "coinJoin"
      | "contractEnabled"
      | "disableContract"
      | "extraSurplusReceiver"
      | "giveFunds"
      | "latestSurplusTransferTime"
      | "modifyParameters"
      | "params"
      | "pullFunds"
      | "pulledPerHour"
      | "removeAuthorization"
      | "safeEngine"
      | "setPerHourAllowance"
      | "setTotalAllowance"
      | "settleDebt"
      | "systemCoin"
      | "takeFunds"
      | "transferSurplusFunds"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddAuthorization"
      | "DisableContract"
      | "GiveFunds"
      | "JoinCoins"
      | "ModifyParameters"
      | "PullFunds"
      | "RemoveAuthorization"
      | "SetPerHourAllowance"
      | "SetTotalAllowance"
      | "SettleDebt"
      | "TakeFunds"
      | "TransferSurplusFunds"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "_allowance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "_params", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addAuthorization",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedAccounts(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedAccounts()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "coinJoin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "contractEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disableContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "extraSurplusReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "giveFunds",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestSurplusTransferTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modifyParameters",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "params", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pullFunds",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pulledPerHour",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAuthorization",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPerHourAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTotalAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "settleDebt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "systemCoin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "takeFunds",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferSurplusFunds",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "_allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authorizedAccounts(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedAccounts()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "coinJoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contractEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extraSurplusReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "giveFunds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestSurplusTransferTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pullFunds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pulledPerHour",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPerHourAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTotalAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "settleDebt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "systemCoin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "takeFunds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferSurplusFunds",
    data: BytesLike
  ): Result;
}

export namespace AddAuthorizationEvent {
  export type InputTuple = [_account: AddressLike];
  export type OutputTuple = [_account: string];
  export interface OutputObject {
    _account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DisableContractEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GiveFundsEvent {
  export type InputTuple = [_account: AddressLike, _rad: BigNumberish];
  export type OutputTuple = [_account: string, _rad: bigint];
  export interface OutputObject {
    _account: string;
    _rad: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace JoinCoinsEvent {
  export type InputTuple = [_wad: BigNumberish];
  export type OutputTuple = [_wad: bigint];
  export interface OutputObject {
    _wad: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ModifyParametersEvent {
  export type InputTuple = [
    _param: BytesLike,
    _cType: BytesLike,
    _data: BytesLike
  ];
  export type OutputTuple = [_param: string, _cType: string, _data: string];
  export interface OutputObject {
    _param: string;
    _cType: string;
    _data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PullFundsEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _dstAccount: AddressLike,
    _rad: BigNumberish
  ];
  export type OutputTuple = [
    _sender: string,
    _dstAccount: string,
    _rad: bigint
  ];
  export interface OutputObject {
    _sender: string;
    _dstAccount: string;
    _rad: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoveAuthorizationEvent {
  export type InputTuple = [_account: AddressLike];
  export type OutputTuple = [_account: string];
  export interface OutputObject {
    _account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetPerHourAllowanceEvent {
  export type InputTuple = [_account: AddressLike, _rad: BigNumberish];
  export type OutputTuple = [_account: string, _rad: bigint];
  export interface OutputObject {
    _account: string;
    _rad: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetTotalAllowanceEvent {
  export type InputTuple = [_account: AddressLike, _rad: BigNumberish];
  export type OutputTuple = [_account: string, _rad: bigint];
  export interface OutputObject {
    _account: string;
    _rad: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SettleDebtEvent {
  export type InputTuple = [_rad: BigNumberish];
  export type OutputTuple = [_rad: bigint];
  export interface OutputObject {
    _rad: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TakeFundsEvent {
  export type InputTuple = [_account: AddressLike, _rad: BigNumberish];
  export type OutputTuple = [_account: string, _rad: bigint];
  export interface OutputObject {
    _account: string;
    _rad: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferSurplusFundsEvent {
  export type InputTuple = [
    _extraSurplusReceiver: AddressLike,
    _fundsToTransfer: BigNumberish
  ];
  export type OutputTuple = [
    _extraSurplusReceiver: string,
    _fundsToTransfer: bigint
  ];
  export interface OutputObject {
    _extraSurplusReceiver: string;
    _fundsToTransfer: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IStabilityFeeTreasury extends BaseContract {
  connect(runner?: ContractRunner | null): IStabilityFeeTreasury;
  waitForDeployment(): Promise<this>;

  interface: IStabilityFeeTreasuryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  _allowance: TypedContractMethod<
    [_account: AddressLike],
    [[bigint, bigint] & { _total: bigint; _perHour: bigint }],
    "view"
  >;

  _params: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        _treasuryCapacity: bigint;
        _pullFundsMinThreshold: bigint;
        _surplusTransferDelay: bigint;
      }
    ],
    "view"
  >;

  addAuthorization: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  allowance: TypedContractMethod<
    [_account: AddressLike],
    [IStabilityFeeTreasury.AllowanceStructOutput],
    "view"
  >;

  "authorizedAccounts(address)": TypedContractMethod<
    [_account: AddressLike],
    [boolean],
    "view"
  >;

  "authorizedAccounts()": TypedContractMethod<[], [string[]], "view">;

  coinJoin: TypedContractMethod<[], [string], "view">;

  contractEnabled: TypedContractMethod<[], [boolean], "view">;

  disableContract: TypedContractMethod<[], [void], "nonpayable">;

  extraSurplusReceiver: TypedContractMethod<[], [string], "view">;

  giveFunds: TypedContractMethod<
    [_account: AddressLike, _rad: BigNumberish],
    [void],
    "nonpayable"
  >;

  latestSurplusTransferTime: TypedContractMethod<[], [bigint], "view">;

  modifyParameters: TypedContractMethod<
    [_param: BytesLike, _data: BytesLike],
    [void],
    "nonpayable"
  >;

  params: TypedContractMethod<
    [],
    [IStabilityFeeTreasury.StabilityFeeTreasuryParamsStructOutput],
    "view"
  >;

  pullFunds: TypedContractMethod<
    [_dstAccount: AddressLike, _wad: BigNumberish],
    [void],
    "nonpayable"
  >;

  pulledPerHour: TypedContractMethod<
    [_account: AddressLike, _blockHour: BigNumberish],
    [bigint],
    "view"
  >;

  removeAuthorization: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  safeEngine: TypedContractMethod<[], [string], "view">;

  setPerHourAllowance: TypedContractMethod<
    [_account: AddressLike, _rad: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTotalAllowance: TypedContractMethod<
    [_account: AddressLike, _rad: BigNumberish],
    [void],
    "nonpayable"
  >;

  settleDebt: TypedContractMethod<
    [],
    [[bigint, bigint] & { _coinBalance: bigint; _debtBalance: bigint }],
    "nonpayable"
  >;

  systemCoin: TypedContractMethod<[], [string], "view">;

  takeFunds: TypedContractMethod<
    [_account: AddressLike, _rad: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferSurplusFunds: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_allowance"
  ): TypedContractMethod<
    [_account: AddressLike],
    [[bigint, bigint] & { _total: bigint; _perHour: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "_params"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        _treasuryCapacity: bigint;
        _pullFundsMinThreshold: bigint;
        _surplusTransferDelay: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "addAuthorization"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [_account: AddressLike],
    [IStabilityFeeTreasury.AllowanceStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "authorizedAccounts(address)"
  ): TypedContractMethod<[_account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "authorizedAccounts()"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "coinJoin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "contractEnabled"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "disableContract"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "extraSurplusReceiver"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "giveFunds"
  ): TypedContractMethod<
    [_account: AddressLike, _rad: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "latestSurplusTransferTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "modifyParameters"
  ): TypedContractMethod<
    [_param: BytesLike, _data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "params"
  ): TypedContractMethod<
    [],
    [IStabilityFeeTreasury.StabilityFeeTreasuryParamsStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "pullFunds"
  ): TypedContractMethod<
    [_dstAccount: AddressLike, _wad: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pulledPerHour"
  ): TypedContractMethod<
    [_account: AddressLike, _blockHour: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "removeAuthorization"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "safeEngine"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setPerHourAllowance"
  ): TypedContractMethod<
    [_account: AddressLike, _rad: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTotalAllowance"
  ): TypedContractMethod<
    [_account: AddressLike, _rad: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "settleDebt"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { _coinBalance: bigint; _debtBalance: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "systemCoin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "takeFunds"
  ): TypedContractMethod<
    [_account: AddressLike, _rad: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferSurplusFunds"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "AddAuthorization"
  ): TypedContractEvent<
    AddAuthorizationEvent.InputTuple,
    AddAuthorizationEvent.OutputTuple,
    AddAuthorizationEvent.OutputObject
  >;
  getEvent(
    key: "DisableContract"
  ): TypedContractEvent<
    DisableContractEvent.InputTuple,
    DisableContractEvent.OutputTuple,
    DisableContractEvent.OutputObject
  >;
  getEvent(
    key: "GiveFunds"
  ): TypedContractEvent<
    GiveFundsEvent.InputTuple,
    GiveFundsEvent.OutputTuple,
    GiveFundsEvent.OutputObject
  >;
  getEvent(
    key: "JoinCoins"
  ): TypedContractEvent<
    JoinCoinsEvent.InputTuple,
    JoinCoinsEvent.OutputTuple,
    JoinCoinsEvent.OutputObject
  >;
  getEvent(
    key: "ModifyParameters"
  ): TypedContractEvent<
    ModifyParametersEvent.InputTuple,
    ModifyParametersEvent.OutputTuple,
    ModifyParametersEvent.OutputObject
  >;
  getEvent(
    key: "PullFunds"
  ): TypedContractEvent<
    PullFundsEvent.InputTuple,
    PullFundsEvent.OutputTuple,
    PullFundsEvent.OutputObject
  >;
  getEvent(
    key: "RemoveAuthorization"
  ): TypedContractEvent<
    RemoveAuthorizationEvent.InputTuple,
    RemoveAuthorizationEvent.OutputTuple,
    RemoveAuthorizationEvent.OutputObject
  >;
  getEvent(
    key: "SetPerHourAllowance"
  ): TypedContractEvent<
    SetPerHourAllowanceEvent.InputTuple,
    SetPerHourAllowanceEvent.OutputTuple,
    SetPerHourAllowanceEvent.OutputObject
  >;
  getEvent(
    key: "SetTotalAllowance"
  ): TypedContractEvent<
    SetTotalAllowanceEvent.InputTuple,
    SetTotalAllowanceEvent.OutputTuple,
    SetTotalAllowanceEvent.OutputObject
  >;
  getEvent(
    key: "SettleDebt"
  ): TypedContractEvent<
    SettleDebtEvent.InputTuple,
    SettleDebtEvent.OutputTuple,
    SettleDebtEvent.OutputObject
  >;
  getEvent(
    key: "TakeFunds"
  ): TypedContractEvent<
    TakeFundsEvent.InputTuple,
    TakeFundsEvent.OutputTuple,
    TakeFundsEvent.OutputObject
  >;
  getEvent(
    key: "TransferSurplusFunds"
  ): TypedContractEvent<
    TransferSurplusFundsEvent.InputTuple,
    TransferSurplusFundsEvent.OutputTuple,
    TransferSurplusFundsEvent.OutputObject
  >;

  filters: {
    "AddAuthorization(address)": TypedContractEvent<
      AddAuthorizationEvent.InputTuple,
      AddAuthorizationEvent.OutputTuple,
      AddAuthorizationEvent.OutputObject
    >;
    AddAuthorization: TypedContractEvent<
      AddAuthorizationEvent.InputTuple,
      AddAuthorizationEvent.OutputTuple,
      AddAuthorizationEvent.OutputObject
    >;

    "DisableContract()": TypedContractEvent<
      DisableContractEvent.InputTuple,
      DisableContractEvent.OutputTuple,
      DisableContractEvent.OutputObject
    >;
    DisableContract: TypedContractEvent<
      DisableContractEvent.InputTuple,
      DisableContractEvent.OutputTuple,
      DisableContractEvent.OutputObject
    >;

    "GiveFunds(address,uint256)": TypedContractEvent<
      GiveFundsEvent.InputTuple,
      GiveFundsEvent.OutputTuple,
      GiveFundsEvent.OutputObject
    >;
    GiveFunds: TypedContractEvent<
      GiveFundsEvent.InputTuple,
      GiveFundsEvent.OutputTuple,
      GiveFundsEvent.OutputObject
    >;

    "JoinCoins(uint256)": TypedContractEvent<
      JoinCoinsEvent.InputTuple,
      JoinCoinsEvent.OutputTuple,
      JoinCoinsEvent.OutputObject
    >;
    JoinCoins: TypedContractEvent<
      JoinCoinsEvent.InputTuple,
      JoinCoinsEvent.OutputTuple,
      JoinCoinsEvent.OutputObject
    >;

    "ModifyParameters(bytes32,bytes32,bytes)": TypedContractEvent<
      ModifyParametersEvent.InputTuple,
      ModifyParametersEvent.OutputTuple,
      ModifyParametersEvent.OutputObject
    >;
    ModifyParameters: TypedContractEvent<
      ModifyParametersEvent.InputTuple,
      ModifyParametersEvent.OutputTuple,
      ModifyParametersEvent.OutputObject
    >;

    "PullFunds(address,address,uint256)": TypedContractEvent<
      PullFundsEvent.InputTuple,
      PullFundsEvent.OutputTuple,
      PullFundsEvent.OutputObject
    >;
    PullFunds: TypedContractEvent<
      PullFundsEvent.InputTuple,
      PullFundsEvent.OutputTuple,
      PullFundsEvent.OutputObject
    >;

    "RemoveAuthorization(address)": TypedContractEvent<
      RemoveAuthorizationEvent.InputTuple,
      RemoveAuthorizationEvent.OutputTuple,
      RemoveAuthorizationEvent.OutputObject
    >;
    RemoveAuthorization: TypedContractEvent<
      RemoveAuthorizationEvent.InputTuple,
      RemoveAuthorizationEvent.OutputTuple,
      RemoveAuthorizationEvent.OutputObject
    >;

    "SetPerHourAllowance(address,uint256)": TypedContractEvent<
      SetPerHourAllowanceEvent.InputTuple,
      SetPerHourAllowanceEvent.OutputTuple,
      SetPerHourAllowanceEvent.OutputObject
    >;
    SetPerHourAllowance: TypedContractEvent<
      SetPerHourAllowanceEvent.InputTuple,
      SetPerHourAllowanceEvent.OutputTuple,
      SetPerHourAllowanceEvent.OutputObject
    >;

    "SetTotalAllowance(address,uint256)": TypedContractEvent<
      SetTotalAllowanceEvent.InputTuple,
      SetTotalAllowanceEvent.OutputTuple,
      SetTotalAllowanceEvent.OutputObject
    >;
    SetTotalAllowance: TypedContractEvent<
      SetTotalAllowanceEvent.InputTuple,
      SetTotalAllowanceEvent.OutputTuple,
      SetTotalAllowanceEvent.OutputObject
    >;

    "SettleDebt(uint256)": TypedContractEvent<
      SettleDebtEvent.InputTuple,
      SettleDebtEvent.OutputTuple,
      SettleDebtEvent.OutputObject
    >;
    SettleDebt: TypedContractEvent<
      SettleDebtEvent.InputTuple,
      SettleDebtEvent.OutputTuple,
      SettleDebtEvent.OutputObject
    >;

    "TakeFunds(address,uint256)": TypedContractEvent<
      TakeFundsEvent.InputTuple,
      TakeFundsEvent.OutputTuple,
      TakeFundsEvent.OutputObject
    >;
    TakeFunds: TypedContractEvent<
      TakeFundsEvent.InputTuple,
      TakeFundsEvent.OutputTuple,
      TakeFundsEvent.OutputObject
    >;

    "TransferSurplusFunds(address,uint256)": TypedContractEvent<
      TransferSurplusFundsEvent.InputTuple,
      TransferSurplusFundsEvent.OutputTuple,
      TransferSurplusFundsEvent.OutputObject
    >;
    TransferSurplusFunds: TypedContractEvent<
      TransferSurplusFundsEvent.InputTuple,
      TransferSurplusFundsEvent.OutputTuple,
      TransferSurplusFundsEvent.OutputObject
    >;
  };
}
