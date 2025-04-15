import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ContractsCore, ContractsCoreInterface } from "../ContractsCore";
export declare class ContractsCore__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "accountingEngine";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAccountingEngine";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "accountingJob";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAccountingJob";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "basicActions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract BasicActions";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "chainlinkRelayerFactory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IChainlinkRelayerFactory";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "coinJoin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ICoinJoin";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateral";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IERC20Metadata";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralAuctionHouse";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ICollateralAuctionHouse";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralAuctionHouseFactory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ICollateralAuctionHouseFactory";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralBidActions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract CollateralBidActions";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralJoin";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ICollateralJoin";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralJoinFactory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ICollateralJoinFactory";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "collateralTypes";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "debtAuctionHouse";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IDebtAuctionHouse";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "debtBidActions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract DebtBidActions";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "delayedOracle";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IDelayedOracle";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "delayedOracleFactory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IDelayedOracleFactory";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "delegate";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "delegatee";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "denominatedOracleFactory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IDenominatedOracleFactory";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deployer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "globalSettlement";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGlobalSettlement";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "globalSettlementActions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract GlobalSettlementActions";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "governor";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "liquidationEngine";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ILiquidationEngine";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "liquidationJob";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ILiquidationJob";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "oracleJob";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IOracleJob";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "oracleRelayer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IOracleRelayer";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "parysDelegatee";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ParysDelegatee";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "parysGovernor";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ParysGovernor";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pidController";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPIDController";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pidRateSetter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPIDRateSetter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "postSettlementSurplusAuctionHouse";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPostSettlementSurplusAuctionHouse";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "postSettlementSurplusBidActions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract PostSettlementSurplusBidActions";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "protocolToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IProtocolToken";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "proxyFactory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ParysProxyFactory";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "rewardedActions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract RewardedActions";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "safeEngine";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISAFEEngine";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "safeManager";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ParysSafeManager";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "settlementSurplusAuctioneer";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISettlementSurplusAuctioneer";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "stabilityFeeTreasury";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IStabilityFeeTreasury";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "surplusAuctionHouse";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISurplusAuctionHouse";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "surplusBidActions";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract SurplusBidActions";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "systemCoin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISystemCoin";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "systemCoinOracle";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IBaseOracle";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "systemCoinTaxCollector";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISystemCoinTaxCollector";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "taxCollector";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ITaxCollector";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "timelock";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract TimelockController";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "tokenDistributor";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract TokenDistributor";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "uniV3RelayerFactory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IUniV3RelayerFactory";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ContractsCoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContractsCore;
}
