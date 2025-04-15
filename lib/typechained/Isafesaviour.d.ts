import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IsafesaviourInterface extends utils.Interface {
    functions: {
        "saveSAFE(address,bytes32,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "saveSAFE"): FunctionFragment;
    encodeFunctionData(functionFragment: "saveSAFE", values: [string, BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "saveSAFE", data: BytesLike): Result;
    events: {};
}
export interface Isafesaviour extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IsafesaviourInterface;
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
        saveSAFE(_liquidator: string, _cType: BytesLike, _safe: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    saveSAFE(_liquidator: string, _cType: BytesLike, _safe: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        saveSAFE(_liquidator: string, _cType: BytesLike, _safe: string, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber,
            BigNumber
        ] & {
            _ok: boolean;
            _collateralAdded: BigNumber;
            _liquidatorReward: BigNumber;
        }>;
    };
    filters: {};
    estimateGas: {
        saveSAFE(_liquidator: string, _cType: BytesLike, _safe: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        saveSAFE(_liquidator: string, _cType: BytesLike, _safe: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
