// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import { IAuthorizable } from '@interfaces/utils/IAuthorizable.sol';
import { IModifiable } from '@interfaces/utils/IModifiable.sol';
import { IParysProxyFactory } from '@interfaces/proxies/IParysProxyFactory.sol';

/**
 * @title  ISystemCoinTaxCollector
 * @notice This interface defines the functionality of a contract that calculates
 *         tax amounts for SystemCoin transfers using a simple whitelist approach
 */
interface ISystemCoinTaxCollector is IAuthorizable, IModifiable {
  // --- Events ---

  /**
   * @notice Emitted when the default tax rate is changed
   * @param  _oldRate The previous default tax rate in basis points
   * @param  _newRate The new default tax rate in basis points
   */
  event DefaultTaxRateChanged(uint256 _oldRate, uint256 _newRate);

  /**
   * @notice Emitted when a custom tax rate is set for an address
   * @param  _account The address for which the custom rate is set
   * @param  _oldRate The previous custom tax rate in basis points
   * @param  _newRate The new custom tax rate in basis points
   */
  event CustomTaxRateSet(address indexed _account, uint256 _oldRate, uint256 _newRate);

  /**
   * @notice Emitted when an address's exemption status is changed
   * @param account The address whose exemption status changed
   * @param oldStatus The previous exemption status
   * @param newStatus The new exemption status
   */
  event ExemptionStatusChanged(address indexed account, bool oldStatus, bool newStatus);

  /**
   * @notice Emitted when tax is collected on a transfer
   * @param  _from The sender address
   * @param  _to The recipient address
   * @param  _amount The total amount being transferred
   * @param  _taxAmount The amount of tax collected
   * @param  _appliedRate The rate that was applied for the tax calculation
   */
  event TaxCollected(
    address indexed _from, address indexed _to, uint256 _amount, uint256 _taxAmount, uint256 _appliedRate
  );

  // --- Registry ---

  /**
   * @notice Address of the system coin contract
   */
  function systemCoin() external view returns (address _systemCoin);

  /**
   * @notice Address of the stability fee treasury that receives the collected tax
   */
  function stabilityFeeTreasury() external view returns (address _stabilityFeeTreasury);

  // --- Configuration ---

  /**
   * @notice The default tax rate applied to transfers in basis points (e.g., 25 = 0.25%)
   */
  function defaultTaxRateBasisPoints() external view returns (uint256 _defaultTaxRateBasisPoints);

  /**
   * @notice Maximum allowed tax rate in basis points
   */
  function MAX_TAX_RATE_BASIS_POINTS() external view returns (uint256 _maxTaxRateBasisPoints);

  /**
   * @notice Returns the custom tax rate for a given address if set, otherwise returns 0
   * @param  _account The address to check
   * @return _customTaxRate The custom tax rate in basis points for the address
   */
  function customTaxRates(address _account) external view returns (uint256 _customTaxRate);

  /**
   * @notice Returns whether an address is exempt from taxation
   * @param  _account The address to check
   * @return _isExempt True if the address is exempt, false otherwise
   */
  function exemptAddresses(address _account) external view returns (bool _isExempt);

  // --- Tax Logic ---

  /**
   * @notice Gets the tax rate that applies to a specific address
   * @param  _account The address to get the tax rate for
   * @return _taxRate The tax rate in basis points that applies to the address
   */
  function getTaxRate(address _account) external view returns (uint256 _taxRate);

  /**
   * @notice Checks if an address has an explicitly set custom rate
   * @param  _account The address to check
   * @return _hasCustomRate True if the address has a custom rate, false otherwise
   */
  function hasCustomRate(address _account) external view returns (bool _hasCustomRate);

  /**
   * @notice Checks if an address is exempt from taxation (has a tax rate of 0)
   * @param  _account The address to check
   * @return _isExempt True if the address is exempt, false otherwise
   */
  function isExempt(address _account) external view returns (bool _isExempt);

  /**
   * @notice Checks if a transfer between two addresses should be exempt from tax
   * @param  _from The sender address
   * @param  _to The recipient address
   * @return _isExempt True if the transfer should be exempt, false otherwise
   */
  function isAddressExemptForTransfer(
    address _from,
    address _to,
    address _caller
  )
    external
    view
    returns (bool _isExempt);

  /**
   * @notice Calculate the tax amount for a transfer between addresses
   * @param  _from The sender address
   * @param  _to The recipient address
   * @param  _amount The amount being transferred
   * @param  _caller The address of the caller
   * @return _taxAmount The amount of tax to collect
   * @return _appliedRate The rate that was applied for the calculation
   * @return _treasury The address that should receive the tax
   */
  function calculateTax(
    address _from,
    address _to,
    uint256 _amount,
    address _caller
  )
    external
    view
    returns (uint256 _taxAmount, uint256 _appliedRate, address _treasury);

  // --- Governance Functions ---

  /**
   * @notice Sets the default tax rate
   * @param  _newDefaultTaxRateBasisPoints The new default tax rate in basis points
   */
  function setDefaultTaxRate(uint256 _newDefaultTaxRateBasisPoints) external;

  /**
   * @notice Sets a custom tax rate for a specific address
   * @param  _account The address to set the custom rate for
   * @param  _customTaxRateBasisPoints The custom tax rate in basis points
   */
  function setCustomTaxRate(address _account, uint256 _customTaxRateBasisPoints) external;

  /**
   * @notice Set an address as exempt or not exempt from taxation
   * @param  _account The address to set exemption status for
   * @param  _exempt Whether the address should be exempt (true) or not (false)
   */
  function setAddressExempt(address _account, bool _exempt) external;

  /**
   * @notice Removes a custom tax rate for an address, reverting to the default rate
   * @param  _account The address to remove the custom rate for
   */
  function removeCustomTaxRate(address _account) external;

  // --- New Functions ---

  /**
   * @notice Returns the address of the proxy factory
   * @return _proxyFactory The address of the proxy factory
   */
  function proxyFactory() external view returns (IParysProxyFactory);

  /**
   * @notice Sets the address of the proxy factory
   * @param _proxyFactory The address of the proxy factory
   */
  function setProxyFactory(address _proxyFactory) external;
}
