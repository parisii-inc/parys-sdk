import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IsystemcointaxcollectorInterface extends utils.Interface {
    functions: {
        "MAX_TAX_RATE_BASIS_POINTS()": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "calculateTax(address,address,uint256,address)": FunctionFragment;
        "customTaxRates(address)": FunctionFragment;
        "defaultTaxRateBasisPoints()": FunctionFragment;
        "exemptAddresses(address)": FunctionFragment;
        "getTaxRate(address)": FunctionFragment;
        "hasCustomRate(address)": FunctionFragment;
        "isAddressExemptForTransfer(address,address,address)": FunctionFragment;
        "isExempt(address)": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "proxyFactory()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "removeCustomTaxRate(address)": FunctionFragment;
        "setAddressExempt(address,bool)": FunctionFragment;
        "setCustomTaxRate(address,uint256)": FunctionFragment;
        "setDefaultTaxRate(uint256)": FunctionFragment;
        "setProxyFactory(address)": FunctionFragment;
        "stabilityFeeTreasury()": FunctionFragment;
        "systemCoin()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_TAX_RATE_BASIS_POINTS" | "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "calculateTax" | "customTaxRates" | "defaultTaxRateBasisPoints" | "exemptAddresses" | "getTaxRate" | "hasCustomRate" | "isAddressExemptForTransfer" | "isExempt" | "modifyParameters" | "proxyFactory" | "removeAuthorization" | "removeCustomTaxRate" | "setAddressExempt" | "setCustomTaxRate" | "setDefaultTaxRate" | "setProxyFactory" | "stabilityFeeTreasury" | "systemCoin"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_TAX_RATE_BASIS_POINTS", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateTax", values: [string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "customTaxRates", values: [string]): string;
    encodeFunctionData(functionFragment: "defaultTaxRateBasisPoints", values?: undefined): string;
    encodeFunctionData(functionFragment: "exemptAddresses", values: [string]): string;
    encodeFunctionData(functionFragment: "getTaxRate", values: [string]): string;
    encodeFunctionData(functionFragment: "hasCustomRate", values: [string]): string;
    encodeFunctionData(functionFragment: "isAddressExemptForTransfer", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "isExempt", values: [string]): string;
    encodeFunctionData(functionFragment: "modifyParameters", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "proxyFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "removeCustomTaxRate", values: [string]): string;
    encodeFunctionData(functionFragment: "setAddressExempt", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setCustomTaxRate", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDefaultTaxRate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setProxyFactory", values: [string]): string;
    encodeFunctionData(functionFragment: "stabilityFeeTreasury", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemCoin", values?: undefined): string;
    decodeFunctionResult(functionFragment: "MAX_TAX_RATE_BASIS_POINTS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateTax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "customTaxRates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultTaxRateBasisPoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exemptAddresses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTaxRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasCustomRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAddressExemptForTransfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isExempt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxyFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeCustomTaxRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddressExempt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCustomTaxRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultTaxRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProxyFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stabilityFeeTreasury", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemCoin", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "CustomTaxRateSet(address,uint256,uint256)": EventFragment;
        "DefaultTaxRateChanged(uint256,uint256)": EventFragment;
        "ExemptionStatusChanged(address,bool,bool)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "TaxCollected(address,address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CustomTaxRateSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DefaultTaxRateChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExemptionStatusChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TaxCollected"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface CustomTaxRateSetEventObject {
    _account: string;
    _oldRate: BigNumber;
    _newRate: BigNumber;
}
export type CustomTaxRateSetEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], CustomTaxRateSetEventObject>;
export type CustomTaxRateSetEventFilter = TypedEventFilter<CustomTaxRateSetEvent>;
export interface DefaultTaxRateChangedEventObject {
    _oldRate: BigNumber;
    _newRate: BigNumber;
}
export type DefaultTaxRateChangedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], DefaultTaxRateChangedEventObject>;
export type DefaultTaxRateChangedEventFilter = TypedEventFilter<DefaultTaxRateChangedEvent>;
export interface ExemptionStatusChangedEventObject {
    account: string;
    oldStatus: boolean;
    newStatus: boolean;
}
export type ExemptionStatusChangedEvent = TypedEvent<[
    string,
    boolean,
    boolean
], ExemptionStatusChangedEventObject>;
export type ExemptionStatusChangedEventFilter = TypedEventFilter<ExemptionStatusChangedEvent>;
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
export interface TaxCollectedEventObject {
    _from: string;
    _to: string;
    _amount: BigNumber;
    _taxAmount: BigNumber;
    _appliedRate: BigNumber;
}
export type TaxCollectedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], TaxCollectedEventObject>;
export type TaxCollectedEventFilter = TypedEventFilter<TaxCollectedEvent>;
export interface Isystemcointaxcollector extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IsystemcointaxcollectorInterface;
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
        MAX_TAX_RATE_BASIS_POINTS(overrides?: CallOverrides): Promise<[BigNumber] & {
            _maxTaxRateBasisPoints: BigNumber;
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
        calculateTax(_from: string, _to: string, _amount: BigNumberish, _caller: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string
        ] & {
            _taxAmount: BigNumber;
            _appliedRate: BigNumber;
            _treasury: string;
        }>;
        customTaxRates(_account: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _customTaxRate: BigNumber;
        }>;
        defaultTaxRateBasisPoints(overrides?: CallOverrides): Promise<[BigNumber] & {
            _defaultTaxRateBasisPoints: BigNumber;
        }>;
        exemptAddresses(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _isExempt: boolean;
        }>;
        getTaxRate(_account: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _taxRate: BigNumber;
        }>;
        hasCustomRate(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _hasCustomRate: boolean;
        }>;
        isAddressExemptForTransfer(_from: string, _to: string, _caller: string, overrides?: CallOverrides): Promise<[boolean] & {
            _isExempt: boolean;
        }>;
        isExempt(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _isExempt: boolean;
        }>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        proxyFactory(overrides?: CallOverrides): Promise<[string]>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeCustomTaxRate(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setAddressExempt(_account: string, _exempt: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setCustomTaxRate(_account: string, _customTaxRateBasisPoints: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setDefaultTaxRate(_newDefaultTaxRateBasisPoints: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setProxyFactory(_proxyFactory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<[string] & {
            _stabilityFeeTreasury: string;
        }>;
        systemCoin(overrides?: CallOverrides): Promise<[string] & {
            _systemCoin: string;
        }>;
    };
    MAX_TAX_RATE_BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    calculateTax(_from: string, _to: string, _amount: BigNumberish, _caller: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        string
    ] & {
        _taxAmount: BigNumber;
        _appliedRate: BigNumber;
        _treasury: string;
    }>;
    customTaxRates(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    defaultTaxRateBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
    exemptAddresses(_account: string, overrides?: CallOverrides): Promise<boolean>;
    getTaxRate(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
    hasCustomRate(_account: string, overrides?: CallOverrides): Promise<boolean>;
    isAddressExemptForTransfer(_from: string, _to: string, _caller: string, overrides?: CallOverrides): Promise<boolean>;
    isExempt(_account: string, overrides?: CallOverrides): Promise<boolean>;
    modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    proxyFactory(overrides?: CallOverrides): Promise<string>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeCustomTaxRate(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setAddressExempt(_account: string, _exempt: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setCustomTaxRate(_account: string, _customTaxRateBasisPoints: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setDefaultTaxRate(_newDefaultTaxRateBasisPoints: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setProxyFactory(_proxyFactory: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stabilityFeeTreasury(overrides?: CallOverrides): Promise<string>;
    systemCoin(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        MAX_TAX_RATE_BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        calculateTax(_from: string, _to: string, _amount: BigNumberish, _caller: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string
        ] & {
            _taxAmount: BigNumber;
            _appliedRate: BigNumber;
            _treasury: string;
        }>;
        customTaxRates(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        defaultTaxRateBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        exemptAddresses(_account: string, overrides?: CallOverrides): Promise<boolean>;
        getTaxRate(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasCustomRate(_account: string, overrides?: CallOverrides): Promise<boolean>;
        isAddressExemptForTransfer(_from: string, _to: string, _caller: string, overrides?: CallOverrides): Promise<boolean>;
        isExempt(_account: string, overrides?: CallOverrides): Promise<boolean>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        proxyFactory(overrides?: CallOverrides): Promise<string>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        removeCustomTaxRate(_account: string, overrides?: CallOverrides): Promise<void>;
        setAddressExempt(_account: string, _exempt: boolean, overrides?: CallOverrides): Promise<void>;
        setCustomTaxRate(_account: string, _customTaxRateBasisPoints: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDefaultTaxRate(_newDefaultTaxRateBasisPoints: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setProxyFactory(_proxyFactory: string, overrides?: CallOverrides): Promise<void>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<string>;
        systemCoin(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "CustomTaxRateSet(address,uint256,uint256)"(_account?: string | null, _oldRate?: null, _newRate?: null): CustomTaxRateSetEventFilter;
        CustomTaxRateSet(_account?: string | null, _oldRate?: null, _newRate?: null): CustomTaxRateSetEventFilter;
        "DefaultTaxRateChanged(uint256,uint256)"(_oldRate?: null, _newRate?: null): DefaultTaxRateChangedEventFilter;
        DefaultTaxRateChanged(_oldRate?: null, _newRate?: null): DefaultTaxRateChangedEventFilter;
        "ExemptionStatusChanged(address,bool,bool)"(account?: string | null, oldStatus?: null, newStatus?: null): ExemptionStatusChangedEventFilter;
        ExemptionStatusChanged(account?: string | null, oldStatus?: null, newStatus?: null): ExemptionStatusChangedEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "TaxCollected(address,address,uint256,uint256,uint256)"(_from?: string | null, _to?: string | null, _amount?: null, _taxAmount?: null, _appliedRate?: null): TaxCollectedEventFilter;
        TaxCollected(_from?: string | null, _to?: string | null, _amount?: null, _taxAmount?: null, _appliedRate?: null): TaxCollectedEventFilter;
    };
    estimateGas: {
        MAX_TAX_RATE_BASIS_POINTS(overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        calculateTax(_from: string, _to: string, _amount: BigNumberish, _caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        customTaxRates(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        defaultTaxRateBasisPoints(overrides?: CallOverrides): Promise<BigNumber>;
        exemptAddresses(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTaxRate(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasCustomRate(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isAddressExemptForTransfer(_from: string, _to: string, _caller: string, overrides?: CallOverrides): Promise<BigNumber>;
        isExempt(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        proxyFactory(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeCustomTaxRate(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setAddressExempt(_account: string, _exempt: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setCustomTaxRate(_account: string, _customTaxRateBasisPoints: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setDefaultTaxRate(_newDefaultTaxRateBasisPoints: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setProxyFactory(_proxyFactory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<BigNumber>;
        systemCoin(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_TAX_RATE_BASIS_POINTS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateTax(_from: string, _to: string, _amount: BigNumberish, _caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        customTaxRates(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        defaultTaxRateBasisPoints(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exemptAddresses(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTaxRate(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasCustomRate(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAddressExemptForTransfer(_from: string, _to: string, _caller: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isExempt(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        proxyFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeCustomTaxRate(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setAddressExempt(_account: string, _exempt: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setCustomTaxRate(_account: string, _customTaxRateBasisPoints: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setDefaultTaxRate(_newDefaultTaxRateBasisPoints: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setProxyFactory(_proxyFactory: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stabilityFeeTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemCoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
