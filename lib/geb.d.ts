import { ethers } from 'ethers';
import { ContractApis } from './api/contract-apis';
import { Auctions } from './auctions';
import { TokenList } from './contracts/addresses';
import { ContractList, GebDeployment } from './contracts/index';
import { BasicActions } from './proxy-action';
import { ERC20 } from './typechained';
import { LiquidationActions } from './liquidation-actions';
import { MerkleDistributor } from './merkle-distributor';
/**
 * The main package used to interact with the GEB system. Includes [[deployProxy |helper functions]] for safe
 *  management and the [[contracts | contract interface object]] to directly call smart contracts.
 */
export declare class Geb {
    network: GebDeployment;
    /**
     * Object containing all GEB core smart contract instances for direct level interactions. All of the
     * following contract objects are one-to-one API typed to the underlying smart contracts. Read-only
     * functions that do not change blockchain state return a promise of the return data. State modifying
     * function will synchronously return a pre-filled transaction request object:
     * ```
     * {
     *   to: "0x123abc.."
     *   data: "0xabab234ab..."
     * }
     * ```
     * This object follow the [[https://docs.ethers.io/v5/api/providers/types/#providers-TransactionRequest
     * TransactionRequest model of ethers.js]] (also similar to the
     * [[https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html#id84 | model used by web.js]]). The object can
     * be completed with properties such as ` from `, ` gasPrice `, ` gas ` (gas limit, web3.js ony) or
     * ` gasLimit ` (gas limit, ethers.js only). The object can then be passed to the `sendTransaction` of
     * [[https://docs.ethers.io/v5/api/signer/#Signer-sendTransaction|ehters.js]] or
     * [[https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html#sendtransaction | web3.js]]
     *
     *  Example:
     *  ```typescript
     *  // Setup geb.js an ethers
     *  const provider = new ethers.providers.JsonRpcProvider('http://kovan.infura.io/<API KEY>')
     *  const wallet = new ethers.Wallet('<Private key>', provider)
     *  const geb = new Geb('kovan', provider)
     *
     *  // Contract read function: fetch the debt ceiling
     *  const debtCeiling = await geb.contracts.safeEngine.globalDebtCeiling()
     *
     *  // State changing function: manualy liquidate a SAFE
     *  const tx = geb.contracts.liquidationEngine.liquidateSAFE(ETH_A, '0x1234abc...')
     *  await wallet.sendTransaction(tx) // Send the Ethereum transaction
     *  ```
     *
     * Currently the following contracts ae available in this property:
     * - SAFEEngine
     * - AccountingEngine
     * - TaxCollector
     * - LiquidationEngine
     * - OracleRelayer
     * - GlobalSettlement
     * - DebtAuctionHouse
     * - PostSettlementSurplusAuctionHouse
     * - SettlementSurplusAuctioneer
     * - GebSafeManager
     * - GetSafes
     * - BasicCollateralJoin
     * - CoinJoin
     * - Coin (System coin ERC20 contract)
     * - GebProxyRegistry
     * - FixedDiscountCollateralAuctionHouse
     * - Weth (ERC20)
     *
     * For detailed information about the functions of each contract we recommend the smart contract
     * [[https://github.com/reflexer-labs/geb | code]] and [[https://docs.reflexer.finance/ |
     * documentation]]
     */
    contracts: ContractApis;
    tokenList: TokenList;
    auctions: Auctions;
    liquidations: LiquidationActions;
    distributors: MerkleDistributor;
    provider: ethers.providers.Provider;
    signer?: ethers.Signer;
    protected addresses: ContractList;
    /**
     * Constructor for the main Geb.js object.
     * @param  {GebDeployment} network Either `'kovan'`, `'mainnet'` or an actual list of contract addresses.
     * @param  {GebProviderInterface|ethers.providers.Provider} provider Either a Ethers.js provider or a Geb provider (support for Web3 will be added in the future)
     */
    constructor(network: GebDeployment, signerOrProvider: ethers.Wallet | ethers.providers.JsonRpcSigner | ethers.providers.Provider);
    /**
     * Given an address, it returns a BasicActions object used to execute bundled operations.
     * Important: This requires that the address deployed a GEB proxy through the proxy registry contract. It will throw a `DOES_NOT_OWN_HAVE_PROXY` error if the address specified does not have a proxy. Use the [[deployProxy]] function to get a new proxy.
     * @param ownerAddress Externally owned user account aka Ethereum address that owns a GEB proxy.
     */
    getProxyAction(ownerAddress: string): Promise<BasicActions>;
    /**
     * Deploy a new proxy owned by the sender.
     */
    deployProxy(): Promise<ethers.ContractTransaction>;
    /**
     * Returns an object that can be used to interact with an ERC20 token.
     * Example:
     * ```typescript
     * const USDCAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
     * const USDC = geb.getErc20Contract(USDCAddress)
     *
     * // Get 0xdefiisawesome's balance
     * const balance = USDC.balanceOf("0xdefiisawesome..")
     *
     * // Send 1 USDC to 0xdefiisawesome (USDC is 6 decimals)
     * const tx = USDC.transfer("0xdefiisawesome..", "1000000")
     * await wallet.sendTransaction(tx)
     * ```
     *
     * @param  {string} tokenAddress Token contract address
     * @returns Erc20
     */
    getErc20Contract(tokenAddress: string): ERC20;
}
