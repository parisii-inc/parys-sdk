import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IDelayedOracleChildInterface extends utils.Interface {
    functions: {
        "factory()": FunctionFragment;
        "getNextResultWithValidity()": FunctionFragment;
        "getResultWithValidity()": FunctionFragment;
        "lastUpdateTime()": FunctionFragment;
        "priceSource()": FunctionFragment;
        "read()": FunctionFragment;
        "shouldUpdate()": FunctionFragment;
        "symbol()": FunctionFragment;
        "updateDelay()": FunctionFragment;
        "updateResult()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "factory" | "getNextResultWithValidity" | "getResultWithValidity" | "lastUpdateTime" | "priceSource" | "read" | "shouldUpdate" | "symbol" | "updateDelay" | "updateResult"): FunctionFragment;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNextResultWithValidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "getResultWithValidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastUpdateTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceSource", values?: undefined): string;
    encodeFunctionData(functionFragment: "read", values?: undefined): string;
    encodeFunctionData(functionFragment: "shouldUpdate", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateResult", values?: undefined): string;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextResultWithValidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getResultWithValidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdateTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceSource", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "shouldUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateResult", data: BytesLike): Result;
    events: {
        "UpdateResult(uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "UpdateResult"): EventFragment;
}
export interface UpdateResultEventObject {
    _currentFeedValue: BigNumber;
    _lastUpdateTime: BigNumber;
}
export type UpdateResultEvent = TypedEvent<[
    BigNumber,
    BigNumber
], UpdateResultEventObject>;
export type UpdateResultEventFilter = TypedEventFilter<UpdateResultEvent>;
export interface IDelayedOracleChild extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDelayedOracleChildInterface;
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
        factory(overrides?: CallOverrides): Promise<[string] & {
            _factory: string;
        }>;
        getNextResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _nextResult: BigNumber;
            _validity: boolean;
        }>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _result: BigNumber;
            _validity: boolean;
        }>;
        lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber] & {
            _lastUpdateTime: BigNumber;
        }>;
        priceSource(overrides?: CallOverrides): Promise<[string] & {
            _priceSource: string;
        }>;
        read(overrides?: CallOverrides): Promise<[BigNumber] & {
            _value: BigNumber;
        }>;
        shouldUpdate(overrides?: CallOverrides): Promise<[boolean] & {
            _ok: boolean;
        }>;
        symbol(overrides?: CallOverrides): Promise<[string] & {
            _symbol: string;
        }>;
        updateDelay(overrides?: CallOverrides): Promise<[BigNumber] & {
            _updateDelay: BigNumber;
        }>;
        updateResult(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    factory(overrides?: CallOverrides): Promise<string>;
    getNextResultWithValidity(overrides?: CallOverrides): Promise<[
        BigNumber,
        boolean
    ] & {
        _nextResult: BigNumber;
        _validity: boolean;
    }>;
    getResultWithValidity(overrides?: CallOverrides): Promise<[BigNumber, boolean] & {
        _result: BigNumber;
        _validity: boolean;
    }>;
    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
    priceSource(overrides?: CallOverrides): Promise<string>;
    read(overrides?: CallOverrides): Promise<BigNumber>;
    shouldUpdate(overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    updateDelay(overrides?: CallOverrides): Promise<BigNumber>;
    updateResult(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        factory(overrides?: CallOverrides): Promise<string>;
        getNextResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _nextResult: BigNumber;
            _validity: boolean;
        }>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean
        ] & {
            _result: BigNumber;
            _validity: boolean;
        }>;
        lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        priceSource(overrides?: CallOverrides): Promise<string>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        shouldUpdate(overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        updateDelay(overrides?: CallOverrides): Promise<BigNumber>;
        updateResult(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "UpdateResult(uint256,uint256)"(_currentFeedValue?: null, _lastUpdateTime?: null): UpdateResultEventFilter;
        UpdateResult(_currentFeedValue?: null, _lastUpdateTime?: null): UpdateResultEventFilter;
    };
    estimateGas: {
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getNextResultWithValidity(overrides?: CallOverrides): Promise<BigNumber>;
        getResultWithValidity(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        priceSource(overrides?: CallOverrides): Promise<BigNumber>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        shouldUpdate(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        updateDelay(overrides?: CallOverrides): Promise<BigNumber>;
        updateResult(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextResultWithValidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getResultWithValidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceSource(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        read(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        shouldUpdate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateResult(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
