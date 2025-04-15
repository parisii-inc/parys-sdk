import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace VmSafe {
    type AccessListItemStruct = {
        target: string;
        storageKeys: BytesLike[];
    };
    type AccessListItemStructOutput = [string, string[]] & {
        target: string;
        storageKeys: string[];
    };
    type PotentialRevertStruct = {
        reverter: string;
        partialMatch: boolean;
        revertData: BytesLike;
    };
    type PotentialRevertStructOutput = [string, boolean, string] & {
        reverter: string;
        partialMatch: boolean;
        revertData: string;
    };
    type SignedDelegationStruct = {
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
        nonce: BigNumberish;
        implementation: string;
    };
    type SignedDelegationStructOutput = [
        number,
        string,
        string,
        BigNumber,
        string
    ] & {
        v: number;
        r: string;
        s: string;
        nonce: BigNumber;
        implementation: string;
    };
    type WalletStruct = {
        addr: string;
        publicKeyX: BigNumberish;
        publicKeyY: BigNumberish;
        privateKey: BigNumberish;
    };
    type WalletStructOutput = [string, BigNumber, BigNumber, BigNumber] & {
        addr: string;
        publicKeyX: BigNumber;
        publicKeyY: BigNumber;
        privateKey: BigNumber;
    };
    type EthGetLogsStruct = {
        emitter: string;
        topics: BytesLike[];
        data: BytesLike;
        blockHash: BytesLike;
        blockNumber: BigNumberish;
        transactionHash: BytesLike;
        transactionIndex: BigNumberish;
        logIndex: BigNumberish;
        removed: boolean;
    };
    type EthGetLogsStructOutput = [
        string,
        string[],
        string,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        emitter: string;
        topics: string[];
        data: string;
        blockHash: string;
        blockNumber: BigNumber;
        transactionHash: string;
        transactionIndex: BigNumber;
        logIndex: BigNumber;
        removed: boolean;
    };
    type FsMetadataStruct = {
        isDir: boolean;
        isSymlink: boolean;
        length: BigNumberish;
        readOnly: boolean;
        modified: BigNumberish;
        accessed: BigNumberish;
        created: BigNumberish;
    };
    type FsMetadataStructOutput = [
        boolean,
        boolean,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        isDir: boolean;
        isSymlink: boolean;
        length: BigNumber;
        readOnly: boolean;
        modified: BigNumber;
        accessed: BigNumber;
        created: BigNumber;
    };
    type BroadcastTxSummaryStruct = {
        txHash: BytesLike;
        txType: BigNumberish;
        contractAddress: string;
        blockNumber: BigNumberish;
        success: boolean;
    };
    type BroadcastTxSummaryStructOutput = [
        string,
        number,
        string,
        BigNumber,
        boolean
    ] & {
        txHash: string;
        txType: number;
        contractAddress: string;
        blockNumber: BigNumber;
        success: boolean;
    };
    type LogStruct = {
        topics: BytesLike[];
        data: BytesLike;
        emitter: string;
    };
    type LogStructOutput = [string[], string, string] & {
        topics: string[];
        data: string;
        emitter: string;
    };
    type GasStruct = {
        gasLimit: BigNumberish;
        gasTotalUsed: BigNumberish;
        gasMemoryUsed: BigNumberish;
        gasRefunded: BigNumberish;
        gasRemaining: BigNumberish;
    };
    type GasStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        gasLimit: BigNumber;
        gasTotalUsed: BigNumber;
        gasMemoryUsed: BigNumber;
        gasRefunded: BigNumber;
        gasRemaining: BigNumber;
    };
    type DirEntryStruct = {
        errorMessage: string;
        path: string;
        depth: BigNumberish;
        isDir: boolean;
        isSymlink: boolean;
    };
    type DirEntryStructOutput = [
        string,
        string,
        BigNumber,
        boolean,
        boolean
    ] & {
        errorMessage: string;
        path: string;
        depth: BigNumber;
        isDir: boolean;
        isSymlink: boolean;
    };
    type RpcStruct = {
        key: string;
        url: string;
    };
    type RpcStructOutput = [string, string] & {
        key: string;
        url: string;
    };
    type DebugStepStruct = {
        stack: BigNumberish[];
        memoryInput: BytesLike;
        opcode: BigNumberish;
        depth: BigNumberish;
        isOutOfGas: boolean;
        contractAddr: string;
    };
    type DebugStepStructOutput = [
        BigNumber[],
        string,
        number,
        BigNumber,
        boolean,
        string
    ] & {
        stack: BigNumber[];
        memoryInput: string;
        opcode: number;
        depth: BigNumber;
        isOutOfGas: boolean;
        contractAddr: string;
    };
    type ChainInfoStruct = {
        forkId: BigNumberish;
        chainId: BigNumberish;
    };
    type ChainInfoStructOutput = [BigNumber, BigNumber] & {
        forkId: BigNumber;
        chainId: BigNumber;
    };
    type StorageAccessStruct = {
        account: string;
        slot: BytesLike;
        isWrite: boolean;
        previousValue: BytesLike;
        newValue: BytesLike;
        reverted: boolean;
    };
    type StorageAccessStructOutput = [
        string,
        string,
        boolean,
        string,
        string,
        boolean
    ] & {
        account: string;
        slot: string;
        isWrite: boolean;
        previousValue: string;
        newValue: string;
        reverted: boolean;
    };
    type AccountAccessStruct = {
        chainInfo: VmSafe.ChainInfoStruct;
        kind: BigNumberish;
        account: string;
        accessor: string;
        initialized: boolean;
        oldBalance: BigNumberish;
        newBalance: BigNumberish;
        deployedCode: BytesLike;
        value: BigNumberish;
        data: BytesLike;
        reverted: boolean;
        storageAccesses: VmSafe.StorageAccessStruct[];
        depth: BigNumberish;
    };
    type AccountAccessStructOutput = [
        VmSafe.ChainInfoStructOutput,
        number,
        string,
        string,
        boolean,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string,
        boolean,
        VmSafe.StorageAccessStructOutput[],
        BigNumber
    ] & {
        chainInfo: VmSafe.ChainInfoStructOutput;
        kind: number;
        account: string;
        accessor: string;
        initialized: boolean;
        oldBalance: BigNumber;
        newBalance: BigNumber;
        deployedCode: string;
        value: BigNumber;
        data: string;
        reverted: boolean;
        storageAccesses: VmSafe.StorageAccessStructOutput[];
        depth: BigNumber;
    };
    type FfiResultStruct = {
        exitCode: BigNumberish;
        stdout: BytesLike;
        stderr: BytesLike;
    };
    type FfiResultStructOutput = [number, string, string] & {
        exitCode: number;
        stdout: string;
        stderr: string;
    };
}
export interface VmInterface extends utils.Interface {
    functions: {
        "accessList((address,bytes32[])[])": FunctionFragment;
        "accesses(address)": FunctionFragment;
        "activeFork()": FunctionFragment;
        "addr(uint256)": FunctionFragment;
        "allowCheatcodes(address)": FunctionFragment;
        "assertApproxEqAbs(uint256,uint256,uint256)": FunctionFragment;
        "assertApproxEqAbs(int256,int256,uint256)": FunctionFragment;
        "assertApproxEqAbs(int256,int256,uint256,string)": FunctionFragment;
        "assertApproxEqAbs(uint256,uint256,uint256,string)": FunctionFragment;
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256)": FunctionFragment;
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256)": FunctionFragment;
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256,string)": FunctionFragment;
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256,string)": FunctionFragment;
        "assertApproxEqRel(uint256,uint256,uint256,string)": FunctionFragment;
        "assertApproxEqRel(uint256,uint256,uint256)": FunctionFragment;
        "assertApproxEqRel(int256,int256,uint256,string)": FunctionFragment;
        "assertApproxEqRel(int256,int256,uint256)": FunctionFragment;
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256)": FunctionFragment;
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256,string)": FunctionFragment;
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256)": FunctionFragment;
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256,string)": FunctionFragment;
        "assertEq(bytes32[],bytes32[])": FunctionFragment;
        "assertEq(int256[],int256[],string)": FunctionFragment;
        "assertEq(address,address,string)": FunctionFragment;
        "assertEq(string,string,string)": FunctionFragment;
        "assertEq(address[],address[])": FunctionFragment;
        "assertEq(address[],address[],string)": FunctionFragment;
        "assertEq(bool,bool,string)": FunctionFragment;
        "assertEq(address,address)": FunctionFragment;
        "assertEq(uint256[],uint256[],string)": FunctionFragment;
        "assertEq(bool[],bool[])": FunctionFragment;
        "assertEq(int256[],int256[])": FunctionFragment;
        "assertEq(int256,int256,string)": FunctionFragment;
        "assertEq(bytes32,bytes32)": FunctionFragment;
        "assertEq(uint256,uint256,string)": FunctionFragment;
        "assertEq(uint256[],uint256[])": FunctionFragment;
        "assertEq(bytes,bytes)": FunctionFragment;
        "assertEq(uint256,uint256)": FunctionFragment;
        "assertEq(bytes32,bytes32,string)": FunctionFragment;
        "assertEq(string[],string[])": FunctionFragment;
        "assertEq(bytes32[],bytes32[],string)": FunctionFragment;
        "assertEq(bytes,bytes,string)": FunctionFragment;
        "assertEq(bool[],bool[],string)": FunctionFragment;
        "assertEq(bytes[],bytes[])": FunctionFragment;
        "assertEq(string[],string[],string)": FunctionFragment;
        "assertEq(string,string)": FunctionFragment;
        "assertEq(bytes[],bytes[],string)": FunctionFragment;
        "assertEq(bool,bool)": FunctionFragment;
        "assertEq(int256,int256)": FunctionFragment;
        "assertEqDecimal(uint256,uint256,uint256)": FunctionFragment;
        "assertEqDecimal(int256,int256,uint256)": FunctionFragment;
        "assertEqDecimal(int256,int256,uint256,string)": FunctionFragment;
        "assertEqDecimal(uint256,uint256,uint256,string)": FunctionFragment;
        "assertFalse(bool,string)": FunctionFragment;
        "assertFalse(bool)": FunctionFragment;
        "assertGe(int256,int256)": FunctionFragment;
        "assertGe(int256,int256,string)": FunctionFragment;
        "assertGe(uint256,uint256)": FunctionFragment;
        "assertGe(uint256,uint256,string)": FunctionFragment;
        "assertGeDecimal(uint256,uint256,uint256)": FunctionFragment;
        "assertGeDecimal(int256,int256,uint256,string)": FunctionFragment;
        "assertGeDecimal(uint256,uint256,uint256,string)": FunctionFragment;
        "assertGeDecimal(int256,int256,uint256)": FunctionFragment;
        "assertGt(int256,int256)": FunctionFragment;
        "assertGt(uint256,uint256,string)": FunctionFragment;
        "assertGt(uint256,uint256)": FunctionFragment;
        "assertGt(int256,int256,string)": FunctionFragment;
        "assertGtDecimal(int256,int256,uint256,string)": FunctionFragment;
        "assertGtDecimal(uint256,uint256,uint256,string)": FunctionFragment;
        "assertGtDecimal(int256,int256,uint256)": FunctionFragment;
        "assertGtDecimal(uint256,uint256,uint256)": FunctionFragment;
        "assertLe(int256,int256,string)": FunctionFragment;
        "assertLe(uint256,uint256)": FunctionFragment;
        "assertLe(int256,int256)": FunctionFragment;
        "assertLe(uint256,uint256,string)": FunctionFragment;
        "assertLeDecimal(int256,int256,uint256)": FunctionFragment;
        "assertLeDecimal(uint256,uint256,uint256,string)": FunctionFragment;
        "assertLeDecimal(int256,int256,uint256,string)": FunctionFragment;
        "assertLeDecimal(uint256,uint256,uint256)": FunctionFragment;
        "assertLt(int256,int256)": FunctionFragment;
        "assertLt(uint256,uint256,string)": FunctionFragment;
        "assertLt(int256,int256,string)": FunctionFragment;
        "assertLt(uint256,uint256)": FunctionFragment;
        "assertLtDecimal(uint256,uint256,uint256)": FunctionFragment;
        "assertLtDecimal(int256,int256,uint256,string)": FunctionFragment;
        "assertLtDecimal(uint256,uint256,uint256,string)": FunctionFragment;
        "assertLtDecimal(int256,int256,uint256)": FunctionFragment;
        "assertNotEq(bytes32[],bytes32[])": FunctionFragment;
        "assertNotEq(int256[],int256[])": FunctionFragment;
        "assertNotEq(bool,bool,string)": FunctionFragment;
        "assertNotEq(bytes[],bytes[],string)": FunctionFragment;
        "assertNotEq(bool,bool)": FunctionFragment;
        "assertNotEq(bool[],bool[])": FunctionFragment;
        "assertNotEq(bytes,bytes)": FunctionFragment;
        "assertNotEq(address[],address[])": FunctionFragment;
        "assertNotEq(int256,int256,string)": FunctionFragment;
        "assertNotEq(uint256[],uint256[])": FunctionFragment;
        "assertNotEq(bool[],bool[],string)": FunctionFragment;
        "assertNotEq(string,string)": FunctionFragment;
        "assertNotEq(address[],address[],string)": FunctionFragment;
        "assertNotEq(string,string,string)": FunctionFragment;
        "assertNotEq(address,address,string)": FunctionFragment;
        "assertNotEq(bytes32,bytes32)": FunctionFragment;
        "assertNotEq(bytes,bytes,string)": FunctionFragment;
        "assertNotEq(uint256,uint256,string)": FunctionFragment;
        "assertNotEq(uint256[],uint256[],string)": FunctionFragment;
        "assertNotEq(address,address)": FunctionFragment;
        "assertNotEq(bytes32,bytes32,string)": FunctionFragment;
        "assertNotEq(string[],string[],string)": FunctionFragment;
        "assertNotEq(uint256,uint256)": FunctionFragment;
        "assertNotEq(bytes32[],bytes32[],string)": FunctionFragment;
        "assertNotEq(string[],string[])": FunctionFragment;
        "assertNotEq(int256[],int256[],string)": FunctionFragment;
        "assertNotEq(bytes[],bytes[])": FunctionFragment;
        "assertNotEq(int256,int256)": FunctionFragment;
        "assertNotEqDecimal(int256,int256,uint256)": FunctionFragment;
        "assertNotEqDecimal(int256,int256,uint256,string)": FunctionFragment;
        "assertNotEqDecimal(uint256,uint256,uint256)": FunctionFragment;
        "assertNotEqDecimal(uint256,uint256,uint256,string)": FunctionFragment;
        "assertTrue(bool)": FunctionFragment;
        "assertTrue(bool,string)": FunctionFragment;
        "assume(bool)": FunctionFragment;
        "assumeNoRevert()": FunctionFragment;
        "assumeNoRevert((address,bool,bytes)[])": FunctionFragment;
        "assumeNoRevert((address,bool,bytes))": FunctionFragment;
        "attachDelegation((uint8,bytes32,bytes32,uint64,address))": FunctionFragment;
        "blobBaseFee(uint256)": FunctionFragment;
        "blobhashes(bytes32[])": FunctionFragment;
        "breakpoint(string)": FunctionFragment;
        "breakpoint(string,bool)": FunctionFragment;
        "broadcast()": FunctionFragment;
        "broadcast(address)": FunctionFragment;
        "broadcast(uint256)": FunctionFragment;
        "broadcastRawTransaction(bytes)": FunctionFragment;
        "chainId(uint256)": FunctionFragment;
        "clearMockedCalls()": FunctionFragment;
        "cloneAccount(address,address)": FunctionFragment;
        "closeFile(string)": FunctionFragment;
        "coinbase(address)": FunctionFragment;
        "computeCreate2Address(bytes32,bytes32)": FunctionFragment;
        "computeCreate2Address(bytes32,bytes32,address)": FunctionFragment;
        "computeCreateAddress(address,uint256)": FunctionFragment;
        "contains(string,string)": FunctionFragment;
        "cool(address)": FunctionFragment;
        "coolSlot(address,bytes32)": FunctionFragment;
        "copyFile(string,string)": FunctionFragment;
        "copyStorage(address,address)": FunctionFragment;
        "createDir(string,bool)": FunctionFragment;
        "createFork(string)": FunctionFragment;
        "createFork(string,uint256)": FunctionFragment;
        "createFork(string,bytes32)": FunctionFragment;
        "createSelectFork(string,uint256)": FunctionFragment;
        "createSelectFork(string,bytes32)": FunctionFragment;
        "createSelectFork(string)": FunctionFragment;
        "createWallet(string)": FunctionFragment;
        "createWallet(uint256)": FunctionFragment;
        "createWallet(uint256,string)": FunctionFragment;
        "deal(address,uint256)": FunctionFragment;
        "deleteSnapshot(uint256)": FunctionFragment;
        "deleteSnapshots()": FunctionFragment;
        "deleteStateSnapshot(uint256)": FunctionFragment;
        "deleteStateSnapshots()": FunctionFragment;
        "deployCode(string,bytes)": FunctionFragment;
        "deployCode(string)": FunctionFragment;
        "deriveKey(string,string,uint32,string)": FunctionFragment;
        "deriveKey(string,uint32,string)": FunctionFragment;
        "deriveKey(string,uint32)": FunctionFragment;
        "deriveKey(string,string,uint32)": FunctionFragment;
        "difficulty(uint256)": FunctionFragment;
        "dumpState(string)": FunctionFragment;
        "ensNamehash(string)": FunctionFragment;
        "envAddress(string)": FunctionFragment;
        "envAddress(string,string)": FunctionFragment;
        "envBool(string)": FunctionFragment;
        "envBool(string,string)": FunctionFragment;
        "envBytes(string)": FunctionFragment;
        "envBytes(string,string)": FunctionFragment;
        "envBytes32(string,string)": FunctionFragment;
        "envBytes32(string)": FunctionFragment;
        "envExists(string)": FunctionFragment;
        "envInt(string,string)": FunctionFragment;
        "envInt(string)": FunctionFragment;
        "envOr(string,string,bytes32[])": FunctionFragment;
        "envOr(string,string,int256[])": FunctionFragment;
        "envOr(string,bool)": FunctionFragment;
        "envOr(string,address)": FunctionFragment;
        "envOr(string,uint256)": FunctionFragment;
        "envOr(string,string,bytes[])": FunctionFragment;
        "envOr(string,string,uint256[])": FunctionFragment;
        "envOr(string,string,string[])": FunctionFragment;
        "envOr(string,bytes)": FunctionFragment;
        "envOr(string,bytes32)": FunctionFragment;
        "envOr(string,int256)": FunctionFragment;
        "envOr(string,string,address[])": FunctionFragment;
        "envOr(string,string)": FunctionFragment;
        "envOr(string,string,bool[])": FunctionFragment;
        "envString(string,string)": FunctionFragment;
        "envString(string)": FunctionFragment;
        "envUint(string)": FunctionFragment;
        "envUint(string,string)": FunctionFragment;
        "etch(address,bytes)": FunctionFragment;
        "eth_getLogs(uint256,uint256,address,bytes32[])": FunctionFragment;
        "exists(string)": FunctionFragment;
        "expectCall(address,uint256,uint64,bytes)": FunctionFragment;
        "expectCall(address,uint256,uint64,bytes,uint64)": FunctionFragment;
        "expectCall(address,uint256,bytes,uint64)": FunctionFragment;
        "expectCall(address,bytes)": FunctionFragment;
        "expectCall(address,bytes,uint64)": FunctionFragment;
        "expectCall(address,uint256,bytes)": FunctionFragment;
        "expectCallMinGas(address,uint256,uint64,bytes)": FunctionFragment;
        "expectCallMinGas(address,uint256,uint64,bytes,uint64)": FunctionFragment;
        "expectCreate(bytes,address)": FunctionFragment;
        "expectCreate2(bytes,address)": FunctionFragment;
        "expectEmit()": FunctionFragment;
        "expectEmit(bool,bool,bool,bool)": FunctionFragment;
        "expectEmit(uint64)": FunctionFragment;
        "expectEmit(bool,bool,bool,bool,uint64)": FunctionFragment;
        "expectEmit(bool,bool,bool,bool,address)": FunctionFragment;
        "expectEmit(address)": FunctionFragment;
        "expectEmit(address,uint64)": FunctionFragment;
        "expectEmit(bool,bool,bool,bool,address,uint64)": FunctionFragment;
        "expectEmitAnonymous()": FunctionFragment;
        "expectEmitAnonymous(address)": FunctionFragment;
        "expectEmitAnonymous(bool,bool,bool,bool,bool,address)": FunctionFragment;
        "expectEmitAnonymous(bool,bool,bool,bool,bool)": FunctionFragment;
        "expectPartialRevert(bytes4)": FunctionFragment;
        "expectPartialRevert(bytes4,address)": FunctionFragment;
        "expectRevert(address,uint64)": FunctionFragment;
        "expectRevert(bytes4,address)": FunctionFragment;
        "expectRevert(bytes,uint64)": FunctionFragment;
        "expectRevert(uint64)": FunctionFragment;
        "expectRevert(bytes,address)": FunctionFragment;
        "expectRevert(bytes4,address,uint64)": FunctionFragment;
        "expectRevert(bytes4)": FunctionFragment;
        "expectRevert(bytes,address,uint64)": FunctionFragment;
        "expectRevert(address)": FunctionFragment;
        "expectRevert(bytes4,uint64)": FunctionFragment;
        "expectRevert(bytes)": FunctionFragment;
        "expectRevert()": FunctionFragment;
        "expectSafeMemory(uint64,uint64)": FunctionFragment;
        "expectSafeMemoryCall(uint64,uint64)": FunctionFragment;
        "fee(uint256)": FunctionFragment;
        "ffi(string[])": FunctionFragment;
        "foundryVersionAtLeast(string)": FunctionFragment;
        "foundryVersionCmp(string)": FunctionFragment;
        "fsMetadata(string)": FunctionFragment;
        "getArtifactPathByCode(bytes)": FunctionFragment;
        "getArtifactPathByDeployedCode(bytes)": FunctionFragment;
        "getBlobBaseFee()": FunctionFragment;
        "getBlobhashes()": FunctionFragment;
        "getBlockNumber()": FunctionFragment;
        "getBlockTimestamp()": FunctionFragment;
        "getBroadcast(string,uint64,uint8)": FunctionFragment;
        "getBroadcasts(string,uint64)": FunctionFragment;
        "getBroadcasts(string,uint64,uint8)": FunctionFragment;
        "getCode(string)": FunctionFragment;
        "getDeployedCode(string)": FunctionFragment;
        "getDeployment(string,uint64)": FunctionFragment;
        "getDeployment(string)": FunctionFragment;
        "getDeployments(string,uint64)": FunctionFragment;
        "getFoundryVersion()": FunctionFragment;
        "getLabel(address)": FunctionFragment;
        "getMappingKeyAndParentOf(address,bytes32)": FunctionFragment;
        "getMappingLength(address,bytes32)": FunctionFragment;
        "getMappingSlotAt(address,bytes32,uint256)": FunctionFragment;
        "getNonce(address)": FunctionFragment;
        "getNonce((address,uint256,uint256,uint256))": FunctionFragment;
        "getRecordedLogs()": FunctionFragment;
        "getStateDiff()": FunctionFragment;
        "getStateDiffJson()": FunctionFragment;
        "getWallets()": FunctionFragment;
        "indexOf(string,string)": FunctionFragment;
        "isContext(uint8)": FunctionFragment;
        "isDir(string)": FunctionFragment;
        "isFile(string)": FunctionFragment;
        "isPersistent(address)": FunctionFragment;
        "keyExists(string,string)": FunctionFragment;
        "keyExistsJson(string,string)": FunctionFragment;
        "keyExistsToml(string,string)": FunctionFragment;
        "label(address,string)": FunctionFragment;
        "lastCallGas()": FunctionFragment;
        "load(address,bytes32)": FunctionFragment;
        "loadAllocs(string)": FunctionFragment;
        "makePersistent(address[])": FunctionFragment;
        "makePersistent(address,address)": FunctionFragment;
        "makePersistent(address)": FunctionFragment;
        "makePersistent(address,address,address)": FunctionFragment;
        "mockCall(address,bytes4,bytes)": FunctionFragment;
        "mockCall(address,uint256,bytes,bytes)": FunctionFragment;
        "mockCall(address,bytes,bytes)": FunctionFragment;
        "mockCall(address,uint256,bytes4,bytes)": FunctionFragment;
        "mockCallRevert(address,bytes4,bytes)": FunctionFragment;
        "mockCallRevert(address,uint256,bytes4,bytes)": FunctionFragment;
        "mockCallRevert(address,uint256,bytes,bytes)": FunctionFragment;
        "mockCallRevert(address,bytes,bytes)": FunctionFragment;
        "mockCalls(address,uint256,bytes,bytes[])": FunctionFragment;
        "mockCalls(address,bytes,bytes[])": FunctionFragment;
        "mockFunction(address,address,bytes)": FunctionFragment;
        "noAccessList()": FunctionFragment;
        "parseAddress(string)": FunctionFragment;
        "parseBool(string)": FunctionFragment;
        "parseBytes(string)": FunctionFragment;
        "parseBytes32(string)": FunctionFragment;
        "parseInt(string)": FunctionFragment;
        "parseJson(string)": FunctionFragment;
        "parseJson(string,string)": FunctionFragment;
        "parseJsonAddress(string,string)": FunctionFragment;
        "parseJsonAddressArray(string,string)": FunctionFragment;
        "parseJsonBool(string,string)": FunctionFragment;
        "parseJsonBoolArray(string,string)": FunctionFragment;
        "parseJsonBytes(string,string)": FunctionFragment;
        "parseJsonBytes32(string,string)": FunctionFragment;
        "parseJsonBytes32Array(string,string)": FunctionFragment;
        "parseJsonBytesArray(string,string)": FunctionFragment;
        "parseJsonInt(string,string)": FunctionFragment;
        "parseJsonIntArray(string,string)": FunctionFragment;
        "parseJsonKeys(string,string)": FunctionFragment;
        "parseJsonString(string,string)": FunctionFragment;
        "parseJsonStringArray(string,string)": FunctionFragment;
        "parseJsonType(string,string)": FunctionFragment;
        "parseJsonType(string,string,string)": FunctionFragment;
        "parseJsonTypeArray(string,string,string)": FunctionFragment;
        "parseJsonUint(string,string)": FunctionFragment;
        "parseJsonUintArray(string,string)": FunctionFragment;
        "parseToml(string,string)": FunctionFragment;
        "parseToml(string)": FunctionFragment;
        "parseTomlAddress(string,string)": FunctionFragment;
        "parseTomlAddressArray(string,string)": FunctionFragment;
        "parseTomlBool(string,string)": FunctionFragment;
        "parseTomlBoolArray(string,string)": FunctionFragment;
        "parseTomlBytes(string,string)": FunctionFragment;
        "parseTomlBytes32(string,string)": FunctionFragment;
        "parseTomlBytes32Array(string,string)": FunctionFragment;
        "parseTomlBytesArray(string,string)": FunctionFragment;
        "parseTomlInt(string,string)": FunctionFragment;
        "parseTomlIntArray(string,string)": FunctionFragment;
        "parseTomlKeys(string,string)": FunctionFragment;
        "parseTomlString(string,string)": FunctionFragment;
        "parseTomlStringArray(string,string)": FunctionFragment;
        "parseTomlType(string,string)": FunctionFragment;
        "parseTomlType(string,string,string)": FunctionFragment;
        "parseTomlTypeArray(string,string,string)": FunctionFragment;
        "parseTomlUint(string,string)": FunctionFragment;
        "parseTomlUintArray(string,string)": FunctionFragment;
        "parseUint(string)": FunctionFragment;
        "pauseGasMetering()": FunctionFragment;
        "pauseTracing()": FunctionFragment;
        "prank(address,address)": FunctionFragment;
        "prank(address,address,bool)": FunctionFragment;
        "prank(address,bool)": FunctionFragment;
        "prank(address)": FunctionFragment;
        "prevrandao(bytes32)": FunctionFragment;
        "prevrandao(uint256)": FunctionFragment;
        "projectRoot()": FunctionFragment;
        "prompt(string)": FunctionFragment;
        "promptAddress(string)": FunctionFragment;
        "promptSecret(string)": FunctionFragment;
        "promptSecretUint(string)": FunctionFragment;
        "promptUint(string)": FunctionFragment;
        "publicKeyP256(uint256)": FunctionFragment;
        "randomAddress()": FunctionFragment;
        "randomBool()": FunctionFragment;
        "randomBytes(uint256)": FunctionFragment;
        "randomBytes4()": FunctionFragment;
        "randomBytes8()": FunctionFragment;
        "randomInt()": FunctionFragment;
        "randomInt(uint256)": FunctionFragment;
        "randomUint()": FunctionFragment;
        "randomUint(uint256)": FunctionFragment;
        "randomUint(uint256,uint256)": FunctionFragment;
        "readCallers()": FunctionFragment;
        "readDir(string,uint64)": FunctionFragment;
        "readDir(string,uint64,bool)": FunctionFragment;
        "readDir(string)": FunctionFragment;
        "readFile(string)": FunctionFragment;
        "readFileBinary(string)": FunctionFragment;
        "readLine(string)": FunctionFragment;
        "readLink(string)": FunctionFragment;
        "record()": FunctionFragment;
        "recordLogs()": FunctionFragment;
        "rememberKey(uint256)": FunctionFragment;
        "rememberKeys(string,string,uint32)": FunctionFragment;
        "rememberKeys(string,string,string,uint32)": FunctionFragment;
        "removeDir(string,bool)": FunctionFragment;
        "removeFile(string)": FunctionFragment;
        "replace(string,string,string)": FunctionFragment;
        "resetGasMetering()": FunctionFragment;
        "resetNonce(address)": FunctionFragment;
        "resumeGasMetering()": FunctionFragment;
        "resumeTracing()": FunctionFragment;
        "revertTo(uint256)": FunctionFragment;
        "revertToAndDelete(uint256)": FunctionFragment;
        "revertToState(uint256)": FunctionFragment;
        "revertToStateAndDelete(uint256)": FunctionFragment;
        "revokePersistent(address[])": FunctionFragment;
        "revokePersistent(address)": FunctionFragment;
        "roll(uint256)": FunctionFragment;
        "rollFork(bytes32)": FunctionFragment;
        "rollFork(uint256,uint256)": FunctionFragment;
        "rollFork(uint256)": FunctionFragment;
        "rollFork(uint256,bytes32)": FunctionFragment;
        "rpc(string,string,string)": FunctionFragment;
        "rpc(string,string)": FunctionFragment;
        "rpcUrl(string)": FunctionFragment;
        "rpcUrlStructs()": FunctionFragment;
        "rpcUrls()": FunctionFragment;
        "selectFork(uint256)": FunctionFragment;
        "serializeAddress(string,string,address[])": FunctionFragment;
        "serializeAddress(string,string,address)": FunctionFragment;
        "serializeBool(string,string,bool[])": FunctionFragment;
        "serializeBool(string,string,bool)": FunctionFragment;
        "serializeBytes(string,string,bytes[])": FunctionFragment;
        "serializeBytes(string,string,bytes)": FunctionFragment;
        "serializeBytes32(string,string,bytes32[])": FunctionFragment;
        "serializeBytes32(string,string,bytes32)": FunctionFragment;
        "serializeInt(string,string,int256)": FunctionFragment;
        "serializeInt(string,string,int256[])": FunctionFragment;
        "serializeJson(string,string)": FunctionFragment;
        "serializeJsonType(string,bytes)": FunctionFragment;
        "serializeJsonType(string,string,string,bytes)": FunctionFragment;
        "serializeString(string,string,string[])": FunctionFragment;
        "serializeString(string,string,string)": FunctionFragment;
        "serializeUint(string,string,uint256)": FunctionFragment;
        "serializeUint(string,string,uint256[])": FunctionFragment;
        "serializeUintToHex(string,string,uint256)": FunctionFragment;
        "setArbitraryStorage(address)": FunctionFragment;
        "setBlockhash(uint256,bytes32)": FunctionFragment;
        "setEnv(string,string)": FunctionFragment;
        "setNonce(address,uint64)": FunctionFragment;
        "setNonceUnsafe(address,uint64)": FunctionFragment;
        "sign(bytes32)": FunctionFragment;
        "sign(address,bytes32)": FunctionFragment;
        "sign((address,uint256,uint256,uint256),bytes32)": FunctionFragment;
        "sign(uint256,bytes32)": FunctionFragment;
        "signAndAttachDelegation(address,uint256)": FunctionFragment;
        "signCompact((address,uint256,uint256,uint256),bytes32)": FunctionFragment;
        "signCompact(address,bytes32)": FunctionFragment;
        "signCompact(bytes32)": FunctionFragment;
        "signCompact(uint256,bytes32)": FunctionFragment;
        "signDelegation(address,uint256)": FunctionFragment;
        "signP256(uint256,bytes32)": FunctionFragment;
        "skip(bool,string)": FunctionFragment;
        "skip(bool)": FunctionFragment;
        "sleep(uint256)": FunctionFragment;
        "snapshot()": FunctionFragment;
        "snapshotGasLastCall(string,string)": FunctionFragment;
        "snapshotGasLastCall(string)": FunctionFragment;
        "snapshotState()": FunctionFragment;
        "snapshotValue(string,uint256)": FunctionFragment;
        "snapshotValue(string,string,uint256)": FunctionFragment;
        "split(string,string)": FunctionFragment;
        "startBroadcast()": FunctionFragment;
        "startBroadcast(address)": FunctionFragment;
        "startBroadcast(uint256)": FunctionFragment;
        "startDebugTraceRecording()": FunctionFragment;
        "startMappingRecording()": FunctionFragment;
        "startPrank(address)": FunctionFragment;
        "startPrank(address,bool)": FunctionFragment;
        "startPrank(address,address)": FunctionFragment;
        "startPrank(address,address,bool)": FunctionFragment;
        "startSnapshotGas(string)": FunctionFragment;
        "startSnapshotGas(string,string)": FunctionFragment;
        "startStateDiffRecording()": FunctionFragment;
        "stopAndReturnDebugTraceRecording()": FunctionFragment;
        "stopAndReturnStateDiff()": FunctionFragment;
        "stopBroadcast()": FunctionFragment;
        "stopExpectSafeMemory()": FunctionFragment;
        "stopMappingRecording()": FunctionFragment;
        "stopPrank()": FunctionFragment;
        "stopSnapshotGas(string,string)": FunctionFragment;
        "stopSnapshotGas(string)": FunctionFragment;
        "stopSnapshotGas()": FunctionFragment;
        "store(address,bytes32,bytes32)": FunctionFragment;
        "toBase64(string)": FunctionFragment;
        "toBase64(bytes)": FunctionFragment;
        "toBase64URL(string)": FunctionFragment;
        "toBase64URL(bytes)": FunctionFragment;
        "toLowercase(string)": FunctionFragment;
        "toString(address)": FunctionFragment;
        "toString(uint256)": FunctionFragment;
        "toString(bytes)": FunctionFragment;
        "toString(bool)": FunctionFragment;
        "toString(int256)": FunctionFragment;
        "toString(bytes32)": FunctionFragment;
        "toUppercase(string)": FunctionFragment;
        "transact(uint256,bytes32)": FunctionFragment;
        "transact(bytes32)": FunctionFragment;
        "trim(string)": FunctionFragment;
        "tryFfi(string[])": FunctionFragment;
        "txGasPrice(uint256)": FunctionFragment;
        "unixTime()": FunctionFragment;
        "warmSlot(address,bytes32)": FunctionFragment;
        "warp(uint256)": FunctionFragment;
        "writeFile(string,string)": FunctionFragment;
        "writeFileBinary(string,bytes)": FunctionFragment;
        "writeJson(string,string,string)": FunctionFragment;
        "writeJson(string,string)": FunctionFragment;
        "writeLine(string,string)": FunctionFragment;
        "writeToml(string,string,string)": FunctionFragment;
        "writeToml(string,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accessList" | "accesses" | "activeFork" | "addr" | "allowCheatcodes" | "assertApproxEqAbs(uint256,uint256,uint256)" | "assertApproxEqAbs(int256,int256,uint256)" | "assertApproxEqAbs(int256,int256,uint256,string)" | "assertApproxEqAbs(uint256,uint256,uint256,string)" | "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256)" | "assertApproxEqAbsDecimal(int256,int256,uint256,uint256)" | "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256,string)" | "assertApproxEqAbsDecimal(int256,int256,uint256,uint256,string)" | "assertApproxEqRel(uint256,uint256,uint256,string)" | "assertApproxEqRel(uint256,uint256,uint256)" | "assertApproxEqRel(int256,int256,uint256,string)" | "assertApproxEqRel(int256,int256,uint256)" | "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256)" | "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256,string)" | "assertApproxEqRelDecimal(int256,int256,uint256,uint256)" | "assertApproxEqRelDecimal(int256,int256,uint256,uint256,string)" | "assertEq(bytes32[],bytes32[])" | "assertEq(int256[],int256[],string)" | "assertEq(address,address,string)" | "assertEq(string,string,string)" | "assertEq(address[],address[])" | "assertEq(address[],address[],string)" | "assertEq(bool,bool,string)" | "assertEq(address,address)" | "assertEq(uint256[],uint256[],string)" | "assertEq(bool[],bool[])" | "assertEq(int256[],int256[])" | "assertEq(int256,int256,string)" | "assertEq(bytes32,bytes32)" | "assertEq(uint256,uint256,string)" | "assertEq(uint256[],uint256[])" | "assertEq(bytes,bytes)" | "assertEq(uint256,uint256)" | "assertEq(bytes32,bytes32,string)" | "assertEq(string[],string[])" | "assertEq(bytes32[],bytes32[],string)" | "assertEq(bytes,bytes,string)" | "assertEq(bool[],bool[],string)" | "assertEq(bytes[],bytes[])" | "assertEq(string[],string[],string)" | "assertEq(string,string)" | "assertEq(bytes[],bytes[],string)" | "assertEq(bool,bool)" | "assertEq(int256,int256)" | "assertEqDecimal(uint256,uint256,uint256)" | "assertEqDecimal(int256,int256,uint256)" | "assertEqDecimal(int256,int256,uint256,string)" | "assertEqDecimal(uint256,uint256,uint256,string)" | "assertFalse(bool,string)" | "assertFalse(bool)" | "assertGe(int256,int256)" | "assertGe(int256,int256,string)" | "assertGe(uint256,uint256)" | "assertGe(uint256,uint256,string)" | "assertGeDecimal(uint256,uint256,uint256)" | "assertGeDecimal(int256,int256,uint256,string)" | "assertGeDecimal(uint256,uint256,uint256,string)" | "assertGeDecimal(int256,int256,uint256)" | "assertGt(int256,int256)" | "assertGt(uint256,uint256,string)" | "assertGt(uint256,uint256)" | "assertGt(int256,int256,string)" | "assertGtDecimal(int256,int256,uint256,string)" | "assertGtDecimal(uint256,uint256,uint256,string)" | "assertGtDecimal(int256,int256,uint256)" | "assertGtDecimal(uint256,uint256,uint256)" | "assertLe(int256,int256,string)" | "assertLe(uint256,uint256)" | "assertLe(int256,int256)" | "assertLe(uint256,uint256,string)" | "assertLeDecimal(int256,int256,uint256)" | "assertLeDecimal(uint256,uint256,uint256,string)" | "assertLeDecimal(int256,int256,uint256,string)" | "assertLeDecimal(uint256,uint256,uint256)" | "assertLt(int256,int256)" | "assertLt(uint256,uint256,string)" | "assertLt(int256,int256,string)" | "assertLt(uint256,uint256)" | "assertLtDecimal(uint256,uint256,uint256)" | "assertLtDecimal(int256,int256,uint256,string)" | "assertLtDecimal(uint256,uint256,uint256,string)" | "assertLtDecimal(int256,int256,uint256)" | "assertNotEq(bytes32[],bytes32[])" | "assertNotEq(int256[],int256[])" | "assertNotEq(bool,bool,string)" | "assertNotEq(bytes[],bytes[],string)" | "assertNotEq(bool,bool)" | "assertNotEq(bool[],bool[])" | "assertNotEq(bytes,bytes)" | "assertNotEq(address[],address[])" | "assertNotEq(int256,int256,string)" | "assertNotEq(uint256[],uint256[])" | "assertNotEq(bool[],bool[],string)" | "assertNotEq(string,string)" | "assertNotEq(address[],address[],string)" | "assertNotEq(string,string,string)" | "assertNotEq(address,address,string)" | "assertNotEq(bytes32,bytes32)" | "assertNotEq(bytes,bytes,string)" | "assertNotEq(uint256,uint256,string)" | "assertNotEq(uint256[],uint256[],string)" | "assertNotEq(address,address)" | "assertNotEq(bytes32,bytes32,string)" | "assertNotEq(string[],string[],string)" | "assertNotEq(uint256,uint256)" | "assertNotEq(bytes32[],bytes32[],string)" | "assertNotEq(string[],string[])" | "assertNotEq(int256[],int256[],string)" | "assertNotEq(bytes[],bytes[])" | "assertNotEq(int256,int256)" | "assertNotEqDecimal(int256,int256,uint256)" | "assertNotEqDecimal(int256,int256,uint256,string)" | "assertNotEqDecimal(uint256,uint256,uint256)" | "assertNotEqDecimal(uint256,uint256,uint256,string)" | "assertTrue(bool)" | "assertTrue(bool,string)" | "assume" | "assumeNoRevert()" | "assumeNoRevert((address,bool,bytes)[])" | "assumeNoRevert((address,bool,bytes))" | "attachDelegation" | "blobBaseFee" | "blobhashes" | "breakpoint(string)" | "breakpoint(string,bool)" | "broadcast()" | "broadcast(address)" | "broadcast(uint256)" | "broadcastRawTransaction" | "chainId" | "clearMockedCalls" | "cloneAccount" | "closeFile" | "coinbase" | "computeCreate2Address(bytes32,bytes32)" | "computeCreate2Address(bytes32,bytes32,address)" | "computeCreateAddress" | "contains" | "cool" | "coolSlot" | "copyFile" | "copyStorage" | "createDir" | "createFork(string)" | "createFork(string,uint256)" | "createFork(string,bytes32)" | "createSelectFork(string,uint256)" | "createSelectFork(string,bytes32)" | "createSelectFork(string)" | "createWallet(string)" | "createWallet(uint256)" | "createWallet(uint256,string)" | "deal" | "deleteSnapshot" | "deleteSnapshots" | "deleteStateSnapshot" | "deleteStateSnapshots" | "deployCode(string,bytes)" | "deployCode(string)" | "deriveKey(string,string,uint32,string)" | "deriveKey(string,uint32,string)" | "deriveKey(string,uint32)" | "deriveKey(string,string,uint32)" | "difficulty" | "dumpState" | "ensNamehash" | "envAddress(string)" | "envAddress(string,string)" | "envBool(string)" | "envBool(string,string)" | "envBytes(string)" | "envBytes(string,string)" | "envBytes32(string,string)" | "envBytes32(string)" | "envExists" | "envInt(string,string)" | "envInt(string)" | "envOr(string,string,bytes32[])" | "envOr(string,string,int256[])" | "envOr(string,bool)" | "envOr(string,address)" | "envOr(string,uint256)" | "envOr(string,string,bytes[])" | "envOr(string,string,uint256[])" | "envOr(string,string,string[])" | "envOr(string,bytes)" | "envOr(string,bytes32)" | "envOr(string,int256)" | "envOr(string,string,address[])" | "envOr(string,string)" | "envOr(string,string,bool[])" | "envString(string,string)" | "envString(string)" | "envUint(string)" | "envUint(string,string)" | "etch" | "eth_getLogs" | "exists" | "expectCall(address,uint256,uint64,bytes)" | "expectCall(address,uint256,uint64,bytes,uint64)" | "expectCall(address,uint256,bytes,uint64)" | "expectCall(address,bytes)" | "expectCall(address,bytes,uint64)" | "expectCall(address,uint256,bytes)" | "expectCallMinGas(address,uint256,uint64,bytes)" | "expectCallMinGas(address,uint256,uint64,bytes,uint64)" | "expectCreate" | "expectCreate2" | "expectEmit()" | "expectEmit(bool,bool,bool,bool)" | "expectEmit(uint64)" | "expectEmit(bool,bool,bool,bool,uint64)" | "expectEmit(bool,bool,bool,bool,address)" | "expectEmit(address)" | "expectEmit(address,uint64)" | "expectEmit(bool,bool,bool,bool,address,uint64)" | "expectEmitAnonymous()" | "expectEmitAnonymous(address)" | "expectEmitAnonymous(bool,bool,bool,bool,bool,address)" | "expectEmitAnonymous(bool,bool,bool,bool,bool)" | "expectPartialRevert(bytes4)" | "expectPartialRevert(bytes4,address)" | "expectRevert(address,uint64)" | "expectRevert(bytes4,address)" | "expectRevert(bytes,uint64)" | "expectRevert(uint64)" | "expectRevert(bytes,address)" | "expectRevert(bytes4,address,uint64)" | "expectRevert(bytes4)" | "expectRevert(bytes,address,uint64)" | "expectRevert(address)" | "expectRevert(bytes4,uint64)" | "expectRevert(bytes)" | "expectRevert()" | "expectSafeMemory" | "expectSafeMemoryCall" | "fee" | "ffi" | "foundryVersionAtLeast" | "foundryVersionCmp" | "fsMetadata" | "getArtifactPathByCode" | "getArtifactPathByDeployedCode" | "getBlobBaseFee" | "getBlobhashes" | "getBlockNumber" | "getBlockTimestamp" | "getBroadcast" | "getBroadcasts(string,uint64)" | "getBroadcasts(string,uint64,uint8)" | "getCode" | "getDeployedCode" | "getDeployment(string,uint64)" | "getDeployment(string)" | "getDeployments" | "getFoundryVersion" | "getLabel" | "getMappingKeyAndParentOf" | "getMappingLength" | "getMappingSlotAt" | "getNonce(address)" | "getNonce((address,uint256,uint256,uint256))" | "getRecordedLogs" | "getStateDiff" | "getStateDiffJson" | "getWallets" | "indexOf" | "isContext" | "isDir" | "isFile" | "isPersistent" | "keyExists" | "keyExistsJson" | "keyExistsToml" | "label" | "lastCallGas" | "load" | "loadAllocs" | "makePersistent(address[])" | "makePersistent(address,address)" | "makePersistent(address)" | "makePersistent(address,address,address)" | "mockCall(address,bytes4,bytes)" | "mockCall(address,uint256,bytes,bytes)" | "mockCall(address,bytes,bytes)" | "mockCall(address,uint256,bytes4,bytes)" | "mockCallRevert(address,bytes4,bytes)" | "mockCallRevert(address,uint256,bytes4,bytes)" | "mockCallRevert(address,uint256,bytes,bytes)" | "mockCallRevert(address,bytes,bytes)" | "mockCalls(address,uint256,bytes,bytes[])" | "mockCalls(address,bytes,bytes[])" | "mockFunction" | "noAccessList" | "parseAddress" | "parseBool" | "parseBytes" | "parseBytes32" | "parseInt" | "parseJson(string)" | "parseJson(string,string)" | "parseJsonAddress" | "parseJsonAddressArray" | "parseJsonBool" | "parseJsonBoolArray" | "parseJsonBytes" | "parseJsonBytes32" | "parseJsonBytes32Array" | "parseJsonBytesArray" | "parseJsonInt" | "parseJsonIntArray" | "parseJsonKeys" | "parseJsonString" | "parseJsonStringArray" | "parseJsonType(string,string)" | "parseJsonType(string,string,string)" | "parseJsonTypeArray" | "parseJsonUint" | "parseJsonUintArray" | "parseToml(string,string)" | "parseToml(string)" | "parseTomlAddress" | "parseTomlAddressArray" | "parseTomlBool" | "parseTomlBoolArray" | "parseTomlBytes" | "parseTomlBytes32" | "parseTomlBytes32Array" | "parseTomlBytesArray" | "parseTomlInt" | "parseTomlIntArray" | "parseTomlKeys" | "parseTomlString" | "parseTomlStringArray" | "parseTomlType(string,string)" | "parseTomlType(string,string,string)" | "parseTomlTypeArray" | "parseTomlUint" | "parseTomlUintArray" | "parseUint" | "pauseGasMetering" | "pauseTracing" | "prank(address,address)" | "prank(address,address,bool)" | "prank(address,bool)" | "prank(address)" | "prevrandao(bytes32)" | "prevrandao(uint256)" | "projectRoot" | "prompt" | "promptAddress" | "promptSecret" | "promptSecretUint" | "promptUint" | "publicKeyP256" | "randomAddress" | "randomBool" | "randomBytes" | "randomBytes4" | "randomBytes8" | "randomInt()" | "randomInt(uint256)" | "randomUint()" | "randomUint(uint256)" | "randomUint(uint256,uint256)" | "readCallers" | "readDir(string,uint64)" | "readDir(string,uint64,bool)" | "readDir(string)" | "readFile" | "readFileBinary" | "readLine" | "readLink" | "record" | "recordLogs" | "rememberKey" | "rememberKeys(string,string,uint32)" | "rememberKeys(string,string,string,uint32)" | "removeDir" | "removeFile" | "replace" | "resetGasMetering" | "resetNonce" | "resumeGasMetering" | "resumeTracing" | "revertTo" | "revertToAndDelete" | "revertToState" | "revertToStateAndDelete" | "revokePersistent(address[])" | "revokePersistent(address)" | "roll" | "rollFork(bytes32)" | "rollFork(uint256,uint256)" | "rollFork(uint256)" | "rollFork(uint256,bytes32)" | "rpc(string,string,string)" | "rpc(string,string)" | "rpcUrl" | "rpcUrlStructs" | "rpcUrls" | "selectFork" | "serializeAddress(string,string,address[])" | "serializeAddress(string,string,address)" | "serializeBool(string,string,bool[])" | "serializeBool(string,string,bool)" | "serializeBytes(string,string,bytes[])" | "serializeBytes(string,string,bytes)" | "serializeBytes32(string,string,bytes32[])" | "serializeBytes32(string,string,bytes32)" | "serializeInt(string,string,int256)" | "serializeInt(string,string,int256[])" | "serializeJson" | "serializeJsonType(string,bytes)" | "serializeJsonType(string,string,string,bytes)" | "serializeString(string,string,string[])" | "serializeString(string,string,string)" | "serializeUint(string,string,uint256)" | "serializeUint(string,string,uint256[])" | "serializeUintToHex" | "setArbitraryStorage" | "setBlockhash" | "setEnv" | "setNonce" | "setNonceUnsafe" | "sign(bytes32)" | "sign(address,bytes32)" | "sign((address,uint256,uint256,uint256),bytes32)" | "sign(uint256,bytes32)" | "signAndAttachDelegation" | "signCompact((address,uint256,uint256,uint256),bytes32)" | "signCompact(address,bytes32)" | "signCompact(bytes32)" | "signCompact(uint256,bytes32)" | "signDelegation" | "signP256" | "skip(bool,string)" | "skip(bool)" | "sleep" | "snapshot" | "snapshotGasLastCall(string,string)" | "snapshotGasLastCall(string)" | "snapshotState" | "snapshotValue(string,uint256)" | "snapshotValue(string,string,uint256)" | "split" | "startBroadcast()" | "startBroadcast(address)" | "startBroadcast(uint256)" | "startDebugTraceRecording" | "startMappingRecording" | "startPrank(address)" | "startPrank(address,bool)" | "startPrank(address,address)" | "startPrank(address,address,bool)" | "startSnapshotGas(string)" | "startSnapshotGas(string,string)" | "startStateDiffRecording" | "stopAndReturnDebugTraceRecording" | "stopAndReturnStateDiff" | "stopBroadcast" | "stopExpectSafeMemory" | "stopMappingRecording" | "stopPrank" | "stopSnapshotGas(string,string)" | "stopSnapshotGas(string)" | "stopSnapshotGas()" | "store" | "toBase64(string)" | "toBase64(bytes)" | "toBase64URL(string)" | "toBase64URL(bytes)" | "toLowercase" | "toString(address)" | "toString(uint256)" | "toString(bytes)" | "toString(bool)" | "toString(int256)" | "toString(bytes32)" | "toUppercase" | "transact(uint256,bytes32)" | "transact(bytes32)" | "trim" | "tryFfi" | "txGasPrice" | "unixTime" | "warmSlot" | "warp" | "writeFile" | "writeFileBinary" | "writeJson(string,string,string)" | "writeJson(string,string)" | "writeLine" | "writeToml(string,string,string)" | "writeToml(string,string)"): FunctionFragment;
    encodeFunctionData(functionFragment: "accessList", values: [VmSafe.AccessListItemStruct[]]): string;
    encodeFunctionData(functionFragment: "accesses", values: [string]): string;
    encodeFunctionData(functionFragment: "activeFork", values?: undefined): string;
    encodeFunctionData(functionFragment: "addr", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "allowCheatcodes", values: [string]): string;
    encodeFunctionData(functionFragment: "assertApproxEqAbs(uint256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertApproxEqAbs(int256,int256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertApproxEqAbs(int256,int256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertApproxEqAbs(uint256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertApproxEqAbsDecimal(int256,int256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertApproxEqAbsDecimal(int256,int256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertApproxEqRel(uint256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertApproxEqRel(uint256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertApproxEqRel(int256,int256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertApproxEqRel(int256,int256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertApproxEqRelDecimal(int256,int256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertApproxEqRelDecimal(int256,int256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertEq(bytes32[],bytes32[])", values: [BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "assertEq(int256[],int256[],string)", values: [BigNumberish[], BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "assertEq(address,address,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "assertEq(string,string,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "assertEq(address[],address[])", values: [string[], string[]]): string;
    encodeFunctionData(functionFragment: "assertEq(address[],address[],string)", values: [string[], string[], string]): string;
    encodeFunctionData(functionFragment: "assertEq(bool,bool,string)", values: [boolean, boolean, string]): string;
    encodeFunctionData(functionFragment: "assertEq(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "assertEq(uint256[],uint256[],string)", values: [BigNumberish[], BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "assertEq(bool[],bool[])", values: [boolean[], boolean[]]): string;
    encodeFunctionData(functionFragment: "assertEq(int256[],int256[])", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "assertEq(int256,int256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertEq(bytes32,bytes32)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "assertEq(uint256,uint256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertEq(uint256[],uint256[])", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "assertEq(bytes,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "assertEq(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertEq(bytes32,bytes32,string)", values: [BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "assertEq(string[],string[])", values: [string[], string[]]): string;
    encodeFunctionData(functionFragment: "assertEq(bytes32[],bytes32[],string)", values: [BytesLike[], BytesLike[], string]): string;
    encodeFunctionData(functionFragment: "assertEq(bytes,bytes,string)", values: [BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "assertEq(bool[],bool[],string)", values: [boolean[], boolean[], string]): string;
    encodeFunctionData(functionFragment: "assertEq(bytes[],bytes[])", values: [BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "assertEq(string[],string[],string)", values: [string[], string[], string]): string;
    encodeFunctionData(functionFragment: "assertEq(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "assertEq(bytes[],bytes[],string)", values: [BytesLike[], BytesLike[], string]): string;
    encodeFunctionData(functionFragment: "assertEq(bool,bool)", values: [boolean, boolean]): string;
    encodeFunctionData(functionFragment: "assertEq(int256,int256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertEqDecimal(uint256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertEqDecimal(int256,int256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertEqDecimal(int256,int256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertEqDecimal(uint256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertFalse(bool,string)", values: [boolean, string]): string;
    encodeFunctionData(functionFragment: "assertFalse(bool)", values: [boolean]): string;
    encodeFunctionData(functionFragment: "assertGe(int256,int256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertGe(int256,int256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertGe(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertGe(uint256,uint256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertGeDecimal(uint256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertGeDecimal(int256,int256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertGeDecimal(uint256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertGeDecimal(int256,int256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertGt(int256,int256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertGt(uint256,uint256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertGt(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertGt(int256,int256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertGtDecimal(int256,int256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertGtDecimal(uint256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertGtDecimal(int256,int256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertGtDecimal(uint256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertLe(int256,int256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertLe(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertLe(int256,int256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertLe(uint256,uint256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertLeDecimal(int256,int256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertLeDecimal(uint256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertLeDecimal(int256,int256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertLeDecimal(uint256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertLt(int256,int256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertLt(uint256,uint256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertLt(int256,int256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertLt(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertLtDecimal(uint256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertLtDecimal(int256,int256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertLtDecimal(uint256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertLtDecimal(int256,int256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bytes32[],bytes32[])", values: [BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "assertNotEq(int256[],int256[])", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bool,bool,string)", values: [boolean, boolean, string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bytes[],bytes[],string)", values: [BytesLike[], BytesLike[], string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bool,bool)", values: [boolean, boolean]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bool[],bool[])", values: [boolean[], boolean[]]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bytes,bytes)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "assertNotEq(address[],address[])", values: [string[], string[]]): string;
    encodeFunctionData(functionFragment: "assertNotEq(int256,int256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(uint256[],uint256[])", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bool[],bool[],string)", values: [boolean[], boolean[], string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(address[],address[],string)", values: [string[], string[], string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(string,string,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(address,address,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bytes32,bytes32)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bytes,bytes,string)", values: [BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(uint256,uint256,string)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(uint256[],uint256[],string)", values: [BigNumberish[], BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bytes32,bytes32,string)", values: [BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(string[],string[],string)", values: [string[], string[], string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bytes32[],bytes32[],string)", values: [BytesLike[], BytesLike[], string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(string[],string[])", values: [string[], string[]]): string;
    encodeFunctionData(functionFragment: "assertNotEq(int256[],int256[],string)", values: [BigNumberish[], BigNumberish[], string]): string;
    encodeFunctionData(functionFragment: "assertNotEq(bytes[],bytes[])", values: [BytesLike[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "assertNotEq(int256,int256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertNotEqDecimal(int256,int256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertNotEqDecimal(int256,int256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertNotEqDecimal(uint256,uint256,uint256)", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "assertNotEqDecimal(uint256,uint256,uint256,string)", values: [BigNumberish, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "assertTrue(bool)", values: [boolean]): string;
    encodeFunctionData(functionFragment: "assertTrue(bool,string)", values: [boolean, string]): string;
    encodeFunctionData(functionFragment: "assume", values: [boolean]): string;
    encodeFunctionData(functionFragment: "assumeNoRevert()", values?: undefined): string;
    encodeFunctionData(functionFragment: "assumeNoRevert((address,bool,bytes)[])", values: [VmSafe.PotentialRevertStruct[]]): string;
    encodeFunctionData(functionFragment: "assumeNoRevert((address,bool,bytes))", values: [VmSafe.PotentialRevertStruct]): string;
    encodeFunctionData(functionFragment: "attachDelegation", values: [VmSafe.SignedDelegationStruct]): string;
    encodeFunctionData(functionFragment: "blobBaseFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "blobhashes", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "breakpoint(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "breakpoint(string,bool)", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "broadcast()", values?: undefined): string;
    encodeFunctionData(functionFragment: "broadcast(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "broadcast(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "broadcastRawTransaction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "chainId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "clearMockedCalls", values?: undefined): string;
    encodeFunctionData(functionFragment: "cloneAccount", values: [string, string]): string;
    encodeFunctionData(functionFragment: "closeFile", values: [string]): string;
    encodeFunctionData(functionFragment: "coinbase", values: [string]): string;
    encodeFunctionData(functionFragment: "computeCreate2Address(bytes32,bytes32)", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "computeCreate2Address(bytes32,bytes32,address)", values: [BytesLike, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "computeCreateAddress", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "contains", values: [string, string]): string;
    encodeFunctionData(functionFragment: "cool", values: [string]): string;
    encodeFunctionData(functionFragment: "coolSlot", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "copyFile", values: [string, string]): string;
    encodeFunctionData(functionFragment: "copyStorage", values: [string, string]): string;
    encodeFunctionData(functionFragment: "createDir", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "createFork(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "createFork(string,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createFork(string,bytes32)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "createSelectFork(string,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "createSelectFork(string,bytes32)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "createSelectFork(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "createWallet(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "createWallet(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "createWallet(uint256,string)", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "deal", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deleteSnapshot", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deleteSnapshots", values?: undefined): string;
    encodeFunctionData(functionFragment: "deleteStateSnapshot", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deleteStateSnapshots", values?: undefined): string;
    encodeFunctionData(functionFragment: "deployCode(string,bytes)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "deployCode(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,string,uint32,string)", values: [string, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,uint32,string)", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,uint32)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "deriveKey(string,string,uint32)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "difficulty", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "dumpState", values: [string]): string;
    encodeFunctionData(functionFragment: "ensNamehash", values: [string]): string;
    encodeFunctionData(functionFragment: "envAddress(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envAddress(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envBool(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envBool(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envBytes(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envBytes(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envBytes32(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envBytes32(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envExists", values: [string]): string;
    encodeFunctionData(functionFragment: "envInt(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envInt(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,bytes32[])", values: [string, string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,int256[])", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,bool)", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "envOr(string,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envOr(string,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,bytes[])", values: [string, string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,uint256[])", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,string[])", values: [string, string, string[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,bytes)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "envOr(string,bytes32)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "envOr(string,int256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,address[])", values: [string, string, string[]]): string;
    encodeFunctionData(functionFragment: "envOr(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envOr(string,string,bool[])", values: [string, string, boolean[]]): string;
    encodeFunctionData(functionFragment: "envString(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "envString(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envUint(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "envUint(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "etch", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "eth_getLogs", values: [BigNumberish, BigNumberish, string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "exists", values: [string]): string;
    encodeFunctionData(functionFragment: "expectCall(address,uint256,uint64,bytes)", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "expectCall(address,uint256,uint64,bytes,uint64)", values: [string, BigNumberish, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectCall(address,uint256,bytes,uint64)", values: [string, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectCall(address,bytes)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "expectCall(address,bytes,uint64)", values: [string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectCall(address,uint256,bytes)", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "expectCallMinGas(address,uint256,uint64,bytes)", values: [string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "expectCallMinGas(address,uint256,uint64,bytes,uint64)", values: [string, BigNumberish, BigNumberish, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectCreate", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "expectCreate2", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "expectEmit()", values?: undefined): string;
    encodeFunctionData(functionFragment: "expectEmit(bool,bool,bool,bool)", values: [boolean, boolean, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "expectEmit(uint64)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectEmit(bool,bool,bool,bool,uint64)", values: [boolean, boolean, boolean, boolean, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectEmit(bool,bool,bool,bool,address)", values: [boolean, boolean, boolean, boolean, string]): string;
    encodeFunctionData(functionFragment: "expectEmit(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "expectEmit(address,uint64)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectEmit(bool,bool,bool,bool,address,uint64)", values: [boolean, boolean, boolean, boolean, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectEmitAnonymous()", values?: undefined): string;
    encodeFunctionData(functionFragment: "expectEmitAnonymous(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "expectEmitAnonymous(bool,bool,bool,bool,bool,address)", values: [boolean, boolean, boolean, boolean, boolean, string]): string;
    encodeFunctionData(functionFragment: "expectEmitAnonymous(bool,bool,bool,bool,bool)", values: [boolean, boolean, boolean, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "expectPartialRevert(bytes4)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "expectPartialRevert(bytes4,address)", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "expectRevert(address,uint64)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes4,address)", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes,uint64)", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectRevert(uint64)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes,address)", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes4,address,uint64)", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes4)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes,address,uint64)", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectRevert(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes4,uint64)", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectRevert(bytes)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "expectRevert()", values?: undefined): string;
    encodeFunctionData(functionFragment: "expectSafeMemory", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "expectSafeMemoryCall", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "ffi", values: [string[]]): string;
    encodeFunctionData(functionFragment: "foundryVersionAtLeast", values: [string]): string;
    encodeFunctionData(functionFragment: "foundryVersionCmp", values: [string]): string;
    encodeFunctionData(functionFragment: "fsMetadata", values: [string]): string;
    encodeFunctionData(functionFragment: "getArtifactPathByCode", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getArtifactPathByDeployedCode", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getBlobBaseFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBlobhashes", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBlockNumber", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBlockTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBroadcast", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBroadcasts(string,uint64)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBroadcasts(string,uint64,uint8)", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getCode", values: [string]): string;
    encodeFunctionData(functionFragment: "getDeployedCode", values: [string]): string;
    encodeFunctionData(functionFragment: "getDeployment(string,uint64)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDeployment(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "getDeployments", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getFoundryVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getLabel", values: [string]): string;
    encodeFunctionData(functionFragment: "getMappingKeyAndParentOf", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getMappingLength", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getMappingSlotAt", values: [string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getNonce(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "getNonce((address,uint256,uint256,uint256))", values: [VmSafe.WalletStruct]): string;
    encodeFunctionData(functionFragment: "getRecordedLogs", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStateDiff", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStateDiffJson", values?: undefined): string;
    encodeFunctionData(functionFragment: "getWallets", values?: undefined): string;
    encodeFunctionData(functionFragment: "indexOf", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isContext", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isDir", values: [string]): string;
    encodeFunctionData(functionFragment: "isFile", values: [string]): string;
    encodeFunctionData(functionFragment: "isPersistent", values: [string]): string;
    encodeFunctionData(functionFragment: "keyExists", values: [string, string]): string;
    encodeFunctionData(functionFragment: "keyExistsJson", values: [string, string]): string;
    encodeFunctionData(functionFragment: "keyExistsToml", values: [string, string]): string;
    encodeFunctionData(functionFragment: "label", values: [string, string]): string;
    encodeFunctionData(functionFragment: "lastCallGas", values?: undefined): string;
    encodeFunctionData(functionFragment: "load", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "loadAllocs", values: [string]): string;
    encodeFunctionData(functionFragment: "makePersistent(address[])", values: [string[]]): string;
    encodeFunctionData(functionFragment: "makePersistent(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "makePersistent(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "makePersistent(address,address,address)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "mockCall(address,bytes4,bytes)", values: [string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockCall(address,uint256,bytes,bytes)", values: [string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockCall(address,bytes,bytes)", values: [string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockCall(address,uint256,bytes4,bytes)", values: [string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockCallRevert(address,bytes4,bytes)", values: [string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockCallRevert(address,uint256,bytes4,bytes)", values: [string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockCallRevert(address,uint256,bytes,bytes)", values: [string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockCallRevert(address,bytes,bytes)", values: [string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "mockCalls(address,uint256,bytes,bytes[])", values: [string, BigNumberish, BytesLike, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "mockCalls(address,bytes,bytes[])", values: [string, BytesLike, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "mockFunction", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "noAccessList", values?: undefined): string;
    encodeFunctionData(functionFragment: "parseAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "parseBool", values: [string]): string;
    encodeFunctionData(functionFragment: "parseBytes", values: [string]): string;
    encodeFunctionData(functionFragment: "parseBytes32", values: [string]): string;
    encodeFunctionData(functionFragment: "parseInt", values: [string]): string;
    encodeFunctionData(functionFragment: "parseJson(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "parseJson(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonAddress", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonAddressArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBool", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBoolArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBytes", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBytes32", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBytes32Array", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonBytesArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonInt", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonIntArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonKeys", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonString", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonStringArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonType(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonType(string,string,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonTypeArray", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonUint", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseJsonUintArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseToml(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseToml(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "parseTomlAddress", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlAddressArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlBool", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlBoolArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlBytes", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlBytes32", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlBytes32Array", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlBytesArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlInt", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlIntArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlKeys", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlString", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlStringArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlType(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlType(string,string,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlTypeArray", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlUint", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseTomlUintArray", values: [string, string]): string;
    encodeFunctionData(functionFragment: "parseUint", values: [string]): string;
    encodeFunctionData(functionFragment: "pauseGasMetering", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauseTracing", values?: undefined): string;
    encodeFunctionData(functionFragment: "prank(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "prank(address,address,bool)", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "prank(address,bool)", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "prank(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "prevrandao(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "prevrandao(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "projectRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "prompt", values: [string]): string;
    encodeFunctionData(functionFragment: "promptAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "promptSecret", values: [string]): string;
    encodeFunctionData(functionFragment: "promptSecretUint", values: [string]): string;
    encodeFunctionData(functionFragment: "promptUint", values: [string]): string;
    encodeFunctionData(functionFragment: "publicKeyP256", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "randomAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "randomBool", values?: undefined): string;
    encodeFunctionData(functionFragment: "randomBytes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "randomBytes4", values?: undefined): string;
    encodeFunctionData(functionFragment: "randomBytes8", values?: undefined): string;
    encodeFunctionData(functionFragment: "randomInt()", values?: undefined): string;
    encodeFunctionData(functionFragment: "randomInt(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "randomUint()", values?: undefined): string;
    encodeFunctionData(functionFragment: "randomUint(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "randomUint(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "readCallers", values?: undefined): string;
    encodeFunctionData(functionFragment: "readDir(string,uint64)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "readDir(string,uint64,bool)", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "readDir(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "readFile", values: [string]): string;
    encodeFunctionData(functionFragment: "readFileBinary", values: [string]): string;
    encodeFunctionData(functionFragment: "readLine", values: [string]): string;
    encodeFunctionData(functionFragment: "readLink", values: [string]): string;
    encodeFunctionData(functionFragment: "record", values?: undefined): string;
    encodeFunctionData(functionFragment: "recordLogs", values?: undefined): string;
    encodeFunctionData(functionFragment: "rememberKey", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rememberKeys(string,string,uint32)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rememberKeys(string,string,string,uint32)", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeDir", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "removeFile", values: [string]): string;
    encodeFunctionData(functionFragment: "replace", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "resetGasMetering", values?: undefined): string;
    encodeFunctionData(functionFragment: "resetNonce", values: [string]): string;
    encodeFunctionData(functionFragment: "resumeGasMetering", values?: undefined): string;
    encodeFunctionData(functionFragment: "resumeTracing", values?: undefined): string;
    encodeFunctionData(functionFragment: "revertTo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "revertToAndDelete", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "revertToState", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "revertToStateAndDelete", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "revokePersistent(address[])", values: [string[]]): string;
    encodeFunctionData(functionFragment: "revokePersistent(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "roll", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rollFork(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "rollFork(uint256,uint256)", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "rollFork(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "rollFork(uint256,bytes32)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "rpc(string,string,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "rpc(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "rpcUrl", values: [string]): string;
    encodeFunctionData(functionFragment: "rpcUrlStructs", values?: undefined): string;
    encodeFunctionData(functionFragment: "rpcUrls", values?: undefined): string;
    encodeFunctionData(functionFragment: "selectFork", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "serializeAddress(string,string,address[])", values: [string, string, string[]]): string;
    encodeFunctionData(functionFragment: "serializeAddress(string,string,address)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "serializeBool(string,string,bool[])", values: [string, string, boolean[]]): string;
    encodeFunctionData(functionFragment: "serializeBool(string,string,bool)", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "serializeBytes(string,string,bytes[])", values: [string, string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "serializeBytes(string,string,bytes)", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "serializeBytes32(string,string,bytes32[])", values: [string, string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "serializeBytes32(string,string,bytes32)", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "serializeInt(string,string,int256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "serializeInt(string,string,int256[])", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "serializeJson", values: [string, string]): string;
    encodeFunctionData(functionFragment: "serializeJsonType(string,bytes)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "serializeJsonType(string,string,string,bytes)", values: [string, string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "serializeString(string,string,string[])", values: [string, string, string[]]): string;
    encodeFunctionData(functionFragment: "serializeString(string,string,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "serializeUint(string,string,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "serializeUint(string,string,uint256[])", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "serializeUintToHex", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setArbitraryStorage", values: [string]): string;
    encodeFunctionData(functionFragment: "setBlockhash", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setEnv", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setNonce", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setNonceUnsafe", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sign(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "sign(address,bytes32)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "sign((address,uint256,uint256,uint256),bytes32)", values: [VmSafe.WalletStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "sign(uint256,bytes32)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "signAndAttachDelegation", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "signCompact((address,uint256,uint256,uint256),bytes32)", values: [VmSafe.WalletStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "signCompact(address,bytes32)", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "signCompact(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "signCompact(uint256,bytes32)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "signDelegation", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "signP256", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "skip(bool,string)", values: [boolean, string]): string;
    encodeFunctionData(functionFragment: "skip(bool)", values: [boolean]): string;
    encodeFunctionData(functionFragment: "sleep", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "snapshot", values?: undefined): string;
    encodeFunctionData(functionFragment: "snapshotGasLastCall(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "snapshotGasLastCall(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "snapshotState", values?: undefined): string;
    encodeFunctionData(functionFragment: "snapshotValue(string,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "snapshotValue(string,string,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "split", values: [string, string]): string;
    encodeFunctionData(functionFragment: "startBroadcast()", values?: undefined): string;
    encodeFunctionData(functionFragment: "startBroadcast(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "startBroadcast(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "startDebugTraceRecording", values?: undefined): string;
    encodeFunctionData(functionFragment: "startMappingRecording", values?: undefined): string;
    encodeFunctionData(functionFragment: "startPrank(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "startPrank(address,bool)", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "startPrank(address,address)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "startPrank(address,address,bool)", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "startSnapshotGas(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "startSnapshotGas(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "startStateDiffRecording", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopAndReturnDebugTraceRecording", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopAndReturnStateDiff", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopBroadcast", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopExpectSafeMemory", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopMappingRecording", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopPrank", values?: undefined): string;
    encodeFunctionData(functionFragment: "stopSnapshotGas(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "stopSnapshotGas(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "stopSnapshotGas()", values?: undefined): string;
    encodeFunctionData(functionFragment: "store", values: [string, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "toBase64(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "toBase64(bytes)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "toBase64URL(string)", values: [string]): string;
    encodeFunctionData(functionFragment: "toBase64URL(bytes)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "toLowercase", values: [string]): string;
    encodeFunctionData(functionFragment: "toString(address)", values: [string]): string;
    encodeFunctionData(functionFragment: "toString(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "toString(bytes)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "toString(bool)", values: [boolean]): string;
    encodeFunctionData(functionFragment: "toString(int256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "toString(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "toUppercase", values: [string]): string;
    encodeFunctionData(functionFragment: "transact(uint256,bytes32)", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "transact(bytes32)", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "trim", values: [string]): string;
    encodeFunctionData(functionFragment: "tryFfi", values: [string[]]): string;
    encodeFunctionData(functionFragment: "txGasPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unixTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "warmSlot", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "warp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "writeFile", values: [string, string]): string;
    encodeFunctionData(functionFragment: "writeFileBinary", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "writeJson(string,string,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "writeJson(string,string)", values: [string, string]): string;
    encodeFunctionData(functionFragment: "writeLine", values: [string, string]): string;
    encodeFunctionData(functionFragment: "writeToml(string,string,string)", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "writeToml(string,string)", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "accessList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "accesses", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "activeFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowCheatcodes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqAbs(uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqAbs(int256,int256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqAbs(int256,int256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqAbs(uint256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqAbsDecimal(int256,int256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqAbsDecimal(int256,int256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqRel(uint256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqRel(uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqRel(int256,int256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqRel(int256,int256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqRelDecimal(int256,int256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertApproxEqRelDecimal(int256,int256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bytes32[],bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(int256[],int256[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(address,address,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(address[],address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(address[],address[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bool,bool,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(uint256[],uint256[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bool[],bool[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(int256[],int256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(int256,int256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bytes32,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(uint256[],uint256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bytes32,bytes32,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(string[],string[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bytes32[],bytes32[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bytes,bytes,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bool[],bool[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bytes[],bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(string[],string[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bytes[],bytes[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEq(int256,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEqDecimal(uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEqDecimal(int256,int256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEqDecimal(int256,int256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertEqDecimal(uint256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertFalse(bool,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertFalse(bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGe(int256,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGe(int256,int256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGe(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGe(uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGeDecimal(uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGeDecimal(int256,int256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGeDecimal(uint256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGeDecimal(int256,int256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGt(int256,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGt(uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGt(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGt(int256,int256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGtDecimal(int256,int256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGtDecimal(uint256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGtDecimal(int256,int256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertGtDecimal(uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLe(int256,int256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLe(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLe(int256,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLe(uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLeDecimal(int256,int256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLeDecimal(uint256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLeDecimal(int256,int256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLeDecimal(uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLt(int256,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLt(uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLt(int256,int256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLt(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLtDecimal(uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLtDecimal(int256,int256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLtDecimal(uint256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertLtDecimal(int256,int256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bytes32[],bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(int256[],int256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bool,bool,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bytes[],bytes[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bool[],bool[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(address[],address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(int256,int256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(uint256[],uint256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bool[],bool[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(address[],address[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(address,address,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bytes32,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bytes,bytes,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(uint256[],uint256[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bytes32,bytes32,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(string[],string[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bytes32[],bytes32[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(string[],string[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(int256[],int256[],string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(bytes[],bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEq(int256,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEqDecimal(int256,int256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEqDecimal(int256,int256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEqDecimal(uint256,uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertNotEqDecimal(uint256,uint256,uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertTrue(bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assertTrue(bool,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assume", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assumeNoRevert()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assumeNoRevert((address,bool,bytes)[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "assumeNoRevert((address,bool,bytes))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "attachDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blobBaseFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blobhashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "breakpoint(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "breakpoint(string,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcast(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "broadcastRawTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearMockedCalls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cloneAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coinbase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeCreate2Address(bytes32,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeCreate2Address(bytes32,bytes32,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "computeCreateAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coolSlot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "copyFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "copyStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createDir", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFork(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFork(string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createFork(string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSelectFork(string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSelectFork(string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSelectFork(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createWallet(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createWallet(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createWallet(uint256,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteSnapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteSnapshots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteStateSnapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteStateSnapshots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployCode(string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployCode(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,string,uint32,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,uint32,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deriveKey(string,string,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "difficulty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dumpState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ensNamehash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envAddress(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envAddress(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBool(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBool(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes32(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envBytes32(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envExists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envInt(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envInt(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,int256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,uint256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,string[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envOr(string,string,bool[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envString(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envString(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envUint(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "envUint(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "etch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eth_getLogs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,uint256,uint64,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,uint256,uint64,bytes,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,uint256,bytes,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,bytes,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCall(address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCallMinGas(address,uint256,uint64,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCallMinGas(address,uint256,uint64,bytes,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCreate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectCreate2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(bool,bool,bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(bool,bool,bool,bool,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(bool,bool,bool,bool,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(address,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmit(bool,bool,bool,bool,address,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmitAnonymous()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmitAnonymous(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmitAnonymous(bool,bool,bool,bool,bool,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectEmitAnonymous(bool,bool,bool,bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectPartialRevert(bytes4)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectPartialRevert(bytes4,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(address,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes4,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes4,address,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes4)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes,address,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes4,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectRevert()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectSafeMemory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "expectSafeMemoryCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ffi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "foundryVersionAtLeast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "foundryVersionCmp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fsMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getArtifactPathByCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getArtifactPathByDeployedCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlobBaseFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlobhashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlockNumber", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBlockTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBroadcast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBroadcasts(string,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBroadcasts(string,uint64,uint8)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeployedCode", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeployment(string,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeployment(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeployments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFoundryVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLabel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMappingKeyAndParentOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMappingLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMappingSlotAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce((address,uint256,uint256,uint256))", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRecordedLogs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStateDiff", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStateDiffJson", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWallets", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "indexOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDir", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPersistent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "keyExists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "keyExistsJson", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "keyExistsToml", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "label", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastCallGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "load", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "loadAllocs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makePersistent(address,address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCall(address,bytes4,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCall(address,uint256,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCall(address,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCall(address,uint256,bytes4,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCallRevert(address,bytes4,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCallRevert(address,uint256,bytes4,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCallRevert(address,uint256,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCallRevert(address,bytes,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCalls(address,uint256,bytes,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockCalls(address,bytes,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mockFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "noAccessList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJson(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJson(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonAddressArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBoolArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytes32Array", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonBytesArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonIntArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonStringArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonType(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonType(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonTypeArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseJsonUintArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseToml(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseToml(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlAddressArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlBoolArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlBytes32Array", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlBytesArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlInt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlIntArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlStringArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlType(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlType(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlTypeArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseTomlUintArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "parseUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseGasMetering", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseTracing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prank(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prank(address,address,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prank(address,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prank(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prevrandao(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prevrandao(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "projectRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prompt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "promptAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "promptSecret", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "promptSecretUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "promptUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publicKeyP256", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomBool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomBytes4", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomBytes8", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomInt()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomInt(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomUint()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomUint(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "randomUint(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readCallers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readDir(string,uint64)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readDir(string,uint64,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readDir(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readFileBinary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readLine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "readLink", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "record", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordLogs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rememberKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rememberKeys(string,string,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rememberKeys(string,string,string,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeDir", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replace", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetGasMetering", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resetNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resumeGasMetering", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resumeTracing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertToAndDelete", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertToState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertToStateAndDelete", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokePersistent(address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokePersistent(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(uint256,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollFork(uint256,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpc(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpc(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrl", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrlStructs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcUrls", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selectFork", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeAddress(string,string,address[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeAddress(string,string,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBool(string,string,bool[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBool(string,string,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes(string,string,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes(string,string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes32(string,string,bytes32[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeBytes32(string,string,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeInt(string,string,int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeInt(string,string,int256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeJson", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeJsonType(string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeJsonType(string,string,string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeString(string,string,string[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeString(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeUint(string,string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeUint(string,string,uint256[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "serializeUintToHex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setArbitraryStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBlockhash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEnv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNonceUnsafe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sign(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sign(address,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sign((address,uint256,uint256,uint256),bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sign(uint256,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signAndAttachDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signCompact((address,uint256,uint256,uint256),bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signCompact(address,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signCompact(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signCompact(uint256,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signDelegation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "signP256", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skip(bool,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skip(bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sleep", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snapshot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snapshotGasLastCall(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snapshotGasLastCall(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snapshotState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snapshotValue(string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "snapshotValue(string,string,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "split", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startBroadcast(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startDebugTraceRecording", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startMappingRecording", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPrank(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPrank(address,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPrank(address,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startPrank(address,address,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startSnapshotGas(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startSnapshotGas(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startStateDiffRecording", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopAndReturnDebugTraceRecording", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopAndReturnStateDiff", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopBroadcast", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopExpectSafeMemory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopMappingRecording", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopPrank", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopSnapshotGas(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopSnapshotGas(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stopSnapshotGas()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toBase64(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toBase64(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toBase64URL(string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toBase64URL(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toLowercase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(int256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toString(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toUppercase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transact(uint256,bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transact(bytes32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "trim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tryFfi", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "txGasPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unixTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "warmSlot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "warp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeFile", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeFileBinary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeJson(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeJson(string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeLine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeToml(string,string,string)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "writeToml(string,string)", data: BytesLike): Result;
    events: {};
}
export interface Vm extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VmInterface;
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
        accessList(access: VmSafe.AccessListItemStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        accesses(target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        activeFork(overrides?: CallOverrides): Promise<[BigNumber] & {
            forkId: BigNumber;
        }>;
        addr(privateKey: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            keyAddr: string;
        }>;
        allowCheatcodes(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "assertApproxEqAbs(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqAbs(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqAbs(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqAbs(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqRel(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqRel(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqRel(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqRel(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bytes32[],bytes32[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<[void]>;
        "assertEq(int256[],int256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(address,address,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(string,string,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(address[],address[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<[void]>;
        "assertEq(address[],address[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bool,bool,string)"(left: boolean, right: boolean, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(address,address)"(left: string, right: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(uint256[],uint256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bool[],bool[])"(left: boolean[], right: boolean[], overrides?: CallOverrides): Promise<[void]>;
        "assertEq(int256[],int256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<[void]>;
        "assertEq(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bytes32,bytes32)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(uint256[],uint256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bytes,bytes)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bytes32,bytes32,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(string[],string[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bytes32[],bytes32[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bytes,bytes,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bool[],bool[],string)"(left: boolean[], right: boolean[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bytes[],bytes[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<[void]>;
        "assertEq(string[],string[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(string,string)"(left: string, right: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bytes[],bytes[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(bool,bool)"(left: boolean, right: boolean, overrides?: CallOverrides): Promise<[void]>;
        "assertEq(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertEqDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertEqDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertEqDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertEqDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertFalse(bool,string)"(condition: boolean, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertFalse(bool)"(condition: boolean, overrides?: CallOverrides): Promise<[void]>;
        "assertGe(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertGe(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertGe(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertGe(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertGeDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertGeDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertGeDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertGeDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertGt(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertGt(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertGt(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertGt(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertGtDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertGtDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertGtDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertGtDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertLe(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertLe(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertLe(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertLe(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertLeDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertLeDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertLeDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertLeDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertLt(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertLt(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertLt(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertLt(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertLtDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertLtDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertLtDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertLtDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bytes32[],bytes32[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(int256[],int256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bool,bool,string)"(left: boolean, right: boolean, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bytes[],bytes[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bool,bool)"(left: boolean, right: boolean, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bool[],bool[])"(left: boolean[], right: boolean[], overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bytes,bytes)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(address[],address[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(uint256[],uint256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bool[],bool[],string)"(left: boolean[], right: boolean[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(string,string)"(left: string, right: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(address[],address[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(string,string,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(address,address,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bytes32,bytes32)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bytes,bytes,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(uint256[],uint256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(address,address)"(left: string, right: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bytes32,bytes32,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(string[],string[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bytes32[],bytes32[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(string[],string[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(int256[],int256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(bytes[],bytes[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<[void]>;
        "assertNotEq(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEqDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEqDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEqDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "assertNotEqDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<[void]>;
        "assertTrue(bool)"(condition: boolean, overrides?: CallOverrides): Promise<[void]>;
        "assertTrue(bool,string)"(condition: boolean, error: string, overrides?: CallOverrides): Promise<[void]>;
        assume(condition: boolean, overrides?: CallOverrides): Promise<[void]>;
        "assumeNoRevert()"(overrides?: CallOverrides): Promise<[void]>;
        "assumeNoRevert((address,bool,bytes)[])"(potentialReverts: VmSafe.PotentialRevertStruct[], overrides?: CallOverrides): Promise<[void]>;
        "assumeNoRevert((address,bool,bytes))"(potentialRevert: VmSafe.PotentialRevertStruct, overrides?: CallOverrides): Promise<[void]>;
        attachDelegation(signedDelegation: VmSafe.SignedDelegationStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        blobBaseFee(newBlobBaseFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        blobhashes(hashes: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "breakpoint(string)"(char: string, overrides?: CallOverrides): Promise<[void]>;
        "breakpoint(string,bool)"(char: string, value: boolean, overrides?: CallOverrides): Promise<[void]>;
        "broadcast()"(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "broadcast(address)"(signer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "broadcast(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        broadcastRawTransaction(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        chainId(newChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        clearMockedCalls(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        cloneAccount(source: string, target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        closeFile(path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        coinbase(newCoinbase: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "computeCreate2Address(bytes32,bytes32)"(salt: BytesLike, initCodeHash: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        "computeCreate2Address(bytes32,bytes32,address)"(salt: BytesLike, initCodeHash: BytesLike, deployer: string, overrides?: CallOverrides): Promise<[string]>;
        computeCreateAddress(deployer: string, nonce: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        contains(subject: string, search: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        cool(target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        coolSlot(target: string, slot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        copyFile(from: string, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        copyStorage(from: string, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        createDir(path: string, recursive: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "createFork(string)"(urlOrAlias: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "createFork(string,uint256)"(urlOrAlias: string, blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "createFork(string,bytes32)"(urlOrAlias: string, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "createSelectFork(string,uint256)"(urlOrAlias: string, blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "createSelectFork(string,bytes32)"(urlOrAlias: string, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "createSelectFork(string)"(urlOrAlias: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "createWallet(string)"(walletLabel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "createWallet(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "createWallet(uint256,string)"(privateKey: BigNumberish, walletLabel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deal(account: string, newBalance: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deleteSnapshot(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deleteSnapshots(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deleteStateSnapshot(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        deleteStateSnapshots(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "deployCode(string,bytes)"(artifactPath: string, constructorArgs: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "deployCode(string)"(artifactPath: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "deriveKey(string,string,uint32,string)"(mnemonic: string, derivationPath: string, index: BigNumberish, language: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            privateKey: BigNumber;
        }>;
        "deriveKey(string,uint32,string)"(mnemonic: string, index: BigNumberish, language: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            privateKey: BigNumber;
        }>;
        "deriveKey(string,uint32)"(mnemonic: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            privateKey: BigNumber;
        }>;
        "deriveKey(string,string,uint32)"(mnemonic: string, derivationPath: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            privateKey: BigNumber;
        }>;
        difficulty(newDifficulty: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        dumpState(pathToStateJson: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        ensNamehash(name: string, overrides?: CallOverrides): Promise<[string]>;
        "envAddress(string)"(name: string, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        "envAddress(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envBool(string)"(name: string, overrides?: CallOverrides): Promise<[boolean] & {
            value: boolean;
        }>;
        "envBool(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<[boolean[]] & {
            value: boolean[];
        }>;
        "envBytes(string)"(name: string, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        "envBytes(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envBytes32(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envBytes32(string)"(name: string, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        envExists(name: string, overrides?: CallOverrides): Promise<[boolean] & {
            result: boolean;
        }>;
        "envInt(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            value: BigNumber[];
        }>;
        "envInt(string)"(name: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            value: BigNumber;
        }>;
        "envOr(string,string,bytes32[])"(name: string, delim: string, defaultValue: BytesLike[], overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envOr(string,string,int256[])"(name: string, delim: string, defaultValue: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            value: BigNumber[];
        }>;
        "envOr(string,bool)"(name: string, defaultValue: boolean, overrides?: CallOverrides): Promise<[boolean] & {
            value: boolean;
        }>;
        "envOr(string,address)"(name: string, defaultValue: string, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        "envOr(string,uint256)"(name: string, defaultValue: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            value: BigNumber;
        }>;
        "envOr(string,string,bytes[])"(name: string, delim: string, defaultValue: BytesLike[], overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envOr(string,string,uint256[])"(name: string, delim: string, defaultValue: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]] & {
            value: BigNumber[];
        }>;
        "envOr(string,string,string[])"(name: string, delim: string, defaultValue: string[], overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envOr(string,bytes)"(name: string, defaultValue: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        "envOr(string,bytes32)"(name: string, defaultValue: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        "envOr(string,int256)"(name: string, defaultValue: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber] & {
            value: BigNumber;
        }>;
        "envOr(string,string,address[])"(name: string, delim: string, defaultValue: string[], overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envOr(string,string)"(name: string, defaultValue: string, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        "envOr(string,string,bool[])"(name: string, delim: string, defaultValue: boolean[], overrides?: CallOverrides): Promise<[boolean[]] & {
            value: boolean[];
        }>;
        "envString(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<[string[]] & {
            value: string[];
        }>;
        "envString(string)"(name: string, overrides?: CallOverrides): Promise<[string] & {
            value: string;
        }>;
        "envUint(string)"(name: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            value: BigNumber;
        }>;
        "envUint(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<[BigNumber[]] & {
            value: BigNumber[];
        }>;
        etch(target: string, newRuntimeBytecode: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        eth_getLogs(fromBlock: BigNumberish, toBlock: BigNumberish, target: string, topics: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        exists(path: string, overrides?: CallOverrides): Promise<[boolean] & {
            result: boolean;
        }>;
        "expectCall(address,uint256,uint64,bytes)"(callee: string, msgValue: BigNumberish, gas: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectCall(address,uint256,uint64,bytes,uint64)"(callee: string, msgValue: BigNumberish, gas: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectCall(address,uint256,bytes,uint64)"(callee: string, msgValue: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectCall(address,bytes)"(callee: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectCall(address,bytes,uint64)"(callee: string, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectCall(address,uint256,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectCallMinGas(address,uint256,uint64,bytes)"(callee: string, msgValue: BigNumberish, minGas: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectCallMinGas(address,uint256,uint64,bytes,uint64)"(callee: string, msgValue: BigNumberish, minGas: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        expectCreate(bytecode: BytesLike, deployer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        expectCreate2(bytecode: BytesLike, deployer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmit()"(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmit(bool,bool,bool,bool)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmit(uint64)"(count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmit(bool,bool,bool,bool,uint64)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmit(bool,bool,bool,bool,address)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmit(address)"(emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmit(address,uint64)"(emitter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmit(bool,bool,bool,bool,address,uint64)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmitAnonymous()"(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmitAnonymous(address)"(emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmitAnonymous(bool,bool,bool,bool,bool,address)"(checkTopic0: boolean, checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectEmitAnonymous(bool,bool,bool,bool,bool)"(checkTopic0: boolean, checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectPartialRevert(bytes4)"(revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectPartialRevert(bytes4,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert(address,uint64)"(reverter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert(bytes4,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert(bytes,uint64)"(revertData: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert(uint64)"(count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert(bytes,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert(bytes4,address,uint64)"(revertData: BytesLike, reverter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert(bytes4)"(revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert(bytes,address,uint64)"(revertData: BytesLike, reverter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert(address)"(reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert(bytes4,uint64)"(revertData: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert(bytes)"(revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "expectRevert()"(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        expectSafeMemory(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        expectSafeMemoryCall(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        fee(newBasefee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        ffi(commandInput: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        foundryVersionAtLeast(version: string, overrides?: CallOverrides): Promise<[boolean]>;
        foundryVersionCmp(version: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        fsMetadata(path: string, overrides?: CallOverrides): Promise<[
            VmSafe.FsMetadataStructOutput
        ] & {
            metadata: VmSafe.FsMetadataStructOutput;
        }>;
        getArtifactPathByCode(code: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            path: string;
        }>;
        getArtifactPathByDeployedCode(deployedCode: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            path: string;
        }>;
        getBlobBaseFee(overrides?: CallOverrides): Promise<[BigNumber] & {
            blobBaseFee: BigNumber;
        }>;
        getBlobhashes(overrides?: CallOverrides): Promise<[string[]] & {
            hashes: string[];
        }>;
        getBlockNumber(overrides?: CallOverrides): Promise<[BigNumber] & {
            height: BigNumber;
        }>;
        getBlockTimestamp(overrides?: CallOverrides): Promise<[BigNumber] & {
            timestamp: BigNumber;
        }>;
        getBroadcast(contractName: string, chainId: BigNumberish, txType: BigNumberish, overrides?: CallOverrides): Promise<[VmSafe.BroadcastTxSummaryStructOutput]>;
        "getBroadcasts(string,uint64)"(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<[VmSafe.BroadcastTxSummaryStructOutput[]]>;
        "getBroadcasts(string,uint64,uint8)"(contractName: string, chainId: BigNumberish, txType: BigNumberish, overrides?: CallOverrides): Promise<[VmSafe.BroadcastTxSummaryStructOutput[]]>;
        getCode(artifactPath: string, overrides?: CallOverrides): Promise<[string] & {
            creationBytecode: string;
        }>;
        getDeployedCode(artifactPath: string, overrides?: CallOverrides): Promise<[string] & {
            runtimeBytecode: string;
        }>;
        "getDeployment(string,uint64)"(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            deployedAddress: string;
        }>;
        "getDeployment(string)"(contractName: string, overrides?: CallOverrides): Promise<[string] & {
            deployedAddress: string;
        }>;
        getDeployments(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<[string[]] & {
            deployedAddresses: string[];
        }>;
        getFoundryVersion(overrides?: CallOverrides): Promise<[string] & {
            version: string;
        }>;
        getLabel(account: string, overrides?: CallOverrides): Promise<[string] & {
            currentLabel: string;
        }>;
        getMappingKeyAndParentOf(target: string, elementSlot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getMappingLength(target: string, mappingSlot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getMappingSlotAt(target: string, mappingSlot: BytesLike, idx: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "getNonce(address)"(account: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            nonce: BigNumber;
        }>;
        "getNonce((address,uint256,uint256,uint256))"(wallet: VmSafe.WalletStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getRecordedLogs(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getStateDiff(overrides?: CallOverrides): Promise<[string] & {
            diff: string;
        }>;
        getStateDiffJson(overrides?: CallOverrides): Promise<[string] & {
            diff: string;
        }>;
        getWallets(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        indexOf(input: string, key: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        isContext(context: BigNumberish, overrides?: CallOverrides): Promise<[boolean] & {
            result: boolean;
        }>;
        isDir(path: string, overrides?: CallOverrides): Promise<[boolean] & {
            result: boolean;
        }>;
        isFile(path: string, overrides?: CallOverrides): Promise<[boolean] & {
            result: boolean;
        }>;
        isPersistent(account: string, overrides?: CallOverrides): Promise<[boolean] & {
            persistent: boolean;
        }>;
        keyExists(json: string, key: string, overrides?: CallOverrides): Promise<[boolean]>;
        keyExistsJson(json: string, key: string, overrides?: CallOverrides): Promise<[boolean]>;
        keyExistsToml(toml: string, key: string, overrides?: CallOverrides): Promise<[boolean]>;
        label(account: string, newLabel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        lastCallGas(overrides?: CallOverrides): Promise<[VmSafe.GasStructOutput] & {
            gas: VmSafe.GasStructOutput;
        }>;
        load(target: string, slot: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            data: string;
        }>;
        loadAllocs(pathToAllocsJson: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "makePersistent(address[])"(accounts: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "makePersistent(address,address)"(account0: string, account1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "makePersistent(address)"(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "makePersistent(address,address,address)"(account0: string, account1: string, account2: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mockCall(address,bytes4,bytes)"(callee: string, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mockCall(address,uint256,bytes,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mockCall(address,bytes,bytes)"(callee: string, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mockCall(address,uint256,bytes4,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mockCallRevert(address,bytes4,bytes)"(callee: string, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mockCallRevert(address,uint256,bytes4,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mockCallRevert(address,uint256,bytes,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mockCallRevert(address,bytes,bytes)"(callee: string, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mockCalls(address,uint256,bytes,bytes[])"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "mockCalls(address,bytes,bytes[])"(callee: string, data: BytesLike, returnData: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        mockFunction(callee: string, target: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        noAccessList(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        parseAddress(stringifiedValue: string, overrides?: CallOverrides): Promise<[string] & {
            parsedValue: string;
        }>;
        parseBool(stringifiedValue: string, overrides?: CallOverrides): Promise<[boolean] & {
            parsedValue: boolean;
        }>;
        parseBytes(stringifiedValue: string, overrides?: CallOverrides): Promise<[string] & {
            parsedValue: string;
        }>;
        parseBytes32(stringifiedValue: string, overrides?: CallOverrides): Promise<[string] & {
            parsedValue: string;
        }>;
        parseInt(stringifiedValue: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            parsedValue: BigNumber;
        }>;
        "parseJson(string)"(json: string, overrides?: CallOverrides): Promise<[string] & {
            abiEncodedData: string;
        }>;
        "parseJson(string,string)"(json: string, key: string, overrides?: CallOverrides): Promise<[string] & {
            abiEncodedData: string;
        }>;
        parseJsonAddress(json: string, key: string, overrides?: CallOverrides): Promise<[string]>;
        parseJsonAddressArray(json: string, key: string, overrides?: CallOverrides): Promise<[string[]]>;
        parseJsonBool(json: string, key: string, overrides?: CallOverrides): Promise<[boolean]>;
        parseJsonBoolArray(json: string, key: string, overrides?: CallOverrides): Promise<[boolean[]]>;
        parseJsonBytes(json: string, key: string, overrides?: CallOverrides): Promise<[string]>;
        parseJsonBytes32(json: string, key: string, overrides?: CallOverrides): Promise<[string]>;
        parseJsonBytes32Array(json: string, key: string, overrides?: CallOverrides): Promise<[string[]]>;
        parseJsonBytesArray(json: string, key: string, overrides?: CallOverrides): Promise<[string[]]>;
        parseJsonInt(json: string, key: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        parseJsonIntArray(json: string, key: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        parseJsonKeys(json: string, key: string, overrides?: CallOverrides): Promise<[string[]] & {
            keys: string[];
        }>;
        parseJsonString(json: string, key: string, overrides?: CallOverrides): Promise<[string]>;
        parseJsonStringArray(json: string, key: string, overrides?: CallOverrides): Promise<[string[]]>;
        "parseJsonType(string,string)"(json: string, typeDescription: string, overrides?: CallOverrides): Promise<[string]>;
        "parseJsonType(string,string,string)"(json: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<[string]>;
        parseJsonTypeArray(json: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<[string]>;
        parseJsonUint(json: string, key: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        parseJsonUintArray(json: string, key: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        "parseToml(string,string)"(toml: string, key: string, overrides?: CallOverrides): Promise<[string] & {
            abiEncodedData: string;
        }>;
        "parseToml(string)"(toml: string, overrides?: CallOverrides): Promise<[string] & {
            abiEncodedData: string;
        }>;
        parseTomlAddress(toml: string, key: string, overrides?: CallOverrides): Promise<[string]>;
        parseTomlAddressArray(toml: string, key: string, overrides?: CallOverrides): Promise<[string[]]>;
        parseTomlBool(toml: string, key: string, overrides?: CallOverrides): Promise<[boolean]>;
        parseTomlBoolArray(toml: string, key: string, overrides?: CallOverrides): Promise<[boolean[]]>;
        parseTomlBytes(toml: string, key: string, overrides?: CallOverrides): Promise<[string]>;
        parseTomlBytes32(toml: string, key: string, overrides?: CallOverrides): Promise<[string]>;
        parseTomlBytes32Array(toml: string, key: string, overrides?: CallOverrides): Promise<[string[]]>;
        parseTomlBytesArray(toml: string, key: string, overrides?: CallOverrides): Promise<[string[]]>;
        parseTomlInt(toml: string, key: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        parseTomlIntArray(toml: string, key: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        parseTomlKeys(toml: string, key: string, overrides?: CallOverrides): Promise<[string[]] & {
            keys: string[];
        }>;
        parseTomlString(toml: string, key: string, overrides?: CallOverrides): Promise<[string]>;
        parseTomlStringArray(toml: string, key: string, overrides?: CallOverrides): Promise<[string[]]>;
        "parseTomlType(string,string)"(toml: string, typeDescription: string, overrides?: CallOverrides): Promise<[string]>;
        "parseTomlType(string,string,string)"(toml: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<[string]>;
        parseTomlTypeArray(toml: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<[string]>;
        parseTomlUint(toml: string, key: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        parseTomlUintArray(toml: string, key: string, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        parseUint(stringifiedValue: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            parsedValue: BigNumber;
        }>;
        pauseGasMetering(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pauseTracing(overrides?: CallOverrides): Promise<[void]>;
        "prank(address,address)"(msgSender: string, txOrigin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "prank(address,address,bool)"(msgSender: string, txOrigin: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "prank(address,bool)"(msgSender: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "prank(address)"(msgSender: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "prevrandao(bytes32)"(newPrevrandao: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "prevrandao(uint256)"(newPrevrandao: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        projectRoot(overrides?: CallOverrides): Promise<[string] & {
            path: string;
        }>;
        prompt(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        promptAddress(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        promptSecret(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        promptSecretUint(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        promptUint(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        publicKeyP256(privateKey: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            publicKeyX: BigNumber;
            publicKeyY: BigNumber;
        }>;
        randomAddress(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        randomBool(overrides?: CallOverrides): Promise<[boolean]>;
        randomBytes(len: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        randomBytes4(overrides?: CallOverrides): Promise<[string]>;
        randomBytes8(overrides?: CallOverrides): Promise<[string]>;
        "randomInt()"(overrides?: CallOverrides): Promise<[BigNumber]>;
        "randomInt(uint256)"(bits: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "randomUint()"(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "randomUint(uint256)"(bits: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "randomUint(uint256,uint256)"(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        readCallers(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "readDir(string,uint64)"(path: string, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<[
            VmSafe.DirEntryStructOutput[]
        ] & {
            entries: VmSafe.DirEntryStructOutput[];
        }>;
        "readDir(string,uint64,bool)"(path: string, maxDepth: BigNumberish, followLinks: boolean, overrides?: CallOverrides): Promise<[
            VmSafe.DirEntryStructOutput[]
        ] & {
            entries: VmSafe.DirEntryStructOutput[];
        }>;
        "readDir(string)"(path: string, overrides?: CallOverrides): Promise<[
            VmSafe.DirEntryStructOutput[]
        ] & {
            entries: VmSafe.DirEntryStructOutput[];
        }>;
        readFile(path: string, overrides?: CallOverrides): Promise<[string] & {
            data: string;
        }>;
        readFileBinary(path: string, overrides?: CallOverrides): Promise<[string] & {
            data: string;
        }>;
        readLine(path: string, overrides?: CallOverrides): Promise<[string] & {
            line: string;
        }>;
        readLink(linkPath: string, overrides?: CallOverrides): Promise<[string] & {
            targetPath: string;
        }>;
        record(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        recordLogs(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rememberKey(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "rememberKeys(string,string,uint32)"(mnemonic: string, derivationPath: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "rememberKeys(string,string,string,uint32)"(mnemonic: string, derivationPath: string, language: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeDir(path: string, recursive: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        removeFile(path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        replace(input: string, from: string, to: string, overrides?: CallOverrides): Promise<[string] & {
            output: string;
        }>;
        resetGasMetering(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resetNonce(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resumeGasMetering(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        resumeTracing(overrides?: CallOverrides): Promise<[void]>;
        revertTo(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revertToAndDelete(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revertToState(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        revertToStateAndDelete(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "revokePersistent(address[])"(accounts: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "revokePersistent(address)"(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        roll(newHeight: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "rollFork(bytes32)"(txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "rollFork(uint256,uint256)"(forkId: BigNumberish, blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "rollFork(uint256)"(blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "rollFork(uint256,bytes32)"(forkId: BigNumberish, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "rpc(string,string,string)"(urlOrAlias: string, method: string, params: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "rpc(string,string)"(method: string, params: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        rpcUrl(rpcAlias: string, overrides?: CallOverrides): Promise<[string] & {
            json: string;
        }>;
        rpcUrlStructs(overrides?: CallOverrides): Promise<[VmSafe.RpcStructOutput[]] & {
            urls: VmSafe.RpcStructOutput[];
        }>;
        rpcUrls(overrides?: CallOverrides): Promise<[[string, string][]] & {
            urls: [string, string][];
        }>;
        selectFork(forkId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeAddress(string,string,address[])"(objectKey: string, valueKey: string, values: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeAddress(string,string,address)"(objectKey: string, valueKey: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeBool(string,string,bool[])"(objectKey: string, valueKey: string, values: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeBool(string,string,bool)"(objectKey: string, valueKey: string, value: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeBytes(string,string,bytes[])"(objectKey: string, valueKey: string, values: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeBytes(string,string,bytes)"(objectKey: string, valueKey: string, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeBytes32(string,string,bytes32[])"(objectKey: string, valueKey: string, values: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeBytes32(string,string,bytes32)"(objectKey: string, valueKey: string, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeInt(string,string,int256)"(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeInt(string,string,int256[])"(objectKey: string, valueKey: string, values: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        serializeJson(objectKey: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeJsonType(string,bytes)"(typeDescription: string, value: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            json: string;
        }>;
        "serializeJsonType(string,string,string,bytes)"(objectKey: string, valueKey: string, typeDescription: string, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeString(string,string,string[])"(objectKey: string, valueKey: string, values: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeString(string,string,string)"(objectKey: string, valueKey: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeUint(string,string,uint256)"(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "serializeUint(string,string,uint256[])"(objectKey: string, valueKey: string, values: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        serializeUintToHex(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setArbitraryStorage(target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setBlockhash(blockNumber: BigNumberish, blockHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setEnv(name: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setNonce(account: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setNonceUnsafe(account: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "sign(bytes32)"(digest: BytesLike, overrides?: CallOverrides): Promise<[number, string, string] & {
            v: number;
            r: string;
            s: string;
        }>;
        "sign(address,bytes32)"(signer: string, digest: BytesLike, overrides?: CallOverrides): Promise<[number, string, string] & {
            v: number;
            r: string;
            s: string;
        }>;
        "sign((address,uint256,uint256,uint256),bytes32)"(wallet: VmSafe.WalletStruct, digest: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "sign(uint256,bytes32)"(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<[number, string, string] & {
            v: number;
            r: string;
            s: string;
        }>;
        signAndAttachDelegation(implementation: string, privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "signCompact((address,uint256,uint256,uint256),bytes32)"(wallet: VmSafe.WalletStruct, digest: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "signCompact(address,bytes32)"(signer: string, digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            r: string;
            vs: string;
        }>;
        "signCompact(bytes32)"(digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            r: string;
            vs: string;
        }>;
        "signCompact(uint256,bytes32)"(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            r: string;
            vs: string;
        }>;
        signDelegation(implementation: string, privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        signP256(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            r: string;
            s: string;
        }>;
        "skip(bool,string)"(skipTest: boolean, reason: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "skip(bool)"(skipTest: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        sleep(duration: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        snapshot(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "snapshotGasLastCall(string,string)"(group: string, name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "snapshotGasLastCall(string)"(name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        snapshotState(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "snapshotValue(string,uint256)"(name: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "snapshotValue(string,string,uint256)"(group: string, name: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        split(input: string, delimiter: string, overrides?: CallOverrides): Promise<[string[]] & {
            outputs: string[];
        }>;
        "startBroadcast()"(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "startBroadcast(address)"(signer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "startBroadcast(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startDebugTraceRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startMappingRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "startPrank(address)"(msgSender: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "startPrank(address,bool)"(msgSender: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "startPrank(address,address)"(msgSender: string, txOrigin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "startPrank(address,address,bool)"(msgSender: string, txOrigin: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "startSnapshotGas(string)"(name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "startSnapshotGas(string,string)"(group: string, name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startStateDiffRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stopAndReturnDebugTraceRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stopAndReturnStateDiff(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stopBroadcast(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stopExpectSafeMemory(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stopMappingRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        stopPrank(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "stopSnapshotGas(string,string)"(group: string, name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "stopSnapshotGas(string)"(name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "stopSnapshotGas()"(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        store(target: string, slot: BytesLike, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "toBase64(string)"(data: string, overrides?: CallOverrides): Promise<[string]>;
        "toBase64(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        "toBase64URL(string)"(data: string, overrides?: CallOverrides): Promise<[string]>;
        "toBase64URL(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        toLowercase(input: string, overrides?: CallOverrides): Promise<[string] & {
            output: string;
        }>;
        "toString(address)"(value: string, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        "toString(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        "toString(bytes)"(value: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        "toString(bool)"(value: boolean, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        "toString(int256)"(value: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        "toString(bytes32)"(value: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            stringifiedValue: string;
        }>;
        toUppercase(input: string, overrides?: CallOverrides): Promise<[string] & {
            output: string;
        }>;
        "transact(uint256,bytes32)"(forkId: BigNumberish, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "transact(bytes32)"(txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        trim(input: string, overrides?: CallOverrides): Promise<[string] & {
            output: string;
        }>;
        tryFfi(commandInput: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        txGasPrice(newGasPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unixTime(overrides?: CallOverrides): Promise<[BigNumber] & {
            milliseconds: BigNumber;
        }>;
        warmSlot(target: string, slot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        warp(newTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        writeFile(path: string, data: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        writeFileBinary(path: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "writeJson(string,string,string)"(json: string, path: string, valueKey: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "writeJson(string,string)"(json: string, path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        writeLine(path: string, data: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "writeToml(string,string,string)"(json: string, path: string, valueKey: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "writeToml(string,string)"(json: string, path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    accessList(access: VmSafe.AccessListItemStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    accesses(target: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    activeFork(overrides?: CallOverrides): Promise<BigNumber>;
    addr(privateKey: BigNumberish, overrides?: CallOverrides): Promise<string>;
    allowCheatcodes(account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "assertApproxEqAbs(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqAbs(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqAbs(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqAbs(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqAbsDecimal(int256,int256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqAbsDecimal(int256,int256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqRel(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqRel(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqRel(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqRel(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqRelDecimal(int256,int256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertApproxEqRelDecimal(int256,int256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(bytes32[],bytes32[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<void>;
    "assertEq(int256[],int256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(address,address,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(string,string,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(address[],address[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<void>;
    "assertEq(address[],address[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(bool,bool,string)"(left: boolean, right: boolean, error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(address,address)"(left: string, right: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(uint256[],uint256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(bool[],bool[])"(left: boolean[], right: boolean[], overrides?: CallOverrides): Promise<void>;
    "assertEq(int256[],int256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<void>;
    "assertEq(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(bytes32,bytes32)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<void>;
    "assertEq(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(uint256[],uint256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<void>;
    "assertEq(bytes,bytes)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<void>;
    "assertEq(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertEq(bytes32,bytes32,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(string[],string[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<void>;
    "assertEq(bytes32[],bytes32[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(bytes,bytes,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(bool[],bool[],string)"(left: boolean[], right: boolean[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(bytes[],bytes[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<void>;
    "assertEq(string[],string[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(string,string)"(left: string, right: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(bytes[],bytes[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertEq(bool,bool)"(left: boolean, right: boolean, overrides?: CallOverrides): Promise<void>;
    "assertEq(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertEqDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertEqDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertEqDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertEqDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertFalse(bool,string)"(condition: boolean, error: string, overrides?: CallOverrides): Promise<void>;
    "assertFalse(bool)"(condition: boolean, overrides?: CallOverrides): Promise<void>;
    "assertGe(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertGe(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertGe(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertGe(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertGeDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertGeDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertGeDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertGeDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertGt(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertGt(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertGt(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertGt(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertGtDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertGtDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertGtDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertGtDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertLe(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertLe(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertLe(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertLe(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertLeDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertLeDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertLeDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertLeDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertLt(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertLt(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertLt(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertLt(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertLtDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertLtDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertLtDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertLtDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bytes32[],bytes32[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<void>;
    "assertNotEq(int256[],int256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bool,bool,string)"(left: boolean, right: boolean, error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bytes[],bytes[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bool,bool)"(left: boolean, right: boolean, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bool[],bool[])"(left: boolean[], right: boolean[], overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bytes,bytes)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(address[],address[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<void>;
    "assertNotEq(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(uint256[],uint256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bool[],bool[],string)"(left: boolean[], right: boolean[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(string,string)"(left: string, right: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(address[],address[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(string,string,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(address,address,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bytes32,bytes32)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bytes,bytes,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(uint256[],uint256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(address,address)"(left: string, right: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bytes32,bytes32,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(string[],string[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bytes32[],bytes32[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(string[],string[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<void>;
    "assertNotEq(int256[],int256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEq(bytes[],bytes[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<void>;
    "assertNotEq(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertNotEqDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertNotEqDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertNotEqDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "assertNotEqDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
    "assertTrue(bool)"(condition: boolean, overrides?: CallOverrides): Promise<void>;
    "assertTrue(bool,string)"(condition: boolean, error: string, overrides?: CallOverrides): Promise<void>;
    assume(condition: boolean, overrides?: CallOverrides): Promise<void>;
    "assumeNoRevert()"(overrides?: CallOverrides): Promise<void>;
    "assumeNoRevert((address,bool,bytes)[])"(potentialReverts: VmSafe.PotentialRevertStruct[], overrides?: CallOverrides): Promise<void>;
    "assumeNoRevert((address,bool,bytes))"(potentialRevert: VmSafe.PotentialRevertStruct, overrides?: CallOverrides): Promise<void>;
    attachDelegation(signedDelegation: VmSafe.SignedDelegationStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    blobBaseFee(newBlobBaseFee: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    blobhashes(hashes: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "breakpoint(string)"(char: string, overrides?: CallOverrides): Promise<void>;
    "breakpoint(string,bool)"(char: string, value: boolean, overrides?: CallOverrides): Promise<void>;
    "broadcast()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "broadcast(address)"(signer: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "broadcast(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    broadcastRawTransaction(data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    chainId(newChainId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    clearMockedCalls(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    cloneAccount(source: string, target: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    closeFile(path: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    coinbase(newCoinbase: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "computeCreate2Address(bytes32,bytes32)"(salt: BytesLike, initCodeHash: BytesLike, overrides?: CallOverrides): Promise<string>;
    "computeCreate2Address(bytes32,bytes32,address)"(salt: BytesLike, initCodeHash: BytesLike, deployer: string, overrides?: CallOverrides): Promise<string>;
    computeCreateAddress(deployer: string, nonce: BigNumberish, overrides?: CallOverrides): Promise<string>;
    contains(subject: string, search: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    cool(target: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    coolSlot(target: string, slot: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    copyFile(from: string, to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    copyStorage(from: string, to: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    createDir(path: string, recursive: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "createFork(string)"(urlOrAlias: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "createFork(string,uint256)"(urlOrAlias: string, blockNumber: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "createFork(string,bytes32)"(urlOrAlias: string, txHash: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "createSelectFork(string,uint256)"(urlOrAlias: string, blockNumber: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "createSelectFork(string,bytes32)"(urlOrAlias: string, txHash: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "createSelectFork(string)"(urlOrAlias: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "createWallet(string)"(walletLabel: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "createWallet(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "createWallet(uint256,string)"(privateKey: BigNumberish, walletLabel: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deal(account: string, newBalance: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deleteSnapshot(snapshotId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deleteSnapshots(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deleteStateSnapshot(snapshotId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    deleteStateSnapshots(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "deployCode(string,bytes)"(artifactPath: string, constructorArgs: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "deployCode(string)"(artifactPath: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "deriveKey(string,string,uint32,string)"(mnemonic: string, derivationPath: string, index: BigNumberish, language: string, overrides?: CallOverrides): Promise<BigNumber>;
    "deriveKey(string,uint32,string)"(mnemonic: string, index: BigNumberish, language: string, overrides?: CallOverrides): Promise<BigNumber>;
    "deriveKey(string,uint32)"(mnemonic: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "deriveKey(string,string,uint32)"(mnemonic: string, derivationPath: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    difficulty(newDifficulty: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    dumpState(pathToStateJson: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    ensNamehash(name: string, overrides?: CallOverrides): Promise<string>;
    "envAddress(string)"(name: string, overrides?: CallOverrides): Promise<string>;
    "envAddress(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<string[]>;
    "envBool(string)"(name: string, overrides?: CallOverrides): Promise<boolean>;
    "envBool(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<boolean[]>;
    "envBytes(string)"(name: string, overrides?: CallOverrides): Promise<string>;
    "envBytes(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<string[]>;
    "envBytes32(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<string[]>;
    "envBytes32(string)"(name: string, overrides?: CallOverrides): Promise<string>;
    envExists(name: string, overrides?: CallOverrides): Promise<boolean>;
    "envInt(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    "envInt(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
    "envOr(string,string,bytes32[])"(name: string, delim: string, defaultValue: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
    "envOr(string,string,int256[])"(name: string, delim: string, defaultValue: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    "envOr(string,bool)"(name: string, defaultValue: boolean, overrides?: CallOverrides): Promise<boolean>;
    "envOr(string,address)"(name: string, defaultValue: string, overrides?: CallOverrides): Promise<string>;
    "envOr(string,uint256)"(name: string, defaultValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "envOr(string,string,bytes[])"(name: string, delim: string, defaultValue: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
    "envOr(string,string,uint256[])"(name: string, delim: string, defaultValue: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    "envOr(string,string,string[])"(name: string, delim: string, defaultValue: string[], overrides?: CallOverrides): Promise<string[]>;
    "envOr(string,bytes)"(name: string, defaultValue: BytesLike, overrides?: CallOverrides): Promise<string>;
    "envOr(string,bytes32)"(name: string, defaultValue: BytesLike, overrides?: CallOverrides): Promise<string>;
    "envOr(string,int256)"(name: string, defaultValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "envOr(string,string,address[])"(name: string, delim: string, defaultValue: string[], overrides?: CallOverrides): Promise<string[]>;
    "envOr(string,string)"(name: string, defaultValue: string, overrides?: CallOverrides): Promise<string>;
    "envOr(string,string,bool[])"(name: string, delim: string, defaultValue: boolean[], overrides?: CallOverrides): Promise<boolean[]>;
    "envString(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<string[]>;
    "envString(string)"(name: string, overrides?: CallOverrides): Promise<string>;
    "envUint(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
    "envUint(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    etch(target: string, newRuntimeBytecode: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    eth_getLogs(fromBlock: BigNumberish, toBlock: BigNumberish, target: string, topics: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    exists(path: string, overrides?: CallOverrides): Promise<boolean>;
    "expectCall(address,uint256,uint64,bytes)"(callee: string, msgValue: BigNumberish, gas: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectCall(address,uint256,uint64,bytes,uint64)"(callee: string, msgValue: BigNumberish, gas: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectCall(address,uint256,bytes,uint64)"(callee: string, msgValue: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectCall(address,bytes)"(callee: string, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectCall(address,bytes,uint64)"(callee: string, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectCall(address,uint256,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectCallMinGas(address,uint256,uint64,bytes)"(callee: string, msgValue: BigNumberish, minGas: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectCallMinGas(address,uint256,uint64,bytes,uint64)"(callee: string, msgValue: BigNumberish, minGas: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    expectCreate(bytecode: BytesLike, deployer: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    expectCreate2(bytecode: BytesLike, deployer: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmit()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmit(bool,bool,bool,bool)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmit(uint64)"(count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmit(bool,bool,bool,bool,uint64)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmit(bool,bool,bool,bool,address)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmit(address)"(emitter: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmit(address,uint64)"(emitter: string, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmit(bool,bool,bool,bool,address,uint64)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmitAnonymous()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmitAnonymous(address)"(emitter: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmitAnonymous(bool,bool,bool,bool,bool,address)"(checkTopic0: boolean, checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectEmitAnonymous(bool,bool,bool,bool,bool)"(checkTopic0: boolean, checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectPartialRevert(bytes4)"(revertData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectPartialRevert(bytes4,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert(address,uint64)"(reverter: string, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert(bytes4,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert(bytes,uint64)"(revertData: BytesLike, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert(uint64)"(count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert(bytes,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert(bytes4,address,uint64)"(revertData: BytesLike, reverter: string, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert(bytes4)"(revertData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert(bytes,address,uint64)"(revertData: BytesLike, reverter: string, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert(address)"(reverter: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert(bytes4,uint64)"(revertData: BytesLike, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert(bytes)"(revertData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "expectRevert()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    expectSafeMemory(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    expectSafeMemoryCall(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    fee(newBasefee: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    ffi(commandInput: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    foundryVersionAtLeast(version: string, overrides?: CallOverrides): Promise<boolean>;
    foundryVersionCmp(version: string, overrides?: CallOverrides): Promise<BigNumber>;
    fsMetadata(path: string, overrides?: CallOverrides): Promise<VmSafe.FsMetadataStructOutput>;
    getArtifactPathByCode(code: BytesLike, overrides?: CallOverrides): Promise<string>;
    getArtifactPathByDeployedCode(deployedCode: BytesLike, overrides?: CallOverrides): Promise<string>;
    getBlobBaseFee(overrides?: CallOverrides): Promise<BigNumber>;
    getBlobhashes(overrides?: CallOverrides): Promise<string[]>;
    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
    getBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
    getBroadcast(contractName: string, chainId: BigNumberish, txType: BigNumberish, overrides?: CallOverrides): Promise<VmSafe.BroadcastTxSummaryStructOutput>;
    "getBroadcasts(string,uint64)"(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<VmSafe.BroadcastTxSummaryStructOutput[]>;
    "getBroadcasts(string,uint64,uint8)"(contractName: string, chainId: BigNumberish, txType: BigNumberish, overrides?: CallOverrides): Promise<VmSafe.BroadcastTxSummaryStructOutput[]>;
    getCode(artifactPath: string, overrides?: CallOverrides): Promise<string>;
    getDeployedCode(artifactPath: string, overrides?: CallOverrides): Promise<string>;
    "getDeployment(string,uint64)"(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "getDeployment(string)"(contractName: string, overrides?: CallOverrides): Promise<string>;
    getDeployments(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
    getFoundryVersion(overrides?: CallOverrides): Promise<string>;
    getLabel(account: string, overrides?: CallOverrides): Promise<string>;
    getMappingKeyAndParentOf(target: string, elementSlot: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getMappingLength(target: string, mappingSlot: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getMappingSlotAt(target: string, mappingSlot: BytesLike, idx: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "getNonce(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    "getNonce((address,uint256,uint256,uint256))"(wallet: VmSafe.WalletStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getRecordedLogs(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getStateDiff(overrides?: CallOverrides): Promise<string>;
    getStateDiffJson(overrides?: CallOverrides): Promise<string>;
    getWallets(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    indexOf(input: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
    isContext(context: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isDir(path: string, overrides?: CallOverrides): Promise<boolean>;
    isFile(path: string, overrides?: CallOverrides): Promise<boolean>;
    isPersistent(account: string, overrides?: CallOverrides): Promise<boolean>;
    keyExists(json: string, key: string, overrides?: CallOverrides): Promise<boolean>;
    keyExistsJson(json: string, key: string, overrides?: CallOverrides): Promise<boolean>;
    keyExistsToml(toml: string, key: string, overrides?: CallOverrides): Promise<boolean>;
    label(account: string, newLabel: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    lastCallGas(overrides?: CallOverrides): Promise<VmSafe.GasStructOutput>;
    load(target: string, slot: BytesLike, overrides?: CallOverrides): Promise<string>;
    loadAllocs(pathToAllocsJson: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "makePersistent(address[])"(accounts: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "makePersistent(address,address)"(account0: string, account1: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "makePersistent(address)"(account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "makePersistent(address,address,address)"(account0: string, account1: string, account2: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mockCall(address,bytes4,bytes)"(callee: string, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mockCall(address,uint256,bytes,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mockCall(address,bytes,bytes)"(callee: string, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mockCall(address,uint256,bytes4,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mockCallRevert(address,bytes4,bytes)"(callee: string, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mockCallRevert(address,uint256,bytes4,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mockCallRevert(address,uint256,bytes,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mockCallRevert(address,bytes,bytes)"(callee: string, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mockCalls(address,uint256,bytes,bytes[])"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "mockCalls(address,bytes,bytes[])"(callee: string, data: BytesLike, returnData: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    mockFunction(callee: string, target: string, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    noAccessList(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    parseAddress(stringifiedValue: string, overrides?: CallOverrides): Promise<string>;
    parseBool(stringifiedValue: string, overrides?: CallOverrides): Promise<boolean>;
    parseBytes(stringifiedValue: string, overrides?: CallOverrides): Promise<string>;
    parseBytes32(stringifiedValue: string, overrides?: CallOverrides): Promise<string>;
    parseInt(stringifiedValue: string, overrides?: CallOverrides): Promise<BigNumber>;
    "parseJson(string)"(json: string, overrides?: CallOverrides): Promise<string>;
    "parseJson(string,string)"(json: string, key: string, overrides?: CallOverrides): Promise<string>;
    parseJsonAddress(json: string, key: string, overrides?: CallOverrides): Promise<string>;
    parseJsonAddressArray(json: string, key: string, overrides?: CallOverrides): Promise<string[]>;
    parseJsonBool(json: string, key: string, overrides?: CallOverrides): Promise<boolean>;
    parseJsonBoolArray(json: string, key: string, overrides?: CallOverrides): Promise<boolean[]>;
    parseJsonBytes(json: string, key: string, overrides?: CallOverrides): Promise<string>;
    parseJsonBytes32(json: string, key: string, overrides?: CallOverrides): Promise<string>;
    parseJsonBytes32Array(json: string, key: string, overrides?: CallOverrides): Promise<string[]>;
    parseJsonBytesArray(json: string, key: string, overrides?: CallOverrides): Promise<string[]>;
    parseJsonInt(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
    parseJsonIntArray(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    parseJsonKeys(json: string, key: string, overrides?: CallOverrides): Promise<string[]>;
    parseJsonString(json: string, key: string, overrides?: CallOverrides): Promise<string>;
    parseJsonStringArray(json: string, key: string, overrides?: CallOverrides): Promise<string[]>;
    "parseJsonType(string,string)"(json: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
    "parseJsonType(string,string,string)"(json: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
    parseJsonTypeArray(json: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
    parseJsonUint(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
    parseJsonUintArray(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    "parseToml(string,string)"(toml: string, key: string, overrides?: CallOverrides): Promise<string>;
    "parseToml(string)"(toml: string, overrides?: CallOverrides): Promise<string>;
    parseTomlAddress(toml: string, key: string, overrides?: CallOverrides): Promise<string>;
    parseTomlAddressArray(toml: string, key: string, overrides?: CallOverrides): Promise<string[]>;
    parseTomlBool(toml: string, key: string, overrides?: CallOverrides): Promise<boolean>;
    parseTomlBoolArray(toml: string, key: string, overrides?: CallOverrides): Promise<boolean[]>;
    parseTomlBytes(toml: string, key: string, overrides?: CallOverrides): Promise<string>;
    parseTomlBytes32(toml: string, key: string, overrides?: CallOverrides): Promise<string>;
    parseTomlBytes32Array(toml: string, key: string, overrides?: CallOverrides): Promise<string[]>;
    parseTomlBytesArray(toml: string, key: string, overrides?: CallOverrides): Promise<string[]>;
    parseTomlInt(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
    parseTomlIntArray(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    parseTomlKeys(toml: string, key: string, overrides?: CallOverrides): Promise<string[]>;
    parseTomlString(toml: string, key: string, overrides?: CallOverrides): Promise<string>;
    parseTomlStringArray(toml: string, key: string, overrides?: CallOverrides): Promise<string[]>;
    "parseTomlType(string,string)"(toml: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
    "parseTomlType(string,string,string)"(toml: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
    parseTomlTypeArray(toml: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
    parseTomlUint(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
    parseTomlUintArray(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber[]>;
    parseUint(stringifiedValue: string, overrides?: CallOverrides): Promise<BigNumber>;
    pauseGasMetering(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pauseTracing(overrides?: CallOverrides): Promise<void>;
    "prank(address,address)"(msgSender: string, txOrigin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "prank(address,address,bool)"(msgSender: string, txOrigin: string, delegateCall: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "prank(address,bool)"(msgSender: string, delegateCall: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "prank(address)"(msgSender: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "prevrandao(bytes32)"(newPrevrandao: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "prevrandao(uint256)"(newPrevrandao: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    projectRoot(overrides?: CallOverrides): Promise<string>;
    prompt(promptText: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    promptAddress(promptText: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    promptSecret(promptText: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    promptSecretUint(promptText: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    promptUint(promptText: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    publicKeyP256(privateKey: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        publicKeyX: BigNumber;
        publicKeyY: BigNumber;
    }>;
    randomAddress(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    randomBool(overrides?: CallOverrides): Promise<boolean>;
    randomBytes(len: BigNumberish, overrides?: CallOverrides): Promise<string>;
    randomBytes4(overrides?: CallOverrides): Promise<string>;
    randomBytes8(overrides?: CallOverrides): Promise<string>;
    "randomInt()"(overrides?: CallOverrides): Promise<BigNumber>;
    "randomInt(uint256)"(bits: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "randomUint()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "randomUint(uint256)"(bits: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "randomUint(uint256,uint256)"(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    readCallers(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "readDir(string,uint64)"(path: string, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
    "readDir(string,uint64,bool)"(path: string, maxDepth: BigNumberish, followLinks: boolean, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
    "readDir(string)"(path: string, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
    readFile(path: string, overrides?: CallOverrides): Promise<string>;
    readFileBinary(path: string, overrides?: CallOverrides): Promise<string>;
    readLine(path: string, overrides?: CallOverrides): Promise<string>;
    readLink(linkPath: string, overrides?: CallOverrides): Promise<string>;
    record(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    recordLogs(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rememberKey(privateKey: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "rememberKeys(string,string,uint32)"(mnemonic: string, derivationPath: string, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "rememberKeys(string,string,string,uint32)"(mnemonic: string, derivationPath: string, language: string, count: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeDir(path: string, recursive: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    removeFile(path: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    replace(input: string, from: string, to: string, overrides?: CallOverrides): Promise<string>;
    resetGasMetering(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resetNonce(account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resumeGasMetering(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    resumeTracing(overrides?: CallOverrides): Promise<void>;
    revertTo(snapshotId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revertToAndDelete(snapshotId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revertToState(snapshotId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    revertToStateAndDelete(snapshotId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "revokePersistent(address[])"(accounts: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "revokePersistent(address)"(account: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    roll(newHeight: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "rollFork(bytes32)"(txHash: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "rollFork(uint256,uint256)"(forkId: BigNumberish, blockNumber: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "rollFork(uint256)"(blockNumber: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "rollFork(uint256,bytes32)"(forkId: BigNumberish, txHash: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "rpc(string,string,string)"(urlOrAlias: string, method: string, params: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "rpc(string,string)"(method: string, params: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    rpcUrl(rpcAlias: string, overrides?: CallOverrides): Promise<string>;
    rpcUrlStructs(overrides?: CallOverrides): Promise<VmSafe.RpcStructOutput[]>;
    rpcUrls(overrides?: CallOverrides): Promise<[string, string][]>;
    selectFork(forkId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeAddress(string,string,address[])"(objectKey: string, valueKey: string, values: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeAddress(string,string,address)"(objectKey: string, valueKey: string, value: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeBool(string,string,bool[])"(objectKey: string, valueKey: string, values: boolean[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeBool(string,string,bool)"(objectKey: string, valueKey: string, value: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeBytes(string,string,bytes[])"(objectKey: string, valueKey: string, values: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeBytes(string,string,bytes)"(objectKey: string, valueKey: string, value: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeBytes32(string,string,bytes32[])"(objectKey: string, valueKey: string, values: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeBytes32(string,string,bytes32)"(objectKey: string, valueKey: string, value: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeInt(string,string,int256)"(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeInt(string,string,int256[])"(objectKey: string, valueKey: string, values: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    serializeJson(objectKey: string, value: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeJsonType(string,bytes)"(typeDescription: string, value: BytesLike, overrides?: CallOverrides): Promise<string>;
    "serializeJsonType(string,string,string,bytes)"(objectKey: string, valueKey: string, typeDescription: string, value: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeString(string,string,string[])"(objectKey: string, valueKey: string, values: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeString(string,string,string)"(objectKey: string, valueKey: string, value: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeUint(string,string,uint256)"(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "serializeUint(string,string,uint256[])"(objectKey: string, valueKey: string, values: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    serializeUintToHex(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setArbitraryStorage(target: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setBlockhash(blockNumber: BigNumberish, blockHash: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setEnv(name: string, value: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setNonce(account: string, newNonce: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setNonceUnsafe(account: string, newNonce: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "sign(bytes32)"(digest: BytesLike, overrides?: CallOverrides): Promise<[number, string, string] & {
        v: number;
        r: string;
        s: string;
    }>;
    "sign(address,bytes32)"(signer: string, digest: BytesLike, overrides?: CallOverrides): Promise<[number, string, string] & {
        v: number;
        r: string;
        s: string;
    }>;
    "sign((address,uint256,uint256,uint256),bytes32)"(wallet: VmSafe.WalletStruct, digest: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "sign(uint256,bytes32)"(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<[number, string, string] & {
        v: number;
        r: string;
        s: string;
    }>;
    signAndAttachDelegation(implementation: string, privateKey: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "signCompact((address,uint256,uint256,uint256),bytes32)"(wallet: VmSafe.WalletStruct, digest: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "signCompact(address,bytes32)"(signer: string, digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        r: string;
        vs: string;
    }>;
    "signCompact(bytes32)"(digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        r: string;
        vs: string;
    }>;
    "signCompact(uint256,bytes32)"(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        r: string;
        vs: string;
    }>;
    signDelegation(implementation: string, privateKey: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    signP256(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
        r: string;
        s: string;
    }>;
    "skip(bool,string)"(skipTest: boolean, reason: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "skip(bool)"(skipTest: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    sleep(duration: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    snapshot(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "snapshotGasLastCall(string,string)"(group: string, name: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "snapshotGasLastCall(string)"(name: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    snapshotState(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "snapshotValue(string,uint256)"(name: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "snapshotValue(string,string,uint256)"(group: string, name: string, value: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    split(input: string, delimiter: string, overrides?: CallOverrides): Promise<string[]>;
    "startBroadcast()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "startBroadcast(address)"(signer: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "startBroadcast(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startDebugTraceRecording(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startMappingRecording(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "startPrank(address)"(msgSender: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "startPrank(address,bool)"(msgSender: string, delegateCall: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "startPrank(address,address)"(msgSender: string, txOrigin: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "startPrank(address,address,bool)"(msgSender: string, txOrigin: string, delegateCall: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "startSnapshotGas(string)"(name: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "startSnapshotGas(string,string)"(group: string, name: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startStateDiffRecording(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stopAndReturnDebugTraceRecording(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stopAndReturnStateDiff(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stopBroadcast(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stopExpectSafeMemory(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stopMappingRecording(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    stopPrank(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "stopSnapshotGas(string,string)"(group: string, name: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "stopSnapshotGas(string)"(name: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "stopSnapshotGas()"(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    store(target: string, slot: BytesLike, value: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "toBase64(string)"(data: string, overrides?: CallOverrides): Promise<string>;
    "toBase64(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<string>;
    "toBase64URL(string)"(data: string, overrides?: CallOverrides): Promise<string>;
    "toBase64URL(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<string>;
    toLowercase(input: string, overrides?: CallOverrides): Promise<string>;
    "toString(address)"(value: string, overrides?: CallOverrides): Promise<string>;
    "toString(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "toString(bytes)"(value: BytesLike, overrides?: CallOverrides): Promise<string>;
    "toString(bool)"(value: boolean, overrides?: CallOverrides): Promise<string>;
    "toString(int256)"(value: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "toString(bytes32)"(value: BytesLike, overrides?: CallOverrides): Promise<string>;
    toUppercase(input: string, overrides?: CallOverrides): Promise<string>;
    "transact(uint256,bytes32)"(forkId: BigNumberish, txHash: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "transact(bytes32)"(txHash: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    trim(input: string, overrides?: CallOverrides): Promise<string>;
    tryFfi(commandInput: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    txGasPrice(newGasPrice: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unixTime(overrides?: CallOverrides): Promise<BigNumber>;
    warmSlot(target: string, slot: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    warp(newTimestamp: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    writeFile(path: string, data: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    writeFileBinary(path: string, data: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "writeJson(string,string,string)"(json: string, path: string, valueKey: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "writeJson(string,string)"(json: string, path: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    writeLine(path: string, data: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "writeToml(string,string,string)"(json: string, path: string, valueKey: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "writeToml(string,string)"(json: string, path: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        accessList(access: VmSafe.AccessListItemStruct[], overrides?: CallOverrides): Promise<void>;
        accesses(target: string, overrides?: CallOverrides): Promise<[
            string[],
            string[]
        ] & {
            readSlots: string[];
            writeSlots: string[];
        }>;
        activeFork(overrides?: CallOverrides): Promise<BigNumber>;
        addr(privateKey: BigNumberish, overrides?: CallOverrides): Promise<string>;
        allowCheatcodes(account: string, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqAbs(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqAbs(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqAbs(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqAbs(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqRel(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqRel(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqRel(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqRel(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(bytes32[],bytes32[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<void>;
        "assertEq(int256[],int256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(address,address,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(string,string,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(address[],address[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<void>;
        "assertEq(address[],address[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(bool,bool,string)"(left: boolean, right: boolean, error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(address,address)"(left: string, right: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(uint256[],uint256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(bool[],bool[])"(left: boolean[], right: boolean[], overrides?: CallOverrides): Promise<void>;
        "assertEq(int256[],int256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "assertEq(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(bytes32,bytes32)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<void>;
        "assertEq(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(uint256[],uint256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "assertEq(bytes,bytes)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<void>;
        "assertEq(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertEq(bytes32,bytes32,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(string[],string[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<void>;
        "assertEq(bytes32[],bytes32[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(bytes,bytes,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(bool[],bool[],string)"(left: boolean[], right: boolean[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(bytes[],bytes[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<void>;
        "assertEq(string[],string[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(string,string)"(left: string, right: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(bytes[],bytes[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertEq(bool,bool)"(left: boolean, right: boolean, overrides?: CallOverrides): Promise<void>;
        "assertEq(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertEqDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertEqDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertEqDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertEqDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertFalse(bool,string)"(condition: boolean, error: string, overrides?: CallOverrides): Promise<void>;
        "assertFalse(bool)"(condition: boolean, overrides?: CallOverrides): Promise<void>;
        "assertGe(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertGe(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertGe(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertGe(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertGeDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertGeDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertGeDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertGeDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertGt(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertGt(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertGt(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertGt(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertGtDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertGtDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertGtDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertGtDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertLe(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertLe(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertLe(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertLe(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertLeDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertLeDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertLeDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertLeDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertLt(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertLt(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertLt(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertLt(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertLtDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertLtDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertLtDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertLtDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bytes32[],bytes32[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<void>;
        "assertNotEq(int256[],int256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bool,bool,string)"(left: boolean, right: boolean, error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bytes[],bytes[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bool,bool)"(left: boolean, right: boolean, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bool[],bool[])"(left: boolean[], right: boolean[], overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bytes,bytes)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(address[],address[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<void>;
        "assertNotEq(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(uint256[],uint256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bool[],bool[],string)"(left: boolean[], right: boolean[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(string,string)"(left: string, right: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(address[],address[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(string,string,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(address,address,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bytes32,bytes32)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bytes,bytes,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(uint256[],uint256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(address,address)"(left: string, right: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bytes32,bytes32,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(string[],string[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bytes32[],bytes32[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(string[],string[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<void>;
        "assertNotEq(int256[],int256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEq(bytes[],bytes[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<void>;
        "assertNotEq(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertNotEqDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertNotEqDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertNotEqDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "assertNotEqDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<void>;
        "assertTrue(bool)"(condition: boolean, overrides?: CallOverrides): Promise<void>;
        "assertTrue(bool,string)"(condition: boolean, error: string, overrides?: CallOverrides): Promise<void>;
        assume(condition: boolean, overrides?: CallOverrides): Promise<void>;
        "assumeNoRevert()"(overrides?: CallOverrides): Promise<void>;
        "assumeNoRevert((address,bool,bytes)[])"(potentialReverts: VmSafe.PotentialRevertStruct[], overrides?: CallOverrides): Promise<void>;
        "assumeNoRevert((address,bool,bytes))"(potentialRevert: VmSafe.PotentialRevertStruct, overrides?: CallOverrides): Promise<void>;
        attachDelegation(signedDelegation: VmSafe.SignedDelegationStruct, overrides?: CallOverrides): Promise<void>;
        blobBaseFee(newBlobBaseFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        blobhashes(hashes: BytesLike[], overrides?: CallOverrides): Promise<void>;
        "breakpoint(string)"(char: string, overrides?: CallOverrides): Promise<void>;
        "breakpoint(string,bool)"(char: string, value: boolean, overrides?: CallOverrides): Promise<void>;
        "broadcast()"(overrides?: CallOverrides): Promise<void>;
        "broadcast(address)"(signer: string, overrides?: CallOverrides): Promise<void>;
        "broadcast(uint256)"(privateKey: BigNumberish, overrides?: CallOverrides): Promise<void>;
        broadcastRawTransaction(data: BytesLike, overrides?: CallOverrides): Promise<void>;
        chainId(newChainId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        clearMockedCalls(overrides?: CallOverrides): Promise<void>;
        cloneAccount(source: string, target: string, overrides?: CallOverrides): Promise<void>;
        closeFile(path: string, overrides?: CallOverrides): Promise<void>;
        coinbase(newCoinbase: string, overrides?: CallOverrides): Promise<void>;
        "computeCreate2Address(bytes32,bytes32)"(salt: BytesLike, initCodeHash: BytesLike, overrides?: CallOverrides): Promise<string>;
        "computeCreate2Address(bytes32,bytes32,address)"(salt: BytesLike, initCodeHash: BytesLike, deployer: string, overrides?: CallOverrides): Promise<string>;
        computeCreateAddress(deployer: string, nonce: BigNumberish, overrides?: CallOverrides): Promise<string>;
        contains(subject: string, search: string, overrides?: CallOverrides): Promise<boolean>;
        cool(target: string, overrides?: CallOverrides): Promise<void>;
        coolSlot(target: string, slot: BytesLike, overrides?: CallOverrides): Promise<void>;
        copyFile(from: string, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        copyStorage(from: string, to: string, overrides?: CallOverrides): Promise<void>;
        createDir(path: string, recursive: boolean, overrides?: CallOverrides): Promise<void>;
        "createFork(string)"(urlOrAlias: string, overrides?: CallOverrides): Promise<BigNumber>;
        "createFork(string,uint256)"(urlOrAlias: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "createFork(string,bytes32)"(urlOrAlias: string, txHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "createSelectFork(string,uint256)"(urlOrAlias: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "createSelectFork(string,bytes32)"(urlOrAlias: string, txHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "createSelectFork(string)"(urlOrAlias: string, overrides?: CallOverrides): Promise<BigNumber>;
        "createWallet(string)"(walletLabel: string, overrides?: CallOverrides): Promise<VmSafe.WalletStructOutput>;
        "createWallet(uint256)"(privateKey: BigNumberish, overrides?: CallOverrides): Promise<VmSafe.WalletStructOutput>;
        "createWallet(uint256,string)"(privateKey: BigNumberish, walletLabel: string, overrides?: CallOverrides): Promise<VmSafe.WalletStructOutput>;
        deal(account: string, newBalance: BigNumberish, overrides?: CallOverrides): Promise<void>;
        deleteSnapshot(snapshotId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        deleteSnapshots(overrides?: CallOverrides): Promise<void>;
        deleteStateSnapshot(snapshotId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        deleteStateSnapshots(overrides?: CallOverrides): Promise<void>;
        "deployCode(string,bytes)"(artifactPath: string, constructorArgs: BytesLike, overrides?: CallOverrides): Promise<string>;
        "deployCode(string)"(artifactPath: string, overrides?: CallOverrides): Promise<string>;
        "deriveKey(string,string,uint32,string)"(mnemonic: string, derivationPath: string, index: BigNumberish, language: string, overrides?: CallOverrides): Promise<BigNumber>;
        "deriveKey(string,uint32,string)"(mnemonic: string, index: BigNumberish, language: string, overrides?: CallOverrides): Promise<BigNumber>;
        "deriveKey(string,uint32)"(mnemonic: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "deriveKey(string,string,uint32)"(mnemonic: string, derivationPath: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        difficulty(newDifficulty: BigNumberish, overrides?: CallOverrides): Promise<void>;
        dumpState(pathToStateJson: string, overrides?: CallOverrides): Promise<void>;
        ensNamehash(name: string, overrides?: CallOverrides): Promise<string>;
        "envAddress(string)"(name: string, overrides?: CallOverrides): Promise<string>;
        "envAddress(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<string[]>;
        "envBool(string)"(name: string, overrides?: CallOverrides): Promise<boolean>;
        "envBool(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<boolean[]>;
        "envBytes(string)"(name: string, overrides?: CallOverrides): Promise<string>;
        "envBytes(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<string[]>;
        "envBytes32(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<string[]>;
        "envBytes32(string)"(name: string, overrides?: CallOverrides): Promise<string>;
        envExists(name: string, overrides?: CallOverrides): Promise<boolean>;
        "envInt(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        "envInt(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,bytes32[])"(name: string, delim: string, defaultValue: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        "envOr(string,string,int256[])"(name: string, delim: string, defaultValue: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        "envOr(string,bool)"(name: string, defaultValue: boolean, overrides?: CallOverrides): Promise<boolean>;
        "envOr(string,address)"(name: string, defaultValue: string, overrides?: CallOverrides): Promise<string>;
        "envOr(string,uint256)"(name: string, defaultValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,bytes[])"(name: string, delim: string, defaultValue: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        "envOr(string,string,uint256[])"(name: string, delim: string, defaultValue: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        "envOr(string,string,string[])"(name: string, delim: string, defaultValue: string[], overrides?: CallOverrides): Promise<string[]>;
        "envOr(string,bytes)"(name: string, defaultValue: BytesLike, overrides?: CallOverrides): Promise<string>;
        "envOr(string,bytes32)"(name: string, defaultValue: BytesLike, overrides?: CallOverrides): Promise<string>;
        "envOr(string,int256)"(name: string, defaultValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,address[])"(name: string, delim: string, defaultValue: string[], overrides?: CallOverrides): Promise<string[]>;
        "envOr(string,string)"(name: string, defaultValue: string, overrides?: CallOverrides): Promise<string>;
        "envOr(string,string,bool[])"(name: string, delim: string, defaultValue: boolean[], overrides?: CallOverrides): Promise<boolean[]>;
        "envString(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<string[]>;
        "envString(string)"(name: string, overrides?: CallOverrides): Promise<string>;
        "envUint(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envUint(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        etch(target: string, newRuntimeBytecode: BytesLike, overrides?: CallOverrides): Promise<void>;
        eth_getLogs(fromBlock: BigNumberish, toBlock: BigNumberish, target: string, topics: BytesLike[], overrides?: CallOverrides): Promise<VmSafe.EthGetLogsStructOutput[]>;
        exists(path: string, overrides?: CallOverrides): Promise<boolean>;
        "expectCall(address,uint256,uint64,bytes)"(callee: string, msgValue: BigNumberish, gas: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "expectCall(address,uint256,uint64,bytes,uint64)"(callee: string, msgValue: BigNumberish, gas: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectCall(address,uint256,bytes,uint64)"(callee: string, msgValue: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectCall(address,bytes)"(callee: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "expectCall(address,bytes,uint64)"(callee: string, data: BytesLike, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectCall(address,uint256,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "expectCallMinGas(address,uint256,uint64,bytes)"(callee: string, msgValue: BigNumberish, minGas: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "expectCallMinGas(address,uint256,uint64,bytes,uint64)"(callee: string, msgValue: BigNumberish, minGas: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        expectCreate(bytecode: BytesLike, deployer: string, overrides?: CallOverrides): Promise<void>;
        expectCreate2(bytecode: BytesLike, deployer: string, overrides?: CallOverrides): Promise<void>;
        "expectEmit()"(overrides?: CallOverrides): Promise<void>;
        "expectEmit(bool,bool,bool,bool)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, overrides?: CallOverrides): Promise<void>;
        "expectEmit(uint64)"(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectEmit(bool,bool,bool,bool,uint64)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectEmit(bool,bool,bool,bool,address)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, overrides?: CallOverrides): Promise<void>;
        "expectEmit(address)"(emitter: string, overrides?: CallOverrides): Promise<void>;
        "expectEmit(address,uint64)"(emitter: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectEmit(bool,bool,bool,bool,address,uint64)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectEmitAnonymous()"(overrides?: CallOverrides): Promise<void>;
        "expectEmitAnonymous(address)"(emitter: string, overrides?: CallOverrides): Promise<void>;
        "expectEmitAnonymous(bool,bool,bool,bool,bool,address)"(checkTopic0: boolean, checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, overrides?: CallOverrides): Promise<void>;
        "expectEmitAnonymous(bool,bool,bool,bool,bool)"(checkTopic0: boolean, checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, overrides?: CallOverrides): Promise<void>;
        "expectPartialRevert(bytes4)"(revertData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "expectPartialRevert(bytes4,address)"(revertData: BytesLike, reverter: string, overrides?: CallOverrides): Promise<void>;
        "expectRevert(address,uint64)"(reverter: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectRevert(bytes4,address)"(revertData: BytesLike, reverter: string, overrides?: CallOverrides): Promise<void>;
        "expectRevert(bytes,uint64)"(revertData: BytesLike, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectRevert(uint64)"(count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectRevert(bytes,address)"(revertData: BytesLike, reverter: string, overrides?: CallOverrides): Promise<void>;
        "expectRevert(bytes4,address,uint64)"(revertData: BytesLike, reverter: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectRevert(bytes4)"(revertData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "expectRevert(bytes,address,uint64)"(revertData: BytesLike, reverter: string, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectRevert(address)"(reverter: string, overrides?: CallOverrides): Promise<void>;
        "expectRevert(bytes4,uint64)"(revertData: BytesLike, count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "expectRevert(bytes)"(revertData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "expectRevert()"(overrides?: CallOverrides): Promise<void>;
        expectSafeMemory(min: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<void>;
        expectSafeMemoryCall(min: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fee(newBasefee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        ffi(commandInput: string[], overrides?: CallOverrides): Promise<string>;
        foundryVersionAtLeast(version: string, overrides?: CallOverrides): Promise<boolean>;
        foundryVersionCmp(version: string, overrides?: CallOverrides): Promise<BigNumber>;
        fsMetadata(path: string, overrides?: CallOverrides): Promise<VmSafe.FsMetadataStructOutput>;
        getArtifactPathByCode(code: BytesLike, overrides?: CallOverrides): Promise<string>;
        getArtifactPathByDeployedCode(deployedCode: BytesLike, overrides?: CallOverrides): Promise<string>;
        getBlobBaseFee(overrides?: CallOverrides): Promise<BigNumber>;
        getBlobhashes(overrides?: CallOverrides): Promise<string[]>;
        getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        getBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getBroadcast(contractName: string, chainId: BigNumberish, txType: BigNumberish, overrides?: CallOverrides): Promise<VmSafe.BroadcastTxSummaryStructOutput>;
        "getBroadcasts(string,uint64)"(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<VmSafe.BroadcastTxSummaryStructOutput[]>;
        "getBroadcasts(string,uint64,uint8)"(contractName: string, chainId: BigNumberish, txType: BigNumberish, overrides?: CallOverrides): Promise<VmSafe.BroadcastTxSummaryStructOutput[]>;
        getCode(artifactPath: string, overrides?: CallOverrides): Promise<string>;
        getDeployedCode(artifactPath: string, overrides?: CallOverrides): Promise<string>;
        "getDeployment(string,uint64)"(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "getDeployment(string)"(contractName: string, overrides?: CallOverrides): Promise<string>;
        getDeployments(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
        getFoundryVersion(overrides?: CallOverrides): Promise<string>;
        getLabel(account: string, overrides?: CallOverrides): Promise<string>;
        getMappingKeyAndParentOf(target: string, elementSlot: BytesLike, overrides?: CallOverrides): Promise<[
            boolean,
            string,
            string
        ] & {
            found: boolean;
            key: string;
            parent: string;
        }>;
        getMappingLength(target: string, mappingSlot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getMappingSlotAt(target: string, mappingSlot: BytesLike, idx: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "getNonce(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "getNonce((address,uint256,uint256,uint256))"(wallet: VmSafe.WalletStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getRecordedLogs(overrides?: CallOverrides): Promise<VmSafe.LogStructOutput[]>;
        getStateDiff(overrides?: CallOverrides): Promise<string>;
        getStateDiffJson(overrides?: CallOverrides): Promise<string>;
        getWallets(overrides?: CallOverrides): Promise<string[]>;
        indexOf(input: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        isContext(context: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isDir(path: string, overrides?: CallOverrides): Promise<boolean>;
        isFile(path: string, overrides?: CallOverrides): Promise<boolean>;
        isPersistent(account: string, overrides?: CallOverrides): Promise<boolean>;
        keyExists(json: string, key: string, overrides?: CallOverrides): Promise<boolean>;
        keyExistsJson(json: string, key: string, overrides?: CallOverrides): Promise<boolean>;
        keyExistsToml(toml: string, key: string, overrides?: CallOverrides): Promise<boolean>;
        label(account: string, newLabel: string, overrides?: CallOverrides): Promise<void>;
        lastCallGas(overrides?: CallOverrides): Promise<VmSafe.GasStructOutput>;
        load(target: string, slot: BytesLike, overrides?: CallOverrides): Promise<string>;
        loadAllocs(pathToAllocsJson: string, overrides?: CallOverrides): Promise<void>;
        "makePersistent(address[])"(accounts: string[], overrides?: CallOverrides): Promise<void>;
        "makePersistent(address,address)"(account0: string, account1: string, overrides?: CallOverrides): Promise<void>;
        "makePersistent(address)"(account: string, overrides?: CallOverrides): Promise<void>;
        "makePersistent(address,address,address)"(account0: string, account1: string, account2: string, overrides?: CallOverrides): Promise<void>;
        "mockCall(address,bytes4,bytes)"(callee: string, data: BytesLike, returnData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "mockCall(address,uint256,bytes,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "mockCall(address,bytes,bytes)"(callee: string, data: BytesLike, returnData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "mockCall(address,uint256,bytes4,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "mockCallRevert(address,bytes4,bytes)"(callee: string, data: BytesLike, revertData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "mockCallRevert(address,uint256,bytes4,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, revertData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "mockCallRevert(address,uint256,bytes,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, revertData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "mockCallRevert(address,bytes,bytes)"(callee: string, data: BytesLike, revertData: BytesLike, overrides?: CallOverrides): Promise<void>;
        "mockCalls(address,uint256,bytes,bytes[])"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike[], overrides?: CallOverrides): Promise<void>;
        "mockCalls(address,bytes,bytes[])"(callee: string, data: BytesLike, returnData: BytesLike[], overrides?: CallOverrides): Promise<void>;
        mockFunction(callee: string, target: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        noAccessList(overrides?: CallOverrides): Promise<void>;
        parseAddress(stringifiedValue: string, overrides?: CallOverrides): Promise<string>;
        parseBool(stringifiedValue: string, overrides?: CallOverrides): Promise<boolean>;
        parseBytes(stringifiedValue: string, overrides?: CallOverrides): Promise<string>;
        parseBytes32(stringifiedValue: string, overrides?: CallOverrides): Promise<string>;
        parseInt(stringifiedValue: string, overrides?: CallOverrides): Promise<BigNumber>;
        "parseJson(string)"(json: string, overrides?: CallOverrides): Promise<string>;
        "parseJson(string,string)"(json: string, key: string, overrides?: CallOverrides): Promise<string>;
        parseJsonAddress(json: string, key: string, overrides?: CallOverrides): Promise<string>;
        parseJsonAddressArray(json: string, key: string, overrides?: CallOverrides): Promise<string[]>;
        parseJsonBool(json: string, key: string, overrides?: CallOverrides): Promise<boolean>;
        parseJsonBoolArray(json: string, key: string, overrides?: CallOverrides): Promise<boolean[]>;
        parseJsonBytes(json: string, key: string, overrides?: CallOverrides): Promise<string>;
        parseJsonBytes32(json: string, key: string, overrides?: CallOverrides): Promise<string>;
        parseJsonBytes32Array(json: string, key: string, overrides?: CallOverrides): Promise<string[]>;
        parseJsonBytesArray(json: string, key: string, overrides?: CallOverrides): Promise<string[]>;
        parseJsonInt(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonIntArray(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        parseJsonKeys(json: string, key: string, overrides?: CallOverrides): Promise<string[]>;
        parseJsonString(json: string, key: string, overrides?: CallOverrides): Promise<string>;
        parseJsonStringArray(json: string, key: string, overrides?: CallOverrides): Promise<string[]>;
        "parseJsonType(string,string)"(json: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
        "parseJsonType(string,string,string)"(json: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
        parseJsonTypeArray(json: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
        parseJsonUint(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonUintArray(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        "parseToml(string,string)"(toml: string, key: string, overrides?: CallOverrides): Promise<string>;
        "parseToml(string)"(toml: string, overrides?: CallOverrides): Promise<string>;
        parseTomlAddress(toml: string, key: string, overrides?: CallOverrides): Promise<string>;
        parseTomlAddressArray(toml: string, key: string, overrides?: CallOverrides): Promise<string[]>;
        parseTomlBool(toml: string, key: string, overrides?: CallOverrides): Promise<boolean>;
        parseTomlBoolArray(toml: string, key: string, overrides?: CallOverrides): Promise<boolean[]>;
        parseTomlBytes(toml: string, key: string, overrides?: CallOverrides): Promise<string>;
        parseTomlBytes32(toml: string, key: string, overrides?: CallOverrides): Promise<string>;
        parseTomlBytes32Array(toml: string, key: string, overrides?: CallOverrides): Promise<string[]>;
        parseTomlBytesArray(toml: string, key: string, overrides?: CallOverrides): Promise<string[]>;
        parseTomlInt(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlIntArray(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        parseTomlKeys(toml: string, key: string, overrides?: CallOverrides): Promise<string[]>;
        parseTomlString(toml: string, key: string, overrides?: CallOverrides): Promise<string>;
        parseTomlStringArray(toml: string, key: string, overrides?: CallOverrides): Promise<string[]>;
        "parseTomlType(string,string)"(toml: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
        "parseTomlType(string,string,string)"(toml: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
        parseTomlTypeArray(toml: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<string>;
        parseTomlUint(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlUintArray(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber[]>;
        parseUint(stringifiedValue: string, overrides?: CallOverrides): Promise<BigNumber>;
        pauseGasMetering(overrides?: CallOverrides): Promise<void>;
        pauseTracing(overrides?: CallOverrides): Promise<void>;
        "prank(address,address)"(msgSender: string, txOrigin: string, overrides?: CallOverrides): Promise<void>;
        "prank(address,address,bool)"(msgSender: string, txOrigin: string, delegateCall: boolean, overrides?: CallOverrides): Promise<void>;
        "prank(address,bool)"(msgSender: string, delegateCall: boolean, overrides?: CallOverrides): Promise<void>;
        "prank(address)"(msgSender: string, overrides?: CallOverrides): Promise<void>;
        "prevrandao(bytes32)"(newPrevrandao: BytesLike, overrides?: CallOverrides): Promise<void>;
        "prevrandao(uint256)"(newPrevrandao: BigNumberish, overrides?: CallOverrides): Promise<void>;
        projectRoot(overrides?: CallOverrides): Promise<string>;
        prompt(promptText: string, overrides?: CallOverrides): Promise<string>;
        promptAddress(promptText: string, overrides?: CallOverrides): Promise<string>;
        promptSecret(promptText: string, overrides?: CallOverrides): Promise<string>;
        promptSecretUint(promptText: string, overrides?: CallOverrides): Promise<BigNumber>;
        promptUint(promptText: string, overrides?: CallOverrides): Promise<BigNumber>;
        publicKeyP256(privateKey: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            publicKeyX: BigNumber;
            publicKeyY: BigNumber;
        }>;
        randomAddress(overrides?: CallOverrides): Promise<string>;
        randomBool(overrides?: CallOverrides): Promise<boolean>;
        randomBytes(len: BigNumberish, overrides?: CallOverrides): Promise<string>;
        randomBytes4(overrides?: CallOverrides): Promise<string>;
        randomBytes8(overrides?: CallOverrides): Promise<string>;
        "randomInt()"(overrides?: CallOverrides): Promise<BigNumber>;
        "randomInt(uint256)"(bits: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "randomUint()"(overrides?: CallOverrides): Promise<BigNumber>;
        "randomUint(uint256)"(bits: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "randomUint(uint256,uint256)"(min: BigNumberish, max: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        readCallers(overrides?: CallOverrides): Promise<[
            number,
            string,
            string
        ] & {
            callerMode: number;
            msgSender: string;
            txOrigin: string;
        }>;
        "readDir(string,uint64)"(path: string, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
        "readDir(string,uint64,bool)"(path: string, maxDepth: BigNumberish, followLinks: boolean, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
        "readDir(string)"(path: string, overrides?: CallOverrides): Promise<VmSafe.DirEntryStructOutput[]>;
        readFile(path: string, overrides?: CallOverrides): Promise<string>;
        readFileBinary(path: string, overrides?: CallOverrides): Promise<string>;
        readLine(path: string, overrides?: CallOverrides): Promise<string>;
        readLink(linkPath: string, overrides?: CallOverrides): Promise<string>;
        record(overrides?: CallOverrides): Promise<void>;
        recordLogs(overrides?: CallOverrides): Promise<void>;
        rememberKey(privateKey: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "rememberKeys(string,string,uint32)"(mnemonic: string, derivationPath: string, count: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
        "rememberKeys(string,string,string,uint32)"(mnemonic: string, derivationPath: string, language: string, count: BigNumberish, overrides?: CallOverrides): Promise<string[]>;
        removeDir(path: string, recursive: boolean, overrides?: CallOverrides): Promise<void>;
        removeFile(path: string, overrides?: CallOverrides): Promise<void>;
        replace(input: string, from: string, to: string, overrides?: CallOverrides): Promise<string>;
        resetGasMetering(overrides?: CallOverrides): Promise<void>;
        resetNonce(account: string, overrides?: CallOverrides): Promise<void>;
        resumeGasMetering(overrides?: CallOverrides): Promise<void>;
        resumeTracing(overrides?: CallOverrides): Promise<void>;
        revertTo(snapshotId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        revertToAndDelete(snapshotId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        revertToState(snapshotId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        revertToStateAndDelete(snapshotId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "revokePersistent(address[])"(accounts: string[], overrides?: CallOverrides): Promise<void>;
        "revokePersistent(address)"(account: string, overrides?: CallOverrides): Promise<void>;
        roll(newHeight: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "rollFork(bytes32)"(txHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        "rollFork(uint256,uint256)"(forkId: BigNumberish, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "rollFork(uint256)"(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "rollFork(uint256,bytes32)"(forkId: BigNumberish, txHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        "rpc(string,string,string)"(urlOrAlias: string, method: string, params: string, overrides?: CallOverrides): Promise<string>;
        "rpc(string,string)"(method: string, params: string, overrides?: CallOverrides): Promise<string>;
        rpcUrl(rpcAlias: string, overrides?: CallOverrides): Promise<string>;
        rpcUrlStructs(overrides?: CallOverrides): Promise<VmSafe.RpcStructOutput[]>;
        rpcUrls(overrides?: CallOverrides): Promise<[string, string][]>;
        selectFork(forkId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "serializeAddress(string,string,address[])"(objectKey: string, valueKey: string, values: string[], overrides?: CallOverrides): Promise<string>;
        "serializeAddress(string,string,address)"(objectKey: string, valueKey: string, value: string, overrides?: CallOverrides): Promise<string>;
        "serializeBool(string,string,bool[])"(objectKey: string, valueKey: string, values: boolean[], overrides?: CallOverrides): Promise<string>;
        "serializeBool(string,string,bool)"(objectKey: string, valueKey: string, value: boolean, overrides?: CallOverrides): Promise<string>;
        "serializeBytes(string,string,bytes[])"(objectKey: string, valueKey: string, values: BytesLike[], overrides?: CallOverrides): Promise<string>;
        "serializeBytes(string,string,bytes)"(objectKey: string, valueKey: string, value: BytesLike, overrides?: CallOverrides): Promise<string>;
        "serializeBytes32(string,string,bytes32[])"(objectKey: string, valueKey: string, values: BytesLike[], overrides?: CallOverrides): Promise<string>;
        "serializeBytes32(string,string,bytes32)"(objectKey: string, valueKey: string, value: BytesLike, overrides?: CallOverrides): Promise<string>;
        "serializeInt(string,string,int256)"(objectKey: string, valueKey: string, value: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "serializeInt(string,string,int256[])"(objectKey: string, valueKey: string, values: BigNumberish[], overrides?: CallOverrides): Promise<string>;
        serializeJson(objectKey: string, value: string, overrides?: CallOverrides): Promise<string>;
        "serializeJsonType(string,bytes)"(typeDescription: string, value: BytesLike, overrides?: CallOverrides): Promise<string>;
        "serializeJsonType(string,string,string,bytes)"(objectKey: string, valueKey: string, typeDescription: string, value: BytesLike, overrides?: CallOverrides): Promise<string>;
        "serializeString(string,string,string[])"(objectKey: string, valueKey: string, values: string[], overrides?: CallOverrides): Promise<string>;
        "serializeString(string,string,string)"(objectKey: string, valueKey: string, value: string, overrides?: CallOverrides): Promise<string>;
        "serializeUint(string,string,uint256)"(objectKey: string, valueKey: string, value: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "serializeUint(string,string,uint256[])"(objectKey: string, valueKey: string, values: BigNumberish[], overrides?: CallOverrides): Promise<string>;
        serializeUintToHex(objectKey: string, valueKey: string, value: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setArbitraryStorage(target: string, overrides?: CallOverrides): Promise<void>;
        setBlockhash(blockNumber: BigNumberish, blockHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        setEnv(name: string, value: string, overrides?: CallOverrides): Promise<void>;
        setNonce(account: string, newNonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setNonceUnsafe(account: string, newNonce: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "sign(bytes32)"(digest: BytesLike, overrides?: CallOverrides): Promise<[number, string, string] & {
            v: number;
            r: string;
            s: string;
        }>;
        "sign(address,bytes32)"(signer: string, digest: BytesLike, overrides?: CallOverrides): Promise<[number, string, string] & {
            v: number;
            r: string;
            s: string;
        }>;
        "sign((address,uint256,uint256,uint256),bytes32)"(wallet: VmSafe.WalletStruct, digest: BytesLike, overrides?: CallOverrides): Promise<[number, string, string] & {
            v: number;
            r: string;
            s: string;
        }>;
        "sign(uint256,bytes32)"(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<[number, string, string] & {
            v: number;
            r: string;
            s: string;
        }>;
        signAndAttachDelegation(implementation: string, privateKey: BigNumberish, overrides?: CallOverrides): Promise<VmSafe.SignedDelegationStructOutput>;
        "signCompact((address,uint256,uint256,uint256),bytes32)"(wallet: VmSafe.WalletStruct, digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            r: string;
            vs: string;
        }>;
        "signCompact(address,bytes32)"(signer: string, digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            r: string;
            vs: string;
        }>;
        "signCompact(bytes32)"(digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            r: string;
            vs: string;
        }>;
        "signCompact(uint256,bytes32)"(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            r: string;
            vs: string;
        }>;
        signDelegation(implementation: string, privateKey: BigNumberish, overrides?: CallOverrides): Promise<VmSafe.SignedDelegationStructOutput>;
        signP256(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<[string, string] & {
            r: string;
            s: string;
        }>;
        "skip(bool,string)"(skipTest: boolean, reason: string, overrides?: CallOverrides): Promise<void>;
        "skip(bool)"(skipTest: boolean, overrides?: CallOverrides): Promise<void>;
        sleep(duration: BigNumberish, overrides?: CallOverrides): Promise<void>;
        snapshot(overrides?: CallOverrides): Promise<BigNumber>;
        "snapshotGasLastCall(string,string)"(group: string, name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "snapshotGasLastCall(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        snapshotState(overrides?: CallOverrides): Promise<BigNumber>;
        "snapshotValue(string,uint256)"(name: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "snapshotValue(string,string,uint256)"(group: string, name: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        split(input: string, delimiter: string, overrides?: CallOverrides): Promise<string[]>;
        "startBroadcast()"(overrides?: CallOverrides): Promise<void>;
        "startBroadcast(address)"(signer: string, overrides?: CallOverrides): Promise<void>;
        "startBroadcast(uint256)"(privateKey: BigNumberish, overrides?: CallOverrides): Promise<void>;
        startDebugTraceRecording(overrides?: CallOverrides): Promise<void>;
        startMappingRecording(overrides?: CallOverrides): Promise<void>;
        "startPrank(address)"(msgSender: string, overrides?: CallOverrides): Promise<void>;
        "startPrank(address,bool)"(msgSender: string, delegateCall: boolean, overrides?: CallOverrides): Promise<void>;
        "startPrank(address,address)"(msgSender: string, txOrigin: string, overrides?: CallOverrides): Promise<void>;
        "startPrank(address,address,bool)"(msgSender: string, txOrigin: string, delegateCall: boolean, overrides?: CallOverrides): Promise<void>;
        "startSnapshotGas(string)"(name: string, overrides?: CallOverrides): Promise<void>;
        "startSnapshotGas(string,string)"(group: string, name: string, overrides?: CallOverrides): Promise<void>;
        startStateDiffRecording(overrides?: CallOverrides): Promise<void>;
        stopAndReturnDebugTraceRecording(overrides?: CallOverrides): Promise<VmSafe.DebugStepStructOutput[]>;
        stopAndReturnStateDiff(overrides?: CallOverrides): Promise<VmSafe.AccountAccessStructOutput[]>;
        stopBroadcast(overrides?: CallOverrides): Promise<void>;
        stopExpectSafeMemory(overrides?: CallOverrides): Promise<void>;
        stopMappingRecording(overrides?: CallOverrides): Promise<void>;
        stopPrank(overrides?: CallOverrides): Promise<void>;
        "stopSnapshotGas(string,string)"(group: string, name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "stopSnapshotGas(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "stopSnapshotGas()"(overrides?: CallOverrides): Promise<BigNumber>;
        store(target: string, slot: BytesLike, value: BytesLike, overrides?: CallOverrides): Promise<void>;
        "toBase64(string)"(data: string, overrides?: CallOverrides): Promise<string>;
        "toBase64(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<string>;
        "toBase64URL(string)"(data: string, overrides?: CallOverrides): Promise<string>;
        "toBase64URL(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<string>;
        toLowercase(input: string, overrides?: CallOverrides): Promise<string>;
        "toString(address)"(value: string, overrides?: CallOverrides): Promise<string>;
        "toString(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "toString(bytes)"(value: BytesLike, overrides?: CallOverrides): Promise<string>;
        "toString(bool)"(value: boolean, overrides?: CallOverrides): Promise<string>;
        "toString(int256)"(value: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "toString(bytes32)"(value: BytesLike, overrides?: CallOverrides): Promise<string>;
        toUppercase(input: string, overrides?: CallOverrides): Promise<string>;
        "transact(uint256,bytes32)"(forkId: BigNumberish, txHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        "transact(bytes32)"(txHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        trim(input: string, overrides?: CallOverrides): Promise<string>;
        tryFfi(commandInput: string[], overrides?: CallOverrides): Promise<VmSafe.FfiResultStructOutput>;
        txGasPrice(newGasPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;
        unixTime(overrides?: CallOverrides): Promise<BigNumber>;
        warmSlot(target: string, slot: BytesLike, overrides?: CallOverrides): Promise<void>;
        warp(newTimestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;
        writeFile(path: string, data: string, overrides?: CallOverrides): Promise<void>;
        writeFileBinary(path: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "writeJson(string,string,string)"(json: string, path: string, valueKey: string, overrides?: CallOverrides): Promise<void>;
        "writeJson(string,string)"(json: string, path: string, overrides?: CallOverrides): Promise<void>;
        writeLine(path: string, data: string, overrides?: CallOverrides): Promise<void>;
        "writeToml(string,string,string)"(json: string, path: string, valueKey: string, overrides?: CallOverrides): Promise<void>;
        "writeToml(string,string)"(json: string, path: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        accessList(access: VmSafe.AccessListItemStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        accesses(target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        activeFork(overrides?: CallOverrides): Promise<BigNumber>;
        addr(privateKey: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        allowCheatcodes(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "assertApproxEqAbs(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqAbs(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqAbs(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqAbs(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqRel(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqRel(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqRel(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqRel(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bytes32[],bytes32[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(int256[],int256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(address,address,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(string,string,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(address[],address[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(address[],address[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bool,bool,string)"(left: boolean, right: boolean, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(address,address)"(left: string, right: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(uint256[],uint256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bool[],bool[])"(left: boolean[], right: boolean[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(int256[],int256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bytes32,bytes32)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(uint256[],uint256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bytes,bytes)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bytes32,bytes32,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(string[],string[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bytes32[],bytes32[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bytes,bytes,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bool[],bool[],string)"(left: boolean[], right: boolean[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bytes[],bytes[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(string[],string[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(string,string)"(left: string, right: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bytes[],bytes[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(bool,bool)"(left: boolean, right: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEq(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEqDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEqDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEqDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertEqDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertFalse(bool,string)"(condition: boolean, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertFalse(bool)"(condition: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGe(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGe(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGe(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGe(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGeDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGeDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGeDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGeDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGt(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGt(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGt(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGt(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGtDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGtDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGtDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertGtDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLe(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLe(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLe(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLe(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLeDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLeDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLeDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLeDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLt(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLt(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLt(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLt(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLtDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLtDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLtDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertLtDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bytes32[],bytes32[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(int256[],int256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bool,bool,string)"(left: boolean, right: boolean, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bytes[],bytes[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bool,bool)"(left: boolean, right: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bool[],bool[])"(left: boolean[], right: boolean[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bytes,bytes)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(address[],address[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(uint256[],uint256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bool[],bool[],string)"(left: boolean[], right: boolean[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(string,string)"(left: string, right: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(address[],address[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(string,string,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(address,address,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bytes32,bytes32)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bytes,bytes,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(uint256[],uint256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(address,address)"(left: string, right: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bytes32,bytes32,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(string[],string[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bytes32[],bytes32[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(string[],string[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(int256[],int256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(bytes[],bytes[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEq(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEqDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEqDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEqDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "assertNotEqDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        "assertTrue(bool)"(condition: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        "assertTrue(bool,string)"(condition: boolean, error: string, overrides?: CallOverrides): Promise<BigNumber>;
        assume(condition: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        "assumeNoRevert()"(overrides?: CallOverrides): Promise<BigNumber>;
        "assumeNoRevert((address,bool,bytes)[])"(potentialReverts: VmSafe.PotentialRevertStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        "assumeNoRevert((address,bool,bytes))"(potentialRevert: VmSafe.PotentialRevertStruct, overrides?: CallOverrides): Promise<BigNumber>;
        attachDelegation(signedDelegation: VmSafe.SignedDelegationStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        blobBaseFee(newBlobBaseFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        blobhashes(hashes: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "breakpoint(string)"(char: string, overrides?: CallOverrides): Promise<BigNumber>;
        "breakpoint(string,bool)"(char: string, value: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        "broadcast()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "broadcast(address)"(signer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "broadcast(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        broadcastRawTransaction(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        chainId(newChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        clearMockedCalls(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        cloneAccount(source: string, target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        closeFile(path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        coinbase(newCoinbase: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "computeCreate2Address(bytes32,bytes32)"(salt: BytesLike, initCodeHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "computeCreate2Address(bytes32,bytes32,address)"(salt: BytesLike, initCodeHash: BytesLike, deployer: string, overrides?: CallOverrides): Promise<BigNumber>;
        computeCreateAddress(deployer: string, nonce: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        contains(subject: string, search: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        cool(target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        coolSlot(target: string, slot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        copyFile(from: string, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        copyStorage(from: string, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        createDir(path: string, recursive: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "createFork(string)"(urlOrAlias: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "createFork(string,uint256)"(urlOrAlias: string, blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "createFork(string,bytes32)"(urlOrAlias: string, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "createSelectFork(string,uint256)"(urlOrAlias: string, blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "createSelectFork(string,bytes32)"(urlOrAlias: string, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "createSelectFork(string)"(urlOrAlias: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "createWallet(string)"(walletLabel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "createWallet(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "createWallet(uint256,string)"(privateKey: BigNumberish, walletLabel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deal(account: string, newBalance: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deleteSnapshot(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deleteSnapshots(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deleteStateSnapshot(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        deleteStateSnapshots(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "deployCode(string,bytes)"(artifactPath: string, constructorArgs: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "deployCode(string)"(artifactPath: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "deriveKey(string,string,uint32,string)"(mnemonic: string, derivationPath: string, index: BigNumberish, language: string, overrides?: CallOverrides): Promise<BigNumber>;
        "deriveKey(string,uint32,string)"(mnemonic: string, index: BigNumberish, language: string, overrides?: CallOverrides): Promise<BigNumber>;
        "deriveKey(string,uint32)"(mnemonic: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "deriveKey(string,string,uint32)"(mnemonic: string, derivationPath: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        difficulty(newDifficulty: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        dumpState(pathToStateJson: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        ensNamehash(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envAddress(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envAddress(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envBool(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envBool(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envBytes(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envBytes(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envBytes32(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envBytes32(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        envExists(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envInt(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envInt(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,bytes32[])"(name: string, delim: string, defaultValue: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,int256[])"(name: string, delim: string, defaultValue: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,bool)"(name: string, defaultValue: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,address)"(name: string, defaultValue: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,uint256)"(name: string, defaultValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,bytes[])"(name: string, delim: string, defaultValue: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,uint256[])"(name: string, delim: string, defaultValue: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,string[])"(name: string, delim: string, defaultValue: string[], overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,bytes)"(name: string, defaultValue: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,bytes32)"(name: string, defaultValue: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,int256)"(name: string, defaultValue: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,address[])"(name: string, delim: string, defaultValue: string[], overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string)"(name: string, defaultValue: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envOr(string,string,bool[])"(name: string, delim: string, defaultValue: boolean[], overrides?: CallOverrides): Promise<BigNumber>;
        "envString(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envString(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envUint(string)"(name: string, overrides?: CallOverrides): Promise<BigNumber>;
        "envUint(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<BigNumber>;
        etch(target: string, newRuntimeBytecode: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        eth_getLogs(fromBlock: BigNumberish, toBlock: BigNumberish, target: string, topics: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        exists(path: string, overrides?: CallOverrides): Promise<BigNumber>;
        "expectCall(address,uint256,uint64,bytes)"(callee: string, msgValue: BigNumberish, gas: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectCall(address,uint256,uint64,bytes,uint64)"(callee: string, msgValue: BigNumberish, gas: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectCall(address,uint256,bytes,uint64)"(callee: string, msgValue: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectCall(address,bytes)"(callee: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectCall(address,bytes,uint64)"(callee: string, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectCall(address,uint256,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectCallMinGas(address,uint256,uint64,bytes)"(callee: string, msgValue: BigNumberish, minGas: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectCallMinGas(address,uint256,uint64,bytes,uint64)"(callee: string, msgValue: BigNumberish, minGas: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        expectCreate(bytecode: BytesLike, deployer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        expectCreate2(bytecode: BytesLike, deployer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmit()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmit(bool,bool,bool,bool)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmit(uint64)"(count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmit(bool,bool,bool,bool,uint64)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmit(bool,bool,bool,bool,address)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmit(address)"(emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmit(address,uint64)"(emitter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmit(bool,bool,bool,bool,address,uint64)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmitAnonymous()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmitAnonymous(address)"(emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmitAnonymous(bool,bool,bool,bool,bool,address)"(checkTopic0: boolean, checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectEmitAnonymous(bool,bool,bool,bool,bool)"(checkTopic0: boolean, checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectPartialRevert(bytes4)"(revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectPartialRevert(bytes4,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert(address,uint64)"(reverter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert(bytes4,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert(bytes,uint64)"(revertData: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert(uint64)"(count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert(bytes,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert(bytes4,address,uint64)"(revertData: BytesLike, reverter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert(bytes4)"(revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert(bytes,address,uint64)"(revertData: BytesLike, reverter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert(address)"(reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert(bytes4,uint64)"(revertData: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert(bytes)"(revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "expectRevert()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        expectSafeMemory(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        expectSafeMemoryCall(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        fee(newBasefee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        ffi(commandInput: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        foundryVersionAtLeast(version: string, overrides?: CallOverrides): Promise<BigNumber>;
        foundryVersionCmp(version: string, overrides?: CallOverrides): Promise<BigNumber>;
        fsMetadata(path: string, overrides?: CallOverrides): Promise<BigNumber>;
        getArtifactPathByCode(code: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getArtifactPathByDeployedCode(deployedCode: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getBlobBaseFee(overrides?: CallOverrides): Promise<BigNumber>;
        getBlobhashes(overrides?: CallOverrides): Promise<BigNumber>;
        getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>;
        getBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;
        getBroadcast(contractName: string, chainId: BigNumberish, txType: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "getBroadcasts(string,uint64)"(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "getBroadcasts(string,uint64,uint8)"(contractName: string, chainId: BigNumberish, txType: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getCode(artifactPath: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDeployedCode(artifactPath: string, overrides?: CallOverrides): Promise<BigNumber>;
        "getDeployment(string,uint64)"(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "getDeployment(string)"(contractName: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDeployments(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getFoundryVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getLabel(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getMappingKeyAndParentOf(target: string, elementSlot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getMappingLength(target: string, mappingSlot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getMappingSlotAt(target: string, mappingSlot: BytesLike, idx: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "getNonce(address)"(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        "getNonce((address,uint256,uint256,uint256))"(wallet: VmSafe.WalletStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getRecordedLogs(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getStateDiff(overrides?: CallOverrides): Promise<BigNumber>;
        getStateDiffJson(overrides?: CallOverrides): Promise<BigNumber>;
        getWallets(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        indexOf(input: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        isContext(context: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isDir(path: string, overrides?: CallOverrides): Promise<BigNumber>;
        isFile(path: string, overrides?: CallOverrides): Promise<BigNumber>;
        isPersistent(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        keyExists(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        keyExistsJson(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        keyExistsToml(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        label(account: string, newLabel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        lastCallGas(overrides?: CallOverrides): Promise<BigNumber>;
        load(target: string, slot: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        loadAllocs(pathToAllocsJson: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "makePersistent(address[])"(accounts: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "makePersistent(address,address)"(account0: string, account1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "makePersistent(address)"(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "makePersistent(address,address,address)"(account0: string, account1: string, account2: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mockCall(address,bytes4,bytes)"(callee: string, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mockCall(address,uint256,bytes,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mockCall(address,bytes,bytes)"(callee: string, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mockCall(address,uint256,bytes4,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mockCallRevert(address,bytes4,bytes)"(callee: string, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mockCallRevert(address,uint256,bytes4,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mockCallRevert(address,uint256,bytes,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mockCallRevert(address,bytes,bytes)"(callee: string, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mockCalls(address,uint256,bytes,bytes[])"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "mockCalls(address,bytes,bytes[])"(callee: string, data: BytesLike, returnData: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        mockFunction(callee: string, target: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        noAccessList(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        parseAddress(stringifiedValue: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseBool(stringifiedValue: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseBytes(stringifiedValue: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseBytes32(stringifiedValue: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseInt(stringifiedValue: string, overrides?: CallOverrides): Promise<BigNumber>;
        "parseJson(string)"(json: string, overrides?: CallOverrides): Promise<BigNumber>;
        "parseJson(string,string)"(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonAddress(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonAddressArray(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonBool(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonBoolArray(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonBytes(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonBytes32(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonBytes32Array(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonBytesArray(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonInt(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonIntArray(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonKeys(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonString(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonStringArray(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        "parseJsonType(string,string)"(json: string, typeDescription: string, overrides?: CallOverrides): Promise<BigNumber>;
        "parseJsonType(string,string,string)"(json: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonTypeArray(json: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonUint(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseJsonUintArray(json: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        "parseToml(string,string)"(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        "parseToml(string)"(toml: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlAddress(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlAddressArray(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlBool(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlBoolArray(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlBytes(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlBytes32(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlBytes32Array(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlBytesArray(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlInt(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlIntArray(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlKeys(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlString(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlStringArray(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        "parseTomlType(string,string)"(toml: string, typeDescription: string, overrides?: CallOverrides): Promise<BigNumber>;
        "parseTomlType(string,string,string)"(toml: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlTypeArray(toml: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlUint(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseTomlUintArray(toml: string, key: string, overrides?: CallOverrides): Promise<BigNumber>;
        parseUint(stringifiedValue: string, overrides?: CallOverrides): Promise<BigNumber>;
        pauseGasMetering(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        pauseTracing(overrides?: CallOverrides): Promise<BigNumber>;
        "prank(address,address)"(msgSender: string, txOrigin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "prank(address,address,bool)"(msgSender: string, txOrigin: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "prank(address,bool)"(msgSender: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "prank(address)"(msgSender: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "prevrandao(bytes32)"(newPrevrandao: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "prevrandao(uint256)"(newPrevrandao: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        projectRoot(overrides?: CallOverrides): Promise<BigNumber>;
        prompt(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        promptAddress(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        promptSecret(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        promptSecretUint(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        promptUint(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        publicKeyP256(privateKey: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        randomAddress(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        randomBool(overrides?: CallOverrides): Promise<BigNumber>;
        randomBytes(len: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        randomBytes4(overrides?: CallOverrides): Promise<BigNumber>;
        randomBytes8(overrides?: CallOverrides): Promise<BigNumber>;
        "randomInt()"(overrides?: CallOverrides): Promise<BigNumber>;
        "randomInt(uint256)"(bits: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "randomUint()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "randomUint(uint256)"(bits: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "randomUint(uint256,uint256)"(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        readCallers(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "readDir(string,uint64)"(path: string, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "readDir(string,uint64,bool)"(path: string, maxDepth: BigNumberish, followLinks: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        "readDir(string)"(path: string, overrides?: CallOverrides): Promise<BigNumber>;
        readFile(path: string, overrides?: CallOverrides): Promise<BigNumber>;
        readFileBinary(path: string, overrides?: CallOverrides): Promise<BigNumber>;
        readLine(path: string, overrides?: CallOverrides): Promise<BigNumber>;
        readLink(linkPath: string, overrides?: CallOverrides): Promise<BigNumber>;
        record(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        recordLogs(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rememberKey(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "rememberKeys(string,string,uint32)"(mnemonic: string, derivationPath: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "rememberKeys(string,string,string,uint32)"(mnemonic: string, derivationPath: string, language: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeDir(path: string, recursive: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        removeFile(path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        replace(input: string, from: string, to: string, overrides?: CallOverrides): Promise<BigNumber>;
        resetGasMetering(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resetNonce(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resumeGasMetering(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        resumeTracing(overrides?: CallOverrides): Promise<BigNumber>;
        revertTo(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revertToAndDelete(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revertToState(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        revertToStateAndDelete(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "revokePersistent(address[])"(accounts: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "revokePersistent(address)"(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        roll(newHeight: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "rollFork(bytes32)"(txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "rollFork(uint256,uint256)"(forkId: BigNumberish, blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "rollFork(uint256)"(blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "rollFork(uint256,bytes32)"(forkId: BigNumberish, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "rpc(string,string,string)"(urlOrAlias: string, method: string, params: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "rpc(string,string)"(method: string, params: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        rpcUrl(rpcAlias: string, overrides?: CallOverrides): Promise<BigNumber>;
        rpcUrlStructs(overrides?: CallOverrides): Promise<BigNumber>;
        rpcUrls(overrides?: CallOverrides): Promise<BigNumber>;
        selectFork(forkId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeAddress(string,string,address[])"(objectKey: string, valueKey: string, values: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeAddress(string,string,address)"(objectKey: string, valueKey: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeBool(string,string,bool[])"(objectKey: string, valueKey: string, values: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeBool(string,string,bool)"(objectKey: string, valueKey: string, value: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeBytes(string,string,bytes[])"(objectKey: string, valueKey: string, values: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeBytes(string,string,bytes)"(objectKey: string, valueKey: string, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeBytes32(string,string,bytes32[])"(objectKey: string, valueKey: string, values: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeBytes32(string,string,bytes32)"(objectKey: string, valueKey: string, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeInt(string,string,int256)"(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeInt(string,string,int256[])"(objectKey: string, valueKey: string, values: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        serializeJson(objectKey: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeJsonType(string,bytes)"(typeDescription: string, value: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "serializeJsonType(string,string,string,bytes)"(objectKey: string, valueKey: string, typeDescription: string, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeString(string,string,string[])"(objectKey: string, valueKey: string, values: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeString(string,string,string)"(objectKey: string, valueKey: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeUint(string,string,uint256)"(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "serializeUint(string,string,uint256[])"(objectKey: string, valueKey: string, values: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        serializeUintToHex(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setArbitraryStorage(target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setBlockhash(blockNumber: BigNumberish, blockHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setEnv(name: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setNonce(account: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setNonceUnsafe(account: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "sign(bytes32)"(digest: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "sign(address,bytes32)"(signer: string, digest: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "sign((address,uint256,uint256,uint256),bytes32)"(wallet: VmSafe.WalletStruct, digest: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "sign(uint256,bytes32)"(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        signAndAttachDelegation(implementation: string, privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "signCompact((address,uint256,uint256,uint256),bytes32)"(wallet: VmSafe.WalletStruct, digest: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "signCompact(address,bytes32)"(signer: string, digest: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "signCompact(bytes32)"(digest: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "signCompact(uint256,bytes32)"(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        signDelegation(implementation: string, privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        signP256(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "skip(bool,string)"(skipTest: boolean, reason: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "skip(bool)"(skipTest: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        sleep(duration: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        snapshot(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "snapshotGasLastCall(string,string)"(group: string, name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "snapshotGasLastCall(string)"(name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        snapshotState(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "snapshotValue(string,uint256)"(name: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "snapshotValue(string,string,uint256)"(group: string, name: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        split(input: string, delimiter: string, overrides?: CallOverrides): Promise<BigNumber>;
        "startBroadcast()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "startBroadcast(address)"(signer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "startBroadcast(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startDebugTraceRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startMappingRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "startPrank(address)"(msgSender: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "startPrank(address,bool)"(msgSender: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "startPrank(address,address)"(msgSender: string, txOrigin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "startPrank(address,address,bool)"(msgSender: string, txOrigin: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "startSnapshotGas(string)"(name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "startSnapshotGas(string,string)"(group: string, name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startStateDiffRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stopAndReturnDebugTraceRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stopAndReturnStateDiff(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stopBroadcast(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stopExpectSafeMemory(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stopMappingRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        stopPrank(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "stopSnapshotGas(string,string)"(group: string, name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "stopSnapshotGas(string)"(name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "stopSnapshotGas()"(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        store(target: string, slot: BytesLike, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "toBase64(string)"(data: string, overrides?: CallOverrides): Promise<BigNumber>;
        "toBase64(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "toBase64URL(string)"(data: string, overrides?: CallOverrides): Promise<BigNumber>;
        "toBase64URL(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        toLowercase(input: string, overrides?: CallOverrides): Promise<BigNumber>;
        "toString(address)"(value: string, overrides?: CallOverrides): Promise<BigNumber>;
        "toString(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "toString(bytes)"(value: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        "toString(bool)"(value: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        "toString(int256)"(value: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "toString(bytes32)"(value: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        toUppercase(input: string, overrides?: CallOverrides): Promise<BigNumber>;
        "transact(uint256,bytes32)"(forkId: BigNumberish, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "transact(bytes32)"(txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        trim(input: string, overrides?: CallOverrides): Promise<BigNumber>;
        tryFfi(commandInput: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        txGasPrice(newGasPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unixTime(overrides?: CallOverrides): Promise<BigNumber>;
        warmSlot(target: string, slot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        warp(newTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        writeFile(path: string, data: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        writeFileBinary(path: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "writeJson(string,string,string)"(json: string, path: string, valueKey: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "writeJson(string,string)"(json: string, path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        writeLine(path: string, data: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "writeToml(string,string,string)"(json: string, path: string, valueKey: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "writeToml(string,string)"(json: string, path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accessList(access: VmSafe.AccessListItemStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        accesses(target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        activeFork(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addr(privateKey: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowCheatcodes(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "assertApproxEqAbs(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqAbs(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqAbs(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqAbs(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqAbsDecimal(uint256,uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqAbsDecimal(int256,int256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqRel(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqRel(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqRel(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqRel(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqRelDecimal(uint256,uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertApproxEqRelDecimal(int256,int256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, maxPercentDelta: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bytes32[],bytes32[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(int256[],int256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(address,address,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(string,string,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(address[],address[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(address[],address[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bool,bool,string)"(left: boolean, right: boolean, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(address,address)"(left: string, right: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(uint256[],uint256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bool[],bool[])"(left: boolean[], right: boolean[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(int256[],int256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bytes32,bytes32)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(uint256[],uint256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bytes,bytes)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bytes32,bytes32,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(string[],string[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bytes32[],bytes32[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bytes,bytes,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bool[],bool[],string)"(left: boolean[], right: boolean[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bytes[],bytes[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(string[],string[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(string,string)"(left: string, right: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bytes[],bytes[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(bool,bool)"(left: boolean, right: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEq(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEqDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEqDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEqDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertEqDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertFalse(bool,string)"(condition: boolean, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertFalse(bool)"(condition: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGe(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGe(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGe(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGe(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGeDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGeDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGeDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGeDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGt(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGt(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGt(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGt(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGtDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGtDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGtDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertGtDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLe(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLe(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLe(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLe(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLeDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLeDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLeDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLeDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLt(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLt(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLt(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLt(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLtDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLtDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLtDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertLtDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bytes32[],bytes32[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(int256[],int256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bool,bool,string)"(left: boolean, right: boolean, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bytes[],bytes[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bool,bool)"(left: boolean, right: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bool[],bool[])"(left: boolean[], right: boolean[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bytes,bytes)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(address[],address[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(int256,int256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(uint256[],uint256[])"(left: BigNumberish[], right: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bool[],bool[],string)"(left: boolean[], right: boolean[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(string,string)"(left: string, right: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(address[],address[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(string,string,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(address,address,string)"(left: string, right: string, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bytes32,bytes32)"(left: BytesLike, right: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bytes,bytes,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(uint256[],uint256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(address,address)"(left: string, right: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bytes32,bytes32,string)"(left: BytesLike, right: BytesLike, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(string[],string[],string)"(left: string[], right: string[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(uint256,uint256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bytes32[],bytes32[],string)"(left: BytesLike[], right: BytesLike[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(string[],string[])"(left: string[], right: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(int256[],int256[],string)"(left: BigNumberish[], right: BigNumberish[], error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(bytes[],bytes[])"(left: BytesLike[], right: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEq(int256,int256)"(left: BigNumberish, right: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEqDecimal(int256,int256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEqDecimal(int256,int256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEqDecimal(uint256,uint256,uint256)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertNotEqDecimal(uint256,uint256,uint256,string)"(left: BigNumberish, right: BigNumberish, decimals: BigNumberish, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertTrue(bool)"(condition: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assertTrue(bool,string)"(condition: boolean, error: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        assume(condition: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assumeNoRevert()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assumeNoRevert((address,bool,bytes)[])"(potentialReverts: VmSafe.PotentialRevertStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "assumeNoRevert((address,bool,bytes))"(potentialRevert: VmSafe.PotentialRevertStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        attachDelegation(signedDelegation: VmSafe.SignedDelegationStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        blobBaseFee(newBlobBaseFee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        blobhashes(hashes: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "breakpoint(string)"(char: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "breakpoint(string,bool)"(char: string, value: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "broadcast()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "broadcast(address)"(signer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "broadcast(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        broadcastRawTransaction(data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        chainId(newChainId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        clearMockedCalls(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        cloneAccount(source: string, target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        closeFile(path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        coinbase(newCoinbase: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "computeCreate2Address(bytes32,bytes32)"(salt: BytesLike, initCodeHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "computeCreate2Address(bytes32,bytes32,address)"(salt: BytesLike, initCodeHash: BytesLike, deployer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        computeCreateAddress(deployer: string, nonce: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contains(subject: string, search: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        cool(target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        coolSlot(target: string, slot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        copyFile(from: string, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        copyStorage(from: string, to: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        createDir(path: string, recursive: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "createFork(string)"(urlOrAlias: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "createFork(string,uint256)"(urlOrAlias: string, blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "createFork(string,bytes32)"(urlOrAlias: string, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "createSelectFork(string,uint256)"(urlOrAlias: string, blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "createSelectFork(string,bytes32)"(urlOrAlias: string, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "createSelectFork(string)"(urlOrAlias: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "createWallet(string)"(walletLabel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "createWallet(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "createWallet(uint256,string)"(privateKey: BigNumberish, walletLabel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deal(account: string, newBalance: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deleteSnapshot(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deleteSnapshots(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deleteStateSnapshot(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        deleteStateSnapshots(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "deployCode(string,bytes)"(artifactPath: string, constructorArgs: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "deployCode(string)"(artifactPath: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "deriveKey(string,string,uint32,string)"(mnemonic: string, derivationPath: string, index: BigNumberish, language: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "deriveKey(string,uint32,string)"(mnemonic: string, index: BigNumberish, language: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "deriveKey(string,uint32)"(mnemonic: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "deriveKey(string,string,uint32)"(mnemonic: string, derivationPath: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        difficulty(newDifficulty: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        dumpState(pathToStateJson: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        ensNamehash(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envAddress(string)"(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envAddress(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBool(string)"(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBool(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBytes(string)"(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBytes(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBytes32(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envBytes32(string)"(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        envExists(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envInt(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envInt(string)"(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,string,bytes32[])"(name: string, delim: string, defaultValue: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,string,int256[])"(name: string, delim: string, defaultValue: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,bool)"(name: string, defaultValue: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,address)"(name: string, defaultValue: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,uint256)"(name: string, defaultValue: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,string,bytes[])"(name: string, delim: string, defaultValue: BytesLike[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,string,uint256[])"(name: string, delim: string, defaultValue: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,string,string[])"(name: string, delim: string, defaultValue: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,bytes)"(name: string, defaultValue: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,bytes32)"(name: string, defaultValue: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,int256)"(name: string, defaultValue: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,string,address[])"(name: string, delim: string, defaultValue: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,string)"(name: string, defaultValue: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envOr(string,string,bool[])"(name: string, delim: string, defaultValue: boolean[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envString(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envString(string)"(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envUint(string)"(name: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "envUint(string,string)"(name: string, delim: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        etch(target: string, newRuntimeBytecode: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        eth_getLogs(fromBlock: BigNumberish, toBlock: BigNumberish, target: string, topics: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        exists(path: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "expectCall(address,uint256,uint64,bytes)"(callee: string, msgValue: BigNumberish, gas: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectCall(address,uint256,uint64,bytes,uint64)"(callee: string, msgValue: BigNumberish, gas: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectCall(address,uint256,bytes,uint64)"(callee: string, msgValue: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectCall(address,bytes)"(callee: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectCall(address,bytes,uint64)"(callee: string, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectCall(address,uint256,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectCallMinGas(address,uint256,uint64,bytes)"(callee: string, msgValue: BigNumberish, minGas: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectCallMinGas(address,uint256,uint64,bytes,uint64)"(callee: string, msgValue: BigNumberish, minGas: BigNumberish, data: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        expectCreate(bytecode: BytesLike, deployer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        expectCreate2(bytecode: BytesLike, deployer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmit()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmit(bool,bool,bool,bool)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmit(uint64)"(count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmit(bool,bool,bool,bool,uint64)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmit(bool,bool,bool,bool,address)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmit(address)"(emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmit(address,uint64)"(emitter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmit(bool,bool,bool,bool,address,uint64)"(checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmitAnonymous()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmitAnonymous(address)"(emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmitAnonymous(bool,bool,bool,bool,bool,address)"(checkTopic0: boolean, checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, emitter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectEmitAnonymous(bool,bool,bool,bool,bool)"(checkTopic0: boolean, checkTopic1: boolean, checkTopic2: boolean, checkTopic3: boolean, checkData: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectPartialRevert(bytes4)"(revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectPartialRevert(bytes4,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert(address,uint64)"(reverter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert(bytes4,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert(bytes,uint64)"(revertData: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert(uint64)"(count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert(bytes,address)"(revertData: BytesLike, reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert(bytes4,address,uint64)"(revertData: BytesLike, reverter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert(bytes4)"(revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert(bytes,address,uint64)"(revertData: BytesLike, reverter: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert(address)"(reverter: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert(bytes4,uint64)"(revertData: BytesLike, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert(bytes)"(revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "expectRevert()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        expectSafeMemory(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        expectSafeMemoryCall(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        fee(newBasefee: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        ffi(commandInput: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        foundryVersionAtLeast(version: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        foundryVersionCmp(version: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fsMetadata(path: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getArtifactPathByCode(code: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getArtifactPathByDeployedCode(deployedCode: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBlobBaseFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBlobhashes(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBlockTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBroadcast(contractName: string, chainId: BigNumberish, txType: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getBroadcasts(string,uint64)"(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getBroadcasts(string,uint64,uint8)"(contractName: string, chainId: BigNumberish, txType: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCode(artifactPath: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDeployedCode(artifactPath: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getDeployment(string,uint64)"(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getDeployment(string)"(contractName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDeployments(contractName: string, chainId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFoundryVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLabel(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMappingKeyAndParentOf(target: string, elementSlot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getMappingLength(target: string, mappingSlot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getMappingSlotAt(target: string, mappingSlot: BytesLike, idx: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "getNonce(address)"(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "getNonce((address,uint256,uint256,uint256))"(wallet: VmSafe.WalletStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getRecordedLogs(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getStateDiff(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStateDiffJson(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWallets(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        indexOf(input: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isContext(context: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isDir(path: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFile(path: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPersistent(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keyExists(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keyExistsJson(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        keyExistsToml(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        label(account: string, newLabel: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        lastCallGas(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        load(target: string, slot: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        loadAllocs(pathToAllocsJson: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "makePersistent(address[])"(accounts: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "makePersistent(address,address)"(account0: string, account1: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "makePersistent(address)"(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "makePersistent(address,address,address)"(account0: string, account1: string, account2: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mockCall(address,bytes4,bytes)"(callee: string, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mockCall(address,uint256,bytes,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mockCall(address,bytes,bytes)"(callee: string, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mockCall(address,uint256,bytes4,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mockCallRevert(address,bytes4,bytes)"(callee: string, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mockCallRevert(address,uint256,bytes4,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mockCallRevert(address,uint256,bytes,bytes)"(callee: string, msgValue: BigNumberish, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mockCallRevert(address,bytes,bytes)"(callee: string, data: BytesLike, revertData: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mockCalls(address,uint256,bytes,bytes[])"(callee: string, msgValue: BigNumberish, data: BytesLike, returnData: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "mockCalls(address,bytes,bytes[])"(callee: string, data: BytesLike, returnData: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        mockFunction(callee: string, target: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        noAccessList(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        parseAddress(stringifiedValue: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseBool(stringifiedValue: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseBytes(stringifiedValue: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseBytes32(stringifiedValue: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseInt(stringifiedValue: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "parseJson(string)"(json: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "parseJson(string,string)"(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonAddress(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonAddressArray(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonBool(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonBoolArray(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonBytes(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonBytes32(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonBytes32Array(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonBytesArray(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonInt(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonIntArray(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonKeys(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonString(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonStringArray(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "parseJsonType(string,string)"(json: string, typeDescription: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "parseJsonType(string,string,string)"(json: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonTypeArray(json: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonUint(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseJsonUintArray(json: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "parseToml(string,string)"(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "parseToml(string)"(toml: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlAddress(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlAddressArray(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlBool(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlBoolArray(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlBytes(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlBytes32(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlBytes32Array(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlBytesArray(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlInt(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlIntArray(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlKeys(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlString(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlStringArray(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "parseTomlType(string,string)"(toml: string, typeDescription: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "parseTomlType(string,string,string)"(toml: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlTypeArray(toml: string, key: string, typeDescription: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlUint(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseTomlUintArray(toml: string, key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        parseUint(stringifiedValue: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauseGasMetering(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pauseTracing(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "prank(address,address)"(msgSender: string, txOrigin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "prank(address,address,bool)"(msgSender: string, txOrigin: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "prank(address,bool)"(msgSender: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "prank(address)"(msgSender: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "prevrandao(bytes32)"(newPrevrandao: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "prevrandao(uint256)"(newPrevrandao: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        projectRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        prompt(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        promptAddress(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        promptSecret(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        promptSecretUint(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        promptUint(promptText: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        publicKeyP256(privateKey: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        randomAddress(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        randomBool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        randomBytes(len: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        randomBytes4(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        randomBytes8(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "randomInt()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "randomInt(uint256)"(bits: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "randomUint()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "randomUint(uint256)"(bits: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "randomUint(uint256,uint256)"(min: BigNumberish, max: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        readCallers(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "readDir(string,uint64)"(path: string, maxDepth: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "readDir(string,uint64,bool)"(path: string, maxDepth: BigNumberish, followLinks: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "readDir(string)"(path: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readFile(path: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readFileBinary(path: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readLine(path: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        readLink(linkPath: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        record(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        recordLogs(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rememberKey(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "rememberKeys(string,string,uint32)"(mnemonic: string, derivationPath: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "rememberKeys(string,string,string,uint32)"(mnemonic: string, derivationPath: string, language: string, count: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeDir(path: string, recursive: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        removeFile(path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        replace(input: string, from: string, to: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        resetGasMetering(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resetNonce(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resumeGasMetering(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        resumeTracing(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        revertTo(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revertToAndDelete(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revertToState(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        revertToStateAndDelete(snapshotId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "revokePersistent(address[])"(accounts: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "revokePersistent(address)"(account: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        roll(newHeight: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "rollFork(bytes32)"(txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "rollFork(uint256,uint256)"(forkId: BigNumberish, blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "rollFork(uint256)"(blockNumber: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "rollFork(uint256,bytes32)"(forkId: BigNumberish, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "rpc(string,string,string)"(urlOrAlias: string, method: string, params: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "rpc(string,string)"(method: string, params: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        rpcUrl(rpcAlias: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rpcUrlStructs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rpcUrls(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        selectFork(forkId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeAddress(string,string,address[])"(objectKey: string, valueKey: string, values: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeAddress(string,string,address)"(objectKey: string, valueKey: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeBool(string,string,bool[])"(objectKey: string, valueKey: string, values: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeBool(string,string,bool)"(objectKey: string, valueKey: string, value: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeBytes(string,string,bytes[])"(objectKey: string, valueKey: string, values: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeBytes(string,string,bytes)"(objectKey: string, valueKey: string, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeBytes32(string,string,bytes32[])"(objectKey: string, valueKey: string, values: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeBytes32(string,string,bytes32)"(objectKey: string, valueKey: string, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeInt(string,string,int256)"(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeInt(string,string,int256[])"(objectKey: string, valueKey: string, values: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        serializeJson(objectKey: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeJsonType(string,bytes)"(typeDescription: string, value: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "serializeJsonType(string,string,string,bytes)"(objectKey: string, valueKey: string, typeDescription: string, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeString(string,string,string[])"(objectKey: string, valueKey: string, values: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeString(string,string,string)"(objectKey: string, valueKey: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeUint(string,string,uint256)"(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "serializeUint(string,string,uint256[])"(objectKey: string, valueKey: string, values: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        serializeUintToHex(objectKey: string, valueKey: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setArbitraryStorage(target: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setBlockhash(blockNumber: BigNumberish, blockHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setEnv(name: string, value: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setNonce(account: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setNonceUnsafe(account: string, newNonce: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "sign(bytes32)"(digest: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "sign(address,bytes32)"(signer: string, digest: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "sign((address,uint256,uint256,uint256),bytes32)"(wallet: VmSafe.WalletStruct, digest: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "sign(uint256,bytes32)"(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signAndAttachDelegation(implementation: string, privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "signCompact((address,uint256,uint256,uint256),bytes32)"(wallet: VmSafe.WalletStruct, digest: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "signCompact(address,bytes32)"(signer: string, digest: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "signCompact(bytes32)"(digest: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "signCompact(uint256,bytes32)"(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        signDelegation(implementation: string, privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        signP256(privateKey: BigNumberish, digest: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "skip(bool,string)"(skipTest: boolean, reason: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "skip(bool)"(skipTest: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        sleep(duration: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        snapshot(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "snapshotGasLastCall(string,string)"(group: string, name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "snapshotGasLastCall(string)"(name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        snapshotState(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "snapshotValue(string,uint256)"(name: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "snapshotValue(string,string,uint256)"(group: string, name: string, value: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        split(input: string, delimiter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "startBroadcast()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "startBroadcast(address)"(signer: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "startBroadcast(uint256)"(privateKey: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startDebugTraceRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startMappingRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "startPrank(address)"(msgSender: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "startPrank(address,bool)"(msgSender: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "startPrank(address,address)"(msgSender: string, txOrigin: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "startPrank(address,address,bool)"(msgSender: string, txOrigin: string, delegateCall: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "startSnapshotGas(string)"(name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "startSnapshotGas(string,string)"(group: string, name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startStateDiffRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stopAndReturnDebugTraceRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stopAndReturnStateDiff(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stopBroadcast(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stopExpectSafeMemory(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stopMappingRecording(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        stopPrank(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "stopSnapshotGas(string,string)"(group: string, name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "stopSnapshotGas(string)"(name: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "stopSnapshotGas()"(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        store(target: string, slot: BytesLike, value: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "toBase64(string)"(data: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toBase64(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toBase64URL(string)"(data: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toBase64URL(bytes)"(data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        toLowercase(input: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toString(address)"(value: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toString(uint256)"(value: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toString(bytes)"(value: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toString(bool)"(value: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toString(int256)"(value: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "toString(bytes32)"(value: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        toUppercase(input: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "transact(uint256,bytes32)"(forkId: BigNumberish, txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "transact(bytes32)"(txHash: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        trim(input: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tryFfi(commandInput: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        txGasPrice(newGasPrice: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unixTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        warmSlot(target: string, slot: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        warp(newTimestamp: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        writeFile(path: string, data: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        writeFileBinary(path: string, data: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "writeJson(string,string,string)"(json: string, path: string, valueKey: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "writeJson(string,string)"(json: string, path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        writeLine(path: string, data: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "writeToml(string,string,string)"(json: string, path: string, valueKey: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "writeToml(string,string)"(json: string, path: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
