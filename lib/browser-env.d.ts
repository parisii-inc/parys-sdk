export declare const env: {
    NETWORK: string;
};
export declare const isBrowser: boolean;
export declare const dotenvConfig: {
    config: () => {};
};
export declare const dotenv: {
    config: () => {};
    parse: () => {};
    parsed: {};
};
export declare const fs: {
    readFileSync: (path: string, options?: {
        encoding: string;
    }) => string;
    existsSync: (path: string) => boolean;
    writeFileSync: (path: string, data: string, options?: {
        encoding: string;
    }) => void;
};
export declare const path: {
    resolve: (...paths: string[]) => string;
    join: (...paths: string[]) => string;
    normalize: (path: string) => string;
};
export declare const cwd: () => string;
