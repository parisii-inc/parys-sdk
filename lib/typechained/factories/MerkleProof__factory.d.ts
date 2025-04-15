import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { MerkleProof, MerkleProofInterface } from "../MerkleProof";
export declare class MerkleProof__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "MerkleProofInvalidMultiproof";
        readonly inputs: readonly [];
    }];
    static createInterface(): MerkleProofInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MerkleProof;
}
