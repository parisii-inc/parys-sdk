import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Strings, StringsInterface } from "../Strings";
export declare class Strings__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "StringsInsufficientHexLength";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "length";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    static createInterface(): StringsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Strings;
}
