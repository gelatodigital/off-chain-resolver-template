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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace LibDataTypes {
  export type ModuleDataStruct = {
    modules: PromiseOrValue<BigNumberish>[];
    args: PromiseOrValue<BytesLike>[];
  };

  export type ModuleDataStructOutput = [number[], string[]] & {
    modules: number[];
    args: string[];
  };
}

export interface OpsInterface extends utils.Interface {
  functions: {
    "cancelTask(bytes32)": FunctionFragment;
    "createTask(address,bytes,(uint8[],bytes[]),address)": FunctionFragment;
    "exec(address,address,bytes,(uint8[],bytes[]),uint256,address,bool,bool)": FunctionFragment;
    "execAddresses(bytes32)": FunctionFragment;
    "fee()": FunctionFragment;
    "feeToken()": FunctionFragment;
    "gelato()": FunctionFragment;
    "getFeeDetails()": FunctionFragment;
    "getTaskIdsByUser(address)": FunctionFragment;
    "setModule(uint8[],address[])": FunctionFragment;
    "taskCreator(bytes32)": FunctionFragment;
    "taskModuleAddresses(uint8)": FunctionFragment;
    "taskTreasury()": FunctionFragment;
    "timedTask(bytes32)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelTask"
      | "createTask"
      | "exec"
      | "execAddresses"
      | "fee"
      | "feeToken"
      | "gelato"
      | "getFeeDetails"
      | "getTaskIdsByUser"
      | "setModule"
      | "taskCreator"
      | "taskModuleAddresses"
      | "taskTreasury"
      | "timedTask"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelTask",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "createTask",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      LibDataTypes.ModuleDataStruct,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exec",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      LibDataTypes.ModuleDataStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "execAddresses",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "fee", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "gelato", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getFeeDetails",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTaskIdsByUser",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setModule",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "taskCreator",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "taskModuleAddresses",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "taskTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "timedTask",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cancelTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "createTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exec", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "execAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gelato", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFeeDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTaskIdsByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setModule", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "taskCreator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taskModuleAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "taskTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timedTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {};
}

export interface Ops extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OpsInterface;

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
    cancelTask(
      _taskId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createTask(
      _execAddress: PromiseOrValue<string>,
      _execDataOrSelector: PromiseOrValue<BytesLike>,
      _moduleData: LibDataTypes.ModuleDataStruct,
      _feeToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exec(
      _taskCreator: PromiseOrValue<string>,
      _execAddress: PromiseOrValue<string>,
      _execData: PromiseOrValue<BytesLike>,
      _moduleData: LibDataTypes.ModuleDataStruct,
      _txFee: PromiseOrValue<BigNumberish>,
      _feeToken: PromiseOrValue<string>,
      _useTaskTreasuryFunds: PromiseOrValue<boolean>,
      _revertOnFailure: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    execAddresses(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeToken(overrides?: CallOverrides): Promise<[string]>;

    gelato(overrides?: CallOverrides): Promise<[string]>;

    getFeeDetails(overrides?: CallOverrides): Promise<[BigNumber, string]>;

    getTaskIdsByUser(
      _taskCreator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    setModule(
      _modules: PromiseOrValue<BigNumberish>[],
      _moduleAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    taskCreator(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    taskModuleAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    taskTreasury(overrides?: CallOverrides): Promise<[string]>;

    timedTask(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { nextExec: BigNumber; interval: BigNumber }
    >;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  cancelTask(
    _taskId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createTask(
    _execAddress: PromiseOrValue<string>,
    _execDataOrSelector: PromiseOrValue<BytesLike>,
    _moduleData: LibDataTypes.ModuleDataStruct,
    _feeToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exec(
    _taskCreator: PromiseOrValue<string>,
    _execAddress: PromiseOrValue<string>,
    _execData: PromiseOrValue<BytesLike>,
    _moduleData: LibDataTypes.ModuleDataStruct,
    _txFee: PromiseOrValue<BigNumberish>,
    _feeToken: PromiseOrValue<string>,
    _useTaskTreasuryFunds: PromiseOrValue<boolean>,
    _revertOnFailure: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  execAddresses(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  fee(overrides?: CallOverrides): Promise<BigNumber>;

  feeToken(overrides?: CallOverrides): Promise<string>;

  gelato(overrides?: CallOverrides): Promise<string>;

  getFeeDetails(overrides?: CallOverrides): Promise<[BigNumber, string]>;

  getTaskIdsByUser(
    _taskCreator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  setModule(
    _modules: PromiseOrValue<BigNumberish>[],
    _moduleAddresses: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  taskCreator(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  taskModuleAddresses(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  taskTreasury(overrides?: CallOverrides): Promise<string>;

  timedTask(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { nextExec: BigNumber; interval: BigNumber }
  >;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cancelTask(
      _taskId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    createTask(
      _execAddress: PromiseOrValue<string>,
      _execDataOrSelector: PromiseOrValue<BytesLike>,
      _moduleData: LibDataTypes.ModuleDataStruct,
      _feeToken: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    exec(
      _taskCreator: PromiseOrValue<string>,
      _execAddress: PromiseOrValue<string>,
      _execData: PromiseOrValue<BytesLike>,
      _moduleData: LibDataTypes.ModuleDataStruct,
      _txFee: PromiseOrValue<BigNumberish>,
      _feeToken: PromiseOrValue<string>,
      _useTaskTreasuryFunds: PromiseOrValue<boolean>,
      _revertOnFailure: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    execAddresses(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    feeToken(overrides?: CallOverrides): Promise<string>;

    gelato(overrides?: CallOverrides): Promise<string>;

    getFeeDetails(overrides?: CallOverrides): Promise<[BigNumber, string]>;

    getTaskIdsByUser(
      _taskCreator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    setModule(
      _modules: PromiseOrValue<BigNumberish>[],
      _moduleAddresses: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    taskCreator(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    taskModuleAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    taskTreasury(overrides?: CallOverrides): Promise<string>;

    timedTask(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { nextExec: BigNumber; interval: BigNumber }
    >;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    cancelTask(
      _taskId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createTask(
      _execAddress: PromiseOrValue<string>,
      _execDataOrSelector: PromiseOrValue<BytesLike>,
      _moduleData: LibDataTypes.ModuleDataStruct,
      _feeToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exec(
      _taskCreator: PromiseOrValue<string>,
      _execAddress: PromiseOrValue<string>,
      _execData: PromiseOrValue<BytesLike>,
      _moduleData: LibDataTypes.ModuleDataStruct,
      _txFee: PromiseOrValue<BigNumberish>,
      _feeToken: PromiseOrValue<string>,
      _useTaskTreasuryFunds: PromiseOrValue<boolean>,
      _revertOnFailure: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    execAddresses(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fee(overrides?: CallOverrides): Promise<BigNumber>;

    feeToken(overrides?: CallOverrides): Promise<BigNumber>;

    gelato(overrides?: CallOverrides): Promise<BigNumber>;

    getFeeDetails(overrides?: CallOverrides): Promise<BigNumber>;

    getTaskIdsByUser(
      _taskCreator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setModule(
      _modules: PromiseOrValue<BigNumberish>[],
      _moduleAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    taskCreator(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taskModuleAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    taskTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    timedTask(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelTask(
      _taskId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createTask(
      _execAddress: PromiseOrValue<string>,
      _execDataOrSelector: PromiseOrValue<BytesLike>,
      _moduleData: LibDataTypes.ModuleDataStruct,
      _feeToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exec(
      _taskCreator: PromiseOrValue<string>,
      _execAddress: PromiseOrValue<string>,
      _execData: PromiseOrValue<BytesLike>,
      _moduleData: LibDataTypes.ModuleDataStruct,
      _txFee: PromiseOrValue<BigNumberish>,
      _feeToken: PromiseOrValue<string>,
      _useTaskTreasuryFunds: PromiseOrValue<boolean>,
      _revertOnFailure: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    execAddresses(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gelato(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFeeDetails(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTaskIdsByUser(
      _taskCreator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setModule(
      _modules: PromiseOrValue<BigNumberish>[],
      _moduleAddresses: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    taskCreator(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taskModuleAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    taskTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timedTask(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
