import { BigNumber } from '@ethersproject/bignumber';
import { ContractApis } from '../api/contract-apis';
/**
 * This object represents a GEB safe. It has the entire SAFE state and provides helper functions to calculate its liquidation price, collateralization ratio etc.
 */
export declare class Safe {
    private contracts;
    /**
     * SAFE handler in the SAFE Engine
     */
    handler: string;
    /**
     * Amount of debt generated by the SAFE (WAD)
     */
    debt: BigNumber;
    /**
     * Amount of collateral locked in the SAFE (WAD)
     */
    collateral: BigNumber;
    /**
     * SAFE collateral type
     */
    collateralType: string;
    /**
     * Whether the safe was opened using a SAFE manager or not
     */
    isManaged: boolean;
    /**
     * Safe incremental ID, only for managed safes
     */
    safeId?: number;
    constructor(contracts: ContractApis, 
    /**
     * SAFE handler in the SAFE Engine
     */
    handler: string, 
    /**
     * Amount of debt generated by the SAFE (WAD)
     */
    debt: BigNumber, 
    /**
     * Amount of collateral locked in the SAFE (WAD)
     */
    collateral: BigNumber, 
    /**
     * SAFE collateral type
     */
    collateralType: string, 
    /**
     * Whether the safe was opened using a SAFE manager or not
     */
    isManaged: boolean, 
    /**
     * Safe incremental ID, only for managed safes
     */
    safeId?: number);
}
