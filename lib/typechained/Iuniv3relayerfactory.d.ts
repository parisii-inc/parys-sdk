import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface Iuniv3relayerfactoryInterface extends utils.Interface {
    functions: {
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "deployUniV3Relayer(address,address,uint24,uint32)": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "uniV3RelayersList()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "deployUniV3Relayer" | "removeAuthorization" | "uniV3RelayersList"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployUniV3Relayer", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "uniV3RelayersList", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployUniV3Relayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniV3RelayersList", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "NewUniV3Relayer(address,address,address,uint24,uint32)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewUniV3Relayer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface NewUniV3RelayerEventObject {
    _uniV3Relayer: string;
    _baseToken: string;
    _quoteToken: string;
    _feeTier: number;
    _quotePeriod: number;
}
export type NewUniV3RelayerEvent = TypedEvent<[
    string,
    string,
    string,
    number,
    number
], NewUniV3RelayerEventObject>;
export type NewUniV3RelayerEventFilter = TypedEventFilter<NewUniV3RelayerEvent>;
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface Iuniv3relayerfactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Iuniv3relayerfactoryInterface;
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
        deployUniV3Relayer(_baseToken: string, _quoteToken: string, _feeTier: BigNumberish, _quotePeriod: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        uniV3RelayersList(overrides?: CallOverrides): Promise<[string[]] & {
            _uniV3RelayersList: string[];
        }>;
    };
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    deployUniV3Relayer(_baseToken: string, _quoteToken: string, _feeTier: BigNumberish, _quotePeriod: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    uniV3RelayersList(overrides?: CallOverrides): Promise<string[]>;
    callStatic: {
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        deployUniV3Relayer(_baseToken: string, _quoteToken: string, _feeTier: BigNumberish, _quotePeriod: BigNumberish, overrides?: CallOverrides): Promise<string>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        uniV3RelayersList(overrides?: CallOverrides): Promise<string[]>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "NewUniV3Relayer(address,address,address,uint24,uint32)"(_uniV3Relayer?: string | null, _baseToken?: null, _quoteToken?: null, _feeTier?: null, _quotePeriod?: null): NewUniV3RelayerEventFilter;
        NewUniV3Relayer(_uniV3Relayer?: string | null, _baseToken?: null, _quoteToken?: null, _feeTier?: null, _quotePeriod?: null): NewUniV3RelayerEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
    };
    estimateGas: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        deployUniV3Relayer(_baseToken: string, _quoteToken: string, _feeTier: BigNumberish, _quotePeriod: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        uniV3RelayersList(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployUniV3Relayer(_baseToken: string, _quoteToken: string, _feeTier: BigNumberish, _quotePeriod: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        uniV3RelayersList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
