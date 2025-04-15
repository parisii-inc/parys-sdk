import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Safehandler, SafehandlerInterface } from "../Safehandler";
export declare class Safehandler__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_safeEngine";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): SafehandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Safehandler;
}
