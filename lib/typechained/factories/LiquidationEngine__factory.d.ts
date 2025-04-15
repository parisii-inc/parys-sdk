import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { LiquidationEngine, LiquidationEngineInterface } from "../LiquidationEngine";
export declare class LiquidationEngine__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_safeEngine";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_accountingEngine";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_liqEngineParams";
            readonly type: "tuple";
            readonly internalType: "struct ILiquidationEngine.LiquidationEngineParams";
            readonly components: readonly [{
                readonly name: "onAuctionSystemCoinLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "saviourGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_cParams";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "collateralAuctionHouse";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "liquidationPenalty";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "liquidationQuantity";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "onAuctionSystemCoinLimit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "saviourGasLimit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "accountingEngine";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAccountingEngine";
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
        readonly name: "attemptSave";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_safe";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_liquidator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_safeData";
            readonly type: "tuple";
            readonly internalType: "struct ISAFEEngine.SAFE";
            readonly components: readonly [{
                readonly name: "lockedCollateral";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "generatedDebt";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "_newSafeData";
            readonly type: "tuple";
            readonly internalType: "struct ISAFEEngine.SAFE";
            readonly components: readonly [{
                readonly name: "lockedCollateral";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "generatedDebt";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
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
        readonly name: "cParams";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "_liqEngineCParams";
            readonly type: "tuple";
            readonly internalType: "struct ILiquidationEngine.LiquidationEngineCollateralParams";
            readonly components: readonly [{
                readonly name: "collateralAuctionHouse";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "liquidationPenalty";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "liquidationQuantity";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "chosenSAFESaviour";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_safe";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_saviour";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralList";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "__collateralList";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "connectSAFESaviour";
        readonly inputs: readonly [{
            readonly name: "_saviour";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "contractEnabled";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "currentOnAuctionSystemCoins";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
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
        readonly name: "disconnectSAFESaviour";
        readonly inputs: readonly [{
            readonly name: "_saviour";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getLimitAdjustedDebtToCover";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_safe";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_limitAdjustedDebtToCover";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initializeCollateralType";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_collateralParams";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "liquidateSAFE";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_safe";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_auctionId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "modifyParameters";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
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
            readonly name: "_liqEngineParams";
            readonly type: "tuple";
            readonly internalType: "struct ILiquidationEngine.LiquidationEngineParams";
            readonly components: readonly [{
                readonly name: "onAuctionSystemCoinLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "saviourGasLimit";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "protectSAFE";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_safe";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_saviour";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "removeCoinsFromAuction";
        readonly inputs: readonly [{
            readonly name: "_rad";
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
        readonly name: "safeSaviours";
        readonly inputs: readonly [{
            readonly name: "_saviour";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_allowed";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "ConnectSAFESaviour";
        readonly inputs: readonly [{
            readonly name: "_saviour";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DisableContract";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DisconnectSAFESaviour";
        readonly inputs: readonly [{
            readonly name: "_saviour";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FailedSAFESave";
        readonly inputs: readonly [{
            readonly name: "_failReason";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "InitializeCollateralType";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Liquidate";
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
            readonly name: "_collateralAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_debtAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_amountToRaise";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_collateralAuctioneer";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_auctionId";
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
        readonly name: "ProtectSAFE";
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
            readonly name: "_saviour";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
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
        readonly name: "SaveSAFE";
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
            readonly name: "_collateralAddedOrDebtRepaid";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "UpdateCurrentOnAuctionSystemCoins";
        readonly inputs: readonly [{
            readonly name: "_currentOnAuctionSystemCoins";
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
        readonly name: "CollateralTypeAlreadyInitialized";
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
        readonly name: "IntOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LiqEng_CannotModifySAFE";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LiqEng_InvalidAmounts";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LiqEng_InvalidSAFESaviourOperation";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LiqEng_LiquidationLimitHit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LiqEng_NullAuction";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LiqEng_NullCollateralToSell";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LiqEng_OnlyLiqEng";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LiqEng_SAFENotUnsafe";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LiqEng_SaviourNotAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "LiqEng_SaviourNotOk";
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
        readonly name: "NonDisableable";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotLesserOrEqualThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "NullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyGuardReentrantCall";
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
    static createInterface(): LiquidationEngineInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiquidationEngine;
}
