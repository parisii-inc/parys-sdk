import { Geb } from '../geb';
import { BigNumber } from 'ethers';
export interface AuctionData {
    debtAuctionHouseParams: DebtAuctionHouseParams;
    surplusAuctionHouseParams: SurplusAuctionHouseParams;
    accountingEngineData: IAccountingEngineData;
    protocolTokenProxyBalance: BigNumber;
    coinTokenProxyBalance: BigNumber;
    coinTokenSafeBalance: BigNumber;
}
interface AccountingEngineParams {
    surplusIsTransferred: BigNumber;
    surplusDelay: BigNumber;
    popDebtDelay: BigNumber;
    disableCooldown: BigNumber;
    surplusAmount: BigNumber;
    surplusBuffer: BigNumber;
    debtAuctionMintedTokens: BigNumber;
    debtAuctionBidSize: BigNumber;
}
interface IAccountingEngineData {
    accountingEngineParams: AccountingEngineParams;
    totalOnAuctionDebt: BigNumber;
    totalQueuedDebt: BigNumber;
    debtQueue: BigNumber;
    lastSurplusTime: BigNumber;
    unqueuedUnauctionedDebt: BigNumber;
    disableTimestamp: BigNumber;
    coinBalance: BigNumber;
    debtBalance: BigNumber;
}
interface DebtAuctionHouseParams {
    bidDecrease: BigNumber;
    amountSoldIncrease: BigNumber;
    bidDuration: BigNumber;
    totalAuctionLength: BigNumber;
}
interface SurplusAuctionHouseParams {
    bidIncrease: BigNumber;
    bidDuration: BigNumber;
    totalAuctionLength: BigNumber;
    recyclingPercentage: BigNumber;
}
export declare function fetchAuctionData(geb: Geb, proxyAddress: string): Promise<AuctionData>;
export {};
