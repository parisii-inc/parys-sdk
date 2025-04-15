import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IParysSafeManager {
    type SAFEDataStruct = {
        owner: string;
        pendingOwner: string;
        safeHandler: string;
        collateralType: BytesLike;
    };
    type SAFEDataStructOutput = [string, string, string, string] & {
        owner: string;
        pendingOwner: string;
        safeHandler: string;
        collateralType: string;
    };
}
export interface IparyssafemanagerInterface extends utils.Interface {
    functions: {
        "acceptSAFEOwnership(uint256)": FunctionFragment;
        "addSAFE(uint256)": FunctionFragment;
        "allowHandler(address,bool)": FunctionFragment;
        "allowSAFE(uint256,address,bool)": FunctionFragment;
        "enterSystem(address,uint256)": FunctionFragment;
        "getSafes(address)": FunctionFragment;
        "getSafes(address,bytes32)": FunctionFragment;
        "getSafesData(address)": FunctionFragment;
        "handlerCan(address,address)": FunctionFragment;
        "isSafeHandler(address)": FunctionFragment;
        "modifySAFECollateralization(uint256,int256,int256)": FunctionFragment;
        "moveSAFE(uint256,uint256)": FunctionFragment;
        "openSAFE(bytes32,address)": FunctionFragment;
        "protectSAFE(uint256,address,address)": FunctionFragment;
        "quitSystem(uint256,address)": FunctionFragment;
        "removeSAFE(uint256)": FunctionFragment;
        "safeCan(address,uint256,address)": FunctionFragment;
        "safeData(uint256)": FunctionFragment;
        "safeEngine()": FunctionFragment;
        "transferCollateral(uint256,address,uint256)": FunctionFragment;
        "transferCollateral(bytes32,uint256,address,uint256)": FunctionFragment;
        "transferInternalCoins(uint256,address,uint256)": FunctionFragment;
        "transferSAFEOwnership(uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptSAFEOwnership" | "addSAFE" | "allowHandler" | "allowSAFE" | "enterSystem" | "getSafes(address)" | "getSafes(address,bytes32)" | "getSafesData" | "handlerCan" | "isSafeHandler" | "modifySAFECollateralization" | "moveSAFE" | "openSAFE" | "protectSAFE" | "quitSystem" | "removeSAFE" | "safeCan" | "safeData" | "safeEngine" | "transferCollateral(uint256,address,uint256)" | "transferCollateral(bytes32,uint256,address,uint256)" | "transferInternalCoins" | "transferSAFEOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptSAFEOwnership", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "addSAFE", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowHandler", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "allowSAFE", values: [BigNumberish, string, boolean]): string;
    encodeFunctionData(functionFragment: "enterSystem", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSafes(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "getSafes(address,bytes32)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getSafesData", values: [string]): string;
    encodeFunctionData(functionFragment: "handlerCan", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isSafeHandler", values: [string]): string;
    encodeFunctionData(functionFragment: "modifySAFECollateralization", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "moveSAFE", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "openSAFE", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "protectSAFE", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "quitSystem", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "removeSAFE", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeCan", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "safeData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferCollateral(uint256,address,uint256)", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferCollateral(bytes32,uint256,address,uint256)", values: [BytesLike, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferInternalCoins", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferSAFEOwnership", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "acceptSAFEOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addSAFE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowSAFE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enterSystem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSafes(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSafes(address,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSafesData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "handlerCan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSafeHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifySAFECollateralization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "moveSAFE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openSAFE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protectSAFE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quitSystem", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeSAFE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeCan", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferCollateral(uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferCollateral(bytes32,uint256,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferInternalCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferSAFEOwnership", data: BytesLike): Result;
    events: {
        "AllowHandler(address,address,bool)": EventFragment;
        "AllowSAFE(address,uint256,address,bool)": EventFragment;
        "EnterSystem(address,address,uint256)": EventFragment;
        "InitiateTransferSAFEOwnership(address,uint256,address)": EventFragment;
        "ModifySAFECollateralization(address,uint256,int256,int256)": EventFragment;
        "MoveSAFE(address,uint256,uint256)": EventFragment;
        "OpenSAFE(address,address,uint256)": EventFragment;
        "ProtectSAFE(address,uint256,address,address)": EventFragment;
        "QuitSystem(address,uint256,address)": EventFragment;
        "TransferCollateral(address,uint256,address,uint256)": EventFragment;
        "TransferCollateral(address,bytes32,uint256,address,uint256)": EventFragment;
        "TransferInternalCoins(address,uint256,address,uint256)": EventFragment;
        "TransferSAFEOwnership(address,uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AllowHandler"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AllowSAFE"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EnterSystem"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InitiateTransferSAFEOwnership"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifySAFECollateralization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MoveSAFE"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenSAFE"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtectSAFE"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "QuitSystem"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferCollateral(address,uint256,address,uint256)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferCollateral(address,bytes32,uint256,address,uint256)"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferInternalCoins"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSAFEOwnership"): EventFragment;
}
export interface AllowHandlerEventObject {
    _sender: string;
    _usr: string;
    _ok: boolean;
}
export type AllowHandlerEvent = TypedEvent<[
    string,
    string,
    boolean
], AllowHandlerEventObject>;
export type AllowHandlerEventFilter = TypedEventFilter<AllowHandlerEvent>;
export interface AllowSAFEEventObject {
    _sender: string;
    _safe: BigNumber;
    _usr: string;
    _ok: boolean;
}
export type AllowSAFEEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    boolean
], AllowSAFEEventObject>;
export type AllowSAFEEventFilter = TypedEventFilter<AllowSAFEEvent>;
export interface EnterSystemEventObject {
    _sender: string;
    _src: string;
    _safe: BigNumber;
}
export type EnterSystemEvent = TypedEvent<[
    string,
    string,
    BigNumber
], EnterSystemEventObject>;
export type EnterSystemEventFilter = TypedEventFilter<EnterSystemEvent>;
export interface InitiateTransferSAFEOwnershipEventObject {
    _sender: string;
    _safe: BigNumber;
    _dst: string;
}
export type InitiateTransferSAFEOwnershipEvent = TypedEvent<[
    string,
    BigNumber,
    string
], InitiateTransferSAFEOwnershipEventObject>;
export type InitiateTransferSAFEOwnershipEventFilter = TypedEventFilter<InitiateTransferSAFEOwnershipEvent>;
export interface ModifySAFECollateralizationEventObject {
    _sender: string;
    _safe: BigNumber;
    _deltaCollateral: BigNumber;
    _deltaDebt: BigNumber;
}
export type ModifySAFECollateralizationEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], ModifySAFECollateralizationEventObject>;
export type ModifySAFECollateralizationEventFilter = TypedEventFilter<ModifySAFECollateralizationEvent>;
export interface MoveSAFEEventObject {
    _sender: string;
    _safeSrc: BigNumber;
    _safeDst: BigNumber;
}
export type MoveSAFEEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], MoveSAFEEventObject>;
export type MoveSAFEEventFilter = TypedEventFilter<MoveSAFEEvent>;
export interface OpenSAFEEventObject {
    _sender: string;
    _own: string;
    _safe: BigNumber;
}
export type OpenSAFEEvent = TypedEvent<[
    string,
    string,
    BigNumber
], OpenSAFEEventObject>;
export type OpenSAFEEventFilter = TypedEventFilter<OpenSAFEEvent>;
export interface ProtectSAFEEventObject {
    _sender: string;
    _safe: BigNumber;
    _liquidationEngine: string;
    _saviour: string;
}
export type ProtectSAFEEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    string
], ProtectSAFEEventObject>;
export type ProtectSAFEEventFilter = TypedEventFilter<ProtectSAFEEvent>;
export interface QuitSystemEventObject {
    _sender: string;
    _safe: BigNumber;
    _dst: string;
}
export type QuitSystemEvent = TypedEvent<[
    string,
    BigNumber,
    string
], QuitSystemEventObject>;
export type QuitSystemEventFilter = TypedEventFilter<QuitSystemEvent>;
export interface TransferCollateral_address_uint256_address_uint256_EventObject {
    _sender: string;
    _safe: BigNumber;
    _dst: string;
    _wad: BigNumber;
}
export type TransferCollateral_address_uint256_address_uint256_Event = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], TransferCollateral_address_uint256_address_uint256_EventObject>;
export type TransferCollateral_address_uint256_address_uint256_EventFilter = TypedEventFilter<TransferCollateral_address_uint256_address_uint256_Event>;
export interface TransferCollateral_address_bytes32_uint256_address_uint256_EventObject {
    _sender: string;
    _cType: string;
    _safe: BigNumber;
    _dst: string;
    _wad: BigNumber;
}
export type TransferCollateral_address_bytes32_uint256_address_uint256_Event = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    BigNumber
], TransferCollateral_address_bytes32_uint256_address_uint256_EventObject>;
export type TransferCollateral_address_bytes32_uint256_address_uint256_EventFilter = TypedEventFilter<TransferCollateral_address_bytes32_uint256_address_uint256_Event>;
export interface TransferInternalCoinsEventObject {
    _sender: string;
    _safe: BigNumber;
    _dst: string;
    _rad: BigNumber;
}
export type TransferInternalCoinsEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber
], TransferInternalCoinsEventObject>;
export type TransferInternalCoinsEventFilter = TypedEventFilter<TransferInternalCoinsEvent>;
export interface TransferSAFEOwnershipEventObject {
    _sender: string;
    _safe: BigNumber;
    _dst: string;
}
export type TransferSAFEOwnershipEvent = TypedEvent<[
    string,
    BigNumber,
    string
], TransferSAFEOwnershipEventObject>;
export type TransferSAFEOwnershipEventFilter = TypedEventFilter<TransferSAFEOwnershipEvent>;
export interface Iparyssafemanager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IparyssafemanagerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        acceptSAFEOwnership(_safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        addSAFE(_safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        allowHandler(_usr: string, _ok: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        allowSAFE(_safe: BigNumberish, _usr: string, _ok: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        enterSystem(_src: string, _safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "getSafes(address)"(_usr: string, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            _safes: BigNumber[];
        }>;
        "getSafes(address,bytes32)"(_usr: string, _cType: BytesLike, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            _safes: BigNumber[];
        }>;
        getSafesData(_usr: string, overrides?: CallOverrides): Promise<[
            BigNumber[],
            string[],
            string[]
        ] & {
            _safes: BigNumber[];
            _safeHandlers: string[];
            _cTypes: string[];
        }>;
        handlerCan(_safeHandler: string, _caller: string, overrides?: CallOverrides): Promise<[boolean] & {
            _ok: boolean;
        }>;
        isSafeHandler(_handler: string, overrides?: CallOverrides): Promise<[boolean]>;
        modifySAFECollateralization(_safe: BigNumberish, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        moveSAFE(_safeSrc: BigNumberish, _safeDst: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        openSAFE(_cType: BytesLike, _usr: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        protectSAFE(_safe: BigNumberish, _liquidationEngine: string, _saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        quitSystem(_safe: BigNumberish, _dst: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeSAFE(_safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        safeCan(_owner: string, _safeId: BigNumberish, _caller: string, overrides?: CallOverrides): Promise<[boolean] & {
            _ok: boolean;
        }>;
        safeData(_safe: BigNumberish, overrides?: CallOverrides): Promise<[
            IParysSafeManager.SAFEDataStructOutput
        ] & {
            _sData: IParysSafeManager.SAFEDataStructOutput;
        }>;
        safeEngine(overrides?: CallOverrides): Promise<[string] & {
            _safeEngine: string;
        }>;
        "transferCollateral(uint256,address,uint256)"(_safe: BigNumberish, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "transferCollateral(bytes32,uint256,address,uint256)"(_cType: BytesLike, _safe: BigNumberish, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferInternalCoins(_safe: BigNumberish, _dst: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferSAFEOwnership(_safe: BigNumberish, _dst: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    acceptSAFEOwnership(_safe: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    addSAFE(_safe: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    allowHandler(_usr: string, _ok: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    allowSAFE(_safe: BigNumberish, _usr: string, _ok: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    enterSystem(_src: string, _safe: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "getSafes(address)"(_usr: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    "getSafes(address,bytes32)"(_usr: string, _cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber[]>;
    getSafesData(_usr: string, overrides?: CallOverrides): Promise<[
        BigNumber[],
        string[],
        string[]
    ] & {
        _safes: BigNumber[];
        _safeHandlers: string[];
        _cTypes: string[];
    }>;
    handlerCan(_safeHandler: string, _caller: string, overrides?: CallOverrides): Promise<boolean>;
    isSafeHandler(_handler: string, overrides?: CallOverrides): Promise<boolean>;
    modifySAFECollateralization(_safe: BigNumberish, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    moveSAFE(_safeSrc: BigNumberish, _safeDst: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    openSAFE(_cType: BytesLike, _usr: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    protectSAFE(_safe: BigNumberish, _liquidationEngine: string, _saviour: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    quitSystem(_safe: BigNumberish, _dst: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeSAFE(_safe: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    safeCan(_owner: string, _safeId: BigNumberish, _caller: string, overrides?: CallOverrides): Promise<boolean>;
    safeData(_safe: BigNumberish, overrides?: CallOverrides): Promise<IParysSafeManager.SAFEDataStructOutput>;
    safeEngine(overrides?: CallOverrides): Promise<string>;
    "transferCollateral(uint256,address,uint256)"(_safe: BigNumberish, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "transferCollateral(bytes32,uint256,address,uint256)"(_cType: BytesLike, _safe: BigNumberish, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferInternalCoins(_safe: BigNumberish, _dst: string, _rad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferSAFEOwnership(_safe: BigNumberish, _dst: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptSAFEOwnership(_safe: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addSAFE(_safe: BigNumberish, overrides?: CallOverrides): Promise<void>;
        allowHandler(_usr: string, _ok: boolean, overrides?: CallOverrides): Promise<void>;
        allowSAFE(_safe: BigNumberish, _usr: string, _ok: boolean, overrides?: CallOverrides): Promise<void>;
        enterSystem(_src: string, _safe: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "getSafes(address)"(_usr: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        "getSafes(address,bytes32)"(_usr: string, _cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber[]>;
        getSafesData(_usr: string, overrides?: CallOverrides): Promise<[
            BigNumber[],
            string[],
            string[]
        ] & {
            _safes: BigNumber[];
            _safeHandlers: string[];
            _cTypes: string[];
        }>;
        handlerCan(_safeHandler: string, _caller: string, overrides?: CallOverrides): Promise<boolean>;
        isSafeHandler(_handler: string, overrides?: CallOverrides): Promise<boolean>;
        modifySAFECollateralization(_safe: BigNumberish, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        moveSAFE(_safeSrc: BigNumberish, _safeDst: BigNumberish, overrides?: CallOverrides): Promise<void>;
        openSAFE(_cType: BytesLike, _usr: string, overrides?: CallOverrides): Promise<BigNumber>;
        protectSAFE(_safe: BigNumberish, _liquidationEngine: string, _saviour: string, overrides?: CallOverrides): Promise<void>;
        quitSystem(_safe: BigNumberish, _dst: string, overrides?: CallOverrides): Promise<void>;
        removeSAFE(_safe: BigNumberish, overrides?: CallOverrides): Promise<void>;
        safeCan(_owner: string, _safeId: BigNumberish, _caller: string, overrides?: CallOverrides): Promise<boolean>;
        safeData(_safe: BigNumberish, overrides?: CallOverrides): Promise<IParysSafeManager.SAFEDataStructOutput>;
        safeEngine(overrides?: CallOverrides): Promise<string>;
        "transferCollateral(uint256,address,uint256)"(_safe: BigNumberish, _dst: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "transferCollateral(bytes32,uint256,address,uint256)"(_cType: BytesLike, _safe: BigNumberish, _dst: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferInternalCoins(_safe: BigNumberish, _dst: string, _rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferSAFEOwnership(_safe: BigNumberish, _dst: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AllowHandler(address,address,bool)"(_sender?: string | null, _usr?: null, _ok?: null): AllowHandlerEventFilter;
        AllowHandler(_sender?: string | null, _usr?: null, _ok?: null): AllowHandlerEventFilter;
        "AllowSAFE(address,uint256,address,bool)"(_sender?: string | null, _safe?: BigNumberish | null, _usr?: null, _ok?: null): AllowSAFEEventFilter;
        AllowSAFE(_sender?: string | null, _safe?: BigNumberish | null, _usr?: null, _ok?: null): AllowSAFEEventFilter;
        "EnterSystem(address,address,uint256)"(_sender?: string | null, _src?: null, _safe?: BigNumberish | null): EnterSystemEventFilter;
        EnterSystem(_sender?: string | null, _src?: null, _safe?: BigNumberish | null): EnterSystemEventFilter;
        "InitiateTransferSAFEOwnership(address,uint256,address)"(_sender?: string | null, _safe?: BigNumberish | null, _dst?: null): InitiateTransferSAFEOwnershipEventFilter;
        InitiateTransferSAFEOwnership(_sender?: string | null, _safe?: BigNumberish | null, _dst?: null): InitiateTransferSAFEOwnershipEventFilter;
        "ModifySAFECollateralization(address,uint256,int256,int256)"(_sender?: string | null, _safe?: BigNumberish | null, _deltaCollateral?: null, _deltaDebt?: null): ModifySAFECollateralizationEventFilter;
        ModifySAFECollateralization(_sender?: string | null, _safe?: BigNumberish | null, _deltaCollateral?: null, _deltaDebt?: null): ModifySAFECollateralizationEventFilter;
        "MoveSAFE(address,uint256,uint256)"(_sender?: string | null, _safeSrc?: BigNumberish | null, _safeDst?: BigNumberish | null): MoveSAFEEventFilter;
        MoveSAFE(_sender?: string | null, _safeSrc?: BigNumberish | null, _safeDst?: BigNumberish | null): MoveSAFEEventFilter;
        "OpenSAFE(address,address,uint256)"(_sender?: string | null, _own?: string | null, _safe?: BigNumberish | null): OpenSAFEEventFilter;
        OpenSAFE(_sender?: string | null, _own?: string | null, _safe?: BigNumberish | null): OpenSAFEEventFilter;
        "ProtectSAFE(address,uint256,address,address)"(_sender?: string | null, _safe?: BigNumberish | null, _liquidationEngine?: null, _saviour?: null): ProtectSAFEEventFilter;
        ProtectSAFE(_sender?: string | null, _safe?: BigNumberish | null, _liquidationEngine?: null, _saviour?: null): ProtectSAFEEventFilter;
        "QuitSystem(address,uint256,address)"(_sender?: string | null, _safe?: BigNumberish | null, _dst?: null): QuitSystemEventFilter;
        QuitSystem(_sender?: string | null, _safe?: BigNumberish | null, _dst?: null): QuitSystemEventFilter;
        "TransferCollateral(address,uint256,address,uint256)"(_sender?: string | null, _safe?: BigNumberish | null, _dst?: null, _wad?: null): TransferCollateral_address_uint256_address_uint256_EventFilter;
        "TransferCollateral(address,bytes32,uint256,address,uint256)"(_sender?: string | null, _cType?: null, _safe?: BigNumberish | null, _dst?: null, _wad?: null): TransferCollateral_address_bytes32_uint256_address_uint256_EventFilter;
        "TransferInternalCoins(address,uint256,address,uint256)"(_sender?: string | null, _safe?: BigNumberish | null, _dst?: null, _rad?: null): TransferInternalCoinsEventFilter;
        TransferInternalCoins(_sender?: string | null, _safe?: BigNumberish | null, _dst?: null, _rad?: null): TransferInternalCoinsEventFilter;
        "TransferSAFEOwnership(address,uint256,address)"(_sender?: string | null, _safe?: BigNumberish | null, _dst?: null): TransferSAFEOwnershipEventFilter;
        TransferSAFEOwnership(_sender?: string | null, _safe?: BigNumberish | null, _dst?: null): TransferSAFEOwnershipEventFilter;
    };
    estimateGas: {
        acceptSAFEOwnership(_safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        addSAFE(_safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        allowHandler(_usr: string, _ok: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        allowSAFE(_safe: BigNumberish, _usr: string, _ok: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        enterSystem(_src: string, _safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "getSafes(address)"(_usr: string, overrides?: CallOverrides): Promise<BigNumber>;
        "getSafes(address,bytes32)"(_usr: string, _cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getSafesData(_usr: string, overrides?: CallOverrides): Promise<BigNumber>;
        handlerCan(_safeHandler: string, _caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        isSafeHandler(_handler: string, overrides?: CallOverrides): Promise<BigNumber>;
        modifySAFECollateralization(_safe: BigNumberish, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        moveSAFE(_safeSrc: BigNumberish, _safeDst: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        openSAFE(_cType: BytesLike, _usr: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        protectSAFE(_safe: BigNumberish, _liquidationEngine: string, _saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        quitSystem(_safe: BigNumberish, _dst: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeSAFE(_safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        safeCan(_owner: string, _safeId: BigNumberish, _caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        safeData(_safe: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        safeEngine(overrides?: CallOverrides): Promise<BigNumber>;
        "transferCollateral(uint256,address,uint256)"(_safe: BigNumberish, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "transferCollateral(bytes32,uint256,address,uint256)"(_cType: BytesLike, _safe: BigNumberish, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferInternalCoins(_safe: BigNumberish, _dst: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferSAFEOwnership(_safe: BigNumberish, _dst: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptSAFEOwnership(_safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        addSAFE(_safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        allowHandler(_usr: string, _ok: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        allowSAFE(_safe: BigNumberish, _usr: string, _ok: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        enterSystem(_src: string, _safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "getSafes(address)"(_usr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getSafes(address,bytes32)"(_usr: string, _cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSafesData(_usr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        handlerCan(_safeHandler: string, _caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSafeHandler(_handler: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifySAFECollateralization(_safe: BigNumberish, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        moveSAFE(_safeSrc: BigNumberish, _safeDst: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        openSAFE(_cType: BytesLike, _usr: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        protectSAFE(_safe: BigNumberish, _liquidationEngine: string, _saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        quitSystem(_safe: BigNumberish, _dst: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeSAFE(_safe: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        safeCan(_owner: string, _safeId: BigNumberish, _caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeData(_safe: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "transferCollateral(uint256,address,uint256)"(_safe: BigNumberish, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "transferCollateral(bytes32,uint256,address,uint256)"(_cType: BytesLike, _safe: BigNumberish, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferInternalCoins(_safe: BigNumberish, _dst: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferSAFEOwnership(_safe: BigNumberish, _dst: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
