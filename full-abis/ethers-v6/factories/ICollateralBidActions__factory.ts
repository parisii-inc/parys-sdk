/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICollateralBidActions,
  ICollateralBidActionsInterface,
} from "../ICollateralBidActions";

const _abi = [
  {
    type: "function",
    name: "buyCollateral",
    inputs: [
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_collateralJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_collateralAuctionHouse",
        type: "address",
        internalType: "address",
      },
      {
        name: "_auctionId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_minCollateralAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_bidAmount",
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
    type: "error",
    name: "ColActions_InsufficientCollateralReceived",
    inputs: [
      {
        name: "_minCollateralAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_received",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "ColActions_InvalidAdjustedBid",
    inputs: [],
  },
  {
    type: "error",
    name: "OnlyDelegateCalls",
    inputs: [],
  },
] as const;

export class ICollateralBidActions__factory {
  static readonly abi = _abi;
  static createInterface(): ICollateralBidActionsInterface {
    return new Interface(_abi) as ICollateralBidActionsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICollateralBidActions {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ICollateralBidActions;
  }
}
