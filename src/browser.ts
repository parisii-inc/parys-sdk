/**
 * Browser-specific entry point for Parys SDK
 * This file imports and re-exports everything from the main SDK
 * except it makes sure to avoid Node.js-specific dependencies
 */

// Set up browser environment
if (typeof window !== 'undefined') {
    // Create mock process for browser
    ;(window as any).process = (window as any).process || {
        env: {},
        browser: true,
        version: '',
        cwd: () => '/',
    }
}

// Re-export everything from the main SDK
// This ensures we don't have to change import paths in the application
export * from './index'

// Export mock modules for Node.js built-ins
// These exports should match variable names used in the SDK so they get resolved properly
export const dotenv = {
    config: () => ({ parsed: {} }),
    parse: () => ({}),
}

export const fs = {
    readFileSync: () => '{}',
    existsSync: () => false,
    writeFileSync: () => {},
}

export const path = {
    resolve: () => '',
    join: (...args: any[]) => args.join('/'),
    normalize: (p: string) => p,
}

// Export a default object with all the exports
import * as sdk from './index'
export default sdk
