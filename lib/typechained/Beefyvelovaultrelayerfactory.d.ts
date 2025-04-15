import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BeefyvelovaultrelayerfactoryInterface extends utils.Interface {
    functions: {
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "beefyVeloVaultRelayersList()": FunctionFragment;
        "deployBeefyVeloVaultRelayer(address,address,address,address)": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "beefyVeloVaultRelayersList" | "deployBeefyVeloVaultRelayer" | "removeAuthorization"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "beefyVeloVaultRelayersList", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployBeefyVeloVaultRelayer", values: [string, string, string, string]): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beefyVeloVaultRelayersList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployBeefyVeloVaultRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "NewBeefyVeloVaultRelayer(address,address,address,address,address)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewBeefyVeloVaultRelayer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface NewBeefyVeloVaultRelayerEventObject {
    _beefyVeloVaultRelayer: string;
    _token0priceSource: string;
    _token1priceSource: string;
    _beefyVault: string;
    _veloPool: string;
}
export type NewBeefyVeloVaultRelayerEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    string
], NewBeefyVeloVaultRelayerEventObject>;
export type NewBeefyVeloVaultRelayerEventFilter = TypedEventFilter<NewBeefyVeloVaultRelayerEvent>;
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface Beefyvelovaultrelayerfactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BeefyvelovaultrelayerfactoryInterface;
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
        beefyVeloVaultRelayersList(overrides?: CallOverrides): Promise<[string[]] & {
            _beefyVeloVaultRelayersList: string[];
        }>;
        deployBeefyVeloVaultRelayer(_token0priceSource: string, _token1priceSource: string, _beefyVault: string, _veloPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    beefyVeloVaultRelayersList(overrides?: CallOverrides): Promise<string[]>;
    deployBeefyVeloVaultRelayer(_token0priceSource: string, _token1priceSource: string, _beefyVault: string, _veloPool: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        beefyVeloVaultRelayersList(overrides?: CallOverrides): Promise<string[]>;
        deployBeefyVeloVaultRelayer(_token0priceSource: string, _token1priceSource: string, _beefyVault: string, _veloPool: string, overrides?: CallOverrides): Promise<string>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "NewBeefyVeloVaultRelayer(address,address,address,address,address)"(_beefyVeloVaultRelayer?: string | null, _token0priceSource?: null, _token1priceSource?: null, _beefyVault?: null, _veloPool?: null): NewBeefyVeloVaultRelayerEventFilter;
        NewBeefyVeloVaultRelayer(_beefyVeloVaultRelayer?: string | null, _token0priceSource?: null, _token1priceSource?: null, _beefyVault?: null, _veloPool?: null): NewBeefyVeloVaultRelayerEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
    };
    estimateGas: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        beefyVeloVaultRelayersList(overrides?: CallOverrides): Promise<BigNumber>;
        deployBeefyVeloVaultRelayer(_token0priceSource: string, _token1priceSource: string, _beefyVault: string, _veloPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beefyVeloVaultRelayersList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployBeefyVeloVaultRelayer(_token0priceSource: string, _token1priceSource: string, _beefyVault: string, _veloPool: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
