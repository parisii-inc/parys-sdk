import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface StdStorageSafeInterface extends utils.Interface {
    functions: {};
    events: {
        "SlotFound(address,bytes4,bytes32,uint256)": EventFragment;
        "WARNING_UninitedSlot(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SlotFound"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WARNING_UninitedSlot"): EventFragment;
}
export interface SlotFoundEventObject {
    who: string;
    fsig: string;
    keysHash: string;
    slot: BigNumber;
}
export type SlotFoundEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], SlotFoundEventObject>;
export type SlotFoundEventFilter = TypedEventFilter<SlotFoundEvent>;
export interface WARNING_UninitedSlotEventObject {
    who: string;
    slot: BigNumber;
}
export type WARNING_UninitedSlotEvent = TypedEvent<[
    string,
    BigNumber
], WARNING_UninitedSlotEventObject>;
export type WARNING_UninitedSlotEventFilter = TypedEventFilter<WARNING_UninitedSlotEvent>;
export interface StdStorageSafe extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StdStorageSafeInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "SlotFound(address,bytes4,bytes32,uint256)"(who?: null, fsig?: null, keysHash?: null, slot?: null): SlotFoundEventFilter;
        SlotFound(who?: null, fsig?: null, keysHash?: null, slot?: null): SlotFoundEventFilter;
        "WARNING_UninitedSlot(address,uint256)"(who?: null, slot?: null): WARNING_UninitedSlotEventFilter;
        WARNING_UninitedSlot(who?: null, slot?: null): WARNING_UninitedSlotEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
