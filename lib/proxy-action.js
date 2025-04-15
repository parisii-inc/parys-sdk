"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicActions = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var contracts_1 = require("./contracts");
var addresses_1 = require("./contracts/addresses");
var types = __importStar(require("./typechained"));
var utils_1 = require("./utils");
/**
 * Convenience class to call functions from [BasicActions](https://github.com/reflexer-labs/geb-proxy-actions/blob/master/src/BasicActions.sol) through a proxy contract registered in the [GebProxyRegistry](https://github.com/reflexer-labs/geb-proxy-registry/blob/master/src/GebProxyRegistry.sol). These actions bundle multiple actions in one (e.g: open a safe + lock some ETH + draw some system coins).
 */
var BasicActions = /** @class */ (function () {
    function BasicActions(
    /**
     * Address of the underlying proxy
     */
    proxyAddress, network, chainProvider) {
        this.proxyAddress = proxyAddress;
        this.chainProvider = chainProvider;
        this.addressList = (0, contracts_1.getAddressList)(network);
        this.tokenList = (0, addresses_1.getTokenList)(network);
        this.proxy = types.IParysProxy__factory.connect(proxyAddress, this.chainProvider);
        // Set proxy action contract addresses
        this.proxyActionCoreAddress = this.addressList.PROXY_BASIC_ACTIONS || utils_1.NULL_ADDRESS;
        this.proxyActionGlobalSettlementAddress = this.addressList.PROXY_GLOBAL_SETTLEMENT_ACTIONS || utils_1.NULL_ADDRESS;
        this.proxyActionDebtAuctionAddress = this.addressList.PROXY_DEBT_AUCTION_ACTIONS || utils_1.NULL_ADDRESS;
        this.proxyActionSurplusAuctionAddress = this.addressList.PROXY_SURPLUS_AUCTION_ACTIONS || utils_1.NULL_ADDRESS;
        this.proxyActionCollateralAuctionAddress = this.addressList.PROXY_COLLATERAL_AUCTION_ACTIONS || utils_1.NULL_ADDRESS;
        this.proxyRewardedActionsAddress = this.addressList.PROXY_REWARDED_ACTIONS || utils_1.NULL_ADDRESS;
        // Proxy contract APIs
        this.proxyActionCore = types.IBasicActions__factory.connect(this.proxyActionCoreAddress, this.chainProvider);
        this.proxyActionDebtAuction = types.IDebtBidActions__factory.connect(this.proxyActionDebtAuctionAddress, this.chainProvider);
        this.proxyActionSurplusAuction = types.ISurplusBidActions__factory.connect(this.proxyActionSurplusAuctionAddress, this.chainProvider);
        this.proxyActionCollateralAuction = types.ICollateralBidActions__factory.connect(this.proxyActionCollateralAuctionAddress, this.chainProvider);
        this.proxyActionGlobalSettlement = types.IGlobalSettlementActions__factory.connect(this.proxyActionGlobalSettlementAddress, this.chainProvider);
        this.proxyActionRewarded = types.IRewardedActions__factory.connect(this.proxyRewardedActionsAddress, this.chainProvider);
    }
    BasicActions.prototype.getProxiedTransactionRequest = function (txPromise) {
        return __awaiter(this, void 0, void 0, function () {
            var tx, ethValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, txPromise];
                    case 1:
                        tx = _a.sent();
                        ethValue = tx.value;
                        if (!ethValue) {
                            ethValue = bignumber_1.BigNumber.from('0');
                        }
                        if (tx.to === utils_1.NULL_ADDRESS) {
                            throw Error('This proxy action is not supported on this network');
                        }
                        return [2 /*return*/, this.proxy.populateTransaction.execute(tx.to, tx.data)];
                }
            });
        });
    };
    // ==== Basic Actions ====
    BasicActions.prototype.exitTokenCollateral = function (collateralJoin, amt) {
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.exitCollateral(collateralJoin, amt));
    };
    BasicActions.prototype.freeTokenCollateral = function (collateralName, safe, amt) {
        var collateralJoin = this.tokenList[collateralName].collateralJoin;
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.freeTokenCollateral(this.addressList.SAFE_MANAGER, collateralJoin, safe, amt));
    };
    BasicActions.prototype.generateDebt = function (safe, wad) {
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.generateDebt(this.addressList.SAFE_MANAGER, this.addressList.GEB_TAX_COLLECTOR, this.addressList.GEB_COIN_JOIN, safe, wad));
    };
    BasicActions.prototype.lockTokenCollateral = function (collateralName, safe, amt) {
        var collateralJoin = this.tokenList[collateralName].collateralJoin;
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.lockTokenCollateral(this.addressList.SAFE_MANAGER, collateralJoin, safe, amt));
    };
    BasicActions.prototype.lockTokenCollateralAndGenerateDebt = function (collateralName, safe, collateralAmount, deltaWad) {
        var collateralJoin = this.tokenList[collateralName].collateralJoin;
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.lockTokenCollateralAndGenerateDebt(this.addressList.SAFE_MANAGER, this.addressList.GEB_TAX_COLLECTOR, collateralJoin, this.addressList.GEB_COIN_JOIN, safe, collateralAmount, deltaWad));
    };
    BasicActions.prototype.openLockTokenCollateralAndGenerateDebt = function (collateralName, collateralAmount, deltaWad) {
        var collateralJoin = this.tokenList[collateralName].collateralJoin;
        var collateralType = this.tokenList[collateralName].bytes32String;
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.openLockTokenCollateralAndGenerateDebt(this.addressList.SAFE_MANAGER, this.addressList.GEB_TAX_COLLECTOR, collateralJoin, this.addressList.GEB_COIN_JOIN, collateralType, collateralAmount, deltaWad));
    };
    BasicActions.prototype.openSAFE = function (collateralName, usr) {
        var collateralType = this.tokenList[collateralName].bytes32String;
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.openSAFE(this.addressList.SAFE_MANAGER, collateralType, usr));
    };
    BasicActions.prototype.repayAllDebt = function (safe) {
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.repayAllDebt(this.addressList.SAFE_MANAGER, this.addressList.GEB_TAX_COLLECTOR, this.addressList.GEB_COIN_JOIN, safe));
    };
    BasicActions.prototype.repayAllDebtAndFreeTokenCollateral = function (collateralName, safe, collateralAmount) {
        var collateralJoin = this.tokenList[collateralName].collateralJoin;
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.repayAllDebtAndFreeTokenCollateral(this.addressList.SAFE_MANAGER, this.addressList.GEB_TAX_COLLECTOR, collateralJoin, this.addressList.GEB_COIN_JOIN, safe, collateralAmount));
    };
    BasicActions.prototype.repayDebt = function (safe, wad) {
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.repayDebt(this.addressList.SAFE_MANAGER, this.addressList.GEB_TAX_COLLECTOR, this.addressList.GEB_COIN_JOIN, safe, wad));
    };
    BasicActions.prototype.repayDebtAndFreeTokenCollateral = function (collateralName, safe, collateralAmount, deltaWad) {
        var collateralJoin = this.tokenList[collateralName].collateralJoin;
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.repayDebtAndFreeTokenCollateral(this.addressList.SAFE_MANAGER, this.addressList.GEB_TAX_COLLECTOR, collateralJoin, this.addressList.GEB_COIN_JOIN, safe, collateralAmount, deltaWad));
    };
    BasicActions.prototype.collectTokenCollateral = function (collateralName, safe, amt) {
        var collateralJoin = this.tokenList[collateralName].collateralJoin;
        return this.getProxiedTransactionRequest(this.proxyActionCore.populateTransaction.collectTokenCollateral(this.addressList.SAFE_MANAGER, collateralJoin, safe, amt));
    };
    // ==== Proxy Actions Global Settlement ====
    BasicActions.prototype.freeCollateralGlobalSettlement = function (collateralName, safe) {
        var collateralData = this.tokenList[collateralName];
        return this.getProxiedTransactionRequest(this.proxyActionGlobalSettlement.populateTransaction.freeCollateral(this.addressList.SAFE_MANAGER, this.addressList.GEB_GLOBAL_SETTLEMENT, collateralData.collateralJoin, safe));
    };
    BasicActions.prototype.prepareCoinsForRedeemingGlobalSettlement = function (wad) {
        return this.getProxiedTransactionRequest(this.proxyActionGlobalSettlement.populateTransaction.prepareCoinsForRedeeming(this.addressList.GEB_GLOBAL_SETTLEMENT, this.addressList.GEB_COIN_JOIN, wad));
    };
    BasicActions.prototype.redeemTokenCollateralGlobalSettlement = function (collateralName) {
        var collateralData = this.tokenList[collateralName];
        return this.getProxiedTransactionRequest(this.proxyActionGlobalSettlement.populateTransaction.redeemCollateral(this.addressList.GEB_GLOBAL_SETTLEMENT, collateralData.collateralJoin));
    };
    // ==== Proxy Actions Debt Auctions ====
    BasicActions.prototype.debtAuctionDecreaseSoldAmount = function (amountToBuy, auctionId) {
        return this.getProxiedTransactionRequest(this.proxyActionDebtAuction.populateTransaction.decreaseSoldAmount(this.addressList.GEB_COIN_JOIN, this.addressList.GEB_DEBT_AUCTION_HOUSE, auctionId, amountToBuy));
    };
    BasicActions.prototype.debtAuctionSettleAuction = function (auctionId) {
        return this.getProxiedTransactionRequest(this.proxyActionDebtAuction.populateTransaction.settleAuction(this.addressList.GEB_COIN_JOIN, this.addressList.GEB_DEBT_AUCTION_HOUSE, auctionId));
    };
    BasicActions.prototype.exitAllCoin = function () {
        return this.getProxiedTransactionRequest(this.proxyActionDebtAuction.populateTransaction.exitAllSystemCoins(this.addressList.GEB_COIN_JOIN));
    };
    BasicActions.prototype.exitCoin = function (amount) {
        return this.getProxiedTransactionRequest(this.proxyActionDebtAuction.populateTransaction.exitSystemCoins(this.addressList.GEB_COIN_JOIN, amount));
    };
    BasicActions.prototype.collectProtocolTokens = function () {
        return this.getProxiedTransactionRequest(this.proxyActionDebtAuction.populateTransaction.collectProtocolTokens(this.addressList.GEB_PROTOCOL_TOKEN));
    };
    // ==== Proxy Actions Surplus Auctions ====
    BasicActions.prototype.surplusIncreaseBidSize = function (bidSize, auctionId) {
        return this.getProxiedTransactionRequest(this.proxyActionSurplusAuction.populateTransaction.increaseBidSize(this.addressList.GEB_SURPLUS_AUCTION_HOUSE, auctionId, bidSize));
    };
    BasicActions.prototype.surplusSettleAuction = function (auctionId) {
        return this.getProxiedTransactionRequest(this.proxyActionSurplusAuction.populateTransaction.settleAuction(this.addressList.GEB_COIN_JOIN, this.addressList.GEB_SURPLUS_AUCTION_HOUSE, auctionId));
    };
    // ==== Proxy Actions Collateral Auctions ====
    BasicActions.prototype.buyCollateral = function (collateralName, auctionId, minCollateralAmount, bidAmount) {
        var collateralData = this.tokenList[collateralName];
        return this.getProxiedTransactionRequest(this.proxyActionCollateralAuction.populateTransaction.buyCollateral(this.addressList.GEB_COIN_JOIN, collateralData.collateralJoin, collateralData.collateralAuctionHouse, auctionId, minCollateralAmount, bidAmount));
    };
    // ==== Proxy Actions Post Settlement Surplus Auctions ====
    BasicActions.prototype.postSettlementSurplusIncreaseBidSize = function (bidSize, auctionId) {
        return this.getProxiedTransactionRequest(this.proxyActionSurplusAuction.populateTransaction.increaseBidSize(this.addressList.GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE, auctionId, bidSize));
    };
    BasicActions.prototype.postSettlementSurplusSettleAuction = function (auctionId) {
        return this.getProxiedTransactionRequest(this.proxyActionSurplusAuction.populateTransaction.settleAuction(this.addressList.GEB_COIN_JOIN, this.addressList.GEB_POST_SETTLEMENT_SURPLUS_AUCTION_HOUSE, auctionId));
    };
    // ==== Proxy Actions Rewarded ====
    BasicActions.prototype.popDebtFromQueue = function (debtTimestamp) {
        return this.getProxiedTransactionRequest(this.proxyActionRewarded.populateTransaction.popDebtFromQueue(this.addressList.JOB_ACCOUNTING, this.addressList.GEB_COIN_JOIN, debtTimestamp));
    };
    BasicActions.prototype.debtAuctionStart = function () {
        return this.getProxiedTransactionRequest(this.proxyActionRewarded.populateTransaction.startDebtAuction(this.addressList.JOB_ACCOUNTING, this.addressList.GEB_COIN_JOIN));
    };
    BasicActions.prototype.surplusAuctionStart = function () {
        return this.getProxiedTransactionRequest(this.proxyActionRewarded.populateTransaction.startSurplusAuction(this.addressList.JOB_ACCOUNTING, this.addressList.GEB_COIN_JOIN));
    };
    BasicActions.prototype.transferExtraSurplus = function () {
        return this.getProxiedTransactionRequest(this.proxyActionRewarded.populateTransaction.transferExtraSurplus(this.addressList.JOB_ACCOUNTING, this.addressList.GEB_COIN_JOIN));
    };
    BasicActions.prototype.liquidateSAFE = function (collateralName, safeAddress) {
        return this.getProxiedTransactionRequest(this.proxyActionRewarded.populateTransaction.liquidateSAFE(this.addressList.JOB_LIQUIDATION, this.addressList.GEB_COIN_JOIN, this.tokenList[collateralName].bytes32String, safeAddress));
    };
    BasicActions.prototype.updateOraclePrice = function (collateralName) {
        var collateralData = this.tokenList[collateralName];
        return this.getProxiedTransactionRequest(this.proxyActionRewarded.populateTransaction.updateCollateralPrice(this.addressList.JOB_ORACLES, this.addressList.GEB_COIN_JOIN, collateralData.bytes32String));
    };
    BasicActions.prototype.updateRedemptionRate = function () {
        return this.getProxiedTransactionRequest(this.proxyActionRewarded.populateTransaction.updateRedemptionRate(this.addressList.JOB_ORACLES, this.addressList.GEB_COIN_JOIN));
    };
    BasicActions.prototype.getProxy = function () {
        return this.proxy;
    };
    BasicActions.prototype.basicActions = function () {
        return types.IBasicActions__factory.connect(this.proxy.address, this.chainProvider);
    };
    BasicActions.prototype.globalSettlement = function () {
        return types.IGlobalSettlementActions__factory.connect(this.proxy.address, this.chainProvider);
    };
    BasicActions.prototype.debtBid = function () {
        return types.IDebtBidActions__factory.connect(this.proxy.address, this.chainProvider);
    };
    BasicActions.prototype.surplusBid = function () {
        return types.ISurplusBidActions__factory.connect(this.proxy.address, this.chainProvider);
    };
    BasicActions.prototype.collateralBid = function () {
        return types.ICollateralBidActions__factory.connect(this.proxy.address, this.chainProvider);
    };
    BasicActions.prototype.rewardedActions = function () {
        return types.IRewardedActions__factory.connect(this.proxy.address, this.chainProvider);
    };
    return BasicActions;
}());
exports.BasicActions = BasicActions;
//# sourceMappingURL=proxy-action.js.map