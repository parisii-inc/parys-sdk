import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IchainlinkoracleInterface extends utils.Interface {
    functions: {
        "decimals()": FunctionFragment;
        "description()": FunctionFragment;
        "getAnswer(uint256)": FunctionFragment;
        "getRoundData(uint256)": FunctionFragment;
        "getTimestamp(uint256)": FunctionFragment;
        "latestAnswer()": FunctionFragment;
        "latestRound()": FunctionFragment;
        "latestRoundData()": FunctionFragment;
        "latestTimestamp()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "decimals" | "description" | "getAnswer" | "getRoundData" | "getTimestamp" | "latestAnswer" | "latestRound" | "latestRoundData" | "latestTimestamp"): FunctionFragment;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "description", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAnswer", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoundData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTimestamp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "latestAnswer", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestRound", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestRoundData", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestTimestamp", values?: undefined): string;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "description", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAnswer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoundData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestAnswer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestRound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestRoundData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestTimestamp", data: BytesLike): Result;
    events: {};
}
export interface Ichainlinkoracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IchainlinkoracleInterface;
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
        decimals(overrides?: CallOverrides): Promise<[number] & {
            _decimals: number;
        }>;
        description(overrides?: CallOverrides): Promise<[string] & {
            _description: string;
        }>;
        getAnswer(_roundId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            _answer: BigNumber;
        }>;
        getRoundData(__roundId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _roundId: BigNumber;
            _answer: BigNumber;
            _startedAt: BigNumber;
            _updatedAt: BigNumber;
            _answeredInRound: BigNumber;
        }>;
        getTimestamp(_roundId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            _timestamp: BigNumber;
        }>;
        latestAnswer(overrides?: CallOverrides): Promise<[BigNumber] & {
            _latestAnswer: BigNumber;
        }>;
        latestRound(overrides?: CallOverrides): Promise<[BigNumber] & {
            _latestRound: BigNumber;
        }>;
        latestRoundData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _roundId: BigNumber;
            _answer: BigNumber;
            _startedAt: BigNumber;
            _updatedAt: BigNumber;
            _answeredInRound: BigNumber;
        }>;
        latestTimestamp(overrides?: CallOverrides): Promise<[BigNumber] & {
            _latestTimestamp: BigNumber;
        }>;
    };
    decimals(overrides?: CallOverrides): Promise<number>;
    description(overrides?: CallOverrides): Promise<string>;
    getAnswer(_roundId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getRoundData(__roundId: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _roundId: BigNumber;
        _answer: BigNumber;
        _startedAt: BigNumber;
        _updatedAt: BigNumber;
        _answeredInRound: BigNumber;
    }>;
    getTimestamp(_roundId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;
    latestRound(overrides?: CallOverrides): Promise<BigNumber>;
    latestRoundData(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _roundId: BigNumber;
        _answer: BigNumber;
        _startedAt: BigNumber;
        _updatedAt: BigNumber;
        _answeredInRound: BigNumber;
    }>;
    latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        decimals(overrides?: CallOverrides): Promise<number>;
        description(overrides?: CallOverrides): Promise<string>;
        getAnswer(_roundId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoundData(__roundId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _roundId: BigNumber;
            _answer: BigNumber;
            _startedAt: BigNumber;
            _updatedAt: BigNumber;
            _answeredInRound: BigNumber;
        }>;
        getTimestamp(_roundId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;
        latestRound(overrides?: CallOverrides): Promise<BigNumber>;
        latestRoundData(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _roundId: BigNumber;
            _answer: BigNumber;
            _startedAt: BigNumber;
            _updatedAt: BigNumber;
            _answeredInRound: BigNumber;
        }>;
        latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        description(overrides?: CallOverrides): Promise<BigNumber>;
        getAnswer(_roundId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoundData(__roundId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTimestamp(_roundId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        latestAnswer(overrides?: CallOverrides): Promise<BigNumber>;
        latestRound(overrides?: CallOverrides): Promise<BigNumber>;
        latestRoundData(overrides?: CallOverrides): Promise<BigNumber>;
        latestTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        description(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAnswer(_roundId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoundData(__roundId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTimestamp(_roundId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestAnswer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestRound(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestRoundData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
