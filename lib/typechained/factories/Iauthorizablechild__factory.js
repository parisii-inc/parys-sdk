"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iauthorizablechild__factory = void 0;
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
        name: "factory",
        inputs: [],
        outputs: [
            {
                name: "_factory",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
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
        name: "CallerNotFactory",
        inputs: [],
    },
    {
        type: "error",
        name: "NotAuthorized",
        inputs: [],
    },
    {
        type: "error",
        name: "NotFactoryDeployment",
        inputs: [],
    },
    {
        type: "error",
        name: "Unauthorized",
        inputs: [],
    },
];
var Iauthorizablechild__factory = exports.Iauthorizablechild__factory = /** @class */ (function () {
    function Iauthorizablechild__factory() {
    }
    Iauthorizablechild__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Iauthorizablechild__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Iauthorizablechild__factory.abi = _abi;
    return Iauthorizablechild__factory;
}());
//# sourceMappingURL=Iauthorizablechild__factory.js.map