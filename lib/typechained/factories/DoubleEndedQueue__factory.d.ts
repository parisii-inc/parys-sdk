import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DoubleEndedQueue, DoubleEndedQueueInterface } from "../DoubleEndedQueue";
export declare class DoubleEndedQueue__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "QueueEmpty";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QueueFull";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QueueOutOfBounds";
        readonly inputs: readonly [];
    }];
    static createInterface(): DoubleEndedQueueInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DoubleEndedQueue;
}
