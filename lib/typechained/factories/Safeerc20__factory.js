"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Safeerc20__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "error",
        name: "SafeERC20FailedDecreaseAllowance",
        inputs: [
            {
                name: "spender",
                type: "address",
                internalType: "address",
            },
            {
                name: "currentAllowance",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "requestedDecrease",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "SafeERC20FailedOperation",
        inputs: [
            {
                name: "token",
                type: "address",
                internalType: "address",
            },
        ],
    },
];
var Safeerc20__factory = exports.Safeerc20__factory = /** @class */ (function () {
    function Safeerc20__factory() {
    }
    Safeerc20__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Safeerc20__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Safeerc20__factory.abi = _abi;
    return Safeerc20__factory;
}());
//# sourceMappingURL=Safeerc20__factory.js.map