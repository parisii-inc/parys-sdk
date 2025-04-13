/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICommonSurplusAuctionHouse,
  ICommonSurplusAuctionHouseInterface,
} from "../ICommonSurplusAuctionHouse";

const _abi = [
  {
    type: "function",
    name: "AUCTION_HOUSE_TYPE",
    inputs: [],
    outputs: [
      {
        name: "_auctionHouseType",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_auctions",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_bidAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_amountToSell",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_highBidder",
        type: "address",
        internalType: "address",
      },
      {
        name: "_bidExpiry",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_auctionDeadline",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "auctions",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_auction",
        type: "tuple",
        internalType: "struct ICommonSurplusAuctionHouse.Auction",
        components: [
          {
            name: "bidAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amountToSell",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "highBidder",
            type: "address",
            internalType: "address",
          },
          {
            name: "bidExpiry",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "auctionDeadline",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "auctionsStarted",
    inputs: [],
    outputs: [
      {
        name: "_auctionsStarted",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "increaseBidSize",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_bid",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "protocolToken",
    inputs: [],
    outputs: [
      {
        name: "_protocolToken",
        type: "address",
        internalType: "contract IProtocolToken",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "restartAuction",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeEngine",
    inputs: [],
    outputs: [
      {
        name: "_safeEngine",
        type: "address",
        internalType: "contract ISAFEEngine",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "settleAuction",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "startAuction",
    inputs: [
      {
        name: "_amountToSell",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_initialBid",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "IncreaseBidSize",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_bidder",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_blockTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_raisedAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_soldAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_bidExpiry",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RestartAuction",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_blockTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_auctionDeadline",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SettleAuction",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_blockTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_highBidder",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_raisedAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StartAuction",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_auctioneer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_blockTimestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_amountToSell",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_amountToRaise",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_auctionDeadline",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "SAH_AmountsNotMatching",
    inputs: [],
  },
  {
    type: "error",
    name: "SAH_AuctionAlreadyExpired",
    inputs: [],
  },
  {
    type: "error",
    name: "SAH_AuctionNeverStarted",
    inputs: [],
  },
  {
    type: "error",
    name: "SAH_AuctionNotFinished",
    inputs: [],
  },
  {
    type: "error",
    name: "SAH_BidAlreadyExpired",
    inputs: [],
  },
  {
    type: "error",
    name: "SAH_BidAlreadyPlaced",
    inputs: [],
  },
  {
    type: "error",
    name: "SAH_BidNotHigher",
    inputs: [],
  },
  {
    type: "error",
    name: "SAH_HighBidderNotSet",
    inputs: [],
  },
  {
    type: "error",
    name: "SAH_InsufficientIncrease",
    inputs: [],
  },
] as const;

export class ICommonSurplusAuctionHouse__factory {
  static readonly abi = _abi;
  static createInterface(): ICommonSurplusAuctionHouseInterface {
    return new Interface(_abi) as ICommonSurplusAuctionHouseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICommonSurplusAuctionHouse {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ICommonSurplusAuctionHouse;
  }
}
