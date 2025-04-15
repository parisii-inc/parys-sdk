"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiquidationActions = void 0;
/**
 * The main package used to interact with the GEB system. Includes [[deployProxy |helper functions]] for safe
 *  management and the [[contracts | contract interface object]] to directly call smart contracts.
 */
var LiquidationActions = /** @class */ (function () {
    /**
     * Constructor for the main Geb.js object.
     * @param  {GebDeployment} network Either `'kovan'`, `'mainnet'` or an actual list of contract addresses.
     * @param  {GebProviderInterface|ethers.providers.Provider} provider Either a Ethers.js provider or a Geb provider (support for Web3 will be added in the future)
     */
    function LiquidationActions(contracts, tokenList) {
        this.contracts = contracts;
        this.tokenList = tokenList;
    }
    // ==== Liquidation Actions ====
    LiquidationActions.prototype.liquidateSAFE = function (safeId) {
        var _this = this;
        return this.contracts.safeManager
            .safeData(safeId)
            .then(function (safeData) {
            return _this.contracts.liquidationEngine.populateTransaction.liquidateSAFE(safeData.collateralType, safeData.safeHandler);
        });
    };
    return LiquidationActions;
}());
exports.LiquidationActions = LiquidationActions;
//# sourceMappingURL=liquidation-actions.js.map