import { BigNumberish } from '@ethersproject/bignumber';
import { ethers } from 'ethers';
import { GebDeployment } from './contracts';
import * as types from './typechained';
/**
 * Convenience class to call functions from [BasicActions](https://github.com/reflexer-labs/geb-proxy-actions/blob/master/src/BasicActions.sol) through a proxy contract registered in the [GebProxyRegistry](https://github.com/reflexer-labs/geb-proxy-registry/blob/master/src/GebProxyRegistry.sol). These actions bundle multiple actions in one (e.g: open a safe + lock some ETH + draw some system coins).
 */
export declare class BasicActions {
    /**
     * Address of the underlying proxy
     */
    proxyAddress: string;
    private chainProvider;
    /**
     * Underlying proxy object. Can be use to make custom calls to the proxy using `proxy.execute()` function.
     * For the details of each function
     */
    proxy: types.IParysProxy;
    /**
     * Address of the base proxy actions contract.
     */
    proxyActionCoreAddress: string;
    /**
     * Address of the proxy actions contract for global settlement.
     */
    proxyActionGlobalSettlementAddress: string;
    /**
     * Address of the proxy actions contract for debt auctions.
     */
    proxyActionDebtAuctionAddress: string;
    /**
     * Address of the proxy actions contract for surplus auctions.
     */
    proxyActionSurplusAuctionAddress: string;
    /**
     * Address of the proxy actions contract for collateral auctions.
     */
    proxyActionCollateralAuctionAddress: string;
    /**
     * Address of the proxy actions contract for rewarded actions.
     */
    proxyRewardedActionsAddress: string;
    private addressList;
    private tokenList;
    private proxyActionCore;
    private proxyActionGlobalSettlement;
    private proxyActionDebtAuction;
    private proxyActionSurplusAuction;
    private proxyActionCollateralAuction;
    private proxyActionRewarded;
    constructor(
    /**
     * Address of the underlying proxy
     */
    proxyAddress: string, network: GebDeployment, chainProvider: ethers.providers.Provider);
    private getProxiedTransactionRequest;
    exitTokenCollateral(collateralJoin: string, amt: BigNumberish): Promise<ethers.PopulatedTransaction>;
    freeTokenCollateral(collateralName: string, safe: BigNumberish, amt: BigNumberish): Promise<ethers.PopulatedTransaction>;
    generateDebt(safe: BigNumberish, wad: BigNumberish): Promise<ethers.PopulatedTransaction>;
    lockTokenCollateral(collateralName: string, safe: BigNumberish, amt: BigNumberish): Promise<ethers.PopulatedTransaction>;
    lockTokenCollateralAndGenerateDebt(collateralName: string, safe: BigNumberish, collateralAmount: BigNumberish, deltaWad: BigNumberish): Promise<ethers.PopulatedTransaction>;
    openLockTokenCollateralAndGenerateDebt(collateralName: string, collateralAmount: BigNumberish, deltaWad: BigNumberish): Promise<ethers.PopulatedTransaction>;
    openSAFE(collateralName: string, usr: string): Promise<ethers.PopulatedTransaction>;
    repayAllDebt(safe: BigNumberish): Promise<ethers.PopulatedTransaction>;
    repayAllDebtAndFreeTokenCollateral(collateralName: string, safe: BigNumberish, collateralAmount: BigNumberish): Promise<ethers.PopulatedTransaction>;
    repayDebt(safe: BigNumberish, wad: BigNumberish): Promise<ethers.PopulatedTransaction>;
    repayDebtAndFreeTokenCollateral(collateralName: string, safe: BigNumberish, collateralAmount: BigNumberish, deltaWad: BigNumberish): Promise<ethers.PopulatedTransaction>;
    collectTokenCollateral(collateralName: string, safe: BigNumberish, amt: BigNumberish): Promise<ethers.PopulatedTransaction>;
    freeCollateralGlobalSettlement(collateralName: string, safe: BigNumberish): Promise<ethers.PopulatedTransaction>;
    prepareCoinsForRedeemingGlobalSettlement(wad: BigNumberish): Promise<ethers.PopulatedTransaction>;
    redeemTokenCollateralGlobalSettlement(collateralName: string): Promise<ethers.PopulatedTransaction>;
    debtAuctionDecreaseSoldAmount(amountToBuy: BigNumberish, auctionId: BigNumberish): Promise<ethers.PopulatedTransaction>;
    debtAuctionSettleAuction(auctionId: BigNumberish): Promise<ethers.PopulatedTransaction>;
    exitAllCoin(): Promise<ethers.PopulatedTransaction>;
    exitCoin(amount: BigNumberish): Promise<ethers.PopulatedTransaction>;
    collectProtocolTokens(): Promise<ethers.PopulatedTransaction>;
    surplusIncreaseBidSize(bidSize: BigNumberish, auctionId: BigNumberish): Promise<ethers.PopulatedTransaction>;
    surplusSettleAuction(auctionId: BigNumberish): Promise<ethers.PopulatedTransaction>;
    buyCollateral(collateralName: string, auctionId: BigNumberish, minCollateralAmount: BigNumberish, bidAmount: BigNumberish): Promise<ethers.PopulatedTransaction>;
    postSettlementSurplusIncreaseBidSize(bidSize: BigNumberish, auctionId: BigNumberish): Promise<ethers.PopulatedTransaction>;
    postSettlementSurplusSettleAuction(auctionId: BigNumberish): Promise<ethers.PopulatedTransaction>;
    popDebtFromQueue(debtTimestamp: BigNumberish): Promise<ethers.PopulatedTransaction>;
    debtAuctionStart(): Promise<ethers.PopulatedTransaction>;
    surplusAuctionStart(): Promise<ethers.PopulatedTransaction>;
    transferExtraSurplus(): Promise<ethers.PopulatedTransaction>;
    liquidateSAFE(collateralName: string, safeAddress: string): Promise<ethers.PopulatedTransaction>;
    updateOraclePrice(collateralName: string): Promise<ethers.PopulatedTransaction>;
    updateRedemptionRate(): Promise<ethers.PopulatedTransaction>;
    getProxy(): types.IParysProxy;
    basicActions(): types.IBasicActions;
    globalSettlement(): types.IGlobalSettlementActions;
    debtBid(): types.IDebtBidActions;
    surplusBid(): types.ISurplusBidActions;
    collateralBid(): types.ICollateralBidActions;
    rewardedActions(): types.IRewardedActions;
}
