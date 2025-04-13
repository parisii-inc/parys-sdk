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

export declare namespace ICollateralAuctionHouse {
  export type AuctionStruct = {
    amountToSell: BigNumberish;
    amountToRaise: BigNumberish;
    initialTimestamp: BigNumberish;
    forgoneCollateralReceiver: AddressLike;
    auctionIncomeRecipient: AddressLike;
  };

  export type AuctionStructOutput = [
    amountToSell: bigint,
    amountToRaise: bigint,
    initialTimestamp: bigint,
    forgoneCollateralReceiver: string,
    auctionIncomeRecipient: string
  ] & {
    amountToSell: bigint;
    amountToRaise: bigint;
    initialTimestamp: bigint;
    forgoneCollateralReceiver: string;
    auctionIncomeRecipient: string;
  };

  export type CollateralAuctionHouseParamsStruct = {
    minimumBid: BigNumberish;
    minDiscount: BigNumberish;
    maxDiscount: BigNumberish;
    perSecondDiscountUpdateRate: BigNumberish;
  };

  export type CollateralAuctionHouseParamsStructOutput = [
    minimumBid: bigint,
    minDiscount: bigint,
    maxDiscount: bigint,
    perSecondDiscountUpdateRate: bigint
  ] & {
    minimumBid: bigint;
    minDiscount: bigint;
    maxDiscount: bigint;
    perSecondDiscountUpdateRate: bigint;
  };
}

export interface ICollateralAuctionHouseChildInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "AUCTION_HOUSE_TYPE"
      | "_auctions"
      | "_params"
      | "addAuthorization"
      | "auctions"
      | "auctionsStarted"
      | "authorizedAccounts(address)"
      | "authorizedAccounts()"
      | "buyCollateral"
      | "collateralType"
      | "contractEnabled"
      | "disableContract"
      | "factory"
      | "getAuctionDiscount"
      | "getCollateralBought"
      | "liquidationEngine"
      | "modifyParameters"
      | "oracleRelayer"
      | "params"
      | "removeAuthorization"
      | "safeEngine"
      | "startAuction"
      | "terminateAuctionPrematurely"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddAuthorization"
      | "BuyCollateral"
      | "DisableContract"
      | "ModifyParameters"
      | "RemoveAuthorization"
      | "SettleAuction"
      | "StartAuction"
      | "TerminateAuctionPrematurely"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "AUCTION_HOUSE_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_auctions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "_params", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addAuthorization",
    values: [AddressLike]
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
    functionFragment: "authorizedAccounts(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedAccounts()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "buyCollateral",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disableContract",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAuctionDiscount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralBought",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modifyParameters",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleRelayer",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "params", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeAuthorization",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startAuction",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "terminateAuctionPrematurely",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "AUCTION_HOUSE_TYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_auctions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "auctions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "auctionsStarted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedAccounts(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedAccounts()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "buyCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAuctionDiscount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralBought",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "oracleRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "terminateAuctionPrematurely",
    data: BytesLike
  ): Result;
}

