import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ifactorychild, IfactorychildInterface } from "../Ifactorychild";
export declare class Ifactorychild__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "factory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_factory";
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
    static createInterface(): IfactorychildInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ifactorychild;
}
