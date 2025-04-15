import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IVotes, IVotesInterface } from "../IVotes";
export declare class IVotes__factory {
    static readonly abi: readonly [{
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
        readonly type: "error";
        readonly name: "VotesExpiredSignature";
        readonly inputs: readonly [{
            readonly name: "expiry";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    static createInterface(): IVotesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IVotes;
}
