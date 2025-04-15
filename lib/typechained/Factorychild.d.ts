import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface FactorychildInterface extends utils.Interface {
    functions: {
        "factory()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "factory"): FunctionFragment;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    events: {};
}
export interface Factorychild extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: FactorychildInterface;
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
        factory(overrides?: CallOverrides): Promise<[string]>;
    };
    factory(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        factory(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        factory(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
