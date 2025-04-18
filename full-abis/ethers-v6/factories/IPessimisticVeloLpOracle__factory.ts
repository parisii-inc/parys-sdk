/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPessimisticVeloLpOracle,
  IPessimisticVeloLpOracleInterface,
} from "../IPessimisticVeloLpOracle";

const _abi = [
  {
    type: "function",
    name: "getCurrentPoolPrice",
    inputs: [
      {
        name: "_pool",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "_price",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class IPessimisticVeloLpOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IPessimisticVeloLpOracleInterface {
    return new Interface(_abi) as IPessimisticVeloLpOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPessimisticVeloLpOracle {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IPessimisticVeloLpOracle;
  }
}
