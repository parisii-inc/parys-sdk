/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IBasicActions, IBasicActionsInterface } from "../IBasicActions";

const _abi = [
  {
    type: "function",
    name: "collectTokenCollateral",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_collateralJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_safeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deltaWad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "exitAllSystemCoins",
    inputs: [
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "exitCollateral",
    inputs: [
      {
        name: "_collateralJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_wad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "exitSystemCoins",
    inputs: [
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_coinsToExit",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "freeTokenCollateral",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_collateralJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_safeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deltaWad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "generateDebt",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_taxCollector",
        type: "address",
        internalType: "address",
      },
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_safeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deltaWad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "joinSystemCoins",
    inputs: [
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_dst",
        type: "address",
        internalType: "address",
      },
      {
        name: "_wad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "lockTokenCollateral",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_collateralJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_safeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deltaWad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "lockTokenCollateralAndGenerateDebt",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_taxCollector",
        type: "address",
        internalType: "address",
      },
      {
        name: "_collateralJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_collateralAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deltaWad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "openLockTokenCollateralAndGenerateDebt",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_taxCollector",
        type: "address",
        internalType: "address",
      },
      {
        name: "_collateralJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_cType",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_collateralAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deltaWad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "openSAFE",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_cType",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_usr",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_safeId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "repayAllDebt",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_taxCollector",
        type: "address",
        internalType: "address",
      },
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_safeId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "repayAllDebtAndFreeTokenCollateral",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_taxCollector",
        type: "address",
        internalType: "address",
      },
      {
        name: "_collateralJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_safeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_collateralWad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "repayDebt",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_taxCollector",
        type: "address",
        internalType: "address",
      },
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_safeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deltaWad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "repayDebtAndFreeTokenCollateral",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_taxCollector",
        type: "address",
        internalType: "address",
      },
      {
        name: "_collateralJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_safeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_collateralWad",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_debtWad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "OnlyDelegateCalls",
    inputs: [],
  },
] as const;

export class IBasicActions__factory {
  static readonly abi = _abi;
  static createInterface(): IBasicActionsInterface {
    return new Interface(_abi) as IBasicActionsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IBasicActions {
    return new Contract(address, _abi, runner) as unknown as IBasicActions;
  }
}
