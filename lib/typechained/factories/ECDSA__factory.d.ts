import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ECDSA, ECDSAInterface } from "../ECDSA";
export declare class ECDSA__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "ECDSAInvalidSignature";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ECDSAInvalidSignatureLength";
        readonly inputs: readonly [{
            readonly name: "length";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ECDSAInvalidSignatureS";
        readonly inputs: readonly [{
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
    }];
    static createInterface(): ECDSAInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ECDSA;
}
