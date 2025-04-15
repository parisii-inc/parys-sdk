/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAccountingEngine,
  IAccountingEngineInterface,
} from "../IAccountingEngine";

const _abi = [
  {
    type: "function",
    name: "_params",
    inputs: [],
    outputs: [
      {
        name: "_surplusIsTransferred",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_surplusDelay",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_popDebtDelay",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_disableCooldown",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_surplusAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_surplusBuffer",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_debtAuctionMintedTokens",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_debtAuctionBidSize",
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
    name: "auctionDebt",
    inputs: [],
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
    name: "auctionSurplus",
    inputs: [],
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
    name: "cancelAuctionedDebtWithSurplus",
    inputs: [
      {
        name: "_rad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "debtAuctionHouse",
    inputs: [],
    outputs: [
      {
        name: "_debtAuctionHouse",
        type: "address",
        internalType: "contract IDebtAuctionHouse",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "debtQueue",
    inputs: [
      {
        name: "_blockTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_debtBlock",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "disableTimestamp",
    inputs: [],
    outputs: [
      {
        name: "_disableTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "extraSurplusReceiver",
    inputs: [],
    outputs: [
      {
        name: "_extraSurplusReceiver",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lastSurplusTime",
    inputs: [],
    outputs: [
      {
        name: "_lastSurplusTime",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
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
        name: "_params",
        type: "tuple",
        internalType: "struct IAccountingEngine.AccountingEngineParams",
        components: [
          {
            name: "surplusIsTransferred",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "surplusDelay",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "popDebtDelay",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "disableCooldown",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "surplusAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "surplusBuffer",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "debtAuctionMintedTokens",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "debtAuctionBidSize",
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
    name: "popDebtFromQueue",
    inputs: [
      {
        name: "_debtBlockTimestamp",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "postSettlementSurplusDrain",
    inputs: [],
    outputs: [
      {
        name: "_postSettlementSurplusDrain",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pushDebtToQueue",
    inputs: [
      {
        name: "_debtBlock",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "settleDebt",
    inputs: [
      {
        name: "_rad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "surplusAuctionHouse",
    inputs: [],
    outputs: [
      {
        name: "_surplusAuctionHouse",
        type: "address",
        internalType: "contract ISurplusAuctionHouse",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalOnAuctionDebt",
    inputs: [],
    outputs: [
      {
        name: "_totalOnAuctionDebt",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalQueuedDebt",
    inputs: [],
    outputs: [
      {
        name: "_totalQueuedDebt",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferExtraSurplus",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferPostSettlementSurplus",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unqueuedUnauctionedDebt",
    inputs: [],
    outputs: [
      {
        name: "_unqueuedUnauctionedDebt",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "AuctionDebt",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_initialBid",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_debtAuctioned",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AuctionSurplus",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_initialBid",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_surplusAuctioned",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CancelDebt",
    inputs: [
      {
        name: "_rad",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_coinBalance",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_debtBalance",
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
    name: "PopDebtFromQueue",
    inputs: [
      {
        name: "_timestamp",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_debtAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PushDebtToQueue",
    inputs: [
      {
        name: "_timestamp",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_debtAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
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
    name: "SettleDebt",
    inputs: [
      {
        name: "_rad",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_coinBalance",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_debtBalance",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TransferSurplus",
    inputs: [
      {
        name: "_extraSurplusReceiver",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_surplusTransferred",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AccEng_DebtAuctionDisabled",
    inputs: [],
  },
  {
    type: "error",
    name: "AccEng_InsufficientDebt",
    inputs: [],
  },
  {
    type: "error",
    name: "AccEng_InsufficientSurplus",
    inputs: [],
  },
  {
    type: "error",
    name: "AccEng_NullAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "AccEng_NullSurplusReceiver",
    inputs: [],
  },
  {
    type: "error",
    name: "AccEng_PopDebtCooldown",
    inputs: [],
  },
  {
    type: "error",
    name: "AccEng_PostSettlementCooldown",
    inputs: [],
  },
  {
    type: "error",
    name: "AccEng_SurplusAuctionDisabled",
    inputs: [],
  },
  {
    type: "error",
    name: "AccEng_SurplusCooldown",
    inputs: [],
  },
  {
    type: "error",
    name: "AccEng_SurplusTransferDisabled",
    inputs: [],
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

export class IAccountingEngine__factory {
  static readonly abi = _abi;
  static createInterface(): IAccountingEngineInterface {
    return new utils.Interface(_abi) as IAccountingEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAccountingEngine {
    return new Contract(address, _abi, signerOrProvider) as IAccountingEngine;
  }
}
