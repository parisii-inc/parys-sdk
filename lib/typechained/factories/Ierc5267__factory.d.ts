import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ierc5267, Ierc5267Interface } from "../Ierc5267";
export declare class Ierc5267__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "eip712Domain";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "fields";
            readonly type: "bytes1";
            readonly internalType: "bytes1";
        }, {
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "version";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "chainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "verifyingContract";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "extensions";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "EIP712DomainChanged";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }];
    static createInterface(): Ierc5267Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ierc5267;
}
