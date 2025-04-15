import { BigNumber } from 'ethers';
import { IncreaseBidSizeEvent, StartAuctionEvent as SurplusStartAuctionEvent } from '../typechained/ISurplusAuctionHouse';
import { StartAuctionEvent as DebtStartAuctionEvent } from '../typechained/IDebtAuctionHouse';
import { BuyCollateralEvent, StartAuctionEvent as CollateralAuctionStartEvent } from '../typechained/ICollateralAuctionHouse';
export interface ISurplusAuction {
    auctionId: string;
    auctioneer: string;
    auctionDeadline: string;
    createdAt: string;
    createdAtTransaction: string;
    biddersList: Array<IAuctionBidder>;
    isClaimed: boolean;
    amount: string;
    initialBid: string;
}
export interface IDebtAuction {
    auctionId: string;
    auctioneer: string;
    auctionDeadline: string;
    createdAt: string;
    createdAtTransaction: string;
    biddersList: Array<IAuctionBidder>;
    isClaimed: boolean;
    amount: string;
    initialBid: string;
}
export interface ICollateralAuction {
    auctionId: string;
    auctioneer: string;
    createdAt: string;
    createdAtTransaction: string;
    amountToSell: string;
    initialBid: string;
    amountToRaise: string;
    isClaimed: boolean;
    biddersList: Array<IAuctionBidder>;
}
export interface IAuctionBidder {
    bidder: string;
    bid: string;
    createdAt: string;
    createdAtTransaction: string;
    buyAmount: string;
}
export declare function surplusStartAuctionEventToAuction(startAuction: SurplusStartAuctionEvent, bids: {
    [key: string]: IAuctionBidder[];
}, restarts: {
    [key: string]: BigNumber;
}, settled: {
    [key: string]: boolean;
}): ISurplusAuction;
export declare function debtStartAuctionEventToAuction(startAuction: DebtStartAuctionEvent, bids: {
    [key: string]: IAuctionBidder[];
}, restarts: {
    [key: string]: BigNumber;
}, settled: {
    [key: string]: boolean;
}): IDebtAuction;
export declare function collateralStartAuctionEventToAuction(startAuction: CollateralAuctionStartEvent, bids: {
    [key: string]: IAuctionBidder[];
}, settled: {
    [key: string]: boolean;
}): ICollateralAuction;
export declare function bidEventToBid(bid: IncreaseBidSizeEvent): IAuctionBidder;
export declare function collateralBidEventToBid(bid: BuyCollateralEvent): IAuctionBidder;
