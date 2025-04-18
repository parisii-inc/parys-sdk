import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IVeloPoolInterface extends utils.Interface {
    functions: {
        "reserve0()": FunctionFragment;
        "reserve1()": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "reserve0" | "reserve1" | "symbol" | "totalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "reserve0", values?: undefined): string;
    encodeFunctionData(functionFragment: "reserve1", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    decodeFunctionResult(functionFragment: "reserve0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reserve1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    events: {};
}
export interface IVeloPool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IVeloPoolInterface;
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
        reserve0(overrides?: CallOverrides): Promise<[BigNumber] & {
            _reserve0: BigNumber;
        }>;
        reserve1(overrides?: CallOverrides): Promise<[BigNumber] & {
            _reserve1: BigNumber;
        }>;
        symbol(overrides?: CallOverrides): Promise<[string] & {
            _symbol: string;
        }>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber] & {
            _totalSupply: BigNumber;
        }>;
    };
    reserve0(overrides?: CallOverrides): Promise<BigNumber>;
    reserve1(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        reserve0(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        reserve0(overrides?: CallOverrides): Promise<BigNumber>;
        reserve1(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        reserve0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reserve1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
