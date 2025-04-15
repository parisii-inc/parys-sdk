import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Iabstractvelovaultrelayer, IabstractvelovaultrelayerInterface } from "../Iabstractvelovaultrelayer";
export declare class Iabstractvelovaultrelayer__factory {
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
        readonly type: "function";
        readonly name: "veloLpOracle";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_veloPool";
            readonly type: "address";
            readonly internalType: "contract IPessimisticVeloLpOracle";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "veloPool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_veloPool";
            readonly type: "address";
            readonly internalType: "contract IVeloPool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "AbstractVeloVaultRelayer_NullVeloLpOracle";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AbstractVeloVaultRelayer_NullVeloPool";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPriceFeed";
        readonly inputs: readonly [];
    }];
    static createInterface(): IabstractvelovaultrelayerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Iabstractvelovaultrelayer;
}
