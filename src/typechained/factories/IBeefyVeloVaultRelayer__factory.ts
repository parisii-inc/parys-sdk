/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBeefyVeloVaultRelayer,
  IBeefyVeloVaultRelayerInterface,
} from "../IBeefyVeloVaultRelayer";

const _abi = [
  {
    type: "function",
    name: "beefyVault",
    inputs: [],
    outputs: [
      {
        name: "_beefyVault",
        type: "address",
        internalType: "contract IBeefyVaultV7",
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
    name: "token0priceSource",
    inputs: [],
    outputs: [
      {
        name: "_token0priceSource",
        type: "address",
        internalType: "contract IBaseOracle",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "token1priceSource",
    inputs: [],
    outputs: [
      {
        name: "_token1priceSource",
        type: "address",
        internalType: "contract IBaseOracle",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "veloPool",
    inputs: [],
    outputs: [
      {
        name: "_veloPool",
        type: "address",
        internalType: "contract IVeloPool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "error",
    name: "BeefyVeloVaultRelayer_InvalidPriceSource",
    inputs: [],
  },
  {
    type: "error",
    name: "BeefyVeloVaultRelayer_NullBeefyVault",
    inputs: [],
  },
  {
    type: "error",
    name: "BeefyVeloVaultRelayer_NullPriceSource",
    inputs: [],
  },
  {
    type: "error",
    name: "BeefyVeloVaultRelayer_NullVeloPool",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPriceFeed",
    inputs: [],
  },
] as const;

export class IBeefyVeloVaultRelayer__factory {
  static readonly abi = _abi;
  static createInterface(): IBeefyVeloVaultRelayerInterface {
    return new utils.Interface(_abi) as IBeefyVeloVaultRelayerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBeefyVeloVaultRelayer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IBeefyVeloVaultRelayer;
  }
}
