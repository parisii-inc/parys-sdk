import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ibeefyvelovaultrelayerfactory, IbeefyvelovaultrelayerfactoryInterface } from "../Ibeefyvelovaultrelayerfactory";
export declare class Ibeefyvelovaultrelayerfactory__factory {
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
        readonly name: "beefyVeloVaultRelayersList";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_beefyVeloVaultRelayersList";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deployBeefyVeloVaultRelayer";
        readonly inputs: readonly [{
            readonly name: "_token0priceSource";
            readonly type: "address";
            readonly internalType: "contract IBaseOracle";
        }, {
            readonly name: "_token1priceSource";
            readonly type: "address";
            readonly internalType: "contract IBaseOracle";
        }, {
            readonly name: "_beefyVault";
            readonly type: "address";
            readonly internalType: "contract IBeefyVaultV7";
        }, {
            readonly name: "_veloPool";
            readonly type: "address";
            readonly internalType: "contract IVeloPool";
        }];
        readonly outputs: readonly [{
            readonly name: "_beefyVeloVaultRelayer";
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
        readonly name: "NewBeefyVeloVaultRelayer";
        readonly inputs: readonly [{
            readonly name: "_beefyVeloVaultRelayer";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_token0priceSource";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_token1priceSource";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_beefyVault";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_veloPool";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
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
    static createInterface(): IbeefyvelovaultrelayerfactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ibeefyvelovaultrelayerfactory;
}
