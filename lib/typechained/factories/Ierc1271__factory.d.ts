import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ierc1271, Ierc1271Interface } from "../Ierc1271";
export declare class Ierc1271__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "isValidSignature";
        readonly inputs: readonly [{
            readonly name: "hash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "magicValue";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): Ierc1271Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ierc1271;
}
