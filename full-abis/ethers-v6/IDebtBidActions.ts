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

export interface IDebtBidActionsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "collectProtocolTokens"
      | "decreaseSoldAmount"
      | "exitAllSystemCoins"
      | "exitCollateral"
      | "exitSystemCoins"
      | "joinSystemCoins"
      | "settleAuction"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "collectProtocolTokens",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseSoldAmount",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
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
  encodeFunctionData(
    functionFragment: "settleAuction",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "collectProtocolTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseSoldAmount",
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
  decodeFunctionResult(
    functionFragment: "settleAuction",
    data: BytesLike
  ): Result;
}

export interface IDebtBidActions extends BaseContract {
  connect(runner?: ContractRunner | null): IDebtBidActions;
  waitForDeployment(): Promise<this>;

  interface: IDebtBidActionsInterface;

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

  collectProtocolTokens: TypedContractMethod<
    [_protocolToken: AddressLike],
    [void],
    "nonpayable"
  >;

  decreaseSoldAmount: TypedContractMethod<
    [
      _coinJoin: AddressLike,
      _debtAuctionHouse: AddressLike,
      _auctionId: BigNumberish,
      _soldAmount: BigNumberish
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

  settleAuction: TypedContractMethod<
    [
      _coinJoin: AddressLike,
      _debtAuctionHouse: AddressLike,
      _auctionId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "collectProtocolTokens"
  ): TypedContractMethod<[_protocolToken: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "decreaseSoldAmount"
  ): TypedContractMethod<
    [
      _coinJoin: AddressLike,
      _debtAuctionHouse: AddressLike,
      _auctionId: BigNumberish,
      _soldAmount: BigNumberish
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
  getFunction(
    nameOrSignature: "settleAuction"
  ): TypedContractMethod<
    [
      _coinJoin: AddressLike,
      _debtAuctionHouse: AddressLike,
      _auctionId: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}
