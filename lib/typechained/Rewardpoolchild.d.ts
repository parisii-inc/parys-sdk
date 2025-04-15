import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IRewardPool {
    type RewardPoolParamsStruct = {
        stakingManager: string;
        duration: BigNumberish;
        newRewardRatio: BigNumberish;
    };
    type RewardPoolParamsStructOutput = [string, BigNumber, BigNumber] & {
        stakingManager: string;
        duration: BigNumber;
        newRewardRatio: BigNumber;
    };
}
export interface RewardpoolchildInterface extends utils.Interface {
    functions: {
        "_params()": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "currentRewards()": FunctionFragment;
        "decreaseStake(uint256)": FunctionFragment;
        "earned()": FunctionFragment;
        "emergencyWithdraw(address,uint256)": FunctionFragment;
        "factory()": FunctionFragment;
        "getReward()": FunctionFragment;
        "historicalRewards()": FunctionFragment;
        "increaseStake(uint256)": FunctionFragment;
        "lastTimeRewardApplicable()": FunctionFragment;
        "lastUpdateTime()": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "notifyRewardAmount(uint256)": FunctionFragment;
        "params()": FunctionFragment;
        "periodFinish()": FunctionFragment;
        "queueNewRewards(uint256)": FunctionFragment;
        "queuedRewards()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "rewardPerToken()": FunctionFragment;
        "rewardPerTokenPaid()": FunctionFragment;
        "rewardPerTokenStored()": FunctionFragment;
        "rewardRate()": FunctionFragment;
        "rewardToken()": FunctionFragment;
        "rewards()": FunctionFragment;
        "stake(uint256)": FunctionFragment;
        "totalStaked()": FunctionFragment;
        "updateRewardHelper()": FunctionFragment;
        "withdraw(uint256,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_params" | "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "currentRewards" | "decreaseStake" | "earned" | "emergencyWithdraw" | "factory" | "getReward" | "historicalRewards" | "increaseStake" | "lastTimeRewardApplicable" | "lastUpdateTime" | "modifyParameters" | "notifyRewardAmount" | "params" | "periodFinish" | "queueNewRewards" | "queuedRewards" | "removeAuthorization" | "rewardPerToken" | "rewardPerTokenPaid" | "rewardPerTokenStored" | "rewardRate" | "rewardToken" | "rewards" | "stake" | "totalStaked" | "updateRewardHelper" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "_params", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseStake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "earned", values?: undefined): string;
    encodeFunctionData(functionFragment: "emergencyWithdraw", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
    encodeFunctionData(functionFragment: "historicalRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseStake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "lastTimeRewardApplicable", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastUpdateTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyParameters", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "notifyRewardAmount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "params", values?: undefined): string;
    encodeFunctionData(functionFragment: "periodFinish", values?: undefined): string;
    encodeFunctionData(functionFragment: "queueNewRewards", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "queuedRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardPerToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardPerTokenPaid", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardPerTokenStored", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewardToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "rewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalStaked", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateRewardHelper", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, boolean]): string;
    decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "historicalRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastTimeRewardApplicable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdateTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "notifyRewardAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "periodFinish", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueNewRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queuedRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerTokenPaid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardPerTokenStored", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRewardHelper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "RewardPoolDecreaseStake(address,uint256)": EventFragment;
        "RewardPoolEmergencyWithdrawal(address,uint256)": EventFragment;
        "RewardPoolIncreaseStake(address,uint256)": EventFragment;
        "RewardPoolRewardAdded(uint256)": EventFragment;
        "RewardPoolRewardPaid(address,uint256)": EventFragment;
        "RewardPoolStaked(address,uint256)": EventFragment;
        "RewardPoolWithdrawn(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardPoolDecreaseStake"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardPoolEmergencyWithdrawal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardPoolIncreaseStake"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardPoolRewardAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardPoolRewardPaid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardPoolStaked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardPoolWithdrawn"): EventFragment;
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
export interface RewardPoolDecreaseStakeEventObject {
    _account: string;
    _amount: BigNumber;
}
export type RewardPoolDecreaseStakeEvent = TypedEvent<[
    string,
    BigNumber
], RewardPoolDecreaseStakeEventObject>;
export type RewardPoolDecreaseStakeEventFilter = TypedEventFilter<RewardPoolDecreaseStakeEvent>;
export interface RewardPoolEmergencyWithdrawalEventObject {
    _account: string;
    _amount: BigNumber;
}
export type RewardPoolEmergencyWithdrawalEvent = TypedEvent<[
    string,
    BigNumber
], RewardPoolEmergencyWithdrawalEventObject>;
export type RewardPoolEmergencyWithdrawalEventFilter = TypedEventFilter<RewardPoolEmergencyWithdrawalEvent>;
export interface RewardPoolIncreaseStakeEventObject {
    _account: string;
    _amount: BigNumber;
}
export type RewardPoolIncreaseStakeEvent = TypedEvent<[
    string,
    BigNumber
], RewardPoolIncreaseStakeEventObject>;
export type RewardPoolIncreaseStakeEventFilter = TypedEventFilter<RewardPoolIncreaseStakeEvent>;
export interface RewardPoolRewardAddedEventObject {
    _reward: BigNumber;
}
export type RewardPoolRewardAddedEvent = TypedEvent<[
    BigNumber
], RewardPoolRewardAddedEventObject>;
export type RewardPoolRewardAddedEventFilter = TypedEventFilter<RewardPoolRewardAddedEvent>;
export interface RewardPoolRewardPaidEventObject {
    _account: string;
    _reward: BigNumber;
}
export type RewardPoolRewardPaidEvent = TypedEvent<[
    string,
    BigNumber
], RewardPoolRewardPaidEventObject>;
export type RewardPoolRewardPaidEventFilter = TypedEventFilter<RewardPoolRewardPaidEvent>;
export interface RewardPoolStakedEventObject {
    _account: string;
    _amount: BigNumber;
}
export type RewardPoolStakedEvent = TypedEvent<[
    string,
    BigNumber
], RewardPoolStakedEventObject>;
export type RewardPoolStakedEventFilter = TypedEventFilter<RewardPoolStakedEvent>;
export interface RewardPoolWithdrawnEventObject {
    _account: string;
    _amount: BigNumber;
}
export type RewardPoolWithdrawnEvent = TypedEvent<[
    string,
    BigNumber
], RewardPoolWithdrawnEventObject>;
export type RewardPoolWithdrawnEventFilter = TypedEventFilter<RewardPoolWithdrawnEvent>;
export interface Rewardpoolchild extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RewardpoolchildInterface;
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
        _params(overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber
        ] & {
            stakingManager: string;
            duration: BigNumber;
            newRewardRatio: BigNumber;
        }>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _authorized: boolean;
        }>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<[string[]] & {
            _accounts: string[];
        }>;
        currentRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        decreaseStake(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        earned(overrides?: CallOverrides): Promise<[BigNumber] & {
            _earned: BigNumber;
        }>;
        emergencyWithdraw(_rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        getReward(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        historicalRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseStake(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<[BigNumber] & {
            _lastTime: BigNumber;
        }>;
        lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        notifyRewardAmount(_reward: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        params(overrides?: CallOverrides): Promise<[
            IRewardPool.RewardPoolParamsStructOutput
        ] & {
            _rewardPoolParams: IRewardPool.RewardPoolParamsStructOutput;
        }>;
        periodFinish(overrides?: CallOverrides): Promise<[BigNumber]>;
        queueNewRewards(_rewardsToQueue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        queuedRewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rewardPerToken(overrides?: CallOverrides): Promise<[BigNumber] & {
            _rewardPerToken: BigNumber;
        }>;
        rewardPerTokenPaid(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        rewardToken(overrides?: CallOverrides): Promise<[string]>;
        rewards(overrides?: CallOverrides): Promise<[BigNumber]>;
        stake(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        totalStaked(overrides?: CallOverrides): Promise<[BigNumber] & {
            _totalStakedAmt: BigNumber;
        }>;
        updateRewardHelper(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdraw(_wad: BigNumberish, _claim: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _params(overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber
    ] & {
        stakingManager: string;
        duration: BigNumber;
        newRewardRatio: BigNumber;
    }>;
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    currentRewards(overrides?: CallOverrides): Promise<BigNumber>;
    decreaseStake(_wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    earned(overrides?: CallOverrides): Promise<BigNumber>;
    emergencyWithdraw(_rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    getReward(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;
    increaseStake(_wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;
    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
    modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    notifyRewardAmount(_reward: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    params(overrides?: CallOverrides): Promise<IRewardPool.RewardPoolParamsStructOutput>;
    periodFinish(overrides?: CallOverrides): Promise<BigNumber>;
    queueNewRewards(_rewardsToQueue: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;
    rewardPerTokenPaid(overrides?: CallOverrides): Promise<BigNumber>;
    rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;
    rewardRate(overrides?: CallOverrides): Promise<BigNumber>;
    rewardToken(overrides?: CallOverrides): Promise<string>;
    rewards(overrides?: CallOverrides): Promise<BigNumber>;
    stake(_wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;
    updateRewardHelper(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdraw(_wad: BigNumberish, _claim: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _params(overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber
        ] & {
            stakingManager: string;
            duration: BigNumber;
            newRewardRatio: BigNumber;
        }>;
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        currentRewards(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseStake(_wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        earned(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdraw(_rescueReceiver: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        factory(overrides?: CallOverrides): Promise<string>;
        getReward(overrides?: CallOverrides): Promise<void>;
        historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;
        increaseStake(_wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        notifyRewardAmount(_reward: BigNumberish, overrides?: CallOverrides): Promise<void>;
        params(overrides?: CallOverrides): Promise<IRewardPool.RewardPoolParamsStructOutput>;
        periodFinish(overrides?: CallOverrides): Promise<BigNumber>;
        queueNewRewards(_rewardsToQueue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenPaid(overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;
        rewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<string>;
        rewards(overrides?: CallOverrides): Promise<BigNumber>;
        stake(_wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        totalStaked(overrides?: CallOverrides): Promise<BigNumber>;
        updateRewardHelper(overrides?: CallOverrides): Promise<void>;
        withdraw(_wad: BigNumberish, _claim: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "RewardPoolDecreaseStake(address,uint256)"(_account?: string | null, _amount?: null): RewardPoolDecreaseStakeEventFilter;
        RewardPoolDecreaseStake(_account?: string | null, _amount?: null): RewardPoolDecreaseStakeEventFilter;
        "RewardPoolEmergencyWithdrawal(address,uint256)"(_account?: string | null, _amount?: null): RewardPoolEmergencyWithdrawalEventFilter;
        RewardPoolEmergencyWithdrawal(_account?: string | null, _amount?: null): RewardPoolEmergencyWithdrawalEventFilter;
        "RewardPoolIncreaseStake(address,uint256)"(_account?: string | null, _amount?: null): RewardPoolIncreaseStakeEventFilter;
        RewardPoolIncreaseStake(_account?: string | null, _amount?: null): RewardPoolIncreaseStakeEventFilter;
        "RewardPoolRewardAdded(uint256)"(_reward?: null): RewardPoolRewardAddedEventFilter;
        RewardPoolRewardAdded(_reward?: null): RewardPoolRewardAddedEventFilter;
        "RewardPoolRewardPaid(address,uint256)"(_account?: string | null, _reward?: null): RewardPoolRewardPaidEventFilter;
        RewardPoolRewardPaid(_account?: string | null, _reward?: null): RewardPoolRewardPaidEventFilter;
        "RewardPoolStaked(address,uint256)"(_account?: string | null, _amount?: null): RewardPoolStakedEventFilter;
        RewardPoolStaked(_account?: string | null, _amount?: null): RewardPoolStakedEventFilter;
        "RewardPoolWithdrawn(address,uint256)"(_account?: string | null, _amount?: null): RewardPoolWithdrawnEventFilter;
        RewardPoolWithdrawn(_account?: string | null, _amount?: null): RewardPoolWithdrawnEventFilter;
    };
    estimateGas: {
        _params(overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        currentRewards(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseStake(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        earned(overrides?: CallOverrides): Promise<BigNumber>;
        emergencyWithdraw(_rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getReward(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        historicalRewards(overrides?: CallOverrides): Promise<BigNumber>;
        increaseStake(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        notifyRewardAmount(_reward: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        params(overrides?: CallOverrides): Promise<BigNumber>;
        periodFinish(overrides?: CallOverrides): Promise<BigNumber>;
        queueNewRewards(_rewardsToQueue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        queuedRewards(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rewardPerToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenPaid(overrides?: CallOverrides): Promise<BigNumber>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<BigNumber>;
        rewardRate(overrides?: CallOverrides): Promise<BigNumber>;
        rewardToken(overrides?: CallOverrides): Promise<BigNumber>;
        rewards(overrides?: CallOverrides): Promise<BigNumber>;
        stake(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        totalStaked(overrides?: CallOverrides): Promise<BigNumber>;
        updateRewardHelper(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdraw(_wad: BigNumberish, _claim: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseStake(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        earned(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emergencyWithdraw(_rescueReceiver: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReward(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        historicalRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseStake(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lastTimeRewardApplicable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        notifyRewardAmount(_reward: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        periodFinish(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queueNewRewards(_rewardsToQueue: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        queuedRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rewardPerToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerTokenPaid(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardPerTokenStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stake(_wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        totalStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateRewardHelper(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdraw(_wad: BigNumberish, _claim: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
