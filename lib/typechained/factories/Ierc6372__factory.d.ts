import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ierc6372, Ierc6372Interface } from "../Ierc6372";
export declare class Ierc6372__factory {
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
    }];
    static createInterface(): Ierc6372Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ierc6372;
}
