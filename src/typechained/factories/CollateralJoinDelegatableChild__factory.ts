/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  CollateralJoinDelegatableChild,
  CollateralJoinDelegatableChildInterface,
} from "../CollateralJoinDelegatableChild";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_safeEngine",
        type: "address",
        internalType: "address",
      },
      {
        name: "_cType",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_collateral",
        type: "address",
        internalType: "address",
      },
      {
        name: "_delegatee",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "collateral",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20Metadata",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "collateralType",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
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
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "delegatee",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
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
    name: "exit",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
      {
        name: "_wei",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "factory",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "join",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
      {
        name: "_wei",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "multiplier",
    inputs: [],
    outputs: [
      {
        name: "",
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
        name: "",
        type: "address",
        internalType: "contract ISAFEEngine",
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
    name: "DisableContract",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Exit",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_account",
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
    name: "Join",
    inputs: [
      {
        name: "_sender",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "_account",
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
    type: "error",
    name: "AddressEmptyCode",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "AddressInsufficientBalance",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "AlreadyAuthorized",
    inputs: [],
  },
  {
    type: "error",
    name: "CallerNotFactory",
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
    name: "FailedInnerCall",
    inputs: [],
  },
  {
    type: "error",
    name: "IntOverflow",
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
    name: "NotFactoryDeployment",
    inputs: [],
  },
  {
    type: "error",
    name: "NullAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "Unauthorized",
    inputs: [],
  },
] as const;

export class CollateralJoinDelegatableChild__factory {
  static readonly abi = _abi;
  static createInterface(): CollateralJoinDelegatableChildInterface {
    return new utils.Interface(_abi) as CollateralJoinDelegatableChildInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CollateralJoinDelegatableChild {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CollateralJoinDelegatableChild;
  }
}
