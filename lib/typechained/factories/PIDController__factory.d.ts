import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { PIDController, PIDControllerInterface } from "../PIDController";
export declare class PIDController__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_cGains";
            readonly type: "tuple";
            readonly internalType: "struct IPIDController.ControllerGains";
            readonly components: readonly [{
                readonly name: "kp";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "ki";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "influenceFactor";
                readonly type: "int256";
                readonly internalType: "int256";
            }];
        }, {
            readonly name: "_pidParams";
            readonly type: "tuple";
            readonly internalType: "struct IPIDController.PIDControllerParams";
            readonly components: readonly [{
                readonly name: "integralPeriodSize";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "perSecondCumulativeLeak";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "noiseBarrier";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "feedbackOutputUpperBound";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "feedbackOutputLowerBound";
                readonly type: "int256";
                readonly internalType: "int256";
            }];
        }, {
            readonly name: "_importedState";
            readonly type: "tuple";
            readonly internalType: "struct IPIDController.DeviationObservation";
            readonly components: readonly [{
                readonly name: "timestamp";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "proportional";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "integral";
                readonly type: "int256";
                readonly internalType: "int256";
            }];
        }, {
            readonly name: "_oracleRelayer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "_controllerGains";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "kp";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "ki";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "influenceFactor";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_deviationObservation";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "proportional";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "integral";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "integralPeriodSize";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "perSecondCumulativeLeak";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "noiseBarrier";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "feedbackOutputUpperBound";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "feedbackOutputLowerBound";
            readonly type: "int256";
            readonly internalType: "int256";
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
        readonly name: "breaksNoiseBarrier";
        readonly inputs: readonly [{
            readonly name: "_piSum";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_redemptionPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_breaksNb";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "computeRate";
        readonly inputs: readonly [{
            readonly name: "_marketPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_targetPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_newRedemptionRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "controllerGains";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_cGains";
            readonly type: "tuple";
            readonly internalType: "struct IPIDController.ControllerGains";
            readonly components: readonly [{
                readonly name: "kp";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "ki";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "influenceFactor";
                readonly type: "int256";
                readonly internalType: "int256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deviationObservation";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "__deviationObservation";
            readonly type: "tuple";
            readonly internalType: "struct IPIDController.DeviationObservation";
            readonly components: readonly [{
                readonly name: "timestamp";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "proportional";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "integral";
                readonly type: "int256";
                readonly internalType: "int256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBoundedRedemptionRate";
        readonly inputs: readonly [{
            readonly name: "_piOutput";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "_newRedemptionRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getGainAdjustedPIOutput";
        readonly inputs: readonly [{
            readonly name: "_proportionalTerm";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_integralTerm";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "_gainAdjustedPIOutput";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getGainAdjustedTerms";
        readonly inputs: readonly [{
            readonly name: "_proportionalTerm";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_integralTerm";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "_ajustedProportionalTerm";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_adjustedIntegralTerm";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNextDeviationCumulative";
        readonly inputs: readonly [{
            readonly name: "_proportionalTerm";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_accumulatedLeak";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_nextDeviationCumulative";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_appliedDeviation";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNextRedemptionRate";
        readonly inputs: readonly [{
            readonly name: "_marketPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_redemptionPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_accumulatedLeak";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_redemptionRate";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_proportionalTerm";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_integralTerm";
            readonly type: "int256";
            readonly internalType: "int256";
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
            readonly name: "_pidParams";
            readonly type: "tuple";
            readonly internalType: "struct IPIDController.PIDControllerParams";
            readonly components: readonly [{
                readonly name: "integralPeriodSize";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "perSecondCumulativeLeak";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "noiseBarrier";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "feedbackOutputUpperBound";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "feedbackOutputLowerBound";
                readonly type: "int256";
                readonly internalType: "int256";
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
        readonly name: "seedProposer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "timeSinceLastUpdate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_elapsed";
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
        readonly name: "UpdateDeviation";
        readonly inputs: readonly [{
            readonly name: "_proportionalDeviation";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }, {
            readonly name: "_integralDeviation";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }, {
            readonly name: "_deltaIntegralDeviation";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AlreadyAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IntNotGreaterOrEqualThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_y";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
    }, {
        readonly type: "error";
        readonly name: "IntNotLesserOrEqualThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_y";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
    }, {
        readonly type: "error";
        readonly name: "IntNotLesserThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_y";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
    }, {
        readonly type: "error";
        readonly name: "IntOverflow";
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
        readonly name: "NullAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PIDController_CannotSetPriceDeviationCumulative";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PIDController_ComputeRateCooldown";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PIDController_OnlySeedProposer";
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
    static createInterface(): PIDControllerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PIDController;
}
