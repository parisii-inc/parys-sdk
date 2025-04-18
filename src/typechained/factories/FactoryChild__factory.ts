/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { FactoryChild, FactoryChildInterface } from "../FactoryChild";

const _abi = [
  {
    type: "function",
    name: "factory",
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
    type: "error",
    name: "CallerNotFactory",
    inputs: [],
  },
  {
    type: "error",
    name: "NotFactoryDeployment",
    inputs: [],
  },
] as const;

export class FactoryChild__factory {
  static readonly abi = _abi;
  static createInterface(): FactoryChildInterface {
    return new utils.Interface(_abi) as FactoryChildInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FactoryChild {
    return new Contract(address, _abi, signerOrProvider) as FactoryChild;
  }
}
