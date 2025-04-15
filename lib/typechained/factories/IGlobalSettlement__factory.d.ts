import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IGlobalSettlement, IGlobalSettlementInterface } from "../IGlobalSettlement";
export declare class IGlobalSettlement__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_shutdownCooldown";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "accountingEngine";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_accountingEngine";
            readonly type: "address";
            readonly internalType: "contract IDisableable";
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
        readonly name: "calculateCashPrice";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "coinBag";
        readonly inputs: readonly [{
            readonly name: "_coinHolder";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_coinBag";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "coinJoin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_coinJoin";
            readonly type: "address";
            readonly internalType: "contract IDisableable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "coinsUsedToRedeem";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_coinHolder";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_coinsUsedToRedeem";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralAuctionHouseFactory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_collateralAuctionHouseFactory";
            readonly type: "address";
            readonly internalType: "contract IDisableable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralCashPrice";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "_collateralCashPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralJoinFactory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_collateralJoinFactory";
            readonly type: "address";
            readonly internalType: "contract IDisableable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralShortfall";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "_collateralShortfall";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralTotalDebt";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "_collateralTotalDebt";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "fastTrackAuction";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_auctionId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "finalCoinPerCollateralPrice";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "_finalCoinPerCollateralPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "freeCollateral";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "freezeCollateralType";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly name: "outstandingCoinSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_outstandingCoinSupply";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_globalSettlementParams";
            readonly type: "tuple";
            readonly internalType: "struct IGlobalSettlement.GlobalSettlementParams";
            readonly components: readonly [{
                readonly name: "shutdownCooldown";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "prepareCoinsForRedeeming";
        readonly inputs: readonly [{
            readonly name: "_coinAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "processSAFE";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_safe";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "redeemCollateral";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_coinsAmount";
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
        readonly name: "setOutstandingCoinSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "shutdownSystem";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "shutdownTime";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_shutdownTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "stabilityFeeTreasury";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_stabilityFeeTreasury";
            readonly type: "address";
            readonly internalType: "contract IDisableable";
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
        readonly name: "CalculateCashPrice";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_collateralCashPrice";
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
        readonly name: "FastTrackAuction";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_auctionId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "_collateralTotalDebt";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FreeCollateral";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_sender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_collateralAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FreezeCollateralType";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_finalCoinPerCollateralPrice";
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
        readonly name: "PrepareCoinsForRedeeming";
        readonly inputs: readonly [{
            readonly name: "_sender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_coinBag";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ProcessSAFE";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_safe";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_collateralShortfall";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RedeemCollateral";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_sender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_coinsAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_collateralAmount";
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
        readonly name: "SetOutstandingCoinSupply";
        readonly inputs: readonly [{
            readonly name: "_outstandingCoinSupply";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "ShutdownSystem";
        readonly inputs: readonly [];
        readonly anonymous: false;
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
        readonly name: "GS_CollateralCashPriceAlreadyDefined";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GS_CollateralCashPriceNotDefined";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GS_FinalCollateralPriceAlreadyDefined";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GS_FinalCollateralPriceNotDefined";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GS_InsufficientBagBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GS_OutstandingCoinSupplyNotZero";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GS_OutstandingCoinSupplyZero";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GS_SafeDebtNotZero";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GS_ShutdownCooldownNotFinished";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GS_SurplusNotZero";
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
    static createInterface(): IGlobalSettlementInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IGlobalSettlement;
}
