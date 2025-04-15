import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace ICommonSurplusAuctionHouse {
    type AuctionStruct = {
        bidAmount: BigNumberish;
        amountToSell: BigNumberish;
        highBidder: string;
        bidExpiry: BigNumberish;
        auctionDeadline: BigNumberish;
    };
    type AuctionStructOutput = [
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber
    ] & {
        bidAmount: BigNumber;
        amountToSell: BigNumber;
        highBidder: string;
        bidExpiry: BigNumber;
        auctionDeadline: BigNumber;
    };
}
export interface IcommonsurplusauctionhouseInterface extends utils.Interface {
    functions: {
        "AUCTION_HOUSE_TYPE()": FunctionFragment;
        "_auctions(uint256)": FunctionFragment;
        "auctions(uint256)": FunctionFragment;
        "auctionsStarted()": FunctionFragment;
        "increaseBidSize(uint256,uint256)": FunctionFragment;
        "protocolToken()": FunctionFragment;
        "restartAuction(uint256)": FunctionFragment;
        "safeEngine()": FunctionFragment;
        "settleAuction(uint256)": FunctionFragment;
        "startAuction(uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "AUCTION_HOUSE_TYPE" | "_auctions" | "auctions" | "auctionsStarted" | "increaseBidSize" | "protocolToken" | "restartAuction" | "safeEngine" | "settleAuction" | "startAuction"): FunctionFragment;
    encodeFunctionData(functionFragment: "AUCTION_HOUSE_TYPE", values?: undefined): string;
    encodeFunctionData(functionFragment: "_auctions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "auctions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "auctionsStarted", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseBidSize", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "protocolToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "restartAuction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "settleAuction", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "startAuction", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "AUCTION_HOUSE_TYPE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_auctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "auctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "auctionsStarted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseBidSize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protocolToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "restartAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startAuction", data: BytesLike): Result;
    events: {
        "IncreaseBidSize(uint256,address,uint256,uint256,uint256,uint256)": EventFragment;
        "RestartAuction(uint256,uint256,uint256)": EventFragment;
        "SettleAuction(uint256,uint256,address,uint256)": EventFragment;
        "StartAuction(uint256,address,uint256,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "IncreaseBidSize"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RestartAuction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SettleAuction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StartAuction"): EventFragment;
}
export interface IncreaseBidSizeEventObject {
    _id: BigNumber;
    _bidder: string;
    _blockTimestamp: BigNumber;
    _raisedAmount: BigNumber;
    _soldAmount: BigNumber;
    _bidExpiry: BigNumber;
}
export type IncreaseBidSizeEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], IncreaseBidSizeEventObject>;
export type IncreaseBidSizeEventFilter = TypedEventFilter<IncreaseBidSizeEvent>;
export interface RestartAuctionEventObject {
    _id: BigNumber;
    _blockTimestamp: BigNumber;
    _auctionDeadline: BigNumber;
}
export type RestartAuctionEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], RestartAuctionEventObject>;
export type RestartAuctionEventFilter = TypedEventFilter<RestartAuctionEvent>;
export interface SettleAuctionEventObject {
    _id: BigNumber;
    _blockTimestamp: BigNumber;
    _highBidder: string;
    _raisedAmount: BigNumber;
}
export type SettleAuctionEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    BigNumber
], SettleAuctionEventObject>;
export type SettleAuctionEventFilter = TypedEventFilter<SettleAuctionEvent>;
export interface StartAuctionEventObject {
    _id: BigNumber;
    _auctioneer: string;
    _blockTimestamp: BigNumber;
    _amountToSell: BigNumber;
    _amountToRaise: BigNumber;
    _auctionDeadline: BigNumber;
}
export type StartAuctionEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], StartAuctionEventObject>;
export type StartAuctionEventFilter = TypedEventFilter<StartAuctionEvent>;
export interface Icommonsurplusauctionhouse extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IcommonsurplusauctionhouseInterface;
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
        AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<[string] & {
            _auctionHouseType: string;
        }>;
        _auctions(_id: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            BigNumber
        ] & {
            _bidAmount: BigNumber;
            _amountToSell: BigNumber;
            _highBidder: string;
            _bidExpiry: BigNumber;
            _auctionDeadline: BigNumber;
        }>;
        auctions(_id: BigNumberish, overrides?: CallOverrides): Promise<[
            ICommonSurplusAuctionHouse.AuctionStructOutput
        ] & {
            _auction: ICommonSurplusAuctionHouse.AuctionStructOutput;
        }>;
        auctionsStarted(overrides?: CallOverrides): Promise<[BigNumber] & {
            _auctionsStarted: BigNumber;
        }>;
        increaseBidSize(_id: BigNumberish, _bid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        protocolToken(overrides?: CallOverrides): Promise<[string] & {
            _protocolToken: string;
        }>;
        restartAuction(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<[string] & {
            _safeEngine: string;
        }>;
        settleAuction(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startAuction(_amountToSell: BigNumberish, _initialBid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<string>;
    _auctions(_id: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber
    ] & {
        _bidAmount: BigNumber;
        _amountToSell: BigNumber;
        _highBidder: string;
        _bidExpiry: BigNumber;
        _auctionDeadline: BigNumber;
    }>;
    auctions(_id: BigNumberish, overrides?: CallOverrides): Promise<ICommonSurplusAuctionHouse.AuctionStructOutput>;
    auctionsStarted(overrides?: CallOverrides): Promise<BigNumber>;
    increaseBidSize(_id: BigNumberish, _bid: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    protocolToken(overrides?: CallOverrides): Promise<string>;
    restartAuction(_id: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    safeEngine(overrides?: CallOverrides): Promise<string>;
    settleAuction(_id: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startAuction(_amountToSell: BigNumberish, _initialBid: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<string>;
        _auctions(_id: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            BigNumber
        ] & {
            _bidAmount: BigNumber;
            _amountToSell: BigNumber;
            _highBidder: string;
            _bidExpiry: BigNumber;
            _auctionDeadline: BigNumber;
        }>;
        auctions(_id: BigNumberish, overrides?: CallOverrides): Promise<ICommonSurplusAuctionHouse.AuctionStructOutput>;
        auctionsStarted(overrides?: CallOverrides): Promise<BigNumber>;
        increaseBidSize(_id: BigNumberish, _bid: BigNumberish, overrides?: CallOverrides): Promise<void>;
        protocolToken(overrides?: CallOverrides): Promise<string>;
        restartAuction(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        safeEngine(overrides?: CallOverrides): Promise<string>;
        settleAuction(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startAuction(_amountToSell: BigNumberish, _initialBid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "IncreaseBidSize(uint256,address,uint256,uint256,uint256,uint256)"(_id?: BigNumberish | null, _bidder?: null, _blockTimestamp?: null, _raisedAmount?: null, _soldAmount?: null, _bidExpiry?: null): IncreaseBidSizeEventFilter;
        IncreaseBidSize(_id?: BigNumberish | null, _bidder?: null, _blockTimestamp?: null, _raisedAmount?: null, _soldAmount?: null, _bidExpiry?: null): IncreaseBidSizeEventFilter;
        "RestartAuction(uint256,uint256,uint256)"(_id?: BigNumberish | null, _blockTimestamp?: null, _auctionDeadline?: null): RestartAuctionEventFilter;
        RestartAuction(_id?: BigNumberish | null, _blockTimestamp?: null, _auctionDeadline?: null): RestartAuctionEventFilter;
        "SettleAuction(uint256,uint256,address,uint256)"(_id?: BigNumberish | null, _blockTimestamp?: null, _highBidder?: null, _raisedAmount?: null): SettleAuctionEventFilter;
        SettleAuction(_id?: BigNumberish | null, _blockTimestamp?: null, _highBidder?: null, _raisedAmount?: null): SettleAuctionEventFilter;
        "StartAuction(uint256,address,uint256,uint256,uint256,uint256)"(_id?: BigNumberish | null, _auctioneer?: string | null, _blockTimestamp?: null, _amountToSell?: null, _amountToRaise?: null, _auctionDeadline?: null): StartAuctionEventFilter;
        StartAuction(_id?: BigNumberish | null, _auctioneer?: string | null, _blockTimestamp?: null, _amountToSell?: null, _amountToRaise?: null, _auctionDeadline?: null): StartAuctionEventFilter;
    };
    estimateGas: {
        AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<BigNumber>;
        _auctions(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        auctions(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        auctionsStarted(overrides?: CallOverrides): Promise<BigNumber>;
        increaseBidSize(_id: BigNumberish, _bid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        protocolToken(overrides?: CallOverrides): Promise<BigNumber>;
        restartAuction(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        safeEngine(overrides?: CallOverrides): Promise<BigNumber>;
        settleAuction(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startAuction(_amountToSell: BigNumberish, _initialBid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _auctions(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        auctions(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        auctionsStarted(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseBidSize(_id: BigNumberish, _bid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        protocolToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        restartAuction(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        settleAuction(_id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startAuction(_amountToSell: BigNumberish, _initialBid: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
