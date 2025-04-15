import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SAFEHandler, SAFEHandlerInterface } from "../SAFEHandler";
export declare class SAFEHandler__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_safeEngine";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): SAFEHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SAFEHandler;
}
