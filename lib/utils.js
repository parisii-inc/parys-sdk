"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequireString = exports.decimalShift = exports.radToFixed = exports.rayToFixed = exports.wadToFixed = exports.RAD = exports.RAY = exports.WAD = exports.NULL_ADDRESS = exports.ETH_A = exports.OP = exports.PBJO = exports.PEUA = exports.WETH = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
// === Constants ===
/**
 * byte32 value for the "ETH-A" collateral
 */
var ETH_A = '0x4554482d41000000000000000000000000000000000000000000000000000000';
exports.ETH_A = ETH_A;
/**
 * byte32 value for the "WETH" collateral
 */
var WETH = '0x5745544800000000000000000000000000000000000000000000000000000000';
exports.WETH = WETH;
/**
 * byte32 value for the "OP" collateral
 */
var OP = '0x4f50000000000000000000000000000000000000000000000000000000000000';
exports.OP = OP;
/**
 * byte32 value for the "PEUA" collateral
 */
var PEUA = '0x5045554100000000000000000000000000000000000000000000000000000000';
exports.PEUA = PEUA;
/**
 * byte32 value for the "PBJO" collateral
 */
var PBJO = '0x50424a4f00000000000000000000000000000000000000000000000000000000';
exports.PBJO = PBJO;
/**
 * 0x0 address or burn address
 */
var NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
exports.NULL_ADDRESS = NULL_ADDRESS;
/**
 * Constant 10^18
 */
var WAD = bignumber_1.BigNumber.from('1000000000000000000');
exports.WAD = WAD;
/**
 * Constant 10^27
 */
var RAY = bignumber_1.BigNumber.from('1000000000000000000000000000');
exports.RAY = RAY;
/**
 * Constant 10^45
 */
var RAD = bignumber_1.BigNumber.from('1000000000000000000000000000000000000000000000');
exports.RAD = RAD;
// ==== Utils functions ===
/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} rad
 */
var radToFixed = function (rad) {
    return bignumber_1.FixedNumber.fromValue(bignumber_1.BigNumber.from(rad), 45, 'fixed256x45');
};
exports.radToFixed = radToFixed;
/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} rad
 */
var rayToFixed = function (ray) {
    return bignumber_1.FixedNumber.fromValue(bignumber_1.BigNumber.from(ray), 27, 'fixed256x27');
};
exports.rayToFixed = rayToFixed;
/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} wad
 */
var wadToFixed = function (wad) {
    return bignumber_1.FixedNumber.fromValue(bignumber_1.BigNumber.from(wad), 18, 'fixed256x18');
};
exports.wadToFixed = wadToFixed;
/**
 * Multiply by the power of 10 !! Precision loss if shift < 0 !!
 * @param val Value to convert
 * @param shift Number of places to shift the decimal
 */
var decimalShift = function (val, shift) {
    if (shift > 0) {
        return bignumber_1.BigNumber.from(val).mul(bignumber_1.BigNumber.from(10).pow(shift));
    }
    else if (shift < 0) {
        return bignumber_1.BigNumber.from(val).div(bignumber_1.BigNumber.from(10).pow(Math.abs(shift)));
    }
    else {
        bignumber_1.BigNumber.from(val);
    }
    return bignumber_1.BigNumber.from(val);
};
exports.decimalShift = decimalShift;
/**
 * Given any kind of error object from an Ethereum RPC, this Will look for an error string from a Solidity require statement. Returns null if not found.
 * @param  {any} RPC error object of any kind
 * @returns string
 */
var getRequireString = function (error) {
    // Stringify to object
    var str;
    try {
        str = JSON.stringify(error);
    }
    catch (_a) {
        return null;
    }
    // Search for the require error string selector 0x08c379a0
    var hexerrorArray = str.match(/0x08c379a0[0-9a-fA-F]*/g);
    if (hexerrorArray) {
        // Convert from hex to UTF-8 string
        return decodeURIComponent(hexerrorArray[0].slice(12).replace(/[0-9a-f]{2}/g, '%$&'))
            .replace(/\0/g, '')
            .slice(2);
    }
    else {
        return null;
    }
};
exports.getRequireString = getRequireString;
//# sourceMappingURL=utils.js.map