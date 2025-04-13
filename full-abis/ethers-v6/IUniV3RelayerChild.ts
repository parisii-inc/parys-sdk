/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface IUniV3RelayerChildInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "baseAmount"
      | "baseToken"
      | "factory"
      | "getResultWithValidity"
      | "multiplier"
      | "quotePeriod"
      | "quoteToken"
      | "read"
      | "symbol"
      | "uniV3Pool"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "baseAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "baseToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getResultWithValidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "quotePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "quoteToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "read", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "uniV3Pool", values?: undefined): string;

  decodeFunctionResult(functionFragment: "baseAmount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getResultWithValidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multiplier", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quotePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quoteToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uniV3Pool", data: BytesLike): Result;
}

export interface IUniV3RelayerChild extends BaseContract {
  connect(runner?: ContractRunner | null): IUniV3RelayerChild;
  waitForDeployment(): Promise<this>;

  interface: IUniV3RelayerChildInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  baseAmount: TypedContractMethod<[], [bigint], "view">;

  baseToken: TypedContractMethod<[], [string], "view">;

  factory: TypedContractMethod<[], [string], "view">;

  getResultWithValidity: TypedContractMethod<
    [],
    [[bigint, boolean] & { _result: bigint; _validity: boolean }],
    "view"
  >;

  multiplier: TypedContractMethod<[], [bigint], "view">;

  quotePeriod: TypedContractMethod<[], [bigint], "view">;

  quoteToken: TypedContractMethod<[], [string], "view">;

  read: TypedContractMethod<[], [bigint], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  uniV3Pool: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "baseAmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "baseToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getResultWithValidity"
  ): TypedContractMethod<
    [],
    [[bigint, boolean] & { _result: bigint; _validity: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "multiplier"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "quotePeriod"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "quoteToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "read"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "uniV3Pool"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
