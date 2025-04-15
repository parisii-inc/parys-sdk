import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface AccountingJobInterface extends utils.Interface {
    functions: {
        "accountingEngine()": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "rewardAmount()": FunctionFragment;
        "shouldWorkAuctionDebt()": FunctionFragment;
        "shouldWorkAuctionSurplus()": FunctionFragment;
        "shouldWorkPopDebtFromQueue()": FunctionFragment;
        "shouldWorkTransferExtraSurplus()": FunctionFragment;
        "stabilityFeeTreasury()": FunctionFragment;
        "workAuctionDebt()": FunctionFragment;
        "workAuctionSurplus()": FunctionFragment;
        "workPopDebtFromQueue(uint256)": FunctionFragment;
        "workTransferExtraSurplus()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accountingEngine" | "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "modifyParameters" | "removeAuthorization" | "rewardAmount" | "shouldWorkAuctionDebt" | "shouldWorkAuctionSurplus" | "shouldWorkPopDebtFromQueue" | "shouldWorkTransferExtraSurplus" | "stabilityFeeTreasury" | "workAuctionDebt" | "workAuctionSurplus" | "workPopDebtFromQueue" | "workTransferExtraSurplus"): FunctionFragment;
    encodeFunctionData(functionFragment: "accountingEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyParameters", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "rewardAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "shouldWorkAuctionDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "shouldWorkAuctionSurplus", values?: undefined): string;
    encodeFunctionData(functionFragment: "shouldWorkPopDebtFromQueue", values?: undefined): string;
    encodeFunctionData(functionFragment: "shouldWorkTransferExtraSurplus", values?: undefined): string;
    encodeFunctionData(functionFragment: "stabilityFeeTreasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "workAuctionDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "workAuctionSurplus", values?: undefined): string;
    encodeFunctionData(functionFragment: "workPopDebtFromQueue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "workTransferExtraSurplus", values?: undefined): string;
    decodeFunctionResult(functionFragment: "accountingEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rewardAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shouldWorkAuctionDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shouldWorkAuctionSurplus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shouldWorkPopDebtFromQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shouldWorkTransferExtraSurplus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stabilityFeeTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "workAuctionDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "workAuctionSurplus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "workPopDebtFromQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "workTransferExtraSurplus", data: BytesLike): Result;
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
export interface AccountingJob extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AccountingJobInterface;
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
        accountingEngine(overrides?: CallOverrides): Promise<[string]>;
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
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rewardAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        shouldWorkAuctionDebt(overrides?: CallOverrides): Promise<[boolean]>;
        shouldWorkAuctionSurplus(overrides?: CallOverrides): Promise<[boolean]>;
        shouldWorkPopDebtFromQueue(overrides?: CallOverrides): Promise<[boolean]>;
        shouldWorkTransferExtraSurplus(overrides?: CallOverrides): Promise<[boolean]>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<[string]>;
        workAuctionDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        workAuctionSurplus(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        workPopDebtFromQueue(_debtBlockTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        workTransferExtraSurplus(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    accountingEngine(overrides?: CallOverrides): Promise<string>;
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rewardAmount(overrides?: CallOverrides): Promise<BigNumber>;
    shouldWorkAuctionDebt(overrides?: CallOverrides): Promise<boolean>;
    shouldWorkAuctionSurplus(overrides?: CallOverrides): Promise<boolean>;
    shouldWorkPopDebtFromQueue(overrides?: CallOverrides): Promise<boolean>;
    shouldWorkTransferExtraSurplus(overrides?: CallOverrides): Promise<boolean>;
    stabilityFeeTreasury(overrides?: CallOverrides): Promise<string>;
    workAuctionDebt(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    workAuctionSurplus(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    workPopDebtFromQueue(_debtBlockTimestamp: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    workTransferExtraSurplus(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        accountingEngine(overrides?: CallOverrides): Promise<string>;
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        rewardAmount(overrides?: CallOverrides): Promise<BigNumber>;
        shouldWorkAuctionDebt(overrides?: CallOverrides): Promise<boolean>;
        shouldWorkAuctionSurplus(overrides?: CallOverrides): Promise<boolean>;
        shouldWorkPopDebtFromQueue(overrides?: CallOverrides): Promise<boolean>;
        shouldWorkTransferExtraSurplus(overrides?: CallOverrides): Promise<boolean>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<string>;
        workAuctionDebt(overrides?: CallOverrides): Promise<void>;
        workAuctionSurplus(overrides?: CallOverrides): Promise<void>;
        workPopDebtFromQueue(_debtBlockTimestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;
        workTransferExtraSurplus(overrides?: CallOverrides): Promise<void>;
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
        accountingEngine(overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rewardAmount(overrides?: CallOverrides): Promise<BigNumber>;
        shouldWorkAuctionDebt(overrides?: CallOverrides): Promise<BigNumber>;
        shouldWorkAuctionSurplus(overrides?: CallOverrides): Promise<BigNumber>;
        shouldWorkPopDebtFromQueue(overrides?: CallOverrides): Promise<BigNumber>;
        shouldWorkTransferExtraSurplus(overrides?: CallOverrides): Promise<BigNumber>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<BigNumber>;
        workAuctionDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        workAuctionSurplus(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        workPopDebtFromQueue(_debtBlockTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        workTransferExtraSurplus(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accountingEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rewardAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shouldWorkAuctionDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shouldWorkAuctionSurplus(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shouldWorkPopDebtFromQueue(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shouldWorkTransferExtraSurplus(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        workAuctionDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        workAuctionSurplus(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        workPopDebtFromQueue(_debtBlockTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        workTransferExtraSurplus(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
