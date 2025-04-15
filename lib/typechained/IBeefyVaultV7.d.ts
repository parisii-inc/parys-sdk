import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IBeefyVaultV7Interface extends utils.Interface {
    functions: {
        "getPricePerFullShare()": FunctionFragment;
        "symbol()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getPricePerFullShare" | "symbol"): FunctionFragment;
    encodeFunctionData(functionFragment: "getPricePerFullShare", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getPricePerFullShare", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    events: {};
}
export interface IBeefyVaultV7 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IBeefyVaultV7Interface;
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
        getPricePerFullShare(overrides?: CallOverrides): Promise<[BigNumber] & {
            _pricePerFullShare: BigNumber;
        }>;
        symbol(overrides?: CallOverrides): Promise<[string] & {
            _symbol: string;
        }>;
    };
    getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getPricePerFullShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
