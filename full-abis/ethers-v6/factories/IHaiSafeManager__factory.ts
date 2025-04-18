/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IHaiSafeManager,
  IHaiSafeManagerInterface,
} from "../IHaiSafeManager";

const _abi = [
  {
    type: "function",
    name: "acceptSAFEOwnership",
    inputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addSAFE",
    inputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "allowHandler",
    inputs: [
      {
        name: "_usr",
        type: "address",
        internalType: "address",
      },
      {
        name: "_ok",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "allowSAFE",
    inputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_usr",
        type: "address",
        internalType: "address",
      },
      {
        name: "_ok",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "enterSystem",
    inputs: [
      {
        name: "_src",
        type: "address",
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getSafes",
    inputs: [
      {
        name: "_usr",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_safes",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getSafes",
    inputs: [
      {
        name: "_usr",
        type: "address",
        internalType: "address",
      },
      {
        name: "_cType",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "_safes",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getSafesData",
    inputs: [
      {
        name: "_usr",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_safes",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "_safeHandlers",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "_cTypes",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "handlerCan",
    inputs: [
      {
        name: "_safeHandler",
        type: "address",
        internalType: "address",
      },
      {
        name: "_caller",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_ok",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "modifySAFECollateralization",
    inputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_deltaCollateral",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "_deltaDebt",
        type: "int256",
        internalType: "int256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "moveSAFE",
    inputs: [
      {
        name: "_safeSrc",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_safeDst",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "openSAFE",
    inputs: [
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
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "protectSAFE",
    inputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_liquidationEngine",
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
    name: "quitSystem",
    inputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_dst",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "removeSAFE",
    inputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeCan",
    inputs: [
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "_safeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_caller",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_ok",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "safeData",
    inputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "_sData",
        type: "tuple",
        internalType: "struct IHaiSafeManager.SAFEData",
        components: [
          {
            name: "owner",
            type: "address",
            internalType: "address",
          },
          {
            name: "pendingOwner",
            type: "address",
            internalType: "address",
          },
          {
            name: "safeHandler",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralType",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "safeEngine",
    inputs: [],
    outputs: [
      {
        name: "_safeEngine",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferCollateral",
    inputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
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
    name: "transferCollateral",
    inputs: [
      {
        name: "_cType",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
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
    name: "transferInternalCoins",
    inputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_dst",
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
    name: "transferSAFEOwnership",
    inputs: [
      {
        name: "_safe",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_dst",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AllowHandler",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_usr",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_ok",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "AllowSAFE",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_usr",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_ok",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EnterSystem",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_src",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "InitiateTransferSAFEOwnership",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_dst",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ModifySAFECollateralization",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_deltaCollateral",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
      {
        name: "_deltaDebt",
        type: "int256",
        indexed: false,
        internalType: "int256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MoveSAFE",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_safeSrc",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_safeDst",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OpenSAFE",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_own",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProtectSAFE",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_liquidationEngine",
        type: "address",
        indexed: false,
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
    name: "QuitSystem",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_dst",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "TransferCollateral",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_dst",
        type: "address",
        indexed: false,
        internalType: "address",
      },
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
    name: "TransferCollateral",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_cType",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "_safe",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_dst",
        type: "address",
        indexed: false,
        internalType: "address",
      },
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
    name: "TransferInternalCoins",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_dst",
        type: "address",
        indexed: false,
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
    name: "TransferSAFEOwnership",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_safe",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "_dst",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AlreadySafeOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "CollateralTypesMismatch",
    inputs: [],
  },
  {
    type: "error",
    name: "HandlerNotAllowed",
    inputs: [],
  },
  {
    type: "error",
    name: "SafeNotAllowed",
    inputs: [],
  },
  {
    type: "error",
    name: "ZeroAddress",
    inputs: [],
  },
] as const;

export class IHaiSafeManager__factory {
  static readonly abi = _abi;
  static createInterface(): IHaiSafeManagerInterface {
    return new Interface(_abi) as IHaiSafeManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IHaiSafeManager {
    return new Contract(address, _abi, runner) as unknown as IHaiSafeManager;
  }
}
