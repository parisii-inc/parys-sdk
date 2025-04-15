/**
 * Browser-specific entry point for Parys SDK
 * This file imports and re-exports everything from the main SDK
 * except it makes sure to avoid Node.js-specific dependencies
 */
export * from './index';
export declare const dotenv: {
    config: () => {
        parsed: {};
    };
    parse: () => {};
};
export declare const fs: {
    readFileSync: () => string;
    existsSync: () => boolean;
    writeFileSync: () => void;
};
export declare const path: {
    resolve: () => string;
    join: (...args: any[]) => string;
    normalize: (p: string) => string;
};
import * as sdk from './index';
export default sdk;
