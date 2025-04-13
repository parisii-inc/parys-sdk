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

export interface IOracleJobInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addAuthorization"
      | "authorizedAccounts(address)"
      | "authorizedAccounts()"
      | "modifyParameters"
      | "oracleRelayer"
      | "pidRateSetter"
      | "removeAuthorization"
      | "rewardAmount"
      | "shouldWorkUpdateCollateralPrice"
      | "shouldWorkUpdateRate"
      | "stabilityFeeTreasury"
      | "workUpdateCollateralPrice"
      | "workUpdateRate"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddAuthorization"
      | "ModifyParameters"
      | "RemoveAuthorization"
      | "Rewarded"
  ): EventFragment;

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
    functionFragment: "oracleRelayer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pidRateSetter",
    values?: undefined
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
    functionFragment: "shouldWorkUpdateCollateralPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shouldWorkUpdateRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stabilityFeeTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "workUpdateCollateralPrice",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "workUpdateRate",
    values?: undefined
  ): string;

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
    functionFragment: "oracleRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pidRateSetter",
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
    functionFragment: "shouldWorkUpdateCollateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shouldWorkUpdateRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stabilityFeeTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workUpdateCollateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "workUpdateRate",
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

export interface IOracleJob extends BaseContract {
  connect(runner?: ContractRunner | null): IOracleJob;
  waitForDeployment(): Promise<this>;

  interface: IOracleJobInterface;

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

  oracleRelayer: TypedContractMethod<[], [string], "view">;

  pidRateSetter: TypedContractMethod<[], [string], "view">;

  removeAuthorization: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  rewardAmount: TypedContractMethod<[], [bigint], "view">;

  shouldWorkUpdateCollateralPrice: TypedContractMethod<[], [boolean], "view">;

  shouldWorkUpdateRate: TypedContractMethod<[], [boolean], "view">;

  stabilityFeeTreasury: TypedContractMethod<[], [string], "view">;

  workUpdateCollateralPrice: TypedContractMethod<
    [_cType: BytesLike],
    [void],
    "nonpayable"
  >;

  workUpdateRate: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

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
    nameOrSignature: "oracleRelayer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pidRateSetter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeAuthorization"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rewardAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "shouldWorkUpdateCollateralPrice"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "shouldWorkUpdateRate"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "stabilityFeeTreasury"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "workUpdateCollateralPrice"
  ): TypedContractMethod<[_cType: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "workUpdateRate"
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
