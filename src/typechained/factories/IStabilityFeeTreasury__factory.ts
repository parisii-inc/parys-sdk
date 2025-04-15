/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IStabilityFeeTreasury,
  IStabilityFeeTreasuryInterface,
} from "../IStabilityFeeTreasury";

const _abi = [
  {
    type: "function",
    name: "_allowance",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_total",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_perHour",
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
        name: "_treasuryCapacity",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_pullFundsMinThreshold",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_surplusTransferDelay",
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
    name: "allowance",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "__allowance",
        type: "tuple",
        internalType: "struct IStabilityFeeTreasury.Allowance",
        components: [
          {
            name: "total",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "perHour",
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
    name: "coinJoin",
    inputs: [],
    outputs: [
      {
        name: "_coinJoin",
        type: "address",
        internalType: "contract ICoinJoin",
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
    name: "disableContract",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "giveFunds",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
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
    name: "latestSurplusTransferTime",
    inputs: [],
    outputs: [
      {
        name: "_latestSurplusTransferTime",
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
        name: "_sfTreasuryParams",
        type: "tuple",
        internalType: "struct IStabilityFeeTreasury.StabilityFeeTreasuryParams",
        components: [
          {
            name: "treasuryCapacity",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "pullFundsMinThreshold",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "surplusTransferDelay",
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
    name: "pullFunds",
    inputs: [
      {
        name: "_dstAccount",
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
    name: "pulledPerHour",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
      {
        name: "_blockHour",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_pulledPerHour",
        type: "uint256",
        internalType: "uint256",
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
    name: "setPerHourAllowance",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
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
    name: "setTotalAllowance",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
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
    name: "settleDebt",
    inputs: [],
    outputs: [
      {
        name: "_coinBalance",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_debtBalance",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "systemCoin",
    inputs: [],
    outputs: [
      {
        name: "_systemCoin",
        type: "address",
        internalType: "contract ISystemCoin",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "takeFunds",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
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
    name: "transferSurplusFunds",
    inputs: [],
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
    name: "DisableContract",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "GiveFunds",
    inputs: [
      {
        name: "_account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_rad",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "JoinCoins",
    inputs: [
      {
        name: "_wad",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
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
    name: "PullFunds",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_dstAccount",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_rad",
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
    name: "SetPerHourAllowance",
    inputs: [
      {
        name: "_account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_rad",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetTotalAllowance",
    inputs: [
      {
        name: "_account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_rad",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
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
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TakeFunds",
    inputs: [
      {
        name: "_account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_rad",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TransferSurplusFunds",
    inputs: [
      {
        name: "_extraSurplusReceiver",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_fundsToTransfer",
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
    name: "SFTreasury_AccountCannotBeTreasury",
    inputs: [],
  },
  {
    type: "error",
    name: "SFTreasury_BelowPullFundsMinThreshold",
    inputs: [],
  },
  {
    type: "error",
    name: "SFTreasury_DstCannotBeAccounting",
    inputs: [],
  },
  {
    type: "error",
    name: "SFTreasury_NotAllowed",
    inputs: [],
  },
  {
    type: "error",
    name: "SFTreasury_NotEnoughFunds",
    inputs: [],
  },
  {
    type: "error",
    name: "SFTreasury_NotEnoughSurplus",
    inputs: [],
  },
  {
    type: "error",
    name: "SFTreasury_NullTransferAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "SFTreasury_OutstandingBadDebt",
    inputs: [],
  },
  {
    type: "error",
    name: "SFTreasury_PerHourLimitExceeded",
    inputs: [],
  },
  {
    type: "error",
    name: "SFTreasury_TransferCooldownNotPassed",
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

export class IStabilityFeeTreasury__factory {
  static readonly abi = _abi;
  static createInterface(): IStabilityFeeTreasuryInterface {
    return new utils.Interface(_abi) as IStabilityFeeTreasuryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStabilityFeeTreasury {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IStabilityFeeTreasury;
  }
}
