import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Tokendistributor, TokendistributorInterface } from "../Tokendistributor";
export declare class Tokendistributor__factory {
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_tokenDistributorParams";
            readonly type: "tuple";
            readonly internalType: "struct ITokenDistributor.TokenDistributorParams";
            readonly components: readonly [{
                readonly name: "root";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "totalClaimable";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "claimPeriodStart";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "claimPeriodEnd";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
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
        readonly name: "canClaim";
        readonly inputs: readonly [{
            readonly name: "_proof";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "_user";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "_claimable";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "claim";
        readonly inputs: readonly [{
            readonly name: "_proof";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "claimAndDelegate";
        readonly inputs: readonly [{
            readonly name: "_proof";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_delegatee";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_expiry";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "_r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "claimPeriodEnd";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "claimPeriodStart";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "claimed";
        readonly inputs: readonly [{
            readonly name: "_user";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "_hasClaimed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
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
        readonly name: "root";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "sweep";
        readonly inputs: readonly [{
            readonly name: "_sweepReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "token";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IProtocolToken";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalClaimable";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "Claimed";
        readonly inputs: readonly [{
            readonly name: "_user";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly type: "event";
        readonly name: "Swept";
        readonly inputs: readonly [{
            readonly name: "_sweepReceiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AlreadyAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoCode";
        readonly inputs: readonly [{
            readonly name: "_contract";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "NotAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotGreaterThan";
        readonly inputs: readonly [{
            readonly name: "_x";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_y";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "NullAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TokenDistributor_ClaimInvalid";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TokenDistributor_ClaimPeriodNotEnded";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): TokendistributorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Tokendistributor;
}
