// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import { IERC20Metadata } from '@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol';

import { IAuthorizable } from '@interfaces/utils/IAuthorizable.sol';
import { ISystemCoinTaxCollector } from '@interfaces/tokens/ISystemCoinTaxCollector.sol';
import { IModifiable } from '@interfaces/utils/IModifiable.sol';

interface ISystemCoinTaxable is IERC20Metadata, IAuthorizable, IModifiable {
  // --- Events ---

  /**
   * @notice Emitted when the tax collector contract is set
   * @param _taxCollector Address of the tax collector contract
   */
  event TaxCollectorSet(address indexed _taxCollector);

  /**
   * @notice Emitted when tax collection is enabled or disabled
   * @param _enabled Whether tax collection is enabled
   */
  event TaxCollectionEnabledChanged(bool _enabled);

  /**
   * @notice Emitted when a transfer with tax is executed
   * @param _from The sender address
   * @param _to The recipient address
   * @param _totalAmount The total amount before tax
   * @param _netAmount The amount after tax deduction
   * @param _taxAmount The amount of tax collected
   * @param _treasury The address that received the tax
   */
  event TransferWithTax(
    address indexed _from,
    address indexed _to,
    uint256 _totalAmount,
    uint256 _netAmount,
    uint256 _taxAmount,
    address indexed _treasury
  );

  // --- Token Methods ---

  /**
   * @notice Mint new tokens
   * @param  _dst The address that will receive the newly minted tokens
   * @param  _wad The amount to mint
   */
  function mint(address _dst, uint256 _wad) external;

  /**
   * @notice Burn tokens
   * @param  _wad The amount to burn
   */
  function burn(uint256 _wad) external;

  // --- Tax-Related Methods ---

  /**
   * @notice Set the tax collector contract
   * @param  _taxCollector Address of the tax collector contract
   */
  function setTaxCollector(address _taxCollector) external;

  /**
   * @notice Enable or disable the tax collection feature
   * @param  _enabled Whether tax collection should be enabled
   */
  function setTaxCollectionEnabled(bool _enabled) external;

  /**
   * @notice Get the address of the tax collector contract
   * @return _taxCollector Address of the tax collector contract
   */
  function taxCollector() external view returns (ISystemCoinTaxCollector _taxCollector);

  /**
   * @notice Check if tax collection is enabled
   * @return _enabled Whether tax collection is enabled
   */
  function taxCollectionEnabled() external view returns (bool _enabled);
}
