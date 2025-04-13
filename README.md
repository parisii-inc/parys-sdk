
# SDK

Library to interact with the PARYS Protocol smart contracts. Manage your safes, mint PARYS, inspect the system state, and much more.

The library is written in Typescript with full typing support. It allows access to the low level API to directly interact with the contracts.

## Install

```
npm install @parisii-inc/parys-sdk
```


## Examples

This is a complete example of how you can inspect a SAFE and also open a new one using your own proxy:
```typescript
import { ethers, utils as ethersUtils } from 'ethers'
import { Geb, utils } from '@parisii-inc/parys-sdk'

// Setup Ether.js
const provider = new ethers.providers.JsonRpcProvider(
    'http://kovan.infura.io/<API KEY>'
)
const wallet = new ethers.Wallet('0xdefiisawesome...', provider)

// Create the main GEB object
const geb = new Geb('kovan', provider)

// Get a SAFE
const safe = await geb.getSafe(4)
console.log(`Safe id 4 has: ${utils.wadToFixed(safe.debt).toString()} PARYS of debt.`)
console.log(`It will get liquidated if ETH price falls below ${(await safe.liquidationPrice())?.toString()} USD.`)

// Open a new SAFE, lock ETH and draw PARYS in a single transaction using a proxy
// Note: Before doing this you need to create your own proxy

// We first need to check that the system didn't reach the debt ceiling so that we can
// mint more PARYS.
const globalDebt = await geb.contracts.safeEngine.globalDebt()
const debtCeiling = await geb.contracts.safeEngine.globalDebtCeiling()
const PARYSToDraw = ethersUtils.parseEther('15')
if(globalDebt.add(PARYSToDraw).gt(debtCeiling)) {
    throw new Error('Debt ceiling too low, not possible to draw this amount of PARYS.')
}

// We're good to mint some PARYS! 
const proxy = await geb.getProxyAction(wallet.address)
const tx = proxy.openLockETHAndGenerateDebt(
    ethersUtils.parseEther('1'), // Lock 1 Ether
    utils.ETH_A,                 // Of collateral ETH
    PARYSToDraw                    // And draw 15 PARYS
)

tx.gasPrice = ethers.BigNumber.from('80').mul('1000000000') // Set the gas price to 80 Gwei
const pending = await wallet.sendTransaction(tx) // Send the transaction
console.log(`Transaction ${pending.hash} waiting to be mined...`)
await pending.wait() // Wait for it to be mined
console.log('Transaction mined, safe opened!')
```
## Additional examples
In the examples below we assume the variables are defined like in the complete example above.

1. [Deploy a new proxy](#deploy-a-new-proxy)
2. [Partial repay of safe debt](#partial-repay-of-safe-debt)
3. [Complete repay of safe debt](#complete-repay-of-safe-debt)
4. [Withdraw Ether collateral](#withdraw-ether-collateral)
5. [Make direct contract calls](#make-direct-contract-calls)

### Deploy a new proxy

```typescript
const tx = geb.deployProxy()
await wallet.sendTransaction(tx)
```

### Partial repay of safe debt
```typescript
const proxy = await geb.getProxyAction("0xdefidream...")

// You first need to approve your proxy to spend your PARYS
let tx =  geb.contracts.systemCoin.approve(proxy.proxyAddress, ethers.constants.MaxUint256)
await wallet.sendTransaction(tx)

// Repay 1 PARYS of debt to SAFE #4
tx = proxy.repayDebt(4, ethersUtils.parseEther('1'))
await wallet.sendTransaction(tx)
```

### Complete repay of safe debt
```typescript
const proxy = await geb.getProxyAction("0xdefidream...")

// You first need to approve your proxy to spend your PARYS
let tx =  geb.contracts.systemCoin.approve(proxy.proxyAddress, ethers.constants.MaxUint256)
await wallet.sendTransaction(tx)

// Repay all debt of SAFE #4
tx = proxy.repayAllDebt(4)
await wallet.sendTransaction(tx)
```

### Withdraw Ether collateral
```typescript
const proxy = await geb.getProxyAction("0xdefidream...")
// Unlock 1 ETH of collateral from SAFE #4 and transfer it to its owner 
const tx = proxy.freeETH(4, ethersUtils.parseEther('1'))
await wallet.sendTransaction(tx)
```
### Repay all debt and withdraw all collateral
```typescript
const proxy = await geb.getProxyAction("0xdefidream...")
const safe = await geb.getSafe(4)

// You first need to approve your proxy to spend your PARYS
let tx =  geb.contracts.systemCoin.approve(proxy.proxyAddress, ethers.constants.MaxUint256)
await wallet.sendTransaction(tx)

// Pay back everything and get your ETH back into your wallet
const tx = proxy.repayAllDebtAndFreeETH(4, safe.collateral)
await wallet.sendTransaction(tx)
```

### Make direct contract calls
The SDK exposes all contract APIs of all core contracts in the `Geb.contracts` object. Solidity functions that are read-only (`view` or `pure`) return asynchronously the expected value from the chain. State changing functions will return a transaction object to passed to `ether.js` or `web3`.
```typescript
// Fetch some system parameters from their respective contracts
const surplusBuffer = await geb.contracts.accountingEngine.surplusBuffer()
const { stabilityFee } = await geb.contracts.taxCollector.collateralTypes(utils.ETH_A)

// Liquidate a Safe
const tx = geb.contracts.liquidationEngine.liquidateSAFE(utils.ETH_A,"0xdefidream...");
await wallet.sendTransaction(tx)
```

## Local Development with Custom Contracts

We've added support for local development with custom contract addresses. This feature allows you to easily connect to contracts deployed on local networks like Anvil without modifying the SDK source code.

See [LOCALNET.md](./LOCALNET.md) for detailed instructions on how to use this feature.
