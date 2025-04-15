import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Safecast, SafecastInterface } from "../Safecast";
export declare class Safecast__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "SafeCastOverflowedIntDowncast";
        readonly inputs: readonly [{
            readonly name: "bits";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
    }, {
        readonly type: "error";
        readonly name: "SafeCastOverflowedIntToUint";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
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
        readonly name: "SafeCastOverflowedUintToInt";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    static createInterface(): SafecastInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Safecast;
}
