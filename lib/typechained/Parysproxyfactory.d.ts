import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ParysproxyfactoryInterface extends utils.Interface {
    functions: {
        "build()": FunctionFragment;
        "build(address)": FunctionFragment;
        "isProxy(address)": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "proxies(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "build()" | "build(address)" | "isProxy" | "nonces" | "proxies"): FunctionFragment;
    encodeFunctionData(functionFragment: "build()", values?: undefined): string;
    encodeFunctionData(functionFragment: "build(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "isProxy", values: [string]): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "proxies", values: [string]): string;
    decodeFunctionResult(functionFragment: "build()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "build(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxies", data: BytesLike): Result;
    events: {
        "Created(address,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Created"): EventFragment;
}
export interface CreatedEventObject {
    _sender: string;
    _owner: string;
    _proxy: string;
}
export type CreatedEvent = TypedEvent<[
    string,
    string,
    string
], CreatedEventObject>;
export type CreatedEventFilter = TypedEventFilter<CreatedEvent>;
export interface Parysproxyfactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ParysproxyfactoryInterface;
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
        "build()"(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "build(address)"(_owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isProxy(_proxyAddress: string, overrides?: CallOverrides): Promise<[boolean] & {
            _exists: boolean;
        }>;
        nonces(_owner: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            nonce: BigNumber;
        }>;
        proxies(_owner: string, overrides?: CallOverrides): Promise<[string]>;
    };
    "build()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "build(address)"(_owner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isProxy(_proxyAddress: string, overrides?: CallOverrides): Promise<boolean>;
    nonces(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    proxies(_owner: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        "build()"(overrides?: CallOverrides): Promise<string>;
        "build(address)"(_owner: string, overrides?: CallOverrides): Promise<string>;
        isProxy(_proxyAddress: string, overrides?: CallOverrides): Promise<boolean>;
        nonces(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        proxies(_owner: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Created(address,address,address)"(_sender?: string | null, _owner?: string | null, _proxy?: null): CreatedEventFilter;
        Created(_sender?: string | null, _owner?: string | null, _proxy?: null): CreatedEventFilter;
    };
    estimateGas: {
        "build()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "build(address)"(_owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isProxy(_proxyAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        nonces(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        proxies(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        "build()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "build(address)"(_owner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isProxy(_proxyAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(_owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxies(_owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
