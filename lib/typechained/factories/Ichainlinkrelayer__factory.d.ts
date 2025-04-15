import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ichainlinkrelayer, IchainlinkrelayerInterface } from "../Ichainlinkrelayer";
export declare class Ichainlinkrelayer__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getResultWithValidity";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_result";
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
        readonly name: "multiplier";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_multiplier";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "priceFeed";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_priceFeed";
            readonly type: "address";
            readonly internalType: "contract IChainlinkOracle";
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
        readonly name: "sequencerUptimeFeed";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_sequencerUptimeFeed";
            readonly type: "address";
            readonly internalType: "contract IChainlinkOracle";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "staleThreshold";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_staleThreshold";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_symbol";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "ChainlinkRelayer_NullPriceFeed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ChainlinkRelayer_NullSequencerUptimeFeed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ChainlinkRelayer_NullStaleThreshold";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPriceFeed";
        readonly inputs: readonly [];
    }];
    static createInterface(): IchainlinkrelayerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ichainlinkrelayer;
}
