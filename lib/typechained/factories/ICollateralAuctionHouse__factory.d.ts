import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICollateralAuctionHouse, ICollateralAuctionHouseInterface } from "../ICollateralAuctionHouse";
export declare class ICollateralAuctionHouse__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "AUCTION_HOUSE_TYPE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_auctionHouseType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_auctions";
        readonly inputs: readonly [{
            readonly name: "_auctionId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_amountToSell";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountToRaise";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_initialTimestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_forgoneCollateralReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_auctionIncomeRecipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_minimumBid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_minDiscount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_maxDiscount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_perSecondDiscountUpdateRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "addAuthorization";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "auctions";
        readonly inputs: readonly [{
            readonly name: "_auctionId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_auction";
            readonly type: "tuple";
            readonly internalType: "struct ICollateralAuctionHouse.Auction";
            readonly components: readonly [{
                readonly name: "amountToSell";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountToRaise";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "initialTimestamp";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "forgoneCollateralReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "auctionIncomeRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "auctionsStarted";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_auctionsStarted";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "authorizedAccounts";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_authorized";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "authorizedAccounts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_accounts";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "buyCollateral";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_boughtCollateral";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_adjustedBid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "collateralType";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "contractEnabled";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_contractEnabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "disableContract";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getAuctionDiscount";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_auctionDiscount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCollateralBought";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_wad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_collateralBought";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_adjustedBid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "liquidationEngine";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_liquidationEngine";
            readonly type: "address";
            readonly internalType: "contract ILiquidationEngine";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "modifyParameters";
        readonly inputs: readonly [{
            readonly name: "_param";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "oracleRelayer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_oracleRelayer";
            readonly type: "address";
            readonly internalType: "contract IOracleRelayer";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_cahParams";
            readonly type: "tuple";
            readonly internalType: "struct ICollateralAuctionHouse.CollateralAuctionHouseParams";
            readonly components: readonly [{
                readonly name: "minimumBid";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minDiscount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxDiscount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "perSecondDiscountUpdateRate";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "removeAuthorization";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "safeEngine";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_safeEngine";
            readonly type: "address";
            readonly internalType: "contract ISAFEEngine";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startAuction";
        readonly inputs: readonly [{
            readonly name: "_forgoneCollateralReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_auctionIncomeRecipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amountToRaise";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_collateralToSell";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "terminateAuctionPrematurely";
        readonly inputs: readonly [{
            readonly name: "_auctionId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AddAuthorization";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BuyCollateral";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "_bidder";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_blockTimestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_raisedAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_soldAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DisableContract";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ModifyParameters";
        readonly inputs: readonly [{
            readonly name: "_param";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_data";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RemoveAuthorization";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "SettleAuction";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "_blockTimestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_leftoverReceiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_leftoverCollateral";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "StartAuction";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "_auctioneer";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_blockTimestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountToSell";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountToRaise";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TerminateAuctionPrematurely";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "_blockTimestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_leftoverReceiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_leftoverCollateral";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AlreadyAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CAH_CollateralOracleInvalidValue";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CAH_DustyAuction";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CAH_InexistentAuction";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CAH_InvalidBid";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CAH_InvalidLeftToRaise";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CAH_InvalidRedemptionPriceProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CAH_NoCollateralForSale";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CAH_NothingToRaise";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CAH_NullBoughtAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractIsDisabled";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractIsEnabled";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NonDisableable";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnrecognizedCType";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnrecognizedParam";
        readonly inputs: readonly [];
    }];
    static createInterface(): ICollateralAuctionHouseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICollateralAuctionHouse;
}
