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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAnalyticsData = void 0;
var ethers_1 = require("ethers");
var VirtualAnalyticsData_json_1 = __importDefault(require("../artifacts/contracts/VirtualAnalyticsData.sol/VirtualAnalyticsData.json"));
function fetchAnalyticsData(geb) {
    return __awaiter(this, void 0, void 0, function () {
        var tokenList, inputData, payload, returnedData, decoded, result, parsedResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tokenList = Object.values(geb.tokenList)
                        .map(function (token) { return token.bytes32String; })
                        .filter(function (address) { return address !== undefined && address !== '' && address; });
                    inputData = ethers_1.ethers.utils.defaultAbiCoder.encode(['address', 'address', 'address', 'address', 'address', 'address', 'bytes32[]'], [
                        geb.contracts.systemCoin.address,
                        geb.contracts.safeEngine.address,
                        geb.contracts.oracleRelayer.address,
                        geb.contracts.piCalculator.address,
                        geb.contracts.taxCollector.address,
                        geb.contracts.stabilityFeeTreasury.address,
                        tokenList,
                    ]);
                    payload = VirtualAnalyticsData_json_1.default.bytecode.concat(inputData.slice(2));
                    return [4 /*yield*/, geb.provider.call({ data: payload })
                        // Parse the returned value to the struct type in order
                    ];
                case 1:
                    returnedData = _a.sent();
                    decoded = ethers_1.ethers.utils.defaultAbiCoder.decode([
                        "tuple(\n                uint256 erc20Supply,\n                uint256 globalDebt,\n                uint256 globalDebtCeiling,\n                uint256 globalUnbackedDebt,\n                uint256 marketPrice, \n                uint256 redemptionPrice, \n                uint256 redemptionRate, \n                uint256 redemptionRatePTerm, \n                uint256 redemptionRateITerm, \n                uint256 surplusInTreasury, \n                tuple(\n                    address delayedOracle, \n                    uint256 debtAmount, \n                    uint256 debtCeiling, \n                    uint256 lockedAmount,\n                    uint256 currentPrice, \n                    uint256 nextPrice,\n                    uint256 stabilityFee\n                    )[] tokenAnalyticsData)",
                    ], returnedData)[0];
                    result = Object.entries(geb.tokenList)
                        .filter(function (_a) {
                        var value = _a[1];
                        return value.isCollateral;
                    })
                        .reduce(function (obj, _a, i) {
                        var _b;
                        var _c, _d, _e, _f, _g, _h, _j;
                        var key = _a[0];
                        return (__assign(__assign({}, obj), (_b = {}, _b[key] = {
                            delayedOracle: (_c = decoded === null || decoded === void 0 ? void 0 : decoded.tokenAnalyticsData[i]) === null || _c === void 0 ? void 0 : _c.delayedOracle,
                            debtAmount: (_d = decoded === null || decoded === void 0 ? void 0 : decoded.tokenAnalyticsData[i]) === null || _d === void 0 ? void 0 : _d.debtAmount.toString(),
                            debtCeiling: (_e = decoded === null || decoded === void 0 ? void 0 : decoded.tokenAnalyticsData[i]) === null || _e === void 0 ? void 0 : _e.debtCeiling.toString(),
                            lockedAmount: (_f = decoded === null || decoded === void 0 ? void 0 : decoded.tokenAnalyticsData[i]) === null || _f === void 0 ? void 0 : _f.lockedAmount.toString(),
                            currentPrice: (_g = decoded === null || decoded === void 0 ? void 0 : decoded.tokenAnalyticsData[i]) === null || _g === void 0 ? void 0 : _g.currentPrice.toString(),
                            nextPrice: (_h = decoded === null || decoded === void 0 ? void 0 : decoded.tokenAnalyticsData[i]) === null || _h === void 0 ? void 0 : _h.nextPrice.toString(),
                            stabilityFee: (_j = decoded === null || decoded === void 0 ? void 0 : decoded.tokenAnalyticsData[i]) === null || _j === void 0 ? void 0 : _j.stabilityFee.toString(),
                        }, _b)));
                    }, {});
                    parsedResult = {
                        erc20Supply: decoded.erc20Supply.toString(),
                        globalDebt: decoded.globalDebt.toString(),
                        globalDebtCeiling: decoded.globalDebtCeiling.toString(),
                        globalUnbackedDebt: decoded.globalUnbackedDebt.toString(),
                        marketPrice: decoded.marketPrice.toString(),
                        redemptionPrice: decoded.redemptionPrice.toString(),
                        redemptionRate: decoded.redemptionRate.toString(),
                        redemptionRatePTerm: decoded.redemptionRatePTerm.toString(),
                        redemptionRateITerm: decoded.redemptionRateITerm.toString(),
                        surplusInTreasury: decoded.surplusInTreasury.toString(),
                        tokenAnalyticsData: result,
                    };
                    return [2 /*return*/, parsedResult];
            }
        });
    });
}
exports.fetchAnalyticsData = fetchAnalyticsData;
//# sourceMappingURL=virtualAnalyticsData.js.map