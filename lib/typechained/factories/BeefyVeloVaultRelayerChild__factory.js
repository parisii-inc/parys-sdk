"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeefyVeloVaultRelayerChild__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_token0priceSource",
                type: "address",
                internalType: "contract IBaseOracle",
            },
            {
                name: "_token1priceSource",
                type: "address",
                internalType: "contract IBaseOracle",
            },
            {
                name: "_beefyVault",
                type: "address",
                internalType: "contract IBeefyVaultV7",
            },
            {
                name: "_veloPool",
                type: "address",
                internalType: "contract IVeloPool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "beefyVault",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IBeefyVaultV7",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "factory",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getResultWithValidity",
        inputs: [],
        outputs: [
            {
                name: "_result",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_validity",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "read",
        inputs: [],
        outputs: [
            {
                name: "_result",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "symbol",
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
        name: "token0priceSource",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IBaseOracle",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "token1priceSource",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IBaseOracle",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "veloPool",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IVeloPool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "error",
        name: "BeefyVeloVaultRelayer_InvalidPriceSource",
        inputs: [],
    },
    {
        type: "error",
        name: "BeefyVeloVaultRelayer_NullBeefyVault",
        inputs: [],
    },
    {
        type: "error",
        name: "BeefyVeloVaultRelayer_NullPriceSource",
        inputs: [],
    },
    {
        type: "error",
        name: "BeefyVeloVaultRelayer_NullVeloPool",
        inputs: [],
    },
    {
        type: "error",
        name: "CallerNotFactory",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidPriceFeed",
        inputs: [],
    },
    {
        type: "error",
        name: "NotFactoryDeployment",
        inputs: [],
    },
];
var BeefyVeloVaultRelayerChild__factory = exports.BeefyVeloVaultRelayerChild__factory = /** @class */ (function () {
    function BeefyVeloVaultRelayerChild__factory() {
    }
    BeefyVeloVaultRelayerChild__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    BeefyVeloVaultRelayerChild__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    BeefyVeloVaultRelayerChild__factory.abi = _abi;
    return BeefyVeloVaultRelayerChild__factory;
}());
//# sourceMappingURL=BeefyVeloVaultRelayerChild__factory.js.map