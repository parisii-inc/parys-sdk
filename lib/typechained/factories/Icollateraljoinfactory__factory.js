"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icollateraljoinfactory__factory = void 0;
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
        name: "collateralJoins",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "_collateralJoin",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "collateralJoinsList",
        inputs: [],
        outputs: [
            {
                name: "_collateralJoinsList",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "collateralTypesList",
        inputs: [],
        outputs: [
            {
                name: "_collateralTypesList",
                type: "bytes32[]",
                internalType: "bytes32[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "contractEnabled",
        inputs: [],
        outputs: [
            {
                name: "_contractEnabled",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "deployCollateralJoin",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_collateral",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "_collateralJoin",
                type: "address",
                internalType: "contract ICollateralJoin",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "deployDelegatableCollateralJoin",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_collateral",
                type: "address",
                internalType: "address",
            },
            {
                name: "_delegatee",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "_collateralJoin",
                type: "address",
                internalType: "contract ICollateralJoin",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "disableCollateralJoin",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "disableContract",
        inputs: [],
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
        name: "safeEngine",
        inputs: [],
        outputs: [
            {
                name: "_safeEngine",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
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
        name: "DeployCollateralJoin",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "_collateral",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_collateralJoin",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "DisableCollateralJoin",
        inputs: [
            {
                name: "_collateralJoin",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "DisableContract",
        inputs: [],
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
        name: "CollateralJoinFactory_CollateralJoinExistent",
        inputs: [],
    },
    {
        type: "error",
        name: "CollateralJoinFactory_CollateralJoinNonExistent",
        inputs: [],
    },
    {
        type: "error",
        name: "ContractIsDisabled",
        inputs: [],
    },
    {
        type: "error",
        name: "ContractIsEnabled",
        inputs: [],
    },
    {
        type: "error",
        name: "NonDisableable",
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
var Icollateraljoinfactory__factory = exports.Icollateraljoinfactory__factory = /** @class */ (function () {
    function Icollateraljoinfactory__factory() {
    }
    Icollateraljoinfactory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Icollateraljoinfactory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Icollateraljoinfactory__factory.abi = _abi;
    return Icollateraljoinfactory__factory;
}());
//# sourceMappingURL=Icollateraljoinfactory__factory.js.map