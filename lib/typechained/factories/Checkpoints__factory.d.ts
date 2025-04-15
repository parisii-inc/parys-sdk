import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Checkpoints, CheckpointsInterface } from "../Checkpoints";
export declare class Checkpoints__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "CheckpointUnorderedInsertion";
        readonly inputs: readonly [];
    }];
    static createInterface(): CheckpointsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Checkpoints;
}
