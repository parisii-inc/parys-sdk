/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDebtBidActions,
  IDebtBidActionsInterface,
} from "../IDebtBidActions";

const _abi = [
  {
    type: "function",
    name: "collectProtocolTokens",
    inputs: [
      {
        name: "_protocolToken",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "decreaseSoldAmount",
    inputs: [
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_debtAuctionHouse",
        type: "address",
        internalType: "address",
      },
      {
        name: "_auctionId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_soldAmount",
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
    type: "function",
    name: "settleAuction",
    inputs: [
      {
        name: "_coinJoin",
        type: "address",
        internalType: "address",
      },
      {
        name: "_debtAuctionHouse",
        type: "address",
        internalType: "address",
      },
      {
        name: "_auctionId",
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

export class IDebtBidActions__factory {
  static readonly abi = _abi;
  static createInterface(): IDebtBidActionsInterface {
    return new utils.Interface(_abi) as IDebtBidActionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDebtBidActions {
    return new Contract(address, _abi, signerOrProvider) as IDebtBidActions;
  }
}
