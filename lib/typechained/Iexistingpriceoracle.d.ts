import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IexistingpriceoracleInterface extends utils.Interface {
    functions: {
        "getPrice()": FunctionFragment;
        "lastUpdatedBlock()": FunctionFragment;
        "metadata()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getPrice" | "lastUpdatedBlock" | "metadata"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastUpdatedBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "metadata", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdatedBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "metadata", data: BytesLike): Result;
    events: {};
}
export interface Iexistingpriceoracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IexistingpriceoracleInterface;
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
        getPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        lastUpdatedBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        metadata(overrides?: CallOverrides): Promise<[string]>;
    };
    getPrice(overrides?: CallOverrides): Promise<BigNumber>;
    lastUpdatedBlock(overrides?: CallOverrides): Promise<BigNumber>;
    metadata(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getPrice(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdatedBlock(overrides?: CallOverrides): Promise<BigNumber>;
        metadata(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getPrice(overrides?: CallOverrides): Promise<BigNumber>;
        lastUpdatedBlock(overrides?: CallOverrides): Promise<BigNumber>;
        metadata(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lastUpdatedBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        metadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
