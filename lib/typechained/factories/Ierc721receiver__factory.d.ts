import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ierc721receiver, Ierc721receiverInterface } from "../Ierc721receiver";
export declare class Ierc721receiver__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "onERC721Received";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
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
    static createInterface(): Ierc721receiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ierc721receiver;
}
