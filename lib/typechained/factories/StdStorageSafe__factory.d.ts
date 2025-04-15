import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { StdStorageSafe, StdStorageSafeInterface } from "../StdStorageSafe";
export declare class StdStorageSafe__factory {
    static readonly abi: readonly [{
        readonly type: "event";
        readonly name: "SlotFound";
        readonly inputs: readonly [{
            readonly name: "who";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fsig";
            readonly type: "bytes4";
            readonly indexed: false;
            readonly internalType: "bytes4";
        }, {
            readonly name: "keysHash";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "slot";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "WARNING_UninitedSlot";
        readonly inputs: readonly [{
            readonly name: "who";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): StdStorageSafeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StdStorageSafe;
}
