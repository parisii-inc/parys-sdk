/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPIDController,
  IPIDControllerInterface,
} from "../IPIDController";

const _abi = [
  {
    type: "function",
    name: "_controllerGains",
    inputs: [],
    outputs: [
      {
        name: "_kp",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_ki",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_influenceFactor",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_deviationObservation",
    inputs: [],
    outputs: [
      {
        name: "_timestamp",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_proportional",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_integral",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_params",
    inputs: [],
    outputs: [
      {
        name: "_integralPeriodSize",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_perSecondCumulativeLeak",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_noiseBarrier",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_feedbackOutputUpperBound",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_feedbackOutputLowerBound",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addAuthorization",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "authorizedAccounts",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_authorized",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "authorizedAccounts",
    inputs: [],
    outputs: [
      {
        name: "_accounts",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "breaksNoiseBarrier",
    inputs: [
      {
        name: "_piSum",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_targetPrice",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_breaksNb",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "computeRate",
    inputs: [
      {
        name: "_marketPrice",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_targetPrice",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_redemptionRate",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "controllerGains",
    inputs: [],
    outputs: [
      {
        name: "_cGains",
        type: "tuple",
        internalType: "struct IPIDController.ControllerGains",
        components: [
          {
            name: "kp",
            type: "int256",
            internalType: "int256",
          },
          {
            name: "ki",
            type: "int256",
            internalType: "int256",
          },
          {
            name: "influenceFactor",
            type: "int256",
            internalType: "int256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "deviationObservation",
    inputs: [],
    outputs: [
      {
        name: "__deviationObservation",
        type: "tuple",
        internalType: "struct IPIDController.DeviationObservation",
        components: [
          {
            name: "timestamp",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "proportional",
            type: "int256",
            internalType: "int256",
          },
          {
            name: "integral",
            type: "int256",
            internalType: "int256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBoundedRedemptionRate",
    inputs: [
      {
        name: "_piOutput",
        type: "int256",
        internalType: "int256",
      },
    ],
    outputs: [
      {
        name: "_redemptionRate",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getGainAdjustedPIOutput",
    inputs: [
      {
        name: "_proportionalTerm",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_integralTerm",
        type: "int256",
        internalType: "int256",
      },
    ],
    outputs: [
      {
        name: "_piOutput",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getGainAdjustedTerms",
    inputs: [
      {
        name: "_proportionalTerm",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_integralTerm",
        type: "int256",
        internalType: "int256",
      },
    ],
    outputs: [
      {
        name: "_proportionalGain",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_integralGain",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNextDeviationCumulative",
    inputs: [
      {
        name: "_proportionalTerm",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_accumulatedLeak",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_priceDeviationCumulative",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_timeAdjustedDeviation",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getNextRedemptionRate",
    inputs: [
      {
        name: "_marketPrice",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_targetPrice",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_accumulatedLeak",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_redemptionRate",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_proportionalTerm",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_integralTerm",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "modifyParameters",
    inputs: [
      {
        name: "_param",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "params",
    inputs: [],
    outputs: [
      {
        name: "_pidParams",
        type: "tuple",
        internalType: "struct IPIDController.PIDControllerParams",
        components: [
          {
            name: "integralPeriodSize",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "perSecondCumulativeLeak",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "noiseBarrier",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "feedbackOutputUpperBound",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "feedbackOutputLowerBound",
            type: "int256",
            internalType: "int256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removeAuthorization",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "seedProposer",
    inputs: [],
    outputs: [
      {
        name: "_seedProposer",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "timeSinceLastUpdate",
    inputs: [],
    outputs: [
      {
        name: "_timeSinceLastValue",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "AddAuthorization",
    inputs: [
      {
        name: "_account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModifyParameters",
    inputs: [
      {
        name: "_param",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "_cType",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "_data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RemoveAuthorization",
    inputs: [
      {
        name: "_account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UpdateDeviation",
    inputs: [
      {
        name: "_proportionalDeviation",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
      {
        name: "_integralDeviation",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
      {
        name: "_deltaIntegralDeviation",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AlreadyAuthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "NotAuthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "PIDController_CannotSetPriceDeviationCumulative",
    inputs: [],
  },
  {
    type: "error",
    name: "PIDController_ComputeRateCooldown",
    inputs: [],
  },
  {
    type: "error",
    name: "PIDController_OnlySeedProposer",
    inputs: [],
  },
  {
    type: "error",
    name: "Unauthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "UnrecognizedCType",
    inputs: [],
  },
  {
    type: "error",
    name: "UnrecognizedParam",
    inputs: [],
  },
] as const;

export class IPIDController__factory {
  static readonly abi = _abi;
  static createInterface(): IPIDControllerInterface {
    return new utils.Interface(_abi) as IPIDControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPIDController {
    return new Contract(address, _abi, signerOrProvider) as IPIDController;
  }
}
