import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Reentrancyguard, ReentrancyguardInterface } from "../Reentrancyguard";
export declare class Reentrancyguard__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "ReentrancyGuardReentrantCall";
        readonly inputs: readonly [];
    }];
    static createInterface(): ReentrancyguardInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Reentrancyguard;
}
