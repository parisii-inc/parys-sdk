import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface UniV3RelayerInterface extends utils.Interface {
    functions: {
        "baseAmount()": FunctionFragment;
        "baseToken()": FunctionFragment;
        "getResultWithValidity()": FunctionFragment;
        "multiplier()": FunctionFragment;
        "quotePeriod()": FunctionFragment;
        "quoteToken()": FunctionFragment;
        "read()": FunctionFragment;
        "symbol()": FunctionFragment;
        "uniV3Pool()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "baseAmount" | "baseToken" | "getResultWithValidity" | "multiplier" | "quotePeriod" | "quoteToken" | "read" | "symbol" | "uniV3Pool"): FunctionFragment;
    encodeFunctionData(functionFragment: "baseAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "baseToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "getResultWithValidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "multiplier", values?: undefined): string;
    encodeFunctionData(functionFragment: "quotePeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "quoteToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "read", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "uniV3Pool", values?: undefined): string;
    decodeFunctionResult(functionFragment: "baseAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "baseToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getResultWithValidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multiplier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quotePeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniV3Pool", data: BytesLike): Result;
    events: {};
}
export interface UniV3Relayer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UniV3RelayerInterface;
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
        baseAmount(overrides?: CallOverrides): Promise<[BigNumber]>;
        baseToken(overrides?: CallOverrides): Promise<[string]>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _result: BigNumber;
            _validity: boolean;
        }>;
        multiplier(overrides?: CallOverrides): Promise<[BigNumber]>;
        quotePeriod(overrides?: CallOverrides): Promise<[number]>;
        quoteToken(overrides?: CallOverrides): Promise<[string]>;
        read(overrides?: CallOverrides): Promise<[BigNumber] & {
            _result: BigNumber;
        }>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        uniV3Pool(overrides?: CallOverrides): Promise<[string]>;
    };
    baseAmount(overrides?: CallOverrides): Promise<BigNumber>;
    baseToken(overrides?: CallOverrides): Promise<string>;
    getResultWithValidity(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        _result: BigNumber;
        _validity: boolean;
    }>;
    multiplier(overrides?: CallOverrides): Promise<BigNumber>;
    quotePeriod(overrides?: CallOverrides): Promise<number>;
    quoteToken(overrides?: CallOverrides): Promise<string>;
    read(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    uniV3Pool(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        baseAmount(overrides?: CallOverrides): Promise<BigNumber>;
        baseToken(overrides?: CallOverrides): Promise<string>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _result: BigNumber;
            _validity: boolean;
        }>;
        multiplier(overrides?: CallOverrides): Promise<BigNumber>;
        quotePeriod(overrides?: CallOverrides): Promise<number>;
        quoteToken(overrides?: CallOverrides): Promise<string>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        uniV3Pool(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        baseAmount(overrides?: CallOverrides): Promise<BigNumber>;
        baseToken(overrides?: CallOverrides): Promise<BigNumber>;
        getResultWithValidity(overrides?: CallOverrides): Promise<BigNumber>;
        multiplier(overrides?: CallOverrides): Promise<BigNumber>;
        quotePeriod(overrides?: CallOverrides): Promise<BigNumber>;
        quoteToken(overrides?: CallOverrides): Promise<BigNumber>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        uniV3Pool(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        baseAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getResultWithValidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quotePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        quoteToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        read(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uniV3Pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
