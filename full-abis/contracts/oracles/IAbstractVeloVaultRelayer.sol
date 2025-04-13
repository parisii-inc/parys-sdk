// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import 'import {IBaseOracle} from 'src/interfaces/oracles/IBaseOracle.sol';

import 'import {IBeefyVaultV7} from 'src/interfaces/external/IBeefyVaultV7.sol';
import 'import {IVeloPool} from 'src/interfaces/external/IVeloPool.sol';
import 'import {IPessimisticVeloLpOracle} from 'src/interfaces/external/IPessimisticVeloLpOracle.sol';

interface IAbstractVeloVaultRelayer is IBaseOracle {
  // --- Errors ---

  /// @notice Throws if the provided velo pool address is null
  error AbstractVeloVaultRelayer_NullVeloPool();

  /// @notice Throws if either of the provided velo lp oracle address is null
  error AbstractVeloVaultRelayer_NullVeloLpOracle();

  /**
   * @notice Address of the velo pool underlying the beefy vault
   * @dev    Assumes that the price source is a valid IVeloPool
   */
  function veloPool() external view returns (IVeloPool _veloPool);

  /**
   * @notice Address of the pessimistic velo lp oracle
   * @dev    Assumes that the price source is a valid IPessimisticVeloLpOracle
   */
  function veloLpOracle() external view returns (IPessimisticVeloLpOracle _veloPool);
}
