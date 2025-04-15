import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ISystemCoinInterface extends utils.Interface {
    functions: {
        "addAuthorization(address)": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "mint(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAuthorization" | "allowance" | "approve" | "authorizedAccounts(address)" | "authorizedAccounts()" | "balanceOf" | "burn" | "decimals" | "mint" | "name" | "removeAuthorization" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ISystemCoin extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISystemCoinInterface;
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
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _authorized: boolean;
        }>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<[string[]] & {
            _accounts: string[];
        }>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        mint(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(_amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<number>;
    mint(_account: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<number>;
        mint(_account: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        mint(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(_amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
