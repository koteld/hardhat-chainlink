import {
  DataFeed,
  FeedRegistry,
  FunctionOracle,
  KeeperRegistry,
  L2Sequencer,
  LinkToken,
  Network,
  VRFCoordinator,
} from "../registries/interfaces";
import { SubtaskProperties } from "../subtasks/interfaces";

export type NetworksRegistry = Record<string, Network>;
export type DataFeedsRegistry = Record<
  string,
  Record<string, Record<string, DataFeed>>
>;
export type FeedRegistriesRegistry = Record<string, FeedRegistry>;
export type VRFCoordinatorsRegistry = Record<string, VRFCoordinator>;
export type LinkTokensRegistry = Record<string, LinkToken>;
export type KeeperRegistriesRegistry = Record<string, KeeperRegistry>;
export type L2SequencersRegistry = Record<string, L2Sequencer>;
export type DenominationsRegistry = Record<string, string>;
export type FunctionOraclesRegistry = Record<string, FunctionOracle>;

export type Subtasks = Record<string, Record<string, SubtaskProperties>>;

export type Choice = {
  value: string;
  name?: string;
  description?: string;
  disabled?: boolean | string;
  type?: never;
};

export type DockerOutput = {
  exitCode: number | null;
  err: string;
};
