import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Iaggregatorv3, Iaggregatorv3Interface } from "../Iaggregatorv3";
export declare class Iaggregatorv3__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "description";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getRoundData";
        readonly inputs: readonly [{
            readonly name: "_roundId";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }];
        readonly outputs: readonly [{
            readonly name: "roundId";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }, {
            readonly name: "answer";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "startedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "updatedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "answeredInRound";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "latestRoundData";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "roundId";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }, {
            readonly name: "answer";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "startedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "updatedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "answeredInRound";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "version";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): Iaggregatorv3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Iaggregatorv3;
}
