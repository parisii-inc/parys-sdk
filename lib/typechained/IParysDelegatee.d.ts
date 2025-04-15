import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IParysDelegateeInterface extends utils.Interface {
    functions: {
        "castVote(address,uint256,uint8)": FunctionFragment;
        "castVoteWithReason(address,uint256,uint8,string)": FunctionFragment;
        "castVoteWithReasonAndParams(address,uint256,uint8,string,bytes)": FunctionFragment;
        "delegatee()": FunctionFragment;
        "setDelegatee(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "castVote" | "castVoteWithReason" | "castVoteWithReasonAndParams" | "delegatee" | "setDelegatee"): FunctionFragment;
    encodeFunctionData(functionFragment: "castVote", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "castVoteWithReason", values: [string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "castVoteWithReasonAndParams", values: [string, BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "delegatee", values?: undefined): string;
    encodeFunctionData(functionFragment: "setDelegatee", values: [string]): string;
    decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteWithReasonAndParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDelegatee", data: BytesLike): Result;
    events: {
        "DelegateeSet(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DelegateeSet"): EventFragment;
}
export interface DelegateeSetEventObject {
    _delegatee: string;
}
export type DelegateeSetEvent = TypedEvent<[string], DelegateeSetEventObject>;
export type DelegateeSetEventFilter = TypedEventFilter<DelegateeSetEvent>;
export interface IParysDelegatee extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IParysDelegateeInterface;
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
        castVote(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        castVoteWithReason(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, _reason: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        castVoteWithReasonAndParams(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, _reason: string, _params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        delegatee(overrides?: CallOverrides): Promise<[string] & {
            _delegatee: string;
        }>;
        setDelegatee(_delegatee: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    castVote(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    castVoteWithReason(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, _reason: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    castVoteWithReasonAndParams(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, _reason: string, _params: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    delegatee(overrides?: CallOverrides): Promise<string>;
    setDelegatee(_delegatee: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        castVote(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        castVoteWithReason(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, _reason: string, overrides?: CallOverrides): Promise<BigNumber>;
        castVoteWithReasonAndParams(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, _reason: string, _params: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        delegatee(overrides?: CallOverrides): Promise<string>;
        setDelegatee(_delegatee: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DelegateeSet(address)"(_delegatee?: null): DelegateeSetEventFilter;
        DelegateeSet(_delegatee?: null): DelegateeSetEventFilter;
    };
    estimateGas: {
        castVote(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        castVoteWithReason(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, _reason: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        castVoteWithReasonAndParams(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, _reason: string, _params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        delegatee(overrides?: CallOverrides): Promise<BigNumber>;
        setDelegatee(_delegatee: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        castVote(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        castVoteWithReason(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, _reason: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        castVoteWithReasonAndParams(_governor: string, _proposalId: BigNumberish, _support: BigNumberish, _reason: string, _params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        delegatee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setDelegatee(_delegatee: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
