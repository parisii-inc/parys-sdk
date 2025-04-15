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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerkleDistributor = void 0;
var types = __importStar(require("./typechained"));
var ethers_1 = require("ethers");
// import { MerkleDistributor } from './generated/MerkleDistributor'
// import { MerkleDistributorFactory } from './generated/MerkleDistributorFactory'
/**
 * The main package used to interact with the GEB system. Includes [[deployProxy |helper functions]] for safe
 *  management and the [[contracts | contract interface object]] to directly call smart contracts.
 */
var MerkleDistributor = /** @class */ (function () {
    /**
     * Constructor for the main Geb.js object.
     * @param  {GebDeployment} network Either `'mainnet'`, `'optimism-sepolia'` or an actual list of contract addresses.
     * @param  {GebProviderInterface|ethers.providers.Provider} provider Either a Ethers.js provider or a Geb provider (support for Web3 will be added in the future)
     */
    function MerkleDistributor(contracts, provider) {
        this.contracts = contracts;
        this.provider = provider;
    }
    MerkleDistributor.prototype.getMerkleDistributor = function (distributorAddress) {
        return new ethers_1.ethers.Contract(distributorAddress, types.IMerkleDistributor__factory.abi, this.provider);
    };
    return MerkleDistributor;
}());
exports.MerkleDistributor = MerkleDistributor;
//# sourceMappingURL=merkle-distributor.js.map