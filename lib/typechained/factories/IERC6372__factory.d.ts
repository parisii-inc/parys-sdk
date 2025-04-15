import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC6372, IERC6372Interface } from "../IERC6372";
export declare class IERC6372__factory {
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
    static createInterface(): IERC6372Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC6372;
}
