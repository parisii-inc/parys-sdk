import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IoraclejobInterface extends utils.Interface {
    functions: {
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "oracleRelayer()": FunctionFragment;
        "pidRateSetter()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "rewardAmount()": FunctionFragment;
        "shouldWorkUpdateCollateralPrice()": FunctionFragment;
        "shouldWorkUpdateRate()": FunctionFragment;
        "stabilityFeeTreasury()": FunctionFragment;
        "workUpdateCollateralPrice(bytes32)": FunctionFragment;
        "workUpdateRate()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "modifyParameters" | "oracleRelayer" | "pidRateSetter" | "removeAuthorization" | "rewardAmount" | "shouldWorkUpdateCollateralPrice" | "shouldWorkUpdateRate" | "stabilityFeeTreasury" | "workUpdateCollateralPrice" | "workUpdateRate"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyParameters", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "oracleRelayer", values?: undefined): string;
    encodeFunctionData(functionFragment: "pidRateSetter", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "shouldWorkUpdateCollateralPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "shouldWorkUpdateRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "stabilityFeeTreasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "workUpdateCollateralPrice", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "workUpdateRate", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracleRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pidRateSetter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shouldWorkUpdateCollateralPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shouldWorkUpdateRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stabilityFeeTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "workUpdateCollateralPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "workUpdateRate", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "Rewarded(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Rewarded"): EventFragment;
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
export interface RewardedEventObject {
    _rewardedAccount: string;
    _rewardAmount: BigNumber;
}
export type RewardedEvent = TypedEvent<[
    string,
    BigNumber
], RewardedEventObject>;
export type RewardedEventFilter = TypedEventFilter<RewardedEvent>;
export interface Ioraclejob extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IoraclejobInterface;
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
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        oracleRelayer(overrides?: CallOverrides): Promise<[string] & {
            _oracleRelayer: string;
        }>;
        pidRateSetter(overrides?: CallOverrides): Promise<[string] & {
            _pidRateSetter: string;
        }>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rewardAmount(overrides?: CallOverrides): Promise<[BigNumber] & {
            _rewardAmount: BigNumber;
        }>;
        shouldWorkUpdateCollateralPrice(overrides?: CallOverrides): Promise<[boolean] & {
            _shouldWorkUpdateCollateralPrice: boolean;
        }>;
        shouldWorkUpdateRate(overrides?: CallOverrides): Promise<[boolean] & {
            _shouldWorkUpdateRate: boolean;
        }>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<[string] & {
            _stabilityFeeTreasury: string;
        }>;
        workUpdateCollateralPrice(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        workUpdateRate(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    oracleRelayer(overrides?: CallOverrides): Promise<string>;
    pidRateSetter(overrides?: CallOverrides): Promise<string>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rewardAmount(overrides?: CallOverrides): Promise<BigNumber>;
    shouldWorkUpdateCollateralPrice(overrides?: CallOverrides): Promise<boolean>;
    shouldWorkUpdateRate(overrides?: CallOverrides): Promise<boolean>;
    stabilityFeeTreasury(overrides?: CallOverrides): Promise<string>;
    workUpdateCollateralPrice(_cType: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    workUpdateRate(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        oracleRelayer(overrides?: CallOverrides): Promise<string>;
        pidRateSetter(overrides?: CallOverrides): Promise<string>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        rewardAmount(overrides?: CallOverrides): Promise<BigNumber>;
        shouldWorkUpdateCollateralPrice(overrides?: CallOverrides): Promise<boolean>;
        shouldWorkUpdateRate(overrides?: CallOverrides): Promise<boolean>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<string>;
        workUpdateCollateralPrice(_cType: BytesLike, overrides?: CallOverrides): Promise<void>;
        workUpdateRate(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "Rewarded(address,uint256)"(_rewardedAccount?: null, _rewardAmount?: null): RewardedEventFilter;
        Rewarded(_rewardedAccount?: null, _rewardAmount?: null): RewardedEventFilter;
    };
    estimateGas: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        oracleRelayer(overrides?: CallOverrides): Promise<BigNumber>;
        pidRateSetter(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rewardAmount(overrides?: CallOverrides): Promise<BigNumber>;
        shouldWorkUpdateCollateralPrice(overrides?: CallOverrides): Promise<BigNumber>;
        shouldWorkUpdateRate(overrides?: CallOverrides): Promise<BigNumber>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<BigNumber>;
        workUpdateCollateralPrice(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        workUpdateRate(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        oracleRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pidRateSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rewardAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shouldWorkUpdateCollateralPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shouldWorkUpdateRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        workUpdateCollateralPrice(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        workUpdateRate(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
