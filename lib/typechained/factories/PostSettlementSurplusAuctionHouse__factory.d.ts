import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { PostSettlementSurplusAuctionHouse, PostSettlementSurplusAuctionHouseInterface } from "../PostSettlementSurplusAuctionHouse";
export declare class PostSettlementSurplusAuctionHouse__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_safeEngine";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_protocolToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_pssahParams";
            readonly type: "tuple";
            readonly internalType: "struct IPostSettlementSurplusAuctionHouse.PostSettlementSAHParams";
            readonly components: readonly [{
                readonly name: "bidIncrease";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "bidDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "totalAuctionLength";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "AUCTION_HOUSE_TYPE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_auctions";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "bidAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountToSell";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "highBidder";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "bidExpiry";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "auctionDeadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "bidIncrease";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "bidDuration";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "totalAuctionLength";
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
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_auction";
            readonly type: "tuple";
            readonly internalType: "struct ICommonSurplusAuctionHouse.Auction";
            readonly components: readonly [{
                readonly name: "bidAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountToSell";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "highBidder";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bidExpiry";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "auctionDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "auctionsStarted";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
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
        readonly name: "increaseBidSize";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_bid";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_pssahParams";
            readonly type: "tuple";
            readonly internalType: "struct IPostSettlementSurplusAuctionHouse.PostSettlementSAHParams";
            readonly components: readonly [{
                readonly name: "bidIncrease";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "bidDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "totalAuctionLength";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "protocolToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IProtocolToken";
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
        readonly name: "restartAuction";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "safeEngine";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISAFEEngine";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "settleAuction";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startAuction";
        readonly inputs: readonly [{
            readonly name: "_amountToSell";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_initialBid";
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
        readonly name: "IncreaseBidSize";
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
        }, {
            readonly name: "_bidExpiry";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
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
        readonly name: "RestartAuction";
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
            readonly name: "_auctionDeadline";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
            readonly name: "_highBidder";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_raisedAmount";
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
        }, {
            readonly name: "_auctionDeadline";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
        readonly name: "AlreadyAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FailedInnerCall";
        readonly inputs: readonly [];
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
        readonly name: "NotAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SAH_AmountsNotMatching";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SAH_AuctionAlreadyExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SAH_AuctionNeverStarted";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SAH_AuctionNotFinished";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SAH_BidAlreadyExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SAH_BidAlreadyPlaced";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SAH_BidNotHigher";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SAH_HighBidderNotSet";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SAH_InsufficientIncrease";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SafeERC20FailedOperation";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
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
    static createInterface(): PostSettlementSurplusAuctionHouseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PostSettlementSurplusAuctionHouse;
}
