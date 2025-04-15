import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MockUniswapV3PoolInterface extends utils.Interface {
    functions: {
        "burn(int24,int24,uint128)": FunctionFragment;
        "collect(address,int24,int24,uint128,uint128)": FunctionFragment;
        "collectProtocol(address,uint128,uint128)": FunctionFragment;
        "factory()": FunctionFragment;
        "fee()": FunctionFragment;
        "flash(address,uint256,uint256,bytes)": FunctionFragment;
        "increaseObservationCardinalityNext(uint16)": FunctionFragment;
        "initialize(uint160)": FunctionFragment;
        "liquidity()": FunctionFragment;
        "mint(address,int24,int24,uint128,bytes)": FunctionFragment;
        "observations(uint256)": FunctionFragment;
        "observe(uint32[])": FunctionFragment;
        "positions(bytes32)": FunctionFragment;
        "setFeeProtocol(uint8,uint8)": FunctionFragment;
        "slot0()": FunctionFragment;
        "snapshotCumulativesInside(int24,int24)": FunctionFragment;
        "swap(address,bool,int256,uint160,bytes)": FunctionFragment;
        "tickSpacing()": FunctionFragment;
        "ticks(int24)": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "burn" | "collect" | "collectProtocol" | "factory" | "fee" | "flash" | "increaseObservationCardinalityNext" | "initialize" | "liquidity" | "mint" | "observations" | "observe" | "positions" | "setFeeProtocol" | "slot0" | "snapshotCumulativesInside" | "swap" | "tickSpacing" | "ticks" | "token0" | "token1"): FunctionFragment;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "collect", values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "collectProtocol", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "flash", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "increaseObservationCardinalityNext", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "observations", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "observe", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "positions", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setFeeProtocol", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "slot0", values?: undefined): string;
    encodeFunctionData(functionFragment: "snapshotCumulativesInside", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "swap", values: [string, boolean, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "tickSpacing", values?: undefined): string;
    encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectProtocol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseObservationCardinalityNext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "observe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeProtocol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slot0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snapshotCumulativesInside", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tickSpacing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    events: {};
}
export interface MockUniswapV3Pool extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockUniswapV3PoolInterface;
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
        burn(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        collect(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        collectProtocol(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        fee(overrides?: CallOverrides): Promise<[number]>;
        flash(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        increaseObservationCardinalityNext(arg0: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        initialize(_sqrtPriceX96Initial: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;
        mint(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        observations(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            blockTimestamp: number;
            tickCumulative: BigNumber;
            secondsPerLiquidityCumulativeX128: BigNumber;
            initialized: boolean;
        }>;
        observe(arg0: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[], BigNumber[]]>;
        positions(arg0: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            liquidityAmount: BigNumber;
            feeGrowthInside0LastX128: BigNumber;
            feeGrowthInside1LastX128: BigNumber;
            tokensOwed0: BigNumber;
            tokensOwed1: BigNumber;
        }>;
        setFeeProtocol(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        slot0(overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            number,
            number,
            number,
            boolean
        ] & {
            sqrtPriceX96: BigNumber;
            tick: number;
            observationIndex: number;
            observationCardinality: number;
            observationCardinalityNext: number;
            feeProtocol: number;
            unlocked: boolean;
        }>;
        snapshotCumulativesInside(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number
        ] & {
            tickCumulativeInside: BigNumber;
            secondsPerLiquidityInsideX128: BigNumber;
            secondsInside: number;
        }>;
        swap(arg0: string, arg1: boolean, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        tickSpacing(overrides?: CallOverrides): Promise<[number]>;
        ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            boolean
        ] & {
            liquidityGross: BigNumber;
            liquidityNet: BigNumber;
            feeGrowthOutside0X128: BigNumber;
            feeGrowthOutside1X128: BigNumber;
            tickCumulativeOutside: BigNumber;
            secondsPerLiquidityOutsideX128: BigNumber;
            secondsOutside: number;
            initialized: boolean;
        }>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
    };
    burn(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    collect(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    collectProtocol(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    factory(overrides?: CallOverrides): Promise<string>;
    fee(overrides?: CallOverrides): Promise<number>;
    flash(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<void>;
    increaseObservationCardinalityNext(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
    initialize(_sqrtPriceX96Initial: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    liquidity(overrides?: CallOverrides): Promise<BigNumber>;
    mint(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    observations(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        blockTimestamp: number;
        tickCumulative: BigNumber;
        secondsPerLiquidityCumulativeX128: BigNumber;
        initialized: boolean;
    }>;
    observe(arg0: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[], BigNumber[]]>;
    positions(arg0: BytesLike, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        liquidityAmount: BigNumber;
        feeGrowthInside0LastX128: BigNumber;
        feeGrowthInside1LastX128: BigNumber;
        tokensOwed0: BigNumber;
        tokensOwed1: BigNumber;
    }>;
    setFeeProtocol(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
    slot0(overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        number,
        number,
        number,
        number,
        boolean
    ] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        observationIndex: number;
        observationCardinality: number;
        observationCardinalityNext: number;
        feeProtocol: number;
        unlocked: boolean;
    }>;
    snapshotCumulativesInside(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        number
    ] & {
        tickCumulativeInside: BigNumber;
        secondsPerLiquidityInsideX128: BigNumber;
        secondsInside: number;
    }>;
    swap(arg0: string, arg1: boolean, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    tickSpacing(overrides?: CallOverrides): Promise<number>;
    ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
    ] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        feeGrowthOutside0X128: BigNumber;
        feeGrowthOutside1X128: BigNumber;
        tickCumulativeOutside: BigNumber;
        secondsPerLiquidityOutsideX128: BigNumber;
        secondsOutside: number;
        initialized: boolean;
    }>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        burn(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        collect(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        collectProtocol(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        factory(overrides?: CallOverrides): Promise<string>;
        fee(overrides?: CallOverrides): Promise<number>;
        flash(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<void>;
        increaseObservationCardinalityNext(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initialize(_sqrtPriceX96Initial: BigNumberish, overrides?: CallOverrides): Promise<void>;
        liquidity(overrides?: CallOverrides): Promise<BigNumber>;
        mint(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        observations(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber,
            boolean
        ] & {
            blockTimestamp: number;
            tickCumulative: BigNumber;
            secondsPerLiquidityCumulativeX128: BigNumber;
            initialized: boolean;
        }>;
        observe(arg0: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[], BigNumber[]]>;
        positions(arg0: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            liquidityAmount: BigNumber;
            feeGrowthInside0LastX128: BigNumber;
            feeGrowthInside1LastX128: BigNumber;
            tokensOwed0: BigNumber;
            tokensOwed1: BigNumber;
        }>;
        setFeeProtocol(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        slot0(overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            number,
            number,
            number,
            boolean
        ] & {
            sqrtPriceX96: BigNumber;
            tick: number;
            observationIndex: number;
            observationCardinality: number;
            observationCardinalityNext: number;
            feeProtocol: number;
            unlocked: boolean;
        }>;
        snapshotCumulativesInside(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number
        ] & {
            tickCumulativeInside: BigNumber;
            secondsPerLiquidityInsideX128: BigNumber;
            secondsInside: number;
        }>;
        swap(arg0: string, arg1: boolean, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        tickSpacing(overrides?: CallOverrides): Promise<number>;
        ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            number,
            boolean
        ] & {
            liquidityGross: BigNumber;
            liquidityNet: BigNumber;
            feeGrowthOutside0X128: BigNumber;
            feeGrowthOutside1X128: BigNumber;
            tickCumulativeOutside: BigNumber;
            secondsPerLiquidityOutsideX128: BigNumber;
            secondsOutside: number;
            initialized: boolean;
        }>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        burn(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        collect(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        collectProtocol(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        flash(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        increaseObservationCardinalityNext(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_sqrtPriceX96Initial: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        liquidity(overrides?: CallOverrides): Promise<BigNumber>;
        mint(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        observations(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        observe(arg0: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        positions(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        setFeeProtocol(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        slot0(overrides?: CallOverrides): Promise<BigNumber>;
        snapshotCumulativesInside(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        swap(arg0: string, arg1: boolean, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        tickSpacing(overrides?: CallOverrides): Promise<BigNumber>;
        ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        burn(arg0: BigNumberish, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collect(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collectProtocol(arg0: string, arg1: BigNumberish, arg2: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        flash(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseObservationCardinalityNext(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_sqrtPriceX96Initial: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(arg0: string, arg1: BigNumberish, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observations(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        observe(arg0: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positions(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFeeProtocol(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        slot0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        snapshotCumulativesInside(arg0: BigNumberish, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        swap(arg0: string, arg1: boolean, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tickSpacing(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
