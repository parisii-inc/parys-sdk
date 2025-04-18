"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC165__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "supportsInterface",
        inputs: [
            {
                name: "interfaceId",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
];
var ERC165__factory = exports.ERC165__factory = /** @class */ (function () {
    function ERC165__factory() {
    }
    ERC165__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC165__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC165__factory.abi = _abi;
    return ERC165__factory;
}());
//# sourceMappingURL=ERC165__factory.js.map