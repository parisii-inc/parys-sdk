"use strict";
// Browser-compatible environment handling
// This replaces Node.js specific modules like fs and dotenv in browser environments
Object.defineProperty(exports, "__esModule", { value: true });
exports.cwd = exports.path = exports.fs = exports.dotenv = exports.dotenvConfig = exports.isBrowser = exports.env = void 0;
// Default empty environment variables for browser context
exports.env = {
    // Add any environment variables you want to provide default values for
    NETWORK: 'localnet',
};
// Browser-compatible utility to determine if running in browser
exports.isBrowser = typeof window !== 'undefined';
// Mock for dotenv/config
exports.dotenvConfig = {
    config: function () {
        if (exports.isBrowser) {
            console.log('dotenv not available in browser, using default config');
        }
        return {};
    },
};
// Mocked dotenv
exports.dotenv = {
    config: exports.dotenvConfig.config,
    parse: function () { return ({}); },
    parsed: {},
};
// Mocked fs functions for browser
exports.fs = {
    readFileSync: function (path, options) {
        // In browser context, we can't read files
        console.warn("Browser attempted to read file: ".concat(path));
        return '{}';
    },
    existsSync: function (path) {
        // In browser context, files don't exist on filesystem
        return false;
    },
    writeFileSync: function (path, data, options) {
        console.warn("Browser attempted to write file: ".concat(path));
        // No-op in browser context
    },
};
// Mocked path for browser
exports.path = {
    resolve: function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        return paths.join('/');
    },
    join: function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        return paths.join('/');
    },
    normalize: function (path) {
        return path;
    },
};
// Mock for process.cwd()
var cwd = function () { return '/'; };
exports.cwd = cwd;
// If we're in a browser, patch the global objects
if (exports.isBrowser) {
    ;
    window.process = window.process || {
        env: {},
        browser: true,
        version: '',
        cwd: exports.cwd,
    };
}
//# sourceMappingURL=browser-env.js.map