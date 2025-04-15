/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  PIDRateSetter,
  PIDRateSetterInterface,
  IPIDRateSetter,
} from "../PIDRateSetter";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_oracleRelayer",
        type: "address",
        internalType: "address",
      },
      {
        name: "_pidCalculator",
        type: "address",
        internalType: "address",
      },
      {
        name: "_pidRateSetterParams",
        type: "tuple",
        internalType: "struct IPIDRateSetter.PIDRateSetterParams",
        components: [
          {
            name: "updateRateDelay",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_params",
    inputs: [],
    outputs: [
      {
        name: "updateRateDelay",
        type: "uint256",
        internalType: "uint256",
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
    name: "lastUpdateTime",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
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
    name: "oracleRelayer",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IOracleRelayer",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "params",
    inputs: [],
    outputs: [
      {
        name: "_pidRateSetterParams",
        type: "tuple",
        internalType: "struct IPIDRateSetter.PIDRateSetterParams",
        components: [
          {
            name: "updateRateDelay",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pidCalculator",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IPIDController",
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
    name: "updateRate",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "UpdateRedemptionRate",
    inputs: [
      {
        name: "_marketPrice",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_redemptionPrice",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_redemptionRate",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
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
    name: "NoCode",
    inputs: [
      {
        name: "_contract",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "NotAuthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "NotGreaterThan",
    inputs: [
      {
        name: "_x",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_y",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "PIDRateSetter_InvalidPriceFeed",
    inputs: [],
  },
  {
    type: "error",
    name: "PIDRateSetter_RateSetterCooldown",
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

export class PIDRateSetter__factory {
  static readonly abi = _abi;
  static createInterface(): PIDRateSetterInterface {
    return new utils.Interface(_abi) as PIDRateSetterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PIDRateSetter {
    return new Contract(address, _abi, signerOrProvider) as PIDRateSetter;
  }
}
