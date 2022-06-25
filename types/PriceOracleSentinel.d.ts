/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PriceOracleSentinelInterface extends ethers.utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "getGracePeriod()": FunctionFragment;
    "getSequencerOracle()": FunctionFragment;
    "isBorrowAllowed()": FunctionFragment;
    "isLiquidationAllowed()": FunctionFragment;
    "setGracePeriod(uint256)": FunctionFragment;
    "setSequencerOracle(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGracePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSequencerOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isBorrowAllowed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isLiquidationAllowed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGracePeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSequencerOracle",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGracePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSequencerOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBorrowAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isLiquidationAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGracePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSequencerOracle",
    data: BytesLike
  ): Result;

  events: {
    "GracePeriodUpdated(uint256)": EventFragment;
    "SequencerOracleUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GracePeriodUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SequencerOracleUpdated"): EventFragment;
}

export type GracePeriodUpdatedEvent = TypedEvent<
  [BigNumber] & { newGracePeriod: BigNumber }
>;

export type SequencerOracleUpdatedEvent = TypedEvent<
  [string] & { newSequencerOracle: string }
>;

export class PriceOracleSentinel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PriceOracleSentinelInterface;

  functions: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    getGracePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSequencerOracle(overrides?: CallOverrides): Promise<[string]>;

    isBorrowAllowed(overrides?: CallOverrides): Promise<[boolean]>;

    isLiquidationAllowed(overrides?: CallOverrides): Promise<[boolean]>;

    setGracePeriod(
      newGracePeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSequencerOracle(
      newSequencerOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  getGracePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  getSequencerOracle(overrides?: CallOverrides): Promise<string>;

  isBorrowAllowed(overrides?: CallOverrides): Promise<boolean>;

  isLiquidationAllowed(overrides?: CallOverrides): Promise<boolean>;

  setGracePeriod(
    newGracePeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSequencerOracle(
    newSequencerOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    getGracePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getSequencerOracle(overrides?: CallOverrides): Promise<string>;

    isBorrowAllowed(overrides?: CallOverrides): Promise<boolean>;

    isLiquidationAllowed(overrides?: CallOverrides): Promise<boolean>;

    setGracePeriod(
      newGracePeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setSequencerOracle(
      newSequencerOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GracePeriodUpdated(uint256)"(
      newGracePeriod?: null
    ): TypedEventFilter<[BigNumber], { newGracePeriod: BigNumber }>;

    GracePeriodUpdated(
      newGracePeriod?: null
    ): TypedEventFilter<[BigNumber], { newGracePeriod: BigNumber }>;

    "SequencerOracleUpdated(address)"(
      newSequencerOracle?: null
    ): TypedEventFilter<[string], { newSequencerOracle: string }>;

    SequencerOracleUpdated(
      newSequencerOracle?: null
    ): TypedEventFilter<[string], { newSequencerOracle: string }>;
  };

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    getGracePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    getSequencerOracle(overrides?: CallOverrides): Promise<BigNumber>;

    isBorrowAllowed(overrides?: CallOverrides): Promise<BigNumber>;

    isLiquidationAllowed(overrides?: CallOverrides): Promise<BigNumber>;

    setGracePeriod(
      newGracePeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSequencerOracle(
      newSequencerOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGracePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSequencerOracle(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBorrowAllowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isLiquidationAllowed(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setGracePeriod(
      newGracePeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSequencerOracle(
      newSequencerOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}