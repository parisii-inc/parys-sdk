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

export declare namespace IRewardPool {
  export type RewardPoolParamsStruct = {
    stakingManager: AddressLike;
    duration: BigNumberish;
    newRewardRatio: BigNumberish;
  };

  export type RewardPoolParamsStructOutput = [
    stakingManager: string,
    duration: bigint,
    newRewardRatio: bigint
  ] & { stakingManager: string; duration: bigint; newRewardRatio: bigint };
}

export interface IRewardPoolChildInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "_params"
      | "addAuthorization"
      | "authorizedAccounts(address)"
      | "authorizedAccounts()"
      | "currentRewards"
      | "decreaseStake"
      | "earned"
      | "emergencyWithdraw"
      | "factory"
      | "getReward"
      | "historicalRewards"
      | "increaseStake"
      | "lastTimeRewardApplicable"
      | "lastUpdateTime"
      | "modifyParameters"
      | "notifyRewardAmount"
      | "params"
      | "periodFinish"
      | "queueNewRewards"
      | "queuedRewards"
      | "removeAuthorization"
      | "rewardPerToken"
      | "rewardPerTokenPaid"
      | "rewardPerTokenStored"
      | "rewardRate"
      | "rewardToken"
      | "rewards"
      | "stake"
      | "totalStaked"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddAuthorization"
      | "ModifyParameters"
      | "RemoveAuthorization"
      | "RewardPoolDecreaseStake"
      | "RewardPoolEmergencyWithdrawal"
      | "RewardPoolIncreaseStake"
      | "RewardPoolRewardAdded"
      | "RewardPoolRewardPaid"
      | "RewardPoolStaked"
      | "RewardPoolWithdrawn"
  ): EventFragment;

  encodeFunctionData(functionFragment: "_params", values?: undefined): string;
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
    functionFragment: "currentRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseStake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "earned", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "historicalRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseStake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastTimeRewardApplicable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modifyParameters",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "notifyRewardAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "params", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "periodFinish",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "queueNewRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queuedRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeAuthorization",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenPaid",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerTokenStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "rewards", values?: undefined): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "totalStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
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
    functionFragment: "currentRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "historicalRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastTimeRewardApplicable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyRewardAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "periodFinish",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queueNewRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queuedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenPaid",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerTokenStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
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

