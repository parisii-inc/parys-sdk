import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IStakingManager {
    type EarnedDataStruct = {
        rewardToken: string;
        rewardAmount: BigNumberish;
    };
    type EarnedDataStructOutput = [string, BigNumber] & {
        rewardToken: string;
        rewardAmount: BigNumber;
    };
    type StakingManagerParamsStruct = {
        cooldownPeriod: BigNumberish;
    };
    type StakingManagerParamsStructOutput = [BigNumber] & {
        cooldownPeriod: BigNumber;
    };
    type PendingWithdrawalStruct = {
        amount: BigNumberish;
        timestamp: BigNumberish;
    };
    type PendingWithdrawalStructOutput = [BigNumber, BigNumber] & {
        amount: BigNumber;
        timestamp: BigNumber;
    };
    type RewardTypeInfoStruct = {
        rewardToken: string;
        rewardPool: string;
        isActive: boolean;
        rewardIntegral: BigNumberish;
        rewardRemaining: BigNumberish;
    };
    type RewardTypeInfoStructOutput = [
        string,
        string,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        rewardToken: string;
        rewardPool: string;
        isActive: boolean;
        rewardIntegral: BigNumber;
        rewardRemaining: BigNumber;
    };
}
export interface StakingmanagerInterface extends utils.Interface {
    functions: {
        "_params()": FunctionFragment;
        "_pendingWithdrawals(address)": FunctionFragment;
        "_rewardTypes(uint256)": FunctionFragment;
        "activateRewardType(uint256)": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "addRewardType(address,address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "cancelWithdrawal()": FunctionFragment;
        "checkpoint(address[2])": FunctionFragment;
        "claimableReward(uint256,address)": FunctionFragment;
        "deactivateRewardType(uint256)": FunctionFragment;
        "earned(address)": FunctionFragment;
        "emergencyWithdraw(address,uint256)": FunctionFragment;
        "emergencyWithdrawReward(uint256,address,uint256)": FunctionFragment;
        "getReward(address)": FunctionFragment;
        "getRewardAndForward(address,address)": FunctionFragment;
        "initiateWithdrawal(uint256)": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "params()": FunctionFragment;
        "pendingWithdrawals(address)": FunctionFragment;
        "protocolToken()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "rewardIntegralFor(uint256,address)": FunctionFragment;
        "rewardTypes(uint256)": FunctionFragment;
        "rewards()": FunctionFragment;
        "stake(address,uint256)": FunctionFragment;
        "stakedBalances(address)": FunctionFragment;
        "stakedSupply()": FunctionFragment;
        "stakingToken()": FunctionFragment;
        "userCheckpoint(address)": FunctionFragment;
        "withdraw()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_params" | "_pendingWithdrawals" | "_rewardTypes" | "activateRewardType" | "addAuthorization" | "addRewardType" | "authorizedAccounts(address)" | "authorizedAccounts()" | "cancelWithdrawal" | "checkpoint" | "claimableReward" | "deactivateRewardType" | "earned" | "emergencyWithdraw" | "emergencyWithdrawReward" | "getReward" | "getRewardAndForward" | "initiateWithdrawal" | "modifyParameters" | "params" | "pendingWithdrawals" | "protocolToken" | "removeAuthorization" | "rewardIntegralFor" | "rewardTypes" | "rewards" | "stake" | "stakedBalances" | "stakedSupply" | "stakingToken" | "userCheckpoint" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "_params", values?: undefined): string;
    encodeFunctionData(functionFragment: "_pendingWithdrawals", values: [string]): string;
    encodeFunctionData(functionFragment: "_rewardTypes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "activateRewardType", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "addRewardType", values: [string, string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelWithdrawal", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkpoint", values: [[string, string]]): string;
    encodeFunctionData(functionFragment: "claimableReward", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "deactivateRewardType", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "earned", values: [string]): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "emergencyWithdrawReward", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getReward", values: [string]): string;
    encodeFunctionData(functionFragment: "getRewardAndForward", values: [string, string]): string;
    encodeFunctionData(functionFragment: "initiateWithdrawal", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "modifyParameters", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "params", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingWithdrawals", values: [string]): string;
    encodeFunctionData(functionFragment: "protocolToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardIntegralFor", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "rewardTypes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakedBalances", values: [string]): string;
    encodeFunctionData(functionFragment: "stakedSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakingToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "userCheckpoint", values: [string]): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_pendingWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_rewardTypes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "activateRewardType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addRewardType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimableReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deactivateRewardType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdrawReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRewardAndForward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initiateWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardIntegralFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardTypes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakedBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakedSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakingToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userCheckpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "StakingManagerActivateRewardType(uint256)": EventFragment;
        "StakingManagerAddRewardType(uint256,address,address)": EventFragment;
        "StakingManagerDeactivateRewardType(uint256)": EventFragment;
        "StakingManagerEmergencyRewardWithdrawal(address,address,uint256)": EventFragment;
        "StakingManagerEmergencyWithdrawal(address,uint256)": EventFragment;
        "StakingManagerRewardPaid(address,address,uint256,address)": EventFragment;
        "StakingManagerStaked(address,uint256)": EventFragment;
        "StakingManagerWithdrawalCancelled(address,uint256)": EventFragment;
        "StakingManagerWithdrawalInitiated(address,uint256)": EventFragment;
        "StakingManagerWithdrawn(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingManagerActivateRewardType"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingManagerAddRewardType"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingManagerDeactivateRewardType"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingManagerEmergencyRewardWithdrawal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingManagerEmergencyWithdrawal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingManagerRewardPaid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingManagerStaked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingManagerWithdrawalCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingManagerWithdrawalInitiated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakingManagerWithdrawn"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface ModifyParametersEventObject {
    _param: string;
    _cType: string;
    _data: string;
}
export type ModifyParametersEvent = TypedEvent<[
    string,
    string,
    string
], ModifyParametersEventObject>;
export type ModifyParametersEventFilter = TypedEventFilter<ModifyParametersEvent>;
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface StakingManagerActivateRewardTypeEventObject {
    _id: BigNumber;
}
export type StakingManagerActivateRewardTypeEvent = TypedEvent<[
    BigNumber
], StakingManagerActivateRewardTypeEventObject>;
export type StakingManagerActivateRewardTypeEventFilter = TypedEventFilter<StakingManagerActivateRewardTypeEvent>;
export interface StakingManagerAddRewardTypeEventObject {
    _id: BigNumber;
    _rewardToken: string;
    _rewardPool: string;
}
export type StakingManagerAddRewardTypeEvent = TypedEvent<[
    BigNumber,
    string,
    string
], StakingManagerAddRewardTypeEventObject>;
export type StakingManagerAddRewardTypeEventFilter = TypedEventFilter<StakingManagerAddRewardTypeEvent>;
export interface StakingManagerDeactivateRewardTypeEventObject {
    _id: BigNumber;
}
export type StakingManagerDeactivateRewardTypeEvent = TypedEvent<[
    BigNumber
], StakingManagerDeactivateRewardTypeEventObject>;
export type StakingManagerDeactivateRewardTypeEventFilter = TypedEventFilter<StakingManagerDeactivateRewardTypeEvent>;
export interface StakingManagerEmergencyRewardWithdrawalEventObject {
    _account: string;
    _rewardToken: string;
    _wad: BigNumber;
}
export type StakingManagerEmergencyRewardWithdrawalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], StakingManagerEmergencyRewardWithdrawalEventObject>;
export type StakingManagerEmergencyRewardWithdrawalEventFilter = TypedEventFilter<StakingManagerEmergencyRewardWithdrawalEvent>;
export interface StakingManagerEmergencyWithdrawalEventObject {
    _account: string;
    _wad: BigNumber;
}
export type StakingManagerEmergencyWithdrawalEvent = TypedEvent<[
    string,
    BigNumber
], StakingManagerEmergencyWithdrawalEventObject>;
export type StakingManagerEmergencyWithdrawalEventFilter = TypedEventFilter<StakingManagerEmergencyWithdrawalEvent>;
export interface StakingManagerRewardPaidEventObject {
    _account: string;
    _rewardToken: string;
    _wad: BigNumber;
    _destination: string;
}
export type StakingManagerRewardPaidEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], StakingManagerRewardPaidEventObject>;
export type StakingManagerRewardPaidEventFilter = TypedEventFilter<StakingManagerRewardPaidEvent>;
export interface StakingManagerStakedEventObject {
    _account: string;
    _wad: BigNumber;
}
export type StakingManagerStakedEvent = TypedEvent<[
    string,
    BigNumber
], StakingManagerStakedEventObject>;
export type StakingManagerStakedEventFilter = TypedEventFilter<StakingManagerStakedEvent>;
export interface StakingManagerWithdrawalCancelledEventObject {
    _account: string;
    _wad: BigNumber;
}
export type StakingManagerWithdrawalCancelledEvent = TypedEvent<[
    string,
    BigNumber
], StakingManagerWithdrawalCancelledEventObject>;
export type StakingManagerWithdrawalCancelledEventFilter = TypedEventFilter<StakingManagerWithdrawalCancelledEvent>;
export interface StakingManagerWithdrawalInitiatedEventObject {
    _account: string;
    _wad: BigNumber;
}
export type StakingManagerWithdrawalInitiatedEvent = TypedEvent<[
    string,
    BigNumber
], StakingManagerWithdrawalInitiatedEventObject>;
export type StakingManagerWithdrawalInitiatedEventFilter = TypedEventFilter<StakingManagerWithdrawalInitiatedEvent>;
export interface StakingManagerWithdrawnEventObject {
    _account: string;
    _wad: BigNumber;
}
export type StakingManagerWithdrawnEvent = TypedEvent<[
    string,
    BigNumber
], StakingManagerWithdrawnEventObject>;
export type StakingManagerWithdrawnEventFilter = TypedEventFilter<StakingManagerWithdrawnEvent>;
export interface Stakingmanager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StakingmanagerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        _params(overrides?: CallOverrides): Promise<[BigNumber] & {
            cooldownPeriod: BigNumber;
        }>;
        _pendingWithdrawals(_account: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            timestamp: BigNumber;
        }>;
        _rewardTypes(_id: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            rewardToken: string;
            rewardPool: string;
            isActive: boolean;
            rewardIntegral: BigNumber;
            rewardRemaining: BigNumber;
        }>;
        activateRewardType(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addRewardType(_rewardToken: string, _rewardPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _authorized: boolean;
        }>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<[string[]] & {
            _accounts: string[];
        }>;
        cancelWithdrawal(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        checkpoint(_accounts: [string, string], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimableReward(_id: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _claimableReward: BigNumber;
        }>;
        deactivateRewardType(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        earned(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        emergencyWithdraw(_rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        emergencyWithdrawReward(_id: BigNumberish, _rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getReward(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getRewardAndForward(_account: string, _forwardTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        initiateWithdrawal(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        params(overrides?: CallOverrides): Promise<[
            IStakingManager.StakingManagerParamsStructOutput
        ] & {
            _stakingManagerParams: IStakingManager.StakingManagerParamsStructOutput;
        }>;
        pendingWithdrawals(_account: string, overrides?: CallOverrides): Promise<[
            IStakingManager.PendingWithdrawalStructOutput
        ] & {
            _pendingWithdrawal: IStakingManager.PendingWithdrawalStructOutput;
        }>;
        protocolToken(overrides?: CallOverrides): Promise<[string]>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rewardIntegralFor(_id: BigNumberish, _user: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _rewardIntegral: BigNumber;
        }>;
        rewardTypes(_id: BigNumberish, overrides?: CallOverrides): Promise<[
            IStakingManager.RewardTypeInfoStructOutput
        ] & {
            _rewardTypeInfo: IStakingManager.RewardTypeInfoStructOutput;
        }>;
        rewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        stake(_account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stakedBalances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        stakedSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        stakingToken(overrides?: CallOverrides): Promise<[string]>;
        userCheckpoint(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _params(overrides?: CallOverrides): Promise<BigNumber>;
    _pendingWithdrawals(_account: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        amount: BigNumber;
        timestamp: BigNumber;
    }>;
    _rewardTypes(_id: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        string,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        rewardToken: string;
        rewardPool: string;
        isActive: boolean;
        rewardIntegral: BigNumber;
        rewardRemaining: BigNumber;
    }>;
    activateRewardType(_id: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addRewardType(_rewardToken: string, _rewardPool: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    cancelWithdrawal(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    checkpoint(_accounts: [string, string], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimableReward(_id: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
    deactivateRewardType(_id: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    earned(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    emergencyWithdraw(_rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    emergencyWithdrawReward(_id: BigNumberish, _rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getReward(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getRewardAndForward(_account: string, _forwardTo: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    initiateWithdrawal(_wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    params(overrides?: CallOverrides): Promise<IStakingManager.StakingManagerParamsStructOutput>;
    pendingWithdrawals(_account: string, overrides?: CallOverrides): Promise<IStakingManager.PendingWithdrawalStructOutput>;
    protocolToken(overrides?: CallOverrides): Promise<string>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rewardIntegralFor(_id: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
    rewardTypes(_id: BigNumberish, overrides?: CallOverrides): Promise<IStakingManager.RewardTypeInfoStructOutput>;
    rewards(overrides?: CallOverrides): Promise<BigNumber>;
    stake(_account: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stakedBalances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    stakedSupply(overrides?: CallOverrides): Promise<BigNumber>;
    stakingToken(overrides?: CallOverrides): Promise<string>;
    userCheckpoint(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdraw(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _params(overrides?: CallOverrides): Promise<BigNumber>;
        _pendingWithdrawals(_account: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            amount: BigNumber;
            timestamp: BigNumber;
        }>;
        _rewardTypes(_id: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            rewardToken: string;
            rewardPool: string;
            isActive: boolean;
            rewardIntegral: BigNumber;
            rewardRemaining: BigNumber;
        }>;
        activateRewardType(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        addRewardType(_rewardToken: string, _rewardPool: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        cancelWithdrawal(overrides?: CallOverrides): Promise<void>;
        checkpoint(_accounts: [string, string], overrides?: CallOverrides): Promise<void>;
        claimableReward(_id: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        deactivateRewardType(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        earned(_account: string, overrides?: CallOverrides): Promise<IStakingManager.EarnedDataStructOutput[]>;
        emergencyWithdraw(_rescueReceiver: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        emergencyWithdrawReward(_id: BigNumberish, _rescueReceiver: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getReward(_account: string, overrides?: CallOverrides): Promise<void>;
        getRewardAndForward(_account: string, _forwardTo: string, overrides?: CallOverrides): Promise<void>;
        initiateWithdrawal(_wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        params(overrides?: CallOverrides): Promise<IStakingManager.StakingManagerParamsStructOutput>;
        pendingWithdrawals(_account: string, overrides?: CallOverrides): Promise<IStakingManager.PendingWithdrawalStructOutput>;
        protocolToken(overrides?: CallOverrides): Promise<string>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        rewardIntegralFor(_id: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardTypes(_id: BigNumberish, overrides?: CallOverrides): Promise<IStakingManager.RewardTypeInfoStructOutput>;
        rewards(overrides?: CallOverrides): Promise<BigNumber>;
        stake(_account: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        stakedBalances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        stakedSupply(overrides?: CallOverrides): Promise<BigNumber>;
        stakingToken(overrides?: CallOverrides): Promise<string>;
        userCheckpoint(_account: string, overrides?: CallOverrides): Promise<void>;
        withdraw(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "StakingManagerActivateRewardType(uint256)"(_id?: BigNumberish | null): StakingManagerActivateRewardTypeEventFilter;
        StakingManagerActivateRewardType(_id?: BigNumberish | null): StakingManagerActivateRewardTypeEventFilter;
        "StakingManagerAddRewardType(uint256,address,address)"(_id?: BigNumberish | null, _rewardToken?: string | null, _rewardPool?: string | null): StakingManagerAddRewardTypeEventFilter;
        StakingManagerAddRewardType(_id?: BigNumberish | null, _rewardToken?: string | null, _rewardPool?: string | null): StakingManagerAddRewardTypeEventFilter;
        "StakingManagerDeactivateRewardType(uint256)"(_id?: BigNumberish | null): StakingManagerDeactivateRewardTypeEventFilter;
        StakingManagerDeactivateRewardType(_id?: BigNumberish | null): StakingManagerDeactivateRewardTypeEventFilter;
        "StakingManagerEmergencyRewardWithdrawal(address,address,uint256)"(_account?: string | null, _rewardToken?: string | null, _wad?: null): StakingManagerEmergencyRewardWithdrawalEventFilter;
        StakingManagerEmergencyRewardWithdrawal(_account?: string | null, _rewardToken?: string | null, _wad?: null): StakingManagerEmergencyRewardWithdrawalEventFilter;
        "StakingManagerEmergencyWithdrawal(address,uint256)"(_account?: string | null, _wad?: null): StakingManagerEmergencyWithdrawalEventFilter;
        StakingManagerEmergencyWithdrawal(_account?: string | null, _wad?: null): StakingManagerEmergencyWithdrawalEventFilter;
        "StakingManagerRewardPaid(address,address,uint256,address)"(_account?: string | null, _rewardToken?: string | null, _wad?: null, _destination?: string | null): StakingManagerRewardPaidEventFilter;
        StakingManagerRewardPaid(_account?: string | null, _rewardToken?: string | null, _wad?: null, _destination?: string | null): StakingManagerRewardPaidEventFilter;
        "StakingManagerStaked(address,uint256)"(_account?: string | null, _wad?: null): StakingManagerStakedEventFilter;
        StakingManagerStaked(_account?: string | null, _wad?: null): StakingManagerStakedEventFilter;
        "StakingManagerWithdrawalCancelled(address,uint256)"(_account?: string | null, _wad?: null): StakingManagerWithdrawalCancelledEventFilter;
        StakingManagerWithdrawalCancelled(_account?: string | null, _wad?: null): StakingManagerWithdrawalCancelledEventFilter;
        "StakingManagerWithdrawalInitiated(address,uint256)"(_account?: string | null, _wad?: null): StakingManagerWithdrawalInitiatedEventFilter;
        StakingManagerWithdrawalInitiated(_account?: string | null, _wad?: null): StakingManagerWithdrawalInitiatedEventFilter;
        "StakingManagerWithdrawn(address,uint256)"(_account?: string | null, _wad?: null): StakingManagerWithdrawnEventFilter;
        StakingManagerWithdrawn(_account?: string | null, _wad?: null): StakingManagerWithdrawnEventFilter;
    };
    estimateGas: {
        _params(overrides?: CallOverrides): Promise<BigNumber>;
        _pendingWithdrawals(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        _rewardTypes(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        activateRewardType(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        addRewardType(_rewardToken: string, _rewardPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        cancelWithdrawal(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        checkpoint(_accounts: [string, string], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimableReward(_id: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        deactivateRewardType(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        earned(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        emergencyWithdraw(_rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        emergencyWithdrawReward(_id: BigNumberish, _rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getReward(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getRewardAndForward(_account: string, _forwardTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        initiateWithdrawal(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        params(overrides?: CallOverrides): Promise<BigNumber>;
        pendingWithdrawals(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        protocolToken(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rewardIntegralFor(_id: BigNumberish, _user: string, overrides?: CallOverrides): Promise<BigNumber>;
        rewardTypes(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        rewards(overrides?: CallOverrides): Promise<BigNumber>;
        stake(_account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stakedBalances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        stakedSupply(overrides?: CallOverrides): Promise<BigNumber>;
        stakingToken(overrides?: CallOverrides): Promise<BigNumber>;
        userCheckpoint(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _pendingWithdrawals(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _rewardTypes(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        activateRewardType(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addRewardType(_rewardToken: string, _rewardPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelWithdrawal(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        checkpoint(_accounts: [string, string], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimableReward(_id: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deactivateRewardType(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        earned(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        emergencyWithdraw(_rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        emergencyWithdrawReward(_id: BigNumberish, _rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getReward(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getRewardAndForward(_account: string, _forwardTo: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        initiateWithdrawal(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingWithdrawals(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protocolToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rewardIntegralFor(_id: BigNumberish, _user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardTypes(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stake(_account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stakedBalances(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakedSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userCheckpoint(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
