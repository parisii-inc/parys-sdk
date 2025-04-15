import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDenominatedOracle, IDenominatedOracleInterface } from "../IDenominatedOracle";
export declare class IDenominatedOracle__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "denominationPriceSource";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_denominationPriceSource";
            readonly type: "address";
            readonly internalType: "contract IBaseOracle";
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
        readonly name: "inverted";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_inverted";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "DenominatedOracle_NullPriceSource";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPriceFeed";
        readonly inputs: readonly [];
    }];
    static createInterface(): IDenominatedOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDenominatedOracle;
}
