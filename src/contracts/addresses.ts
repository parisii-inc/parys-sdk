import {
    PEUA,
    PBJO
} from '../utils'

// Detect if we're in a browser environment
export const isBrowser = typeof window !== 'undefined'

// Simplified environment handling with no dotenv dependency
let fs: any = null
let path: any = null
let env: any = process.env || {}

// Skip Node.js specific imports in browser
if (!isBrowser) {
    try {
        // Use direct requires for Node.js environments only
        fs = require('fs')
        path = require('path')

        // We don't need dotenv anymore as we're using fixed paths
        //console.log('[SDK] Running in Node.js environment')
    } catch (e) {
        console.warn('[SDK] Node.js modules not available, running in a limited environment')
    }
} else {
    //console.log('[SDK] Running in browser environment')
}

// All keys are mandatory
export type ContractKey =
    | 'MULTICALL'
    | 'ETH'
    | 'GEB_SYSTEM_COIN'
    | 'GEB_PROTOCOL_TOKEN'
    | 'GEB_SAFE_ENGINE'
    | 'GEB_ORACLE_RELAYER'
    | 'GEB_SURPLUS_AUCTION_HOUSE'
    | 'GEB_DEBT_AUCTION_HOUSE'
    | 'GEB_COLLATERAL_AUCTION_HOUSE_FACTORY'
    | 'GEB_ACCOUNTING_ENGINE'
    | 'GEB_LIQUIDATION_ENGINE'
    | 'GEB_COIN_JOIN'
    | 'GEB_COLLATERAL_JOIN_FACTORY'
    | 'GEB_TAX_COLLECTOR'
    | 'GEB_STABILITY_FEE_TREASURY'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE'
    | 'GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER'
    | 'GEB_RRFM_SETTER'
    | 'GEB_RRFM_CALCULATOR'
    | 'SAFE_MANAGER'
    | 'PROXY_FACTORY'
    | 'PROXY_BASIC_ACTIONS'
    | 'PROXY_DEBT_AUCTION_ACTIONS'
    | 'PROXY_SURPLUS_AUCTION_ACTIONS'
    | 'PROXY_COLLATERAL_AUCTION_ACTIONS'
    | 'PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS'
    | 'PROXY_GLOBAL_SETTLEMENT_ACTIONS'
    | 'PROXY_REWARDED_ACTIONS'
    | 'JOB_ACCOUNTING'
    | 'JOB_LIQUIDATION'
    | 'JOB_ORACLES'
    | 'MERKLE_DISTRIBUTOR_FACTORY_AGREE'

export type ContractList = {
    [key in ContractKey]: string
}

export declare type GebDeployment = 'mainnet' | 'optimism-goerli' | 'optimism-sepolia' | 'localnet'

