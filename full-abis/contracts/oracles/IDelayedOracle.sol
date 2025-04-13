// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import { IBaseOracle } from '@interfaces/oracles/IBaseOracle.sol';

/**
 * @title  IDelayedOracle
 * @notice This interface is used to query and update a delayed price feed
 */
interface IDelayedOracle is IBaseOracle {
  // --- Events ---
  /**
   * @notice Emitted when a price feed has been updated
   * @param  _currentFeedValue The current feed value that was stored in the contract
   * @param  _lastUpdateTime The timestamp of when the feed was updated
   */
  event UpdateResult(uint256 _currentFeedValue, uint256 _lastUpdateTime);

  // --- Errors ---
  /// @notice Thrown when the contract is creating a DelayedOracle with null delay
  error DelayedOracle_NullDelay();
  /// @notice Thrown when a price source is not specified (null address)
  error DelayedOracle_NullPriceSource();
  /// @notice Thrown when users tries to fetch the price but we have no valid value
  error DelayedOracle_NoCurrentValue();
  /// @notice Thrown when users tries to update the result before delay is elapsed
  error DelayedOracle_DelayHasNotElapsed();

  // --- Feed implementation ---

  /// @notice The storage struct used for the feed
  struct Feed {
    /// @notice The feed value
    uint256 value;
    /// @notice Whether the feed value is valid
    bool isValid;
  }

  // --- Registry ---

  /**
   * @notice Address of the non-delayed price feed
   * @dev    Assumes that the price source is a valid IBaseOracle
   */
  function priceSource() external view returns (IBaseOracle _priceSource);

  // --- Data ---

  /// @notice The delay that needs to pass between two consecutive updates [seconds]
  function updateDelay() external view returns (uint256 _updateDelay);

  /// @notice Last timestamp when the result was updated [timestamp]
  function lastUpdateTime() external view returns (uint256 _lastUpdateTime);

  // --- Methods ---

  /**
   * @notice Updates the price feed. It stores the current value in a delay buffer, and the value in the delay buffer is pushed as the current value.
   * @return _success Whether the price feed was updated successfully.
   */
  function updateResult() external returns (bool _success);

  /**
   * @notice Checks if it's possible to update the price feed
   * @return _ok Whether the price feed can be updated
   */
  function shouldUpdate() external view returns (bool _ok);

  /**
   * @notice Reads the result from the update delay
   * @return _nextResult the next valid result
   * @return _validity whether the result is valid
   */
  function getNextResultWithValidity() external view returns (uint256 _nextResult, bool _validity);
}
