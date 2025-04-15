import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface RewardedactionsInterface extends utils.Interface {
    functions: {
        "exitAllSystemCoins(address)": FunctionFragment;
        "exitCollateral(address,uint256)": FunctionFragment;
        "exitSystemCoins(address,uint256)": FunctionFragment;
        "joinSystemCoins(address,address,uint256)": FunctionFragment;
        "liquidateSAFE(address,address,bytes32,address)": FunctionFragment;
        "popDebtFromQueue(address,address,uint256)": FunctionFragment;
        "startDebtAuction(address,address)": FunctionFragment;
        "startSurplusAuction(address,address)": FunctionFragment;
        "transferExtraSurplus(address,address)": FunctionFragment;
        "updateCollateralPrice(address,address,bytes32)": FunctionFragment;
        "updateRedemptionRate(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exitAllSystemCoins" | "exitCollateral" | "exitSystemCoins" | "joinSystemCoins" | "liquidateSAFE" | "popDebtFromQueue" | "startDebtAuction" | "startSurplusAuction" | "transferExtraSurplus" | "updateCollateralPrice" | "updateRedemptionRate"): FunctionFragment;
    encodeFunctionData(functionFragment: "exitAllSystemCoins", values: [string]): string;
    encodeFunctionData(functionFragment: "exitCollateral", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exitSystemCoins", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "joinSystemCoins", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidateSAFE", values: [string, string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "popDebtFromQueue", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "startDebtAuction", values: [string, string]): string;
    encodeFunctionData(functionFragment: "startSurplusAuction", values: [string, string]): string;
    encodeFunctionData(functionFragment: "transferExtraSurplus", values: [string, string]): string;
    encodeFunctionData(functionFragment: "updateCollateralPrice", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "updateRedemptionRate", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "exitAllSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joinSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidateSAFE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "popDebtFromQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startDebtAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startSurplusAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferExtraSurplus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCollateralPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateRedemptionRate", data: BytesLike): Result;
    events: {};
}
export interface Rewardedactions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RewardedactionsInterface;
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
        exitAllSystemCoins(_coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        liquidateSAFE(_liquidationJob: string, _coinJoin: string, _cType: BytesLike, _safe: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        popDebtFromQueue(_accountingJob: string, _coinJoin: string, _debtTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startDebtAuction(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startSurplusAuction(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferExtraSurplus(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateCollateralPrice(_oracleJob: string, _coinJoin: string, _cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateRedemptionRate(_oracleJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    exitAllSystemCoins(_coinJoin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    liquidateSAFE(_liquidationJob: string, _coinJoin: string, _cType: BytesLike, _safe: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    popDebtFromQueue(_accountingJob: string, _coinJoin: string, _debtTimestamp: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startDebtAuction(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startSurplusAuction(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferExtraSurplus(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateCollateralPrice(_oracleJob: string, _coinJoin: string, _cType: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateRedemptionRate(_oracleJob: string, _coinJoin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        exitAllSystemCoins(_coinJoin: string, overrides?: CallOverrides): Promise<void>;
        exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        liquidateSAFE(_liquidationJob: string, _coinJoin: string, _cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<void>;
        popDebtFromQueue(_accountingJob: string, _coinJoin: string, _debtTimestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startDebtAuction(_accountingJob: string, _coinJoin: string, overrides?: CallOverrides): Promise<void>;
        startSurplusAuction(_accountingJob: string, _coinJoin: string, overrides?: CallOverrides): Promise<void>;
        transferExtraSurplus(_accountingJob: string, _coinJoin: string, overrides?: CallOverrides): Promise<void>;
        updateCollateralPrice(_oracleJob: string, _coinJoin: string, _cType: BytesLike, overrides?: CallOverrides): Promise<void>;
        updateRedemptionRate(_oracleJob: string, _coinJoin: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        exitAllSystemCoins(_coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        liquidateSAFE(_liquidationJob: string, _coinJoin: string, _cType: BytesLike, _safe: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        popDebtFromQueue(_accountingJob: string, _coinJoin: string, _debtTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startDebtAuction(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startSurplusAuction(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferExtraSurplus(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateCollateralPrice(_oracleJob: string, _coinJoin: string, _cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateRedemptionRate(_oracleJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        exitAllSystemCoins(_coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        liquidateSAFE(_liquidationJob: string, _coinJoin: string, _cType: BytesLike, _safe: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        popDebtFromQueue(_accountingJob: string, _coinJoin: string, _debtTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startDebtAuction(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startSurplusAuction(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferExtraSurplus(_accountingJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateCollateralPrice(_oracleJob: string, _coinJoin: string, _cType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateRedemptionRate(_oracleJob: string, _coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