const addresses: Record<GebDeployment, ContractList> = {
    mainnet: {
        MULTICALL: '0xcA11bde05977b3631167028862bE2a173976CA11',
        ETH: '0x4200000000000000000000000000000000000006',
        GEB_SYSTEM_COIN: '0xffa326a8d2eed70f3eb1fee7670c7a033b34feb4',
        GEB_PROTOCOL_TOKEN: '0x24dbf153d032567ae4bd07230c734906368a46ca',
        GEB_SAFE_ENGINE: '0x300d68f42bc60540df03c1983a642f1769f459ff',
        GEB_ORACLE_RELAYER: '0x6b7a3fa36e1eea3aff08f1528ec51502b19dc2bc',
        GEB_SURPLUS_AUCTION_HOUSE: '0x4159506228747425617cf8616f6bab580376caca',
        GEB_DEBT_AUCTION_HOUSE: '0x4b359cd897eeaf728650ee1c19b608ec1782960e',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '0x450459da57bc9edb62aacd36800afbc583d0d615',
        GEB_ACCOUNTING_ENGINE: '0xfc19e0ebf7eab233cf808238eb0ab4b67097918a',
        GEB_LIQUIDATION_ENGINE: '0x1e433f264ebdaccbdf54d1b3effdedf047ae417d',
        GEB_COIN_JOIN: '0xff2204af0d9c80cd5a0db00d95b9bfdec10b21b7',
        GEB_COLLATERAL_JOIN_FACTORY: '0x5f265ae9ce68bc3848a8ffc03af4d51c19d24cb7',
        GEB_TAX_COLLECTOR: '0x19af191d47af3bb7421e7c799b45b1ca9bb5d792',
        GEB_STABILITY_FEE_TREASURY: '0xc38c0eaded77d55212bee0e099db313e020eaea4',
        GEB_RRFM_CALCULATOR: '0x9d36659cb0c8a0ccf7a1667cb7ff4e3ae7ed82f8',
        GEB_RRFM_SETTER: '0x5b621e69c62bae973ae2367cb7aea5916e43a384',
        GEB_GLOBAL_SETTLEMENT: '0x9410fd554a01235d20870ea55554fe2993da83c4',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '0x209b2f67bd91c2ef06fb412eb263fa5044187aa7',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '0x6e0cd5ed5aff9eb789f7cf1b72149929bd15b0f7',
        SAFE_MANAGER: '0x944906dd45e5a6230d8bc4256ab871c074c30c73',
        PROXY_FACTORY: '0xd32041d3ad7122640d5cd6e6730fb3f6b128e6e0',
        PROXY_BASIC_ACTIONS: '0x197450890684d6f03c22f17d2407cfd0482d34cb',
        PROXY_DEBT_AUCTION_ACTIONS: '0x34687832c3eb7498ffe1f24286fb9d7c42ae31a3',
        PROXY_SURPLUS_AUCTION_ACTIONS: '0x0d4959bc3a5788819777293c08a81ea4703d3bc6',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '0x8b9a8ba86b4cbb5695aa4d2245d401588046228f',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '0x2c7a058966156a11fb41978c29cdebdcc63bdf49',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '0xab4af14f439bfecd5abf1ea6a53283d673c03ceb',
        PROXY_REWARDED_ACTIONS: '0x845a7d7b4f8657ae33ef872a3b254683d0e31b82',
        JOB_ACCOUNTING: '0x342ab1159417c778a6463e32bc5b5e138a1a3531',
        JOB_LIQUIDATION: '0x0140a32a6b0361c2f5a25cd67ee541de2452614a',
        JOB_ORACLES: '0x1c8c87cd84cad5c2afc9e3382e439f296153dae0',
        MERKLE_DISTRIBUTOR_FACTORY_AGREE: '',
    },
    'optimism-goerli': {
        MULTICALL: '',
        ETH: '',
        GEB_SYSTEM_COIN: '',
        GEB_PROTOCOL_TOKEN: '',
        GEB_SAFE_ENGINE: '',
        GEB_ORACLE_RELAYER: '',
        GEB_SURPLUS_AUCTION_HOUSE: '',
        GEB_DEBT_AUCTION_HOUSE: '',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '',
        GEB_ACCOUNTING_ENGINE: '',
        GEB_LIQUIDATION_ENGINE: '',
        GEB_COIN_JOIN: '',
        GEB_COLLATERAL_JOIN_FACTORY: '',
        GEB_TAX_COLLECTOR: '',
        GEB_STABILITY_FEE_TREASURY: '',
        GEB_RRFM_CALCULATOR: '',
        GEB_RRFM_SETTER: '',
        GEB_GLOBAL_SETTLEMENT: '',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '',
        SAFE_MANAGER: '',
        PROXY_FACTORY: '',
        PROXY_BASIC_ACTIONS: '',
        PROXY_DEBT_AUCTION_ACTIONS: '',
        PROXY_SURPLUS_AUCTION_ACTIONS: '',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '',
        PROXY_REWARDED_ACTIONS: '',
        JOB_ACCOUNTING: '',
        JOB_LIQUIDATION: '',
        JOB_ORACLES: '',
        MERKLE_DISTRIBUTOR_FACTORY_AGREE: '',
    },
    'optimism-sepolia': {
        MULTICALL: '',
        ETH: '',
        GEB_SYSTEM_COIN: '',
        GEB_PROTOCOL_TOKEN: '',
        GEB_SAFE_ENGINE: '',
        GEB_ORACLE_RELAYER: '',
        GEB_SURPLUS_AUCTION_HOUSE: '',
        GEB_DEBT_AUCTION_HOUSE: '',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '',
        GEB_ACCOUNTING_ENGINE: '',
        GEB_LIQUIDATION_ENGINE: '',
        GEB_COIN_JOIN: '',
        GEB_COLLATERAL_JOIN_FACTORY: '',
        GEB_TAX_COLLECTOR: '',
        GEB_STABILITY_FEE_TREASURY: '',
        GEB_RRFM_CALCULATOR: '',
        GEB_RRFM_SETTER: '',
        GEB_GLOBAL_SETTLEMENT: '',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '',
        SAFE_MANAGER: '',
        PROXY_FACTORY: '',
        PROXY_BASIC_ACTIONS: '',
        PROXY_DEBT_AUCTION_ACTIONS: '',
        PROXY_SURPLUS_AUCTION_ACTIONS: '',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '',
        PROXY_REWARDED_ACTIONS: '',
        JOB_ACCOUNTING: '',
        JOB_LIQUIDATION: '',
        JOB_ORACLES: '',
        MERKLE_DISTRIBUTOR_FACTORY_AGREE: '',
    },
    localnet: {
        MULTICALL: '',
        ETH: '',
        GEB_SYSTEM_COIN: '',
        GEB_PROTOCOL_TOKEN: '',
        GEB_SAFE_ENGINE: '',
        GEB_ORACLE_RELAYER: '',
        GEB_SURPLUS_AUCTION_HOUSE: '',
        GEB_DEBT_AUCTION_HOUSE: '',
        GEB_COLLATERAL_AUCTION_HOUSE_FACTORY: '',
        GEB_ACCOUNTING_ENGINE: '',
        GEB_LIQUIDATION_ENGINE: '',
        GEB_COIN_JOIN: '',
        GEB_COLLATERAL_JOIN_FACTORY: '',
        GEB_TAX_COLLECTOR: '',
        GEB_STABILITY_FEE_TREASURY: '',
        GEB_RRFM_CALCULATOR: '',
        GEB_RRFM_SETTER: '',
        GEB_GLOBAL_SETTLEMENT: '',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE: '',
        GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER: '',
        SAFE_MANAGER: '',
        PROXY_FACTORY: '',
        PROXY_BASIC_ACTIONS: '',
        PROXY_DEBT_AUCTION_ACTIONS: '',
        PROXY_SURPLUS_AUCTION_ACTIONS: '',
        PROXY_COLLATERAL_AUCTION_ACTIONS: '',
        PROXY_POST_SETTLEMENT_SURPLUS_AUCTION_ACTIONS: '',
        PROXY_GLOBAL_SETTLEMENT_ACTIONS: '',
        PROXY_REWARDED_ACTIONS: '',
        JOB_ACCOUNTING: '',
        JOB_LIQUIDATION: '',
        JOB_ORACLES: '',
        MERKLE_DISTRIBUTOR_FACTORY_AGREE: '',
    },
}

