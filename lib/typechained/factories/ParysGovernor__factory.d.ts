import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ParysGovernor, ParysGovernorInterface } from "../ParysGovernor";
export declare class ParysGovernor__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "contract IVotes";
        }, {
            readonly name: "_governorName";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct IParysGovernor.ParysGovernorParams";
            readonly components: readonly [{
                readonly name: "votingDelay";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "votingPeriod";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "quorumVoteExtension";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "proposalThreshold";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "quorumNumeratorValue";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timelockMinDelay";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "BALLOT_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "CLOCK_MODE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_mode";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "COUNTING_MODE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "EXTENDED_BALLOT_TYPEHASH";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancel";
        readonly inputs: readonly [{
            readonly name: "targets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "calldatas";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "descriptionHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "castVote";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "support";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "castVoteBySig";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "support";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "voter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "castVoteWithReason";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "support";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "reason";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "castVoteWithReasonAndParams";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "support";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "reason";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "params";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "castVoteWithReasonAndParamsBySig";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "support";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "voter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "reason";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "params";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "clock";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_timestamp";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "eip712Domain";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "fields";
            readonly type: "bytes1";
            readonly internalType: "bytes1";
        }, {
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "version";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "verifyingContract";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "extensions";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "execute";
        readonly inputs: readonly [{
            readonly name: "targets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "calldatas";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "descriptionHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "getVotes";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "timepoint";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getVotesWithParams";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "timepoint";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "params";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "hasVoted";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "hashProposal";
        readonly inputs: readonly [{
            readonly name: "targets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "calldatas";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "descriptionHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "lateQuorumVoteExtension";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "nonces";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "onERC1155BatchReceived";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "onERC1155Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "onERC721Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "proposalDeadline";
        readonly inputs: readonly [{
            readonly name: "_proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "proposalEta";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "proposalNeedsQueuing";
        readonly inputs: readonly [{
            readonly name: "_proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_needsQueuing";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "proposalProposer";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "proposalSnapshot";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "proposalThreshold";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_threshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "proposalVotes";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "againstVotes";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "forVotes";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "abstainVotes";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "propose";
        readonly inputs: readonly [{
            readonly name: "targets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "calldatas";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "description";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "queue";
        readonly inputs: readonly [{
            readonly name: "targets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "calldatas";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "descriptionHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "quorum";
        readonly inputs: readonly [{
            readonly name: "timepoint";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quorumDenominator";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quorumNumerator";
        readonly inputs: readonly [{
            readonly name: "timepoint";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quorumNumerator";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "relay";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "setLateQuorumVoteExtension";
        readonly inputs: readonly [{
            readonly name: "newVoteExtension";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setProposalThreshold";
        readonly inputs: readonly [{
            readonly name: "newProposalThreshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setVotingDelay";
        readonly inputs: readonly [{
            readonly name: "newVotingDelay";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setVotingPeriod";
        readonly inputs: readonly [{
            readonly name: "newVotingPeriod";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "state";
        readonly inputs: readonly [{
            readonly name: "_proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_state";
            readonly type: "uint8";
            readonly internalType: "enum IGovernor.ProposalState";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "timelock";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "token";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC5805";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "updateQuorumNumerator";
        readonly inputs: readonly [{
            readonly name: "newQuorumNumerator";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateTimelock";
        readonly inputs: readonly [{
            readonly name: "newTimelock";
            readonly type: "address";
            readonly internalType: "contract TimelockController";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "version";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "votingDelay";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "votingPeriod";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "EIP712DomainChanged";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LateQuorumVoteExtensionSet";
        readonly inputs: readonly [{
            readonly name: "oldVoteExtension";
            readonly type: "uint64";
            readonly indexed: false;
            readonly internalType: "uint64";
        }, {
            readonly name: "newVoteExtension";
            readonly type: "uint64";
            readonly indexed: false;
            readonly internalType: "uint64";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ProposalCanceled";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ProposalCreated";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "proposer";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "targets";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly indexed: false;
            readonly internalType: "uint256[]";
        }, {
            readonly name: "signatures";
            readonly type: "string[]";
            readonly indexed: false;
            readonly internalType: "string[]";
        }, {
            readonly name: "calldatas";
            readonly type: "bytes[]";
            readonly indexed: false;
            readonly internalType: "bytes[]";
        }, {
            readonly name: "voteStart";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "voteEnd";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "description";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ProposalExecuted";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ProposalExtended";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "extendedDeadline";
            readonly type: "uint64";
            readonly indexed: false;
            readonly internalType: "uint64";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ProposalQueued";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "etaSeconds";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ProposalThresholdSet";
        readonly inputs: readonly [{
            readonly name: "oldProposalThreshold";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newProposalThreshold";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "QuorumNumeratorUpdated";
        readonly inputs: readonly [{
            readonly name: "oldQuorumNumerator";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newQuorumNumerator";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TimelockChange";
        readonly inputs: readonly [{
            readonly name: "oldTimelock";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "newTimelock";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "VoteCast";
        readonly inputs: readonly [{
            readonly name: "voter";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "support";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "uint8";
        }, {
            readonly name: "weight";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "reason";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "VoteCastWithParams";
        readonly inputs: readonly [{
            readonly name: "voter";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "support";
            readonly type: "uint8";
            readonly indexed: false;
            readonly internalType: "uint8";
        }, {
            readonly name: "weight";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "reason";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "params";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "VotingDelaySet";
        readonly inputs: readonly [{
            readonly name: "oldVotingDelay";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newVotingDelay";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "VotingPeriodSet";
        readonly inputs: readonly [{
            readonly name: "oldVotingPeriod";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newVotingPeriod";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CheckpointUnorderedInsertion";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FailedInnerCall";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GovernorAlreadyCastVote";
        readonly inputs: readonly [{
            readonly name: "voter";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorAlreadyQueuedProposal";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorDisabledDeposit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GovernorInsufficientProposerVotes";
        readonly inputs: readonly [{
            readonly name: "proposer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "votes";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "threshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorInvalidProposalLength";
        readonly inputs: readonly [{
            readonly name: "targets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "calldatas";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "values";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorInvalidQuorumFraction";
        readonly inputs: readonly [{
            readonly name: "quorumNumerator";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "quorumDenominator";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorInvalidSignature";
        readonly inputs: readonly [{
            readonly name: "voter";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorInvalidVoteType";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GovernorInvalidVotingPeriod";
        readonly inputs: readonly [{
            readonly name: "votingPeriod";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorNonexistentProposal";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorNotQueuedProposal";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorOnlyExecutor";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorOnlyProposer";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorQueueNotImplemented";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GovernorRestrictedProposer";
        readonly inputs: readonly [{
            readonly name: "proposer";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "GovernorUnexpectedProposalState";
        readonly inputs: readonly [{
            readonly name: "proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "current";
            readonly type: "uint8";
            readonly internalType: "enum IGovernor.ProposalState";
        }, {
            readonly name: "expectedStates";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAccountNonce";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "currentNonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidShortString";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QueueEmpty";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QueueFull";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SafeCastOverflowedUintDowncast";
        readonly inputs: readonly [{
            readonly name: "bits";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "StringTooLong";
        readonly inputs: readonly [{
            readonly name: "str";
            readonly type: "string";
            readonly internalType: "string";
        }];
    }];
    static createInterface(): ParysGovernorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ParysGovernor;
}
