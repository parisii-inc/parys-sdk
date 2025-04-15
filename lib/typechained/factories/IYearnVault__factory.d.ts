import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IYearnVault, IYearnVaultInterface } from "../IYearnVault";
export declare class IYearnVault__factory {
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
    static createInterface(): IYearnVaultInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IYearnVault;
}
