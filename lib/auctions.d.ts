import { ContractApis } from './api/contract-apis';
import { IDebtAuction, ISurplusAuction, ICollateralAuction } from './schema/auction';
import { IncreaseBidSizeEventFilter as SurplusIncreaseBidSizeEventFilter, RestartAuctionEventFilter as SurplusRestartAuctonEventFilter, SettleAuctionEventFilter as SurplusSettleAuctionEventFilter, StartAuctionEventFilter as SurplusStartAuctionEventFilter } from './typechained/ISurplusAuctionHouse';
import { DecreaseSoldAmountEventFilter as DebtDecreaseSoldAmountEventFilter, RestartAuctionEventFilter as DebtRestartAuctonEventFilter, SettleAuctionEventFilter as DebtSettleAuctionEventFilter, StartAuctionEventFilter as DebtStartAuctionEventFilter } from './typechained/IDebtAuctionHouse';
/**
 * The main package used to interact with the GEB system. Includes [[deployProxy |helper functions]] for safe
 *  management and the [[contracts | contract interface object]] to directly call smart contracts.
 */
export declare class Auctions {
    contracts: ContractApis;
    protected surplusStartAuctionFilter: SurplusStartAuctionEventFilter;
    protected surplusBidFilter: SurplusIncreaseBidSizeEventFilter;
    protected surplusRestartAuctionFilter: SurplusRestartAuctonEventFilter;
    protected surplusSettleAuctionFilter: SurplusSettleAuctionEventFilter;
    protected debtStartAuctionFilter: DebtStartAuctionEventFilter;
    protected debtDecreaseSoldAmountFilter: DebtDecreaseSoldAmountEventFilter;
    protected debtRestartAuctionFilter: DebtRestartAuctonEventFilter;
    protected debtSettleAuctionFilter: DebtSettleAuctionEventFilter;
    /**
     * Constructor for the main Geb.js object.
     * @param  {GebDeployment} network Either `'kovan'`, `'mainnet'` or an actual list of contract addresses.
     * @param  {GebProviderInterface|ethers.providers.Provider} provider Either a Ethers.js provider or a Geb provider (support for Web3 will be added in the future)
     */
    constructor(contracts: ContractApis);
    getSurplusAuctions(fromBlock: number, toBlock?: number): Promise<{
        auctions: ISurplusAuction[];
    }>;
    getDebtAuctions(fromBlock: number, toBlock?: number): Promise<{
        auctions: IDebtAuction[];
    }>;
    getCollateralAuctions(collateral: string, fromBlock: number, toBlock?: number): Promise<{
        auctions: ICollateralAuction[];
    }>;
}
