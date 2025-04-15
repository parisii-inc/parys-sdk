/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDebtAuctionHouse,
  IDebtAuctionHouseInterface,
} from "../IDebtAuctionHouse";

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
    name: "_params",
    inputs: [],
    outputs: [
      {
        name: "_bidDecrease",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_amountSoldIncrease",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_bidDuration",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_totalAuctionLength",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "accountingEngine",
    inputs: [],
    outputs: [
      {
        name: "_accountingEngine",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "activeDebtAuctions",
    inputs: [],
    outputs: [
      {
        name: "_activeDebtAuctions",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "addAuthorization",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "struct IDebtAuctionHouse.Auction",
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
    name: "authorizedAccounts",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_authorized",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "authorizedAccounts",
    inputs: [],
    outputs: [
      {
        name: "_accounts",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "contractEnabled",
    inputs: [],
    outputs: [
      {
        name: "_contractEnabled",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decreaseSoldAmount",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_amountToBuy",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "disableContract",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "modifyParameters",
    inputs: [
      {
        name: "_param",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "params",
    inputs: [],
    outputs: [
      {
        name: "_dahParams",
        type: "tuple",
        internalType: "struct IDebtAuctionHouse.DebtAuctionHouseParams",
        components: [
          {
            name: "bidDecrease",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "amountSoldIncrease",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "bidDuration",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "totalAuctionLength",
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
    name: "removeAuthorization",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_incomeReceiver",
        type: "address",
        internalType: "address",
      },
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
    type: "function",
    name: "terminateAuctionPrematurely",
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
    type: "event",
    name: "AddAuthorization",
    inputs: [
      {
        name: "_account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "DecreaseSoldAmount",
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
    name: "DisableContract",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModifyParameters",
    inputs: [
      {
        name: "_param",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "_cType",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "_data",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "RemoveAuthorization",
    inputs: [
      {
        name: "_account",
        type: "address",
        indexed: false,
        internalType: "address",
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
    type: "event",
    name: "TerminateAuctionPrematurely",
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
    type: "error",
    name: "AlreadyAuthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "ContractIsDisabled",
    inputs: [],
  },
  {
    type: "error",
    name: "ContractIsEnabled",
    inputs: [],
  },
  {
    type: "error",
    name: "DAH_AmountBoughtNotLower",
    inputs: [],
  },
  {
    type: "error",
    name: "DAH_AuctionAlreadyExpired",
    inputs: [],
  },
  {
    type: "error",
    name: "DAH_AuctionNeverStarted",
    inputs: [],
  },
  {
    type: "error",
    name: "DAH_AuctionNotFinished",
    inputs: [],
  },
  {
    type: "error",
    name: "DAH_BidAlreadyExpired",
    inputs: [],
  },
  {
    type: "error",
    name: "DAH_BidAlreadyPlaced",
    inputs: [],
  },
  {
    type: "error",
    name: "DAH_HighBidderNotSet",
    inputs: [],
  },
  {
    type: "error",
    name: "DAH_InsufficientDecrease",
    inputs: [],
  },
  {
    type: "error",
    name: "DAH_NotMatchingBid",
    inputs: [],
  },
  {
    type: "error",
    name: "NonDisableable",
    inputs: [],
  },
  {
    type: "error",
    name: "NotAuthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "Unauthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "UnrecognizedCType",
    inputs: [],
  },
  {
    type: "error",
    name: "UnrecognizedParam",
    inputs: [],
  },
] as const;

export class IDebtAuctionHouse__factory {
  static readonly abi = _abi;
  static createInterface(): IDebtAuctionHouseInterface {
    return new utils.Interface(_abi) as IDebtAuctionHouseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDebtAuctionHouse {
    return new Contract(address, _abi, signerOrProvider) as IDebtAuctionHouse;
  }
}
