import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Parysdelegatee, ParysdelegateeInterface } from "../Parysdelegatee";
export declare class Parysdelegatee__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "castVote";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly type: "address";
            readonly internalType: "contract IGovernor";
        }, {
            readonly name: "_proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_support";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly outputs: readonly [{
            readonly name: "_weight";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "castVoteWithReason";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly type: "address";
            readonly internalType: "contract IGovernor";
        }, {
            readonly name: "_proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_support";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "_reason";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "_weight";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "castVoteWithReasonAndParams";
        readonly inputs: readonly [{
            readonly name: "_governor";
            readonly type: "address";
            readonly internalType: "contract IGovernor";
        }, {
            readonly name: "_proposalId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_support";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "_reason";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_params";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "_weight";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "delegatee";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "renounceOwnership";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setDelegatee";
        readonly inputs: readonly [{
            readonly name: "_delegatee";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "DelegateeSet";
        readonly inputs: readonly [{
            readonly name: "_delegatee";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "OnlyDelegatee";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OwnableInvalidOwner";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "OwnableUnauthorizedAccount";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    static createInterface(): ParysdelegateeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Parysdelegatee;
}
