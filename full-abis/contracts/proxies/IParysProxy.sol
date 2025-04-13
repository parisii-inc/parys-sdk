// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import { IParysOwnable2Step } from '@interfaces/utils/IParysOwnable2Step.sol';

interface IParysProxy is IParysOwnable2Step {
  // --- Errors ---

  /// @notice Throws if the target address is null
  error TargetAddressRequired();

  // --- Data ---

  /// @notice The factory that created this proxy
  function factory() external view returns (address);

  // --- Methods ---

  /**
   * @notice Executes a call to the target contract through a delegate call
   * @param  _target Address of the target Actions contract
   * @param  _data Encoded data of the transaction to execute
   * @return _response The raw response of the target call
   * @dev    The proxy will call the target through a delegate call (the target must not be a direct protocol contract)
   */
  function execute(address _target, bytes memory _data) external payable returns (bytes memory _response);
}
