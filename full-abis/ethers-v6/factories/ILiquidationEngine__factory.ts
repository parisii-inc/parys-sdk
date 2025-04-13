/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ILiquidationEngine,
  ILiquidationEngineInterface,
} from "../ILiquidationEngine";

const _abi = [
  {
    type: "function",
    name: "_cParams",
    inputs: [
      {
        name: "_cType",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "_collateralAuctionHouse",
        type: "address",
        internalType: "address",
      },
      {
        name: "_liquidationPenalty",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_liquidationQuantity",
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
        name: "_onAuctionSystemCoinLimit",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_saviourGasLimit",
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
        internalType: "contract IAccountingEngine",
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
    name: "cParams",
    inputs: [
      {
        name: "_cType",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "_liqEngineCParams",
        type: "tuple",
        internalType:
          "struct ILiquidationEngine.LiquidationEngineCollateralParams",
        components: [
          {
            name: "collateralAuctionHouse",
            type: "address",
            internalType: "address",
          },
          {
            name: "liquidationPenalty",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "liquidationQuantity",
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
    name: "chosenSAFESaviour",
    inputs: [
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
    outputs: [
      {
        name: "_saviour",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "collateralList",
    inputs: [],
    outputs: [
      {
        name: "__collateralList",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "connectSAFESaviour",
    inputs: [
      {
        name: "_saviour",
        type: "address",
        internalType: "address",
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
    name: "currentOnAuctionSystemCoins",
    inputs: [],
    outputs: [
      {
        name: "_currentOnAuctionSystemCoins",
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
    name: "disconnectSAFESaviour",
    inputs: [
      {
        name: "_saviour",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getLimitAdjustedDebtToCover",
    inputs: [
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
    outputs: [
      {
        name: "_wad",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initializeCollateralType",
    inputs: [
      {
        name: "_cType",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_collateralParams",
        type: "bytes",
        internalType: "bytes",
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
    outputs: [
      {
        name: "_auctionId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "modifyParameters",
    inputs: [
      {
        name: "_cType",
        type: "bytes32",
        internalType: "bytes32",
      },
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
        name: "_liqEngineParams",
        type: "tuple",
        internalType: "struct ILiquidationEngine.LiquidationEngineParams",
        components: [
          {
            name: "onAuctionSystemCoinLimit",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "saviourGasLimit",
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
    name: "protectSAFE",
    inputs: [
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
      {
        name: "_saviour",
        type: "address",
        internalType: "address",
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
    name: "removeCoinsFromAuction",
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
    name: "safeSaviours",
    inputs: [
      {
        name: "_saviour",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_canSave",
        type: "bool",
        internalType: "bool",
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
    name: "ConnectSAFESaviour",
    inputs: [
      {
        name: "_saviour",
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
    name: "DisconnectSAFESaviour",
    inputs: [
      {
        name: "_saviour",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "FailedSAFESave",
    inputs: [
      {
        name: "_failReason",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "InitializeCollateralType",
    inputs: [
      {
        name: "_cType",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Liquidate",
    inputs: [
      {
        name: "_cType",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "_safe",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_collateralAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_debtAmount",
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
        name: "_collateralAuctioneer",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_auctionId",
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
    name: "ProtectSAFE",
    inputs: [
      {
        name: "_cType",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "_safe",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_saviour",
        type: "address",
        indexed: false,
        internalType: "address",
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
    name: "SaveSAFE",
    inputs: [
      {
        name: "_cType",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "_safe",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_collateralAddedOrDebtRepaid",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UpdateCurrentOnAuctionSystemCoins",
    inputs: [
      {
        name: "_currentOnAuctionSystemCoins",
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
    name: "CollateralTypeAlreadyInitialized",
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
    name: "LiqEng_CannotModifySAFE",
    inputs: [],
  },
  {
    type: "error",
    name: "LiqEng_InvalidAmounts",
    inputs: [],
  },
  {
    type: "error",
    name: "LiqEng_InvalidSAFESaviourOperation",
    inputs: [],
  },
  {
    type: "error",
    name: "LiqEng_LiquidationLimitHit",
    inputs: [],
  },
  {
    type: "error",
    name: "LiqEng_NullAuction",
    inputs: [],
  },
  {
    type: "error",
    name: "LiqEng_NullCollateralToSell",
    inputs: [],
  },
  {
    type: "error",
    name: "LiqEng_OnlyLiqEng",
    inputs: [],
  },
  {
    type: "error",
    name: "LiqEng_SAFENotUnsafe",
    inputs: [],
  },
  {
    type: "error",
    name: "LiqEng_SaviourNotAuthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "LiqEng_SaviourNotOk",
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

export class ILiquidationEngine__factory {
  static readonly abi = _abi;
  static createInterface(): ILiquidationEngineInterface {
    return new Interface(_abi) as ILiquidationEngineInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ILiquidationEngine {
    return new Contract(address, _abi, runner) as unknown as ILiquidationEngine;
  }
}
