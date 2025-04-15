import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DeviatedOracle, DeviatedOracleInterface } from "../DeviatedOracle";
export declare class DeviatedOracle__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_symbol";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_oracleRelayer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_deviation";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deviation";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly name: "oracleRelayer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IOracleRelayer";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "read";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_price";
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
    static createInterface(): DeviatedOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DeviatedOracle;
}
