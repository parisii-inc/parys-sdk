export declare const isBrowser: boolean;
export type ContractKey = 'MULTICALL' | 'ETH' | 'GEB_SYSTEM_COIN' | 'GEB_PROTOCOL_TOKEN' | 'GEB_SAFE_ENGINE' | 'GEB_ORACLE_RELAYER' | 'GEB_SURPLUS_AUCTION_HOUSE' | 'GEB_DEBT_AUCTION_HOUSE' | 'GEB_COLLATERAL_AUCTION_HOUSE_FACTORY' | 'GEB_ACCOUNTING_ENGINE' | 'GEB_LIQUIDATION_ENGINE' | 'GEB_COIN_JOIN' | 'GEB_COLLATERAL_JOIN_FACTORY' | 'GEB_TAX_COLLECTOR' | 'GEB_STABILITY_FEE_TREASURY' | 'GEB_GLOBAL_SETTLEMENT' | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE' | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER' | 'GEB_RRFM_SETTER' | 'GEB_RRFM_CALCULATOR' | 'SAFE_MANAGER' | 'PROXY_FACTORY' | 'PROXY_BASIC_ACTIONS' | 'PROXY_DEBT_AUCTION_ACTIONS' | 'PROXY_SURPLUS_AUCTION_ACTIONS' | 'PROXY_COLLATERAL_AUCTION_ACTIONS' | 'PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS' | 'PROXY_GLOBAL_SETTLEMENT_ACTIONS' | 'PROXY_REWARDED_ACTIONS' | 'JOB_ACCOUNTING' | 'JOB_LIQUIDATION' | 'JOB_ORACLES' | 'MERKLE_DISTRIBUTOR_FACTORY_AGREE';
export type ContractList = {
    [key in ContractKey]: string;
};
export declare type GebDeployment = 'mainnet' | 'optimism-goerli' | 'optimism-sepolia' | 'localnet';
export type TokenData = {
    address: string;
    decimals: number;
    symbol: string;
    label: string;
    bytes32String: string;
    collateralJoin: string;
    collateralAuctionHouse: string;
    isCollateral: boolean;
    hasRewards: boolean;
};
export type TokenList = {
    [key: string]: TokenData;
};
export declare const getTokenList: (network: GebDeployment) => TokenList;
export declare const getAddressList: (network: GebDeployment) => ContractList;
export interface ContractAddresses {
    tokens: TokenAddresses;
    contracts: ContractList;
}
export interface TokenAddresses {
    tokenList: TokenList;
}
export declare function debugGetAddresses(networkId: number): any;
export declare function debugGetTokenAddresses(networkId: number): any;
