import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Doubleendedqueue, DoubleendedqueueInterface } from "../Doubleendedqueue";
export declare class Doubleendedqueue__factory {
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
    static createInterface(): DoubleendedqueueInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Doubleendedqueue;
}
