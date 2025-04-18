/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
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

export interface ISAFESaviourInterface extends Interface {
  getFunction(nameOrSignature: "saveSAFE"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "saveSAFE",
    values: [AddressLike, BytesLike, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "saveSAFE", data: BytesLike): Result;
}

export interface ISAFESaviour extends BaseContract {
  connect(runner?: ContractRunner | null): ISAFESaviour;
  waitForDeployment(): Promise<this>;

  interface: ISAFESaviourInterface;

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

  saveSAFE: TypedContractMethod<
    [_liquidator: AddressLike, _cType: BytesLike, _safe: AddressLike],
    [
      [boolean, bigint, bigint] & {
        _ok: boolean;
        _collateralAdded: bigint;
        _liquidatorReward: bigint;
      }
    ],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "saveSAFE"
  ): TypedContractMethod<
    [_liquidator: AddressLike, _cType: BytesLike, _safe: AddressLike],
    [
      [boolean, bigint, bigint] & {
        _ok: boolean;
        _collateralAdded: bigint;
        _liquidatorReward: bigint;
      }
    ],
    "nonpayable"
  >;

  filters: {};
}
