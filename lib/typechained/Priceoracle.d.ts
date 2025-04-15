import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PriceoracleInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "PRICE_CONTROLLER_ROLE()": FunctionFragment;
        "getAssetName()": FunctionFragment;
        "getLastUpdateTime()": FunctionFragment;
        "getMetadata()": FunctionFragment;
        "getResultWithValidity()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "owner()": FunctionFragment;
        "read()": FunctionFragment;
        "removeController(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setController(address)": FunctionFragment;
        "setMetadata(string)": FunctionFragment;
        "setPrice(uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "PRICE_CONTROLLER_ROLE" | "getAssetName" | "getLastUpdateTime" | "getMetadata" | "getResultWithValidity" | "getRoleAdmin" | "grantRole" | "hasRole" | "owner" | "read" | "removeController" | "renounceOwnership" | "renounceRole" | "revokeRole" | "setController" | "setMetadata" | "setPrice" | "supportsInterface" | "symbol" | "transferOwnership"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PRICE_CONTROLLER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetName", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLastUpdateTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMetadata", values?: undefined): string;
    encodeFunctionData(functionFragment: "getResultWithValidity", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "read", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeController", values: [string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setController", values: [string]): string;
    encodeFunctionData(functionFragment: "setMetadata", values: [string]): string;
    encodeFunctionData(functionFragment: "setPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PRICE_CONTROLLER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastUpdateTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getResultWithValidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setController", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    events: {
        "MetadataUpdated(string)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PriceUpdated(string,uint256,uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MetadataUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PriceUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface MetadataUpdatedEventObject {
    newMetadata: string;
}
export type MetadataUpdatedEvent = TypedEvent<[
    string
], MetadataUpdatedEventObject>;
export type MetadataUpdatedEventFilter = TypedEventFilter<MetadataUpdatedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PriceUpdatedEventObject {
    assetName: string;
    price: BigNumber;
    blockNumber: BigNumber;
}
export type PriceUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], PriceUpdatedEventObject>;
export type PriceUpdatedEventFilter = TypedEventFilter<PriceUpdatedEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface Priceoracle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PriceoracleInterface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        PRICE_CONTROLLER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        getAssetName(overrides?: CallOverrides): Promise<[string]>;
        getLastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        getMetadata(overrides?: CallOverrides): Promise<[string]>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[BigNumber, boolean]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        read(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeController(controller: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setController(controller: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setMetadata(newMetadata_: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPrice(price_: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string] & {
            _symbol: string;
        }>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    PRICE_CONTROLLER_ROLE(overrides?: CallOverrides): Promise<string>;
    getAssetName(overrides?: CallOverrides): Promise<string>;
    getLastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
    getMetadata(overrides?: CallOverrides): Promise<string>;
    getResultWithValidity(overrides?: CallOverrides): Promise<[BigNumber, boolean]>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    read(overrides?: CallOverrides): Promise<BigNumber>;
    removeController(controller: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setController(controller: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setMetadata(newMetadata_: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPrice(price_: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        PRICE_CONTROLLER_ROLE(overrides?: CallOverrides): Promise<string>;
        getAssetName(overrides?: CallOverrides): Promise<string>;
        getLastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        getMetadata(overrides?: CallOverrides): Promise<string>;
        getResultWithValidity(overrides?: CallOverrides): Promise<[BigNumber, boolean]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        removeController(controller: string, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setController(controller: string, overrides?: CallOverrides): Promise<void>;
        setMetadata(newMetadata_: string, overrides?: CallOverrides): Promise<void>;
        setPrice(price_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MetadataUpdated(string)"(newMetadata?: null): MetadataUpdatedEventFilter;
        MetadataUpdated(newMetadata?: null): MetadataUpdatedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "PriceUpdated(string,uint256,uint256)"(assetName?: null, price?: null, blockNumber?: null): PriceUpdatedEventFilter;
        PriceUpdated(assetName?: null, price?: null, blockNumber?: null): PriceUpdatedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        PRICE_CONTROLLER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetName(overrides?: CallOverrides): Promise<BigNumber>;
        getLastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;
        getMetadata(overrides?: CallOverrides): Promise<BigNumber>;
        getResultWithValidity(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        read(overrides?: CallOverrides): Promise<BigNumber>;
        removeController(controller: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setController(controller: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setMetadata(newMetadata_: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPrice(price_: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PRICE_CONTROLLER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetName(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMetadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getResultWithValidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        read(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeController(controller: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setController(controller: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setMetadata(newMetadata_: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPrice(price_: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
