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

export declare namespace IHaiSafeManager {
  export type SAFEDataStruct = {
    owner: AddressLike;
    pendingOwner: AddressLike;
    safeHandler: AddressLike;
    collateralType: BytesLike;
  };

  export type SAFEDataStructOutput = [
    owner: string,
    pendingOwner: string,
    safeHandler: string,
    collateralType: string
  ] & {
    owner: string;
    pendingOwner: string;
    safeHandler: string;
    collateralType: string;
  };
}

export interface IHaiSafeManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptSAFEOwnership"
      | "addSAFE"
      | "allowHandler"
      | "allowSAFE"
      | "enterSystem"
      | "getSafes(address)"
      | "getSafes(address,bytes32)"
      | "getSafesData"
      | "handlerCan"
      | "modifySAFECollateralization"
      | "moveSAFE"
      | "openSAFE"
      | "protectSAFE"
      | "quitSystem"
      | "removeSAFE"
      | "safeCan"
      | "safeData"
      | "safeEngine"
      | "transferCollateral(uint256,address,uint256)"
      | "transferCollateral(bytes32,uint256,address,uint256)"
      | "transferInternalCoins"
      | "transferSAFEOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AllowHandler"
      | "AllowSAFE"
      | "EnterSystem"
      | "InitiateTransferSAFEOwnership"
      | "ModifySAFECollateralization"
      | "MoveSAFE"
      | "OpenSAFE"
      | "ProtectSAFE"
      | "QuitSystem"
      | "TransferCollateral(address,uint256,address,uint256)"
      | "TransferCollateral(address,bytes32,uint256,address,uint256)"
      | "TransferInternalCoins"
      | "TransferSAFEOwnership"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptSAFEOwnership",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addSAFE",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowHandler",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "allowSAFE",
    values: [BigNumberish, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "enterSystem",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSafes(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSafes(address,bytes32)",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSafesData",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "handlerCan",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "modifySAFECollateralization",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "moveSAFE",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "openSAFE",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "protectSAFE",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "quitSystem",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeSAFE",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeCan",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeData",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferCollateral(uint256,address,uint256)",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferCollateral(bytes32,uint256,address,uint256)",
    values: [BytesLike, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferInternalCoins",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferSAFEOwnership",
    values: [BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptSAFEOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addSAFE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowSAFE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "enterSystem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSafes(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSafes(address,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSafesData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "handlerCan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "modifySAFECollateralization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "moveSAFE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "openSAFE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protectSAFE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quitSystem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeSAFE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeCan", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferCollateral(uint256,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferCollateral(bytes32,uint256,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferInternalCoins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferSAFEOwnership",
    data: BytesLike
  ): Result;
}

export namespace AllowHandlerEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _usr: AddressLike,
    _ok: boolean
  ];
  export type OutputTuple = [_sender: string, _usr: string, _ok: boolean];
  export interface OutputObject {
    _sender: string;
    _usr: string;
    _ok: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AllowSAFEEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _safe: BigNumberish,
    _usr: AddressLike,
    _ok: boolean
  ];
  export type OutputTuple = [
    _sender: string,
    _safe: bigint,
    _usr: string,
    _ok: boolean
  ];
  export interface OutputObject {
    _sender: string;
    _safe: bigint;
    _usr: string;
    _ok: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EnterSystemEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _src: AddressLike,
    _safe: BigNumberish
  ];
  export type OutputTuple = [_sender: string, _src: string, _safe: bigint];
  export interface OutputObject {
    _sender: string;
    _src: string;
    _safe: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitiateTransferSAFEOwnershipEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _safe: BigNumberish,
    _dst: AddressLike
  ];
  export type OutputTuple = [_sender: string, _safe: bigint, _dst: string];
  export interface OutputObject {
    _sender: string;
    _safe: bigint;
    _dst: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ModifySAFECollateralizationEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _safe: BigNumberish,
    _deltaCollateral: BigNumberish,
    _deltaDebt: BigNumberish
  ];
  export type OutputTuple = [
    _sender: string,
    _safe: bigint,
    _deltaCollateral: bigint,
    _deltaDebt: bigint
  ];
  export interface OutputObject {
    _sender: string;
    _safe: bigint;
    _deltaCollateral: bigint;
    _deltaDebt: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MoveSAFEEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _safeSrc: BigNumberish,
    _safeDst: BigNumberish
  ];
  export type OutputTuple = [
    _sender: string,
    _safeSrc: bigint,
    _safeDst: bigint
  ];
  export interface OutputObject {
    _sender: string;
    _safeSrc: bigint;
    _safeDst: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OpenSAFEEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _own: AddressLike,
    _safe: BigNumberish
  ];
  export type OutputTuple = [_sender: string, _own: string, _safe: bigint];
  export interface OutputObject {
    _sender: string;
    _own: string;
    _safe: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProtectSAFEEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _safe: BigNumberish,
    _liquidationEngine: AddressLike,
    _saviour: AddressLike
  ];
  export type OutputTuple = [
    _sender: string,
    _safe: bigint,
    _liquidationEngine: string,
    _saviour: string
  ];
  export interface OutputObject {
    _sender: string;
    _safe: bigint;
    _liquidationEngine: string;
    _saviour: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QuitSystemEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _safe: BigNumberish,
    _dst: AddressLike
  ];
  export type OutputTuple = [_sender: string, _safe: bigint, _dst: string];
  export interface OutputObject {
    _sender: string;
    _safe: bigint;
    _dst: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferCollateral_address_uint256_address_uint256_Event {
  export type InputTuple = [
    _sender: AddressLike,
    _safe: BigNumberish,
    _dst: AddressLike,
    _wad: BigNumberish
  ];
  export type OutputTuple = [
    _sender: string,
    _safe: bigint,
    _dst: string,
    _wad: bigint
  ];
  export interface OutputObject {
    _sender: string;
    _safe: bigint;
    _dst: string;
    _wad: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferCollateral_address_bytes32_uint256_address_uint256_Event {
  export type InputTuple = [
    _sender: AddressLike,
    _cType: BytesLike,
    _safe: BigNumberish,
    _dst: AddressLike,
    _wad: BigNumberish
  ];
  export type OutputTuple = [
    _sender: string,
    _cType: string,
    _safe: bigint,
    _dst: string,
    _wad: bigint
  ];
  export interface OutputObject {
    _sender: string;
    _cType: string;
    _safe: bigint;
    _dst: string;
    _wad: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferInternalCoinsEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _safe: BigNumberish,
    _dst: AddressLike,
    _rad: BigNumberish
  ];
  export type OutputTuple = [
    _sender: string,
    _safe: bigint,
    _dst: string,
    _rad: bigint
  ];
  export interface OutputObject {
    _sender: string;
    _safe: bigint;
    _dst: string;
    _rad: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferSAFEOwnershipEvent {
  export type InputTuple = [
    _sender: AddressLike,
    _safe: BigNumberish,
    _dst: AddressLike
  ];
  export type OutputTuple = [_sender: string, _safe: bigint, _dst: string];
  export interface OutputObject {
    _sender: string;
    _safe: bigint;
    _dst: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IHaiSafeManager extends BaseContract {
  connect(runner?: ContractRunner | null): IHaiSafeManager;
  waitForDeployment(): Promise<this>;

  interface: IHaiSafeManagerInterface;

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

  acceptSAFEOwnership: TypedContractMethod<
    [_safe: BigNumberish],
    [void],
    "nonpayable"
  >;

  addSAFE: TypedContractMethod<[_safe: BigNumberish], [void], "nonpayable">;

  allowHandler: TypedContractMethod<
    [_usr: AddressLike, _ok: boolean],
    [void],
    "nonpayable"
  >;

  allowSAFE: TypedContractMethod<
    [_safe: BigNumberish, _usr: AddressLike, _ok: boolean],
    [void],
    "nonpayable"
  >;

  enterSystem: TypedContractMethod<
    [_src: AddressLike, _safe: BigNumberish],
    [void],
    "nonpayable"
  >;

  "getSafes(address)": TypedContractMethod<
    [_usr: AddressLike],
    [bigint[]],
    "view"
  >;

  "getSafes(address,bytes32)": TypedContractMethod<
    [_usr: AddressLike, _cType: BytesLike],
    [bigint[]],
    "view"
  >;

  getSafesData: TypedContractMethod<
    [_usr: AddressLike],
    [
      [bigint[], string[], string[]] & {
        _safes: bigint[];
        _safeHandlers: string[];
        _cTypes: string[];
      }
    ],
    "view"
  >;

  handlerCan: TypedContractMethod<
    [_safeHandler: AddressLike, _caller: AddressLike],
    [boolean],
    "view"
  >;

  modifySAFECollateralization: TypedContractMethod<
    [
      _safe: BigNumberish,
      _deltaCollateral: BigNumberish,
      _deltaDebt: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  moveSAFE: TypedContractMethod<
    [_safeSrc: BigNumberish, _safeDst: BigNumberish],
    [void],
    "nonpayable"
  >;

  openSAFE: TypedContractMethod<
    [_cType: BytesLike, _usr: AddressLike],
    [bigint],
    "nonpayable"
  >;

  protectSAFE: TypedContractMethod<
    [
      _safe: BigNumberish,
      _liquidationEngine: AddressLike,
      _saviour: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  quitSystem: TypedContractMethod<
    [_safe: BigNumberish, _dst: AddressLike],
    [void],
    "nonpayable"
  >;

  removeSAFE: TypedContractMethod<[_safe: BigNumberish], [void], "nonpayable">;

  safeCan: TypedContractMethod<
    [_owner: AddressLike, _safeId: BigNumberish, _caller: AddressLike],
    [boolean],
    "view"
  >;

  safeData: TypedContractMethod<
    [_safe: BigNumberish],
    [IHaiSafeManager.SAFEDataStructOutput],
    "view"
  >;

  safeEngine: TypedContractMethod<[], [string], "view">;

  "transferCollateral(uint256,address,uint256)": TypedContractMethod<
    [_safe: BigNumberish, _dst: AddressLike, _wad: BigNumberish],
    [void],
    "nonpayable"
  >;

  "transferCollateral(bytes32,uint256,address,uint256)": TypedContractMethod<
    [
      _cType: BytesLike,
      _safe: BigNumberish,
      _dst: AddressLike,
      _wad: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  transferInternalCoins: TypedContractMethod<
    [_safe: BigNumberish, _dst: AddressLike, _rad: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferSAFEOwnership: TypedContractMethod<
    [_safe: BigNumberish, _dst: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptSAFEOwnership"
  ): TypedContractMethod<[_safe: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addSAFE"
  ): TypedContractMethod<[_safe: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allowHandler"
  ): TypedContractMethod<
    [_usr: AddressLike, _ok: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "allowSAFE"
  ): TypedContractMethod<
    [_safe: BigNumberish, _usr: AddressLike, _ok: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "enterSystem"
  ): TypedContractMethod<
    [_src: AddressLike, _safe: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getSafes(address)"
  ): TypedContractMethod<[_usr: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getSafes(address,bytes32)"
  ): TypedContractMethod<
    [_usr: AddressLike, _cType: BytesLike],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSafesData"
  ): TypedContractMethod<
    [_usr: AddressLike],
    [
      [bigint[], string[], string[]] & {
        _safes: bigint[];
        _safeHandlers: string[];
        _cTypes: string[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "handlerCan"
  ): TypedContractMethod<
    [_safeHandler: AddressLike, _caller: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "modifySAFECollateralization"
  ): TypedContractMethod<
    [
      _safe: BigNumberish,
      _deltaCollateral: BigNumberish,
      _deltaDebt: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "moveSAFE"
  ): TypedContractMethod<
    [_safeSrc: BigNumberish, _safeDst: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "openSAFE"
  ): TypedContractMethod<
    [_cType: BytesLike, _usr: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "protectSAFE"
  ): TypedContractMethod<
    [
      _safe: BigNumberish,
      _liquidationEngine: AddressLike,
      _saviour: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "quitSystem"
  ): TypedContractMethod<
    [_safe: BigNumberish, _dst: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeSAFE"
  ): TypedContractMethod<[_safe: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "safeCan"
  ): TypedContractMethod<
    [_owner: AddressLike, _safeId: BigNumberish, _caller: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "safeData"
  ): TypedContractMethod<
    [_safe: BigNumberish],
    [IHaiSafeManager.SAFEDataStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "safeEngine"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferCollateral(uint256,address,uint256)"
  ): TypedContractMethod<
    [_safe: BigNumberish, _dst: AddressLike, _wad: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferCollateral(bytes32,uint256,address,uint256)"
  ): TypedContractMethod<
    [
      _cType: BytesLike,
      _safe: BigNumberish,
      _dst: AddressLike,
      _wad: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferInternalCoins"
  ): TypedContractMethod<
    [_safe: BigNumberish, _dst: AddressLike, _rad: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferSAFEOwnership"
  ): TypedContractMethod<
    [_safe: BigNumberish, _dst: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "AllowHandler"
  ): TypedContractEvent<
    AllowHandlerEvent.InputTuple,
    AllowHandlerEvent.OutputTuple,
    AllowHandlerEvent.OutputObject
  >;
  getEvent(
    key: "AllowSAFE"
  ): TypedContractEvent<
    AllowSAFEEvent.InputTuple,
    AllowSAFEEvent.OutputTuple,
    AllowSAFEEvent.OutputObject
  >;
  getEvent(
    key: "EnterSystem"
  ): TypedContractEvent<
    EnterSystemEvent.InputTuple,
    EnterSystemEvent.OutputTuple,
    EnterSystemEvent.OutputObject
  >;
  getEvent(
    key: "InitiateTransferSAFEOwnership"
  ): TypedContractEvent<
    InitiateTransferSAFEOwnershipEvent.InputTuple,
    InitiateTransferSAFEOwnershipEvent.OutputTuple,
    InitiateTransferSAFEOwnershipEvent.OutputObject
  >;
  getEvent(
    key: "ModifySAFECollateralization"
  ): TypedContractEvent<
    ModifySAFECollateralizationEvent.InputTuple,
    ModifySAFECollateralizationEvent.OutputTuple,
    ModifySAFECollateralizationEvent.OutputObject
  >;
  getEvent(
    key: "MoveSAFE"
  ): TypedContractEvent<
    MoveSAFEEvent.InputTuple,
    MoveSAFEEvent.OutputTuple,
    MoveSAFEEvent.OutputObject
  >;
  getEvent(
    key: "OpenSAFE"
  ): TypedContractEvent<
    OpenSAFEEvent.InputTuple,
    OpenSAFEEvent.OutputTuple,
    OpenSAFEEvent.OutputObject
  >;
  getEvent(
    key: "ProtectSAFE"
  ): TypedContractEvent<
    ProtectSAFEEvent.InputTuple,
    ProtectSAFEEvent.OutputTuple,
    ProtectSAFEEvent.OutputObject
  >;
  getEvent(
    key: "QuitSystem"
  ): TypedContractEvent<
    QuitSystemEvent.InputTuple,
    QuitSystemEvent.OutputTuple,
    QuitSystemEvent.OutputObject
  >;
  getEvent(
    key: "TransferCollateral(address,uint256,address,uint256)"
  ): TypedContractEvent<
    TransferCollateral_address_uint256_address_uint256_Event.InputTuple,
    TransferCollateral_address_uint256_address_uint256_Event.OutputTuple,
    TransferCollateral_address_uint256_address_uint256_Event.OutputObject
  >;
  getEvent(
    key: "TransferCollateral(address,bytes32,uint256,address,uint256)"
  ): TypedContractEvent<
    TransferCollateral_address_bytes32_uint256_address_uint256_Event.InputTuple,
    TransferCollateral_address_bytes32_uint256_address_uint256_Event.OutputTuple,
    TransferCollateral_address_bytes32_uint256_address_uint256_Event.OutputObject
  >;
  getEvent(
    key: "TransferInternalCoins"
  ): TypedContractEvent<
    TransferInternalCoinsEvent.InputTuple,
    TransferInternalCoinsEvent.OutputTuple,
    TransferInternalCoinsEvent.OutputObject
  >;
  getEvent(
    key: "TransferSAFEOwnership"
  ): TypedContractEvent<
    TransferSAFEOwnershipEvent.InputTuple,
    TransferSAFEOwnershipEvent.OutputTuple,
    TransferSAFEOwnershipEvent.OutputObject
  >;

  filters: {
    "AllowHandler(address,address,bool)": TypedContractEvent<
      AllowHandlerEvent.InputTuple,
      AllowHandlerEvent.OutputTuple,
      AllowHandlerEvent.OutputObject
    >;
    AllowHandler: TypedContractEvent<
      AllowHandlerEvent.InputTuple,
      AllowHandlerEvent.OutputTuple,
      AllowHandlerEvent.OutputObject
    >;

    "AllowSAFE(address,uint256,address,bool)": TypedContractEvent<
      AllowSAFEEvent.InputTuple,
      AllowSAFEEvent.OutputTuple,
      AllowSAFEEvent.OutputObject
    >;
    AllowSAFE: TypedContractEvent<
      AllowSAFEEvent.InputTuple,
      AllowSAFEEvent.OutputTuple,
      AllowSAFEEvent.OutputObject
    >;

    "EnterSystem(address,address,uint256)": TypedContractEvent<
      EnterSystemEvent.InputTuple,
      EnterSystemEvent.OutputTuple,
      EnterSystemEvent.OutputObject
    >;
    EnterSystem: TypedContractEvent<
      EnterSystemEvent.InputTuple,
      EnterSystemEvent.OutputTuple,
      EnterSystemEvent.OutputObject
    >;

    "InitiateTransferSAFEOwnership(address,uint256,address)": TypedContractEvent<
      InitiateTransferSAFEOwnershipEvent.InputTuple,
      InitiateTransferSAFEOwnershipEvent.OutputTuple,
      InitiateTransferSAFEOwnershipEvent.OutputObject
    >;
    InitiateTransferSAFEOwnership: TypedContractEvent<
      InitiateTransferSAFEOwnershipEvent.InputTuple,
      InitiateTransferSAFEOwnershipEvent.OutputTuple,
      InitiateTransferSAFEOwnershipEvent.OutputObject
    >;

    "ModifySAFECollateralization(address,uint256,int256,int256)": TypedContractEvent<
      ModifySAFECollateralizationEvent.InputTuple,
      ModifySAFECollateralizationEvent.OutputTuple,
      ModifySAFECollateralizationEvent.OutputObject
    >;
    ModifySAFECollateralization: TypedContractEvent<
      ModifySAFECollateralizationEvent.InputTuple,
      ModifySAFECollateralizationEvent.OutputTuple,
      ModifySAFECollateralizationEvent.OutputObject
    >;

    "MoveSAFE(address,uint256,uint256)": TypedContractEvent<
      MoveSAFEEvent.InputTuple,
      MoveSAFEEvent.OutputTuple,
      MoveSAFEEvent.OutputObject
    >;
    MoveSAFE: TypedContractEvent<
      MoveSAFEEvent.InputTuple,
      MoveSAFEEvent.OutputTuple,
      MoveSAFEEvent.OutputObject
    >;

    "OpenSAFE(address,address,uint256)": TypedContractEvent<
      OpenSAFEEvent.InputTuple,
      OpenSAFEEvent.OutputTuple,
      OpenSAFEEvent.OutputObject
    >;
    OpenSAFE: TypedContractEvent<
      OpenSAFEEvent.InputTuple,
      OpenSAFEEvent.OutputTuple,
      OpenSAFEEvent.OutputObject
    >;

    "ProtectSAFE(address,uint256,address,address)": TypedContractEvent<
      ProtectSAFEEvent.InputTuple,
      ProtectSAFEEvent.OutputTuple,
      ProtectSAFEEvent.OutputObject
    >;
    ProtectSAFE: TypedContractEvent<
      ProtectSAFEEvent.InputTuple,
      ProtectSAFEEvent.OutputTuple,
      ProtectSAFEEvent.OutputObject
    >;

    "QuitSystem(address,uint256,address)": TypedContractEvent<
      QuitSystemEvent.InputTuple,
      QuitSystemEvent.OutputTuple,
      QuitSystemEvent.OutputObject
    >;
    QuitSystem: TypedContractEvent<
      QuitSystemEvent.InputTuple,
      QuitSystemEvent.OutputTuple,
      QuitSystemEvent.OutputObject
    >;

    "TransferCollateral(address,uint256,address,uint256)": TypedContractEvent<
      TransferCollateral_address_uint256_address_uint256_Event.InputTuple,
      TransferCollateral_address_uint256_address_uint256_Event.OutputTuple,
      TransferCollateral_address_uint256_address_uint256_Event.OutputObject
    >;
    "TransferCollateral(address,bytes32,uint256,address,uint256)": TypedContractEvent<
      TransferCollateral_address_bytes32_uint256_address_uint256_Event.InputTuple,
      TransferCollateral_address_bytes32_uint256_address_uint256_Event.OutputTuple,
      TransferCollateral_address_bytes32_uint256_address_uint256_Event.OutputObject
    >;

    "TransferInternalCoins(address,uint256,address,uint256)": TypedContractEvent<
      TransferInternalCoinsEvent.InputTuple,
      TransferInternalCoinsEvent.OutputTuple,
      TransferInternalCoinsEvent.OutputObject
    >;
    TransferInternalCoins: TypedContractEvent<
      TransferInternalCoinsEvent.InputTuple,
      TransferInternalCoinsEvent.OutputTuple,
      TransferInternalCoinsEvent.OutputObject
    >;

    "TransferSAFEOwnership(address,uint256,address)": TypedContractEvent<
      TransferSAFEOwnershipEvent.InputTuple,
      TransferSAFEOwnershipEvent.OutputTuple,
      TransferSAFEOwnershipEvent.OutputObject
    >;
    TransferSAFEOwnership: TypedContractEvent<
      TransferSAFEOwnershipEvent.InputTuple,
      TransferSAFEOwnershipEvent.OutputTuple,
      TransferSAFEOwnershipEvent.OutputObject
    >;
  };
}
