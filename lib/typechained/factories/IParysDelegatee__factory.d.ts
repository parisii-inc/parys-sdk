import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IParysDelegatee, IParysDelegateeInterface } from "../IParysDelegatee";
export declare class IParysDelegatee__factory {
    static readonly abi: readonly [{
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
            readonly name: "_delegatee";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly type: "error";
        readonly name: "OnlyDelegatee";
        readonly inputs: readonly [];
    }];
    static createInterface(): IParysDelegateeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IParysDelegatee;
}
