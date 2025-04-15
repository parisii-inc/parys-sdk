import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IchainlinkrelayerfactoryInterface extends utils.Interface {
    functions: {
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "chainlinkRelayersList()": FunctionFragment;
        "deployChainlinkRelayer(address,uint256)": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "sequencerUptimeFeed()": FunctionFragment;
        "setSequencerUptimeFeed(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "chainlinkRelayersList" | "deployChainlinkRelayer" | "removeAuthorization" | "sequencerUptimeFeed" | "setSequencerUptimeFeed"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainlinkRelayersList", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployChainlinkRelayer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "sequencerUptimeFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "setSequencerUptimeFeed", values: [string]): string;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainlinkRelayersList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployChainlinkRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sequencerUptimeFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSequencerUptimeFeed", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "NewChainlinkRelayer(address,address,address,uint256)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewChainlinkRelayer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface NewChainlinkRelayerEventObject {
    _chainlinkRelayer: string;
    _priceFeed: string;
    _sequencerUptimeFeed: string;
    _staleThreshold: BigNumber;
}
export type NewChainlinkRelayerEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], NewChainlinkRelayerEventObject>;
export type NewChainlinkRelayerEventFilter = TypedEventFilter<NewChainlinkRelayerEvent>;
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface Ichainlinkrelayerfactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IchainlinkrelayerfactoryInterface;
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
        chainlinkRelayersList(overrides?: CallOverrides): Promise<[string[]] & {
            _chainlinkRelayersList: string[];
        }>;
        deployChainlinkRelayer(_priceFeed: string, _staleThreshold: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sequencerUptimeFeed(overrides?: CallOverrides): Promise<[string] & {
            _sequencerUptimeFeed: string;
        }>;
        setSequencerUptimeFeed(_sequencerUptimeFeed: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    chainlinkRelayersList(overrides?: CallOverrides): Promise<string[]>;
    deployChainlinkRelayer(_priceFeed: string, _staleThreshold: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sequencerUptimeFeed(overrides?: CallOverrides): Promise<string>;
    setSequencerUptimeFeed(_sequencerUptimeFeed: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        chainlinkRelayersList(overrides?: CallOverrides): Promise<string[]>;
        deployChainlinkRelayer(_priceFeed: string, _staleThreshold: BigNumberish, overrides?: CallOverrides): Promise<string>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        sequencerUptimeFeed(overrides?: CallOverrides): Promise<string>;
        setSequencerUptimeFeed(_sequencerUptimeFeed: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "NewChainlinkRelayer(address,address,address,uint256)"(_chainlinkRelayer?: string | null, _priceFeed?: null, _sequencerUptimeFeed?: null, _staleThreshold?: null): NewChainlinkRelayerEventFilter;
        NewChainlinkRelayer(_chainlinkRelayer?: string | null, _priceFeed?: null, _sequencerUptimeFeed?: null, _staleThreshold?: null): NewChainlinkRelayerEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
    };
    estimateGas: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        chainlinkRelayersList(overrides?: CallOverrides): Promise<BigNumber>;
        deployChainlinkRelayer(_priceFeed: string, _staleThreshold: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sequencerUptimeFeed(overrides?: CallOverrides): Promise<BigNumber>;
        setSequencerUptimeFeed(_sequencerUptimeFeed: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainlinkRelayersList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployChainlinkRelayer(_priceFeed: string, _staleThreshold: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sequencerUptimeFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setSequencerUptimeFeed(_sequencerUptimeFeed: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
