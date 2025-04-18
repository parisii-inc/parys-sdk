"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICollateralAuctionHouseFactory__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "_cParams",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "_minimumBid",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_minDiscount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_maxDiscount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_perSecondDiscountUpdateRate",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
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
        name: "cParams",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "_cahParams",
                type: "tuple",
                internalType: "struct ICollateralAuctionHouse.CollateralAuctionHouseParams",
                components: [
                    {
                        name: "minimumBid",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "minDiscount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "maxDiscount",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "perSecondDiscountUpdateRate",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "collateralAuctionHouses",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "_collateralAuctionHouse",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "collateralAuctionHousesList",
        inputs: [],
        outputs: [
            {
                name: "_collateralAuctionHouses",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "collateralList",
        inputs: [],
        outputs: [
            {
                name: "__collateralList",
                type: "bytes32[]",
                internalType: "bytes32[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "initializeCollateralType",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_collateralParams",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "liquidationEngine",
        inputs: [],
        outputs: [
            {
                name: "_liquidationEngine",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "modifyParameters",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                internalType: "bytes32",
            },
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
        name: "oracleRelayer",
        inputs: [],
        outputs: [
            {
                name: "_oracleRelayer",
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
        name: "DeployCollateralAuctionHouse",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "_collateralAuctionHouse",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "InitializeCollateralType",
        inputs: [
            {
                name: "_cType",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
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
        type: "error",
        name: "AlreadyAuthorized",
        inputs: [],
    },
    {
        type: "error",
        name: "CollateralTypeAlreadyInitialized",
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
var ICollateralAuctionHouseFactory__factory = exports.ICollateralAuctionHouseFactory__factory = /** @class */ (function () {
    function ICollateralAuctionHouseFactory__factory() {
    }
    ICollateralAuctionHouseFactory__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ICollateralAuctionHouseFactory__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ICollateralAuctionHouseFactory__factory.abi = _abi;
    return ICollateralAuctionHouseFactory__factory;
}());
//# sourceMappingURL=ICollateralAuctionHouseFactory__factory.js.map