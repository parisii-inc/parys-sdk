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

export interface IDenominatedOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "denominationPriceSource"
      | "getResultWithValidity"
      | "inverted"
      | "priceSource"
      | "read"
      | "symbol"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "denominationPriceSource",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getResultWithValidity",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "inverted", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceSource",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "read", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "denominationPriceSource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getResultWithValidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inverted", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceSource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
}

export interface IDenominatedOracle extends BaseContract {
  connect(runner?: ContractRunner | null): IDenominatedOracle;
  waitForDeployment(): Promise<this>;

  interface: IDenominatedOracleInterface;

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

  denominationPriceSource: TypedContractMethod<[], [string], "view">;

  getResultWithValidity: TypedContractMethod<
    [],
    [[bigint, boolean] & { _result: bigint; _validity: boolean }],
    "view"
  >;

  inverted: TypedContractMethod<[], [boolean], "view">;

  priceSource: TypedContractMethod<[], [string], "view">;

  read: TypedContractMethod<[], [bigint], "view">;

  symbol: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "denominationPriceSource"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getResultWithValidity"
  ): TypedContractMethod<
    [],
    [[bigint, boolean] & { _result: bigint; _validity: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "inverted"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "priceSource"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "read"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
