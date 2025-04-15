import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ShortStrings, ShortStringsInterface } from "../ShortStrings";
export declare class ShortStrings__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "InvalidShortString";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "StringTooLong";
        readonly inputs: readonly [{
            readonly name: "str";
            readonly type: "string";
            readonly internalType: "string";
        }];
    }];
    static createInterface(): ShortStringsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ShortStrings;
}
