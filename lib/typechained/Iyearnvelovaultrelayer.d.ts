import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IyearnvelovaultrelayerInterface extends utils.Interface {
    functions: {
        "getResultWithValidity()": FunctionFragment;
        "read()": FunctionFragment;
        "symbol()": FunctionFragment;
        "veloLpOracle()": FunctionFragment;
        "veloPool()": FunctionFragment;
        "yearnVault()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getResultWithValidity" | "read" | "symbol" | "veloLpOracle" | "veloPool" | "yearnVault"): FunctionFragment;
    encodeFunctionData(functionFragment: "getResultWithValidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "read", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "veloLpOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "veloPool", values?: undefined): string;
    encodeFunctionData(functionFragment: "yearnVault", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getResultWithValidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veloLpOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "veloPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "yearnVault", data: BytesLike): Result;
    events: {};
}
export interface Iyearnvelovaultrelayer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IyearnvelovaultrelayerInterface;
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
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _result: BigNumber;
            _validity: boolean;
        }>;
        read(overrides?: CallOverrides): Promise<[BigNumber] & {
            _value: BigNumber;
        }>;
        symbol(overrides?: CallOverrides): Promise<[string] & {
            _symbol: string;
        }>;
        veloLpOracle(overrides?: CallOverrides): Promise<[string] & {
            _veloPool: string;
        }>;
        veloPool(overrides?: CallOverrides): Promise<[string] & {
            _veloPool: string;
        }>;
        yearnVault(overrides?: CallOverrides): Promise<[string] & {
            _yearnVault: string;
        }>;
    };
    getResultWithValidity(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        _result: BigNumber;
        _validity: boolean;
    }>;
    read(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    veloLpOracle(overrides?: CallOverrides): Promise<string>;
    veloPool(overrides?: CallOverrides): Promise<string>;
    yearnVault(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _result: BigNumber;
            _validity: boolean;
        }>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        veloLpOracle(overrides?: CallOverrides): Promise<string>;
        veloPool(overrides?: CallOverrides): Promise<string>;
        yearnVault(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getResultWithValidity(overrides?: CallOverrides): Promise<BigNumber>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        veloLpOracle(overrides?: CallOverrides): Promise<BigNumber>;
        veloPool(overrides?: CallOverrides): Promise<BigNumber>;
        yearnVault(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getResultWithValidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        read(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        veloLpOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        veloPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        yearnVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
