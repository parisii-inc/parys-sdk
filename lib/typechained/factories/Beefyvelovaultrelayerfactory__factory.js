"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beefyvelovaultrelayerfactory__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [],
        stateMutability: "nonpayable",
    },
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
        name: "beefyVeloVaultRelayersList",
        inputs: [],
        outputs: [
            {
                name: "_beefyVeloVaultRelayersList",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "deployBeefyVeloVaultRelayer",
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
        outputs: [
            {
                name: "_beefyVeloVaultRelayer",
                type: "address",
                internalType: "contract IBaseOracle",
            },
        ],
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
        name: "NewBeefyVeloVaultRelayer",
        inputs: [
            {
                name: "_beefyVeloVaultRelayer",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_token0priceSource",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "_token1priceSource",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "_beefyVault",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "_veloPool",
                type: "address",
                indexed: false,
                internalType: "address",
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
        name: "Unauthorized",
        inputs: [],
    },
];
var Beefyvelovaultrelayerfactory__factory = exports.Beefyvelovaultrelayerfactory__factory = /** @class */ (function () {
    function Beefyvelovaultrelayerfactory__factory() {
    }
    Beefyvelovaultrelayerfactory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Beefyvelovaultrelayerfactory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Beefyvelovaultrelayerfactory__factory.abi = _abi;
    return Beefyvelovaultrelayerfactory__factory;
}());
//# sourceMappingURL=Beefyvelovaultrelayerfactory__factory.js.map