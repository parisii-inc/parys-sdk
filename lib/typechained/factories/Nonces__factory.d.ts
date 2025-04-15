import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Nonces, NoncesInterface } from "../Nonces";
export declare class Nonces__factory {
    static readonly abi: readonly [{
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
    }];
    static createInterface(): NoncesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Nonces;
}
