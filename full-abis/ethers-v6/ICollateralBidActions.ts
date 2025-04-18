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

export interface ICollateralBidActionsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "buyCollateral"
      | "exitAllSystemCoins"
      | "exitCollateral"
      | "exitSystemCoins"
      | "joinSystemCoins"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyCollateral",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exitAllSystemCoins",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "exitCollateral",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exitSystemCoins",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "joinSystemCoins",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "buyCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exitAllSystemCoins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exitCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exitSystemCoins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "joinSystemCoins",
    data: BytesLike
  ): Result;
}

export interface ICollateralBidActions extends BaseContract {
  connect(runner?: ContractRunner | null): ICollateralBidActions;
  waitForDeployment(): Promise<this>;

  interface: ICollateralBidActionsInterface;

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

  buyCollateral: TypedContractMethod<
    [
      _coinJoin: AddressLike,
      _collateralJoin: AddressLike,
      _collateralAuctionHouse: AddressLike,
      _auctionId: BigNumberish,
      _minCollateralAmount: BigNumberish,
      _bidAmount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  exitAllSystemCoins: TypedContractMethod<
    [_coinJoin: AddressLike],
    [void],
    "nonpayable"
  >;

  exitCollateral: TypedContractMethod<
    [_collateralJoin: AddressLike, _wad: BigNumberish],
    [void],
    "nonpayable"
  >;

  exitSystemCoins: TypedContractMethod<
    [_coinJoin: AddressLike, _coinsToExit: BigNumberish],
    [void],
    "nonpayable"
  >;

  joinSystemCoins: TypedContractMethod<
    [_coinJoin: AddressLike, _dst: AddressLike, _wad: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "buyCollateral"
  ): TypedContractMethod<
    [
      _coinJoin: AddressLike,
      _collateralJoin: AddressLike,
      _collateralAuctionHouse: AddressLike,
      _auctionId: BigNumberish,
      _minCollateralAmount: BigNumberish,
      _bidAmount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "exitAllSystemCoins"
  ): TypedContractMethod<[_coinJoin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "exitCollateral"
  ): TypedContractMethod<
    [_collateralJoin: AddressLike, _wad: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "exitSystemCoins"
  ): TypedContractMethod<
    [_coinJoin: AddressLike, _coinsToExit: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "joinSystemCoins"
  ): TypedContractMethod<
    [_coinJoin: AddressLike, _dst: AddressLike, _wad: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}
