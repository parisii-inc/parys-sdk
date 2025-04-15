import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ChainlinkRelayerChildInterface extends utils.Interface {
    functions: {
        "factory()": FunctionFragment;
        "getResultWithValidity()": FunctionFragment;
        "multiplier()": FunctionFragment;
        "priceFeed()": FunctionFragment;
        "read()": FunctionFragment;
        "sequencerUptimeFeed()": FunctionFragment;
        "staleThreshold()": FunctionFragment;
        "symbol()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "factory" | "getResultWithValidity" | "multiplier" | "priceFeed" | "read" | "sequencerUptimeFeed" | "staleThreshold" | "symbol"): FunctionFragment;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getResultWithValidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "multiplier", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "read", values?: undefined): string;
    encodeFunctionData(functionFragment: "sequencerUptimeFeed", values?: undefined): string;
    encodeFunctionData(functionFragment: "staleThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getResultWithValidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sequencerUptimeFeed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "staleThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    events: {};
}
export interface ChainlinkRelayerChild extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ChainlinkRelayerChildInterface;
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
        factory(overrides?: CallOverrides): Promise<[string]>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _result: BigNumber;
            _validity: boolean;
        }>;
        multiplier(overrides?: CallOverrides): Promise<[BigNumber]>;
        priceFeed(overrides?: CallOverrides): Promise<[string]>;
        read(overrides?: CallOverrides): Promise<[BigNumber] & {
            _result: BigNumber;
        }>;
        sequencerUptimeFeed(overrides?: CallOverrides): Promise<[string] & {
            __sequencerUptimeFeed: string;
        }>;
        staleThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
    };
    factory(overrides?: CallOverrides): Promise<string>;
    getResultWithValidity(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        _result: BigNumber;
        _validity: boolean;
    }>;
    multiplier(overrides?: CallOverrides): Promise<BigNumber>;
    priceFeed(overrides?: CallOverrides): Promise<string>;
    read(overrides?: CallOverrides): Promise<BigNumber>;
    sequencerUptimeFeed(overrides?: CallOverrides): Promise<string>;
    staleThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        factory(overrides?: CallOverrides): Promise<string>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _result: BigNumber;
            _validity: boolean;
        }>;
        multiplier(overrides?: CallOverrides): Promise<BigNumber>;
        priceFeed(overrides?: CallOverrides): Promise<string>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        sequencerUptimeFeed(overrides?: CallOverrides): Promise<string>;
        staleThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getResultWithValidity(overrides?: CallOverrides): Promise<BigNumber>;
        multiplier(overrides?: CallOverrides): Promise<BigNumber>;
        priceFeed(overrides?: CallOverrides): Promise<BigNumber>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        sequencerUptimeFeed(overrides?: CallOverrides): Promise<BigNumber>;
        staleThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getResultWithValidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        read(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sequencerUptimeFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        staleThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
