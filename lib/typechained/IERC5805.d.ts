import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IERC5805Interface extends utils.Interface {
    functions: {
        "CLOCK_MODE()": FunctionFragment;
        "clock()": FunctionFragment;
        "delegate(address)": FunctionFragment;
        "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "delegates(address)": FunctionFragment;
        "getPastTotalSupply(uint256)": FunctionFragment;
        "getPastVotes(address,uint256)": FunctionFragment;
        "getVotes(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CLOCK_MODE" | "clock" | "delegate" | "delegateBySig" | "delegates" | "getPastTotalSupply" | "getPastVotes" | "getVotes"): FunctionFragment;
    encodeFunctionData(functionFragment: "CLOCK_MODE", values?: undefined): string;
    encodeFunctionData(functionFragment: "clock", values?: undefined): string;
    encodeFunctionData(functionFragment: "delegate", values: [string]): string;
    encodeFunctionData(functionFragment: "delegateBySig", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "delegates", values: [string]): string;
    encodeFunctionData(functionFragment: "getPastTotalSupply", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPastVotes", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getVotes", values: [string]): string;
    decodeFunctionResult(functionFragment: "CLOCK_MODE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPastTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPastVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
    events: {
        "DelegateChanged(address,address,address)": EventFragment;
        "DelegateVotesChanged(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateVotesChanged"): EventFragment;
}
export interface DelegateChangedEventObject {
    delegator: string;
    fromDelegate: string;
    toDelegate: string;
}
export type DelegateChangedEvent = TypedEvent<[
    string,
    string,
    string
], DelegateChangedEventObject>;
export type DelegateChangedEventFilter = TypedEventFilter<DelegateChangedEvent>;
export interface DelegateVotesChangedEventObject {
    delegate: string;
    previousVotes: BigNumber;
    newVotes: BigNumber;
}
export type DelegateVotesChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], DelegateVotesChangedEventObject>;
export type DelegateVotesChangedEventFilter = TypedEventFilter<DelegateVotesChangedEvent>;
export interface IERC5805 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC5805Interface;
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
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        delegates(account: string, overrides?: CallOverrides): Promise<[string]>;
        getPastTotalSupply(timepoint: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPastVotes(account: string, timepoint: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVotes(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    CLOCK_MODE(overrides?: CallOverrides): Promise<string>;
    clock(overrides?: CallOverrides): Promise<number>;
    delegate(delegatee: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    delegates(account: string, overrides?: CallOverrides): Promise<string>;
    getPastTotalSupply(timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getPastVotes(account: string, timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        CLOCK_MODE(overrides?: CallOverrides): Promise<string>;
        clock(overrides?: CallOverrides): Promise<number>;
        delegate(delegatee: string, overrides?: CallOverrides): Promise<void>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        delegates(account: string, overrides?: CallOverrides): Promise<string>;
        getPastTotalSupply(timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPastVotes(account: string, timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "DelegateChanged(address,address,address)"(delegator?: string | null, fromDelegate?: string | null, toDelegate?: string | null): DelegateChangedEventFilter;
        DelegateChanged(delegator?: string | null, fromDelegate?: string | null, toDelegate?: string | null): DelegateChangedEventFilter;
        "DelegateVotesChanged(address,uint256,uint256)"(delegate?: string | null, previousVotes?: null, newVotes?: null): DelegateVotesChangedEventFilter;
        DelegateVotesChanged(delegate?: string | null, previousVotes?: null, newVotes?: null): DelegateVotesChangedEventFilter;
    };
    estimateGas: {
        CLOCK_MODE(overrides?: CallOverrides): Promise<BigNumber>;
        clock(overrides?: CallOverrides): Promise<BigNumber>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        delegates(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPastTotalSupply(timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPastVotes(account: string, timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        CLOCK_MODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        delegates(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPastTotalSupply(timepoint: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPastVotes(account: string, timepoint: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotes(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