export namespace AddAuthorizationEvent {
  export type InputTuple = [_account: AddressLike];
  export type OutputTuple = [_account: string];
  export interface OutputObject {
    _account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BuyCollateralEvent {
  export type InputTuple = [
    _id: BigNumberish,
    _bidder: AddressLike,
    _blockTimestamp: BigNumberish,
    _raisedAmount: BigNumberish,
    _soldAmount: BigNumberish
  ];
  export type OutputTuple = [
    _id: bigint,
    _bidder: string,
    _blockTimestamp: bigint,
    _raisedAmount: bigint,
    _soldAmount: bigint
  ];
  export interface OutputObject {
    _id: bigint;
    _bidder: string;
    _blockTimestamp: bigint;
    _raisedAmount: bigint;
    _soldAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DisableContractEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ModifyParametersEvent {
  export type InputTuple = [
    _param: BytesLike,
    _cType: BytesLike,
    _data: BytesLike
  ];
  export type OutputTuple = [_param: string, _cType: string, _data: string];
  export interface OutputObject {
    _param: string;
    _cType: string;
    _data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoveAuthorizationEvent {
  export type InputTuple = [_account: AddressLike];
  export type OutputTuple = [_account: string];
  export interface OutputObject {
    _account: string;
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
    _leftoverReceiver: AddressLike,
    _leftoverCollateral: BigNumberish
  ];
  export type OutputTuple = [
    _id: bigint,
    _blockTimestamp: bigint,
    _leftoverReceiver: string,
    _leftoverCollateral: bigint
  ];
  export interface OutputObject {
    _id: bigint;
    _blockTimestamp: bigint;
    _leftoverReceiver: string;
    _leftoverCollateral: bigint;
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
    _amountToRaise: BigNumberish
  ];
  export type OutputTuple = [
    _id: bigint,
    _auctioneer: string,
    _blockTimestamp: bigint,
    _amountToSell: bigint,
    _amountToRaise: bigint
  ];
  export interface OutputObject {
    _id: bigint;
    _auctioneer: string;
    _blockTimestamp: bigint;
    _amountToSell: bigint;
    _amountToRaise: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TerminateAuctionPrematurelyEvent {
  export type InputTuple = [
    _id: BigNumberish,
    _blockTimestamp: BigNumberish,
    _leftoverReceiver: AddressLike,
    _leftoverCollateral: BigNumberish
  ];
  export type OutputTuple = [
    _id: bigint,
    _blockTimestamp: bigint,
    _leftoverReceiver: string,
    _leftoverCollateral: bigint
  ];
  export interface OutputObject {
    _id: bigint;
    _blockTimestamp: bigint;
    _leftoverReceiver: string;
    _leftoverCollateral: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ICollateralAuctionHouseChild extends BaseContract {
  connect(runner?: ContractRunner | null): ICollateralAuctionHouseChild;
  waitForDeployment(): Promise<this>;

  interface: ICollateralAuctionHouseChildInterface;

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
    [_auctionId: BigNumberish],
    [
      [bigint, bigint, bigint, string, string] & {
        _amountToSell: bigint;
        _amountToRaise: bigint;
        _initialTimestamp: bigint;
        _forgoneCollateralReceiver: string;
        _auctionIncomeRecipient: string;
      }
    ],
    "view"
  >;

  _params: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        _minimumBid: bigint;
        _minDiscount: bigint;
        _maxDiscount: bigint;
        _perSecondDiscountUpdateRate: bigint;
      }
    ],
    "view"
  >;

  addAuthorization: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  auctions: TypedContractMethod<
    [_auctionId: BigNumberish],
    [ICollateralAuctionHouse.AuctionStructOutput],
    "view"
  >;

  auctionsStarted: TypedContractMethod<[], [bigint], "view">;

  "authorizedAccounts(address)": TypedContractMethod<
    [_account: AddressLike],
    [boolean],
    "view"
  >;

  "authorizedAccounts()": TypedContractMethod<[], [string[]], "view">;

  buyCollateral: TypedContractMethod<
    [_id: BigNumberish, _wad: BigNumberish],
    [[bigint, bigint] & { _boughtCollateral: bigint; _adjustedBid: bigint }],
    "nonpayable"
  >;

  collateralType: TypedContractMethod<[], [string], "view">;

  contractEnabled: TypedContractMethod<[], [boolean], "view">;

  disableContract: TypedContractMethod<[], [void], "nonpayable">;

  factory: TypedContractMethod<[], [string], "view">;

  getAuctionDiscount: TypedContractMethod<
    [_id: BigNumberish],
    [bigint],
    "view"
  >;

  getCollateralBought: TypedContractMethod<
    [_id: BigNumberish, _wad: BigNumberish],
    [[bigint, bigint] & { _collateralBought: bigint; _adjustedBid: bigint }],
    "view"
  >;

  liquidationEngine: TypedContractMethod<[], [string], "view">;

  modifyParameters: TypedContractMethod<
    [_param: BytesLike, _data: BytesLike],
    [void],
    "nonpayable"
  >;

  oracleRelayer: TypedContractMethod<[], [string], "view">;

  params: TypedContractMethod<
    [],
    [ICollateralAuctionHouse.CollateralAuctionHouseParamsStructOutput],
    "view"
  >;

  removeAuthorization: TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  safeEngine: TypedContractMethod<[], [string], "view">;

  startAuction: TypedContractMethod<
    [
      _forgoneCollateralReceiver: AddressLike,
      _auctionIncomeRecipient: AddressLike,
      _amountToRaise: BigNumberish,
      _collateralToSell: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  terminateAuctionPrematurely: TypedContractMethod<
    [_auctionId: BigNumberish],
    [void],
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
    [_auctionId: BigNumberish],
    [
      [bigint, bigint, bigint, string, string] & {
        _amountToSell: bigint;
        _amountToRaise: bigint;
        _initialTimestamp: bigint;
        _forgoneCollateralReceiver: string;
        _auctionIncomeRecipient: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "_params"
  ): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint, bigint] & {
        _minimumBid: bigint;
        _minDiscount: bigint;
        _maxDiscount: bigint;
        _perSecondDiscountUpdateRate: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "addAuthorization"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "auctions"
  ): TypedContractMethod<
    [_auctionId: BigNumberish],
    [ICollateralAuctionHouse.AuctionStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "auctionsStarted"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "authorizedAccounts(address)"
  ): TypedContractMethod<[_account: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "authorizedAccounts()"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "buyCollateral"
  ): TypedContractMethod<
    [_id: BigNumberish, _wad: BigNumberish],
    [[bigint, bigint] & { _boughtCollateral: bigint; _adjustedBid: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "collateralType"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "contractEnabled"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "disableContract"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAuctionDiscount"
  ): TypedContractMethod<[_id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCollateralBought"
  ): TypedContractMethod<
    [_id: BigNumberish, _wad: BigNumberish],
    [[bigint, bigint] & { _collateralBought: bigint; _adjustedBid: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "liquidationEngine"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "modifyParameters"
  ): TypedContractMethod<
    [_param: BytesLike, _data: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "oracleRelayer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "params"
  ): TypedContractMethod<
    [],
    [ICollateralAuctionHouse.CollateralAuctionHouseParamsStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "removeAuthorization"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "safeEngine"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "startAuction"
  ): TypedContractMethod<
    [
      _forgoneCollateralReceiver: AddressLike,
      _auctionIncomeRecipient: AddressLike,
      _amountToRaise: BigNumberish,
      _collateralToSell: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "terminateAuctionPrematurely"
  ): TypedContractMethod<[_auctionId: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "AddAuthorization"
  ): TypedContractEvent<
    AddAuthorizationEvent.InputTuple,
    AddAuthorizationEvent.OutputTuple,
    AddAuthorizationEvent.OutputObject
  >;
  getEvent(
    key: "BuyCollateral"
  ): TypedContractEvent<
    BuyCollateralEvent.InputTuple,
    BuyCollateralEvent.OutputTuple,
    BuyCollateralEvent.OutputObject
  >;
  getEvent(
    key: "DisableContract"
  ): TypedContractEvent<
    DisableContractEvent.InputTuple,
    DisableContractEvent.OutputTuple,
    DisableContractEvent.OutputObject
  >;
  getEvent(
    key: "ModifyParameters"
  ): TypedContractEvent<
    ModifyParametersEvent.InputTuple,
    ModifyParametersEvent.OutputTuple,
    ModifyParametersEvent.OutputObject
  >;
  getEvent(
    key: "RemoveAuthorization"
  ): TypedContractEvent<
    RemoveAuthorizationEvent.InputTuple,
    RemoveAuthorizationEvent.OutputTuple,
    RemoveAuthorizationEvent.OutputObject
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
  getEvent(
    key: "TerminateAuctionPrematurely"
  ): TypedContractEvent<
    TerminateAuctionPrematurelyEvent.InputTuple,
    TerminateAuctionPrematurelyEvent.OutputTuple,
    TerminateAuctionPrematurelyEvent.OutputObject
  >;

  filters: {
    "AddAuthorization(address)": TypedContractEvent<
      AddAuthorizationEvent.InputTuple,
      AddAuthorizationEvent.OutputTuple,
      AddAuthorizationEvent.OutputObject
    >;
    AddAuthorization: TypedContractEvent<
      AddAuthorizationEvent.InputTuple,
      AddAuthorizationEvent.OutputTuple,
      AddAuthorizationEvent.OutputObject
    >;

    "BuyCollateral(uint256,address,uint256,uint256,uint256)": TypedContractEvent<
      BuyCollateralEvent.InputTuple,
      BuyCollateralEvent.OutputTuple,
      BuyCollateralEvent.OutputObject
    >;
    BuyCollateral: TypedContractEvent<
      BuyCollateralEvent.InputTuple,
      BuyCollateralEvent.OutputTuple,
      BuyCollateralEvent.OutputObject
    >;

    "DisableContract()": TypedContractEvent<
      DisableContractEvent.InputTuple,
      DisableContractEvent.OutputTuple,
      DisableContractEvent.OutputObject
    >;
    DisableContract: TypedContractEvent<
      DisableContractEvent.InputTuple,
      DisableContractEvent.OutputTuple,
      DisableContractEvent.OutputObject
    >;

    "ModifyParameters(bytes32,bytes32,bytes)": TypedContractEvent<
      ModifyParametersEvent.InputTuple,
      ModifyParametersEvent.OutputTuple,
      ModifyParametersEvent.OutputObject
    >;
    ModifyParameters: TypedContractEvent<
      ModifyParametersEvent.InputTuple,
      ModifyParametersEvent.OutputTuple,
      ModifyParametersEvent.OutputObject
    >;

    "RemoveAuthorization(address)": TypedContractEvent<
      RemoveAuthorizationEvent.InputTuple,
      RemoveAuthorizationEvent.OutputTuple,
      RemoveAuthorizationEvent.OutputObject
    >;
    RemoveAuthorization: TypedContractEvent<
      RemoveAuthorizationEvent.InputTuple,
      RemoveAuthorizationEvent.OutputTuple,
      RemoveAuthorizationEvent.OutputObject
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

    "StartAuction(uint256,address,uint256,uint256,uint256)": TypedContractEvent<
      StartAuctionEvent.InputTuple,
      StartAuctionEvent.OutputTuple,
      StartAuctionEvent.OutputObject
    >;
    StartAuction: TypedContractEvent<
      StartAuctionEvent.InputTuple,
      StartAuctionEvent.OutputTuple,
      StartAuctionEvent.OutputObject
    >;

    "TerminateAuctionPrematurely(uint256,uint256,address,uint256)": TypedContractEvent<
      TerminateAuctionPrematurelyEvent.InputTuple,
      TerminateAuctionPrematurelyEvent.OutputTuple,
      TerminateAuctionPrematurelyEvent.OutputObject
    >;
    TerminateAuctionPrematurely: TypedContractEvent<
      TerminateAuctionPrematurelyEvent.InputTuple,
      TerminateAuctionPrematurelyEvent.OutputTuple,
      TerminateAuctionPrematurelyEvent.OutputObject
    >;
  };
}
