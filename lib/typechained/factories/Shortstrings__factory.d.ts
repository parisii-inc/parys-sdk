import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Shortstrings, ShortstringsInterface } from "../Shortstrings";
export declare class Shortstrings__factory {
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
    static createInterface(): ShortstringsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Shortstrings;
}
