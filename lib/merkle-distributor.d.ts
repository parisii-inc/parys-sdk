import { ContractApis } from './api/contract-apis';
import { ethers } from 'ethers';
/**
 * The main package used to interact with the GEB system. Includes [[deployProxy |helper functions]] for safe
 *  management and the [[contracts | contract interface object]] to directly call smart contracts.
 */
export declare class MerkleDistributor {
    contracts: ContractApis;
    provider: ethers.providers.Provider;
    /**
     * Constructor for the main Geb.js object.
     * @param  {GebDeployment} network Either `'mainnet'`, `'optimism-sepolia'` or an actual list of contract addresses.
     * @param  {GebProviderInterface|ethers.providers.Provider} provider Either a Ethers.js provider or a Geb provider (support for Web3 will be added in the future)
     */
    constructor(contracts: ContractApis, provider: ethers.providers.Provider);
    getMerkleDistributor(distributorAddress: string): ethers.Contract;
}
