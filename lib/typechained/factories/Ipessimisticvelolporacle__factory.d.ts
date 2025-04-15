import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ipessimisticvelolporacle, IpessimisticvelolporacleInterface } from "../Ipessimisticvelolporacle";
export declare class Ipessimisticvelolporacle__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getCurrentPoolPrice";
        readonly inputs: readonly [{
            readonly name: "_pool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_price";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IpessimisticvelolporacleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ipessimisticvelolporacle;
}
