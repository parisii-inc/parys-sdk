import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Merkleproof, MerkleproofInterface } from "../Merkleproof";
export declare class Merkleproof__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "MerkleProofInvalidMultiproof";
        readonly inputs: readonly [];
    }];
    static createInterface(): MerkleproofInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Merkleproof;
}
