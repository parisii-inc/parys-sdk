import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ibeefyvaultv7, Ibeefyvaultv7Interface } from "../Ibeefyvaultv7";
export declare class Ibeefyvaultv7__factory {
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
    static createInterface(): Ibeefyvaultv7Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ibeefyvaultv7;
}
