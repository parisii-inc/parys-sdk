import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GlobalSettlementActionsInterface extends utils.Interface {
    functions: {
        "exitAllSystemCoins(address)": FunctionFragment;
        "exitCollateral(address,uint256)": FunctionFragment;
        "exitSystemCoins(address,uint256)": FunctionFragment;
        "freeCollateral(address,address,address,uint256)": FunctionFragment;
        "joinSystemCoins(address,address,uint256)": FunctionFragment;
        "prepareCoinsForRedeeming(address,address,uint256)": FunctionFragment;
        "redeemCollateral(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "exitAllSystemCoins" | "exitCollateral" | "exitSystemCoins" | "freeCollateral" | "joinSystemCoins" | "prepareCoinsForRedeeming" | "redeemCollateral"): FunctionFragment;
    encodeFunctionData(functionFragment: "exitAllSystemCoins", values: [string]): string;
    encodeFunctionData(functionFragment: "exitCollateral", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exitSystemCoins", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "freeCollateral", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "joinSystemCoins", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "prepareCoinsForRedeeming", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "redeemCollateral", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "exitAllSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freeCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joinSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prepareCoinsForRedeeming", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemCollateral", data: BytesLike): Result;
    events: {};
}
export interface GlobalSettlementActions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GlobalSettlementActionsInterface;
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
        freeCollateral(_manager: string, _globalSettlement: string, _collateralJoin: string, _safeId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        prepareCoinsForRedeeming(_globalSettlement: string, _coinJoin: string, _coinAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        redeemCollateral(_globalSettlement: string, _collateralJoin: string, overrides?: Overrides & {
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
    freeCollateral(_manager: string, _globalSettlement: string, _collateralJoin: string, _safeId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    prepareCoinsForRedeeming(_globalSettlement: string, _coinJoin: string, _coinAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    redeemCollateral(_globalSettlement: string, _collateralJoin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        exitAllSystemCoins(_coinJoin: string, overrides?: CallOverrides): Promise<void>;
        exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        freeCollateral(_manager: string, _globalSettlement: string, _collateralJoin: string, _safeId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        prepareCoinsForRedeeming(_globalSettlement: string, _coinJoin: string, _coinAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        redeemCollateral(_globalSettlement: string, _collateralJoin: string, overrides?: CallOverrides): Promise<BigNumber>;
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
        freeCollateral(_manager: string, _globalSettlement: string, _collateralJoin: string, _safeId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        prepareCoinsForRedeeming(_globalSettlement: string, _coinJoin: string, _coinAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        redeemCollateral(_globalSettlement: string, _collateralJoin: string, overrides?: Overrides & {
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
        freeCollateral(_manager: string, _globalSettlement: string, _collateralJoin: string, _safeId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        prepareCoinsForRedeeming(_globalSettlement: string, _coinJoin: string, _coinAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        redeemCollateral(_globalSettlement: string, _collateralJoin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
