import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IYearnVeloVaultRelayerFactory, IYearnVeloVaultRelayerFactoryInterface } from "../IYearnVeloVaultRelayerFactory";
export declare class IYearnVeloVaultRelayerFactory__factory {
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
        readonly name: "deployYearnVeloVaultRelayer";
        readonly inputs: readonly [{
            readonly name: "_yearnVault";
            readonly type: "address";
            readonly internalType: "contract IYearnVault";
        }, {
            readonly name: "_veloPool";
            readonly type: "address";
            readonly internalType: "contract IVeloPool";
        }, {
            readonly name: "_veloLpOracle";
            readonly type: "address";
            readonly internalType: "contract IPessimisticVeloLpOracle";
        }];
        readonly outputs: readonly [{
            readonly name: "_yearnVeloVaultRelayer";
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
        readonly name: "yearnVeloVaultRelayersList";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "_yearnVeloVaultRelayersList";
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
        readonly name: "NewYearnVeloVaultRelayer";
        readonly inputs: readonly [{
            readonly name: "_yearnVeloVaultRelayer";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_yearnVault";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_veloPool";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_veloLpOracle";
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
    static createInterface(): IYearnVeloVaultRelayerFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IYearnVeloVaultRelayerFactory;
}
