"use strict";
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
exports.fetchAuctionData = void 0;
var ethers_1 = require("ethers");
var VirtualAuctionsData_json_1 = __importDefault(require("../artifacts/contracts/VirtualAuctionsData.sol/VirtualAuctionsData.json"));
function fetchAuctionData(geb, proxyAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var inputData, payload, returnedData, decoded;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputData = ethers_1.ethers.utils.defaultAbiCoder.encode(['address', 'address', 'address', 'address', 'address', 'address', 'address'], [
                        geb.contracts.surplusAuctionHouse.address,
                        geb.contracts.debtAuctionHouse.address,
                        geb.contracts.accountingEngine.address,
                        geb.contracts.safeEngine.address,
                        proxyAddress,
                        geb.tokenList.AGREE.address,
                        geb.tokenList.PARYS.address,
                    ]);
                    payload = VirtualAuctionsData_json_1.default.bytecode.concat(inputData.slice(2));
                    return [4 /*yield*/, geb.provider.call({ data: payload })
                        // Parse the returned value to the struct type in order
                    ];
                case 1:
                    returnedData = _a.sent();
                    decoded = ethers_1.ethers.utils.defaultAbiCoder.decode([
                        "tuple(\n                tuple(\n                    uint256 bidIncrease,\n                    uint256 bidDuration,\n                    uint256 totalAuctionLength,\n                    address bidReceiver,\n                    uint256 recyclingPercentage\n                    ) surplusAuctionHouseParams, \n                tuple(\n                    uint256 bidDecrease,\n                    uint256 amountSoldIncrease,\n                    uint256 bidDuration,\n                    uint256 totalAuctionLength\n                    ) debtAuctionHouseParams,\n                tuple(\n                    tuple(\n                        uint256 surplusIsTransferred,\n                        uint256 surplusDelay,\n                        uint256 popDebtDelay,\n                        uint256 disableCooldown,\n                        uint256 surplusAmount,\n                        uint256 surplusBuffer,\n                        uint256 debtAuctionMintedTokens,\n                        uint256 debtAuctionBidSize\n                        ) accountingEngineParams,\n                    uint256 totalOnAuctionDebt,\n                    uint256 totalQueuedDebt,\n                    uint256 debtQueue,\n                    uint256 lastSurplusTime,\n                    uint256 unqueuedUnauctionedDebt,\n                    uint256 disableTimestamp,\n                    uint256 coinBalance,\n                    uint256 debtBalance\n                ) accountingEngineData,\n                uint256 protocolTokenProxyBalance,\n                uint256 coinTokenProxyBalance,\n                uint256 coinTokenSafeBalance\n            )",
                    ], returnedData)[0];
                    return [2 /*return*/, decoded];
            }
        });
    });
}
exports.fetchAuctionData = fetchAuctionData;
//# sourceMappingURL=virtualAuctionData.js.map