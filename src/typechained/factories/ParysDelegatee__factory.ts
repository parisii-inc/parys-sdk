/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ParysDelegatee,
  ParysDelegateeInterface,
} from "../ParysDelegatee";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "castVote",
    inputs: [
      {
        name: "_governor",
        type: "address",
        internalType: "contract IGovernor",
      },
      {
        name: "_proposalId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_support",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    outputs: [
      {
        name: "_weight",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "castVoteWithReason",
    inputs: [
      {
        name: "_governor",
        type: "address",
        internalType: "contract IGovernor",
      },
      {
        name: "_proposalId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_support",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "_reason",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "_weight",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "castVoteWithReasonAndParams",
    inputs: [
      {
        name: "_governor",
        type: "address",
        internalType: "contract IGovernor",
      },
      {
        name: "_proposalId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_support",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "_reason",
        type: "string",
        internalType: "string",
      },
      {
        name: "_params",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "_weight",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "delegatee",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setDelegatee",
    inputs: [
      {
        name: "_delegatee",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "DelegateeSet",
    inputs: [
      {
        name: "_delegatee",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "OnlyDelegatee",
    inputs: [],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
] as const;

export class ParysDelegatee__factory {
  static readonly abi = _abi;
  static createInterface(): ParysDelegateeInterface {
    return new utils.Interface(_abi) as ParysDelegateeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ParysDelegatee {
    return new Contract(address, _abi, signerOrProvider) as ParysDelegatee;
  }
}
