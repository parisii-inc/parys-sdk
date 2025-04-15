"use strict";
/**
 * Browser-specific entry point for Parys SDK
 * This file imports and re-exports everything from the main SDK
 * except it makes sure to avoid Node.js-specific dependencies
 */
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = exports.fs = exports.dotenv = void 0;
// Set up browser environment
if (typeof window !== 'undefined') {
    // Create mock process for browser
    ;
    window.process = window.process || {
        env: {},
        browser: true,
        version: '',
        cwd: function () { return '/'; },
    };
}
// Re-export everything from the main SDK
// This ensures we don't have to change import paths in the application
__exportStar(require("./index"), exports);
// Export mock modules for Node.js built-ins
// These exports should match variable names used in the SDK so they get resolved properly
exports.dotenv = {
    config: function () { return ({ parsed: {} }); },
    parse: function () { return ({}); },
};
exports.fs = {
    readFileSync: function () { return '{}'; },
    existsSync: function () { return false; },
    writeFileSync: function () { },
};
exports.path = {
    resolve: function () { return ''; },
    join: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.join('/');
    },
    normalize: function (p) { return p; },
};
// Export a default object with all the exports
var sdk = __importStar(require("./index"));
exports.default = sdk;
//# sourceMappingURL=browser.js.map