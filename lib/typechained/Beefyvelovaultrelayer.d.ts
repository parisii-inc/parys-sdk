import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface BeefyvelovaultrelayerInterface extends utils.Interface {
    functions: {
        "beefyVault()": FunctionFragment;
        "getResultWithValidity()": FunctionFragment;
        "read()": FunctionFragment;
        "symbol()": FunctionFragment;
        "token0priceSource()": FunctionFragment;
        "token1priceSource()": FunctionFragment;
        "veloPool()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "beefyVault" | "getResultWithValidity" | "read" | "symbol" | "token0priceSource" | "token1priceSource" | "veloPool"): FunctionFragment;
    encodeFunctionData(functionFragment: "beefyVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "getResultWithValidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "read", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0priceSource", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1priceSource", values?: undefined): string;
    encodeFunctionData(functionFragment: "veloPool", values?: undefined): string;
    decodeFunctionResult(functionFragment: "beefyVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getResultWithValidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0priceSource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1priceSource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veloPool", data: BytesLike): Result;
    events: {};
}
export interface Beefyvelovaultrelayer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BeefyvelovaultrelayerInterface;
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
        beefyVault(overrides?: CallOverrides): Promise<[string]>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _result: BigNumber;
            _validity: boolean;
        }>;
        read(overrides?: CallOverrides): Promise<[BigNumber] & {
            _result: BigNumber;
        }>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        token0priceSource(overrides?: CallOverrides): Promise<[string]>;
        token1priceSource(overrides?: CallOverrides): Promise<[string]>;
        veloPool(overrides?: CallOverrides): Promise<[string]>;
    };
    beefyVault(overrides?: CallOverrides): Promise<string>;
    getResultWithValidity(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        _result: BigNumber;
        _validity: boolean;
    }>;
    read(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    token0priceSource(overrides?: CallOverrides): Promise<string>;
    token1priceSource(overrides?: CallOverrides): Promise<string>;
    veloPool(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        beefyVault(overrides?: CallOverrides): Promise<string>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _result: BigNumber;
            _validity: boolean;
        }>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        token0priceSource(overrides?: CallOverrides): Promise<string>;
        token1priceSource(overrides?: CallOverrides): Promise<string>;
        veloPool(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        beefyVault(overrides?: CallOverrides): Promise<BigNumber>;
        getResultWithValidity(overrides?: CallOverrides): Promise<BigNumber>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        token0priceSource(overrides?: CallOverrides): Promise<BigNumber>;
        token1priceSource(overrides?: CallOverrides): Promise<BigNumber>;
        veloPool(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        beefyVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getResultWithValidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        read(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token0priceSource(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1priceSource(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        veloPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
