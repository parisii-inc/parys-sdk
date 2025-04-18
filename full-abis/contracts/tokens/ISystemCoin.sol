// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import { IERC20Metadata } from '@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol';

import { IAuthorizable } from '@interfaces/utils/IAuthorizable.sol';

interface ISystemCoin is IERC20Metadata, IAuthorizable {
  /**
   * @notice Mint an amount of tokens to an account
   * @param _account Address of the account to mint tokens to
   * @param _amount Amount of tokens to mint [wad]
   * @dev   Only authorized addresses can mint tokens
   */
  function mint(address _account, uint256 _amount) external;

  /**
   * @notice Burn an amount of tokens from the sender
   * @param _amount Amount of tokens to burn [wad]
   */
  function burn(uint256 _amount) external;
}
