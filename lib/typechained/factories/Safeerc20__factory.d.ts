import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Safeerc20, Safeerc20Interface } from "../Safeerc20";
export declare class Safeerc20__factory {
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
    static createInterface(): Safeerc20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Safeerc20;
}
