import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Idelayedoraclechild, IdelayedoraclechildInterface } from "../Idelayedoraclechild";
export declare class Idelayedoraclechild__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "factory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_factory";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNextResultWithValidity";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_nextResult";
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
        readonly name: "lastUpdateTime";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_lastUpdateTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "priceSource";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_priceSource";
            readonly type: "address";
            readonly internalType: "contract IBaseOracle";
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
        readonly name: "shouldUpdate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_ok";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly type: "function";
        readonly name: "updateDelay";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_updateDelay";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "updateResult";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_success";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "UpdateResult";
        readonly inputs: readonly [{
            readonly name: "_currentFeedValue";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_lastUpdateTime";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CallerNotFactory";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DelayedOracle_DelayHasNotElapsed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DelayedOracle_NoCurrentValue";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DelayedOracle_NullDelay";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DelayedOracle_NullPriceSource";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPriceFeed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotFactoryDeployment";
        readonly inputs: readonly [];
    }];
    static createInterface(): IdelayedoraclechildInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Idelayedoraclechild;
}
