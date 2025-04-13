/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRewardedActions,
  IRewardedActionsInterface,
} from "../IRewardedActions";

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
    name: "liquidateSAFE",
    inputs: [
      {
        name: "_liquidationJob",
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
        name: "_safe",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "popDebtFromQueue",
    inputs: [
      {
        name: "_accountingJob",
        type: "address",
        internalType: "address",
      },
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_debtTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "startDebtAuction",
    inputs: [
      {
        name: "_accountingJob",
        type: "address",
        internalType: "address",
      },
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
    name: "startSurplusAuction",
    inputs: [
      {
        name: "_accountingJob",
        type: "address",
        internalType: "address",
      },
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
    name: "transferExtraSurplus",
    inputs: [
      {
        name: "_accountingJob",
        type: "address",
        internalType: "address",
      },
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
    name: "updateCollateralPrice",
    inputs: [
      {
        name: "_oracleJob",
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
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateRedemptionRate",
    inputs: [
      {
        name: "_oracleJob",
        type: "address",
        internalType: "address",
      },
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
    type: "error",
    name: "OnlyDelegateCalls",
    inputs: [],
  },
] as const;

export class IRewardedActions__factory {
  static readonly abi = _abi;
  static createInterface(): IRewardedActionsInterface {
    return new Interface(_abi) as IRewardedActionsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IRewardedActions {
    return new Contract(address, _abi, runner) as unknown as IRewardedActions;
  }
}
