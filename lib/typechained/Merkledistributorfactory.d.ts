import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MerkledistributorfactoryInterface extends utils.Interface {
    functions: {
        "addAuthorization(address)": FunctionFragment;
        "authorizedAccounts(address)": FunctionFragment;
        "deployDistributor(bytes32,uint256)": FunctionFragment;
        "distributedToken()": FunctionFragment;
        "distributors(uint256)": FunctionFragment;
        "dropDistributorAuth(uint256)": FunctionFragment;
        "getBackTokensFromDistributor(uint256,uint256)": FunctionFragment;
        "nonce()": FunctionFragment;
        "removeAuthorization(address)": FunctionFragment;
        "sendTokensToCustom(address,uint256)": FunctionFragment;
        "sendTokensToDistributor(uint256)": FunctionFragment;
        "tokensToDistribute(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addAuthorization" | "authorizedAccounts" | "deployDistributor" | "distributedToken" | "distributors" | "dropDistributorAuth" | "getBackTokensFromDistributor" | "nonce" | "removeAuthorization" | "sendTokensToCustom" | "sendTokensToDistributor" | "tokensToDistribute"): FunctionFragment;
    encodeFunctionData(functionFragment: "addAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "authorizedAccounts", values: [string]): string;
    encodeFunctionData(functionFragment: "deployDistributor", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "distributedToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "distributors", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "dropDistributorAuth", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBackTokensFromDistributor", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeAuthorization", values: [string]): string;
    encodeFunctionData(functionFragment: "sendTokensToCustom", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sendTokensToDistributor", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokensToDistribute", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorizedAccounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployDistributor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributedToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "distributors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dropDistributorAuth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBackTokensFromDistributor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeAuthorization", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendTokensToCustom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendTokensToDistributor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensToDistribute", data: BytesLike): Result;
    events: {
        "AddAuthorization(address)": EventFragment;
        "DeployDistributor(uint256,address,uint256)": EventFragment;
        "RemoveAuthorization(address)": EventFragment;
        "SendTokensToDistributor(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DeployDistributor"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SendTokensToDistributor"): EventFragment;
}
export interface AddAuthorizationEventObject {
    account: string;
}
export type AddAuthorizationEvent = TypedEvent<[
    string
], AddAuthorizationEventObject>;
export type AddAuthorizationEventFilter = TypedEventFilter<AddAuthorizationEvent>;
export interface DeployDistributorEventObject {
    id: BigNumber;
    distributor: string;
    tokenAmount: BigNumber;
}
export type DeployDistributorEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], DeployDistributorEventObject>;
export type DeployDistributorEventFilter = TypedEventFilter<DeployDistributorEvent>;
export interface RemoveAuthorizationEventObject {
    account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<[
    string
], RemoveAuthorizationEventObject>;
export type RemoveAuthorizationEventFilter = TypedEventFilter<RemoveAuthorizationEvent>;
export interface SendTokensToDistributorEventObject {
    id: BigNumber;
}
export type SendTokensToDistributorEvent = TypedEvent<[
    BigNumber
], SendTokensToDistributorEventObject>;
export type SendTokensToDistributorEventFilter = TypedEventFilter<SendTokensToDistributorEvent>;
export interface Merkledistributorfactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MerkledistributorfactoryInterface;
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
        addAuthorization(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        authorizedAccounts(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        deployDistributor(merkleRoot: BytesLike, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        distributedToken(overrides?: CallOverrides): Promise<[string]>;
        distributors(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        dropDistributorAuth(id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getBackTokensFromDistributor(id: BigNumberish, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        nonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        removeAuthorization(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sendTokensToCustom(dst: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sendTokensToDistributor(id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        tokensToDistribute(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    addAuthorization(account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    authorizedAccounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    deployDistributor(merkleRoot: BytesLike, tokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    distributedToken(overrides?: CallOverrides): Promise<string>;
    distributors(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    dropDistributorAuth(id: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getBackTokensFromDistributor(id: BigNumberish, tokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    nonce(overrides?: CallOverrides): Promise<BigNumber>;
    removeAuthorization(account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sendTokensToCustom(dst: string, tokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sendTokensToDistributor(id: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    tokensToDistribute(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addAuthorization(account: string, overrides?: CallOverrides): Promise<void>;
        authorizedAccounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        deployDistributor(merkleRoot: BytesLike, tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        distributedToken(overrides?: CallOverrides): Promise<string>;
        distributors(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        dropDistributorAuth(id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getBackTokensFromDistributor(id: BigNumberish, tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(account: string, overrides?: CallOverrides): Promise<void>;
        sendTokensToCustom(dst: string, tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        sendTokensToDistributor(id: BigNumberish, overrides?: CallOverrides): Promise<void>;
        tokensToDistribute(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AddAuthorization(address)"(account?: null): AddAuthorizationEventFilter;
        AddAuthorization(account?: null): AddAuthorizationEventFilter;
        "DeployDistributor(uint256,address,uint256)"(id?: null, distributor?: null, tokenAmount?: null): DeployDistributorEventFilter;
        DeployDistributor(id?: null, distributor?: null, tokenAmount?: null): DeployDistributorEventFilter;
        "RemoveAuthorization(address)"(account?: null): RemoveAuthorizationEventFilter;
        RemoveAuthorization(account?: null): RemoveAuthorizationEventFilter;
        "SendTokensToDistributor(uint256)"(id?: null): SendTokensToDistributorEventFilter;
        SendTokensToDistributor(id?: null): SendTokensToDistributorEventFilter;
    };
    estimateGas: {
        addAuthorization(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        authorizedAccounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        deployDistributor(merkleRoot: BytesLike, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        distributedToken(overrides?: CallOverrides): Promise<BigNumber>;
        distributors(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        dropDistributorAuth(id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getBackTokensFromDistributor(id: BigNumberish, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        removeAuthorization(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sendTokensToCustom(dst: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sendTokensToDistributor(id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        tokensToDistribute(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addAuthorization(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        authorizedAccounts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deployDistributor(merkleRoot: BytesLike, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        distributedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        distributors(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dropDistributorAuth(id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getBackTokensFromDistributor(id: BigNumberish, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removeAuthorization(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sendTokensToCustom(dst: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sendTokensToDistributor(id: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        tokensToDistribute(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
