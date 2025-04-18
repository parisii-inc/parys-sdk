"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Safecast__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "error",
        name: "SafeCastOverflowedIntDowncast",
        inputs: [
            {
                name: "bits",
                type: "uint8",
                internalType: "uint8",
            },
            {
                name: "value",
                type: "int256",
                internalType: "int256",
            },
        ],
    },
    {
        type: "error",
        name: "SafeCastOverflowedIntToUint",
        inputs: [
            {
                name: "value",
                type: "int256",
                internalType: "int256",
            },
        ],
    },
    {
        type: "error",
        name: "SafeCastOverflowedUintDowncast",
        inputs: [
            {
                name: "bits",
                type: "uint8",
                internalType: "uint8",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "SafeCastOverflowedUintToInt",
        inputs: [
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
];
var Safecast__factory = exports.Safecast__factory = /** @class */ (function () {
    function Safecast__factory() {
    }
    Safecast__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Safecast__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Safecast__factory.abi = _abi;
    return Safecast__factory;
}());
//# sourceMappingURL=Safecast__factory.js.map