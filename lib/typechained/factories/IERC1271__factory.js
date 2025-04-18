"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC1271__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "isValidSignature",
        inputs: [
            {
                name: "hash",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "signature",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "magicValue",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        stateMutability: "view",
    },
];
var IERC1271__factory = exports.IERC1271__factory = /** @class */ (function () {
    function IERC1271__factory() {
    }
    IERC1271__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IERC1271__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IERC1271__factory.abi = _abi;
    return IERC1271__factory;
}());
//# sourceMappingURL=IERC1271__factory.js.map