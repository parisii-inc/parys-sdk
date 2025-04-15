import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IStabilityFeeTreasury {
    type StabilityFeeTreasuryParamsStruct = {
        treasuryCapacity: BigNumberish;
        pullFundsMinThreshold: BigNumberish;
        surplusTransferDelay: BigNumberish;
    };
    type StabilityFeeTreasuryParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        treasuryCapacity: BigNumber;
        pullFundsMinThreshold: BigNumber;
        surplusTransferDelay: BigNumber;
    };
    type AllowanceStruct = {
        total: BigNumberish;
        perHour: BigNumberish;
    };
    type AllowanceStructOutput = [BigNumber, BigNumber] & {
        total: BigNumber;
        perHour: BigNumber;
    };
}
export interface StabilityfeetreasuryInterface extends utils.Interface {
    functions: {
        "_allowance(address)": FunctionFragment;
        "_params()": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "allowance(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "coinJoin()": FunctionFragment;
        "contractEnabled()": FunctionFragment;
        "disableContract()": FunctionFragment;
        "extraSurplusReceiver()": FunctionFragment;
        "giveFunds(address,uint256)": FunctionFragment;
        "latestSurplusTransferTime()": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "params()": FunctionFragment;
        "pullFunds(address,uint256)": FunctionFragment;
        "pulledPerHour(address,uint256)": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "safeEngine()": FunctionFragment;
        "setPerHourAllowance(address,uint256)": FunctionFragment;
        "setTotalAllowance(address,uint256)": FunctionFragment;
        "settleDebt()": FunctionFragment;
        "systemCoin()": FunctionFragment;
        "takeFunds(address,uint256)": FunctionFragment;
        "transferSurplusFunds()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_allowance" | "_params" | "addAuthorization" | "allowance" | "authorizedAccounts(address)" | "authorizedAccounts()" | "coinJoin" | "contractEnabled" | "disableContract" | "extraSurplusReceiver" | "giveFunds" | "latestSurplusTransferTime" | "modifyParameters" | "params" | "pullFunds" | "pulledPerHour" | "removeAuthorization" | "safeEngine" | "setPerHourAllowance" | "setTotalAllowance" | "settleDebt" | "systemCoin" | "takeFunds" | "transferSurplusFunds"): FunctionFragment;
    encodeFunctionData(functionFragment: "_allowance", values: [string]): string;
    encodeFunctionData(functionFragment: "_params", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "allowance", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "coinJoin", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "disableContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "extraSurplusReceiver", values?: undefined): string;
    encodeFunctionData(functionFragment: "giveFunds", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "latestSurplusTransferTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyParameters", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "params", values?: undefined): string;
    encodeFunctionData(functionFragment: "pullFunds", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "pulledPerHour", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "safeEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPerHourAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTotalAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "settleDebt", values?: undefined): string;
    encodeFunctionData(functionFragment: "systemCoin", values?: undefined): string;
    encodeFunctionData(functionFragment: "takeFunds", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferSurplusFunds", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coinJoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraSurplusReceiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "giveFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestSurplusTransferTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pullFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pulledPerHour", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPerHourAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTotalAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "systemCoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "takeFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferSurplusFunds", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "DisableContract()": EventFragment;
        "GiveFunds(address,uint256)": EventFragment;
        "JoinCoins(uint256)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "PullFunds(address,address,uint256)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "SetPerHourAllowance(address,uint256)": EventFragment;
        "SetTotalAllowance(address,uint256)": EventFragment;
        "SettleDebt(uint256)": EventFragment;
        "TakeFunds(address,uint256)": EventFragment;
        "TransferSurplusFunds(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisableContract"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GiveFunds"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "JoinCoins"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PullFunds"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetPerHourAllowance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetTotalAllowance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SettleDebt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TakeFunds"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSurplusFunds"): EventFragment;
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
export interface GiveFundsEventObject {
    _account: string;
    _rad: BigNumber;
}
export type GiveFundsEvent = TypedEvent<[
    string,
    BigNumber
], GiveFundsEventObject>;
export type GiveFundsEventFilter = TypedEventFilter<GiveFundsEvent>;
export interface JoinCoinsEventObject {
    _wad: BigNumber;
}
export type JoinCoinsEvent = TypedEvent<[BigNumber], JoinCoinsEventObject>;
export type JoinCoinsEventFilter = TypedEventFilter<JoinCoinsEvent>;
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
export interface PullFundsEventObject {
    _sender: string;
    _dstAccount: string;
    _rad: BigNumber;
}
export type PullFundsEvent = TypedEvent<[
    string,
    string,
    BigNumber
], PullFundsEventObject>;
export type PullFundsEventFilter = TypedEventFilter<PullFundsEvent>;
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface SetPerHourAllowanceEventObject {
    _account: string;
    _rad: BigNumber;
}
export type SetPerHourAllowanceEvent = TypedEvent<[
    string,
    BigNumber
], SetPerHourAllowanceEventObject>;
export type SetPerHourAllowanceEventFilter = TypedEventFilter<SetPerHourAllowanceEvent>;
export interface SetTotalAllowanceEventObject {
    _account: string;
    _rad: BigNumber;
}
export type SetTotalAllowanceEvent = TypedEvent<[
    string,
    BigNumber
], SetTotalAllowanceEventObject>;
export type SetTotalAllowanceEventFilter = TypedEventFilter<SetTotalAllowanceEvent>;
export interface SettleDebtEventObject {
    _rad: BigNumber;
}
export type SettleDebtEvent = TypedEvent<[BigNumber], SettleDebtEventObject>;
export type SettleDebtEventFilter = TypedEventFilter<SettleDebtEvent>;
export interface TakeFundsEventObject {
    _account: string;
    _rad: BigNumber;
}
export type TakeFundsEvent = TypedEvent<[
    string,
    BigNumber
], TakeFundsEventObject>;
export type TakeFundsEventFilter = TypedEventFilter<TakeFundsEvent>;
export interface TransferSurplusFundsEventObject {
    _extraSurplusReceiver: string;
    _fundsToTransfer: BigNumber;
}
export type TransferSurplusFundsEvent = TypedEvent<[
    string,
    BigNumber
], TransferSurplusFundsEventObject>;
export type TransferSurplusFundsEventFilter = TypedEventFilter<TransferSurplusFundsEvent>;
export interface Stabilityfeetreasury extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StabilityfeetreasuryInterface;
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
        _allowance(_account: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            total: BigNumber;
            perHour: BigNumber;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            treasuryCapacity: BigNumber;
            pullFundsMinThreshold: BigNumber;
            surplusTransferDelay: BigNumber;
        }>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        allowance(_account: string, overrides?: CallOverrides): Promise<[
            IStabilityFeeTreasury.AllowanceStructOutput
        ] & {
            __allowance: IStabilityFeeTreasury.AllowanceStructOutput;
        }>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _authorized: boolean;
        }>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<[string[]] & {
            _accounts: string[];
        }>;
        coinJoin(overrides?: CallOverrides): Promise<[string]>;
        contractEnabled(overrides?: CallOverrides): Promise<[boolean]>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        extraSurplusReceiver(overrides?: CallOverrides): Promise<[string]>;
        giveFunds(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        latestSurplusTransferTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        params(overrides?: CallOverrides): Promise<[
            IStabilityFeeTreasury.StabilityFeeTreasuryParamsStructOutput
        ] & {
            _sfTreasuryParams: IStabilityFeeTreasury.StabilityFeeTreasuryParamsStructOutput;
        }>;
        pullFunds(_dstAccount: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pulledPerHour(_account: string, _blockHour: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            _rad: BigNumber;
        }>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<[string]>;
        setPerHourAllowance(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setTotalAllowance(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        settleDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        systemCoin(overrides?: CallOverrides): Promise<[string]>;
        takeFunds(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferSurplusFunds(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    _allowance(_account: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        total: BigNumber;
        perHour: BigNumber;
    }>;
    _params(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        treasuryCapacity: BigNumber;
        pullFundsMinThreshold: BigNumber;
        surplusTransferDelay: BigNumber;
    }>;
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    allowance(_account: string, overrides?: CallOverrides): Promise<IStabilityFeeTreasury.AllowanceStructOutput>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    coinJoin(overrides?: CallOverrides): Promise<string>;
    contractEnabled(overrides?: CallOverrides): Promise<boolean>;
    disableContract(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    extraSurplusReceiver(overrides?: CallOverrides): Promise<string>;
    giveFunds(_account: string, _rad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    latestSurplusTransferTime(overrides?: CallOverrides): Promise<BigNumber>;
    modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    params(overrides?: CallOverrides): Promise<IStabilityFeeTreasury.StabilityFeeTreasuryParamsStructOutput>;
    pullFunds(_dstAccount: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pulledPerHour(_account: string, _blockHour: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    safeEngine(overrides?: CallOverrides): Promise<string>;
    setPerHourAllowance(_account: string, _rad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setTotalAllowance(_account: string, _rad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    settleDebt(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    systemCoin(overrides?: CallOverrides): Promise<string>;
    takeFunds(_account: string, _rad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferSurplusFunds(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        _allowance(_account: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            total: BigNumber;
            perHour: BigNumber;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            treasuryCapacity: BigNumber;
            pullFundsMinThreshold: BigNumber;
            surplusTransferDelay: BigNumber;
        }>;
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        allowance(_account: string, overrides?: CallOverrides): Promise<IStabilityFeeTreasury.AllowanceStructOutput>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        coinJoin(overrides?: CallOverrides): Promise<string>;
        contractEnabled(overrides?: CallOverrides): Promise<boolean>;
        disableContract(overrides?: CallOverrides): Promise<void>;
        extraSurplusReceiver(overrides?: CallOverrides): Promise<string>;
        giveFunds(_account: string, _rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        latestSurplusTransferTime(overrides?: CallOverrides): Promise<BigNumber>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        params(overrides?: CallOverrides): Promise<IStabilityFeeTreasury.StabilityFeeTreasuryParamsStructOutput>;
        pullFunds(_dstAccount: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        pulledPerHour(_account: string, _blockHour: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        safeEngine(overrides?: CallOverrides): Promise<string>;
        setPerHourAllowance(_account: string, _rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setTotalAllowance(_account: string, _rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        settleDebt(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _coinBalance: BigNumber;
            _debtBalance: BigNumber;
        }>;
        systemCoin(overrides?: CallOverrides): Promise<string>;
        takeFunds(_account: string, _rad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferSurplusFunds(overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "DisableContract()"(): DisableContractEventFilter;
        DisableContract(): DisableContractEventFilter;
        "GiveFunds(address,uint256)"(_account?: string | null, _rad?: null): GiveFundsEventFilter;
        GiveFunds(_account?: string | null, _rad?: null): GiveFundsEventFilter;
        "JoinCoins(uint256)"(_wad?: null): JoinCoinsEventFilter;
        JoinCoins(_wad?: null): JoinCoinsEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "PullFunds(address,address,uint256)"(_sender?: string | null, _dstAccount?: string | null, _rad?: null): PullFundsEventFilter;
        PullFunds(_sender?: string | null, _dstAccount?: string | null, _rad?: null): PullFundsEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "SetPerHourAllowance(address,uint256)"(_account?: string | null, _rad?: null): SetPerHourAllowanceEventFilter;
        SetPerHourAllowance(_account?: string | null, _rad?: null): SetPerHourAllowanceEventFilter;
        "SetTotalAllowance(address,uint256)"(_account?: string | null, _rad?: null): SetTotalAllowanceEventFilter;
        SetTotalAllowance(_account?: string | null, _rad?: null): SetTotalAllowanceEventFilter;
        "SettleDebt(uint256)"(_rad?: null): SettleDebtEventFilter;
        SettleDebt(_rad?: null): SettleDebtEventFilter;
        "TakeFunds(address,uint256)"(_account?: string | null, _rad?: null): TakeFundsEventFilter;
        TakeFunds(_account?: string | null, _rad?: null): TakeFundsEventFilter;
        "TransferSurplusFunds(address,uint256)"(_extraSurplusReceiver?: null, _fundsToTransfer?: null): TransferSurplusFundsEventFilter;
        TransferSurplusFunds(_extraSurplusReceiver?: null, _fundsToTransfer?: null): TransferSurplusFundsEventFilter;
    };
    estimateGas: {
        _allowance(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        _params(overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        allowance(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        coinJoin(overrides?: CallOverrides): Promise<BigNumber>;
        contractEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        extraSurplusReceiver(overrides?: CallOverrides): Promise<BigNumber>;
        giveFunds(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        latestSurplusTransferTime(overrides?: CallOverrides): Promise<BigNumber>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        params(overrides?: CallOverrides): Promise<BigNumber>;
        pullFunds(_dstAccount: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        pulledPerHour(_account: string, _blockHour: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        safeEngine(overrides?: CallOverrides): Promise<BigNumber>;
        setPerHourAllowance(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setTotalAllowance(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        settleDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        systemCoin(overrides?: CallOverrides): Promise<BigNumber>;
        takeFunds(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferSurplusFunds(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _allowance(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        allowance(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        coinJoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        extraSurplusReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        giveFunds(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        latestSurplusTransferTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pullFunds(_dstAccount: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pulledPerHour(_account: string, _blockHour: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPerHourAllowance(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setTotalAllowance(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        settleDebt(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        systemCoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        takeFunds(_account: string, _rad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferSurplusFunds(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
