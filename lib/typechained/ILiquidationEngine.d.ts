import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace ILiquidationEngine {
    type LiquidationEngineCollateralParamsStruct = {
        collateralAuctionHouse: string;
        liquidationPenalty: BigNumberish;
        liquidationQuantity: BigNumberish;
    };
    type LiquidationEngineCollateralParamsStructOutput = [
        string,
        BigNumber,
        BigNumber
    ] & {
        collateralAuctionHouse: string;
        liquidationPenalty: BigNumber;
        liquidationQuantity: BigNumber;
    };
    type LiquidationEngineParamsStruct = {
        onAuctionSystemCoinLimit: BigNumberish;
        saviourGasLimit: BigNumberish;
    };
    type LiquidationEngineParamsStructOutput = [BigNumber, BigNumber] & {
        onAuctionSystemCoinLimit: BigNumber;
        saviourGasLimit: BigNumber;
    };
}
export interface ILiquidationEngineInterface extends utils.Interface {
    functions: {
        "_cParams(bytes32)": FunctionFragment;
        "_params()": FunctionFragment;
        "accountingEngine()": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "cParams(bytes32)": FunctionFragment;
        "chosenSAFESaviour(bytes32,address)": FunctionFragment;
        "collateralList()": FunctionFragment;
        "connectSAFESaviour(address)": FunctionFragment;
        "contractEnabled()": FunctionFragment;
        "currentOnAuctionSystemCoins()": FunctionFragment;
        "disableContract()": FunctionFragment;
        "disconnectSAFESaviour(address)": FunctionFragment;
        "getLimitAdjustedDebtToCover(bytes32,address)": FunctionFragment;
        "initializeCollateralType(bytes32,bytes)": FunctionFragment;
        "liquidateSAFE(bytes32,address)": FunctionFragment;
        "modifyParameters(bytes32,bytes32,bytes)": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "params()": FunctionFragment;
        "protectSAFE(bytes32,address,address)": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "removeCoinsFromAuction(uint256)": FunctionFragment;
        "safeEngine()": FunctionFragment;
        "safeSaviours(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_cParams" | "_params" | "accountingEngine" | "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "cParams" | "chosenSAFESaviour" | "collateralList" | "connectSAFESaviour" | "contractEnabled" | "currentOnAuctionSystemCoins" | "disableContract" | "disconnectSAFESaviour" | "getLimitAdjustedDebtToCover" | "initializeCollateralType" | "liquidateSAFE" | "modifyParameters(bytes32,bytes32,bytes)" | "modifyParameters(bytes32,bytes)" | "params" | "protectSAFE" | "removeAuthorization" | "removeCoinsFromAuction" | "safeEngine" | "safeSaviours"): FunctionFragment;
    encodeFunctionData(functionFragment: "_cParams", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "_params", values?: undefined): string;
    encodeFunctionData(functionFragment: "accountingEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "cParams", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "chosenSAFESaviour", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "collateralList", values?: undefined): string;
    encodeFunctionData(functionFragment: "connectSAFESaviour", values: [string]): string;
    encodeFunctionData(functionFragment: "contractEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentOnAuctionSystemCoins", values?: undefined): string;
    encodeFunctionData(functionFragment: "disableContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "disconnectSAFESaviour", values: [string]): string;
    encodeFunctionData(functionFragment: "getLimitAdjustedDebtToCover", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initializeCollateralType", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "liquidateSAFE", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "modifyParameters(bytes32,bytes32,bytes)", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "modifyParameters(bytes32,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "params", values?: undefined): string;
    encodeFunctionData(functionFragment: "protectSAFE", values: [BytesLike, string, string]): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "removeCoinsFromAuction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "safeSaviours", values: [string]): string;
    decodeFunctionResult(functionFragment: "_cParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accountingEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chosenSAFESaviour", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "connectSAFESaviour", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentOnAuctionSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disconnectSAFESaviour", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLimitAdjustedDebtToCover", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeCollateralType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateSAFE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters(bytes32,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters(bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protectSAFE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeCoinsFromAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeSaviours", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "ConnectSAFESaviour(address)": EventFragment;
        "DisableContract()": EventFragment;
        "DisconnectSAFESaviour(address)": EventFragment;
        "FailedSAFESave(bytes)": EventFragment;
        "InitializeCollateralType(bytes32)": EventFragment;
        "Liquidate(bytes32,address,uint256,uint256,uint256,address,uint256)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "ProtectSAFE(bytes32,address,address)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "SaveSAFE(bytes32,address,uint256)": EventFragment;
        "UpdateCurrentOnAuctionSystemCoins(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConnectSAFESaviour"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisableContract"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisconnectSAFESaviour"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FailedSAFESave"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InitializeCollateralType"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Liquidate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProtectSAFE"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SaveSAFE"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateCurrentOnAuctionSystemCoins"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface ConnectSAFESaviourEventObject {
    _saviour: string;
}
export type ConnectSAFESaviourEvent = TypedEvent<[
    string
], ConnectSAFESaviourEventObject>;
export type ConnectSAFESaviourEventFilter = TypedEventFilter<ConnectSAFESaviourEvent>;
export interface DisableContractEventObject {
}
export type DisableContractEvent = TypedEvent<[], DisableContractEventObject>;
export type DisableContractEventFilter = TypedEventFilter<DisableContractEvent>;
export interface DisconnectSAFESaviourEventObject {
    _saviour: string;
}
export type DisconnectSAFESaviourEvent = TypedEvent<[
    string
], DisconnectSAFESaviourEventObject>;
export type DisconnectSAFESaviourEventFilter = TypedEventFilter<DisconnectSAFESaviourEvent>;
export interface FailedSAFESaveEventObject {
    _failReason: string;
}
export type FailedSAFESaveEvent = TypedEvent<[
    string
], FailedSAFESaveEventObject>;
export type FailedSAFESaveEventFilter = TypedEventFilter<FailedSAFESaveEvent>;
export interface InitializeCollateralTypeEventObject {
    _cType: string;
}
export type InitializeCollateralTypeEvent = TypedEvent<[
    string
], InitializeCollateralTypeEventObject>;
export type InitializeCollateralTypeEventFilter = TypedEventFilter<InitializeCollateralTypeEvent>;
export interface LiquidateEventObject {
    _cType: string;
    _safe: string;
    _collateralAmount: BigNumber;
    _debtAmount: BigNumber;
    _amountToRaise: BigNumber;
    _collateralAuctioneer: string;
    _auctionId: BigNumber;
}
export type LiquidateEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber
], LiquidateEventObject>;
export type LiquidateEventFilter = TypedEventFilter<LiquidateEvent>;
export interface ModifyParametersEventObject {
    _param: string;
    _cType: string;
    _data: string;
}
export type ModifyParametersEvent = TypedEvent<[
    string,
    string,
    string
], ModifyParametersEventObject>;
export type ModifyParametersEventFilter = TypedEventFilter<ModifyParametersEvent>;
export interface ProtectSAFEEventObject {
    _cType: string;
    _safe: string;
    _saviour: string;
}
export type ProtectSAFEEvent = TypedEvent<[
    string,
    string,
    string
], ProtectSAFEEventObject>;
export type ProtectSAFEEventFilter = TypedEventFilter<ProtectSAFEEvent>;
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface SaveSAFEEventObject {
    _cType: string;
    _safe: string;
    _collateralAddedOrDebtRepaid: BigNumber;
}
export type SaveSAFEEvent = TypedEvent<[
    string,
    string,
    BigNumber
], SaveSAFEEventObject>;
export type SaveSAFEEventFilter = TypedEventFilter<SaveSAFEEvent>;
export interface UpdateCurrentOnAuctionSystemCoinsEventObject {
    _currentOnAuctionSystemCoins: BigNumber;
}
export type UpdateCurrentOnAuctionSystemCoinsEvent = TypedEvent<[
    BigNumber
], UpdateCurrentOnAuctionSystemCoinsEventObject>;
export type UpdateCurrentOnAuctionSystemCoinsEventFilter = TypedEventFilter<UpdateCurrentOnAuctionSystemCoinsEvent>;
export interface ILiquidationEngine extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILiquidationEngineInterface;
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
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber
        ] & {
            _collateralAuctionHouse: string;
            _liquidationPenalty: BigNumber;
            _liquidationQuantity: BigNumber;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _onAuctionSystemCoinLimit: BigNumber;
            _saviourGasLimit: BigNumber;
        }>;
        accountingEngine(overrides?: CallOverrides): Promise<[string] & {
            _accountingEngine: string;
        }>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _authorized: boolean;
        }>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<[string[]] & {
            _accounts: string[];
        }>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            ILiquidationEngine.LiquidationEngineCollateralParamsStructOutput
        ] & {
            _liqEngineCParams: ILiquidationEngine.LiquidationEngineCollateralParamsStructOutput;
        }>;
        chosenSAFESaviour(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<[string] & {
            _saviour: string;
        }>;
        collateralList(overrides?: CallOverrides): Promise<[string[]] & {
            __collateralList: string[];
        }>;
        connectSAFESaviour(_saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        contractEnabled(overrides?: CallOverrides): Promise<[boolean] & {
            _contractEnabled: boolean;
        }>;
        currentOnAuctionSystemCoins(overrides?: CallOverrides): Promise<[BigNumber] & {
            _currentOnAuctionSystemCoins: BigNumber;
        }>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        disconnectSAFESaviour(_saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getLimitAdjustedDebtToCover(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _wad: BigNumber;
        }>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        liquidateSAFE(_cType: BytesLike, _safe: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        params(overrides?: CallOverrides): Promise<[
            ILiquidationEngine.LiquidationEngineParamsStructOutput
        ] & {
            _liqEngineParams: ILiquidationEngine.LiquidationEngineParamsStructOutput;
        }>;
        protectSAFE(_cType: BytesLike, _safe: string, _saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeCoinsFromAuction(_rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<[string] & {
            _safeEngine: string;
        }>;
        safeSaviours(_saviour: string, overrides?: CallOverrides): Promise<[boolean] & {
            _canSave: boolean;
        }>;
    };
    _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber
    ] & {
        _collateralAuctionHouse: string;
        _liquidationPenalty: BigNumber;
        _liquidationQuantity: BigNumber;
    }>;
    _params(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        _onAuctionSystemCoinLimit: BigNumber;
        _saviourGasLimit: BigNumber;
    }>;
    accountingEngine(overrides?: CallOverrides): Promise<string>;
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<ILiquidationEngine.LiquidationEngineCollateralParamsStructOutput>;
    chosenSAFESaviour(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<string>;
    collateralList(overrides?: CallOverrides): Promise<string[]>;
    connectSAFESaviour(_saviour: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    contractEnabled(overrides?: CallOverrides): Promise<boolean>;
    currentOnAuctionSystemCoins(overrides?: CallOverrides): Promise<BigNumber>;
    disableContract(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    disconnectSAFESaviour(_saviour: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getLimitAdjustedDebtToCover(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<BigNumber>;
    initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    liquidateSAFE(_cType: BytesLike, _safe: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    params(overrides?: CallOverrides): Promise<ILiquidationEngine.LiquidationEngineParamsStructOutput>;
    protectSAFE(_cType: BytesLike, _safe: string, _saviour: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeCoinsFromAuction(_rad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    safeEngine(overrides?: CallOverrides): Promise<string>;
    safeSaviours(_saviour: string, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber
        ] & {
            _collateralAuctionHouse: string;
            _liquidationPenalty: BigNumber;
            _liquidationQuantity: BigNumber;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _onAuctionSystemCoinLimit: BigNumber;
            _saviourGasLimit: BigNumber;
        }>;
        accountingEngine(overrides?: CallOverrides): Promise<string>;
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<ILiquidationEngine.LiquidationEngineCollateralParamsStructOutput>;
        chosenSAFESaviour(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<string>;
        collateralList(overrides?: CallOverrides): Promise<string[]>;
        connectSAFESaviour(_saviour: string, overrides?: CallOverrides): Promise<void>;
        contractEnabled(overrides?: CallOverrides): Promise<boolean>;
        currentOnAuctionSystemCoins(overrides?: CallOverrides): Promise<BigNumber>;
        disableContract(overrides?: CallOverrides): Promise<void>;
        disconnectSAFESaviour(_saviour: string, overrides?: CallOverrides): Promise<void>;
        getLimitAdjustedDebtToCover(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: CallOverrides): Promise<void>;
        liquidateSAFE(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        params(overrides?: CallOverrides): Promise<ILiquidationEngine.LiquidationEngineParamsStructOutput>;
        protectSAFE(_cType: BytesLike, _safe: string, _saviour: string, overrides?: CallOverrides): Promise<void>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        removeCoinsFromAuction(_rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        safeEngine(overrides?: CallOverrides): Promise<string>;
        safeSaviours(_saviour: string, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "ConnectSAFESaviour(address)"(_saviour?: null): ConnectSAFESaviourEventFilter;
        ConnectSAFESaviour(_saviour?: null): ConnectSAFESaviourEventFilter;
        "DisableContract()"(): DisableContractEventFilter;
        DisableContract(): DisableContractEventFilter;
        "DisconnectSAFESaviour(address)"(_saviour?: null): DisconnectSAFESaviourEventFilter;
        DisconnectSAFESaviour(_saviour?: null): DisconnectSAFESaviourEventFilter;
        "FailedSAFESave(bytes)"(_failReason?: null): FailedSAFESaveEventFilter;
        FailedSAFESave(_failReason?: null): FailedSAFESaveEventFilter;
        "InitializeCollateralType(bytes32)"(_cType?: null): InitializeCollateralTypeEventFilter;
        InitializeCollateralType(_cType?: null): InitializeCollateralTypeEventFilter;
        "Liquidate(bytes32,address,uint256,uint256,uint256,address,uint256)"(_cType?: BytesLike | null, _safe?: string | null, _collateralAmount?: null, _debtAmount?: null, _amountToRaise?: null, _collateralAuctioneer?: null, _auctionId?: null): LiquidateEventFilter;
        Liquidate(_cType?: BytesLike | null, _safe?: string | null, _collateralAmount?: null, _debtAmount?: null, _amountToRaise?: null, _collateralAuctioneer?: null, _auctionId?: null): LiquidateEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "ProtectSAFE(bytes32,address,address)"(_cType?: BytesLike | null, _safe?: string | null, _saviour?: null): ProtectSAFEEventFilter;
        ProtectSAFE(_cType?: BytesLike | null, _safe?: string | null, _saviour?: null): ProtectSAFEEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "SaveSAFE(bytes32,address,uint256)"(_cType?: BytesLike | null, _safe?: string | null, _collateralAddedOrDebtRepaid?: null): SaveSAFEEventFilter;
        SaveSAFE(_cType?: BytesLike | null, _safe?: string | null, _collateralAddedOrDebtRepaid?: null): SaveSAFEEventFilter;
        "UpdateCurrentOnAuctionSystemCoins(uint256)"(_currentOnAuctionSystemCoins?: null): UpdateCurrentOnAuctionSystemCoinsEventFilter;
        UpdateCurrentOnAuctionSystemCoins(_currentOnAuctionSystemCoins?: null): UpdateCurrentOnAuctionSystemCoinsEventFilter;
    };
    estimateGas: {
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        _params(overrides?: CallOverrides): Promise<BigNumber>;
        accountingEngine(overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        chosenSAFESaviour(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        collateralList(overrides?: CallOverrides): Promise<BigNumber>;
        connectSAFESaviour(_saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        contractEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        currentOnAuctionSystemCoins(overrides?: CallOverrides): Promise<BigNumber>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        disconnectSAFESaviour(_saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getLimitAdjustedDebtToCover(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        liquidateSAFE(_cType: BytesLike, _safe: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        params(overrides?: CallOverrides): Promise<BigNumber>;
        protectSAFE(_cType: BytesLike, _safe: string, _saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeCoinsFromAuction(_rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        safeEngine(overrides?: CallOverrides): Promise<BigNumber>;
        safeSaviours(_saviour: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        accountingEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chosenSAFESaviour(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        connectSAFESaviour(_saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        contractEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentOnAuctionSystemCoins(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        disconnectSAFESaviour(_saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getLimitAdjustedDebtToCover(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        liquidateSAFE(_cType: BytesLike, _safe: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        protectSAFE(_cType: BytesLike, _safe: string, _saviour: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeCoinsFromAuction(_rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeSaviours(_saviour: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
