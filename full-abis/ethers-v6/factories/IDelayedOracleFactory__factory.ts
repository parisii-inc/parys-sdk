/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDelayedOracleFactory,
  IDelayedOracleFactoryInterface,
} from "../IDelayedOracleFactory";

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
    name: "delayedOraclesList",
    inputs: [],
    outputs: [
      {
        name: "_delayedOraclesList",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "deployDelayedOracle",
    inputs: [
      {
        name: "_priceSource",
        type: "address",
        internalType: "contract IBaseOracle",
      },
      {
        name: "_updateDelay",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_delayedOracle",
        type: "address",
        internalType: "contract IDelayedOracle",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "NewDelayedOracle",
    inputs: [
      {
        name: "_delayedOracle",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_priceSource",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_updateDelay",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
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
    name: "Unauthorized",
    inputs: [],
  },
] as const;

export class IDelayedOracleFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IDelayedOracleFactoryInterface {
    return new Interface(_abi) as IDelayedOracleFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IDelayedOracleFactory {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IDelayedOracleFactory;
  }
}
