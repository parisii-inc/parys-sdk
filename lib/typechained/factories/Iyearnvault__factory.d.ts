import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Iyearnvault, IyearnvaultInterface } from "../Iyearnvault";
export declare class Iyearnvault__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "pricePerShare";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_pricePerShare";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_symbol";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IyearnvaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Iyearnvault;
}
