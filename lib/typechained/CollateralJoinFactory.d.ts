import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CollateralJoinFactoryInterface extends utils.Interface {
    functions: {
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "collateralJoins(bytes32)": FunctionFragment;
        "collateralJoinsList()": FunctionFragment;
        "collateralTypesList()": FunctionFragment;
        "contractEnabled()": FunctionFragment;
        "deployCollateralJoin(bytes32,address)": FunctionFragment;
        "deployDelegatableCollateralJoin(bytes32,address,address)": FunctionFragment;
        "disableCollateralJoin(bytes32)": FunctionFragment;
        "disableContract()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "safeEngine()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "collateralJoins" | "collateralJoinsList" | "collateralTypesList" | "contractEnabled" | "deployCollateralJoin" | "deployDelegatableCollateralJoin" | "disableCollateralJoin" | "disableContract" | "removeAuthorization" | "safeEngine"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralJoins", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "collateralJoinsList", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralTypesList", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployCollateralJoin", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "deployDelegatableCollateralJoin", values: [BytesLike, string, string]): string;
    encodeFunctionData(functionFragment: "disableCollateralJoin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "disableContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "safeEngine", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralJoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralJoinsList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralTypesList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployCollateralJoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployDelegatableCollateralJoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableCollateralJoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "DeployCollateralJoin(bytes32,address,address)": EventFragment;
        "DisableCollateralJoin(address)": EventFragment;
        "DisableContract()": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DeployCollateralJoin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisableCollateralJoin"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisableContract"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface DeployCollateralJoinEventObject {
    _cType: string;
    _collateral: string;
    _collateralJoin: string;
}
export type DeployCollateralJoinEvent = TypedEvent<[
    string,
    string,
    string
], DeployCollateralJoinEventObject>;
export type DeployCollateralJoinEventFilter = TypedEventFilter<DeployCollateralJoinEvent>;
export interface DisableCollateralJoinEventObject {
    _collateralJoin: string;
}
export type DisableCollateralJoinEvent = TypedEvent<[
    string
], DisableCollateralJoinEventObject>;
export type DisableCollateralJoinEventFilter = TypedEventFilter<DisableCollateralJoinEvent>;
export interface DisableContractEventObject {
}
export type DisableContractEvent = TypedEvent<[], DisableContractEventObject>;
export type DisableContractEventFilter = TypedEventFilter<DisableContractEvent>;
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface CollateralJoinFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CollateralJoinFactoryInterface;
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
        collateralJoins(_cType: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            _collateralJoin: string;
        }>;
        collateralJoinsList(overrides?: CallOverrides): Promise<[string[]] & {
            _collateralJoinsList: string[];
        }>;
        collateralTypesList(overrides?: CallOverrides): Promise<[string[]] & {
            _collateralTypesList: string[];
        }>;
        contractEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        deployCollateralJoin(_cType: BytesLike, _collateral: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deployDelegatableCollateralJoin(_cType: BytesLike, _collateral: string, _delegatee: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        disableCollateralJoin(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<[string]>;
    };
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    collateralJoins(_cType: BytesLike, overrides?: CallOverrides): Promise<string>;
    collateralJoinsList(overrides?: CallOverrides): Promise<string[]>;
    collateralTypesList(overrides?: CallOverrides): Promise<string[]>;
    contractEnabled(overrides?: CallOverrides): Promise<boolean>;
    deployCollateralJoin(_cType: BytesLike, _collateral: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deployDelegatableCollateralJoin(_cType: BytesLike, _collateral: string, _delegatee: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    disableCollateralJoin(_cType: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    disableContract(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    safeEngine(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        collateralJoins(_cType: BytesLike, overrides?: CallOverrides): Promise<string>;
        collateralJoinsList(overrides?: CallOverrides): Promise<string[]>;
        collateralTypesList(overrides?: CallOverrides): Promise<string[]>;
        contractEnabled(overrides?: CallOverrides): Promise<boolean>;
        deployCollateralJoin(_cType: BytesLike, _collateral: string, overrides?: CallOverrides): Promise<string>;
        deployDelegatableCollateralJoin(_cType: BytesLike, _collateral: string, _delegatee: string, overrides?: CallOverrides): Promise<string>;
        disableCollateralJoin(_cType: BytesLike, overrides?: CallOverrides): Promise<void>;
        disableContract(overrides?: CallOverrides): Promise<void>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        safeEngine(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "DeployCollateralJoin(bytes32,address,address)"(_cType?: BytesLike | null, _collateral?: string | null, _collateralJoin?: string | null): DeployCollateralJoinEventFilter;
        DeployCollateralJoin(_cType?: BytesLike | null, _collateral?: string | null, _collateralJoin?: string | null): DeployCollateralJoinEventFilter;
        "DisableCollateralJoin(address)"(_collateralJoin?: string | null): DisableCollateralJoinEventFilter;
        DisableCollateralJoin(_collateralJoin?: string | null): DisableCollateralJoinEventFilter;
        "DisableContract()"(): DisableContractEventFilter;
        DisableContract(): DisableContractEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
    };
    estimateGas: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        collateralJoins(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        collateralJoinsList(overrides?: CallOverrides): Promise<BigNumber>;
        collateralTypesList(overrides?: CallOverrides): Promise<BigNumber>;
        contractEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        deployCollateralJoin(_cType: BytesLike, _collateral: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deployDelegatableCollateralJoin(_cType: BytesLike, _collateral: string, _delegatee: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        disableCollateralJoin(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        safeEngine(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralJoins(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralJoinsList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralTypesList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployCollateralJoin(_cType: BytesLike, _collateral: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deployDelegatableCollateralJoin(_cType: BytesLike, _collateral: string, _delegatee: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        disableCollateralJoin(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
