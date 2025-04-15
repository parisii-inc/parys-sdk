import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAccountingEngine, IAccountingEngineInterface } from "../IAccountingEngine";
export declare class IAccountingEngine__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_surplusIsTransferred";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_surplusDelay";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_popDebtDelay";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_disableCooldown";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_surplusAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_surplusBuffer";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_debtAuctionMintedTokens";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_debtAuctionBidSize";
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
        readonly name: "auctionDebt";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "auctionSurplus";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
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
        readonly name: "cancelAuctionedDebtWithSurplus";
        readonly inputs: readonly [{
            readonly name: "_rad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "debtAuctionHouse";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_debtAuctionHouse";
            readonly type: "address";
            readonly internalType: "contract IDebtAuctionHouse";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "debtQueue";
        readonly inputs: readonly [{
            readonly name: "_blockTimestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_debtBlock";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "disableTimestamp";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_disableTimestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "extraSurplusReceiver";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_extraSurplusReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "lastSurplusTime";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_lastSurplusTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct IAccountingEngine.AccountingEngineParams";
            readonly components: readonly [{
                readonly name: "surplusIsTransferred";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "surplusDelay";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "popDebtDelay";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "disableCooldown";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "surplusAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "surplusBuffer";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "debtAuctionMintedTokens";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "debtAuctionBidSize";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "popDebtFromQueue";
        readonly inputs: readonly [{
            readonly name: "_debtBlockTimestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "postSettlementSurplusDrain";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_postSettlementSurplusDrain";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pushDebtToQueue";
        readonly inputs: readonly [{
            readonly name: "_debtBlock";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "settleDebt";
        readonly inputs: readonly [{
            readonly name: "_rad";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "surplusAuctionHouse";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_surplusAuctionHouse";
            readonly type: "address";
            readonly internalType: "contract ISurplusAuctionHouse";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalOnAuctionDebt";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_totalOnAuctionDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalQueuedDebt";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_totalQueuedDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferExtraSurplus";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferPostSettlementSurplus";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "unqueuedUnauctionedDebt";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_unqueuedUnauctionedDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
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
        readonly name: "AuctionDebt";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "_initialBid";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_debtAuctioned";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "AuctionSurplus";
        readonly inputs: readonly [{
            readonly name: "_id";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "_initialBid";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_surplusAuctioned";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CancelDebt";
        readonly inputs: readonly [{
            readonly name: "_rad";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_coinBalance";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_debtBalance";
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
        readonly name: "PopDebtFromQueue";
        readonly inputs: readonly [{
            readonly name: "_timestamp";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "_debtAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "PushDebtToQueue";
        readonly inputs: readonly [{
            readonly name: "_timestamp";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "_debtAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly name: "SettleDebt";
        readonly inputs: readonly [{
            readonly name: "_rad";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_coinBalance";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_debtBalance";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "TransferSurplus";
        readonly inputs: readonly [{
            readonly name: "_extraSurplusReceiver";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_surplusTransferred";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AccEng_DebtAuctionDisabled";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AccEng_InsufficientDebt";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AccEng_InsufficientSurplus";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AccEng_NullAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AccEng_NullSurplusReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AccEng_PopDebtCooldown";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AccEng_PostSettlementCooldown";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AccEng_SurplusAuctionDisabled";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AccEng_SurplusCooldown";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AccEng_SurplusTransferDisabled";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AlreadyAuthorized";
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
    static createInterface(): IAccountingEngineInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAccountingEngine;
}
