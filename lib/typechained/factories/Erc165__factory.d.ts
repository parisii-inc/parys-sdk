import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Erc165, Erc165Interface } from "../Erc165";
export declare class Erc165__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): Erc165Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Erc165;
}
