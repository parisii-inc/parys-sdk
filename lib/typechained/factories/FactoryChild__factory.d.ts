import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { FactoryChild, FactoryChildInterface } from "../FactoryChild";
export declare class FactoryChild__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "factory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "error";
        readonly name: "CallerNotFactory";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotFactoryDeployment";
        readonly inputs: readonly [];
    }];
    static createInterface(): FactoryChildInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FactoryChild;
}
