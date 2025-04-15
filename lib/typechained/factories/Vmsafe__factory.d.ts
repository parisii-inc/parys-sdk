import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Vmsafe, VmsafeInterface } from "../Vmsafe";
export declare class Vmsafe__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "accesses";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "readSlots";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "writeSlots";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "addr";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "keyAddr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbs";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbs";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbs";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbs";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbsDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbsDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbsDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqAbsDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRel";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRel";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRel";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRel";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRelDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRelDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRelDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertApproxEqRelDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "maxPercentDelta";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "right";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "right";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "right";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "right";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "right";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "right";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "right";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "right";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "right";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "right";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "right";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "right";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "right";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "right";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "right";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "right";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "right";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "right";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "right";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "right";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "right";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "right";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "right";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "right";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertFalse";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertFalse";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertGtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLe";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLeDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLt";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertLtDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "right";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "right";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "right";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "right";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "right";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "right";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "right";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "right";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "right";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "right";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "right";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "right";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "right";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "right";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "right";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "right";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "right";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "right";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "right";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "right";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "right";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }, {
            readonly name: "right";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "right";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "right";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEq";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "right";
            readonly type: "int256";
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertNotEqDecimal";
        readonly inputs: readonly [{
            readonly name: "left";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "right";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertTrue";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assertTrue";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "error";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assume";
        readonly inputs: readonly [{
            readonly name: "condition";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assumeNoRevert";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assumeNoRevert";
        readonly inputs: readonly [{
            readonly name: "potentialReverts";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.PotentialRevert[]";
            readonly components: readonly [{
                readonly name: "reverter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "partialMatch";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "revertData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "assumeNoRevert";
        readonly inputs: readonly [{
            readonly name: "potentialRevert";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.PotentialRevert";
            readonly components: readonly [{
                readonly name: "reverter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "partialMatch";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "revertData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "attachDelegation";
        readonly inputs: readonly [{
            readonly name: "signedDelegation";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.SignedDelegation";
            readonly components: readonly [{
                readonly name: "v";
                readonly type: "uint8";
                readonly internalType: "uint8";
            }, {
                readonly name: "r";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "s";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "implementation";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "breakpoint";
        readonly inputs: readonly [{
            readonly name: "char";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "breakpoint";
        readonly inputs: readonly [{
            readonly name: "char";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [{
            readonly name: "signer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcast";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "broadcastRawTransaction";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "closeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "computeCreate2Address";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCodeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "computeCreate2Address";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "initCodeHash";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "deployer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "computeCreateAddress";
        readonly inputs: readonly [{
            readonly name: "deployer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "contains";
        readonly inputs: readonly [{
            readonly name: "subject";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "search";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "copyFile";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "to";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "copied";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "copyStorage";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "recursive";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createWallet";
        readonly inputs: readonly [{
            readonly name: "walletLabel";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "wallet";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Wallet";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "publicKeyX";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "publicKeyY";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "privateKey";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createWallet";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "wallet";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Wallet";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "publicKeyX";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "publicKeyY";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "privateKey";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "createWallet";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "walletLabel";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "wallet";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Wallet";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "publicKeyX";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "publicKeyY";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "privateKey";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deployCode";
        readonly inputs: readonly [{
            readonly name: "artifactPath";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "constructorArgs";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "deployedAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deployCode";
        readonly inputs: readonly [{
            readonly name: "artifactPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "deployedAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "derivationPath";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "language";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "language";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "deriveKey";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "derivationPath";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "index";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "ensNamehash";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "envAddress";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envAddress";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBool";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBool";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes32";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envBytes32";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envExists";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envInt";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envInt";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envOr";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "defaultValue";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envString";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envString";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envUint";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "envUint";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delim";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "eth_getLogs";
        readonly inputs: readonly [{
            readonly name: "fromBlock";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "toBlock";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "topics";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "logs";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.EthGetLogs[]";
            readonly components: readonly [{
                readonly name: "emitter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "topics";
                readonly type: "bytes32[]";
                readonly internalType: "bytes32[]";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "blockHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "blockNumber";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "transactionHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "transactionIndex";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "logIndex";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "removed";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "exists";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "ffi";
        readonly inputs: readonly [{
            readonly name: "commandInput";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "foundryVersionAtLeast";
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "foundryVersionCmp";
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "fsMetadata";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "metadata";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.FsMetadata";
            readonly components: readonly [{
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "length";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "readOnly";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "modified";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "accessed";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "created";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getArtifactPathByCode";
        readonly inputs: readonly [{
            readonly name: "code";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getArtifactPathByDeployedCode";
        readonly inputs: readonly [{
            readonly name: "deployedCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBlobBaseFee";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "blobBaseFee";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBlockNumber";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "height";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBlockTimestamp";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBroadcast";
        readonly inputs: readonly [{
            readonly name: "contractName";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "chainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "txType";
            readonly type: "uint8";
            readonly internalType: "enum VmSafe.BroadcastTxType";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.BroadcastTxSummary";
            readonly components: readonly [{
                readonly name: "txHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "txType";
                readonly type: "uint8";
                readonly internalType: "enum VmSafe.BroadcastTxType";
            }, {
                readonly name: "contractAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "blockNumber";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBroadcasts";
        readonly inputs: readonly [{
            readonly name: "contractName";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "chainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.BroadcastTxSummary[]";
            readonly components: readonly [{
                readonly name: "txHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "txType";
                readonly type: "uint8";
                readonly internalType: "enum VmSafe.BroadcastTxType";
            }, {
                readonly name: "contractAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "blockNumber";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getBroadcasts";
        readonly inputs: readonly [{
            readonly name: "contractName";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "chainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "txType";
            readonly type: "uint8";
            readonly internalType: "enum VmSafe.BroadcastTxType";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.BroadcastTxSummary[]";
            readonly components: readonly [{
                readonly name: "txHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "txType";
                readonly type: "uint8";
                readonly internalType: "enum VmSafe.BroadcastTxType";
            }, {
                readonly name: "contractAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "blockNumber";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "success";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCode";
        readonly inputs: readonly [{
            readonly name: "artifactPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "creationBytecode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployedCode";
        readonly inputs: readonly [{
            readonly name: "artifactPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "runtimeBytecode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployment";
        readonly inputs: readonly [{
            readonly name: "contractName";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "chainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [{
            readonly name: "deployedAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployment";
        readonly inputs: readonly [{
            readonly name: "contractName";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "deployedAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDeployments";
        readonly inputs: readonly [{
            readonly name: "contractName";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "chainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [{
            readonly name: "deployedAddresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getFoundryVersion";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "version";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getLabel";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "currentLabel";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getMappingKeyAndParentOf";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "elementSlot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "found";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "key";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "parent";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getMappingLength";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "mappingSlot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "length";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getMappingSlotAt";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "mappingSlot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "idx";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getNonce";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getNonce";
        readonly inputs: readonly [{
            readonly name: "wallet";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Wallet";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "publicKeyX";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "publicKeyY";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "privateKey";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getRecordedLogs";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "logs";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.Log[]";
            readonly components: readonly [{
                readonly name: "topics";
                readonly type: "bytes32[]";
                readonly internalType: "bytes32[]";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "emitter";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getStateDiff";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "diff";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getStateDiffJson";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "diff";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getWallets";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "wallets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "indexOf";
        readonly inputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "isContext";
        readonly inputs: readonly [{
            readonly name: "context";
            readonly type: "uint8";
            readonly internalType: "enum VmSafe.ForgeContext";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "keyExists";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "keyExistsJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "keyExistsToml";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "label";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "newLabel";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "lastCallGas";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "gas";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Gas";
            readonly components: readonly [{
                readonly name: "gasLimit";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "gasTotalUsed";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "gasMemoryUsed";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "gasRefunded";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "gasRemaining";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "load";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "slot";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "parseAddress";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBool";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBytes";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseBytes32";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseInt";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonAddress";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonAddressArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBool";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBoolArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes32";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytes32Array";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonBytesArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonInt";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonIntArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonKeys";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "keys";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonString";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonStringArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonType";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "typeDescription";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonType";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "typeDescription";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonTypeArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "typeDescription";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonUint";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseJsonUintArray";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseToml";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseToml";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "abiEncodedData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlAddress";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlAddressArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBool";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBoolArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBytes";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBytes32";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBytes32Array";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlBytesArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlInt";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlIntArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlKeys";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "keys";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlString";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlStringArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlType";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "typeDescription";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlType";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "typeDescription";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlTypeArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "typeDescription";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlUint";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseTomlUintArray";
        readonly inputs: readonly [{
            readonly name: "toml";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "key";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "parseUint";
        readonly inputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "parsedValue";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "pauseGasMetering";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "pauseTracing";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "projectRoot";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "prompt";
        readonly inputs: readonly [{
            readonly name: "promptText";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "promptAddress";
        readonly inputs: readonly [{
            readonly name: "promptText";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "promptSecret";
        readonly inputs: readonly [{
            readonly name: "promptText";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "promptSecretUint";
        readonly inputs: readonly [{
            readonly name: "promptText";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "promptUint";
        readonly inputs: readonly [{
            readonly name: "promptText";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "publicKeyP256";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "publicKeyX";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "publicKeyY";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "randomAddress";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "randomBool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "randomBytes";
        readonly inputs: readonly [{
            readonly name: "len";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "randomBytes4";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "randomBytes8";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes8";
            readonly internalType: "bytes8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "randomInt";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "randomInt";
        readonly inputs: readonly [{
            readonly name: "bits";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "randomUint";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "randomUint";
        readonly inputs: readonly [{
            readonly name: "bits";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "randomUint";
        readonly inputs: readonly [{
            readonly name: "min";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "max";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "maxDepth";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "maxDepth";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "followLinks";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "entries";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DirEntry[]";
            readonly components: readonly [{
                readonly name: "errorMessage";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "path";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isDir";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isSymlink";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readFileBinary";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readLine";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "line";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "readLink";
        readonly inputs: readonly [{
            readonly name: "linkPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "targetPath";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "record";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "recordLogs";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rememberKey";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "keyAddr";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rememberKeys";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "derivationPath";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "count";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "keyAddrs";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rememberKeys";
        readonly inputs: readonly [{
            readonly name: "mnemonic";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "derivationPath";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "language";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "count";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "keyAddrs";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeDir";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "recursive";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "removeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "replace";
        readonly inputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "from";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "to";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "output";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "resetGasMetering";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "resumeGasMetering";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "resumeTracing";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rpc";
        readonly inputs: readonly [{
            readonly name: "urlOrAlias";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "method";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "params";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rpc";
        readonly inputs: readonly [{
            readonly name: "method";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "params";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "rpcUrl";
        readonly inputs: readonly [{
            readonly name: "rpcAlias";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rpcUrlStructs";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "urls";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.Rpc[]";
            readonly components: readonly [{
                readonly name: "key";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "url";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rpcUrls";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "urls";
            readonly type: "string[2][]";
            readonly internalType: "string[2][]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "serializeAddress";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeAddress";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBool";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBool";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes32";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeBytes32";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeInt";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeInt";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "int256[]";
            readonly internalType: "int256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeJson";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeJsonType";
        readonly inputs: readonly [{
            readonly name: "typeDescription";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "serializeJsonType";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "typeDescription";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeString";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeString";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeUint";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeUint";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "serializeUintToHex";
        readonly inputs: readonly [{
            readonly name: "objectKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setArbitraryStorage";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setEnv";
        readonly inputs: readonly [{
            readonly name: "name";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "value";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sign";
        readonly inputs: readonly [{
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "sign";
        readonly inputs: readonly [{
            readonly name: "signer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "sign";
        readonly inputs: readonly [{
            readonly name: "wallet";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Wallet";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "publicKeyX";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "publicKeyY";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "privateKey";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "sign";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "signAndAttachDelegation";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "signedDelegation";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.SignedDelegation";
            readonly components: readonly [{
                readonly name: "v";
                readonly type: "uint8";
                readonly internalType: "uint8";
            }, {
                readonly name: "r";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "s";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "implementation";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "signCompact";
        readonly inputs: readonly [{
            readonly name: "wallet";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.Wallet";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "publicKeyX";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "publicKeyY";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "privateKey";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "vs";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "signCompact";
        readonly inputs: readonly [{
            readonly name: "signer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "vs";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "signCompact";
        readonly inputs: readonly [{
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "vs";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "signCompact";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "vs";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "signDelegation";
        readonly inputs: readonly [{
            readonly name: "implementation";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "signedDelegation";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.SignedDelegation";
            readonly components: readonly [{
                readonly name: "v";
                readonly type: "uint8";
                readonly internalType: "uint8";
            }, {
                readonly name: "r";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "s";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "implementation";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "signP256";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "digest";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "sleep";
        readonly inputs: readonly [{
            readonly name: "duration";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "split";
        readonly inputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "delimiter";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "outputs";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [{
            readonly name: "signer";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBroadcast";
        readonly inputs: readonly [{
            readonly name: "privateKey";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startDebugTraceRecording";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startMappingRecording";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startStateDiffRecording";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "stopAndReturnDebugTraceRecording";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "step";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.DebugStep[]";
            readonly components: readonly [{
                readonly name: "stack";
                readonly type: "uint256[]";
                readonly internalType: "uint256[]";
            }, {
                readonly name: "memoryInput";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "opcode";
                readonly type: "uint8";
                readonly internalType: "uint8";
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "isOutOfGas";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "contractAddr";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "stopAndReturnStateDiff";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "accountAccesses";
            readonly type: "tuple[]";
            readonly internalType: "struct VmSafe.AccountAccess[]";
            readonly components: readonly [{
                readonly name: "chainInfo";
                readonly type: "tuple";
                readonly internalType: "struct VmSafe.ChainInfo";
                readonly components: readonly [{
                    readonly name: "forkId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "chainId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "kind";
                readonly type: "uint8";
                readonly internalType: "enum VmSafe.AccountAccessKind";
            }, {
                readonly name: "account";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "accessor";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "initialized";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "oldBalance";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "newBalance";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deployedCode";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "reverted";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "storageAccesses";
                readonly type: "tuple[]";
                readonly internalType: "struct VmSafe.StorageAccess[]";
                readonly components: readonly [{
                    readonly name: "account";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "slot";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "isWrite";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }, {
                    readonly name: "previousValue";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "newValue";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "reverted";
                    readonly type: "bool";
                    readonly internalType: "bool";
                }];
            }, {
                readonly name: "depth";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "stopBroadcast";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "stopMappingRecording";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "toBase64";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toBase64";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toBase64URL";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toBase64URL";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toLowercase";
        readonly inputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "output";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toString";
        readonly inputs: readonly [{
            readonly name: "value";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "stringifiedValue";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "toUppercase";
        readonly inputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "output";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "trim";
        readonly inputs: readonly [{
            readonly name: "input";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [{
            readonly name: "output";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "tryFfi";
        readonly inputs: readonly [{
            readonly name: "commandInput";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "tuple";
            readonly internalType: "struct VmSafe.FfiResult";
            readonly components: readonly [{
                readonly name: "exitCode";
                readonly type: "int32";
                readonly internalType: "int32";
            }, {
                readonly name: "stdout";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "stderr";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "unixTime";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "milliseconds";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "writeFile";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeFileBinary";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeJson";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeLine";
        readonly inputs: readonly [{
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "data";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeToml";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "valueKey";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "writeToml";
        readonly inputs: readonly [{
            readonly name: "json";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "path";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): VmsafeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Vmsafe;
}
