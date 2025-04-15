import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Collateralbidactions, CollateralbidactionsInterface } from "../Collateralbidactions";
export declare class Collateralbidactions__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "buyCollateral";
        readonly inputs: readonly [{
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_collateralAuctionHouse";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_auctionId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minCollateralAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bidAmount";
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
        readonly name: "ColActions_InsufficientCollateralReceived";
        readonly inputs: readonly [{
            readonly name: "_minCollateralAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_received";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ColActions_InvalidAdjustedBid";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FailedInnerCall";
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
    static createInterface(): CollateralbidactionsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Collateralbidactions;
}
