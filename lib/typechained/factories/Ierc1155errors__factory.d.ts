import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Ierc1155errors, Ierc1155errorsInterface } from "../Ierc1155errors";
export declare class Ierc1155errors__factory {
    static readonly abi: readonly [{
        readonly type: "error";
        readonly name: "ERC1155InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "needed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155InvalidApprover";
        readonly inputs: readonly [{
            readonly name: "approver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155InvalidArrayLength";
        readonly inputs: readonly [{
            readonly name: "idsLength";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "valuesLength";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155InvalidOperator";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155InvalidReceiver";
        readonly inputs: readonly [{
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155InvalidSender";
        readonly inputs: readonly [{
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "ERC1155MissingApprovalForAll";
        readonly inputs: readonly [{
            readonly name: "operator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    static createInterface(): Ierc1155errorsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Ierc1155errors;
}
