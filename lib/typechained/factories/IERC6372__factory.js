"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC6372__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "CLOCK_MODE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "clock",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint48",
                internalType: "uint48",
            },
        ],
        stateMutability: "view",
    },
];
var IERC6372__factory = exports.IERC6372__factory = /** @class */ (function () {
    function IERC6372__factory() {
    }
    IERC6372__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IERC6372__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IERC6372__factory.abi = _abi;
    return IERC6372__factory;
}());
//# sourceMappingURL=IERC6372__factory.js.map