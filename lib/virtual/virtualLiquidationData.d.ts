import { BigNumber } from 'ethers';
import { Geb } from '../geb';
import { TokenData } from '../contracts/addresses';
interface LiquidationData {
    redemptionPrice: BigNumber;
    redemptionRate: BigNumber;
    globalDebt: BigNumber;
    globalDebtCeiling: BigNumber;
    safeDebtCeiling: BigNumber;
    tokensLiquidationData: TokenLiquidationData[];
}
export interface TokenLiquidationData {
    accumulatedRate: BigNumber;
    debtFloor: BigNumber;
    liquidationPrice: BigNumber;
    safetyPrice: BigNumber;
    safetyCRatio: BigNumber;
    liquidationCRatio: BigNumber;
    liquidationPenalty: BigNumber;
    stabilityFee: BigNumber;
}
export declare function fetchLiquidationData(geb: Geb, tokensData: {
    [key: string]: TokenData;
}): Promise<LiquidationData>;
export {};
