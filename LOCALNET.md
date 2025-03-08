# Using Localnet for Development

This feature allows you to easily work with local contract deployments during development by dynamically loading contract addresses from JSON files.

## Setup

1. Create a `.env` file in your project root with the following variables:

```
LOCAL_CONTRACTS_PATH=./path/to/your/contracts.json
LOCAL_TOKENS_PATH=./path/to/your/tokens.json
```

2. Create your contract addresses JSON file based on the provided sample (`sample-contracts.json`).
3. Create your token definitions JSON file based on the provided sample (`sample-tokens.json`).

## Usage

When initializing the Geb SDK, specify 'localnet' as the network:

```typescript
import { Geb } from '@hai-on-op/sdk'

// Initialize with local contracts
const geb = new Geb('localnet', provider)
```

## How It Works

When using the 'localnet' network:

1. The SDK looks for the environment variables `LOCAL_CONTRACTS_PATH` and `LOCAL_TOKENS_PATH`
2. It loads contract addresses and token definitions from the JSON files specified in these variables
3. If any required contract addresses are missing from your JSON file, it will use the corresponding mainnet values as fallbacks
4. If either file is missing or can't be loaded, the SDK will fall back to using mainnet addresses

## Example

Here's a complete example of initializing the SDK with localnet:

```typescript
import { Geb } from '@hai-on-op/sdk'
import { ethers } from 'ethers'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Connect to your local Anvil node
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')

// Initialize the SDK with localnet
const geb = new Geb('localnet', provider)

// Now you can use the SDK with your local contracts
const safeEngine = geb.contracts.safeEngine
```

## Tips

- Make sure your JSON files follow the exact format shown in the sample files
- Update your JSON files whenever you redeploy your contracts
- You can update just a subset of contracts - any missing ones will use mainnet values
- Check your console for warnings about missing contract addresses or tokens 