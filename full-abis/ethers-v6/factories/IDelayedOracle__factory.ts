/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDelayedOracle,
  IDelayedOracleInterface,
} from "../IDelayedOracle";

const _abi = [
  {
    type: "function",
    name: "getNextResultWithValidity",
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
        name: "_newMedian",
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
] as const;

export class IDelayedOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IDelayedOracleInterface {
    return new Interface(_abi) as IDelayedOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IDelayedOracle {
    return new Contract(address, _abi, runner) as unknown as IDelayedOracle;
  }
}