export type TokenData = {
    address: string
    decimals: number
    symbol: string
    label: string
    bytes32String: string
    collateralJoin: string
    collateralAuctionHouse: string
    isCollateral: boolean
    hasRewards: boolean
}

export type TokenList = {
    [key: string]: TokenData
}

const tokens: Record<GebDeployment, TokenList> = {
    mainnet: {
        PEUA: {
            address: '0xB43971B18F75d9F189067a60518d5f5BFc96c748',
            decimals: 18,
            symbol: 'PEUA',
            label: 'PEUA',
            bytes32String: '0x5045554100000000000000000000000000000000000000000000000000000000',
            collateralJoin: '0xccc5C2c9E7Ad4dAD8E7ee662Bb6CfAf0225bbefc',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        PBJO: {
            address: '0xCED6AfE0F46d2dCD9Ff7b3d47c765b731bBE9918',
            decimals: 18,
            symbol: 'PBJO',
            label: 'PBJO',
            bytes32String: '0x50424a4f00000000000000000000000000000000000000000000000000000000',
            collateralJoin: '0xe58a76279d59915ba0F93d840A059e04FfDf6395',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        PARYS: {
            address: '0xffa326a8d2eed70f3eb1fee7670c7a033b34feb4',
            decimals: 18,
            symbol: 'PARYS',
            label: 'PARYS',
            bytes32String: '0x5041525953000000000000000000000000000000000000000000000000000000',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
        AGREE: {
            address: '0x24dbf153d032567ae4bd07230c734906368a46ca',
            decimals: 18,
            symbol: 'AGREE',
            label: 'AGREE',
            bytes32String: '0x4147524545000000000000000000000000000000000000000000000000000000',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
    },
    'optimism-goerli': {
        PEUA: {
            address: '',
            decimals: 18,
            symbol: 'PEUA',
            label: 'PEUA',
            bytes32String: PEUA,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        PBJO: {
            address: '',
            decimals: 18,
            symbol: 'PBJO',
            label: 'PBJO',
            bytes32String: '0x50424a4f00000000000000000000000000000000000000000000000000000000',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        PARYS: {
            address: '',
            decimals: 18,
            symbol: 'PARYS',
            label: 'PARYS',
            bytes32String: '0x5041525953000000000000000000000000000000000000000000000000000000',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
        AGREE: {
            address: '',
            decimals: 18,
            symbol: 'AGREE',
            label: 'AGREE',
            bytes32String: '0x4147524545000000000000000000000000000000000000000000000000000000',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
    },
    'optimism-sepolia': {
        PEUA: {
            address: '',
            decimals: 18,
            symbol: 'PEUA',
            label: 'PEUA',
            bytes32String: PEUA,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        PBJO: {
            address: '',
            decimals: 18,
            symbol: 'PBJO',
            label: 'PBJO',
            bytes32String: '0x50424a4f00000000000000000000000000000000000000000000000000000000',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        PARYS: {
            address: '',
            decimals: 18,
            symbol: 'PARYS',
            label: 'PARYS',
            bytes32String: '0x5041525953000000000000000000000000000000000000000000000000000000',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
        AGREE: {
            address: '',
            decimals: 18,
            symbol: 'AGREE',
            label: 'AGREE',
            bytes32String: '0x4147524545000000000000000000000000000000000000000000000000000000',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
    },
    localnet: {
        PEUA: {
            address: '',
            decimals: 18,
            symbol: 'PEUA',
            label: 'PEUA',
            bytes32String: PEUA,
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        PBJO: {
            address: '',
            decimals: 18,
            symbol: 'PBJO',
            label: 'PBJO',
            bytes32String: '0x50424a4f00000000000000000000000000000000000000000000000000000000',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: true,
            hasRewards: false,
        },
        PARYS: {
            address: '',
            decimals: 18,
            symbol: 'PARYS',
            label: 'PARYS',
            bytes32String: '0x5041525953000000000000000000000000000000000000000000000000000000',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
        AGREE: {
            address: '',
            decimals: 18,
            symbol: 'AGREE',
            label: 'AGREE',
            bytes32String: '0x4147524545000000000000000000000000000000000000000000000000000000',
            collateralJoin: '',
            collateralAuctionHouse: '',
            isCollateral: false,
            hasRewards: false,
        },
    },
}

// Helper function for logging with timestamps
function logWithTime(message: string): void {
    const now = new Date()
    //console.log(`[SDK ${now.toISOString()}] ${message}`)
}

/**
 * Simply load a local contracts file from a standardized location
 * when dealing with local network ID 31337
 */
function loadLocalContractAddresses(): ContractList | null {
    try {
        //console.log('[SDK] Loading local contract addresses')

        // In browser environment, use fixed path to public directory
        if (isBrowser) {
            // Standard path for local development
            const filePath = '/data/31337-contracts.json'
            //console.log(`[SDK] Loading contracts from standard path: ${filePath}`)

            try {
                const xhr = new XMLHttpRequest()
                xhr.open('GET', filePath, false) // Synchronous request for simplicity
                xhr.send(null)

                if (xhr.status === 200) {
                    const contractAddresses = JSON.parse(xhr.responseText) as ContractList
                    //console.log('[SDK] Successfully loaded contract addresses')
                    return contractAddresses
                } else {
                    console.error(`[SDK] Failed to load contract addresses: ${xhr.status} ${xhr.statusText}`)
                }
            } catch (error) {
                console.error('[SDK] Error loading contract addresses:', error)
            }
        } else if (fs && path) {
            // In Node.js environment, try a relative path
            const filePath = './public/data/31337-contracts.json'
            const resolvedPath = path.resolve(process.cwd(), filePath)

            if (fs.existsSync(resolvedPath)) {
                const fileContent = fs.readFileSync(resolvedPath, { encoding: 'utf8' })
                const contractAddresses = JSON.parse(fileContent) as ContractList
                //console.log(`[SDK] Successfully loaded contract addresses from: ${resolvedPath}`)
                return contractAddresses
            } else {
                console.warn(`[SDK] File not found at: ${resolvedPath}`)
            }
        } else {
            console.warn('[SDK] Neither browser nor Node.js file access methods are available')
        }

        // Fallback to default addresses
        console.warn('[SDK] Falling back to default contract addresses')
        return addresses.localnet
    } catch (error) {
        console.error('[SDK] Error in loadLocalContractAddresses:', error)
        return null
    }
}

/**
 * Simply load a local tokens file from a standardized location
 * when dealing with local network ID 31337
 */
function loadLocalTokenList(): TokenList | null {
    try {
        //console.log('[SDK] Loading local token list')

        // In browser environment, use fixed path to public directory
        if (isBrowser) {
            // Standard path for local development
            const filePath = '/data/31337-tokens.json'
            //console.log(`[SDK] Loading tokens from standard path: ${filePath}`)

            try {
                const xhr = new XMLHttpRequest()
                xhr.open('GET', filePath, false) // Synchronous request for simplicity
                xhr.send(null)

                if (xhr.status === 200) {
                    const tokenList = JSON.parse(xhr.responseText) as TokenList
                    //console.log('[SDK] Successfully loaded token list')
                    return tokenList
                } else {
                    console.error(`[SDK] Failed to load token list: ${xhr.status} ${xhr.statusText}`)
                }
            } catch (error) {
                console.error('[SDK] Error loading token list:', error)
            }
        } else if (fs && path) {
            // In Node.js environment, try a relative path
            const filePath = './public/data/31337-tokens.json'
            const resolvedPath = path.resolve(process.cwd(), filePath)

            if (fs.existsSync(resolvedPath)) {
                const fileContent = fs.readFileSync(resolvedPath, { encoding: 'utf8' })
                const tokenList = JSON.parse(fileContent) as TokenList
                //console.log(`[SDK] Successfully loaded token list from: ${resolvedPath}`)
                return tokenList
            } else {
                console.warn(`[SDK] File not found at: ${resolvedPath}`)
            }
        } else {
            console.warn('[SDK] Neither browser nor Node.js file access methods are available')
        }

        // Fallback to default tokens
        console.warn('[SDK] Falling back to default token list')
        return tokens.localnet
    } catch (error) {
        console.error('[SDK] Error in loadLocalTokenList:', error)
        return null
    }
}

export const getTokenList = (network: GebDeployment): TokenList => {
    if (network === 'localnet') {
        //console.log('[SDK] Getting tokens for localnet')

        // Try to load from local file
        const localTokens = loadLocalTokenList()
        if (localTokens) {
            //console.log('[SDK] Using locally loaded token list')
            return localTokens
        }

        // If loading fails, use default localnet tokens
        //console.log('[SDK] Using default localnet token list')
        return tokens.localnet
    }

    //console.log(`[SDK] Using ${network} token list`)
    return tokens[network]
}

export const getAddressList = (network: GebDeployment): ContractList => {
    if (network === 'localnet') {
        //console.log('[SDK] Getting contract addresses for localnet')

        // Try to load from local file
        const localAddresses = loadLocalContractAddresses()
        if (localAddresses) {
            //console.log('[SDK] Using locally loaded contract addresses')
            return localAddresses
        }

        // If loading fails, use default localnet addresses
        //console.log('[SDK] Using default localnet contract addresses')
        return addresses.localnet
    }

    //console.log(`[SDK] Using ${network} contract addresses`)
    return addresses[network]
}

export interface ContractAddresses {
    tokens: TokenAddresses
    contracts: ContractList
}

export interface TokenAddresses {
    tokenList: TokenList
}

export function debugGetAddresses(networkId: number): any {
    //console.log(`[SDK] Getting addresses for network ID: ${networkId}`)

    if (networkId === 31337) {
        //console.log('[SDK] Loading local contract addresses')
        const localAddresses = loadLocalContractAddresses()

        if (localAddresses) {
            //console.log('[SDK] Successfully loaded local contract addresses')
            return {
                tokens: debugGetTokenAddresses(networkId),
                contracts: localAddresses,
            }
        } else {
            console.warn('[SDK] Failed to load local contract addresses, falling back to mainnet')
            return {
                tokens: debugGetTokenAddresses(networkId),
                contracts: addresses.mainnet,
            }
        }
    }

    // Map the network ID to the deployment type
    let network: GebDeployment = 'mainnet'
    if (networkId === 10) {
        network = 'mainnet'
    } else if (networkId === 11155420) {
        network = 'optimism-sepolia'
    }

    return {
        tokens: debugGetTokenAddresses(networkId),
        contracts: addresses[network],
    }
}

export function debugGetTokenAddresses(networkId: number): any {
    //console.log(`[SDK] Getting token addresses for network ID: ${networkId}`)

    if (networkId === 31337) {
        //console.log('[SDK] Loading local token addresses')
        const localTokens = loadLocalTokenList()

        if (localTokens) {
            //console.log('[SDK] Successfully loaded local token list')
            return {
                tokenList: localTokens,
            }
        } else {
            console.warn('[SDK] Failed to load local token list, falling back to mainnet')
            return {
                tokenList: tokens.mainnet,
            }
        }
    }

    // Map the network ID to the deployment type
    let network: GebDeployment = 'mainnet'
    if (networkId === 10) {
        network = 'mainnet'
    } else if (networkId === 11155420) {
        network = 'optimism-sepolia'
    }

    return {
        tokenList: tokens[network],
    }
}