export namespace RewardPoolDecreaseStakeEvent {
  export type InputTuple = [_account: AddressLike, _amount: BigNumberish];
  export type OutputTuple = [_account: string, _amount: bigint];
  export interface OutputObject {
    _account: string;
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardPoolEmergencyWithdrawalEvent {
  export type InputTuple = [_account: AddressLike, _amount: BigNumberish];
  export type OutputTuple = [_account: string, _amount: bigint];
  export interface OutputObject {
    _account: string;
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardPoolIncreaseStakeEvent {
  export type InputTuple = [_account: AddressLike, _amount: BigNumberish];
  export type OutputTuple = [_account: string, _amount: bigint];
  export interface OutputObject {
    _account: string;
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardPoolRewardAddedEvent {
  export type InputTuple = [_reward: BigNumberish];
  export type OutputTuple = [_reward: bigint];
  export interface OutputObject {
    _reward: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardPoolRewardPaidEvent {
  export type InputTuple = [_account: AddressLike, _reward: BigNumberish];
  export type OutputTuple = [_account: string, _reward: bigint];
  export interface OutputObject {
    _account: string;
    _reward: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardPoolStakedEvent {
  export type InputTuple = [_account: AddressLike, _amount: BigNumberish];
  export type OutputTuple = [_account: string, _amount: bigint];
  export interface OutputObject {
    _account: string;
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardPoolWithdrawnEvent {
  export type InputTuple = [_account: AddressLike, _amount: BigNumberish];
  export type OutputTuple = [_account: string, _amount: bigint];
  export interface OutputObject {
    _account: string;
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IRewardPoolChild extends BaseContract {
  connect(runner?: ContractRunner | null): IRewardPoolChild;
  waitForDeployment(): Promise<this>;

  interface: IRewardPoolChildInterface;

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

  _params: TypedContractMethod<
    [],
    [
      [string, bigint, bigint] & {
        _stakingManager: string;
        _duration: bigint;
        _newRewardRatio: bigint;
      }
    ],
    "view"
  >;

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

  currentRewards: TypedContractMethod<[], [bigint], "view">;

  decreaseStake: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  earned: TypedContractMethod<[], [bigint], "view">;

  emergencyWithdraw: TypedContractMethod<
    [_rescueReceiver: AddressLike, _wad: BigNumberish],
    [void],
    "nonpayable"
  >;

  factory: TypedContractMethod<[], [string], "view">;

  getReward: TypedContractMethod<[], [void], "nonpayable">;

  historicalRewards: TypedContractMethod<[], [bigint], "view">;

  increaseStake: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  lastTimeRewardApplicable: TypedContractMethod<[], [bigint], "view">;

  lastUpdateTime: TypedContractMethod<[], [bigint], "view">;

  modifyParameters: TypedContractMethod<
    [_param: BytesLike, _data: BytesLike],
    [void],
    "nonpayable"
  >;

  notifyRewardAmount: TypedContractMethod<
    [_reward: BigNumberish],
    [void],
    "nonpayable"
  >;

  params: TypedContractMethod<
    [],
    [IRewardPool.RewardPoolParamsStructOutput],
    "view"
  >;

  periodFinish: TypedContractMethod<[], [bigint], "view">;

  queueNewRewards: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  queuedRewards: TypedContractMethod<[], [bigint], "view">;

  removeAuthorization: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  rewardPerToken: TypedContractMethod<[], [bigint], "view">;

  rewardPerTokenPaid: TypedContractMethod<[], [bigint], "view">;

  rewardPerTokenStored: TypedContractMethod<[], [bigint], "view">;

  rewardRate: TypedContractMethod<[], [bigint], "view">;

  rewardToken: TypedContractMethod<[], [string], "view">;

  rewards: TypedContractMethod<[], [bigint], "view">;

  stake: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  totalStaked: TypedContractMethod<[], [bigint], "view">;

  withdraw: TypedContractMethod<
    [_amount: BigNumberish, _claim: boolean],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_params"
  ): TypedContractMethod<
    [],
    [
      [string, bigint, bigint] & {
        _stakingManager: string;
        _duration: bigint;
        _newRewardRatio: bigint;
      }
    ],
    "view"
  >;
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
    nameOrSignature: "currentRewards"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decreaseStake"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "earned"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "emergencyWithdraw"
  ): TypedContractMethod<
    [_rescueReceiver: AddressLike, _wad: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getReward"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "historicalRewards"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "increaseStake"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lastTimeRewardApplicable"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastUpdateTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "modifyParameters"
  ): TypedContractMethod<
    [_param: BytesLike, _data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "notifyRewardAmount"
  ): TypedContractMethod<[_reward: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "params"
  ): TypedContractMethod<
    [],
    [IRewardPool.RewardPoolParamsStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "periodFinish"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "queueNewRewards"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "queuedRewards"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "removeAuthorization"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rewardPerToken"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerTokenPaid"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardPerTokenStored"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rewards"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalStaked"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [_amount: BigNumberish, _claim: boolean],
    [void],
    "nonpayable"
  >;

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
    key: "RewardPoolDecreaseStake"
  ): TypedContractEvent<
    RewardPoolDecreaseStakeEvent.InputTuple,
    RewardPoolDecreaseStakeEvent.OutputTuple,
    RewardPoolDecreaseStakeEvent.OutputObject
  >;
  getEvent(
    key: "RewardPoolEmergencyWithdrawal"
  ): TypedContractEvent<
    RewardPoolEmergencyWithdrawalEvent.InputTuple,
    RewardPoolEmergencyWithdrawalEvent.OutputTuple,
    RewardPoolEmergencyWithdrawalEvent.OutputObject
  >;
  getEvent(
    key: "RewardPoolIncreaseStake"
  ): TypedContractEvent<
    RewardPoolIncreaseStakeEvent.InputTuple,
    RewardPoolIncreaseStakeEvent.OutputTuple,
    RewardPoolIncreaseStakeEvent.OutputObject
  >;
  getEvent(
    key: "RewardPoolRewardAdded"
  ): TypedContractEvent<
    RewardPoolRewardAddedEvent.InputTuple,
    RewardPoolRewardAddedEvent.OutputTuple,
    RewardPoolRewardAddedEvent.OutputObject
  >;
  getEvent(
    key: "RewardPoolRewardPaid"
  ): TypedContractEvent<
    RewardPoolRewardPaidEvent.InputTuple,
    RewardPoolRewardPaidEvent.OutputTuple,
    RewardPoolRewardPaidEvent.OutputObject
  >;
  getEvent(
    key: "RewardPoolStaked"
  ): TypedContractEvent<
    RewardPoolStakedEvent.InputTuple,
    RewardPoolStakedEvent.OutputTuple,
    RewardPoolStakedEvent.OutputObject
  >;
  getEvent(
    key: "RewardPoolWithdrawn"
  ): TypedContractEvent<
    RewardPoolWithdrawnEvent.InputTuple,
    RewardPoolWithdrawnEvent.OutputTuple,
    RewardPoolWithdrawnEvent.OutputObject
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

    "RewardPoolDecreaseStake(address,uint256)": TypedContractEvent<
      RewardPoolDecreaseStakeEvent.InputTuple,
      RewardPoolDecreaseStakeEvent.OutputTuple,
      RewardPoolDecreaseStakeEvent.OutputObject
    >;
    RewardPoolDecreaseStake: TypedContractEvent<
      RewardPoolDecreaseStakeEvent.InputTuple,
      RewardPoolDecreaseStakeEvent.OutputTuple,
      RewardPoolDecreaseStakeEvent.OutputObject
    >;

    "RewardPoolEmergencyWithdrawal(address,uint256)": TypedContractEvent<
      RewardPoolEmergencyWithdrawalEvent.InputTuple,
      RewardPoolEmergencyWithdrawalEvent.OutputTuple,
      RewardPoolEmergencyWithdrawalEvent.OutputObject
    >;
    RewardPoolEmergencyWithdrawal: TypedContractEvent<
      RewardPoolEmergencyWithdrawalEvent.InputTuple,
      RewardPoolEmergencyWithdrawalEvent.OutputTuple,
      RewardPoolEmergencyWithdrawalEvent.OutputObject
    >;

    "RewardPoolIncreaseStake(address,uint256)": TypedContractEvent<
      RewardPoolIncreaseStakeEvent.InputTuple,
      RewardPoolIncreaseStakeEvent.OutputTuple,
      RewardPoolIncreaseStakeEvent.OutputObject
    >;
    RewardPoolIncreaseStake: TypedContractEvent<
      RewardPoolIncreaseStakeEvent.InputTuple,
      RewardPoolIncreaseStakeEvent.OutputTuple,
      RewardPoolIncreaseStakeEvent.OutputObject
    >;

    "RewardPoolRewardAdded(uint256)": TypedContractEvent<
      RewardPoolRewardAddedEvent.InputTuple,
      RewardPoolRewardAddedEvent.OutputTuple,
      RewardPoolRewardAddedEvent.OutputObject
    >;
    RewardPoolRewardAdded: TypedContractEvent<
      RewardPoolRewardAddedEvent.InputTuple,
      RewardPoolRewardAddedEvent.OutputTuple,
      RewardPoolRewardAddedEvent.OutputObject
    >;

    "RewardPoolRewardPaid(address,uint256)": TypedContractEvent<
      RewardPoolRewardPaidEvent.InputTuple,
      RewardPoolRewardPaidEvent.OutputTuple,
      RewardPoolRewardPaidEvent.OutputObject
    >;
    RewardPoolRewardPaid: TypedContractEvent<
      RewardPoolRewardPaidEvent.InputTuple,
      RewardPoolRewardPaidEvent.OutputTuple,
      RewardPoolRewardPaidEvent.OutputObject
    >;

    "RewardPoolStaked(address,uint256)": TypedContractEvent<
      RewardPoolStakedEvent.InputTuple,
      RewardPoolStakedEvent.OutputTuple,
      RewardPoolStakedEvent.OutputObject
    >;
    RewardPoolStaked: TypedContractEvent<
      RewardPoolStakedEvent.InputTuple,
      RewardPoolStakedEvent.OutputTuple,
      RewardPoolStakedEvent.OutputObject
    >;

    "RewardPoolWithdrawn(address,uint256)": TypedContractEvent<
      RewardPoolWithdrawnEvent.InputTuple,
      RewardPoolWithdrawnEvent.OutputTuple,
      RewardPoolWithdrawnEvent.OutputObject
    >;
    RewardPoolWithdrawn: TypedContractEvent<
      RewardPoolWithdrawnEvent.InputTuple,
      RewardPoolWithdrawnEvent.OutputTuple,
      RewardPoolWithdrawnEvent.OutputObject
    >;
  };
}
