import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Math, MathInterface } from "../Math";
export declare class Math__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "IntOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): MathInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Math;
}
