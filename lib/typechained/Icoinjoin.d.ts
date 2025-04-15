import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IcoinjoinInterface extends utils.Interface {
    functions: {
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "contractEnabled()": FunctionFragment;
        "decimals()": FunctionFragment;
        "disableContract()": FunctionFragment;
        "exit(address,uint256)": FunctionFragment;
        "join(address,uint256)": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "safeEngine()": FunctionFragment;
        "systemCoin()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "contractEnabled" | "decimals" | "disableContract" | "exit" | "join" | "removeAuthorization" | "safeEngine" | "systemCoin"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "disableContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "exit", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "join", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "safeEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemCoin", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemCoin", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "DisableContract()": EventFragment;
        "Exit(address,address,uint256)": EventFragment;
        "Join(address,address,uint256)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisableContract"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Exit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Join"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface DisableContractEventObject {
}
export type DisableContractEvent = TypedEvent<[], DisableContractEventObject>;
export type DisableContractEventFilter = TypedEventFilter<DisableContractEvent>;
export interface ExitEventObject {
    _sender: string;
    _account: string;
    _wad: BigNumber;
}
export type ExitEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ExitEventObject>;
export type ExitEventFilter = TypedEventFilter<ExitEvent>;
export interface JoinEventObject {
    _sender: string;
    _account: string;
    _wad: BigNumber;
}
export type JoinEvent = TypedEvent<[
    string,
    string,
    BigNumber
], JoinEventObject>;
export type JoinEventFilter = TypedEventFilter<JoinEvent>;
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface Icoinjoin extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IcoinjoinInterface;
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
        contractEnabled(overrides?: CallOverrides): Promise<[boolean] & {
            _contractEnabled: boolean;
        }>;
        decimals(overrides?: CallOverrides): Promise<[BigNumber] & {
            _decimals: BigNumber;
        }>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exit(_account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        join(_account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<[string] & {
            _safeEngine: string;
        }>;
        systemCoin(overrides?: CallOverrides): Promise<[string] & {
            _systemCoin: string;
        }>;
    };
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    contractEnabled(overrides?: CallOverrides): Promise<boolean>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    disableContract(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exit(_account: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    join(_account: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    safeEngine(overrides?: CallOverrides): Promise<string>;
    systemCoin(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        contractEnabled(overrides?: CallOverrides): Promise<boolean>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        disableContract(overrides?: CallOverrides): Promise<void>;
        exit(_account: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        join(_account: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        safeEngine(overrides?: CallOverrides): Promise<string>;
        systemCoin(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "DisableContract()"(): DisableContractEventFilter;
        DisableContract(): DisableContractEventFilter;
        "Exit(address,address,uint256)"(_sender?: null, _account?: null, _wad?: null): ExitEventFilter;
        Exit(_sender?: null, _account?: null, _wad?: null): ExitEventFilter;
        "Join(address,address,uint256)"(_sender?: null, _account?: null, _wad?: null): JoinEventFilter;
        Join(_sender?: null, _account?: null, _wad?: null): JoinEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
    };
    estimateGas: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        contractEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exit(_account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        join(_account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        safeEngine(overrides?: CallOverrides): Promise<BigNumber>;
        systemCoin(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exit(_account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        join(_account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemCoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
