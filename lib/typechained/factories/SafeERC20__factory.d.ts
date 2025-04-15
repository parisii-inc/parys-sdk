import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SafeERC20, SafeERC20Interface } from "../SafeERC20";
export declare class SafeERC20__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "SafeERC20FailedDecreaseAllowance";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "currentAllowance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "requestedDecrease";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "SafeERC20FailedOperation";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    static createInterface(): SafeERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): SafeERC20;
}
