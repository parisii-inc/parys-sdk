/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IYearnVault, IYearnVaultInterface } from "../IYearnVault";

const _abi = [
  {
    type: "function",
    name: "pricePerShare",
    inputs: [],
    outputs: [
      {
        name: "_pricePerShare",
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
] as const;

export class IYearnVault__factory {
  static readonly abi = _abi;
  static createInterface(): IYearnVaultInterface {
    return new utils.Interface(_abi) as IYearnVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IYearnVault {
    return new Contract(address, _abi, signerOrProvider) as IYearnVault;
  }
}
