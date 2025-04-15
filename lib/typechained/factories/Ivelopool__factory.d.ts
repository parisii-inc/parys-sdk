import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ivelopool, IvelopoolInterface } from "../Ivelopool";
export declare class Ivelopool__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "reserve0";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_reserve0";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "reserve1";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_reserve1";
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
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_totalSupply";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IvelopoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ivelopool;
}
