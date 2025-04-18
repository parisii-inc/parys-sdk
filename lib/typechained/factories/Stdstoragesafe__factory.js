"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stdstoragesafe__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "event",
        name: "SlotFound",
        inputs: [
            {
                name: "who",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "fsig",
                type: "bytes4",
                indexed: false,
                internalType: "bytes4",
            },
            {
                name: "keysHash",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
            {
                name: "slot",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "WARNING_UninitedSlot",
        inputs: [
            {
                name: "who",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "slot",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
];
var Stdstoragesafe__factory = exports.Stdstoragesafe__factory = /** @class */ (function () {
    function Stdstoragesafe__factory() {
    }
    Stdstoragesafe__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Stdstoragesafe__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Stdstoragesafe__factory.abi = _abi;
    return Stdstoragesafe__factory;
}());
//# sourceMappingURL=Stdstoragesafe__factory.js.map