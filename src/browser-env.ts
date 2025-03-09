// Browser-compatible environment handling
// This replaces Node.js specific modules like fs and dotenv in browser environments

// Default empty environment variables for browser context
export const env = {
    // Add any environment variables you want to provide default values for
    NETWORK: 'localnet',
}

// Browser-compatible utility to determine if running in browser
export const isBrowser = typeof window !== 'undefined'

// Mock for dotenv/config
export const dotenvConfig = {
    config: () => {
        if (isBrowser) {
            console.log('dotenv not available in browser, using default config')
        }
        return {}
    },
}

// Mocked dotenv
export const dotenv = {
    config: dotenvConfig.config,
    parse: () => ({}),
    parsed: {},
}

// Mocked fs functions for browser
export const fs = {
    readFileSync: (path: string, options?: { encoding: string }): string => {
        // In browser context, we can't read files
        console.warn(`Browser attempted to read file: ${path}`)
        return '{}'
    },
    existsSync: (path: string): boolean => {
        // In browser context, files don't exist on filesystem
        return false
    },
    writeFileSync: (path: string, data: string, options?: { encoding: string }): void => {
        console.warn(`Browser attempted to write file: ${path}`)
        // No-op in browser context
    },
}

// Mocked path for browser
export const path = {
    resolve: (...paths: string[]): string => {
        return paths.join('/')
    },
    join: (...paths: string[]): string => {
        return paths.join('/')
    },
    normalize: (path: string): string => {
        return path
    },
}

// Mock for process.cwd()
export const cwd = () => '/'

// If we're in a browser, patch the global objects
if (isBrowser) {
    ;(window as any).process = (window as any).process || {
        env: {},
        browser: true,
        version: '',
        cwd,
    }
}
