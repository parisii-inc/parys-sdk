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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace ICommonSurplusAuctionHouse {
  export type AuctionStruct = {
    bidAmount: BigNumberish;
    amountToSell: BigNumberish;
    highBidder: AddressLike;
    bidExpiry: BigNumberish;
    auctionDeadline: BigNumberish;
  };

  export type AuctionStructOutput = [
    bidAmount: bigint,
    amountToSell: bigint,
    highBidder: string,
    bidExpiry: bigint,
    auctionDeadline: bigint
  ] & {
    bidAmount: bigint;
    amountToSell: bigint;
    highBidder: string;
    bidExpiry: bigint;
    auctionDeadline: bigint;
  };
}

export interface ICommonSurplusAuctionHouseInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "AUCTION_HOUSE_TYPE"
      | "_auctions"
      | "auctions"
      | "auctionsStarted"
      | "increaseBidSize"
      | "protocolToken"
      | "restartAuction"
      | "safeEngine"
      | "settleAuction"
      | "startAuction"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "IncreaseBidSize"
      | "RestartAuction"
      | "SettleAuction"
      | "StartAuction"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "AUCTION_HOUSE_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_auctions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "auctions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "auctionsStarted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "increaseBidSize",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restartAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "settleAuction",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startAuction",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "AUCTION_HOUSE_TYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_auctions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "auctions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "auctionsStarted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseBidSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "restartAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "settleAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startAuction",
    data: BytesLike
  ): Result;
}

