import { BigNumber } from 'ethers';
import { Geb } from '../geb';
interface TokenAnalyticsData {
    [key: string]: {
        delayedOracle: string;
        debtAmount: BigNumber;
        debtCeiling: BigNumber;
        lockedAmount: BigNumber;
        currentPrice: BigNumber;
        nextPrice: BigNumber;
        stabilityFee: BigNumber;
    };
}
export interface AnalyticsData {
    erc20Supply: string;
    globalDebt: string;
    globalDebtCeiling: string;
    globalUnbackedDebt: string;
    marketPrice: string;
    redemptionPrice: string;
    redemptionRate: string;
    redemptionRatePTerm: string;
    redemptionRateITerm: string;
    surplusInTreasury: string;
    tokenAnalyticsData: TokenAnalyticsData;
}
export declare function fetchAnalyticsData(geb: Geb): Promise<AnalyticsData>;
export {};
