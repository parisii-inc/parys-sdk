/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IGlobalSettlementActions,
  IGlobalSettlementActionsInterface,
} from "../IGlobalSettlementActions";

const _abi = [
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
    name: "freeCollateral",
    inputs: [
      {
        name: "_manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_globalSettlement",
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
    ],
    outputs: [
      {
        name: "_collateralAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
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
    name: "prepareCoinsForRedeeming",
    inputs: [
      {
        name: "_globalSettlement",
        type: "address",
        internalType: "address",
      },
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_coinAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "redeemCollateral",
    inputs: [
      {
        name: "_globalSettlement",
        type: "address",
        internalType: "address",
      },
      {
        name: "_collateralJoin",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_collateralAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "error",
    name: "OnlyDelegateCalls",
    inputs: [],
  },
] as const;

export class IGlobalSettlementActions__factory {
  static readonly abi = _abi;
  static createInterface(): IGlobalSettlementActionsInterface {
    return new Interface(_abi) as IGlobalSettlementActionsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IGlobalSettlementActions {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IGlobalSettlementActions;
  }
}
