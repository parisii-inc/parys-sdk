import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Factorychild, FactorychildInterface } from "../Factorychild";
export declare class Factorychild__factory {
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
    static createInterface(): FactorychildInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Factorychild;
}
