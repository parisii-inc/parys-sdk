"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mockuniswapv3factory__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "createPool",
        inputs: [
            {
                name: "_tokenA",
                type: "address",
                internalType: "address",
            },
            {
                name: "_tokenB",
                type: "address",
                internalType: "address",
            },
            {
                name: "_fee",
                type: "uint24",
                internalType: "uint24",
            },
        ],
        outputs: [
            {
                name: "_pool",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "enableFeeAmount",
        inputs: [
            {
                name: "",
                type: "uint24",
                internalType: "uint24",
            },
            {
                name: "",
                type: "int24",
                internalType: "int24",
            },
        ],
        outputs: [],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "feeAmountTickSpacing",
        inputs: [
            {
                name: "",
                type: "uint24",
                internalType: "uint24",
            },
        ],
        outputs: [
            {
                name: "_tickSpacing",
                type: "int24",
                internalType: "int24",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "getPool",
        inputs: [
            {
                name: "_tokenA",
                type: "address",
                internalType: "address",
            },
            {
                name: "_tokenB",
                type: "address",
                internalType: "address",
            },
            {
                name: "_fee",
                type: "uint24",
                internalType: "uint24",
            },
        ],
        outputs: [
            {
                name: "_pool",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "_owner",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "event",
        name: "PoolCreated",
        inputs: [
            {
                name: "token0",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "token1",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "fee",
                type: "uint24",
                indexed: true,
                internalType: "uint24",
            },
            {
                name: "tickSpacing",
                type: "int24",
                indexed: false,
                internalType: "int24",
            },
            {
                name: "pool",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
];
var Mockuniswapv3factory__factory = exports.Mockuniswapv3factory__factory = /** @class */ (function () {
    function Mockuniswapv3factory__factory() {
    }
    Mockuniswapv3factory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Mockuniswapv3factory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Mockuniswapv3factory__factory.abi = _abi;
    return Mockuniswapv3factory__factory;
}());
//# sourceMappingURL=Mockuniswapv3factory__factory.js.map