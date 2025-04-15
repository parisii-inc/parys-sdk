import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface CollateralbidactionsInterface extends utils.Interface {
    functions: {
        "buyCollateral(address,address,address,uint256,uint256,uint256)": FunctionFragment;
        "exitAllSystemCoins(address)": FunctionFragment;
        "exitCollateral(address,uint256)": FunctionFragment;
        "exitSystemCoins(address,uint256)": FunctionFragment;
        "joinSystemCoins(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "buyCollateral" | "exitAllSystemCoins" | "exitCollateral" | "exitSystemCoins" | "joinSystemCoins"): FunctionFragment;
    encodeFunctionData(functionFragment: "buyCollateral", values: [string, string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exitAllSystemCoins", values: [string]): string;
    encodeFunctionData(functionFragment: "exitCollateral", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exitSystemCoins", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "joinSystemCoins", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "buyCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitAllSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joinSystemCoins", data: BytesLike): Result;
    events: {};
}
export interface Collateralbidactions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CollateralbidactionsInterface;
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
        buyCollateral(_coinJoin: string, _collateralJoin: string, _collateralAuctionHouse: string, _auctionId: BigNumberish, _minCollateralAmount: BigNumberish, _bidAmount: BigNumberish, overrides?: Overrides & {
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
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    buyCollateral(_coinJoin: string, _collateralJoin: string, _collateralAuctionHouse: string, _auctionId: BigNumberish, _minCollateralAmount: BigNumberish, _bidAmount: BigNumberish, overrides?: Overrides & {
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
    joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        buyCollateral(_coinJoin: string, _collateralJoin: string, _collateralAuctionHouse: string, _auctionId: BigNumberish, _minCollateralAmount: BigNumberish, _bidAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exitAllSystemCoins(_coinJoin: string, overrides?: CallOverrides): Promise<void>;
        exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        buyCollateral(_coinJoin: string, _collateralJoin: string, _collateralAuctionHouse: string, _auctionId: BigNumberish, _minCollateralAmount: BigNumberish, _bidAmount: BigNumberish, overrides?: Overrides & {
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
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        buyCollateral(_coinJoin: string, _collateralJoin: string, _collateralAuctionHouse: string, _auctionId: BigNumberish, _minCollateralAmount: BigNumberish, _bidAmount: BigNumberish, overrides?: Overrides & {
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
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