export namespace IncreaseBidSizeEvent {
  export type InputTuple = [
    _id: BigNumberish,
    _bidder: AddressLike,
    _blockTimestamp: BigNumberish,
    _raisedAmount: BigNumberish,
    _soldAmount: BigNumberish,
    _bidExpiry: BigNumberish
  ];
  export type OutputTuple = [
    _id: bigint,
    _bidder: string,
    _blockTimestamp: bigint,
    _raisedAmount: bigint,
    _soldAmount: bigint,
    _bidExpiry: bigint
  ];
  export interface OutputObject {
    _id: bigint;
    _bidder: string;
    _blockTimestamp: bigint;
    _raisedAmount: bigint;
    _soldAmount: bigint;
    _bidExpiry: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RestartAuctionEvent {
  export type InputTuple = [
    _id: BigNumberish,
    _blockTimestamp: BigNumberish,
    _auctionDeadline: BigNumberish
  ];
  export type OutputTuple = [
    _id: bigint,
    _blockTimestamp: bigint,
    _auctionDeadline: bigint
  ];
  export interface OutputObject {
    _id: bigint;
    _blockTimestamp: bigint;
    _auctionDeadline: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SettleAuctionEvent {
  export type InputTuple = [
    _id: BigNumberish,
    _blockTimestamp: BigNumberish,
    _highBidder: AddressLike,
    _raisedAmount: BigNumberish
  ];
  export type OutputTuple = [
    _id: bigint,
    _blockTimestamp: bigint,
    _highBidder: string,
    _raisedAmount: bigint
  ];
  export interface OutputObject {
    _id: bigint;
    _blockTimestamp: bigint;
    _highBidder: string;
    _raisedAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StartAuctionEvent {
  export type InputTuple = [
    _id: BigNumberish,
    _auctioneer: AddressLike,
    _blockTimestamp: BigNumberish,
    _amountToSell: BigNumberish,
    _amountToRaise: BigNumberish,
    _auctionDeadline: BigNumberish
  ];
  export type OutputTuple = [
    _id: bigint,
    _auctioneer: string,
    _blockTimestamp: bigint,
    _amountToSell: bigint,
    _amountToRaise: bigint,
    _auctionDeadline: bigint
  ];
  export interface OutputObject {
    _id: bigint;
    _auctioneer: string;
    _blockTimestamp: bigint;
    _amountToSell: bigint;
    _amountToRaise: bigint;
    _auctionDeadline: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ICommonSurplusAuctionHouse extends BaseContract {
  connect(runner?: ContractRunner | null): ICommonSurplusAuctionHouse;
  waitForDeployment(): Promise<this>;

  interface: ICommonSurplusAuctionHouseInterface;

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

  AUCTION_HOUSE_TYPE: TypedContractMethod<[], [string], "view">;

  _auctions: TypedContractMethod<
    [_id: BigNumberish],
    [
      [bigint, bigint, string, bigint, bigint] & {
        _bidAmount: bigint;
        _amountToSell: bigint;
        _highBidder: string;
        _bidExpiry: bigint;
        _auctionDeadline: bigint;
      }
    ],
    "view"
  >;

  auctions: TypedContractMethod<
    [_id: BigNumberish],
    [ICommonSurplusAuctionHouse.AuctionStructOutput],
    "view"
  >;

  auctionsStarted: TypedContractMethod<[], [bigint], "view">;

  increaseBidSize: TypedContractMethod<
    [_id: BigNumberish, _bid: BigNumberish],
    [void],
    "nonpayable"
  >;

  protocolToken: TypedContractMethod<[], [string], "view">;

  restartAuction: TypedContractMethod<
    [_id: BigNumberish],
    [void],
    "nonpayable"
  >;

  safeEngine: TypedContractMethod<[], [string], "view">;

  settleAuction: TypedContractMethod<[_id: BigNumberish], [void], "nonpayable">;

  startAuction: TypedContractMethod<
    [_amountToSell: BigNumberish, _initialBid: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "AUCTION_HOUSE_TYPE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_auctions"
  ): TypedContractMethod<
    [_id: BigNumberish],
    [
      [bigint, bigint, string, bigint, bigint] & {
        _bidAmount: bigint;
        _amountToSell: bigint;
        _highBidder: string;
        _bidExpiry: bigint;
        _auctionDeadline: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "auctions"
  ): TypedContractMethod<
    [_id: BigNumberish],
    [ICommonSurplusAuctionHouse.AuctionStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "auctionsStarted"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "increaseBidSize"
  ): TypedContractMethod<
    [_id: BigNumberish, _bid: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "protocolToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "restartAuction"
  ): TypedContractMethod<[_id: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "safeEngine"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "settleAuction"
  ): TypedContractMethod<[_id: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "startAuction"
  ): TypedContractMethod<
    [_amountToSell: BigNumberish, _initialBid: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getEvent(
    key: "IncreaseBidSize"
  ): TypedContractEvent<
    IncreaseBidSizeEvent.InputTuple,
    IncreaseBidSizeEvent.OutputTuple,
    IncreaseBidSizeEvent.OutputObject
  >;
  getEvent(
    key: "RestartAuction"
  ): TypedContractEvent<
    RestartAuctionEvent.InputTuple,
    RestartAuctionEvent.OutputTuple,
    RestartAuctionEvent.OutputObject
  >;
  getEvent(
    key: "SettleAuction"
  ): TypedContractEvent<
    SettleAuctionEvent.InputTuple,
    SettleAuctionEvent.OutputTuple,
    SettleAuctionEvent.OutputObject
  >;
  getEvent(
    key: "StartAuction"
  ): TypedContractEvent<
    StartAuctionEvent.InputTuple,
    StartAuctionEvent.OutputTuple,
    StartAuctionEvent.OutputObject
  >;

  filters: {
    "IncreaseBidSize(uint256,address,uint256,uint256,uint256,uint256)": TypedContractEvent<
      IncreaseBidSizeEvent.InputTuple,
      IncreaseBidSizeEvent.OutputTuple,
      IncreaseBidSizeEvent.OutputObject
    >;
    IncreaseBidSize: TypedContractEvent<
      IncreaseBidSizeEvent.InputTuple,
      IncreaseBidSizeEvent.OutputTuple,
      IncreaseBidSizeEvent.OutputObject
    >;

    "RestartAuction(uint256,uint256,uint256)": TypedContractEvent<
      RestartAuctionEvent.InputTuple,
      RestartAuctionEvent.OutputTuple,
      RestartAuctionEvent.OutputObject
    >;
    RestartAuction: TypedContractEvent<
      RestartAuctionEvent.InputTuple,
      RestartAuctionEvent.OutputTuple,
      RestartAuctionEvent.OutputObject
    >;

    "SettleAuction(uint256,uint256,address,uint256)": TypedContractEvent<
      SettleAuctionEvent.InputTuple,
      SettleAuctionEvent.OutputTuple,
      SettleAuctionEvent.OutputObject
    >;
    SettleAuction: TypedContractEvent<
      SettleAuctionEvent.InputTuple,
      SettleAuctionEvent.OutputTuple,
      SettleAuctionEvent.OutputObject
    >;

    "StartAuction(uint256,address,uint256,uint256,uint256,uint256)": TypedContractEvent<
      StartAuctionEvent.InputTuple,
      StartAuctionEvent.OutputTuple,
      StartAuctionEvent.OutputObject
    >;
    StartAuction: TypedContractEvent<
      StartAuctionEvent.InputTuple,
      StartAuctionEvent.OutputTuple,
      StartAuctionEvent.OutputObject
    >;
  };
}
