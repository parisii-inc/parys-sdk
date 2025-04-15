/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDelayedOracleChild,
  IDelayedOracleChildInterface,
} from "../IDelayedOracleChild";

const _abi = [
  {
    type: "function",
    name: "factory",
    inputs: [],
    outputs: [
      {
        name: "_factory",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNextResultWithValidity",
    inputs: [],
    outputs: [
      {
        name: "_nextResult",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_validity",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getResultWithValidity",
    inputs: [],
    outputs: [
      {
        name: "_result",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_validity",
        type: "bool",
        internalType: "bool",
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
        name: "_lastUpdateTime",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "priceSource",
    inputs: [],
    outputs: [
      {
        name: "_priceSource",
        type: "address",
        internalType: "contract IBaseOracle",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "read",
    inputs: [],
    outputs: [
      {
        name: "_value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "shouldUpdate",
    inputs: [],
    outputs: [
      {
        name: "_ok",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "_symbol",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateDelay",
    inputs: [],
    outputs: [
      {
        name: "_updateDelay",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateResult",
    inputs: [],
    outputs: [
      {
        name: "_success",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "UpdateResult",
    inputs: [
      {
        name: "_currentFeedValue",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_lastUpdateTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "CallerNotFactory",
    inputs: [],
  },
  {
    type: "error",
    name: "DelayedOracle_DelayHasNotElapsed",
    inputs: [],
  },
  {
    type: "error",
    name: "DelayedOracle_NoCurrentValue",
    inputs: [],
  },
  {
    type: "error",
    name: "DelayedOracle_NullDelay",
    inputs: [],
  },
  {
    type: "error",
    name: "DelayedOracle_NullPriceSource",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPriceFeed",
    inputs: [],
  },
  {
    type: "error",
    name: "NotFactoryDeployment",
    inputs: [],
  },
] as const;

export class IDelayedOracleChild__factory {
  static readonly abi = _abi;
  static createInterface(): IDelayedOracleChildInterface {
    return new utils.Interface(_abi) as IDelayedOracleChildInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDelayedOracleChild {
    return new Contract(address, _abi, signerOrProvider) as IDelayedOracleChild;
  }
}
