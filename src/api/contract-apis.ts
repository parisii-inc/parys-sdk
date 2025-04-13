import { ethers } from 'ethers'
import * as types from '../typechained'
import { GebDeployment, getAddressList } from '../contracts'
import { getTokenList } from '../contracts/addresses'

// Container class used to instantiate most GEB contracts
// prettier-ignore
export class ContractApis {

    public safeEngine: types.ISAFEEngine
    public accountingEngine: types.IAccountingEngine
    public taxCollector: types.ITaxCollector
    public liquidationEngine: types.ILiquidationEngine
    public oracleRelayer: types.IOracleRelayer
    public globalSettlement: types.IGlobalSettlement
    public debtAuctionHouse: types.IDebtAuctionHouse
    public surplusAuctionHouse: types.ISurplusAuctionHouse
    public postSettlementSurplusAuctionHouse: types.IPostSettlementSurplusAuctionHouse
    public postSettlementSurplusAuctioneer: types.ISettlementSurplusAuctioneer
    public stabilityFeeTreasury: types.IStabilityFeeTreasury
    public safeManager: types.IParysSafeManager
    public joinCoin: types.ICoinJoin
    public proxyFactory: types.IParysProxyFactory
    public rateSetter: types.IPIDRateSetter
    public piCalculator: types.IPIDController

    public wrappedTokenHaiVelo: types.WrappedToken

    public merkleDistributorFactoryKite: types.MerkleDistributorFactory
    public merkleDistributorFactoryOp: types.MerkleDistributorFactory
    public merkleDistributorFactoryDinero: types.MerkleDistributorFactory
    public merkleDistributorFactoryAgree: types.MerkleDistributorFactory

    public oracleJob: types.Job
    public accountingJob: types.Job
    public liquidationJob: types.LiquidationJob
    
    public protocolToken: types.ERC20
    public systemCoin: types.ERC20
    public weth: types.WETH9

    public tokenCollateralJoin: { [key: string]: types.ICoinJoin }
    public tokenCollateralAuctionHouse: { [key: string]: types.ICollateralAuctionHouse }

    constructor(
        network: GebDeployment,
        signerOrProvider: ethers.Wallet | ethers.providers.JsonRpcSigner | ethers.providers.Provider,
    ) {
        // Set the contract address list
        const addressList = getAddressList(network)
        const tokenList = getTokenList(network)

        this.systemCoin = types.ERC20__factory.connect(addressList.GEB_SYSTEM_COIN, signerOrProvider)
        this.protocolToken = types.ERC20__factory.connect(addressList.GEB_PROTOCOL_TOKEN, signerOrProvider)
        this.safeEngine = types.ISAFEEngine__factory.connect(addressList.GEB_SAFE_ENGINE, signerOrProvider)
        this.accountingEngine = types.IAccountingEngine__factory.connect(addressList.GEB_ACCOUNTING_ENGINE, signerOrProvider)
        this.taxCollector = types.ITaxCollector__factory.connect(addressList.GEB_TAX_COLLECTOR, signerOrProvider)
        this.liquidationEngine = types.ILiquidationEngine__factory.connect(addressList.GEB_LIQUIDATION_ENGINE, signerOrProvider)
        this.oracleRelayer = types.IOracleRelayer__factory.connect(addressList.GEB_ORACLE_RELAYER, signerOrProvider)
        this.globalSettlement = types.IGlobalSettlement__factory.connect(addressList.GEB_GLOBAL_SETTLEMENT, signerOrProvider)
        this.debtAuctionHouse = types.IDebtAuctionHouse__factory.connect(addressList.GEB_DEBT_AUCTION_HOUSE, signerOrProvider)
        this.surplusAuctionHouse = types.ISurplusAuctionHouse__factory.connect(addressList.GEB_SURPLUS_AUCTION_HOUSE, signerOrProvider)
        this.postSettlementSurplusAuctionHouse = types.IPostSettlementSurplusAuctionHouse__factory.connect(addressList.GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE, signerOrProvider)
        this.postSettlementSurplusAuctioneer = types.ISettlementSurplusAuctioneer__factory.connect(addressList.GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER, signerOrProvider)
        this.stabilityFeeTreasury = types.IStabilityFeeTreasury__factory.connect(addressList.GEB_STABILITY_FEE_TREASURY, signerOrProvider)
        this.joinCoin = types.ICoinJoin__factory.connect(addressList.GEB_COIN_JOIN, signerOrProvider)
        this.rateSetter = types.IPIDRateSetter__factory.connect(addressList.GEB_RRFM_SETTER, signerOrProvider)
        this.piCalculator = types.IPIDController__factory.connect(addressList.GEB_RRFM_CALCULATOR, signerOrProvider)
        
        this.merkleDistributorFactoryAgree = types.MerkleDistributorFactory__factory.connect(addressList.MERKLE_DISTRIBUTOR_FACTORY_AGREE, signerOrProvider)

        this.oracleJob = types.IOracleJob__factory.connect(addressList.JOB_ORACLES, signerOrProvider)
        this.accountingJob = types.IAccountingJob__factory.connect(addressList.JOB_ACCOUNTING, signerOrProvider)
        this.liquidationJob = types.ILiquidationJob__factory.connect(addressList.JOB_LIQUIDATION, signerOrProvider)

        this.safeManager = types.IParysSafeManager__factory.connect(addressList.SAFE_MANAGER, signerOrProvider)
        this.proxyFactory = types.IParysProxyFactory__factory.connect(addressList.PROXY_FACTORY, signerOrProvider)
        
        this.weth = types.WETH9__factory.connect(addressList.ETH, signerOrProvider)

        this.tokenCollateralAuctionHouse = Object.values(tokenList).filter(token => token.isCollateral).reduce((accum, token) => {
            const collateralAuctionHouse = types.ICollateralAuctionHouse__factory.connect(token.collateralAuctionHouse, signerOrProvider)
            return { ...accum, [token.symbol]: collateralAuctionHouse }
        }, {})
    }
}
