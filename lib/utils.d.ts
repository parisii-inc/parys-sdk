import { BigNumberish, BigNumber, FixedNumber } from '@ethersproject/bignumber';
/**
 * byte32 value for the "ETH-A" collateral
 */
declare const ETH_A = "0x4554482d41000000000000000000000000000000000000000000000000000000";
/**
 * byte32 value for the "WETH" collateral
 */
declare const WETH = "0x5745544800000000000000000000000000000000000000000000000000000000";
/**
 * byte32 value for the "OP" collateral
 */
declare const OP = "0x4f50000000000000000000000000000000000000000000000000000000000000";
/**
 * byte32 value for the "PEUA" collateral
 */
declare const PEUA = "0x5045554100000000000000000000000000000000000000000000000000000000";
/**
 * byte32 value for the "PBJO" collateral
 */
declare const PBJO = "0x50424a4f00000000000000000000000000000000000000000000000000000000";
/**
 * 0x0 address or burn address
 */
declare const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
/**
 * Constant 10^18
 */
declare const WAD: BigNumber;
/**
 * Constant 10^27
 */
declare const RAY: BigNumber;
/**
 * Constant 10^45
 */
declare const RAD: BigNumber;
/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} rad
 */
declare const radToFixed: (rad: BigNumberish) => FixedNumber;
/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} rad
 */
declare const rayToFixed: (ray: BigNumberish) => FixedNumber;
/**
 * Return a fixed number object from a RAD
 * @param  {BigNumberish} wad
 */
declare const wadToFixed: (wad: BigNumberish) => FixedNumber;
/**
 * Multiply by the power of 10 !! Precision loss if shift < 0 !!
 * @param val Value to convert
 * @param shift Number of places to shift the decimal
 */
declare const decimalShift: (val: BigNumberish, shift: number) => BigNumber;
/**
 * Given any kind of error object from an Ethereum RPC, this Will look for an error string from a Solidity require statement. Returns null if not found.
 * @param  {any} RPC error object of any kind
 * @returns string
 */
declare const getRequireString: (error: any) => string | null;
export { WETH, PEUA, PBJO, OP, ETH_A, NULL_ADDRESS, WAD, RAY, RAD, wadToFixed, rayToFixed, radToFixed, decimalShift, getRequireString, };
