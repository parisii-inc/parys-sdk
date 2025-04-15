"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractApis = void 0;
var types = __importStar(require("../typechained"));
var contracts_1 = require("../contracts");
var addresses_1 = require("../contracts/addresses");
// Container class used to instantiate most GEB contracts
// prettier-ignore
var ContractApis = /** @class */ (function () {
    function ContractApis(network, signerOrProvider) {
        // Set the contract address list
        var addressList = (0, contracts_1.getAddressList)(network);
        var tokenList = (0, addresses_1.getTokenList)(network);
        this.systemCoin = types.ERC20__factory.connect(addressList.GEB_SYSTEM_COIN, signerOrProvider);
        this.protocolToken = types.ERC20__factory.connect(addressList.GEB_PROTOCOL_TOKEN, signerOrProvider);
        this.safeEngine = types.ISAFEEngine__factory.connect(addressList.GEB_SAFE_ENGINE, signerOrProvider);
        this.accountingEngine = types.IAccountingEngine__factory.connect(addressList.GEB_ACCOUNTING_ENGINE, signerOrProvider);
        this.taxCollector = types.ITaxCollector__factory.connect(addressList.GEB_TAX_COLLECTOR, signerOrProvider);
        this.liquidationEngine = types.ILiquidationEngine__factory.connect(addressList.GEB_LIQUIDATION_ENGINE, signerOrProvider);
        this.oracleRelayer = types.IOracleRelayer__factory.connect(addressList.GEB_ORACLE_RELAYER, signerOrProvider);
        this.globalSettlement = types.IGlobalSettlement__factory.connect(addressList.GEB_GLOBAL_SETTLEMENT, signerOrProvider);
        this.debtAuctionHouse = types.IDebtAuctionHouse__factory.connect(addressList.GEB_DEBT_AUCTION_HOUSE, signerOrProvider);
        this.surplusAuctionHouse = types.ISurplusAuctionHouse__factory.connect(addressList.GEB_SURPLUS_AUCTION_HOUSE, signerOrProvider);
        this.postSettlementSurplusAuctionHouse = types.IPostSettlementSurplusAuctionHouse__factory.connect(addressList.GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE, signerOrProvider);
        this.postSettlementSurplusAuctioneer = types.ISettlementSurplusAuctioneer__factory.connect(addressList.GEB_POST_SETTLEMENT_SURPLUS_AUCTIONEER, signerOrProvider);
        this.stabilityFeeTreasury = types.IStabilityFeeTreasury__factory.connect(addressList.GEB_STABILITY_FEE_TREASURY, signerOrProvider);
        this.joinCoin = types.ICoinJoin__factory.connect(addressList.GEB_COIN_JOIN, signerOrProvider);
        this.rateSetter = types.IPIDRateSetter__factory.connect(addressList.GEB_RRFM_SETTER, signerOrProvider);
        this.piCalculator = types.IPIDController__factory.connect(addressList.GEB_RRFM_CALCULATOR, signerOrProvider);
        this.merkleDistributorFactoryAgree = types.MerkleDistributorFactory__factory.connect(addressList.MERKLE_DISTRIBUTOR_FACTORY_AGREE, signerOrProvider);
        this.oracleJob = types.IOracleJob__factory.connect(addressList.JOB_ORACLES, signerOrProvider);
        this.accountingJob = types.IAccountingJob__factory.connect(addressList.JOB_ACCOUNTING, signerOrProvider);
        this.liquidationJob = types.ILiquidationJob__factory.connect(addressList.JOB_LIQUIDATION, signerOrProvider);
        this.safeManager = types.IParysSafeManager__factory.connect(addressList.SAFE_MANAGER, signerOrProvider);
        this.proxyFactory = types.IParysProxyFactory__factory.connect(addressList.PROXY_FACTORY, signerOrProvider);
        this.weth = types.WETH9__factory.connect(addressList.ETH, signerOrProvider);
        this.tokenCollateralAuctionHouse = Object.values(tokenList).filter(function (token) { return token.isCollateral; }).reduce(function (accum, token) {
            var _a;
            var collateralAuctionHouse = types.ICollateralAuctionHouse__factory.connect(token.collateralAuctionHouse, signerOrProvider);
            return __assign(__assign({}, accum), (_a = {}, _a[token.symbol] = collateralAuctionHouse, _a));
        }, {});
    }
    return ContractApis;
}());
exports.ContractApis = ContractApis;
//# sourceMappingURL=contract-apis.js.map