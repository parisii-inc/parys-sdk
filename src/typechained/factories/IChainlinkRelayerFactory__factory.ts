/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IChainlinkRelayerFactory,
  IChainlinkRelayerFactoryInterface,
} from "../IChainlinkRelayerFactory";

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
    name: "chainlinkRelayersList",
    inputs: [],
    outputs: [
      {
        name: "_chainlinkRelayersList",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "deployChainlinkRelayer",
    inputs: [
      {
        name: "_priceFeed",
        type: "address",
        internalType: "address",
      },
      {
        name: "_staleThreshold",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_chainlinkRelayer",
        type: "address",
        internalType: "contract IBaseOracle",
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
    type: "function",
    name: "sequencerUptimeFeed",
    inputs: [],
    outputs: [
      {
        name: "_sequencerUptimeFeed",
        type: "address",
        internalType: "contract IChainlinkOracle",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setSequencerUptimeFeed",
    inputs: [
      {
        name: "_sequencerUptimeFeed",
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
    name: "NewChainlinkRelayer",
    inputs: [
      {
        name: "_chainlinkRelayer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_priceFeed",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_sequencerUptimeFeed",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_staleThreshold",
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
    name: "ChainlinkRelayerFactory_NullSequencerUptimeFeed",
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

export class IChainlinkRelayerFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IChainlinkRelayerFactoryInterface {
    return new utils.Interface(_abi) as IChainlinkRelayerFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IChainlinkRelayerFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IChainlinkRelayerFactory;
  }
}
