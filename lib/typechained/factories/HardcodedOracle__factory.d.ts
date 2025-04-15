import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { HardcodedOracle, HardcodedOracleInterface } from "../HardcodedOracle";
export declare class HardcodedOracle__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_symbol";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_price";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getResultWithValidity";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_price";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_validity";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "price";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "read";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "InvalidPriceFeed";
        readonly inputs: readonly [];
    }];
    static createInterface(): HardcodedOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HardcodedOracle;
}
