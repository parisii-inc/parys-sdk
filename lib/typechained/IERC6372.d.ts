import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IERC6372Interface extends utils.Interface {
    functions: {
        "CLOCK_MODE()": FunctionFragment;
        "clock()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CLOCK_MODE" | "clock"): FunctionFragment;
    encodeFunctionData(functionFragment: "CLOCK_MODE", values?: undefined): string;
    encodeFunctionData(functionFragment: "clock", values?: undefined): string;
    decodeFunctionResult(functionFragment: "CLOCK_MODE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clock", data: BytesLike): Result;
    events: {};
}
export interface IERC6372 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC6372Interface;
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
        CLOCK_MODE(overrides?: CallOverrides): Promise<[string]>;
        clock(overrides?: CallOverrides): Promise<[number]>;
    };
    CLOCK_MODE(overrides?: CallOverrides): Promise<string>;
    clock(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        CLOCK_MODE(overrides?: CallOverrides): Promise<string>;
        clock(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        CLOCK_MODE(overrides?: CallOverrides): Promise<BigNumber>;
        clock(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        CLOCK_MODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
