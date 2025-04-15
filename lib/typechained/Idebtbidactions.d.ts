import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IdebtbidactionsInterface extends utils.Interface {
    functions: {
        "collectProtocolTokens(address)": FunctionFragment;
        "decreaseSoldAmount(address,address,uint256,uint256)": FunctionFragment;
        "exitAllSystemCoins(address)": FunctionFragment;
        "exitCollateral(address,uint256)": FunctionFragment;
        "exitSystemCoins(address,uint256)": FunctionFragment;
        "joinSystemCoins(address,address,uint256)": FunctionFragment;
        "settleAuction(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "collectProtocolTokens" | "decreaseSoldAmount" | "exitAllSystemCoins" | "exitCollateral" | "exitSystemCoins" | "joinSystemCoins" | "settleAuction"): FunctionFragment;
    encodeFunctionData(functionFragment: "collectProtocolTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "decreaseSoldAmount", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exitAllSystemCoins", values: [string]): string;
    encodeFunctionData(functionFragment: "exitCollateral", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exitSystemCoins", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "joinSystemCoins", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "settleAuction", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "collectProtocolTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseSoldAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitAllSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exitSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "joinSystemCoins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleAuction", data: BytesLike): Result;
    events: {};
}
export interface Idebtbidactions extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IdebtbidactionsInterface;
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
        collectProtocolTokens(_protocolToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        decreaseSoldAmount(_coinJoin: string, _debtAuctionHouse: string, _auctionId: BigNumberish, _soldAmount: BigNumberish, overrides?: Overrides & {
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
        settleAuction(_coinJoin: string, _debtAuctionHouse: string, _auctionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    collectProtocolTokens(_protocolToken: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    decreaseSoldAmount(_coinJoin: string, _debtAuctionHouse: string, _auctionId: BigNumberish, _soldAmount: BigNumberish, overrides?: Overrides & {
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
    settleAuction(_coinJoin: string, _debtAuctionHouse: string, _auctionId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        collectProtocolTokens(_protocolToken: string, overrides?: CallOverrides): Promise<void>;
        decreaseSoldAmount(_coinJoin: string, _debtAuctionHouse: string, _auctionId: BigNumberish, _soldAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exitAllSystemCoins(_coinJoin: string, overrides?: CallOverrides): Promise<void>;
        exitCollateral(_collateralJoin: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exitSystemCoins(_coinJoin: string, _coinsToExit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        joinSystemCoins(_coinJoin: string, _dst: string, _wad: BigNumberish, overrides?: CallOverrides): Promise<void>;
        settleAuction(_coinJoin: string, _debtAuctionHouse: string, _auctionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        collectProtocolTokens(_protocolToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        decreaseSoldAmount(_coinJoin: string, _debtAuctionHouse: string, _auctionId: BigNumberish, _soldAmount: BigNumberish, overrides?: Overrides & {
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
        settleAuction(_coinJoin: string, _debtAuctionHouse: string, _auctionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        collectProtocolTokens(_protocolToken: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        decreaseSoldAmount(_coinJoin: string, _debtAuctionHouse: string, _auctionId: BigNumberish, _soldAmount: BigNumberish, overrides?: Overrides & {
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
        settleAuction(_coinJoin: string, _debtAuctionHouse: string, _auctionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
