import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITaxCollector, ITaxCollectorInterface } from "../ITaxCollector";
export declare class ITaxCollector__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_cData";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "_nextStabilityFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_updateTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_secondaryReceiverAllotedTax";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_cParams";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "_stabilityFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_primaryTaxReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_globalStabilityFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_maxStabilityFeeRange";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_maxSecondaryReceivers";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_secondaryTaxReceivers";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_secondaryReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_canTakeBackTax";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_taxPercentage";
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
        readonly name: "cData";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "_taxCollectorCData";
            readonly type: "tuple";
            readonly internalType: "struct ITaxCollector.TaxCollectorCollateralData";
            readonly components: readonly [{
                readonly name: "nextStabilityFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "updateTime";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "secondaryReceiverAllotedTax";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
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
            readonly name: "_taxCollectorCParams";
            readonly type: "tuple";
            readonly internalType: "struct ITaxCollector.TaxCollectorCollateralParams";
            readonly components: readonly [{
                readonly name: "stabilityFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
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
        readonly name: "collateralListLength";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_collateralListLength";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collectedManyTax";
        readonly inputs: readonly [{
            readonly name: "_start";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_end";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_ok";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "isSecondaryReceiver";
        readonly inputs: readonly [{
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_isSecondaryReceiver";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
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
            readonly name: "_taxCollectorParams";
            readonly type: "tuple";
            readonly internalType: "struct ITaxCollector.TaxCollectorParams";
            readonly components: readonly [{
                readonly name: "primaryTaxReceiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "globalStabilityFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxStabilityFeeRange";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxSecondaryReceivers";
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
        readonly name: "secondaryReceiverRevenueSourcesList";
        readonly inputs: readonly [{
            readonly name: "_secondaryReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_secondaryReceiverRevenueSourcesList";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "secondaryReceiversList";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_secondaryReceiversList";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "secondaryReceiversListLength";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_secondaryReceiversListLength";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "secondaryTaxReceivers";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_secondaryTaxReceiver";
            readonly type: "tuple";
            readonly internalType: "struct ITaxCollector.TaxReceiver";
            readonly components: readonly [{
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "canTakeBackTax";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "taxPercentage";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "taxMany";
        readonly inputs: readonly [{
            readonly name: "_start";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_end";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "taxManyOutcome";
        readonly inputs: readonly [{
            readonly name: "_start";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_end";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_ok";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "_rad";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "taxSingle";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "_latestAccumulatedRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "taxSingleOutcome";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "_newlyAccumulatedRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_deltaRate";
            readonly type: "int256";
            readonly internalType: "int256";
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
        readonly name: "CollectTax";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_latestAccumulatedRate";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_deltaRate";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DistributeTax";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_target";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_taxCut";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
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
        readonly name: "SetPrimaryReceiver";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "SetSecondaryReceiver";
        readonly inputs: readonly [{
            readonly name: "_cType";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "_receiver";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_taxPercentage";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "_canTakeBackTax";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
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
        readonly name: "NotAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TaxCollector_CollateralTypeNotInitialized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TaxCollector_ExceedsMaxReceiverLimit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TaxCollector_InvalidIndexes";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TaxCollector_NullAccount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TaxCollector_NullSF";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TaxCollector_PrimaryReceiverCannotBeSecondary";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TaxCollector_TaxCutExceedsHundred";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TaxCollector_TaxCutTooBig";
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
    static createInterface(): ITaxCollectorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITaxCollector;
}
