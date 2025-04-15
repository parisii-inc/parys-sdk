import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IMerkleDistributorInterface extends utils.Interface {
    functions: {
        "claim(uint256,address,uint256,bytes32[])": FunctionFragment;
        "deploymentTime()": FunctionFragment;
        "isClaimed(uint256)": FunctionFragment;
        "merkleRoot()": FunctionFragment;
        "owner()": FunctionFragment;
        "sendTokens(address,uint256)": FunctionFragment;
        "timelapseUntilWithdrawWindow()": FunctionFragment;
        "token()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim" | "deploymentTime" | "isClaimed" | "merkleRoot" | "owner" | "sendTokens" | "timelapseUntilWithdrawWindow" | "token"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [BigNumberish, string, BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "deploymentTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "isClaimed", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "merkleRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "sendTokens", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "timelapseUntilWithdrawWindow", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deploymentTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timelapseUntilWithdrawWindow", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "Claimed(uint256,address,uint256)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "SendTokens(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendTokens"): EventFragment;
}
export interface AddAuthorizationEventObject {
    account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface ClaimedEventObject {
    index: BigNumber;
    account: string;
    amount: BigNumber;
}
export type ClaimedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], ClaimedEventObject>;
export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;
export interface RemoveAuthorizationEventObject {
    account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface SendTokensEventObject {
    dst: string;
    tokenAmount: BigNumber;
}
export type SendTokensEvent = TypedEvent<[
    string,
    BigNumber
], SendTokensEventObject>;
export type SendTokensEventFilter = TypedEventFilter<SendTokensEvent>;
export interface IMerkleDistributor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IMerkleDistributorInterface;
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
        claim(index: BigNumberish, account: string, amount: BigNumberish, merkleProof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deploymentTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        merkleRoot(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        sendTokens(dst: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        timelapseUntilWithdrawWindow(overrides?: CallOverrides): Promise<[BigNumber]>;
        token(overrides?: CallOverrides): Promise<[string]>;
    };
    claim(index: BigNumberish, account: string, amount: BigNumberish, merkleProof: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deploymentTime(overrides?: CallOverrides): Promise<BigNumber>;
    isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    merkleRoot(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    sendTokens(dst: string, tokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    timelapseUntilWithdrawWindow(overrides?: CallOverrides): Promise<BigNumber>;
    token(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        claim(index: BigNumberish, account: string, amount: BigNumberish, merkleProof: BytesLike[], overrides?: CallOverrides): Promise<void>;
        deploymentTime(overrides?: CallOverrides): Promise<BigNumber>;
        isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        merkleRoot(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        sendTokens(dst: string, tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        timelapseUntilWithdrawWindow(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddAuthorization(address)"(account?: null): AddAuthorizationEventFilter;
        AddAuthorization(account?: null): AddAuthorizationEventFilter;
        "Claimed(uint256,address,uint256)"(index?: null, account?: null, amount?: null): ClaimedEventFilter;
        Claimed(index?: null, account?: null, amount?: null): ClaimedEventFilter;
        "RemoveAuthorization(address)"(account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(account?: null): RemoveAuthorizationEventFilter;
        "SendTokens(address,uint256)"(dst?: null, tokenAmount?: null): SendTokensEventFilter;
        SendTokens(dst?: null, tokenAmount?: null): SendTokensEventFilter;
    };
    estimateGas: {
        claim(index: BigNumberish, account: string, amount: BigNumberish, merkleProof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deploymentTime(overrides?: CallOverrides): Promise<BigNumber>;
        isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        sendTokens(dst: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        timelapseUntilWithdrawWindow(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(index: BigNumberish, account: string, amount: BigNumberish, merkleProof: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deploymentTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sendTokens(dst: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        timelapseUntilWithdrawWindow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
