/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAbstractVeloVaultRelayer,
  IAbstractVeloVaultRelayerInterface,
} from "../IAbstractVeloVaultRelayer";

const _abi = [
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
    name: "veloLpOracle",
    inputs: [],
    outputs: [
      {
        name: "_veloPool",
        type: "address",
        internalType: "contract IPessimisticVeloLpOracle",
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
    name: "AbstractVeloVaultRelayer_NullVeloLpOracle",
    inputs: [],
  },
  {
    type: "error",
    name: "AbstractVeloVaultRelayer_NullVeloPool",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidPriceFeed",
    inputs: [],
  },
] as const;

export class IAbstractVeloVaultRelayer__factory {
  static readonly abi = _abi;
  static createInterface(): IAbstractVeloVaultRelayerInterface {
    return new utils.Interface(_abi) as IAbstractVeloVaultRelayerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAbstractVeloVaultRelayer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAbstractVeloVaultRelayer;
  }
}
