import { ethers } from 'ethers';
import * as types from '../typechained';
import { GebDeployment } from '../contracts';
export declare class ContractApis {
    safeEngine: types.ISAFEEngine;
    accountingEngine: types.IAccountingEngine;
    taxCollector: types.ITaxCollector;
    liquidationEngine: types.ILiquidationEngine;
    oracleRelayer: types.IOracleRelayer;
    globalSettlement: types.IGlobalSettlement;
    debtAuctionHouse: types.IDebtAuctionHouse;
    surplusAuctionHouse: types.ISurplusAuctionHouse;
    postSettlementSurplusAuctionHouse: types.IPostSettlementSurplusAuctionHouse;
    postSettlementSurplusAuctioneer: types.ISettlementSurplusAuctioneer;
    stabilityFeeTreasury: types.IStabilityFeeTreasury;
    safeManager: types.IParysSafeManager;
    joinCoin: types.ICoinJoin;
    proxyFactory: types.IParysProxyFactory;
    rateSetter: types.IPIDRateSetter;
    piCalculator: types.IPIDController;
    wrappedTokenHaiVelo: types.WrappedToken;
    merkleDistributorFactoryKite: types.MerkleDistributorFactory;
    merkleDistributorFactoryOp: types.MerkleDistributorFactory;
    merkleDistributorFactoryDinero: types.MerkleDistributorFactory;
    merkleDistributorFactoryAgree: types.MerkleDistributorFactory;
    oracleJob: types.Job;
    accountingJob: types.Job;
    liquidationJob: types.LiquidationJob;
    protocolToken: types.ERC20;
    systemCoin: types.ERC20;
    weth: types.WETH9;
    tokenCollateralJoin: {
        [key: string]: types.ICoinJoin;
    };
    tokenCollateralAuctionHouse: {
        [key: string]: types.ICollateralAuctionHouse;
    };
    constructor(network: GebDeployment, signerOrProvider: ethers.Wallet | ethers.providers.JsonRpcSigner | ethers.providers.Provider);
}
