import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GovernorVotesInterface extends utils.Interface {
    functions: {
        "BALLOT_TYPEHASH()": FunctionFragment;
        "CLOCK_MODE()": FunctionFragment;
        "COUNTING_MODE()": FunctionFragment;
        "EXTENDED_BALLOT_TYPEHASH()": FunctionFragment;
        "cancel(address[],uint256[],bytes[],bytes32)": FunctionFragment;
        "castVote(uint256,uint8)": FunctionFragment;
        "castVoteBySig(uint256,uint8,address,bytes)": FunctionFragment;
        "castVoteWithReason(uint256,uint8,string)": FunctionFragment;
        "castVoteWithReasonAndParams(uint256,uint8,string,bytes)": FunctionFragment;
        "castVoteWithReasonAndParamsBySig(uint256,uint8,address,string,bytes,bytes)": FunctionFragment;
        "clock()": FunctionFragment;
        "eip712Domain()": FunctionFragment;
        "execute(address[],uint256[],bytes[],bytes32)": FunctionFragment;
        "getVotes(address,uint256)": FunctionFragment;
        "getVotesWithParams(address,uint256,bytes)": FunctionFragment;
        "hasVoted(uint256,address)": FunctionFragment;
        "hashProposal(address[],uint256[],bytes[],bytes32)": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "proposalDeadline(uint256)": FunctionFragment;
        "proposalEta(uint256)": FunctionFragment;
        "proposalNeedsQueuing(uint256)": FunctionFragment;
        "proposalProposer(uint256)": FunctionFragment;
        "proposalSnapshot(uint256)": FunctionFragment;
        "proposalThreshold()": FunctionFragment;
        "propose(address[],uint256[],bytes[],string)": FunctionFragment;
        "queue(address[],uint256[],bytes[],bytes32)": FunctionFragment;
        "quorum(uint256)": FunctionFragment;
        "relay(address,uint256,bytes)": FunctionFragment;
        "state(uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "token()": FunctionFragment;
        "version()": FunctionFragment;
        "votingDelay()": FunctionFragment;
        "votingPeriod()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "BALLOT_TYPEHASH" | "CLOCK_MODE" | "COUNTING_MODE" | "EXTENDED_BALLOT_TYPEHASH" | "cancel" | "castVote" | "castVoteBySig" | "castVoteWithReason" | "castVoteWithReasonAndParams" | "castVoteWithReasonAndParamsBySig" | "clock" | "eip712Domain" | "execute" | "getVotes" | "getVotesWithParams" | "hasVoted" | "hashProposal" | "name" | "nonces" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "proposalDeadline" | "proposalEta" | "proposalNeedsQueuing" | "proposalProposer" | "proposalSnapshot" | "proposalThreshold" | "propose" | "queue" | "quorum" | "relay" | "state" | "supportsInterface" | "token" | "version" | "votingDelay" | "votingPeriod"): FunctionFragment;
    encodeFunctionData(functionFragment: "BALLOT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "CLOCK_MODE", values?: undefined): string;
    encodeFunctionData(functionFragment: "COUNTING_MODE", values?: undefined): string;
    encodeFunctionData(functionFragment: "EXTENDED_BALLOT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancel", values: [string[], BigNumberish[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "castVote", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "castVoteBySig", values: [BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "castVoteWithReason", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "castVoteWithReasonAndParams", values: [BigNumberish, BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "castVoteWithReasonAndParamsBySig", values: [BigNumberish, BigNumberish, string, string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "clock", values?: undefined): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string[], BigNumberish[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "getVotes", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getVotesWithParams", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "hasVoted", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "hashProposal", values: [string[], BigNumberish[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "proposalDeadline", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalEta", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalNeedsQueuing", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalProposer", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalSnapshot", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "proposalThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "propose", values: [string[], BigNumberish[], BytesLike[], string]): string;
    encodeFunctionData(functionFragment: "queue", values: [string[], BigNumberish[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "quorum", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "relay", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "votingPeriod", values?: undefined): string;
    decodeFunctionResult(functionFragment: "BALLOT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "CLOCK_MODE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "COUNTING_MODE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EXTENDED_BALLOT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteWithReason", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteWithReasonAndParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVoteWithReasonAndParamsBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotesWithParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasVoted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalDeadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalEta", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalNeedsQueuing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalProposer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalSnapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "votingPeriod", data: BytesLike): Result;
    events: {
        "EIP712DomainChanged()": EventFragment;
        "ProposalCanceled(uint256)": EventFragment;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
        "ProposalExecuted(uint256)": EventFragment;
        "ProposalQueued(uint256,uint256)": EventFragment;
        "VoteCast(address,uint256,uint8,uint256,string)": EventFragment;
        "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteCastWithParams"): EventFragment;
}
export interface EIP712DomainChangedEventObject {
}
export type EIP712DomainChangedEvent = TypedEvent<[
], EIP712DomainChangedEventObject>;
export type EIP712DomainChangedEventFilter = TypedEventFilter<EIP712DomainChangedEvent>;
export interface ProposalCanceledEventObject {
    proposalId: BigNumber;
}
export type ProposalCanceledEvent = TypedEvent<[
    BigNumber
], ProposalCanceledEventObject>;
export type ProposalCanceledEventFilter = TypedEventFilter<ProposalCanceledEvent>;
export interface ProposalCreatedEventObject {
    proposalId: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    voteStart: BigNumber;
    voteEnd: BigNumber;
    description: string;
}
export type ProposalCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    string
], ProposalCreatedEventObject>;
export type ProposalCreatedEventFilter = TypedEventFilter<ProposalCreatedEvent>;
export interface ProposalExecutedEventObject {
    proposalId: BigNumber;
}
export type ProposalExecutedEvent = TypedEvent<[
    BigNumber
], ProposalExecutedEventObject>;
export type ProposalExecutedEventFilter = TypedEventFilter<ProposalExecutedEvent>;
export interface ProposalQueuedEventObject {
    proposalId: BigNumber;
    etaSeconds: BigNumber;
}
export type ProposalQueuedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], ProposalQueuedEventObject>;
export type ProposalQueuedEventFilter = TypedEventFilter<ProposalQueuedEvent>;
export interface VoteCastEventObject {
    voter: string;
    proposalId: BigNumber;
    support: number;
    weight: BigNumber;
    reason: string;
}
export type VoteCastEvent = TypedEvent<[
    string,
    BigNumber,
    number,
    BigNumber,
    string
], VoteCastEventObject>;
export type VoteCastEventFilter = TypedEventFilter<VoteCastEvent>;
export interface VoteCastWithParamsEventObject {
    voter: string;
    proposalId: BigNumber;
    support: number;
    weight: BigNumber;
    reason: string;
    params: string;
}
export type VoteCastWithParamsEvent = TypedEvent<[
    string,
    BigNumber,
    number,
    BigNumber,
    string,
    string
], VoteCastWithParamsEventObject>;
export type VoteCastWithParamsEventFilter = TypedEventFilter<VoteCastWithParamsEvent>;
export interface GovernorVotes extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GovernorVotesInterface;
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
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        CLOCK_MODE(overrides?: CallOverrides): Promise<[string]>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<[string]>;
        EXTENDED_BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        cancel(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, voter: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        castVoteWithReasonAndParams(proposalId: BigNumberish, support: BigNumberish, reason: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        castVoteWithReasonAndParamsBySig(proposalId: BigNumberish, support: BigNumberish, voter: string, reason: string, params: BytesLike, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        clock(overrides?: CallOverrides): Promise<[number]>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        execute(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getVotes(account: string, timepoint: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVotesWithParams(account: string, timepoint: BigNumberish, params: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        hasVoted(proposalId: BigNumberish, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        hashProposal(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        proposalDeadline(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalEta(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalNeedsQueuing(arg0: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        proposalProposer(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        proposalSnapshot(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        proposalThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;
        propose(targets: string[], values: BigNumberish[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        queue(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        quorum(timepoint: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        relay(target: string, value: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        version(overrides?: CallOverrides): Promise<[string]>;
        votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    CLOCK_MODE(overrides?: CallOverrides): Promise<string>;
    COUNTING_MODE(overrides?: CallOverrides): Promise<string>;
    EXTENDED_BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    cancel(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    castVoteBySig(proposalId: BigNumberish, support: BigNumberish, voter: string, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    castVoteWithReasonAndParams(proposalId: BigNumberish, support: BigNumberish, reason: string, params: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    castVoteWithReasonAndParamsBySig(proposalId: BigNumberish, support: BigNumberish, voter: string, reason: string, params: BytesLike, signature: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    clock(overrides?: CallOverrides): Promise<number>;
    eip712Domain(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        string,
        string,
        BigNumber[]
    ] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
    }>;
    execute(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getVotes(account: string, timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getVotesWithParams(account: string, timepoint: BigNumberish, params: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    hasVoted(proposalId: BigNumberish, account: string, overrides?: CallOverrides): Promise<boolean>;
    hashProposal(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    proposalDeadline(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    proposalEta(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    proposalNeedsQueuing(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    proposalProposer(proposalId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    proposalSnapshot(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
    propose(targets: string[], values: BigNumberish[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    queue(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    quorum(timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    relay(target: string, value: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    token(overrides?: CallOverrides): Promise<string>;
    version(overrides?: CallOverrides): Promise<string>;
    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        CLOCK_MODE(overrides?: CallOverrides): Promise<string>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<string>;
        EXTENDED_BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        cancel(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, voter: string, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: CallOverrides): Promise<BigNumber>;
        castVoteWithReasonAndParams(proposalId: BigNumberish, support: BigNumberish, reason: string, params: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        castVoteWithReasonAndParamsBySig(proposalId: BigNumberish, support: BigNumberish, voter: string, reason: string, params: BytesLike, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        clock(overrides?: CallOverrides): Promise<number>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        execute(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: string, timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getVotesWithParams(account: string, timepoint: BigNumberish, params: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        hasVoted(proposalId: BigNumberish, account: string, overrides?: CallOverrides): Promise<boolean>;
        hashProposal(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        proposalDeadline(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalEta(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalNeedsQueuing(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        proposalProposer(proposalId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        proposalSnapshot(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        propose(targets: string[], values: BigNumberish[], calldatas: BytesLike[], description: string, overrides?: CallOverrides): Promise<BigNumber>;
        queue(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        quorum(timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        relay(target: string, value: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        token(overrides?: CallOverrides): Promise<string>;
        version(overrides?: CallOverrides): Promise<string>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter;
        EIP712DomainChanged(): EIP712DomainChangedEventFilter;
        "ProposalCanceled(uint256)"(proposalId?: null): ProposalCanceledEventFilter;
        ProposalCanceled(proposalId?: null): ProposalCanceledEventFilter;
        "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(proposalId?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, voteStart?: null, voteEnd?: null, description?: null): ProposalCreatedEventFilter;
        ProposalCreated(proposalId?: null, proposer?: null, targets?: null, values?: null, signatures?: null, calldatas?: null, voteStart?: null, voteEnd?: null, description?: null): ProposalCreatedEventFilter;
        "ProposalExecuted(uint256)"(proposalId?: null): ProposalExecutedEventFilter;
        ProposalExecuted(proposalId?: null): ProposalExecutedEventFilter;
        "ProposalQueued(uint256,uint256)"(proposalId?: null, etaSeconds?: null): ProposalQueuedEventFilter;
        ProposalQueued(proposalId?: null, etaSeconds?: null): ProposalQueuedEventFilter;
        "VoteCast(address,uint256,uint8,uint256,string)"(voter?: string | null, proposalId?: null, support?: null, weight?: null, reason?: null): VoteCastEventFilter;
        VoteCast(voter?: string | null, proposalId?: null, support?: null, weight?: null, reason?: null): VoteCastEventFilter;
        "VoteCastWithParams(address,uint256,uint8,uint256,string,bytes)"(voter?: string | null, proposalId?: null, support?: null, weight?: null, reason?: null, params?: null): VoteCastWithParamsEventFilter;
        VoteCastWithParams(voter?: string | null, proposalId?: null, support?: null, weight?: null, reason?: null, params?: null): VoteCastWithParamsEventFilter;
    };
    estimateGas: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        CLOCK_MODE(overrides?: CallOverrides): Promise<BigNumber>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<BigNumber>;
        EXTENDED_BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        cancel(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, voter: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        castVoteWithReasonAndParams(proposalId: BigNumberish, support: BigNumberish, reason: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        castVoteWithReasonAndParamsBySig(proposalId: BigNumberish, support: BigNumberish, voter: string, reason: string, params: BytesLike, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        clock(overrides?: CallOverrides): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        execute(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        getVotes(account: string, timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getVotesWithParams(account: string, timepoint: BigNumberish, params: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        hasVoted(proposalId: BigNumberish, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hashProposal(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        proposalDeadline(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalEta(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalNeedsQueuing(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalProposer(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalSnapshot(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        propose(targets: string[], values: BigNumberish[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        queue(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        quorum(timepoint: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        relay(target: string, value: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        votingDelay(overrides?: CallOverrides): Promise<BigNumber>;
        votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        CLOCK_MODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        COUNTING_MODE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EXTENDED_BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancel(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        castVote(proposalId: BigNumberish, support: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        castVoteBySig(proposalId: BigNumberish, support: BigNumberish, voter: string, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        castVoteWithReason(proposalId: BigNumberish, support: BigNumberish, reason: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        castVoteWithReasonAndParams(proposalId: BigNumberish, support: BigNumberish, reason: string, params: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        castVoteWithReasonAndParamsBySig(proposalId: BigNumberish, support: BigNumberish, voter: string, reason: string, params: BytesLike, signature: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        clock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getVotes(account: string, timepoint: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotesWithParams(account: string, timepoint: BigNumberish, params: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasVoted(proposalId: BigNumberish, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashProposal(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        proposalDeadline(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalEta(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalNeedsQueuing(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalProposer(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalSnapshot(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proposalThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        propose(targets: string[], values: BigNumberish[], calldatas: BytesLike[], description: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        queue(targets: string[], values: BigNumberish[], calldatas: BytesLike[], descriptionHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        quorum(timepoint: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        relay(target: string, value: BigNumberish, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
