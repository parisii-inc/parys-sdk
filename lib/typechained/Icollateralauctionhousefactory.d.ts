import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace ICollateralAuctionHouse {
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
export interface IcollateralauctionhousefactoryInterface extends utils.Interface {
    functions: {
        "_cParams(bytes32)": FunctionFragment;
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "cParams(bytes32)": FunctionFragment;
        "collateralAuctionHouses(bytes32)": FunctionFragment;
        "collateralAuctionHousesList()": FunctionFragment;
        "collateralList()": FunctionFragment;
        "initializeCollateralType(bytes32,bytes)": FunctionFragment;
        "liquidationEngine()": FunctionFragment;
        "modifyParameters(bytes32,bytes32,bytes)": FunctionFragment;
        "modifyParameters(bytes32,bytes)": FunctionFragment;
        "oracleRelayer()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "safeEngine()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_cParams" | "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "cParams" | "collateralAuctionHouses" | "collateralAuctionHousesList" | "collateralList" | "initializeCollateralType" | "liquidationEngine" | "modifyParameters(bytes32,bytes32,bytes)" | "modifyParameters(bytes32,bytes)" | "oracleRelayer" | "removeAuthorization" | "safeEngine"): FunctionFragment;
    encodeFunctionData(functionFragment: "_cParams", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "cParams", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "collateralAuctionHouses", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "collateralAuctionHousesList", values?: undefined): string;
    encodeFunctionData(functionFragment: "collateralList", values?: undefined): string;
    encodeFunctionData(functionFragment: "initializeCollateralType", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "liquidationEngine", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyParameters(bytes32,bytes32,bytes)", values: [BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "modifyParameters(bytes32,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "oracleRelayer", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "safeEngine", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_cParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralAuctionHouses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralAuctionHousesList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initializeCollateralType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters(bytes32,bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyParameters(bytes32,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracleRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeEngine", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "DeployCollateralAuctionHouse(bytes32,address)": EventFragment;
        "InitializeCollateralType(bytes32)": EventFragment;
        "ModifyParameters(bytes32,bytes32,bytes)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DeployCollateralAuctionHouse"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InitializeCollateralType"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ModifyParameters"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface DeployCollateralAuctionHouseEventObject {
    _cType: string;
    _collateralAuctionHouse: string;
}
export type DeployCollateralAuctionHouseEvent = TypedEvent<[
    string,
    string
], DeployCollateralAuctionHouseEventObject>;
export type DeployCollateralAuctionHouseEventFilter = TypedEventFilter<DeployCollateralAuctionHouseEvent>;
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
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface Icollateralauctionhousefactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IcollateralauctionhousefactoryInterface;
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
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
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
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _authorized: boolean;
        }>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<[string[]] & {
            _accounts: string[];
        }>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
            ICollateralAuctionHouse.CollateralAuctionHouseParamsStructOutput
        ] & {
            _cahParams: ICollateralAuctionHouse.CollateralAuctionHouseParamsStructOutput;
        }>;
        collateralAuctionHouses(_cType: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            _collateralAuctionHouse: string;
        }>;
        collateralAuctionHousesList(overrides?: CallOverrides): Promise<[string[]] & {
            _collateralAuctionHouses: string[];
        }>;
        collateralList(overrides?: CallOverrides): Promise<[string[]] & {
            __collateralList: string[];
        }>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        liquidationEngine(overrides?: CallOverrides): Promise<[string] & {
            _liquidationEngine: string;
        }>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        oracleRelayer(overrides?: CallOverrides): Promise<[string] & {
            _oracleRelayer: string;
        }>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<[string] & {
            _safeEngine: string;
        }>;
    };
    _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
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
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<ICollateralAuctionHouse.CollateralAuctionHouseParamsStructOutput>;
    collateralAuctionHouses(_cType: BytesLike, overrides?: CallOverrides): Promise<string>;
    collateralAuctionHousesList(overrides?: CallOverrides): Promise<string[]>;
    collateralList(overrides?: CallOverrides): Promise<string[]>;
    initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    liquidationEngine(overrides?: CallOverrides): Promise<string>;
    "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    oracleRelayer(overrides?: CallOverrides): Promise<string>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    safeEngine(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<[
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
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<ICollateralAuctionHouse.CollateralAuctionHouseParamsStructOutput>;
        collateralAuctionHouses(_cType: BytesLike, overrides?: CallOverrides): Promise<string>;
        collateralAuctionHousesList(overrides?: CallOverrides): Promise<string[]>;
        collateralList(overrides?: CallOverrides): Promise<string[]>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: CallOverrides): Promise<void>;
        liquidationEngine(overrides?: CallOverrides): Promise<string>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        oracleRelayer(overrides?: CallOverrides): Promise<string>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        safeEngine(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "DeployCollateralAuctionHouse(bytes32,address)"(_cType?: BytesLike | null, _collateralAuctionHouse?: string | null): DeployCollateralAuctionHouseEventFilter;
        DeployCollateralAuctionHouse(_cType?: BytesLike | null, _collateralAuctionHouse?: string | null): DeployCollateralAuctionHouseEventFilter;
        "InitializeCollateralType(bytes32)"(_cType?: null): InitializeCollateralTypeEventFilter;
        InitializeCollateralType(_cType?: null): InitializeCollateralTypeEventFilter;
        "ModifyParameters(bytes32,bytes32,bytes)"(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        ModifyParameters(_param?: BytesLike | null, _cType?: BytesLike | null, _data?: null): ModifyParametersEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
    };
    estimateGas: {
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        collateralAuctionHouses(_cType: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        collateralAuctionHousesList(overrides?: CallOverrides): Promise<BigNumber>;
        collateralList(overrides?: CallOverrides): Promise<BigNumber>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        liquidationEngine(overrides?: CallOverrides): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        oracleRelayer(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        safeEngine(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cParams(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralAuctionHouses(_cType: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralAuctionHousesList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralList(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initializeCollateralType(_cType: BytesLike, _collateralParams: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        liquidationEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "modifyParameters(bytes32,bytes32,bytes)"(_cType: BytesLike, _param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "modifyParameters(bytes32,bytes)"(_param: BytesLike, _data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        oracleRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        safeEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
