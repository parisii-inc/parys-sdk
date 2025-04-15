import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ItokendistributorInterface extends utils.Interface {
    functions: {
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "authorizedAccounts()": FunctionFragment;
        "canClaim(bytes32[],address,uint256)": FunctionFragment;
        "claim(bytes32[],uint256)": FunctionFragment;
        "claimAndDelegate(bytes32[],uint256,address,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "claimPeriodEnd()": FunctionFragment;
        "claimPeriodStart()": FunctionFragment;
        "claimed(address)": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "root()": FunctionFragment;
        "sweep(address)": FunctionFragment;
        "token()": FunctionFragment;
        "totalClaimable()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAuthorization" | "authorizedAccounts(address)" | "authorizedAccounts()" | "canClaim" | "claim" | "claimAndDelegate" | "claimPeriodEnd" | "claimPeriodStart" | "claimed" | "removeAuthorization" | "root" | "sweep" | "token" | "totalClaimable"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts()", values?: undefined): string;
    encodeFunctionData(functionFragment: "canClaim", values: [BytesLike[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claim", values: [BytesLike[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimAndDelegate", values: [
        BytesLike[],
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "claimPeriodEnd", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimPeriodStart", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimed", values: [string]): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "root", values?: undefined): string;
    encodeFunctionData(functionFragment: "sweep", values: [string]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalClaimable", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimAndDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimPeriodEnd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimPeriodStart", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalClaimable", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "Claimed(address,uint256)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "Swept(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Swept"): EventFragment;
}
export interface AddAuthorizationEventObject {
    _account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface ClaimedEventObject {
    _user: string;
    _amount: BigNumber;
}
export type ClaimedEvent = TypedEvent<[string, BigNumber], ClaimedEventObject>;
export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;
export interface RemoveAuthorizationEventObject {
    _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface SweptEventObject {
    _sweepReceiver: string;
    _amount: BigNumber;
}
export type SweptEvent = TypedEvent<[string, BigNumber], SweptEventObject>;
export type SweptEventFilter = TypedEventFilter<SweptEvent>;
export interface Itokendistributor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ItokendistributorInterface;
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
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<[boolean] & {
            _authorized: boolean;
        }>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<[string[]] & {
            _accounts: string[];
        }>;
        canClaim(_proof: BytesLike[], _user: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<[boolean] & {
            _claimable: boolean;
        }>;
        claim(_proof: BytesLike[], _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimAndDelegate(_proof: BytesLike[], _amount: BigNumberish, _delegatee: string, _expiry: BigNumberish, _v: BigNumberish, _r: BytesLike, _s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        claimPeriodEnd(overrides?: CallOverrides): Promise<[BigNumber] & {
            _claimPeriodEnd: BigNumber;
        }>;
        claimPeriodStart(overrides?: CallOverrides): Promise<[BigNumber] & {
            _claimPeriodStart: BigNumber;
        }>;
        claimed(_user: string, overrides?: CallOverrides): Promise<[boolean] & {
            _claimed: boolean;
        }>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        root(overrides?: CallOverrides): Promise<[string] & {
            _root: string;
        }>;
        sweep(_sweepReceiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        token(overrides?: CallOverrides): Promise<[string] & {
            _token: string;
        }>;
        totalClaimable(overrides?: CallOverrides): Promise<[BigNumber] & {
            _totalClaimable: BigNumber;
        }>;
    };
    addAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
    canClaim(_proof: BytesLike[], _user: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    claim(_proof: BytesLike[], _amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimAndDelegate(_proof: BytesLike[], _amount: BigNumberish, _delegatee: string, _expiry: BigNumberish, _v: BigNumberish, _r: BytesLike, _s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    claimPeriodEnd(overrides?: CallOverrides): Promise<BigNumber>;
    claimPeriodStart(overrides?: CallOverrides): Promise<BigNumber>;
    claimed(_user: string, overrides?: CallOverrides): Promise<boolean>;
    removeAuthorization(_account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    root(overrides?: CallOverrides): Promise<string>;
    sweep(_sweepReceiver: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    token(overrides?: CallOverrides): Promise<string>;
    totalClaimable(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<boolean>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;
        canClaim(_proof: BytesLike[], _user: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        claim(_proof: BytesLike[], _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimAndDelegate(_proof: BytesLike[], _amount: BigNumberish, _delegatee: string, _expiry: BigNumberish, _v: BigNumberish, _r: BytesLike, _s: BytesLike, overrides?: CallOverrides): Promise<void>;
        claimPeriodEnd(overrides?: CallOverrides): Promise<BigNumber>;
        claimPeriodStart(overrides?: CallOverrides): Promise<BigNumber>;
        claimed(_user: string, overrides?: CallOverrides): Promise<boolean>;
        removeAuthorization(_account: string, overrides?: CallOverrides): Promise<void>;
        root(overrides?: CallOverrides): Promise<string>;
        sweep(_sweepReceiver: string, overrides?: CallOverrides): Promise<void>;
        token(overrides?: CallOverrides): Promise<string>;
        totalClaimable(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
        AddAuthorization(_account?: null): AddAuthorizationEventFilter;
        "Claimed(address,uint256)"(_user?: null, _amount?: null): ClaimedEventFilter;
        Claimed(_user?: null, _amount?: null): ClaimedEventFilter;
        "RemoveAuthorization(address)"(_account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
        "Swept(address,uint256)"(_sweepReceiver?: null, _amount?: null): SweptEventFilter;
        Swept(_sweepReceiver?: null, _amount?: null): SweptEventFilter;
    };
    estimateGas: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;
        canClaim(_proof: BytesLike[], _user: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claim(_proof: BytesLike[], _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimAndDelegate(_proof: BytesLike[], _amount: BigNumberish, _delegatee: string, _expiry: BigNumberish, _v: BigNumberish, _r: BytesLike, _s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        claimPeriodEnd(overrides?: CallOverrides): Promise<BigNumber>;
        claimPeriodStart(overrides?: CallOverrides): Promise<BigNumber>;
        claimed(_user: string, overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        root(overrides?: CallOverrides): Promise<BigNumber>;
        sweep(_sweepReceiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        totalClaimable(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "authorizedAccounts(address)"(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "authorizedAccounts()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        canClaim(_proof: BytesLike[], _user: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(_proof: BytesLike[], _amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimAndDelegate(_proof: BytesLike[], _amount: BigNumberish, _delegatee: string, _expiry: BigNumberish, _v: BigNumberish, _r: BytesLike, _s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        claimPeriodEnd(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimPeriodStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimed(_user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(_account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        root(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sweep(_sweepReceiver: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalClaimable(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
