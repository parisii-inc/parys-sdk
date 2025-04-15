import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace ITaxCollector {
    type TaxCollectorParamsStruct = {
        primaryTaxReceiver: string;
        globalStabilityFee: BigNumberish;
        maxStabilityFeeRange: BigNumberish;
        maxSecondaryReceivers: BigNumberish;
    };
    type TaxCollectorParamsStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        primaryTaxReceiver: string;
        globalStabilityFee: BigNumber;
        maxStabilityFeeRange: BigNumber;
        maxSecondaryReceivers: BigNumber;
    };
    type TaxCollectorCollateralDataStruct = {
        nextStabilityFee: BigNumberish;
        updateTime: BigNumberish;
        secondaryReceiverAllotedTax: BigNumberish;
    };
    type TaxCollectorCollateralDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        nextStabilityFee: BigNumber;
        updateTime: BigNumber;
        secondaryReceiverAllotedTax: BigNumber;
    };
    type TaxCollectorCollateralParamsStruct = {
        stabilityFee: BigNumberish;
    };
    type TaxCollectorCollateralParamsStructOutput = [BigNumber] & {
        stabilityFee: BigNumber;
    };
    type TaxReceiverStruct = {
        receiver: string;
        canTakeBackTax: boolean;
        taxPercentage: BigNumberish;
    };
    type TaxReceiverStructOutput = [string, boolean, BigNumber] & {
        receiver: string;
        canTakeBackTax: boolean;
        taxPercentage: BigNumber;
    };
}
export interface TaxcollectorInterface extends utils.Interface {
    functions: {
        "_cData(bytes32)": FunctionFragment;
        "_cParams(bytes32)": FunctionFragment;
        "_params()": FunctionFragment;
        "_secondaryTaxReceivers(bytes32,address)": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "cData(bytes32)": FunctionFragment;
        "cParams(bytes32)": FunctionFragment;
        "collateralList()": FunctionFragment;
        "collateralListLength()": FunctionFragment;
        "collectedManyTax(uint256,uint256)": FunctionFragment;
        "initializeCollateralType(bytes32,bytes)": FunctionFragment;
        "isSecondaryReceiver(address)": FunctionFragment;
        "modifyParameters(bytes32,bytes32,bytes)": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "params()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "safeEngine()": FunctionFragment;
        "secondaryReceiverRevenueSourcesList(address)": FunctionFragment;
        "secondaryReceiversList()": FunctionFragment;
        "secondaryReceiversListLength()": FunctionFragment;
        "secondaryTaxReceivers(bytes32,address)": FunctionFragment;
        "taxMany(uint256,uint256)": FunctionFragment;
        "taxManyOutcome(uint256,uint256)": FunctionFragment;
        "taxSingle(bytes32)": FunctionFragment;
        "taxSingleOutcome(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_cData" | "_cParams" | "_params" | "_secondaryTaxReceivers" | "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "cData" | "cParams" | "collateralList" | "collateralListLength" | "collectedManyTax" | "initializeCollateralType" | "isSecondaryReceiver" | "modifyParameters(bytes32,bytes32,bytes)" | "modifyParameters(bytes32,bytes)" | "params" | "removeAuthorization" | "safeEngine" | "secondaryReceiverRevenueSourcesList" | "secondaryReceiversList" | "secondaryReceiversListLength" | "secondaryTaxReceivers" | "taxMany" | "taxManyOutcome" | "taxSingle" | "taxSingleOutcome"): FunctionFragment;
    encodeFunctionData(functionFragment: "_cData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "_cParams", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "_params", values?: undefined): string;
    encodeFunctionData(functionFragment: "_secondaryTaxReceivers", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "cData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "cParams", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "collateralList", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralListLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "collectedManyTax", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initializeCollateralType", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "isSecondaryReceiver", values: [string]): string;
    encodeFunctionData(functionFragment: "modifyParameters(bytes32,bytes32,bytes)", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "modifyParameters(bytes32,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "params", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "safeEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "secondaryReceiverRevenueSourcesList", values: [string]): string;
    encodeFunctionData(functionFragment: "secondaryReceiversList", values?: undefined): string;
    encodeFunctionData(functionFragment: "secondaryReceiversListLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "secondaryTaxReceivers", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "taxMany", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "taxManyOutcome", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "taxSingle", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "taxSingleOutcome", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "_cData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_cParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_secondaryTaxReceivers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralListLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectedManyTax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeCollateralType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSecondaryReceiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters(bytes32,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters(bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "secondaryReceiverRevenueSourcesList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "secondaryReceiversList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "secondaryReceiversListLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "secondaryTaxReceivers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "taxMany", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "taxManyOutcome", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "taxSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "taxSingleOutcome", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "CollectTax(bytes32,uint256,int256)": EventFragment;
        "DistributeTax(bytes32,address,int256)": EventFragment;
        "InitializeCollateralType(bytes32)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "SetPrimaryReceiver(bytes32,address)": EventFragment;
        "SetSecondaryReceiver(bytes32,address,uint256,bool)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CollectTax"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DistributeTax"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InitializeCollateralType"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPrimaryReceiver"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetSecondaryReceiver"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface CollectTaxEventObject {
    _cType: string;
    _latestAccumulatedRate: BigNumber;
    _deltaRate: BigNumber;
}
export type CollectTaxEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], CollectTaxEventObject>;
export type CollectTaxEventFilter = TypedEventFilter<CollectTaxEvent>;
export interface DistributeTaxEventObject {
    _cType: string;
    _target: string;
    _taxCut: BigNumber;
}
export type DistributeTaxEvent = TypedEvent<[
    string,
    string,
    BigNumber
], DistributeTaxEventObject>;
export type DistributeTaxEventFilter = TypedEventFilter<DistributeTaxEvent>;
export interface InitializeCollateralTypeEventObject {
    _cType: string;
}
export type InitializeCollateralTypeEvent = TypedEvent<[
    string
], InitializeCollateralTypeEventObject>;
export type InitializeCollateralTypeEventFilter = TypedEventFilter<InitializeCollateralTypeEvent>;
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
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface SetPrimaryReceiverEventObject {
    _cType: string;
    _receiver: string;
}
export type SetPrimaryReceiverEvent = TypedEvent<[
    string,
    string
], SetPrimaryReceiverEventObject>;
export type SetPrimaryReceiverEventFilter = TypedEventFilter<SetPrimaryReceiverEvent>;
export interface SetSecondaryReceiverEventObject {
    _cType: string;
    _receiver: string;
    _taxPercentage: BigNumber;
    _canTakeBackTax: boolean;
}
export type SetSecondaryReceiverEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    boolean
], SetSecondaryReceiverEventObject>;
export type SetSecondaryReceiverEventFilter = TypedEventFilter<SetSecondaryReceiverEvent>;
export interface Taxcollector extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TaxcollectorInterface;
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
        _cData(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            nextStabilityFee: BigNumber;
            updateTime: BigNumber;
            secondaryReceiverAllotedTax: BigNumber;
        }>;
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            stabilityFee: BigNumber;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            primaryTaxReceiver: string;
            globalStabilityFee: BigNumber;
            maxStabilityFeeRange: BigNumber;
            maxSecondaryReceivers: BigNumber;
        }>;
        _secondaryTaxReceivers(_cType: BytesLike, _taxReceiver: string, overrides?: CallOverrides): Promise<[
            string,
            boolean,
            BigNumber
        ] & {
            receiver: string;
            canTakeBackTax: boolean;
            taxPercentage: BigNumber;
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
        cData(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            ITaxCollector.TaxCollectorCollateralDataStructOutput
        ] & {
            _taxCollectorCData: ITaxCollector.TaxCollectorCollateralDataStructOutput;
        }>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            ITaxCollector.TaxCollectorCollateralParamsStructOutput
        ] & {
            _taxCollectorCParams: ITaxCollector.TaxCollectorCollateralParamsStructOutput;
        }>;
        collateralList(overrides?: CallOverrides): Promise<[string[]] & {
            __collateralList: string[];
        }>;
        collateralListLength(overrides?: CallOverrides): Promise<[BigNumber] & {
            _collateralListLength: BigNumber;
        }>;
        collectedManyTax(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[boolean] & {
            _ok: boolean;
        }>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isSecondaryReceiver(_receiver: string, overrides?: CallOverrides): Promise<[boolean] & {
            _isSecondaryReceiver: boolean;
        }>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        params(overrides?: CallOverrides): Promise<[
            ITaxCollector.TaxCollectorParamsStructOutput
        ] & {
            _taxCollectorParams: ITaxCollector.TaxCollectorParamsStructOutput;
        }>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<[string]>;
        secondaryReceiverRevenueSourcesList(_secondaryReceiver: string, overrides?: CallOverrides): Promise<[string[]] & {
            _secondaryReceiverRevenueSourcesList: string[];
        }>;
        secondaryReceiversList(overrides?: CallOverrides): Promise<[string[]] & {
            _secondaryReceiversList: string[];
        }>;
        secondaryReceiversListLength(overrides?: CallOverrides): Promise<[BigNumber] & {
            _secondaryReceiversListLength: BigNumber;
        }>;
        secondaryTaxReceivers(_cType: BytesLike, _receiver: string, overrides?: CallOverrides): Promise<[
            ITaxCollector.TaxReceiverStructOutput
        ] & {
            _secondaryTaxReceiver: ITaxCollector.TaxReceiverStructOutput;
        }>;
        taxMany(_start: BigNumberish, _end: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        taxManyOutcome(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[boolean, BigNumber] & {
            _ok: boolean;
            _rad: BigNumber;
        }>;
        taxSingle(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        taxSingleOutcome(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _newlyAccumulatedRate: BigNumber;
            _deltaRate: BigNumber;
        }>;
    };
    _cData(_cType: BytesLike, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        nextStabilityFee: BigNumber;
        updateTime: BigNumber;
        secondaryReceiverAllotedTax: BigNumber;
    }>;
    _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    _params(overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        primaryTaxReceiver: string;
        globalStabilityFee: BigNumber;
        maxStabilityFeeRange: BigNumber;
        maxSecondaryReceivers: BigNumber;
    }>;
    _secondaryTaxReceivers(_cType: BytesLike, _taxReceiver: string, overrides?: CallOverrides): Promise<[
        string,
        boolean,
        BigNumber
    ] & {
        receiver: string;
        canTakeBackTax: boolean;
        taxPercentage: BigNumber;
    }>;
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    cData(_cType: BytesLike, overrides?: CallOverrides): Promise<ITaxCollector.TaxCollectorCollateralDataStructOutput>;
    cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<ITaxCollector.TaxCollectorCollateralParamsStructOutput>;
    collateralList(overrides?: CallOverrides): Promise<string[]>;
    collateralListLength(overrides?: CallOverrides): Promise<BigNumber>;
    collectedManyTax(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isSecondaryReceiver(_receiver: string, overrides?: CallOverrides): Promise<boolean>;
    "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    params(overrides?: CallOverrides): Promise<ITaxCollector.TaxCollectorParamsStructOutput>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    safeEngine(overrides?: CallOverrides): Promise<string>;
    secondaryReceiverRevenueSourcesList(_secondaryReceiver: string, overrides?: CallOverrides): Promise<string[]>;
    secondaryReceiversList(overrides?: CallOverrides): Promise<string[]>;
    secondaryReceiversListLength(overrides?: CallOverrides): Promise<BigNumber>;
    secondaryTaxReceivers(_cType: BytesLike, _receiver: string, overrides?: CallOverrides): Promise<ITaxCollector.TaxReceiverStructOutput>;
    taxMany(_start: BigNumberish, _end: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    taxManyOutcome(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[boolean, BigNumber] & {
        _ok: boolean;
        _rad: BigNumber;
    }>;
    taxSingle(_cType: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    taxSingleOutcome(_cType: BytesLike, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        _newlyAccumulatedRate: BigNumber;
        _deltaRate: BigNumber;
    }>;
    callStatic: {
        _cData(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            nextStabilityFee: BigNumber;
            updateTime: BigNumber;
            secondaryReceiverAllotedTax: BigNumber;
        }>;
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        _params(overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            primaryTaxReceiver: string;
            globalStabilityFee: BigNumber;
            maxStabilityFeeRange: BigNumber;
            maxSecondaryReceivers: BigNumber;
        }>;
        _secondaryTaxReceivers(_cType: BytesLike, _taxReceiver: string, overrides?: CallOverrides): Promise<[
            string,
            boolean,
            BigNumber
        ] & {
            receiver: string;
            canTakeBackTax: boolean;
            taxPercentage: BigNumber;
        }>;
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        cData(_cType: BytesLike, overrides?: CallOverrides): Promise<ITaxCollector.TaxCollectorCollateralDataStructOutput>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<ITaxCollector.TaxCollectorCollateralParamsStructOutput>;
        collateralList(overrides?: CallOverrides): Promise<string[]>;
        collateralListLength(overrides?: CallOverrides): Promise<BigNumber>;
        collectedManyTax(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: CallOverrides): Promise<void>;
        isSecondaryReceiver(_receiver: string, overrides?: CallOverrides): Promise<boolean>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        params(overrides?: CallOverrides): Promise<ITaxCollector.TaxCollectorParamsStructOutput>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        safeEngine(overrides?: CallOverrides): Promise<string>;
        secondaryReceiverRevenueSourcesList(_secondaryReceiver: string, overrides?: CallOverrides): Promise<string[]>;
        secondaryReceiversList(overrides?: CallOverrides): Promise<string[]>;
        secondaryReceiversListLength(overrides?: CallOverrides): Promise<BigNumber>;
        secondaryTaxReceivers(_cType: BytesLike, _receiver: string, overrides?: CallOverrides): Promise<ITaxCollector.TaxReceiverStructOutput>;
        taxMany(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<void>;
        taxManyOutcome(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<[boolean, BigNumber] & {
            _ok: boolean;
            _rad: BigNumber;
        }>;
        taxSingle(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        taxSingleOutcome(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _newlyAccumulatedRate: BigNumber;
            _deltaRate: BigNumber;
        }>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "CollectTax(bytes32,uint256,int256)"(_cType?: BytesLike | null, _latestAccumulatedRate?: null, _deltaRate?: null): CollectTaxEventFilter;
        CollectTax(_cType?: BytesLike | null, _latestAccumulatedRate?: null, _deltaRate?: null): CollectTaxEventFilter;
        "DistributeTax(bytes32,address,int256)"(_cType?: BytesLike | null, _target?: string | null, _taxCut?: null): DistributeTaxEventFilter;
        DistributeTax(_cType?: BytesLike | null, _target?: string | null, _taxCut?: null): DistributeTaxEventFilter;
        "InitializeCollateralType(bytes32)"(_cType?: null): InitializeCollateralTypeEventFilter;
        InitializeCollateralType(_cType?: null): InitializeCollateralTypeEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "SetPrimaryReceiver(bytes32,address)"(_cType?: BytesLike | null, _receiver?: string | null): SetPrimaryReceiverEventFilter;
        SetPrimaryReceiver(_cType?: BytesLike | null, _receiver?: string | null): SetPrimaryReceiverEventFilter;
        "SetSecondaryReceiver(bytes32,address,uint256,bool)"(_cType?: BytesLike | null, _receiver?: string | null, _taxPercentage?: null, _canTakeBackTax?: null): SetSecondaryReceiverEventFilter;
        SetSecondaryReceiver(_cType?: BytesLike | null, _receiver?: string | null, _taxPercentage?: null, _canTakeBackTax?: null): SetSecondaryReceiverEventFilter;
    };
    estimateGas: {
        _cData(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        _params(overrides?: CallOverrides): Promise<BigNumber>;
        _secondaryTaxReceivers(_cType: BytesLike, _taxReceiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        cData(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        collateralList(overrides?: CallOverrides): Promise<BigNumber>;
        collateralListLength(overrides?: CallOverrides): Promise<BigNumber>;
        collectedManyTax(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isSecondaryReceiver(_receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        params(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        safeEngine(overrides?: CallOverrides): Promise<BigNumber>;
        secondaryReceiverRevenueSourcesList(_secondaryReceiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        secondaryReceiversList(overrides?: CallOverrides): Promise<BigNumber>;
        secondaryReceiversListLength(overrides?: CallOverrides): Promise<BigNumber>;
        secondaryTaxReceivers(_cType: BytesLike, _receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        taxMany(_start: BigNumberish, _end: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        taxManyOutcome(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        taxSingle(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        taxSingleOutcome(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _cData(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _secondaryTaxReceivers(_cType: BytesLike, _taxReceiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cData(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralListLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collectedManyTax(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isSecondaryReceiver(_receiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        secondaryReceiverRevenueSourcesList(_secondaryReceiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        secondaryReceiversList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        secondaryReceiversListLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        secondaryTaxReceivers(_cType: BytesLike, _receiver: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        taxMany(_start: BigNumberish, _end: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        taxManyOutcome(_start: BigNumberish, _end: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        taxSingle(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        taxSingleOutcome(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
