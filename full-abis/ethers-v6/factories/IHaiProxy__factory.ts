/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IHaiProxy, IHaiProxyInterface } from "../IHaiProxy";

const _abi = [
  {
    type: "function",
    name: "acceptOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      {
        name: "_target",
        type: "address",
        internalType: "address",
      },
      {
        name: "_data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "_response",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingOwner",
    inputs: [],
    outputs: [
      {
        name: "_pendingOwner",
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
    name: "transferOwnership",
    inputs: [
      {
        name: "_newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "TargetAddressRequired",
    inputs: [],
  },
] as const;

export class IHaiProxy__factory {
  static readonly abi = _abi;
  static createInterface(): IHaiProxyInterface {
    return new Interface(_abi) as IHaiProxyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IHaiProxy {
    return new Contract(address, _abi, runner) as unknown as IHaiProxy;
  }
}
