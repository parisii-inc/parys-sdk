import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISAFESaviour, ISAFESaviourInterface } from "../ISAFESaviour";
export declare class ISAFESaviour__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "saveSAFE";
        readonly inputs: readonly [{
            readonly name: "_liquidator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_safe";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_ok";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_collateralAdded";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_liquidatorReward";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): ISAFESaviourInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISAFESaviour;
}
