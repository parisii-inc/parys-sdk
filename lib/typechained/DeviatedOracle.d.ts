import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface DeviatedOracleInterface extends utils.Interface {
    functions: {
        "deviation()": FunctionFragment;
        "getResultWithValidity()": FunctionFragment;
        "oracleRelayer()": FunctionFragment;
        "read()": FunctionFragment;
        "symbol()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deviation" | "getResultWithValidity" | "oracleRelayer" | "read" | "symbol"): FunctionFragment;
    encodeFunctionData(functionFragment: "deviation", values?: undefined): string;
    encodeFunctionData(functionFragment: "getResultWithValidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "oracleRelayer", values?: undefined): string;
    encodeFunctionData(functionFragment: "read", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    decodeFunctionResult(functionFragment: "deviation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getResultWithValidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracleRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    events: {};
}
export interface DeviatedOracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DeviatedOracleInterface;
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
        deviation(overrides?: CallOverrides): Promise<[BigNumber]>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _price: BigNumber;
            _validity: boolean;
        }>;
        oracleRelayer(overrides?: CallOverrides): Promise<[string]>;
        read(overrides?: CallOverrides): Promise<[BigNumber] & {
            _price: BigNumber;
        }>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
    };
    deviation(overrides?: CallOverrides): Promise<BigNumber>;
    getResultWithValidity(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        _price: BigNumber;
        _validity: boolean;
    }>;
    oracleRelayer(overrides?: CallOverrides): Promise<string>;
    read(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        deviation(overrides?: CallOverrides): Promise<BigNumber>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _price: BigNumber;
            _validity: boolean;
        }>;
        oracleRelayer(overrides?: CallOverrides): Promise<string>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        deviation(overrides?: CallOverrides): Promise<BigNumber>;
        getResultWithValidity(overrides?: CallOverrides): Promise<BigNumber>;
        oracleRelayer(overrides?: CallOverrides): Promise<BigNumber>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        deviation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getResultWithValidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        oracleRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        read(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
