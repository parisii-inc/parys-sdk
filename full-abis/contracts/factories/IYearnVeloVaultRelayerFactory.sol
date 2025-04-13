// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import 'import {IBaseOracle} from 'src/interfaces/oracles/IBaseOracle.sol';
import 'import {IAuthorizable} from 'src/interfaces/utils/IAuthorizable.sol';

import 'import {IYearnVault} from 'src/interfaces/external/IYearnVault.sol';
import 'import {IVeloPool} from 'src/interfaces/external/IVeloPool.sol';
import 'import {IPessimisticVeloLpOracle} from 'src/interfaces/external/IPessimisticVeloLpOracle.sol';

interface IYearnVeloVaultRelayerFactory is IAuthorizable {
  // --- Events ---

  /**
   * @notice Emitted when a new YearnVeloVaultRelayer contract is deployed
   * @param  _yearnVeloVaultRelayer Address of the deployed DenominatedOracle contract
   * @param  _yearnVault The address of the yearn vault contract
   * @param  _veloPool The address of the velo pool underlying the yearn vault
   * @param  _veloLpOracle The address of the pessimistic velo lp oracle
   */
  event NewYearnVeloVaultRelayer(
    address indexed _yearnVeloVaultRelayer, address _yearnVault, address _veloPool, address _veloLpOracle
  );

  // --- Methods ---

  /**
   * @notice Deploys a new YearnVeloVaultRelayer contract
   * @param  _yearnVault The address of the yearn vault contract
   * @param  _veloPool The address of the velo pool underlying the yearn vault
   * @param  _veloLpOracle The address of the pessimistic velo lp oracle
   * @return _yearnVeloVaultRelayer Address of the deployed YearnVeloVaultRelayer contract
   */
  function deployYearnVeloVaultRelayer(
    IYearnVault _yearnVault,
    IVeloPool _veloPool,
    IPessimisticVeloLpOracle _veloLpOracle
  ) external returns (IBaseOracle _yearnVeloVaultRelayer);

  // --- Views ---

  /**
   * @notice Getter for the list of YearnVeloVaultRelayer contracts
   * @return _yearnVeloVaultRelayersList List of YearnVeloVaultRelayer contracts
   */
  function yearnVeloVaultRelayersList() external view returns (address[] memory _yearnVeloVaultRelayersList);
}
