/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOracleJob, IOracleJobInterface } from "../IOracleJob";

const _abi = [
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
        name: "_oracleRelayer",
        type: "address",
        internalType: "contract IOracleRelayer",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pidRateSetter",
    inputs: [],
    outputs: [
      {
        name: "_pidRateSetter",
        type: "address",
        internalType: "contract IPIDRateSetter",
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
    name: "rewardAmount",
    inputs: [],
    outputs: [
      {
        name: "_rewardAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "shouldWorkUpdateCollateralPrice",
    inputs: [],
    outputs: [
      {
        name: "_shouldWorkUpdateCollateralPrice",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "shouldWorkUpdateRate",
    inputs: [],
    outputs: [
      {
        name: "_shouldWorkUpdateRate",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "stabilityFeeTreasury",
    inputs: [],
    outputs: [
      {
        name: "_stabilityFeeTreasury",
        type: "address",
        internalType: "contract IStabilityFeeTreasury",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "workUpdateCollateralPrice",
    inputs: [
      {
        name: "_cType",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "workUpdateRate",
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
    name: "Rewarded",
    inputs: [
      {
        name: "_rewardedAccount",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_rewardAmount",
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
    name: "NotAuthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "NotWorkable",
    inputs: [],
  },
  {
    type: "error",
    name: "OracleJob_InvalidPrice",
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

export class IOracleJob__factory {
  static readonly abi = _abi;
  static createInterface(): IOracleJobInterface {
    return new utils.Interface(_abi) as IOracleJobInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOracleJob {
    return new Contract(address, _abi, signerOrProvider) as IOracleJob;
  }
}
