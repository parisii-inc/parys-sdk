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

export interface IAccountingJobInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accountingEngine"
      | "addAuthorization"
      | "authorizedAccounts(address)"
      | "authorizedAccounts()"
      | "modifyParameters"
      | "removeAuthorization"
      | "rewardAmount"
      | "shouldWorkAuctionDebt"
      | "shouldWorkAuctionSurplus"
      | "shouldWorkPopDebtFromQueue"
      | "shouldWorkTransferExtraSurplus"
      | "stabilityFeeTreasury"
      | "workAuctionDebt"
      | "workAuctionSurplus"
      | "workPopDebtFromQueue"
      | "workTransferExtraSurplus"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddAuthorization"
      | "ModifyParameters"
      | "RemoveAuthorization"
      | "Rewarded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "accountingEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAuthorization",
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
  encodeFunctionData(
    functionFragment: "modifyParameters",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAuthorization",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shouldWorkAuctionDebt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shouldWorkAuctionSurplus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shouldWorkPopDebtFromQueue",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shouldWorkTransferExtraSurplus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stabilityFeeTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "workAuctionDebt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "workAuctionSurplus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "workPopDebtFromQueue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "workTransferExtraSurplus",
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
    functionFragment: "authorizedAccounts(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedAccounts()",
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
  decodeFunctionResult(
    functionFragment: "rewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shouldWorkAuctionDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shouldWorkAuctionSurplus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shouldWorkPopDebtFromQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shouldWorkTransferExtraSurplus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stabilityFeeTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workAuctionDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workAuctionSurplus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workPopDebtFromQueue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workTransferExtraSurplus",
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

export namespace RewardedEvent {
  export type InputTuple = [
    _rewardedAccount: AddressLike,
    _rewardAmount: BigNumberish
  ];
  export type OutputTuple = [_rewardedAccount: string, _rewardAmount: bigint];
  export interface OutputObject {
    _rewardedAccount: string;
    _rewardAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IAccountingJob extends BaseContract {
  connect(runner?: ContractRunner | null): IAccountingJob;
  waitForDeployment(): Promise<this>;

  interface: IAccountingJobInterface;

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

  accountingEngine: TypedContractMethod<[], [string], "view">;

  addAuthorization: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  "authorizedAccounts(address)": TypedContractMethod<
    [_account: AddressLike],
    [boolean],
    "view"
  >;

  "authorizedAccounts()": TypedContractMethod<[], [string[]], "view">;

  modifyParameters: TypedContractMethod<
    [_param: BytesLike, _data: BytesLike],
    [void],
    "nonpayable"
  >;

  removeAuthorization: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  rewardAmount: TypedContractMethod<[], [bigint], "view">;

  shouldWorkAuctionDebt: TypedContractMethod<[], [boolean], "view">;

  shouldWorkAuctionSurplus: TypedContractMethod<[], [boolean], "view">;

  shouldWorkPopDebtFromQueue: TypedContractMethod<[], [boolean], "view">;

  shouldWorkTransferExtraSurplus: TypedContractMethod<[], [boolean], "view">;

  stabilityFeeTreasury: TypedContractMethod<[], [string], "view">;

  workAuctionDebt: TypedContractMethod<[], [void], "nonpayable">;

  workAuctionSurplus: TypedContractMethod<[], [void], "nonpayable">;

  workPopDebtFromQueue: TypedContractMethod<
    [_debtBlockTimestamp: BigNumberish],
    [void],
    "nonpayable"
  >;

  workTransferExtraSurplus: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accountingEngine"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addAuthorization"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "authorizedAccounts(address)"
  ): TypedContractMethod<[_account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "authorizedAccounts()"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "modifyParameters"
  ): TypedContractMethod<
    [_param: BytesLike, _data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeAuthorization"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rewardAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "shouldWorkAuctionDebt"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "shouldWorkAuctionSurplus"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "shouldWorkPopDebtFromQueue"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "shouldWorkTransferExtraSurplus"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "stabilityFeeTreasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "workAuctionDebt"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "workAuctionSurplus"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "workPopDebtFromQueue"
  ): TypedContractMethod<
    [_debtBlockTimestamp: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "workTransferExtraSurplus"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "AddAuthorization"
  ): TypedContractEvent<
    AddAuthorizationEvent.InputTuple,
    AddAuthorizationEvent.OutputTuple,
    AddAuthorizationEvent.OutputObject
  >;
  getEvent(
    key: "ModifyParameters"
  ): TypedContractEvent<
    ModifyParametersEvent.InputTuple,
    ModifyParametersEvent.OutputTuple,
    ModifyParametersEvent.OutputObject
  >;
  getEvent(
    key: "RemoveAuthorization"
  ): TypedContractEvent<
    RemoveAuthorizationEvent.InputTuple,
    RemoveAuthorizationEvent.OutputTuple,
    RemoveAuthorizationEvent.OutputObject
  >;
  getEvent(
    key: "Rewarded"
  ): TypedContractEvent<
    RewardedEvent.InputTuple,
    RewardedEvent.OutputTuple,
    RewardedEvent.OutputObject
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

    "Rewarded(address,uint256)": TypedContractEvent<
      RewardedEvent.InputTuple,
      RewardedEvent.OutputTuple,
      RewardedEvent.OutputObject
    >;
    Rewarded: TypedContractEvent<
      RewardedEvent.InputTuple,
      RewardedEvent.OutputTuple,
      RewardedEvent.OutputObject
    >;
  };
}
