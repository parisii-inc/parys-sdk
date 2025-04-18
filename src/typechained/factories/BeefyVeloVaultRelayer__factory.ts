/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  BeefyVeloVaultRelayer,
  BeefyVeloVaultRelayerInterface,
} from "../BeefyVeloVaultRelayer";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_token0priceSource",
        type: "address",
        internalType: "contract IBaseOracle",
      },
      {
        name: "_token1priceSource",
        type: "address",
        internalType: "contract IBaseOracle",
      },
      {
        name: "_beefyVault",
        type: "address",
        internalType: "contract IBeefyVaultV7",
      },
      {
        name: "_veloPool",
        type: "address",
        internalType: "contract IVeloPool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "beefyVault",
    inputs: [],
    outputs: [
      {
        name: "",
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
        name: "_result",
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
        name: "",
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
        name: "",
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
        name: "",
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
        name: "",
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

export class BeefyVeloVaultRelayer__factory {
  static readonly abi = _abi;
  static createInterface(): BeefyVeloVaultRelayerInterface {
    return new utils.Interface(_abi) as BeefyVeloVaultRelayerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BeefyVeloVaultRelayer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BeefyVeloVaultRelayer;
  }
}
