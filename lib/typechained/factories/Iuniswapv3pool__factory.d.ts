import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Iuniswapv3pool, Iuniswapv3poolInterface } from "../Iuniswapv3pool";
export declare class Iuniswapv3pool__factory {
    static readonly abi: readonly [{
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
        readonly name: "fee";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "increaseObservationCardinalityNext";
        readonly inputs: readonly [{
            readonly name: "observationCardinalityNext";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "sqrtPriceX96";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "liquidity";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "observations";
        readonly inputs: readonly [{
            readonly name: "index";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "blockTimestamp";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "tickCumulative";
            readonly type: "int56";
            readonly internalType: "int56";
        }, {
            readonly name: "secondsPerLiquidityCumulativeX128";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }, {
            readonly name: "initialized";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "observe";
        readonly inputs: readonly [{
            readonly name: "secondsAgos";
            readonly type: "uint32[]";
            readonly internalType: "uint32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "tickCumulatives";
            readonly type: "int56[]";
            readonly internalType: "int56[]";
        }, {
            readonly name: "secondsPerLiquidityCumulativeX128s";
            readonly type: "uint160[]";
            readonly internalType: "uint160[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "positions";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "_liquidity";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "feeGrowthInside0LastX128";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "feeGrowthInside1LastX128";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tokensOwed0";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "tokensOwed1";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "slot0";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "sqrtPriceX96";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }, {
            readonly name: "tick";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "observationIndex";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "observationCardinality";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "observationCardinalityNext";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "feeProtocol";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "unlocked";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "snapshotCumulativesInside";
        readonly inputs: readonly [{
            readonly name: "tickLower";
            readonly type: "int24";
            readonly internalType: "int24";
        }, {
            readonly name: "tickUpper";
            readonly type: "int24";
            readonly internalType: "int24";
        }];
        readonly outputs: readonly [{
            readonly name: "tickCumulativeInside";
            readonly type: "int56";
            readonly internalType: "int56";
        }, {
            readonly name: "secondsPerLiquidityInsideX128";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }, {
            readonly name: "secondsInside";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "tickSpacing";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int24";
            readonly internalType: "int24";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "ticks";
        readonly inputs: readonly [{
            readonly name: "tick";
            readonly type: "int24";
            readonly internalType: "int24";
        }];
        readonly outputs: readonly [{
            readonly name: "liquidityGross";
            readonly type: "uint128";
            readonly internalType: "uint128";
        }, {
            readonly name: "liquidityNet";
            readonly type: "int128";
            readonly internalType: "int128";
        }, {
            readonly name: "feeGrowthOutside0X128";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "feeGrowthOutside1X128";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tickCumulativeOutside";
            readonly type: "int56";
            readonly internalType: "int56";
        }, {
            readonly name: "secondsPerLiquidityOutsideX128";
            readonly type: "uint160";
            readonly internalType: "uint160";
        }, {
            readonly name: "secondsOutside";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "initialized";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "token0";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "token1";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): Iuniswapv3poolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Iuniswapv3pool;
}
