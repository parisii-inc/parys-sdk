import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IPIDController {
    type ControllerGainsStruct = {
        kp: BigNumberish;
        ki: BigNumberish;
        influenceFactor: BigNumberish;
    };
    type ControllerGainsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        kp: BigNumber;
        ki: BigNumber;
        influenceFactor: BigNumber;
    };
    type PIDControllerParamsStruct = {
        integralPeriodSize: BigNumberish;
        perSecondCumulativeLeak: BigNumberish;
        noiseBarrier: BigNumberish;
        feedbackOutputUpperBound: BigNumberish;
        feedbackOutputLowerBound: BigNumberish;
    };
    type PIDControllerParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        integralPeriodSize: BigNumber;
        perSecondCumulativeLeak: BigNumber;
        noiseBarrier: BigNumber;
        feedbackOutputUpperBound: BigNumber;
        feedbackOutputLowerBound: BigNumber;
    };
    type DeviationObservationStruct = {
        timestamp: BigNumberish;
        proportional: BigNumberish;
        integral: BigNumberish;
    };
    type DeviationObservationStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        proportional: BigNumber;
        integral: BigNumber;
    };
}
export interface PidcontrollerInterface extends utils.Interface {
    functions: {
        "_controllerGains()": FunctionFragment;
        "_deviationObservation()": FunctionFragment;
        "_params()": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "breaksNoiseBarrier(uint256,uint256)": FunctionFragment;
        "computeRate(uint256,uint256)": FunctionFragment;
        "controllerGains()": FunctionFragment;
        "deviationObservation()": FunctionFragment;
        "getBoundedRedemptionRate(int256)": FunctionFragment;
        "getGainAdjustedPIOutput(int256,int256)": FunctionFragment;
        "getGainAdjustedTerms(int256,int256)": FunctionFragment;
        "getNextDeviationCumulative(int256,uint256)": FunctionFragment;
        "getNextRedemptionRate(uint256,uint256,uint256)": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "params()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "seedProposer()": FunctionFragment;
        "timeSinceLastUpdate()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_controllerGains" | "_deviationObservation" | "_params" | "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "breaksNoiseBarrier" | "computeRate" | "controllerGains" | "deviationObservation" | "getBoundedRedemptionRate" | "getGainAdjustedPIOutput" | "getGainAdjustedTerms" | "getNextDeviationCumulative" | "getNextRedemptionRate" | "modifyParameters" | "params" | "removeAuthorization" | "seedProposer" | "timeSinceLastUpdate"): FunctionFragment;
    encodeFunctionData(functionFragment: "_controllerGains", values?: undefined): string;
    encodeFunctionData(functionFragment: "_deviationObservation", values?: undefined): string;
    encodeFunctionData(functionFragment: "_params", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "breaksNoiseBarrier", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "computeRate", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "controllerGains", values?: undefined): string;
    encodeFunctionData(functionFragment: "deviationObservation", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBoundedRedemptionRate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGainAdjustedPIOutput", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getGainAdjustedTerms", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNextDeviationCumulative", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNextRedemptionRate", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "modifyParameters", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "params", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "seedProposer", values?: undefined): string;
    encodeFunctionData(functionFragment: "timeSinceLastUpdate", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_controllerGains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_deviationObservation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "breaksNoiseBarrier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "controllerGains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deviationObservation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBoundedRedemptionRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGainAdjustedPIOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGainAdjustedTerms", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextDeviationCumulative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNextRedemptionRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "seedProposer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timeSinceLastUpdate", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "UpdateDeviation(int256,int256,int256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateDeviation"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
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
export interface UpdateDeviationEventObject {
    _proportionalDeviation: BigNumber;
    _integralDeviation: BigNumber;
    _deltaIntegralDeviation: BigNumber;
}
export type UpdateDeviationEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], UpdateDeviationEventObject>;
export type UpdateDeviationEventFilter = TypedEventFilter<UpdateDeviationEvent>;
export interface Pidcontroller extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PidcontrollerInterface;
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
        _controllerGains(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            kp: BigNumber;
            ki: BigNumber;
            influenceFactor: BigNumber;
        }>;
        _deviationObservation(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            proportional: BigNumber;
            integral: BigNumber;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            integralPeriodSize: BigNumber;
            perSecondCumulativeLeak: BigNumber;
            noiseBarrier: BigNumber;
            feedbackOutputUpperBound: BigNumber;
            feedbackOutputLowerBound: BigNumber;
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
        breaksNoiseBarrier(_piSum: BigNumberish, _redemptionPrice: BigNumberish, overrides?: CallOverrides): Promise<[boolean] & {
            _breaksNb: boolean;
        }>;
        computeRate(_marketPrice: BigNumberish, _targetPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        controllerGains(overrides?: CallOverrides): Promise<[
            IPIDController.ControllerGainsStructOutput
        ] & {
            _cGains: IPIDController.ControllerGainsStructOutput;
        }>;
        deviationObservation(overrides?: CallOverrides): Promise<[
            IPIDController.DeviationObservationStructOutput
        ] & {
            __deviationObservation: IPIDController.DeviationObservationStructOutput;
        }>;
        getBoundedRedemptionRate(_piOutput: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            _newRedemptionRate: BigNumber;
        }>;
        getGainAdjustedPIOutput(_proportionalTerm: BigNumberish, _integralTerm: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            _gainAdjustedPIOutput: BigNumber;
        }>;
        getGainAdjustedTerms(_proportionalTerm: BigNumberish, _integralTerm: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _ajustedProportionalTerm: BigNumber;
            _adjustedIntegralTerm: BigNumber;
        }>;
        getNextDeviationCumulative(_proportionalTerm: BigNumberish, _accumulatedLeak: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _nextDeviationCumulative: BigNumber;
            _appliedDeviation: BigNumber;
        }>;
        getNextRedemptionRate(_marketPrice: BigNumberish, _redemptionPrice: BigNumberish, _accumulatedLeak: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _redemptionRate: BigNumber;
            _proportionalTerm: BigNumber;
            _integralTerm: BigNumber;
        }>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        params(overrides?: CallOverrides): Promise<[
            IPIDController.PIDControllerParamsStructOutput
        ] & {
            _pidParams: IPIDController.PIDControllerParamsStructOutput;
        }>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        seedProposer(overrides?: CallOverrides): Promise<[string]>;
        timeSinceLastUpdate(overrides?: CallOverrides): Promise<[BigNumber] & {
            _elapsed: BigNumber;
        }>;
    };
    _controllerGains(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        kp: BigNumber;
        ki: BigNumber;
        influenceFactor: BigNumber;
    }>;
    _deviationObservation(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        timestamp: BigNumber;
        proportional: BigNumber;
        integral: BigNumber;
    }>;
    _params(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        integralPeriodSize: BigNumber;
        perSecondCumulativeLeak: BigNumber;
        noiseBarrier: BigNumber;
        feedbackOutputUpperBound: BigNumber;
        feedbackOutputLowerBound: BigNumber;
    }>;
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    breaksNoiseBarrier(_piSum: BigNumberish, _redemptionPrice: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    computeRate(_marketPrice: BigNumberish, _targetPrice: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    controllerGains(overrides?: CallOverrides): Promise<IPIDController.ControllerGainsStructOutput>;
    deviationObservation(overrides?: CallOverrides): Promise<IPIDController.DeviationObservationStructOutput>;
    getBoundedRedemptionRate(_piOutput: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getGainAdjustedPIOutput(_proportionalTerm: BigNumberish, _integralTerm: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getGainAdjustedTerms(_proportionalTerm: BigNumberish, _integralTerm: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        _ajustedProportionalTerm: BigNumber;
        _adjustedIntegralTerm: BigNumber;
    }>;
    getNextDeviationCumulative(_proportionalTerm: BigNumberish, _accumulatedLeak: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        _nextDeviationCumulative: BigNumber;
        _appliedDeviation: BigNumber;
    }>;
    getNextRedemptionRate(_marketPrice: BigNumberish, _redemptionPrice: BigNumberish, _accumulatedLeak: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _redemptionRate: BigNumber;
        _proportionalTerm: BigNumber;
        _integralTerm: BigNumber;
    }>;
    modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    params(overrides?: CallOverrides): Promise<IPIDController.PIDControllerParamsStructOutput>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    seedProposer(overrides?: CallOverrides): Promise<string>;
    timeSinceLastUpdate(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _controllerGains(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            kp: BigNumber;
            ki: BigNumber;
            influenceFactor: BigNumber;
        }>;
        _deviationObservation(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            timestamp: BigNumber;
            proportional: BigNumber;
            integral: BigNumber;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            integralPeriodSize: BigNumber;
            perSecondCumulativeLeak: BigNumber;
            noiseBarrier: BigNumber;
            feedbackOutputUpperBound: BigNumber;
            feedbackOutputLowerBound: BigNumber;
        }>;
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        breaksNoiseBarrier(_piSum: BigNumberish, _redemptionPrice: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        computeRate(_marketPrice: BigNumberish, _targetPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        controllerGains(overrides?: CallOverrides): Promise<IPIDController.ControllerGainsStructOutput>;
        deviationObservation(overrides?: CallOverrides): Promise<IPIDController.DeviationObservationStructOutput>;
        getBoundedRedemptionRate(_piOutput: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGainAdjustedPIOutput(_proportionalTerm: BigNumberish, _integralTerm: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGainAdjustedTerms(_proportionalTerm: BigNumberish, _integralTerm: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _ajustedProportionalTerm: BigNumber;
            _adjustedIntegralTerm: BigNumber;
        }>;
        getNextDeviationCumulative(_proportionalTerm: BigNumberish, _accumulatedLeak: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _nextDeviationCumulative: BigNumber;
            _appliedDeviation: BigNumber;
        }>;
        getNextRedemptionRate(_marketPrice: BigNumberish, _redemptionPrice: BigNumberish, _accumulatedLeak: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _redemptionRate: BigNumber;
            _proportionalTerm: BigNumber;
            _integralTerm: BigNumber;
        }>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        params(overrides?: CallOverrides): Promise<IPIDController.PIDControllerParamsStructOutput>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        seedProposer(overrides?: CallOverrides): Promise<string>;
        timeSinceLastUpdate(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "UpdateDeviation(int256,int256,int256)"(_proportionalDeviation?: null, _integralDeviation?: null, _deltaIntegralDeviation?: null): UpdateDeviationEventFilter;
        UpdateDeviation(_proportionalDeviation?: null, _integralDeviation?: null, _deltaIntegralDeviation?: null): UpdateDeviationEventFilter;
    };
    estimateGas: {
        _controllerGains(overrides?: CallOverrides): Promise<BigNumber>;
        _deviationObservation(overrides?: CallOverrides): Promise<BigNumber>;
        _params(overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        breaksNoiseBarrier(_piSum: BigNumberish, _redemptionPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        computeRate(_marketPrice: BigNumberish, _targetPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        controllerGains(overrides?: CallOverrides): Promise<BigNumber>;
        deviationObservation(overrides?: CallOverrides): Promise<BigNumber>;
        getBoundedRedemptionRate(_piOutput: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGainAdjustedPIOutput(_proportionalTerm: BigNumberish, _integralTerm: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getGainAdjustedTerms(_proportionalTerm: BigNumberish, _integralTerm: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getNextDeviationCumulative(_proportionalTerm: BigNumberish, _accumulatedLeak: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getNextRedemptionRate(_marketPrice: BigNumberish, _redemptionPrice: BigNumberish, _accumulatedLeak: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        params(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        seedProposer(overrides?: CallOverrides): Promise<BigNumber>;
        timeSinceLastUpdate(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _controllerGains(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _deviationObservation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        breaksNoiseBarrier(_piSum: BigNumberish, _redemptionPrice: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        computeRate(_marketPrice: BigNumberish, _targetPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        controllerGains(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deviationObservation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBoundedRedemptionRate(_piOutput: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGainAdjustedPIOutput(_proportionalTerm: BigNumberish, _integralTerm: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGainAdjustedTerms(_proportionalTerm: BigNumberish, _integralTerm: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextDeviationCumulative(_proportionalTerm: BigNumberish, _accumulatedLeak: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNextRedemptionRate(_marketPrice: BigNumberish, _redemptionPrice: BigNumberish, _accumulatedLeak: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        seedProposer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timeSinceLastUpdate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
