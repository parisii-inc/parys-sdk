import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TimelockcontrollerInterface extends utils.Interface {
    functions: {
        "CANCELLER_ROLE()": FunctionFragment;
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "EXECUTOR_ROLE()": FunctionFragment;
        "PROPOSER_ROLE()": FunctionFragment;
        "cancel(bytes32)": FunctionFragment;
        "execute(address,uint256,bytes,bytes32,bytes32)": FunctionFragment;
        "executeBatch(address[],uint256[],bytes[],bytes32,bytes32)": FunctionFragment;
        "getMinDelay()": FunctionFragment;
        "getOperationState(bytes32)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getTimestamp(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "hashOperation(address,uint256,bytes,bytes32,bytes32)": FunctionFragment;
        "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)": FunctionFragment;
        "isOperation(bytes32)": FunctionFragment;
        "isOperationDone(bytes32)": FunctionFragment;
        "isOperationPending(bytes32)": FunctionFragment;
        "isOperationReady(bytes32)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "schedule(address,uint256,bytes,bytes32,bytes32,uint256)": FunctionFragment;
        "scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "updateDelay(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CANCELLER_ROLE" | "DEFAULT_ADMIN_ROLE" | "EXECUTOR_ROLE" | "PROPOSER_ROLE" | "cancel" | "execute" | "executeBatch" | "getMinDelay" | "getOperationState" | "getRoleAdmin" | "getTimestamp" | "grantRole" | "hasRole" | "hashOperation" | "hashOperationBatch" | "isOperation" | "isOperationDone" | "isOperationPending" | "isOperationReady" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "renounceRole" | "revokeRole" | "schedule" | "scheduleBatch" | "supportsInterface" | "updateDelay"): FunctionFragment;
    encodeFunctionData(functionFragment: "CANCELLER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "EXECUTOR_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PROPOSER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancel", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "execute", values: [string, BigNumberish, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeBatch", values: [string[], BigNumberish[], BytesLike[], BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "getMinDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOperationState", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTimestamp", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hashOperation", values: [string, BigNumberish, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "hashOperationBatch", values: [string[], BigNumberish[], BytesLike[], BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "isOperation", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isOperationDone", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isOperationPending", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isOperationReady", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "schedule", values: [
        string,
        BigNumberish,
        BytesLike,
        BytesLike,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "scheduleBatch", values: [
        string[],
        BigNumberish[],
        BytesLike[],
        BytesLike,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updateDelay", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "CANCELLER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EXECUTOR_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PROPOSER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOperationState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashOperationBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperationDone", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperationPending", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperationReady", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "schedule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scheduleBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDelay", data: BytesLike): Result;
    events: {
        "CallExecuted(bytes32,uint256,address,uint256,bytes)": EventFragment;
        "CallSalt(bytes32,bytes32)": EventFragment;
        "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)": EventFragment;
        "Cancelled(bytes32)": EventFragment;
        "MinDelayChange(uint256,uint256)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CallExecuted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CallSalt"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CallScheduled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Cancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinDelayChange"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface CallExecutedEventObject {
    id: string;
    index: BigNumber;
    target: string;
    value: BigNumber;
    data: string;
}
export type CallExecutedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    string
], CallExecutedEventObject>;
export type CallExecutedEventFilter = TypedEventFilter<CallExecutedEvent>;
export interface CallSaltEventObject {
    id: string;
    salt: string;
}
export type CallSaltEvent = TypedEvent<[string, string], CallSaltEventObject>;
export type CallSaltEventFilter = TypedEventFilter<CallSaltEvent>;
export interface CallScheduledEventObject {
    id: string;
    index: BigNumber;
    target: string;
    value: BigNumber;
    data: string;
    predecessor: string;
    delay: BigNumber;
}
export type CallScheduledEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    BigNumber
], CallScheduledEventObject>;
export type CallScheduledEventFilter = TypedEventFilter<CallScheduledEvent>;
export interface CancelledEventObject {
    id: string;
}
export type CancelledEvent = TypedEvent<[string], CancelledEventObject>;
export type CancelledEventFilter = TypedEventFilter<CancelledEvent>;
export interface MinDelayChangeEventObject {
    oldDuration: BigNumber;
    newDuration: BigNumber;
}
export type MinDelayChangeEvent = TypedEvent<[
    BigNumber,
    BigNumber
], MinDelayChangeEventObject>;
export type MinDelayChangeEventFilter = TypedEventFilter<MinDelayChangeEvent>;
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
export interface Timelockcontroller extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TimelockcontrollerInterface;
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
        CANCELLER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        EXECUTOR_ROLE(overrides?: CallOverrides): Promise<[string]>;
        PROPOSER_ROLE(overrides?: CallOverrides): Promise<[string]>;
        cancel(id: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        execute(target: string, value: BigNumberish, payload: BytesLike, predecessor: BytesLike, salt: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getMinDelay(overrides?: CallOverrides): Promise<[BigNumber]>;
        getOperationState(id: BytesLike, overrides?: CallOverrides): Promise<[number]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getTimestamp(id: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        hashOperation(target: string, value: BigNumberish, data: BytesLike, predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        hashOperationBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        isOperation(id: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isOperationDone(id: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isOperationPending(id: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isOperationReady(id: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        schedule(target: string, value: BigNumberish, data: BytesLike, predecessor: BytesLike, salt: BytesLike, delay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        scheduleBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, delay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        updateDelay(newDelay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    CANCELLER_ROLE(overrides?: CallOverrides): Promise<string>;
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    EXECUTOR_ROLE(overrides?: CallOverrides): Promise<string>;
    PROPOSER_ROLE(overrides?: CallOverrides): Promise<string>;
    cancel(id: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    execute(target: string, value: BigNumberish, payload: BytesLike, predecessor: BytesLike, salt: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;
    getOperationState(id: BytesLike, overrides?: CallOverrides): Promise<number>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getTimestamp(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    hashOperation(target: string, value: BigNumberish, data: BytesLike, predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<string>;
    hashOperationBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<string>;
    isOperation(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isOperationDone(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isOperationPending(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isOperationReady(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    schedule(target: string, value: BigNumberish, data: BytesLike, predecessor: BytesLike, salt: BytesLike, delay: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    scheduleBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, delay: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    updateDelay(newDelay: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        CANCELLER_ROLE(overrides?: CallOverrides): Promise<string>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        EXECUTOR_ROLE(overrides?: CallOverrides): Promise<string>;
        PROPOSER_ROLE(overrides?: CallOverrides): Promise<string>;
        cancel(id: BytesLike, overrides?: CallOverrides): Promise<void>;
        execute(target: string, value: BigNumberish, payload: BytesLike, predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<void>;
        executeBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<void>;
        getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;
        getOperationState(id: BytesLike, overrides?: CallOverrides): Promise<number>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getTimestamp(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        hashOperation(target: string, value: BigNumberish, data: BytesLike, predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<string>;
        hashOperationBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<string>;
        isOperation(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isOperationDone(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isOperationPending(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isOperationReady(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        schedule(target: string, value: BigNumberish, data: BytesLike, predecessor: BytesLike, salt: BytesLike, delay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        scheduleBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, delay: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        updateDelay(newDelay: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CallExecuted(bytes32,uint256,address,uint256,bytes)"(id?: BytesLike | null, index?: BigNumberish | null, target?: null, value?: null, data?: null): CallExecutedEventFilter;
        CallExecuted(id?: BytesLike | null, index?: BigNumberish | null, target?: null, value?: null, data?: null): CallExecutedEventFilter;
        "CallSalt(bytes32,bytes32)"(id?: BytesLike | null, salt?: null): CallSaltEventFilter;
        CallSalt(id?: BytesLike | null, salt?: null): CallSaltEventFilter;
        "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)"(id?: BytesLike | null, index?: BigNumberish | null, target?: null, value?: null, data?: null, predecessor?: null, delay?: null): CallScheduledEventFilter;
        CallScheduled(id?: BytesLike | null, index?: BigNumberish | null, target?: null, value?: null, data?: null, predecessor?: null, delay?: null): CallScheduledEventFilter;
        "Cancelled(bytes32)"(id?: BytesLike | null): CancelledEventFilter;
        Cancelled(id?: BytesLike | null): CancelledEventFilter;
        "MinDelayChange(uint256,uint256)"(oldDuration?: null, newDuration?: null): MinDelayChangeEventFilter;
        MinDelayChange(oldDuration?: null, newDuration?: null): MinDelayChangeEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        CANCELLER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        EXECUTOR_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        PROPOSER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        cancel(id: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        execute(target: string, value: BigNumberish, payload: BytesLike, predecessor: BytesLike, salt: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;
        getOperationState(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getTimestamp(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hashOperation(target: string, value: BigNumberish, data: BytesLike, predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        hashOperationBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isOperation(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isOperationDone(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isOperationPending(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isOperationReady(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        schedule(target: string, value: BigNumberish, data: BytesLike, predecessor: BytesLike, salt: BytesLike, delay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        scheduleBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, delay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        updateDelay(newDelay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CANCELLER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        EXECUTOR_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        PROPOSER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancel(id: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        execute(target: string, value: BigNumberish, payload: BytesLike, predecessor: BytesLike, salt: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getMinDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOperationState(id: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTimestamp(id: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashOperation(target: string, value: BigNumberish, data: BytesLike, predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashOperationBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperation(id: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperationDone(id: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperationPending(id: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperationReady(id: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, callerConfirmation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        schedule(target: string, value: BigNumberish, data: BytesLike, predecessor: BytesLike, salt: BytesLike, delay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        scheduleBatch(targets: string[], values: BigNumberish[], payloads: BytesLike[], predecessor: BytesLike, salt: BytesLike, delay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateDelay(newDelay: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
