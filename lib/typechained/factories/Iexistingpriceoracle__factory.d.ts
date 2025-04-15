import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Iexistingpriceoracle, IexistingpriceoracleInterface } from "../Iexistingpriceoracle";
export declare class Iexistingpriceoracle__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "getPrice";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "lastUpdatedBlock";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "metadata";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): IexistingpriceoracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Iexistingpriceoracle;
}
