import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Beefyvelovaultrelayerchild, BeefyvelovaultrelayerchildInterface } from "../Beefyvelovaultrelayerchild";
export declare class Beefyvelovaultrelayerchild__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_token0priceSource";
            readonly type: "address";
            readonly internalType: "contract IBaseOracle";
        }, {
            readonly name: "_token1priceSource";
            readonly type: "address";
            readonly internalType: "contract IBaseOracle";
        }, {
            readonly name: "_beefyVault";
            readonly type: "address";
            readonly internalType: "contract IBeefyVaultV7";
        }, {
            readonly name: "_veloPool";
            readonly type: "address";
            readonly internalType: "contract IVeloPool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "beefyVault";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IBeefyVaultV7";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "factory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "read";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_result";
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
        readonly type: "function";
        readonly name: "token0priceSource";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IBaseOracle";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "token1priceSource";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IBaseOracle";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "veloPool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IVeloPool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "BeefyVeloVaultRelayer_InvalidPriceSource";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "BeefyVeloVaultRelayer_NullBeefyVault";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "BeefyVeloVaultRelayer_NullPriceSource";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "BeefyVeloVaultRelayer_NullVeloPool";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CallerNotFactory";
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
    static createInterface(): BeefyvelovaultrelayerchildInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Beefyvelovaultrelayerchild;
}
