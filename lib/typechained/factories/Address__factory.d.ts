import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Address, AddressInterface } from "../Address";
export declare class Address__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "AddressEmptyCode";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "AddressInsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "FailedInnerCall";
        readonly inputs: readonly [];
    }];
    static createInterface(): AddressInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Address;
}
