// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import 'import {IYearnVeloVaultRelayer} from 'src/interfaces/oracles/IYearnVeloVaultRelayer.sol';

import 'import {IFactoryChild} from 'src/interfaces/factories/IFactoryChild.sol';

interface IYearnVeloVaultRelayerChild is IYearnVeloVaultRelayer, IFactoryChild {}
