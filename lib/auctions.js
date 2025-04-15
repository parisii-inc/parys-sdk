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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auctions = void 0;
var auction_1 = require("./schema/auction");
/**
 * The main package used to interact with the GEB system. Includes [[deployProxy |helper functions]] for safe
 *  management and the [[contracts | contract interface object]] to directly call smart contracts.
 */
var Auctions = /** @class */ (function () {
    /**
     * Constructor for the main Geb.js object.
     * @param  {GebDeployment} network Either `'kovan'`, `'mainnet'` or an actual list of contract addresses.
     * @param  {GebProviderInterface|ethers.providers.Provider} provider Either a Ethers.js provider or a Geb provider (support for Web3 will be added in the future)
     */
    function Auctions(contracts) {
        this.contracts = contracts;
        // Surplus Auctions
        this.surplusStartAuctionFilter = this.contracts.surplusAuctionHouse.filters.StartAuction();
        this.surplusBidFilter = this.contracts.surplusAuctionHouse.filters.IncreaseBidSize();
        this.surplusRestartAuctionFilter = this.contracts.surplusAuctionHouse.filters.RestartAuction();
        this.surplusSettleAuctionFilter = this.contracts.surplusAuctionHouse.filters.SettleAuction();
        // Debt Auctions
        this.debtStartAuctionFilter = this.contracts.debtAuctionHouse.filters.StartAuction();
        this.debtDecreaseSoldAmountFilter = this.contracts.debtAuctionHouse.filters.DecreaseSoldAmount();
        this.debtRestartAuctionFilter = this.contracts.debtAuctionHouse.filters.RestartAuction();
        this.debtSettleAuctionFilter = this.contracts.debtAuctionHouse.filters.SettleAuction();
    }
    Auctions.prototype.getSurplusAuctions = function (fromBlock, toBlock) {
        var startAuctionEvents = this.contracts.surplusAuctionHouse.queryFilter(this.surplusStartAuctionFilter, fromBlock, toBlock);
        var bidFilterEvents = this.contracts.surplusAuctionHouse.queryFilter(this.surplusBidFilter, fromBlock, toBlock);
        var restartAuctionEvents = this.contracts.surplusAuctionHouse.queryFilter(this.surplusRestartAuctionFilter, fromBlock, toBlock);
        var settledAuctionEvents = this.contracts.surplusAuctionHouse.queryFilter(this.surplusSettleAuctionFilter, fromBlock, toBlock);
        return Promise.all([startAuctionEvents, bidFilterEvents, restartAuctionEvents, settledAuctionEvents]).then(function (_a) {
            var startAuction = _a[0], bidEvents = _a[1], restartAuctions = _a[2], settledAuctions = _a[3];
            var bids = bidEvents.reduce(function (accum, bid) {
                var _a;
                var parsedBid = (0, auction_1.bidEventToBid)(bid);
                var id = bid.args._id.toString();
                var bidsForId = accum[id];
                return __assign(__assign({}, accum), (_a = {}, _a[id] = bidsForId ? bidsForId.concat(parsedBid) : [parsedBid], _a));
            }, {});
            var restarts = restartAuctions.reduce(function (accum, restart) {
                var _a;
                var id = restart.args._id.toString();
                var lastRestart = accum[id];
                var newRestart = restart.args._auctionDeadline; // Do events always come ordered correctly?
                return __assign(__assign({}, accum), (_a = {}, _a[id] = !lastRestart || newRestart.gt(lastRestart) ? newRestart : lastRestart, _a));
            }, {});
            var settled = settledAuctions.reduce(function (accum, settled) {
                var _a;
                var id = settled.args._id.toString();
                return __assign(__assign({}, accum), (_a = {}, _a[id] = true, _a));
            }, {});
            var auctions = startAuction.map(function (auc) {
                return (0, auction_1.surplusStartAuctionEventToAuction)(auc, bids, restarts, settled);
            });
            return { auctions: auctions };
        });
    };
    Auctions.prototype.getDebtAuctions = function (fromBlock, toBlock) {
        var startAuctionEvents = this.contracts.debtAuctionHouse.queryFilter(this.debtStartAuctionFilter, fromBlock, toBlock);
        var bidFilterEvents = this.contracts.debtAuctionHouse.queryFilter(this.debtDecreaseSoldAmountFilter, fromBlock, toBlock);
        var restartAuctionEvents = this.contracts.debtAuctionHouse.queryFilter(this.debtRestartAuctionFilter, fromBlock, toBlock);
        var settledAuctionEvents = this.contracts.debtAuctionHouse.queryFilter(this.debtSettleAuctionFilter, fromBlock, toBlock);
        return Promise.all([startAuctionEvents, bidFilterEvents, restartAuctionEvents, settledAuctionEvents]).then(function (_a) {
            var startAuction = _a[0], bidEvents = _a[1], restartAuctions = _a[2], settledAuctions = _a[3];
            var bids = bidEvents.reduce(function (accum, bid) {
                var _a;
                var parsedBid = (0, auction_1.bidEventToBid)(bid);
                var id = bid.args._id.toString();
                var bidsForId = accum[id];
                return __assign(__assign({}, accum), (_a = {}, _a[id] = bidsForId ? bidsForId.concat(parsedBid) : [parsedBid], _a));
            }, {});
            var restarts = restartAuctions.reduce(function (accum, restart) {
                var _a;
                var id = restart.args._id.toString();
                var lastRestart = accum[id];
                var newRestart = restart.args._auctionDeadline; // Do events always come ordered correctly?
                return __assign(__assign({}, accum), (_a = {}, _a[id] = !lastRestart || newRestart.gt(lastRestart) ? newRestart : lastRestart, _a));
            }, {});
            var settled = settledAuctions.reduce(function (accum, settled) {
                var _a;
                var id = settled.args._id.toString();
                return __assign(__assign({}, accum), (_a = {}, _a[id] = true, _a));
            }, {});
            var auctions = startAuction.map(function (auc) { return (0, auction_1.debtStartAuctionEventToAuction)(auc, bids, restarts, settled); });
            return { auctions: auctions };
        });
    };
    Auctions.prototype.getCollateralAuctions = function (collateral, fromBlock, toBlock) {
        var collateralAuctionHouse = this.contracts.tokenCollateralAuctionHouse[collateral];
        var startFilter = collateralAuctionHouse.filters.StartAuction();
        var buyCollateralFilter = collateralAuctionHouse.filters.BuyCollateral();
        var settleAuctionFilter = collateralAuctionHouse.filters.SettleAuction();
        return Promise.all([
            collateralAuctionHouse.queryFilter(startFilter, fromBlock, toBlock),
            collateralAuctionHouse.queryFilter(buyCollateralFilter, fromBlock, toBlock),
            collateralAuctionHouse.queryFilter(settleAuctionFilter, fromBlock, toBlock),
        ]).then(function (_a) {
            var startAuction = _a[0], buyEvents = _a[1], settleEvents = _a[2];
            var bids = buyEvents.reduce(function (accum, bid) {
                var _a;
                var parsedBid = (0, auction_1.collateralBidEventToBid)(bid);
                var id = bid.args._id.toString();
                var bidsForId = accum[id];
                return __assign(__assign({}, accum), (_a = {}, _a[id] = bidsForId ? bidsForId.concat(parsedBid) : [parsedBid], _a));
            }, {});
            var settled = settleEvents.reduce(function (accum, settled) {
                var _a;
                var id = settled.args._id.toString();
                return __assign(__assign({}, accum), (_a = {}, _a[id] = true, _a));
            }, {});
            var auctions = startAuction.map(function (auc) { return (0, auction_1.collateralStartAuctionEventToAuction)(auc, bids, settled); });
            return { auctions: auctions };
        });
    };
    return Auctions;
}());
exports.Auctions = Auctions;
//# sourceMappingURL=auctions.js.map