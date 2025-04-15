import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IbasicactionsInterface extends utils.Interface {
    functions: {
        "collectTokenCollateral(address,address,uint256,uint256)": FunctionFragment;
        "exitAllSystemCoins(address)": FunctionFragment;
        "exitCollateral(address,uint256)": FunctionFragment;
        "exitSystemCoins(address,uint256)": FunctionFragment;
        "freeTokenCollateral(address,address,uint256,uint256)": FunctionFragment;
        "generateDebt(address,address,address,uint256,uint256)": FunctionFragment;
        "joinSystemCoins(address,address,uint256)": FunctionFragment;
        "lockTokenCollateral(address,address,uint256,uint256)": FunctionFragment;
        "lockTokenCollateralAndGenerateDebt(address,address,address,address,uint256,uint256,uint256)": FunctionFragment;
        "openLockTokenCollateralAndGenerateDebt(address,address,address,address,bytes32,uint256,uint256)": FunctionFragment;
        "openSAFE(address,bytes32,address)": FunctionFragment;
        "repayAllDebt(address,address,address,uint256)": FunctionFragment;
        "repayAllDebtAndFreeTokenCollateral(address,address,address,address,uint256,uint256)": FunctionFragment;
        "repayDebt(address,address,address,uint256,uint256)": FunctionFragment;
        "repayDebtAndFreeTokenCollateral(address,address,address,address,uint256,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "collectTokenCollateral" | "exitAllSystemCoins" | "exitCollateral" | "exitSystemCoins" | "freeTokenCollateral" | "generateDebt" | "joinSystemCoins" | "lockTokenCollateral" | "lockTokenCollateralAndGenerateDebt" | "openLockTokenCollateralAndGenerateDebt" | "openSAFE" | "repayAllDebt" | "repayAllDebtAndFreeTokenCollateral" | "repayDebt" | "repayDebtAndFreeTokenCollateral"): FunctionFragment;
    encodeFunctionData(functionFragment: "collectTokenCollateral", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exitAllSystemCoins", values: [string]): string;
    encodeFunctionData(functionFragment: "exitCollateral", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exitSystemCoins", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "freeTokenCollateral", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "generateDebt", values: [string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "joinSystemCoins", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockTokenCollateral", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockTokenCollateralAndGenerateDebt", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "openLockTokenCollateralAndGenerateDebt", values: [
        string,
        string,
        string,
        string,
        BytesLike,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "openSAFE", values: [string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "repayAllDebt", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayAllDebtAndFreeTokenCollateral", values: [string, string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayDebt", values: [string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "repayDebtAndFreeTokenCollateral", values: [
        string,
        string,
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "collectTokenCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitAllSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freeTokenCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generateDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joinSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokenCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockTokenCollateralAndGenerateDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openLockTokenCollateralAndGenerateDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openSAFE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayAllDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayAllDebtAndFreeTokenCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayDebtAndFreeTokenCollateral", data: BytesLike): Result;
    events: {};
}
export interface Ibasicactions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IbasicactionsInterface;
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
        collectTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exitAllSystemCoins(_coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        freeTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        generateDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lockTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lockTokenCollateralAndGenerateDebt(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safe: BigNumberish, _collateralAmount: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        openLockTokenCollateralAndGenerateDebt(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _cType: BytesLike, _collateralAmount: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        openSAFE(_manager: string, _cType: BytesLike, _usr: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayAllDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayAllDebtAndFreeTokenCollateral(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safeId: BigNumberish, _collateralWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        repayDebtAndFreeTokenCollateral(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safeId: BigNumberish, _collateralWad: BigNumberish, _debtWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    collectTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exitAllSystemCoins(_coinJoin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    freeTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    generateDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lockTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lockTokenCollateralAndGenerateDebt(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safe: BigNumberish, _collateralAmount: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    openLockTokenCollateralAndGenerateDebt(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _cType: BytesLike, _collateralAmount: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    openSAFE(_manager: string, _cType: BytesLike, _usr: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayAllDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayAllDebtAndFreeTokenCollateral(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safeId: BigNumberish, _collateralWad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    repayDebtAndFreeTokenCollateral(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safeId: BigNumberish, _collateralWad: BigNumberish, _debtWad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        collectTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exitAllSystemCoins(_coinJoin: string, overrides?: CallOverrides): Promise<void>;
        exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        freeTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        generateDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lockTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        lockTokenCollateralAndGenerateDebt(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safe: BigNumberish, _collateralAmount: BigNumberish, _deltaWad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        openLockTokenCollateralAndGenerateDebt(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _cType: BytesLike, _collateralAmount: BigNumberish, _deltaWad: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        openSAFE(_manager: string, _cType: BytesLike, _usr: string, overrides?: CallOverrides): Promise<BigNumber>;
        repayAllDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        repayAllDebtAndFreeTokenCollateral(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safeId: BigNumberish, _collateralWad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        repayDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        repayDebtAndFreeTokenCollateral(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safeId: BigNumberish, _collateralWad: BigNumberish, _debtWad: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        collectTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exitAllSystemCoins(_coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        freeTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        generateDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        lockTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        lockTokenCollateralAndGenerateDebt(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safe: BigNumberish, _collateralAmount: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        openLockTokenCollateralAndGenerateDebt(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _cType: BytesLike, _collateralAmount: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        openSAFE(_manager: string, _cType: BytesLike, _usr: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayAllDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayAllDebtAndFreeTokenCollateral(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safeId: BigNumberish, _collateralWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        repayDebtAndFreeTokenCollateral(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safeId: BigNumberish, _collateralWad: BigNumberish, _debtWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        collectTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exitAllSystemCoins(_coinJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        freeTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        generateDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lockTokenCollateral(_manager: string, _collateralJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lockTokenCollateralAndGenerateDebt(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safe: BigNumberish, _collateralAmount: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        openLockTokenCollateralAndGenerateDebt(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _cType: BytesLike, _collateralAmount: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        openSAFE(_manager: string, _cType: BytesLike, _usr: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayAllDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayAllDebtAndFreeTokenCollateral(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safeId: BigNumberish, _collateralWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayDebt(_manager: string, _taxCollector: string, _coinJoin: string, _safeId: BigNumberish, _deltaWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        repayDebtAndFreeTokenCollateral(_manager: string, _taxCollector: string, _collateralJoin: string, _coinJoin: string, _safeId: BigNumberish, _collateralWad: BigNumberish, _debtWad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
