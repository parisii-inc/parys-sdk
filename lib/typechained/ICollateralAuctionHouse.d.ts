import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace ICollateralAuctionHouse {
    type AuctionStruct = {
        amountToSell: BigNumberish;
        amountToRaise: BigNumberish;
        initialTimestamp: BigNumberish;
        forgoneCollateralReceiver: string;
        auctionIncomeRecipient: string;
    };
    type AuctionStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        amountToSell: BigNumber;
        amountToRaise: BigNumber;
        initialTimestamp: BigNumber;
        forgoneCollateralReceiver: string;
        auctionIncomeRecipient: string;
    };
    type CollateralAuctionHouseParamsStruct = {
        minimumBid: BigNumberish;
        minDiscount: BigNumberish;
        maxDiscount: BigNumberish;
        perSecondDiscountUpdateRate: BigNumberish;
    };
    type CollateralAuctionHouseParamsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        minimumBid: BigNumber;
        minDiscount: BigNumber;
        maxDiscount: BigNumber;
        perSecondDiscountUpdateRate: BigNumber;
    };
}
export interface ICollateralAuctionHouseInterface extends utils.Interface {
    functions: {
        "AUCTION_HOUSE_TYPE()": FunctionFragment;
        "_auctions(uint256)": FunctionFragment;
        "_params()": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "auctions(uint256)": FunctionFragment;
        "auctionsStarted()": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "buyCollateral(uint256,uint256)": FunctionFragment;
        "collateralType()": FunctionFragment;
        "contractEnabled()": FunctionFragment;
        "disableContract()": FunctionFragment;
        "getAuctionDiscount(uint256)": FunctionFragment;
        "getCollateralBought(uint256,uint256)": FunctionFragment;
        "liquidationEngine()": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "oracleRelayer()": FunctionFragment;
        "params()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "safeEngine()": FunctionFragment;
        "startAuction(address,address,uint256,uint256)": FunctionFragment;
        "terminateAuctionPrematurely(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "AUCTION_HOUSE_TYPE" | "_auctions" | "_params" | "addAuthorization" | "auctions" | "auctionsStarted" | "authorizedAccounts(address)" | "authorizedAccounts()" | "buyCollateral" | "collateralType" | "contractEnabled" | "disableContract" | "getAuctionDiscount" | "getCollateralBought" | "liquidationEngine" | "modifyParameters" | "oracleRelayer" | "params" | "removeAuthorization" | "safeEngine" | "startAuction" | "terminateAuctionPrematurely"): FunctionFragment;
    encodeFunctionData(functionFragment: "AUCTION_HOUSE_TYPE", values?: undefined): string;
    encodeFunctionData(functionFragment: "_auctions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "_params", values?: undefined): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "auctions", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "auctionsStarted", values?: undefined): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "buyCollateral", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "collateralType", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractEnabled", values?: undefined): string;
    encodeFunctionData(functionFragment: "disableContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAuctionDiscount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCollateralBought", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "liquidationEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyParameters", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "oracleRelayer", values?: undefined): string;
    encodeFunctionData(functionFragment: "params", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "safeEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "startAuction", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "terminateAuctionPrematurely", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "AUCTION_HOUSE_TYPE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_auctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "auctions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "auctionsStarted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buyCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractEnabled", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAuctionDiscount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCollateralBought", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracleRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "params", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "terminateAuctionPrematurely", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "BuyCollateral(uint256,address,uint256,uint256,uint256)": EventFragment;
        "DisableContract()": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "SettleAuction(uint256,uint256,address,uint256)": EventFragment;
        "StartAuction(uint256,address,uint256,uint256,uint256)": EventFragment;
        "TerminateAuctionPrematurely(uint256,uint256,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BuyCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisableContract"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SettleAuction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StartAuction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TerminateAuctionPrematurely"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface BuyCollateralEventObject {
    _id: BigNumber;
    _bidder: string;
    _blockTimestamp: BigNumber;
    _raisedAmount: BigNumber;
    _soldAmount: BigNumber;
}
export type BuyCollateralEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], BuyCollateralEventObject>;
export type BuyCollateralEventFilter = TypedEventFilter<BuyCollateralEvent>;
export interface DisableContractEventObject {
}
export type DisableContractEvent = TypedEvent<[], DisableContractEventObject>;
export type DisableContractEventFilter = TypedEventFilter<DisableContractEvent>;
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
export interface SettleAuctionEventObject {
    _id: BigNumber;
    _blockTimestamp: BigNumber;
    _leftoverReceiver: string;
    _leftoverCollateral: BigNumber;
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
}
export type StartAuctionEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], StartAuctionEventObject>;
export type StartAuctionEventFilter = TypedEventFilter<StartAuctionEvent>;
export interface TerminateAuctionPrematurelyEventObject {
    _id: BigNumber;
    _blockTimestamp: BigNumber;
    _leftoverReceiver: string;
    _leftoverCollateral: BigNumber;
}
export type TerminateAuctionPrematurelyEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    BigNumber
], TerminateAuctionPrematurelyEventObject>;
export type TerminateAuctionPrematurelyEventFilter = TypedEventFilter<TerminateAuctionPrematurelyEvent>;
export interface ICollateralAuctionHouse extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICollateralAuctionHouseInterface;
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
        _auctions(_auctionId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            string
        ] & {
            _amountToSell: BigNumber;
            _amountToRaise: BigNumber;
            _initialTimestamp: BigNumber;
            _forgoneCollateralReceiver: string;
            _auctionIncomeRecipient: string;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _minimumBid: BigNumber;
            _minDiscount: BigNumber;
            _maxDiscount: BigNumber;
            _perSecondDiscountUpdateRate: BigNumber;
        }>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        auctions(_auctionId: BigNumberish, overrides?: CallOverrides): Promise<[
            ICollateralAuctionHouse.AuctionStructOutput
        ] & {
            _auction: ICollateralAuctionHouse.AuctionStructOutput;
        }>;
        auctionsStarted(overrides?: CallOverrides): Promise<[BigNumber] & {
            _auctionsStarted: BigNumber;
        }>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _authorized: boolean;
        }>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<[string[]] & {
            _accounts: string[];
        }>;
        buyCollateral(_id: BigNumberish, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        collateralType(overrides?: CallOverrides): Promise<[string] & {
            _cType: string;
        }>;
        contractEnabled(overrides?: CallOverrides): Promise<[boolean] & {
            _contractEnabled: boolean;
        }>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getAuctionDiscount(_id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            _auctionDiscount: BigNumber;
        }>;
        getCollateralBought(_id: BigNumberish, _wad: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _collateralBought: BigNumber;
            _adjustedBid: BigNumber;
        }>;
        liquidationEngine(overrides?: CallOverrides): Promise<[string] & {
            _liquidationEngine: string;
        }>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        oracleRelayer(overrides?: CallOverrides): Promise<[string] & {
            _oracleRelayer: string;
        }>;
        params(overrides?: CallOverrides): Promise<[
            ICollateralAuctionHouse.CollateralAuctionHouseParamsStructOutput
        ] & {
            _cahParams: ICollateralAuctionHouse.CollateralAuctionHouseParamsStructOutput;
        }>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<[string] & {
            _safeEngine: string;
        }>;
        startAuction(_forgoneCollateralReceiver: string, _auctionIncomeRecipient: string, _amountToRaise: BigNumberish, _collateralToSell: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        terminateAuctionPrematurely(_auctionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<string>;
    _auctions(_auctionId: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        _amountToSell: BigNumber;
        _amountToRaise: BigNumber;
        _initialTimestamp: BigNumber;
        _forgoneCollateralReceiver: string;
        _auctionIncomeRecipient: string;
    }>;
    _params(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        _minimumBid: BigNumber;
        _minDiscount: BigNumber;
        _maxDiscount: BigNumber;
        _perSecondDiscountUpdateRate: BigNumber;
    }>;
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    auctions(_auctionId: BigNumberish, overrides?: CallOverrides): Promise<ICollateralAuctionHouse.AuctionStructOutput>;
    auctionsStarted(overrides?: CallOverrides): Promise<BigNumber>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    buyCollateral(_id: BigNumberish, _wad: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    collateralType(overrides?: CallOverrides): Promise<string>;
    contractEnabled(overrides?: CallOverrides): Promise<boolean>;
    disableContract(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getAuctionDiscount(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getCollateralBought(_id: BigNumberish, _wad: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        _collateralBought: BigNumber;
        _adjustedBid: BigNumber;
    }>;
    liquidationEngine(overrides?: CallOverrides): Promise<string>;
    modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    oracleRelayer(overrides?: CallOverrides): Promise<string>;
    params(overrides?: CallOverrides): Promise<ICollateralAuctionHouse.CollateralAuctionHouseParamsStructOutput>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    safeEngine(overrides?: CallOverrides): Promise<string>;
    startAuction(_forgoneCollateralReceiver: string, _auctionIncomeRecipient: string, _amountToRaise: BigNumberish, _collateralToSell: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    terminateAuctionPrematurely(_auctionId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<string>;
        _auctions(_auctionId: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            string
        ] & {
            _amountToSell: BigNumber;
            _amountToRaise: BigNumber;
            _initialTimestamp: BigNumber;
            _forgoneCollateralReceiver: string;
            _auctionIncomeRecipient: string;
        }>;
        _params(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            _minimumBid: BigNumber;
            _minDiscount: BigNumber;
            _maxDiscount: BigNumber;
            _perSecondDiscountUpdateRate: BigNumber;
        }>;
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        auctions(_auctionId: BigNumberish, overrides?: CallOverrides): Promise<ICollateralAuctionHouse.AuctionStructOutput>;
        auctionsStarted(overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        buyCollateral(_id: BigNumberish, _wad: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _boughtCollateral: BigNumber;
            _adjustedBid: BigNumber;
        }>;
        collateralType(overrides?: CallOverrides): Promise<string>;
        contractEnabled(overrides?: CallOverrides): Promise<boolean>;
        disableContract(overrides?: CallOverrides): Promise<void>;
        getAuctionDiscount(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCollateralBought(_id: BigNumberish, _wad: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            _collateralBought: BigNumber;
            _adjustedBid: BigNumber;
        }>;
        liquidationEngine(overrides?: CallOverrides): Promise<string>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        oracleRelayer(overrides?: CallOverrides): Promise<string>;
        params(overrides?: CallOverrides): Promise<ICollateralAuctionHouse.CollateralAuctionHouseParamsStructOutput>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        safeEngine(overrides?: CallOverrides): Promise<string>;
        startAuction(_forgoneCollateralReceiver: string, _auctionIncomeRecipient: string, _amountToRaise: BigNumberish, _collateralToSell: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        terminateAuctionPrematurely(_auctionId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "BuyCollateral(uint256,address,uint256,uint256,uint256)"(_id?: BigNumberish | null, _bidder?: null, _blockTimestamp?: null, _raisedAmount?: null, _soldAmount?: null): BuyCollateralEventFilter;
        BuyCollateral(_id?: BigNumberish | null, _bidder?: null, _blockTimestamp?: null, _raisedAmount?: null, _soldAmount?: null): BuyCollateralEventFilter;
        "DisableContract()"(): DisableContractEventFilter;
        DisableContract(): DisableContractEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "SettleAuction(uint256,uint256,address,uint256)"(_id?: BigNumberish | null, _blockTimestamp?: null, _leftoverReceiver?: null, _leftoverCollateral?: null): SettleAuctionEventFilter;
        SettleAuction(_id?: BigNumberish | null, _blockTimestamp?: null, _leftoverReceiver?: null, _leftoverCollateral?: null): SettleAuctionEventFilter;
        "StartAuction(uint256,address,uint256,uint256,uint256)"(_id?: BigNumberish | null, _auctioneer?: string | null, _blockTimestamp?: null, _amountToSell?: null, _amountToRaise?: null): StartAuctionEventFilter;
        StartAuction(_id?: BigNumberish | null, _auctioneer?: string | null, _blockTimestamp?: null, _amountToSell?: null, _amountToRaise?: null): StartAuctionEventFilter;
        "TerminateAuctionPrematurely(uint256,uint256,address,uint256)"(_id?: BigNumberish | null, _blockTimestamp?: null, _leftoverReceiver?: null, _leftoverCollateral?: null): TerminateAuctionPrematurelyEventFilter;
        TerminateAuctionPrematurely(_id?: BigNumberish | null, _blockTimestamp?: null, _leftoverReceiver?: null, _leftoverCollateral?: null): TerminateAuctionPrematurelyEventFilter;
    };
    estimateGas: {
        AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<BigNumber>;
        _auctions(_auctionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        _params(overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        auctions(_auctionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        auctionsStarted(overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        buyCollateral(_id: BigNumberish, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        collateralType(overrides?: CallOverrides): Promise<BigNumber>;
        contractEnabled(overrides?: CallOverrides): Promise<BigNumber>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getAuctionDiscount(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCollateralBought(_id: BigNumberish, _wad: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        liquidationEngine(overrides?: CallOverrides): Promise<BigNumber>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        oracleRelayer(overrides?: CallOverrides): Promise<BigNumber>;
        params(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        safeEngine(overrides?: CallOverrides): Promise<BigNumber>;
        startAuction(_forgoneCollateralReceiver: string, _auctionIncomeRecipient: string, _amountToRaise: BigNumberish, _collateralToSell: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        terminateAuctionPrematurely(_auctionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        AUCTION_HOUSE_TYPE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _auctions(_auctionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        auctions(_auctionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        auctionsStarted(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buyCollateral(_id: BigNumberish, _wad: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        collateralType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableContract(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getAuctionDiscount(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCollateralBought(_id: BigNumberish, _wad: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyParameters(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        oracleRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        params(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        startAuction(_forgoneCollateralReceiver: string, _auctionIncomeRecipient: string, _amountToRaise: BigNumberish, _collateralToSell: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        terminateAuctionPrematurely(_auctionId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
