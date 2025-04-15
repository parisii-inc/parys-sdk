import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Erc721holder, Erc721holderInterface } from "../Erc721holder";
export declare class Erc721holder__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "onERC721Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): Erc721holderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Erc721holder;
}
