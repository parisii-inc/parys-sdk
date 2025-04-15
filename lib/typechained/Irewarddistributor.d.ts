import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IrewarddistributorInterface extends utils.Interface {
    functions: {
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "claim(address,uint256,bytes32[])": FunctionFragment;
        "emergencyWidthdraw(address,address,uint256)": FunctionFragment;
        "epochCounter()": FunctionFragment;
        "epochDuration()": FunctionFragment;
        "isClaimed(bytes32,address)": FunctionFragment;
        "lastUpdatedTime()": FunctionFragment;
        "merkleRoots(address)": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "multiClaim(address[],uint256[],bytes32[][])": FunctionFragment;
        "pause()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "rootSetter()": FunctionFragment;
        "unpause()": FunctionFragment;
        "updateMerkleRoots(address[],bytes32[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "claim" | "emergencyWidthdraw" | "epochCounter" | "epochDuration" | "isClaimed" | "lastUpdatedTime" | "merkleRoots" | "modifyParameters" | "multiClaim" | "pause" | "removeAuthorization" | "rootSetter" | "unpause" | "updateMerkleRoots"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "claim", values: [string, BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "emergencyWidthdraw", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "epochCounter", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochDuration", values?: undefined): string;
    encodeFunctionData(functionFragment: "isClaimed", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "lastUpdatedTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "merkleRoots", values: [string]): string;
    encodeFunctionData(functionFragment: "modifyParameters", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "multiClaim", values: [string[], BigNumberish[], BytesLike[][]]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "rootSetter", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateMerkleRoots", values: [string[], BytesLike[]]): string;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emergencyWidthdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochCounter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochDuration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdatedTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "merkleRoots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rootSetter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateMerkleRoots", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "RewardDistributorEmergencyWithdrawal(address,address,uint256)": EventFragment;
        "RewardDistributorMerkleRootUpdated(address,bytes32,uint256)": EventFragment;
        "RewardDistributorRewardClaimed(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardDistributorEmergencyWithdrawal"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardDistributorMerkleRootUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RewardDistributorRewardClaimed"): EventFragment;
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
export interface RewardDistributorEmergencyWithdrawalEventObject {
    _rescueReceiver: string;
    _rewardToken: string;
    _wad: BigNumber;
}
export type RewardDistributorEmergencyWithdrawalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], RewardDistributorEmergencyWithdrawalEventObject>;
export type RewardDistributorEmergencyWithdrawalEventFilter = TypedEventFilter<RewardDistributorEmergencyWithdrawalEvent>;
export interface RewardDistributorMerkleRootUpdatedEventObject {
    _rewardToken: string;
    _merkleRoot: string;
    _epochCounter: BigNumber;
}
export type RewardDistributorMerkleRootUpdatedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], RewardDistributorMerkleRootUpdatedEventObject>;
export type RewardDistributorMerkleRootUpdatedEventFilter = TypedEventFilter<RewardDistributorMerkleRootUpdatedEvent>;
export interface RewardDistributorRewardClaimedEventObject {
    _account: string;
    _rewardToken: string;
    _wad: BigNumber;
}
export type RewardDistributorRewardClaimedEvent = TypedEvent<[
    string,
    string,
    BigNumber
], RewardDistributorRewardClaimedEventObject>;
export type RewardDistributorRewardClaimedEventFilter = TypedEventFilter<RewardDistributorRewardClaimedEvent>;
export interface Irewarddistributor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IrewarddistributorInterface;
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
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _authorized: boolean;
        }>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<[string[]] & {
            _accounts: string[];
        }>;
        claim(_token: string, _wad: BigNumberish, _merkleProof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        emergencyWidthdraw(_rescueReceiver: string, _token: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        epochCounter(overrides?: CallOverrides): Promise<[BigNumber] & {
            _epochCounter: BigNumber;
        }>;
        epochDuration(overrides?: CallOverrides): Promise<[BigNumber] & {
            _epochDuration: BigNumber;
        }>;
        isClaimed(_merkleRoot: BytesLike, _account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _isClaimed: boolean;
        }>;
        lastUpdatedTime(overrides?: CallOverrides): Promise<[BigNumber] & {
            _lastUpdatedTime: BigNumber;
        }>;
        merkleRoots(_token: string, overrides?: CallOverrides): Promise<[string] & {
            _root: string;
        }>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        multiClaim(_tokens: string[], _wads: BigNumberish[], _merkleProofs: BytesLike[][], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rootSetter(overrides?: CallOverrides): Promise<[string] & {
            _rootSetter: string;
        }>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateMerkleRoots(_tokens: string[], _merkleRoots: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    claim(_token: string, _wad: BigNumberish, _merkleProof: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    emergencyWidthdraw(_rescueReceiver: string, _token: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    epochCounter(overrides?: CallOverrides): Promise<BigNumber>;
    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;
    isClaimed(_merkleRoot: BytesLike, _account: string, overrides?: CallOverrides): Promise<boolean>;
    lastUpdatedTime(overrides?: CallOverrides): Promise<BigNumber>;
    merkleRoots(_token: string, overrides?: CallOverrides): Promise<string>;
    modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    multiClaim(_tokens: string[], _wads: BigNumberish[], _merkleProofs: BytesLike[][], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rootSetter(overrides?: CallOverrides): Promise<string>;
    unpause(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateMerkleRoots(_tokens: string[], _merkleRoots: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        claim(_token: string, _wad: BigNumberish, _merkleProof: BytesLike[], overrides?: CallOverrides): Promise<void>;
        emergencyWidthdraw(_rescueReceiver: string, _token: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        epochCounter(overrides?: CallOverrides): Promise<BigNumber>;
        epochDuration(overrides?: CallOverrides): Promise<BigNumber>;
        isClaimed(_merkleRoot: BytesLike, _account: string, overrides?: CallOverrides): Promise<boolean>;
        lastUpdatedTime(overrides?: CallOverrides): Promise<BigNumber>;
        merkleRoots(_token: string, overrides?: CallOverrides): Promise<string>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        multiClaim(_tokens: string[], _wads: BigNumberish[], _merkleProofs: BytesLike[][], overrides?: CallOverrides): Promise<void>;
        pause(overrides?: CallOverrides): Promise<void>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        rootSetter(overrides?: CallOverrides): Promise<string>;
        unpause(overrides?: CallOverrides): Promise<void>;
        updateMerkleRoots(_tokens: string[], _merkleRoots: BytesLike[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "RewardDistributorEmergencyWithdrawal(address,address,uint256)"(_rescueReceiver?: string | null, _rewardToken?: string | null, _wad?: null): RewardDistributorEmergencyWithdrawalEventFilter;
        RewardDistributorEmergencyWithdrawal(_rescueReceiver?: string | null, _rewardToken?: string | null, _wad?: null): RewardDistributorEmergencyWithdrawalEventFilter;
        "RewardDistributorMerkleRootUpdated(address,bytes32,uint256)"(_rewardToken?: string | null, _merkleRoot?: null, _epochCounter?: null): RewardDistributorMerkleRootUpdatedEventFilter;
        RewardDistributorMerkleRootUpdated(_rewardToken?: string | null, _merkleRoot?: null, _epochCounter?: null): RewardDistributorMerkleRootUpdatedEventFilter;
        "RewardDistributorRewardClaimed(address,address,uint256)"(_account?: string | null, _rewardToken?: string | null, _wad?: null): RewardDistributorRewardClaimedEventFilter;
        RewardDistributorRewardClaimed(_account?: string | null, _rewardToken?: string | null, _wad?: null): RewardDistributorRewardClaimedEventFilter;
    };
    estimateGas: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        claim(_token: string, _wad: BigNumberish, _merkleProof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        emergencyWidthdraw(_rescueReceiver: string, _token: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        epochCounter(overrides?: CallOverrides): Promise<BigNumber>;
        epochDuration(overrides?: CallOverrides): Promise<BigNumber>;
        isClaimed(_merkleRoot: BytesLike, _account: string, overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdatedTime(overrides?: CallOverrides): Promise<BigNumber>;
        merkleRoots(_token: string, overrides?: CallOverrides): Promise<BigNumber>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        multiClaim(_tokens: string[], _wads: BigNumberish[], _merkleProofs: BytesLike[][], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rootSetter(overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateMerkleRoots(_tokens: string[], _merkleRoots: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(_token: string, _wad: BigNumberish, _merkleProof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        emergencyWidthdraw(_rescueReceiver: string, _token: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        epochCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epochDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isClaimed(_merkleRoot: BytesLike, _account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUpdatedTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        merkleRoots(_token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        multiClaim(_tokens: string[], _wads: BigNumberish[], _merkleProofs: BytesLike[][], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rootSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateMerkleRoots(_tokens: string[], _merkleRoots: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
