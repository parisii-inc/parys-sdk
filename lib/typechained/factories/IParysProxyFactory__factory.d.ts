import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IParysProxyFactory, IParysProxyFactoryInterface } from "../IParysProxyFactory";
export declare class IParysProxyFactory__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "build";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_proxy";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "build";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_proxy";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isProxy";
        readonly inputs: readonly [{
            readonly name: "_proxyAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_exists";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "nonces";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "proxies";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_proxy";
            readonly type: "address";
            readonly internalType: "contract IParysProxy";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "Created";
        readonly inputs: readonly [{
            readonly name: "_sender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_proxy";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AlreadyHasProxy";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_proxy";
            readonly type: "address";
            readonly internalType: "contract IParysProxy";
        }];
    }];
    static createInterface(): IParysProxyFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IParysProxyFactory;
}
