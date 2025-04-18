"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Erc165__factory = void 0;
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
var Erc165__factory = exports.Erc165__factory = /** @class */ (function () {
    function Erc165__factory() {
    }
    Erc165__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Erc165__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Erc165__factory.abi = _abi;
    return Erc165__factory;
}());
//# sourceMappingURL=Erc165__factory.js.map