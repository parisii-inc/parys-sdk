import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Basicactions, BasicactionsInterface } from "../Basicactions";
export declare class Basicactions__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "collectTokenCollateral";
        readonly inputs: readonly [{
            readonly name: "_manager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_safeId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deltaWad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "exitAllSystemCoins";
        readonly inputs: readonly [{
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "exitCollateral";
        readonly inputs: readonly [{
            readonly name: "_collateralJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "exitSystemCoins";
        readonly inputs: readonly [{
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_coinsToExit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "freeTokenCollateral";
        readonly inputs: readonly [{
            readonly name: "_manager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_safeId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deltaWad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "generateDebt";
        readonly inputs: readonly [{
            readonly name: "_manager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_taxCollector";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_safeId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deltaWad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "joinSystemCoins";
        readonly inputs: readonly [{
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_dst";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "lockTokenCollateral";
        readonly inputs: readonly [{
            readonly name: "_manager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_safeId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deltaWad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "lockTokenCollateralAndGenerateDebt";
        readonly inputs: readonly [{
            readonly name: "_manager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_taxCollector";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_safe";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_collateralAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deltaWad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "openLockTokenCollateralAndGenerateDebt";
        readonly inputs: readonly [{
            readonly name: "_manager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_taxCollector";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_collateralAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deltaWad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_safe";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "openSAFE";
        readonly inputs: readonly [{
            readonly name: "_manager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_usr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_safeId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repayAllDebt";
        readonly inputs: readonly [{
            readonly name: "_manager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_taxCollector";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_safeId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repayAllDebtAndFreeTokenCollateral";
        readonly inputs: readonly [{
            readonly name: "_manager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_taxCollector";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_safeId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_collateralWad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repayDebt";
        readonly inputs: readonly [{
            readonly name: "_manager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_taxCollector";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_safeId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deltaWad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "repayDebtAndFreeTokenCollateral";
        readonly inputs: readonly [{
            readonly name: "_manager";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_taxCollector";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_safeId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_collateralWad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_debtWad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly name: "AddressEmptyCode";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "AddressInsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "FailedInnerCall";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IntOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyDelegateCalls";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SafeERC20FailedOperation";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    static createInterface(): BasicactionsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Basicactions;
}
