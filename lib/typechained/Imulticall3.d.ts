import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IMulticall3 {
    type CallStruct = {
        target: string;
        callData: BytesLike;
    };
    type CallStructOutput = [string, string] & {
        target: string;
        callData: string;
    };
    type Call3Struct = {
        target: string;
        allowFailure: boolean;
        callData: BytesLike;
    };
    type Call3StructOutput = [string, boolean, string] & {
        target: string;
        allowFailure: boolean;
        callData: string;
    };
    type ResultStruct = {
        success: boolean;
        returnData: BytesLike;
    };
    type ResultStructOutput = [boolean, string] & {
        success: boolean;
        returnData: string;
    };
    type Call3ValueStruct = {
        target: string;
        allowFailure: boolean;
        value: BigNumberish;
        callData: BytesLike;
    };
    type Call3ValueStructOutput = [string, boolean, BigNumber, string] & {
        target: string;
        allowFailure: boolean;
        value: BigNumber;
        callData: string;
    };
}
export interface Imulticall3Interface extends utils.Interface {
    functions: {
        "aggregate((address,bytes)[])": FunctionFragment;
        "aggregate3((address,bool,bytes)[])": FunctionFragment;
        "aggregate3Value((address,bool,uint256,bytes)[])": FunctionFragment;
        "blockAndAggregate((address,bytes)[])": FunctionFragment;
        "getBasefee()": FunctionFragment;
        "getBlockHash(uint256)": FunctionFragment;
        "getBlockNumber()": FunctionFragment;
        "getChainId()": FunctionFragment;
        "getCurrentBlockCoinbase()": FunctionFragment;
        "getCurrentBlockDifficulty()": FunctionFragment;
        "getCurrentBlockGasLimit()": FunctionFragment;
        "getCurrentBlockTimestamp()": FunctionFragment;
        "getEthBalance(address)": FunctionFragment;
        "getLastBlockHash()": FunctionFragment;
        "tryAggregate(bool,(address,bytes)[])": FunctionFragment;
        "tryBlockAndAggregate(bool,(address,bytes)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "aggregate" | "aggregate3" | "aggregate3Value" | "blockAndAggregate" | "getBasefee" | "getBlockHash" | "getBlockNumber" | "getChainId" | "getCurrentBlockCoinbase" | "getCurrentBlockDifficulty" | "getCurrentBlockGasLimit" | "getCurrentBlockTimestamp" | "getEthBalance" | "getLastBlockHash" | "tryAggregate" | "tryBlockAndAggregate"): FunctionFragment;
    encodeFunctionData(functionFragment: "aggregate", values: [IMulticall3.CallStruct[]]): string;
    encodeFunctionData(functionFragment: "aggregate3", values: [IMulticall3.Call3Struct[]]): string;
    encodeFunctionData(functionFragment: "aggregate3Value", values: [IMulticall3.Call3ValueStruct[]]): string;
    encodeFunctionData(functionFragment: "blockAndAggregate", values: [IMulticall3.CallStruct[]]): string;
    encodeFunctionData(functionFragment: "getBasefee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBlockHash", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "getChainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentBlockCoinbase", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentBlockDifficulty", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentBlockGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getCurrentBlockTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEthBalance", values: [string]): string;
    encodeFunctionData(functionFragment: "getLastBlockHash", values?: undefined): string;
    encodeFunctionData(functionFragment: "tryAggregate", values: [boolean, IMulticall3.CallStruct[]]): string;
    encodeFunctionData(functionFragment: "tryBlockAndAggregate", values: [boolean, IMulticall3.CallStruct[]]): string;
    decodeFunctionResult(functionFragment: "aggregate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aggregate3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aggregate3Value", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blockAndAggregate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBasefee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlockHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlockNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockCoinbase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockDifficulty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentBlockTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEthBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastBlockHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryAggregate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryBlockAndAggregate", data: BytesLike): Result;
    events: {};
}
export interface Imulticall3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Imulticall3Interface;
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
        aggregate(calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        aggregate3(calls: IMulticall3.Call3Struct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        aggregate3Value(calls: IMulticall3.Call3ValueStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        blockAndAggregate(calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getBasefee(overrides?: CallOverrides): Promise<[BigNumber] & {
            basefee: BigNumber;
        }>;
        getBlockHash(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            blockHash: string;
        }>;
        getBlockNumber(overrides?: CallOverrides): Promise<[BigNumber] & {
            blockNumber: BigNumber;
        }>;
        getChainId(overrides?: CallOverrides): Promise<[BigNumber] & {
            chainid: BigNumber;
        }>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<[string] & {
            coinbase: string;
        }>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<[BigNumber] & {
            difficulty: BigNumber;
        }>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<[BigNumber] & {
            gaslimit: BigNumber;
        }>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<[BigNumber] & {
            timestamp: BigNumber;
        }>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        getLastBlockHash(overrides?: CallOverrides): Promise<[string] & {
            blockHash: string;
        }>;
        tryAggregate(requireSuccess: boolean, calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        tryBlockAndAggregate(requireSuccess: boolean, calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    aggregate(calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    aggregate3(calls: IMulticall3.Call3Struct[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    aggregate3Value(calls: IMulticall3.Call3ValueStruct[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    blockAndAggregate(calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getBasefee(overrides?: CallOverrides): Promise<BigNumber>;
    getBlockHash(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
    getChainId(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>;
    getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    getLastBlockHash(overrides?: CallOverrides): Promise<string>;
    tryAggregate(requireSuccess: boolean, calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    tryBlockAndAggregate(requireSuccess: boolean, calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        aggregate(calls: IMulticall3.CallStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            string[]
        ] & {
            blockNumber: BigNumber;
            returnData: string[];
        }>;
        aggregate3(calls: IMulticall3.Call3Struct[], overrides?: CallOverrides): Promise<IMulticall3.ResultStructOutput[]>;
        aggregate3Value(calls: IMulticall3.Call3ValueStruct[], overrides?: CallOverrides): Promise<IMulticall3.ResultStructOutput[]>;
        blockAndAggregate(calls: IMulticall3.CallStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            IMulticall3.ResultStructOutput[]
        ] & {
            blockNumber: BigNumber;
            blockHash: string;
            returnData: IMulticall3.ResultStructOutput[];
        }>;
        getBasefee(overrides?: CallOverrides): Promise<BigNumber>;
        getBlockHash(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<string>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLastBlockHash(overrides?: CallOverrides): Promise<string>;
        tryAggregate(requireSuccess: boolean, calls: IMulticall3.CallStruct[], overrides?: CallOverrides): Promise<IMulticall3.ResultStructOutput[]>;
        tryBlockAndAggregate(requireSuccess: boolean, calls: IMulticall3.CallStruct[], overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            IMulticall3.ResultStructOutput[]
        ] & {
            blockNumber: BigNumber;
            blockHash: string;
            returnData: IMulticall3.ResultStructOutput[];
        }>;
    };
    filters: {};
    estimateGas: {
        aggregate(calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        aggregate3(calls: IMulticall3.Call3Struct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        aggregate3Value(calls: IMulticall3.Call3ValueStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        blockAndAggregate(calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        getBasefee(overrides?: CallOverrides): Promise<BigNumber>;
        getBlockHash(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        getChainId(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLastBlockHash(overrides?: CallOverrides): Promise<BigNumber>;
        tryAggregate(requireSuccess: boolean, calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        tryBlockAndAggregate(requireSuccess: boolean, calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        aggregate(calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        aggregate3(calls: IMulticall3.Call3Struct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        aggregate3Value(calls: IMulticall3.Call3ValueStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        blockAndAggregate(calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getBasefee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBlockHash(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockCoinbase(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockDifficulty(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getEthBalance(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastBlockHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tryAggregate(requireSuccess: boolean, calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        tryBlockAndAggregate(requireSuccess: boolean, calls: IMulticall3.CallStruct[], overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
