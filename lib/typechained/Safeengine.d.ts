import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace ISAFEEngine {
    type SAFEEngineParamsStruct = {
        safeDebtCeiling: BigNumberish;
        globalDebtCeiling: BigNumberish;
    };
    type SAFEEngineParamsStructOutput = [BigNumber, BigNumber] & {
        safeDebtCeiling: BigNumber;
        globalDebtCeiling: BigNumber;
    };
    type SAFEEngineCollateralDataStruct = {
        debtAmount: BigNumberish;
        lockedAmount: BigNumberish;
        accumulatedRate: BigNumberish;
        safetyPrice: BigNumberish;
        liquidationPrice: BigNumberish;
    };
    type SAFEEngineCollateralDataStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        debtAmount: BigNumber;
        lockedAmount: BigNumber;
        accumulatedRate: BigNumber;
        safetyPrice: BigNumber;
        liquidationPrice: BigNumber;
    };
    type SAFEEngineCollateralParamsStruct = {
        debtCeiling: BigNumberish;
        debtFloor: BigNumberish;
    };
    type SAFEEngineCollateralParamsStructOutput = [
        BigNumber,
        BigNumber
    ] & {
        debtCeiling: BigNumber;
        debtFloor: BigNumber;
    };
    type SAFEStruct = {
        lockedCollateral: BigNumberish;
        generatedDebt: BigNumberish;
    };
    type SAFEStructOutput = [BigNumber, BigNumber] & {
        lockedCollateral: BigNumber;
        generatedDebt: BigNumber;
    };
}
export interface SafeengineInterface extends utils.Interface {
    functions: {
        "_cData(bytes32)": FunctionFragment;
        "_cParams(bytes32)": FunctionFragment;
        "_params()": FunctionFragment;
        "_safes(bytes32,address)": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "approveSAFEModification(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "cData(bytes32)": FunctionFragment;
        "cParams(bytes32)": FunctionFragment;
        "canModifySAFE(address,address)": FunctionFragment;
        "coinBalance(address)": FunctionFragment;
        "collateralList()": FunctionFragment;
        "confiscateSAFECollateralAndDebt(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "contractEnabled()": FunctionFragment;
        "createUnbackedDebt(address,address,uint256)": FunctionFragment;
        "debtBalance(address)": FunctionFragment;
        "denySAFEModification(address)": FunctionFragment;
        "disableContract()": FunctionFragment;
        "globalDebt()": FunctionFragment;
        "globalUnbackedDebt()": FunctionFragment;
        "initializeCollateralType(bytes32,bytes)": FunctionFragment;
        "modifyCollateralBalance(bytes32,address,int256)": FunctionFragment;
        "modifyParameters(bytes32,bytes32,bytes)": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "modifySAFECollateralization(bytes32,address,address,address,int256,int256)": FunctionFragment;
        "params()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "safeRights(address,address)": FunctionFragment;
        "safes(bytes32,address)": FunctionFragment;
        "settleDebt(uint256)": FunctionFragment;
        "tokenCollateral(bytes32,address)": FunctionFragment;
        "transferCollateral(bytes32,address,address,uint256)": FunctionFragment;
        "transferInternalCoins(address,address,uint256)": FunctionFragment;
        "transferSAFECollateralAndDebt(bytes32,address,address,int256,int256)": FunctionFragment;
        "updateAccumulatedRate(bytes32,address,int256)": FunctionFragment;
        "updateCollateralPrice(bytes32,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_cData" | "_cParams" | "_params" | "_safes" | "addAuthorization" | "approveSAFEModification" | "authorizedAccounts(address)" | "authorizedAccounts()" | "cData" | "cParams" | "canModifySAFE" | "coinBalance" | "collateralList" | "confiscateSAFECollateralAndDebt" | "contractEnabled" | "createUnbackedDebt" | "debtBalance" | "denySAFEModification" | "disableContract" | "globalDebt" | "globalUnbackedDebt" | "initializeCollateralType" | "modifyCollateralBalance" | "modifyParameters(bytes32,bytes32,bytes)" | "modifyParameters(bytes32,bytes)" | "modifySAFECollateralization" | "params" | "removeAuthorization" | "safeRights" | "safes" | "settleDebt" | "tokenCollateral" | "transferCollateral" | "transferInternalCoins" | "transferSAFECollateralAndDebt" | "updateAccumulatedRate" | "updateCollateralPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "_cData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "_cParams", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "_params", values?: undefined): string;
    encodeFunctionData(functionFragment: "_safes", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "approveSAFEModification", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "cData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "cParams", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "canModifySAFE", values: [string, string]): string;
    encodeFunctionData(functionFragment: "coinBalance", values: [string]): string;
    encodeFunctionData(functionFragment: "collateralList", values?: undefined): string;
    encodeFunctionData(functionFragment: "confiscateSAFECollateralAndDebt", values: [BytesLike, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "contractEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "createUnbackedDebt", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "debtBalance", values: [string]): string;
    encodeFunctionData(functionFragment: "denySAFEModification", values: [string]): string;
    encodeFunctionData(functionFragment: "disableContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "globalDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "globalUnbackedDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeCollateralType", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "modifyCollateralBalance", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "modifyParameters(bytes32,bytes32,bytes)", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "modifyParameters(bytes32,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "modifySAFECollateralization", values: [BytesLike, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "params", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "safeRights", values: [string, string]): string;
    encodeFunctionData(functionFragment: "safes", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "settleDebt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenCollateral", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "transferCollateral", values: [BytesLike, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferInternalCoins", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferSAFECollateralAndDebt", values: [BytesLike, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateAccumulatedRate", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateCollateralPrice", values: [BytesLike, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_cData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_cParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_safes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveSAFEModification", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canModifySAFE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coinBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "confiscateSAFECollateralAndDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createUnbackedDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "debtBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "denySAFEModification", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "globalDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "globalUnbackedDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeCollateralType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyCollateralBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters(bytes32,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters(bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifySAFECollateralization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeRights", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferInternalCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferSAFECollateralAndDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAccumulatedRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCollateralPrice", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "ApproveSAFEModification(address,address)": EventFragment;
        "ConfiscateSAFECollateralAndDebt(bytes32,address,address,address,int256,int256)": EventFragment;
        "CreateUnbackedDebt(address,address,uint256)": EventFragment;
        "DenySAFEModification(address,address)": EventFragment;
        "DisableContract()": EventFragment;
        "InitializeCollateralType(bytes32)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "ModifySAFECollateralization(bytes32,address,address,address,int256,int256)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "SettleDebt(address,uint256)": EventFragment;
        "TransferCollateral(bytes32,address,address,uint256)": EventFragment;
        "TransferInternalCoins(address,address,uint256)": EventFragment;
        "TransferSAFECollateralAndDebt(bytes32,address,address,int256,int256)": EventFragment;
        "UpdateAccumulatedRate(bytes32,address,int256)": EventFragment;
        "UpdateCollateralPrice(bytes32,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApproveSAFEModification"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ConfiscateSAFECollateralAndDebt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CreateUnbackedDebt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DenySAFEModification"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisableContract"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InitializeCollateralType"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifySAFECollateralization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SettleDebt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferInternalCoins"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSAFECollateralAndDebt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateAccumulatedRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateCollateralPrice"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface ApproveSAFEModificationEventObject {
    _sender: string;
    _account: string;
}
export type ApproveSAFEModificationEvent = TypedEvent<[
    string,
    string
], ApproveSAFEModificationEventObject>;
export type ApproveSAFEModificationEventFilter = TypedEventFilter<ApproveSAFEModificationEvent>;
export interface ConfiscateSAFECollateralAndDebtEventObject {
    _cType: string;
    _safe: string;
    _collateralSource: string;
    _debtDestination: string;
    _deltaCollateral: BigNumber;
    _deltaDebt: BigNumber;
}
export type ConfiscateSAFECollateralAndDebtEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], ConfiscateSAFECollateralAndDebtEventObject>;
export type ConfiscateSAFECollateralAndDebtEventFilter = TypedEventFilter<ConfiscateSAFECollateralAndDebtEvent>;
export interface CreateUnbackedDebtEventObject {
    _debtDestination: string;
    _coinDestination: string;
    _rad: BigNumber;
}
export type CreateUnbackedDebtEvent = TypedEvent<[
    string,
    string,
    BigNumber
], CreateUnbackedDebtEventObject>;
export type CreateUnbackedDebtEventFilter = TypedEventFilter<CreateUnbackedDebtEvent>;
export interface DenySAFEModificationEventObject {
    _sender: string;
    _account: string;
}
export type DenySAFEModificationEvent = TypedEvent<[
    string,
    string
], DenySAFEModificationEventObject>;
export type DenySAFEModificationEventFilter = TypedEventFilter<DenySAFEModificationEvent>;
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
export interface ModifySAFECollateralizationEventObject {
    _cType: string;
    _safe: string;
    _collateralSource: string;
    _debtDestination: string;
    _deltaCollateral: BigNumber;
    _deltaDebt: BigNumber;
}
export type ModifySAFECollateralizationEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], ModifySAFECollateralizationEventObject>;
export type ModifySAFECollateralizationEventFilter = TypedEventFilter<ModifySAFECollateralizationEvent>;
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface SettleDebtEventObject {
    _account: string;
    _rad: BigNumber;
}
export type SettleDebtEvent = TypedEvent<[
    string,
    BigNumber
], SettleDebtEventObject>;
export type SettleDebtEventFilter = TypedEventFilter<SettleDebtEvent>;
export interface TransferCollateralEventObject {
    _cType: string;
    _src: string;
    _dst: string;
    _wad: BigNumber;
}
export type TransferCollateralEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], TransferCollateralEventObject>;
export type TransferCollateralEventFilter = TypedEventFilter<TransferCollateralEvent>;
export interface TransferInternalCoinsEventObject {
    _src: string;
    _dst: string;
    _rad: BigNumber;
}
export type TransferInternalCoinsEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferInternalCoinsEventObject>;
export type TransferInternalCoinsEventFilter = TypedEventFilter<TransferInternalCoinsEvent>;
export interface TransferSAFECollateralAndDebtEventObject {
    _cType: string;
    _src: string;
    _dst: string;
    _deltaCollateral: BigNumber;
    _deltaDebt: BigNumber;
}
export type TransferSAFECollateralAndDebtEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], TransferSAFECollateralAndDebtEventObject>;
export type TransferSAFECollateralAndDebtEventFilter = TypedEventFilter<TransferSAFECollateralAndDebtEvent>;
export interface UpdateAccumulatedRateEventObject {
    _cType: string;
    _surplusDst: string;
    _rateMultiplier: BigNumber;
}
export type UpdateAccumulatedRateEvent = TypedEvent<[
    string,
    string,
    BigNumber
], UpdateAccumulatedRateEventObject>;
export type UpdateAccumulatedRateEventFilter = TypedEventFilter<UpdateAccumulatedRateEvent>;
export interface UpdateCollateralPriceEventObject {
    _cType: string;
    _safetyPrice: BigNumber;
    _liquidationPrice: BigNumber;
}
export type UpdateCollateralPriceEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], UpdateCollateralPriceEventObject>;
export type UpdateCollateralPriceEventFilter = TypedEventFilter<UpdateCollateralPriceEvent>;
export interface Safeengine extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SafeengineInterface;
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
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            debtAmount: BigNumber;
            lockedAmount: BigNumber;
            accumulatedRate: BigNumber;
            safetyPrice: BigNumber;
            liquidationPrice: BigNumber;
        }>;
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            debtCeiling: BigNumber;
            debtFloor: BigNumber;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            safeDebtCeiling: BigNumber;
            globalDebtCeiling: BigNumber;
        }>;
        _safes(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lockedCollateral: BigNumber;
            generatedDebt: BigNumber;
        }>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        approveSAFEModification(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _authorized: boolean;
        }>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<[string[]] & {
            _accounts: string[];
        }>;
        cData(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            ISAFEEngine.SAFEEngineCollateralDataStructOutput
        ] & {
            _safeEngineCData: ISAFEEngine.SAFEEngineCollateralDataStructOutput;
        }>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            ISAFEEngine.SAFEEngineCollateralParamsStructOutput
        ] & {
            _safeEngineCParams: ISAFEEngine.SAFEEngineCollateralParamsStructOutput;
        }>;
        canModifySAFE(_safe: string, _account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _canModifySafe: boolean;
        }>;
        coinBalance(_safe: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _rad: BigNumber;
        }>;
        collateralList(overrides?: CallOverrides): Promise<[string[]] & {
            __collateralList: string[];
        }>;
        confiscateSAFECollateralAndDebt(_cType: BytesLike, _safe: string, _collateralSource: string, _debtDestination: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        contractEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        createUnbackedDebt(_debtDestination: string, _coinDestination: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        debtBalance(_safe: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _rad: BigNumber;
        }>;
        denySAFEModification(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        globalDebt(overrides?: CallOverrides): Promise<[BigNumber]>;
        globalUnbackedDebt(overrides?: CallOverrides): Promise<[BigNumber]>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        modifyCollateralBalance(_cType: BytesLike, _account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        modifySAFECollateralization(_cType: BytesLike, _safe: string, _collateralSource: string, _debtDestination: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        params(overrides?: CallOverrides): Promise<[
            ISAFEEngine.SAFEEngineParamsStructOutput
        ] & {
            _safeEngineParams: ISAFEEngine.SAFEEngineParamsStructOutput;
        }>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        safeRights(_caller: string, _account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _isAllowed: boolean;
        }>;
        safes(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<[
            ISAFEEngine.SAFEStructOutput
        ] & {
            _safeData: ISAFEEngine.SAFEStructOutput;
        }>;
        settleDebt(_rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        tokenCollateral(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _wad: BigNumber;
        }>;
        transferCollateral(_cType: BytesLike, _source: string, _destination: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferInternalCoins(_source: string, _destination: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferSAFECollateralAndDebt(_cType: BytesLike, _src: string, _dst: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateAccumulatedRate(_cType: BytesLike, _surplusDst: string, _rateMultiplier: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateCollateralPrice(_cType: BytesLike, _safetyPrice: BigNumberish, _liquidationPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _cData(_cType: BytesLike, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        debtAmount: BigNumber;
        lockedAmount: BigNumber;
        accumulatedRate: BigNumber;
        safetyPrice: BigNumber;
        liquidationPrice: BigNumber;
    }>;
    _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        debtCeiling: BigNumber;
        debtFloor: BigNumber;
    }>;
    _params(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        safeDebtCeiling: BigNumber;
        globalDebtCeiling: BigNumber;
    }>;
    _safes(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        lockedCollateral: BigNumber;
        generatedDebt: BigNumber;
    }>;
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    approveSAFEModification(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    cData(_cType: BytesLike, overrides?: CallOverrides): Promise<ISAFEEngine.SAFEEngineCollateralDataStructOutput>;
    cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<ISAFEEngine.SAFEEngineCollateralParamsStructOutput>;
    canModifySAFE(_safe: string, _account: string, overrides?: CallOverrides): Promise<boolean>;
    coinBalance(_safe: string, overrides?: CallOverrides): Promise<BigNumber>;
    collateralList(overrides?: CallOverrides): Promise<string[]>;
    confiscateSAFECollateralAndDebt(_cType: BytesLike, _safe: string, _collateralSource: string, _debtDestination: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    contractEnabled(overrides?: CallOverrides): Promise<boolean>;
    createUnbackedDebt(_debtDestination: string, _coinDestination: string, _rad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    debtBalance(_safe: string, overrides?: CallOverrides): Promise<BigNumber>;
    denySAFEModification(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    disableContract(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    globalDebt(overrides?: CallOverrides): Promise<BigNumber>;
    globalUnbackedDebt(overrides?: CallOverrides): Promise<BigNumber>;
    initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    modifyCollateralBalance(_cType: BytesLike, _account: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    modifySAFECollateralization(_cType: BytesLike, _safe: string, _collateralSource: string, _debtDestination: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    params(overrides?: CallOverrides): Promise<ISAFEEngine.SAFEEngineParamsStructOutput>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    safeRights(_caller: string, _account: string, overrides?: CallOverrides): Promise<boolean>;
    safes(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<ISAFEEngine.SAFEStructOutput>;
    settleDebt(_rad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    tokenCollateral(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<BigNumber>;
    transferCollateral(_cType: BytesLike, _source: string, _destination: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferInternalCoins(_source: string, _destination: string, _rad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferSAFECollateralAndDebt(_cType: BytesLike, _src: string, _dst: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateAccumulatedRate(_cType: BytesLike, _surplusDst: string, _rateMultiplier: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateCollateralPrice(_cType: BytesLike, _safetyPrice: BigNumberish, _liquidationPrice: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _cData(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            debtAmount: BigNumber;
            lockedAmount: BigNumber;
            accumulatedRate: BigNumber;
            safetyPrice: BigNumber;
            liquidationPrice: BigNumber;
        }>;
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            debtCeiling: BigNumber;
            debtFloor: BigNumber;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            safeDebtCeiling: BigNumber;
            globalDebtCeiling: BigNumber;
        }>;
        _safes(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lockedCollateral: BigNumber;
            generatedDebt: BigNumber;
        }>;
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        approveSAFEModification(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        cData(_cType: BytesLike, overrides?: CallOverrides): Promise<ISAFEEngine.SAFEEngineCollateralDataStructOutput>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<ISAFEEngine.SAFEEngineCollateralParamsStructOutput>;
        canModifySAFE(_safe: string, _account: string, overrides?: CallOverrides): Promise<boolean>;
        coinBalance(_safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        collateralList(overrides?: CallOverrides): Promise<string[]>;
        confiscateSAFECollateralAndDebt(_cType: BytesLike, _safe: string, _collateralSource: string, _debtDestination: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        contractEnabled(overrides?: CallOverrides): Promise<boolean>;
        createUnbackedDebt(_debtDestination: string, _coinDestination: string, _rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        debtBalance(_safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        denySAFEModification(_account: string, overrides?: CallOverrides): Promise<void>;
        disableContract(overrides?: CallOverrides): Promise<void>;
        globalDebt(overrides?: CallOverrides): Promise<BigNumber>;
        globalUnbackedDebt(overrides?: CallOverrides): Promise<BigNumber>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: CallOverrides): Promise<void>;
        modifyCollateralBalance(_cType: BytesLike, _account: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        modifySAFECollateralization(_cType: BytesLike, _safe: string, _collateralSource: string, _debtDestination: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        params(overrides?: CallOverrides): Promise<ISAFEEngine.SAFEEngineParamsStructOutput>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        safeRights(_caller: string, _account: string, overrides?: CallOverrides): Promise<boolean>;
        safes(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<ISAFEEngine.SAFEStructOutput>;
        settleDebt(_rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        tokenCollateral(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferCollateral(_cType: BytesLike, _source: string, _destination: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferInternalCoins(_source: string, _destination: string, _rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferSAFECollateralAndDebt(_cType: BytesLike, _src: string, _dst: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateAccumulatedRate(_cType: BytesLike, _surplusDst: string, _rateMultiplier: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateCollateralPrice(_cType: BytesLike, _safetyPrice: BigNumberish, _liquidationPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "ApproveSAFEModification(address,address)"(_sender?: null, _account?: null): ApproveSAFEModificationEventFilter;
        ApproveSAFEModification(_sender?: null, _account?: null): ApproveSAFEModificationEventFilter;
        "ConfiscateSAFECollateralAndDebt(bytes32,address,address,address,int256,int256)"(_cType?: BytesLike | null, _safe?: string | null, _collateralSource?: null, _debtDestination?: null, _deltaCollateral?: null, _deltaDebt?: null): ConfiscateSAFECollateralAndDebtEventFilter;
        ConfiscateSAFECollateralAndDebt(_cType?: BytesLike | null, _safe?: string | null, _collateralSource?: null, _debtDestination?: null, _deltaCollateral?: null, _deltaDebt?: null): ConfiscateSAFECollateralAndDebtEventFilter;
        "CreateUnbackedDebt(address,address,uint256)"(_debtDestination?: string | null, _coinDestination?: string | null, _rad?: null): CreateUnbackedDebtEventFilter;
        CreateUnbackedDebt(_debtDestination?: string | null, _coinDestination?: string | null, _rad?: null): CreateUnbackedDebtEventFilter;
        "DenySAFEModification(address,address)"(_sender?: null, _account?: null): DenySAFEModificationEventFilter;
        DenySAFEModification(_sender?: null, _account?: null): DenySAFEModificationEventFilter;
        "DisableContract()"(): DisableContractEventFilter;
        DisableContract(): DisableContractEventFilter;
        "InitializeCollateralType(bytes32)"(_cType?: null): InitializeCollateralTypeEventFilter;
        InitializeCollateralType(_cType?: null): InitializeCollateralTypeEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "ModifySAFECollateralization(bytes32,address,address,address,int256,int256)"(_cType?: BytesLike | null, _safe?: string | null, _collateralSource?: null, _debtDestination?: null, _deltaCollateral?: null, _deltaDebt?: null): ModifySAFECollateralizationEventFilter;
        ModifySAFECollateralization(_cType?: BytesLike | null, _safe?: string | null, _collateralSource?: null, _debtDestination?: null, _deltaCollateral?: null, _deltaDebt?: null): ModifySAFECollateralizationEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "SettleDebt(address,uint256)"(_account?: string | null, _rad?: null): SettleDebtEventFilter;
        SettleDebt(_account?: string | null, _rad?: null): SettleDebtEventFilter;
        "TransferCollateral(bytes32,address,address,uint256)"(_cType?: BytesLike | null, _src?: string | null, _dst?: string | null, _wad?: null): TransferCollateralEventFilter;
        TransferCollateral(_cType?: BytesLike | null, _src?: string | null, _dst?: string | null, _wad?: null): TransferCollateralEventFilter;
        "TransferInternalCoins(address,address,uint256)"(_src?: string | null, _dst?: string | null, _rad?: null): TransferInternalCoinsEventFilter;
        TransferInternalCoins(_src?: string | null, _dst?: string | null, _rad?: null): TransferInternalCoinsEventFilter;
        "TransferSAFECollateralAndDebt(bytes32,address,address,int256,int256)"(_cType?: BytesLike | null, _src?: string | null, _dst?: string | null, _deltaCollateral?: null, _deltaDebt?: null): TransferSAFECollateralAndDebtEventFilter;
        TransferSAFECollateralAndDebt(_cType?: BytesLike | null, _src?: string | null, _dst?: string | null, _deltaCollateral?: null, _deltaDebt?: null): TransferSAFECollateralAndDebtEventFilter;
        "UpdateAccumulatedRate(bytes32,address,int256)"(_cType?: BytesLike | null, _surplusDst?: null, _rateMultiplier?: null): UpdateAccumulatedRateEventFilter;
        UpdateAccumulatedRate(_cType?: BytesLike | null, _surplusDst?: null, _rateMultiplier?: null): UpdateAccumulatedRateEventFilter;
        "UpdateCollateralPrice(bytes32,uint256,uint256)"(_cType?: BytesLike | null, _safetyPrice?: null, _liquidationPrice?: null): UpdateCollateralPriceEventFilter;
        UpdateCollateralPrice(_cType?: BytesLike | null, _safetyPrice?: null, _liquidationPrice?: null): UpdateCollateralPriceEventFilter;
    };
    estimateGas: {
        _cData(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        _params(overrides?: CallOverrides): Promise<BigNumber>;
        _safes(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        approveSAFEModification(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        cData(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        canModifySAFE(_safe: string, _account: string, overrides?: CallOverrides): Promise<BigNumber>;
        coinBalance(_safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        collateralList(overrides?: CallOverrides): Promise<BigNumber>;
        confiscateSAFECollateralAndDebt(_cType: BytesLike, _safe: string, _collateralSource: string, _debtDestination: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        contractEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        createUnbackedDebt(_debtDestination: string, _coinDestination: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        debtBalance(_safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        denySAFEModification(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        globalDebt(overrides?: CallOverrides): Promise<BigNumber>;
        globalUnbackedDebt(overrides?: CallOverrides): Promise<BigNumber>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        modifyCollateralBalance(_cType: BytesLike, _account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        modifySAFECollateralization(_cType: BytesLike, _safe: string, _collateralSource: string, _debtDestination: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        params(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        safeRights(_caller: string, _account: string, overrides?: CallOverrides): Promise<BigNumber>;
        safes(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        settleDebt(_rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        tokenCollateral(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferCollateral(_cType: BytesLike, _source: string, _destination: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferInternalCoins(_source: string, _destination: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferSAFECollateralAndDebt(_cType: BytesLike, _src: string, _dst: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateAccumulatedRate(_cType: BytesLike, _surplusDst: string, _rateMultiplier: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateCollateralPrice(_cType: BytesLike, _safetyPrice: BigNumberish, _liquidationPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _cData(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _safes(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        approveSAFEModification(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cData(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canModifySAFE(_safe: string, _account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        coinBalance(_safe: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        confiscateSAFECollateralAndDebt(_cType: BytesLike, _safe: string, _collateralSource: string, _debtDestination: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        contractEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createUnbackedDebt(_debtDestination: string, _coinDestination: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        debtBalance(_safe: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        denySAFEModification(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        globalDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        globalUnbackedDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        modifyCollateralBalance(_cType: BytesLike, _account: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        modifySAFECollateralization(_cType: BytesLike, _safe: string, _collateralSource: string, _debtDestination: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        safeRights(_caller: string, _account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safes(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        settleDebt(_rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        tokenCollateral(_cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferCollateral(_cType: BytesLike, _source: string, _destination: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferInternalCoins(_source: string, _destination: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferSAFECollateralAndDebt(_cType: BytesLike, _src: string, _dst: string, _deltaCollateral: BigNumberish, _deltaDebt: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateAccumulatedRate(_cType: BytesLike, _surplusDst: string, _rateMultiplier: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateCollateralPrice(_cType: BytesLike, _safetyPrice: BigNumberish, _liquidationPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
