import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBeefyVaultV7, IBeefyVaultV7Interface } from "../IBeefyVaultV7";
export declare class IBeefyVaultV7__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getPricePerFullShare";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_pricePerFullShare";
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
    static createInterface(): IBeefyVaultV7Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBeefyVaultV7;
}
