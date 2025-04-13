/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
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

export interface IChainlinkOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "decimals"
      | "description"
      | "getAnswer"
      | "getRoundData"
      | "getTimestamp"
      | "latestAnswer"
      | "latestRound"
      | "latestRoundData"
      | "latestTimestamp"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAnswer",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoundData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnswer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoundData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestTimestamp",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAnswer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRoundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestTimestamp",
    data: BytesLike
  ): Result;
}

export interface IChainlinkOracle extends BaseContract {
  connect(runner?: ContractRunner | null): IChainlinkOracle;
  waitForDeployment(): Promise<this>;

  interface: IChainlinkOracleInterface;

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

  decimals: TypedContractMethod<[], [bigint], "view">;

  description: TypedContractMethod<[], [string], "view">;

  getAnswer: TypedContractMethod<[_roundId: BigNumberish], [bigint], "view">;

  getRoundData: TypedContractMethod<
    [__roundId: BigNumberish],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        _roundId: bigint;
        _answer: bigint;
        _startedAt: bigint;
        _updatedAt: bigint;
        _answeredInRound: bigint;
      }
    ],
    "view"
  >;

  getTimestamp: TypedContractMethod<[_roundId: BigNumberish], [bigint], "view">;

  latestAnswer: TypedContractMethod<[], [bigint], "view">;

  latestRound: TypedContractMethod<[], [bigint], "view">;

  latestRoundData: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        _roundId: bigint;
        _answer: bigint;
        _startedAt: bigint;
        _updatedAt: bigint;
        _answeredInRound: bigint;
      }
    ],
    "view"
  >;

  latestTimestamp: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "description"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAnswer"
  ): TypedContractMethod<[_roundId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoundData"
  ): TypedContractMethod<
    [__roundId: BigNumberish],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        _roundId: bigint;
        _answer: bigint;
        _startedAt: bigint;
        _updatedAt: bigint;
        _answeredInRound: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTimestamp"
  ): TypedContractMethod<[_roundId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "latestAnswer"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "latestRound"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "latestRoundData"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        _roundId: bigint;
        _answer: bigint;
        _startedAt: bigint;
        _updatedAt: bigint;
        _answeredInRound: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "latestTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
