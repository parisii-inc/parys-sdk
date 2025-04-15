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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geb = void 0;
var ethers_1 = require("ethers");
var contract_apis_1 = require("./api/contract-apis");
var auctions_1 = require("./auctions");
var addresses_1 = require("./contracts/addresses");
var index_1 = require("./contracts/index");
var errors_1 = require("./errors");
var proxy_action_1 = require("./proxy-action");
var typechained_1 = require("./typechained");
var utils_1 = require("./utils");
var liquidation_actions_1 = require("./liquidation-actions");
var merkle_distributor_1 = require("./merkle-distributor");
/**
 * The main package used to interact with the GEB system. Includes [[deployProxy |helper functions]] for safe
 *  management and the [[contracts | contract interface object]] to directly call smart contracts.
 */
var Geb = /** @class */ (function () {
    /**
     * Constructor for the main Geb.js object.
     * @param  {GebDeployment} network Either `'kovan'`, `'mainnet'` or an actual list of contract addresses.
     * @param  {GebProviderInterface|ethers.providers.Provider} provider Either a Ethers.js provider or a Geb provider (support for Web3 will be added in the future)
     */
    function Geb(network, signerOrProvider) {
        var _this = this;
        this.network = network;
        if (ethers_1.ethers.providers.JsonRpcSigner.isSigner(signerOrProvider)) {
            this.signer = signerOrProvider;
            this.provider = signerOrProvider.provider;
        }
        else if (ethers_1.ethers.providers.Provider.isProvider(signerOrProvider)) {
            this.provider = signerOrProvider;
        }
        else {
            throw new errors_1.GebError(errors_1.GebErrorTypes.INVALID_PROVIDER);
        }
        // Initialize with the provided network
        this.addresses = (0, index_1.getAddressList)(network);
        this.tokenList = (0, addresses_1.getTokenList)(network);
        this.contracts = new contract_apis_1.ContractApis(network, signerOrProvider);
        this.auctions = new auctions_1.Auctions(this.contracts);
        this.liquidations = new liquidation_actions_1.LiquidationActions(this.contracts, this.tokenList);
        this.distributors = new merkle_distributor_1.MerkleDistributor(this.contracts, this.provider);
        // Check if we're connected to a local network (31337)
        this.provider
            .getNetwork()
            .then(function (networkInfo) {
            //console.log(`[SDK] Connected to network ID: ${networkInfo.chainId}`)
            if (networkInfo.chainId === 31337 && network !== 'localnet') {
                console.log('[SDK] Local network detected (31337), but not using localnet configuration. Reinitializing...');
                // Reinitialize with localnet
                _this.network = 'localnet';
                _this.addresses = (0, index_1.getAddressList)('localnet');
                _this.tokenList = (0, addresses_1.getTokenList)('localnet');
                _this.contracts = new contract_apis_1.ContractApis('localnet', signerOrProvider);
                _this.auctions = new auctions_1.Auctions(_this.contracts);
                _this.liquidations = new liquidation_actions_1.LiquidationActions(_this.contracts, _this.tokenList);
                _this.distributors = new merkle_distributor_1.MerkleDistributor(_this.contracts, _this.provider);
            }
        })
            .catch(function (error) {
            console.error('[SDK] Error detecting network:', error);
        });
    }
    /**
     * Given an address, it returns a BasicActions object used to execute bundled operations.
     * Important: This requires that the address deployed a GEB proxy through the proxy registry contract. It will throw a `DOES_NOT_OWN_HAVE_PROXY` error if the address specified does not have a proxy. Use the [[deployProxy]] function to get a new proxy.
     * @param ownerAddress Externally owned user account aka Ethereum address that owns a GEB proxy.
     */
    Geb.prototype.getProxyAction = function (ownerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contracts.proxyFactory.proxies(ownerAddress)];
                    case 1:
                        address = _a.sent();
                        if (address === utils_1.NULL_ADDRESS) {
                            throw new errors_1.GebError(errors_1.GebErrorTypes.DOES_NOT_OWN_HAVE_PROXY);
                        }
                        return [2 /*return*/, new proxy_action_1.BasicActions(address, this.network, this.signer.provider)];
                }
            });
        });
    };
    /**
     * Deploy a new proxy owned by the sender.
     */
    Geb.prototype.deployProxy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contracts.proxyFactory['build()']()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
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
    Geb.prototype.getErc20Contract = function (tokenAddress) {
        return typechained_1.ERC20__factory.connect(tokenAddress, this.signer || this.provider);
    };
    return Geb;
}());
exports.Geb = Geb;
//# sourceMappingURL=geb.js.map