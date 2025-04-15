import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ichainlinkoracle, IchainlinkoracleInterface } from "../Ichainlinkoracle";
export declare class Ichainlinkoracle__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_decimals";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "description";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_description";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getAnswer";
        readonly inputs: readonly [{
            readonly name: "_roundId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_answer";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getRoundData";
        readonly inputs: readonly [{
            readonly name: "__roundId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_roundId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_answer";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_startedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_updatedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_answeredInRound";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getTimestamp";
        readonly inputs: readonly [{
            readonly name: "_roundId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_timestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "latestAnswer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_latestAnswer";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "latestRound";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_latestRound";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "latestRoundData";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_roundId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_answer";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_startedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_updatedAt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_answeredInRound";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "latestTimestamp";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_latestTimestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IchainlinkoracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ichainlinkoracle;
}
