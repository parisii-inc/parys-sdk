import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { MockChainlinkFeed, MockChainlinkFeedInterface } from "../MockChainlinkFeed";
export declare class MockChainlinkFeed__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_desc";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_initialAnswer";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_initialDecimals";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_decimalsResult";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "description";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_desc";
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
            readonly name: "_roundIdResult";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }, {
            readonly name: "_answerResult";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_startedAtResult";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_updatedAtResult";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_answeredInRoundResult";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "latestRoundData";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_roundIdResult";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }, {
            readonly name: "_answerResult";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_startedAtResult";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_updatedAtResult";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_answeredInRoundResult";
            readonly type: "uint80";
            readonly internalType: "uint80";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setPrice";
        readonly inputs: readonly [{
            readonly name: "_price";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "version";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_version";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }];
    static createInterface(): MockChainlinkFeedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockChainlinkFeed;
}
