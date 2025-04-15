import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Assertions, AssertionsInterface } from "../Assertions";
export declare class Assertions__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "IntNotGreaterOrEqualThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_y";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
    }, {
        readonly type: "error";
        readonly name: "IntNotGreaterThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_y";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
    }, {
        readonly type: "error";
        readonly name: "IntNotLesserOrEqualThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_y";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
    }, {
        readonly type: "error";
        readonly name: "IntNotLesserThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_y";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
    }, {
        readonly type: "error";
        readonly name: "NoCode";
        readonly inputs: readonly [{
            readonly name: "_contract";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "NotGreaterOrEqualThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "NotGreaterThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "NotLesserOrEqualThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "NotLesserThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "NullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAmount";
        readonly inputs: readonly [];
    }];
    static createInterface(): AssertionsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Assertions;
}
