/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MockChainlinkFeed,
  MockChainlinkFeedInterface,
} from "../MockChainlinkFeed";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_desc",
        type: "string",
        internalType: "string",
      },
      {
        name: "_initialAnswer",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_initialDecimals",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "_decimalsResult",
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
        name: "_desc",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoundData",
    inputs: [
      {
        name: "_roundId",
        type: "uint80",
        internalType: "uint80",
      },
    ],
    outputs: [
      {
        name: "_roundIdResult",
        type: "uint80",
        internalType: "uint80",
      },
      {
        name: "_answerResult",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_startedAtResult",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_updatedAtResult",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_answeredInRoundResult",
        type: "uint80",
        internalType: "uint80",
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
        name: "_roundIdResult",
        type: "uint80",
        internalType: "uint80",
      },
      {
        name: "_answerResult",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_startedAtResult",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_updatedAtResult",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_answeredInRoundResult",
        type: "uint80",
        internalType: "uint80",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setPrice",
    inputs: [
      {
        name: "_price",
        type: "int256",
        internalType: "int256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "version",
    inputs: [],
    outputs: [
      {
        name: "_version",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
] as const;

export class MockChainlinkFeed__factory {
  static readonly abi = _abi;
  static createInterface(): MockChainlinkFeedInterface {
    return new utils.Interface(_abi) as MockChainlinkFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockChainlinkFeed {
    return new Contract(address, _abi, signerOrProvider) as MockChainlinkFeed;
  }
}
