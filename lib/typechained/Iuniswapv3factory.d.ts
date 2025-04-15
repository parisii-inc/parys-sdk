import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface Iuniswapv3factoryInterface extends utils.Interface {
    functions: {
        "createPool(address,address,uint24)": FunctionFragment;
        "feeAmountTickSpacing(uint24)": FunctionFragment;
        "getPool(address,address,uint24)": FunctionFragment;
        "owner()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createPool" | "feeAmountTickSpacing" | "getPool" | "owner"): FunctionFragment;
    encodeFunctionData(functionFragment: "createPool", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "feeAmountTickSpacing", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPool", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    decodeFunctionResult(functionFragment: "createPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeAmountTickSpacing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    events: {
        "PoolCreated(address,address,uint24,int24,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
}
export interface PoolCreatedEventObject {
    token0: string;
    token1: string;
    fee: number;
    tickSpacing: number;
    pool: string;
}
export type PoolCreatedEvent = TypedEvent<[
    string,
    string,
    number,
    number,
    string
], PoolCreatedEventObject>;
export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;
export interface Iuniswapv3factory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Iuniswapv3factoryInterface;
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
        createPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        feeAmountTickSpacing(fee: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        getPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            pool: string;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
    };
    createPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    feeAmountTickSpacing(fee: BigNumberish, overrides?: CallOverrides): Promise<number>;
    getPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        createPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
        feeAmountTickSpacing(fee: BigNumberish, overrides?: CallOverrides): Promise<number>;
        getPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "PoolCreated(address,address,uint24,int24,address)"(token0?: string | null, token1?: string | null, fee?: BigNumberish | null, tickSpacing?: null, pool?: null): PoolCreatedEventFilter;
        PoolCreated(token0?: string | null, token1?: string | null, fee?: BigNumberish | null, tickSpacing?: null, pool?: null): PoolCreatedEventFilter;
    };
    estimateGas: {
        createPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        feeAmountTickSpacing(fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        feeAmountTickSpacing(fee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPool(tokenA: string, tokenB: string, fee: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
