/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface IDelayedOracleFactoryInterface extends utils.Interface {
  functions: {
    "addAuthorization(address)": FunctionFragment;
    "authorizedAccounts(address)": FunctionFragment;
    "authorizedAccounts()": FunctionFragment;
    "delayedOraclesList()": FunctionFragment;
    "deployDelayedOracle(address,uint256)": FunctionFragment;
    "removeAuthorization(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addAuthorization"
      | "authorizedAccounts(address)"
      | "authorizedAccounts()"
      | "delayedOraclesList"
      | "deployDelayedOracle"
      | "removeAuthorization"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAuthorization",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedAccounts(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "authorizedAccounts()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delayedOraclesList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deployDelayedOracle",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAuthorization",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAuthorization",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedAccounts(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizedAccounts()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delayedOraclesList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployDelayedOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAuthorization",
    data: BytesLike
  ): Result;

  events: {
    "AddAuthorization(address)": EventFragment;
    "NewDelayedOracle(address,address,uint256)": EventFragment;
    "RemoveAuthorization(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddAuthorization"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewDelayedOracle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveAuthorization"): EventFragment;
}

export interface AddAuthorizationEventObject {
  _account: string;
}
export type AddAuthorizationEvent = TypedEvent<
  [string],
  AddAuthorizationEventObject
>;

export type AddAuthorizationEventFilter =
  TypedEventFilter<AddAuthorizationEvent>;

export interface NewDelayedOracleEventObject {
  _delayedOracle: string;
  _priceSource: string;
  _updateDelay: BigNumber;
}
export type NewDelayedOracleEvent = TypedEvent<
  [string, string, BigNumber],
  NewDelayedOracleEventObject
>;

export type NewDelayedOracleEventFilter =
  TypedEventFilter<NewDelayedOracleEvent>;

export interface RemoveAuthorizationEventObject {
  _account: string;
}
export type RemoveAuthorizationEvent = TypedEvent<
  [string],
  RemoveAuthorizationEventObject
>;

export type RemoveAuthorizationEventFilter =
  TypedEventFilter<RemoveAuthorizationEvent>;

export interface IDelayedOracleFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDelayedOracleFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _authorized: boolean }>;

    "authorizedAccounts()"(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _accounts: string[] }>;

    delayedOraclesList(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _delayedOraclesList: string[] }>;

    deployDelayedOracle(
      _priceSource: string,
      _updateDelay: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  addAuthorization(
    _account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "authorizedAccounts(address)"(
    _account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;

  delayedOraclesList(overrides?: CallOverrides): Promise<string[]>;

  deployDelayedOracle(
    _priceSource: string,
    _updateDelay: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  removeAuthorization(
    _account: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAuthorization(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "authorizedAccounts()"(overrides?: CallOverrides): Promise<string[]>;

    delayedOraclesList(overrides?: CallOverrides): Promise<string[]>;

    deployDelayedOracle(
      _priceSource: string,
      _updateDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    removeAuthorization(
      _account: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddAuthorization(address)"(_account?: null): AddAuthorizationEventFilter;
    AddAuthorization(_account?: null): AddAuthorizationEventFilter;

    "NewDelayedOracle(address,address,uint256)"(
      _delayedOracle?: string | null,
      _priceSource?: null,
      _updateDelay?: null
    ): NewDelayedOracleEventFilter;
    NewDelayedOracle(
      _delayedOracle?: string | null,
      _priceSource?: null,
      _updateDelay?: null
    ): NewDelayedOracleEventFilter;

    "RemoveAuthorization(address)"(
      _account?: null
    ): RemoveAuthorizationEventFilter;
    RemoveAuthorization(_account?: null): RemoveAuthorizationEventFilter;
  };

  estimateGas: {
    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "authorizedAccounts()"(overrides?: CallOverrides): Promise<BigNumber>;

    delayedOraclesList(overrides?: CallOverrides): Promise<BigNumber>;

    deployDelayedOracle(
      _priceSource: string,
      _updateDelay: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "authorizedAccounts(address)"(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "authorizedAccounts()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    delayedOraclesList(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deployDelayedOracle(
      _priceSource: string,
      _updateDelay: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    removeAuthorization(
      _account: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
