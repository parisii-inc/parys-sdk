import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Iuniv3relayerfactory, Iuniv3relayerfactoryInterface } from "../Iuniv3relayerfactory";
export declare class Iuniv3relayerfactory__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "addAuthorization";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "authorizedAccounts";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_authorized";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "authorizedAccounts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_accounts";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deployUniV3Relayer";
        readonly inputs: readonly [{
            readonly name: "_baseToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_quoteToken";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_feeTier";
            readonly type: "uint24";
            readonly internalType: "uint24";
        }, {
            readonly name: "_quotePeriod";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "_uniV3Relayer";
            readonly type: "address";
            readonly internalType: "contract IBaseOracle";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeAuthorization";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "uniV3RelayersList";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_uniV3RelayersList";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "AddAuthorization";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "NewUniV3Relayer";
        readonly inputs: readonly [{
            readonly name: "_uniV3Relayer";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_baseToken";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_quoteToken";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_feeTier";
            readonly type: "uint24";
            readonly indexed: false;
            readonly internalType: "uint24";
        }, {
            readonly name: "_quotePeriod";
            readonly type: "uint32";
            readonly indexed: false;
            readonly internalType: "uint32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RemoveAuthorization";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AlreadyAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): Iuniv3relayerfactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Iuniv3relayerfactory;
}
