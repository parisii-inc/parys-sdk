import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Debtbidactions, DebtbidactionsInterface } from "../Debtbidactions";
export declare class Debtbidactions__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "collectProtocolTokens";
        readonly inputs: readonly [{
            readonly name: "_protocolToken";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "decreaseSoldAmount";
        readonly inputs: readonly [{
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_debtAuctionHouse";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_auctionId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_soldAmount";
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
        readonly type: "function";
        readonly name: "settleAuction";
        readonly inputs: readonly [{
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_debtAuctionHouse";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_auctionId";
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
    static createInterface(): DebtbidactionsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Debtbidactions;
}
