"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILiquidationJob__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "addAuthorization",
        inputs: [
            {
                name: "_account",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "authorizedAccounts",
        inputs: [
            {
                name: "_account",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "_authorized",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "authorizedAccounts",
        inputs: [],
        outputs: [
            {
                name: "_accounts",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "liquidationEngine",
        inputs: [],
        outputs: [
            {
                name: "_liquidationEngine",
                type: "address",
                internalType: "contract ILiquidationEngine",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "modifyParameters",
        inputs: [
            {
                name: "_param",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_data",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "removeAuthorization",
        inputs: [
            {
                name: "_account",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "rewardAmount",
        inputs: [],
        outputs: [
            {
                name: "_rewardAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "shouldWork",
        inputs: [],
        outputs: [
            {
                name: "_shouldWork",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "stabilityFeeTreasury",
        inputs: [],
        outputs: [
            {
                name: "_stabilityFeeTreasury",
                type: "address",
                internalType: "contract IStabilityFeeTreasury",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "workLiquidation",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_safe",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "AddAuthorization",
        inputs: [
            {
                name: "_account",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "ModifyParameters",
        inputs: [
            {
                name: "_param",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "_cType",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "_data",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RemoveAuthorization",
        inputs: [
            {
                name: "_account",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Rewarded",
        inputs: [
            {
                name: "_rewardedAccount",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "_rewardAmount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "AlreadyAuthorized",
        inputs: [],
    },
    {
        type: "error",
        name: "NotAuthorized",
        inputs: [],
    },
    {
        type: "error",
        name: "NotWorkable",
        inputs: [],
    },
    {
        type: "error",
        name: "Unauthorized",
        inputs: [],
    },
    {
        type: "error",
        name: "UnrecognizedCType",
        inputs: [],
    },
    {
        type: "error",
        name: "UnrecognizedParam",
        inputs: [],
    },
];
var ILiquidationJob__factory = exports.ILiquidationJob__factory = /** @class */ (function () {
    function ILiquidationJob__factory() {
    }
    ILiquidationJob__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ILiquidationJob__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ILiquidationJob__factory.abi = _abi;
    return ILiquidationJob__factory;
}());
//# sourceMappingURL=ILiquidationJob__factory.js.map