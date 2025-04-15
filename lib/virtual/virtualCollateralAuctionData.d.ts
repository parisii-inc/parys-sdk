import { Geb } from '../geb';
import { BigNumber } from 'ethers';
export interface CollateralAuctionsData {
    _auctionId: BigNumber;
    _boughtCollateral: BigNumber;
    _adjustedBid: BigNumber;
}
export declare function fetchCollateralAuctionData(geb: Geb, collateral: string, // 'WETH' / 'OP' ...
auctionIds: string[]): Promise<CollateralAuctionsData[]>;
