import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ipidcontroller, IpidcontrollerInterface } from "../Ipidcontroller";
export declare class Ipidcontroller__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "_controllerGains";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_kp";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_ki";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_influenceFactor";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_deviationObservation";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_timestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_proportional";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_integral";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "_params";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_integralPeriodSize";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_perSecondCumulativeLeak";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_noiseBarrier";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_feedbackOutputUpperBound";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_feedbackOutputLowerBound";
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
            readonly name: "_targetPrice";
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
            readonly name: "_redemptionRate";
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
            readonly name: "_redemptionRate";
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
            readonly name: "_piOutput";
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
            readonly name: "_proportionalGain";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_integralGain";
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
            readonly name: "_priceDeviationCumulative";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "_timeAdjustedDeviation";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getNextRedemptionRate";
        readonly inputs: readonly [{
            readonly name: "_marketPrice";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_targetPrice";
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
            readonly name: "_seedProposer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "timeSinceLastUpdate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_timeSinceLastValue";
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
        readonly name: "NotAuthorized";
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
    static createInterface(): IpidcontrollerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ipidcontroller;
}
