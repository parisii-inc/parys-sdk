import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IOracleRelayer {
    type OracleRelayerParamsStruct = {
        redemptionRateUpperBound: BigNumberish;
        redemptionRateLowerBound: BigNumberish;
    };
    type OracleRelayerParamsStructOutput = [BigNumber, BigNumber] & {
        redemptionRateUpperBound: BigNumber;
        redemptionRateLowerBound: BigNumber;
    };
    type OracleRelayerCollateralParamsStruct = {
        oracle: string;
        safetyCRatio: BigNumberish;
        liquidationCRatio: BigNumberish;
    };
    type OracleRelayerCollateralParamsStructOutput = [
        string,
        BigNumber,
        BigNumber
    ] & {
        oracle: string;
        safetyCRatio: BigNumber;
        liquidationCRatio: BigNumber;
    };
}
export interface OraclerelayerInterface extends utils.Interface {
    functions: {
        "_cParams(bytes32)": FunctionFragment;
        "_params()": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "cParams(bytes32)": FunctionFragment;
        "calcRedemptionPrice()": FunctionFragment;
        "carbonPriceIndexOracle()": FunctionFragment;
        "collateralList()": FunctionFragment;
        "contractEnabled()": FunctionFragment;
        "disableContract()": FunctionFragment;
        "initializeCollateralType(bytes32,bytes)": FunctionFragment;
        "marketPrice()": FunctionFragment;
        "modifyParameters(bytes32,bytes32,bytes)": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "params()": FunctionFragment;
        "redemptionPrice()": FunctionFragment;
        "redemptionPriceUpdateTime()": FunctionFragment;
        "redemptionRate()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "safeEngine()": FunctionFragment;
        "systemCoinOracle()": FunctionFragment;
        "targetPriceUpdateTime()": FunctionFragment;
        "targetRedemptionPrice()": FunctionFragment;
        "updateCollateralPrice(bytes32)": FunctionFragment;
        "updateRedemptionPriceFromOracle()": FunctionFragment;
        "updateRedemptionRate(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_cParams" | "_params" | "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "cParams" | "calcRedemptionPrice" | "carbonPriceIndexOracle" | "collateralList" | "contractEnabled" | "disableContract" | "initializeCollateralType" | "marketPrice" | "modifyParameters(bytes32,bytes32,bytes)" | "modifyParameters(bytes32,bytes)" | "params" | "redemptionPrice" | "redemptionPriceUpdateTime" | "redemptionRate" | "removeAuthorization" | "safeEngine" | "systemCoinOracle" | "targetPriceUpdateTime" | "targetRedemptionPrice" | "updateCollateralPrice" | "updateRedemptionPriceFromOracle" | "updateRedemptionRate"): FunctionFragment;
    encodeFunctionData(functionFragment: "_cParams", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "_params", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "cParams", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "calcRedemptionPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "carbonPriceIndexOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralList", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "disableContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeCollateralType", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "marketPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyParameters(bytes32,bytes32,bytes)", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "modifyParameters(bytes32,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "params", values?: undefined): string;
    encodeFunctionData(functionFragment: "redemptionPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "redemptionPriceUpdateTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "redemptionRate", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "safeEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemCoinOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetPriceUpdateTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetRedemptionPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateCollateralPrice", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updateRedemptionPriceFromOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateRedemptionRate", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_cParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcRedemptionPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "carbonPriceIndexOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeCollateralType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "marketPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters(bytes32,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters(bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redemptionPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redemptionPriceUpdateTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redemptionRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemCoinOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetPriceUpdateTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetRedemptionPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCollateralPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRedemptionPriceFromOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRedemptionRate", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "DisableContract()": EventFragment;
        "InitializeCollateralType(bytes32)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "UpdateCollateralPrice(bytes32,uint256,uint256,uint256)": EventFragment;
        "UpdateRedemptionPrice(uint256)": EventFragment;
        "UpdateRedemptionRate(uint256)": EventFragment;
        "UpdateTargetRedemptionPrice(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisableContract"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InitializeCollateralType"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateCollateralPrice"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateRedemptionPrice"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateRedemptionRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateTargetRedemptionPrice"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface DisableContractEventObject {
}
export type DisableContractEvent = TypedEvent<[], DisableContractEventObject>;
export type DisableContractEventFilter = TypedEventFilter<DisableContractEvent>;
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
export interface UpdateCollateralPriceEventObject {
    _cType: string;
    _priceFeedValue: BigNumber;
    _safetyPrice: BigNumber;
    _liquidationPrice: BigNumber;
}
export type UpdateCollateralPriceEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], UpdateCollateralPriceEventObject>;
export type UpdateCollateralPriceEventFilter = TypedEventFilter<UpdateCollateralPriceEvent>;
export interface UpdateRedemptionPriceEventObject {
    _redemptionPrice: BigNumber;
}
export type UpdateRedemptionPriceEvent = TypedEvent<[
    BigNumber
], UpdateRedemptionPriceEventObject>;
export type UpdateRedemptionPriceEventFilter = TypedEventFilter<UpdateRedemptionPriceEvent>;
export interface UpdateRedemptionRateEventObject {
    _redemptionRate: BigNumber;
}
export type UpdateRedemptionRateEvent = TypedEvent<[
    BigNumber
], UpdateRedemptionRateEventObject>;
export type UpdateRedemptionRateEventFilter = TypedEventFilter<UpdateRedemptionRateEvent>;
export interface UpdateTargetRedemptionPriceEventObject {
    _targetPrice: BigNumber;
}
export type UpdateTargetRedemptionPriceEvent = TypedEvent<[
    BigNumber
], UpdateTargetRedemptionPriceEventObject>;
export type UpdateTargetRedemptionPriceEventFilter = TypedEventFilter<UpdateTargetRedemptionPriceEvent>;
export interface Oraclerelayer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OraclerelayerInterface;
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
            oracle: string;
            safetyCRatio: BigNumber;
            liquidationCRatio: BigNumber;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            redemptionRateUpperBound: BigNumber;
            redemptionRateLowerBound: BigNumber;
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
            IOracleRelayer.OracleRelayerCollateralParamsStructOutput
        ] & {
            _oracleRelayerCParams: IOracleRelayer.OracleRelayerCollateralParamsStructOutput;
        }>;
        calcRedemptionPrice(overrides?: CallOverrides): Promise<[BigNumber] & {
            _virtualRedemptionPrice: BigNumber;
        }>;
        carbonPriceIndexOracle(overrides?: CallOverrides): Promise<[string]>;
        collateralList(overrides?: CallOverrides): Promise<[string[]] & {
            __collateralList: string[];
        }>;
        contractEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        marketPrice(overrides?: CallOverrides): Promise<[BigNumber] & {
            _marketPrice: BigNumber;
        }>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        params(overrides?: CallOverrides): Promise<[
            IOracleRelayer.OracleRelayerParamsStructOutput
        ] & {
            _oracleRelayerParams: IOracleRelayer.OracleRelayerParamsStructOutput;
        }>;
        redemptionPrice(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        redemptionPriceUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        redemptionRate(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<[string]>;
        systemCoinOracle(overrides?: CallOverrides): Promise<[string]>;
        targetPriceUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        targetRedemptionPrice(overrides?: CallOverrides): Promise<[BigNumber] & {
            _target: BigNumber;
        }>;
        updateCollateralPrice(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateRedemptionPriceFromOracle(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateRedemptionRate(_redemptionRate: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
        string,
        BigNumber,
        BigNumber
    ] & {
        oracle: string;
        safetyCRatio: BigNumber;
        liquidationCRatio: BigNumber;
    }>;
    _params(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        redemptionRateUpperBound: BigNumber;
        redemptionRateLowerBound: BigNumber;
    }>;
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<IOracleRelayer.OracleRelayerCollateralParamsStructOutput>;
    calcRedemptionPrice(overrides?: CallOverrides): Promise<BigNumber>;
    carbonPriceIndexOracle(overrides?: CallOverrides): Promise<string>;
    collateralList(overrides?: CallOverrides): Promise<string[]>;
    contractEnabled(overrides?: CallOverrides): Promise<boolean>;
    disableContract(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    marketPrice(overrides?: CallOverrides): Promise<BigNumber>;
    "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    params(overrides?: CallOverrides): Promise<IOracleRelayer.OracleRelayerParamsStructOutput>;
    redemptionPrice(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    redemptionPriceUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
    redemptionRate(overrides?: CallOverrides): Promise<BigNumber>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    safeEngine(overrides?: CallOverrides): Promise<string>;
    systemCoinOracle(overrides?: CallOverrides): Promise<string>;
    targetPriceUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
    targetRedemptionPrice(overrides?: CallOverrides): Promise<BigNumber>;
    updateCollateralPrice(_cType: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateRedemptionPriceFromOracle(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateRedemptionRate(_redemptionRate: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            string,
            BigNumber,
            BigNumber
        ] & {
            oracle: string;
            safetyCRatio: BigNumber;
            liquidationCRatio: BigNumber;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            redemptionRateUpperBound: BigNumber;
            redemptionRateLowerBound: BigNumber;
        }>;
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<IOracleRelayer.OracleRelayerCollateralParamsStructOutput>;
        calcRedemptionPrice(overrides?: CallOverrides): Promise<BigNumber>;
        carbonPriceIndexOracle(overrides?: CallOverrides): Promise<string>;
        collateralList(overrides?: CallOverrides): Promise<string[]>;
        contractEnabled(overrides?: CallOverrides): Promise<boolean>;
        disableContract(overrides?: CallOverrides): Promise<void>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: CallOverrides): Promise<void>;
        marketPrice(overrides?: CallOverrides): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        params(overrides?: CallOverrides): Promise<IOracleRelayer.OracleRelayerParamsStructOutput>;
        redemptionPrice(overrides?: CallOverrides): Promise<BigNumber>;
        redemptionPriceUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        redemptionRate(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        safeEngine(overrides?: CallOverrides): Promise<string>;
        systemCoinOracle(overrides?: CallOverrides): Promise<string>;
        targetPriceUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        targetRedemptionPrice(overrides?: CallOverrides): Promise<BigNumber>;
        updateCollateralPrice(_cType: BytesLike, overrides?: CallOverrides): Promise<void>;
        updateRedemptionPriceFromOracle(overrides?: CallOverrides): Promise<BigNumber>;
        updateRedemptionRate(_redemptionRate: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "DisableContract()"(): DisableContractEventFilter;
        DisableContract(): DisableContractEventFilter;
        "InitializeCollateralType(bytes32)"(_cType?: null): InitializeCollateralTypeEventFilter;
        InitializeCollateralType(_cType?: null): InitializeCollateralTypeEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "UpdateCollateralPrice(bytes32,uint256,uint256,uint256)"(_cType?: BytesLike | null, _priceFeedValue?: null, _safetyPrice?: null, _liquidationPrice?: null): UpdateCollateralPriceEventFilter;
        UpdateCollateralPrice(_cType?: BytesLike | null, _priceFeedValue?: null, _safetyPrice?: null, _liquidationPrice?: null): UpdateCollateralPriceEventFilter;
        "UpdateRedemptionPrice(uint256)"(_redemptionPrice?: null): UpdateRedemptionPriceEventFilter;
        UpdateRedemptionPrice(_redemptionPrice?: null): UpdateRedemptionPriceEventFilter;
        "UpdateRedemptionRate(uint256)"(_redemptionRate?: null): UpdateRedemptionRateEventFilter;
        UpdateRedemptionRate(_redemptionRate?: null): UpdateRedemptionRateEventFilter;
        "UpdateTargetRedemptionPrice(uint256)"(_targetPrice?: null): UpdateTargetRedemptionPriceEventFilter;
        UpdateTargetRedemptionPrice(_targetPrice?: null): UpdateTargetRedemptionPriceEventFilter;
    };
    estimateGas: {
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        _params(overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        calcRedemptionPrice(overrides?: CallOverrides): Promise<BigNumber>;
        carbonPriceIndexOracle(overrides?: CallOverrides): Promise<BigNumber>;
        collateralList(overrides?: CallOverrides): Promise<BigNumber>;
        contractEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        marketPrice(overrides?: CallOverrides): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        params(overrides?: CallOverrides): Promise<BigNumber>;
        redemptionPrice(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        redemptionPriceUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        redemptionRate(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        safeEngine(overrides?: CallOverrides): Promise<BigNumber>;
        systemCoinOracle(overrides?: CallOverrides): Promise<BigNumber>;
        targetPriceUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        targetRedemptionPrice(overrides?: CallOverrides): Promise<BigNumber>;
        updateCollateralPrice(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateRedemptionPriceFromOracle(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateRedemptionRate(_redemptionRate: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcRedemptionPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        carbonPriceIndexOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        marketPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redemptionPrice(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        redemptionPriceUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redemptionRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        systemCoinOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetPriceUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetRedemptionPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateCollateralPrice(_cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateRedemptionPriceFromOracle(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateRedemptionRate(_redemptionRate: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
