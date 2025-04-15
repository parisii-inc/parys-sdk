import { BigNumber } from 'ethers';
import { Geb } from '../geb';
interface SafeData {
    addy: string;
    id: BigNumber;
    lockedCollateral: BigNumber;
    freeCollateral: BigNumber;
    generatedDebt: BigNumber;
    collateralType: string;
}
export declare function fetchUserSafes(geb: Geb, userAddress: string): Promise<[BigNumber, SafeData[]]>;
export {};
