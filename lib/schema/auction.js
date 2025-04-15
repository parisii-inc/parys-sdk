"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collateralBidEventToBid = exports.bidEventToBid = exports.collateralStartAuctionEventToAuction = exports.debtStartAuctionEventToAuction = exports.surplusStartAuctionEventToAuction = void 0;
function surplusStartAuctionEventToAuction(startAuction, bids, restarts, settled) {
    var id = startAuction.args._id.toString();
    return {
        auctionId: id,
        auctioneer: startAuction.args._auctioneer,
        auctionDeadline: restarts[id] ? restarts[id].toString() : startAuction.args._auctionDeadline.toString(),
        amount: startAuction.args._amountToSell.toString(),
        initialBid: startAuction.args._amountToRaise.toString(),
        createdAt: startAuction.args._blockTimestamp.toString(),
        createdAtTransaction: startAuction.transactionHash.toString(),
        biddersList: bids[id] || [],
        isClaimed: settled[id] || false,
    };
}
exports.surplusStartAuctionEventToAuction = surplusStartAuctionEventToAuction;
function debtStartAuctionEventToAuction(startAuction, bids, restarts, settled) {
    var id = startAuction.args._id.toString();
    return {
        auctionId: id,
        auctioneer: startAuction.args._auctioneer,
        auctionDeadline: restarts[id] ? restarts[id].toString() : startAuction.args._auctionDeadline.toString(),
        amount: startAuction.args._amountToSell.toString(),
        initialBid: startAuction.args._amountToRaise.toString(),
        createdAt: startAuction.args._blockTimestamp.toString(),
        createdAtTransaction: startAuction.transactionHash.toString(),
        biddersList: bids[id] || [],
        isClaimed: settled[id] || false,
    };
}
exports.debtStartAuctionEventToAuction = debtStartAuctionEventToAuction;
function collateralStartAuctionEventToAuction(startAuction, bids, settled) {
    return {
        auctionId: startAuction.args._id.toString(),
        auctioneer: startAuction.args._auctioneer,
        createdAt: startAuction.args._blockTimestamp.toString(),
        createdAtTransaction: startAuction.transactionHash.toString(),
        amountToSell: startAuction.args._amountToSell.toString(),
        initialBid: startAuction.args._amountToRaise.toString(),
        amountToRaise: startAuction.args._amountToRaise.toString(),
        isClaimed: settled[startAuction.args._id.toString()] || false,
        biddersList: bids[startAuction.args._id.toString()] || [],
    };
}
exports.collateralStartAuctionEventToAuction = collateralStartAuctionEventToAuction;
function bidEventToBid(bid) {
    return {
        bidder: bid.args._bidder,
        bid: bid.args._raisedAmount.toString(),
        createdAt: bid.args._blockTimestamp.toString(),
        buyAmount: bid.args._soldAmount.toString(),
        createdAtTransaction: bid.transactionHash,
    };
}
exports.bidEventToBid = bidEventToBid;
function collateralBidEventToBid(bid) {
    return {
        bidder: bid.args._bidder,
        createdAt: bid.args._blockTimestamp.toString(),
        bid: bid.args._soldAmount.toString(),
        buyAmount: bid.args._raisedAmount.toString(),
        createdAtTransaction: bid.transactionHash,
    };
}
exports.collateralBidEventToBid = collateralBidEventToBid;
//# sourceMappingURL=auction.js.map