import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IUniswapV3Factory, IUniswapV3FactoryInterface } from "../IUniswapV3Factory";
export declare class IUniswapV3Factory__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "createPool";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly outputs: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "feeAmountTickSpacing";
        readonly inputs: readonly [{
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int24";
            readonly internalType: "int24";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPool";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenB";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly outputs: readonly [{
            readonly name: "pool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "PoolCreated";
        readonly inputs: readonly [{
            readonly name: "token0";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "token1";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "fee";
            readonly type: "uint24";
            readonly indexed: true;
            readonly internalType: "uint24";
        }, {
            readonly name: "tickSpacing";
            readonly type: "int24";
            readonly indexed: false;
            readonly internalType: "int24";
        }, {
            readonly name: "pool";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): IUniswapV3FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IUniswapV3Factory;
}
