import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IpessimisticvelolporacleInterface extends utils.Interface {
    functions: {
        "getCurrentPoolPrice(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getCurrentPoolPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "getCurrentPoolPrice", values: [string]): string;
    decodeFunctionResult(functionFragment: "getCurrentPoolPrice", data: BytesLike): Result;
    events: {};
}
export interface Ipessimisticvelolporacle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IpessimisticvelolporacleInterface;
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
        getCurrentPoolPrice(_pool: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            _price: BigNumber;
        }>;
    };
    getCurrentPoolPrice(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        getCurrentPoolPrice(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getCurrentPoolPrice(_pool: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getCurrentPoolPrice(_pool: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
