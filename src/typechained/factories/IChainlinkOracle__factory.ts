/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IChainlinkOracle,
  IChainlinkOracleInterface,
} from "../IChainlinkOracle";

const _abi = [
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "_decimals",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "description",
    inputs: [],
    outputs: [
      {
        name: "_description",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAnswer",
    inputs: [
      {
        name: "_roundId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_answer",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoundData",
    inputs: [
      {
        name: "__roundId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_roundId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_answer",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_startedAt",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_updatedAt",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_answeredInRound",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTimestamp",
    inputs: [
      {
        name: "_roundId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_timestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "latestAnswer",
    inputs: [],
    outputs: [
      {
        name: "_latestAnswer",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "latestRound",
    inputs: [],
    outputs: [
      {
        name: "_latestRound",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "latestRoundData",
    inputs: [],
    outputs: [
      {
        name: "_roundId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_answer",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_startedAt",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_updatedAt",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_answeredInRound",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "latestTimestamp",
    inputs: [],
    outputs: [
      {
        name: "_latestTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class IChainlinkOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IChainlinkOracleInterface {
    return new utils.Interface(_abi) as IChainlinkOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IChainlinkOracle {
    return new Contract(address, _abi, signerOrProvider) as IChainlinkOracle;
  }
}
