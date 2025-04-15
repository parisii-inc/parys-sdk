import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Votes, VotesInterface } from "../Votes";
export declare class Votes__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "CLOCK_MODE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "clock";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "delegate";
        readonly inputs: readonly [{
            readonly name: "delegatee";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "delegateBySig";
        readonly inputs: readonly [{
            readonly name: "delegatee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "expiry";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "delegates";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "getPastTotalSupply";
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
        readonly name: "getPastVotes";
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
        readonly name: "getVotes";
        readonly inputs: readonly [{
            readonly name: "account";
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
        readonly type: "event";
        readonly name: "DelegateChanged";
        readonly inputs: readonly [{
            readonly name: "delegator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "fromDelegate";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "toDelegate";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DelegateVotesChanged";
        readonly inputs: readonly [{
            readonly name: "delegate";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "previousVotes";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newVotes";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "EIP712DomainChanged";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CheckpointUnorderedInsertion";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ECDSAInvalidSignature";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ECDSAInvalidSignatureLength";
        readonly inputs: readonly [{
            readonly name: "length";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ECDSAInvalidSignatureS";
        readonly inputs: readonly [{
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC5805FutureLookup";
        readonly inputs: readonly [{
            readonly name: "timepoint";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "clock";
            readonly type: "uint48";
            readonly internalType: "uint48";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC6372InconsistentClock";
        readonly inputs: readonly [];
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
    }, {
        readonly type: "error";
        readonly name: "VotesExpiredSignature";
        readonly inputs: readonly [{
            readonly name: "expiry";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    static createInterface(): VotesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Votes;
}
