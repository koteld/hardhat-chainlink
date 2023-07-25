export enum Task {
  dataFeed = "dataFeed",
  dataFeedProxy = "dataFeedProxy",
  feedRegistry = "feedRegistry",
  l2Sequencer = "l2Sequencer",
  ens = "ens",
  automation = "automation",
  vrf = "vrf",
  sandbox = "sandbox",
  functions = "functions",
  registries = "registries",
}

export enum DataFeedSubtask {
  getLatestRoundAnswer = "getLatestRoundAnswer",
  getRoundAnswer = "getRoundAnswer",
  getLatestRoundData = "getLatestRoundData",
  getRoundData = "getRoundData",
  getLatestRoundId = "getLatestRoundId",
  getDecimals = "getDecimals",
  getDescription = "getDescription",
  getVersion = "getVersion",
}

export enum DataFeedProxySubtask {
  getLatestRoundAnswer = "getLatestRoundAnswer",
  getRoundAnswer = "getRoundAnswer",
  getLatestRoundData = "getLatestRoundData",
  getRoundData = "getRoundData",
  getLatestRoundId = "getLatestRoundId",
  getDecimals = "getDecimals",
  getDescription = "getDescription",
  getVersion = "getVersion",
  getAggregator = "getAggregator",
  getPhaseId = "getPhaseId",
  getPhaseAggregators = "getPhaseAggregators",
  getRoundId = "getRoundId",
  parseRoundId = "parseRoundId",
}

export enum FeedRegistrySubtask {
  getFeed = "getFeed",
  isFeedEnabled = "isFeedEnabled",
  getFeedRegistryDecimals = "getFeedRegistryDecimals",
  getFeedRegistryDescription = "getFeedRegistryDescription",
  getFeedRegistryAggregatorVersion = "getFeedRegistryAggregatorVersion",
  getFeedRegistryLatestRoundData = "getFeedRegistryLatestRoundData",
  getFeedRegistryRoundData = "getFeedRegistryRoundData",
  getRoundFeed = "getRoundFeed",
  getPhase = "getPhase",
  getPhaseFeed = "getPhaseFeed",
  getPhaseRange = "getPhaseRange",
  getCurrentPhaseId = "getCurrentPhaseId",
  getPreviousRoundId = "getPreviousRoundId",
  getNextRoundId = "getNextRoundId",
}

export enum L2SequencerSubtask {
  isL2SequencerUp = "isL2SequencerUp",
  getTimeSinceL2SequencerIsUp = "getTimeSinceL2SequencerIsUp",
}

export enum ensFeedsResolverSubtask {
  resolveAggregatorAddress = "resolveAggregatorAddress",
  resolveAggregatorAddressWithSubdomains = "resolveAggregatorAddressWithSubdomains",
}

export enum VRFSubtask {
  createSubscription = "createSubscription",
  fundSubscription = "fundSubscription",
  cancelSubscription = "cancelSubscription",
  addConsumer = "addConsumer",
  removeConsumer = "removeConsumer",
  getSubscriptionDetails = "getSubscriptionDetails",
  isPendingRequestExists = "isPendingRequestExists",
  requestSubscriptionOwnerTransfer = "requestSubscriptionOwnerTransfer",
  acceptSubscriptionOwnerTransfer = "acceptSubscriptionOwnerTransfer",
  getMaxConsumers = "getMaxConsumers",
  getMaxNumberOfWords = "getMaxNumberOfWords",
  getMaxRequestConfirmations = "getMaxRequestConfirmations",
  getMinRequestConfirmations = "getMinRequestConfirmations",
  getMaxRequestGasLimit = "getMaxRequestGasLimit",
  getCommitment = "getCommitment",
  getCoordinatorConfig = "getCoordinatorConfig",
  getCoordinatorTypeAndVersion = "getCoordinatorTypeAndVersion",
}

export enum AutomationSubtask {
  registerUpkeep = "registerUpkeep",
  getPendingRegistrationRequest = "getPendingRegistrationRequest",
  cancelPendingRegistrationRequest = "cancelPendingRegistrationRequest",
  getKeeperRegistrarConfig = "getKeeperRegistrarConfig",
  getKeepersRegistrarTypeAndVersion = "getKeepersRegistrarTypeAndVersion",
  fundUpkeep = "fundUpkeep",
  checkUpkeep = "checkUpkeep",
  migrateUpkeeps = "migrateUpkeeps",
  receiveUpkeeps = "receiveUpkeeps",
  cancelUpkeep = "cancelUpkeep",
  withdrawFunds = "withdrawFunds",
  transferKeeperPayeeship = "transferKeeperPayeeship",
  acceptKeeperPayeeship = "acceptKeeperPayeeship",
  withdrawKeeperPayment = "withdrawKeeperPayment",
  getActiveUpkeepIDs = "getActiveUpkeepIDs",
  getUpkeep = "getUpkeep",
  getKeeperInfo = "getKeeperInfo",
  getMaxPaymentForGas = "getMaxPaymentForGas",
  getMinBalanceForUpkeep = "getMinBalanceForUpkeep",
  getKeeperRegistryState = "getKeeperRegistryState  ",
  isKeeperRegistryPaused = "isKeeperRegistryPaused",
  getKeeperRegistryTypeAndVersion = "getKeeperRegistryTypeAndVersion",
  getKeeperRegistryUpkeepTranscoderVersion = "getKeeperRegistryUpkeepTranscoderVersion",
}

export enum PluginRegistriesSubtask {
  getDataFeedAddress = "getDataFeedAddress",
  getFeedRegistryAddress = "getFeedRegistryAddress",
  getVRFCoordinatorAddress = "getVRFCoordinatorAddress",
  getLinkTokenAddress = "getLinkTokenAddress",
  getKeeperRegistryAddress = "getKeeperRegistryAddress",
  getKeeperRegistrarAddress = "getKeeperRegistrarAddress",
  getL2SequencerAddress = "getL2SequencerAddress",
  getFunctionOracleAddress = "getFunctionOracleAddress",
  getDenomination = "getDenomination",
}

export const enum InquirableParameter {
  dataFeedAddress = "dataFeedAddress",
  dataFeedProxyAddress = "dataFeedProxyAddress",
  feedRegistryAddress = "feedRegistryAddress",
  vrfCoordinatorAddress = "vrfCoordinatorAddress",
  linkTokenAddress = "linkTokenAddress",
  keeperRegistryAddress = "keeperRegistryAddress",
  keeperRegistrarAddress = "keeperRegistrarAddress",
  l2SequencerAddress = "l2SequencerAddress",
  functionOracleAddress = "functionOracleAddress",
  feedRegistryBaseTick = "feedRegistryBaseTick",
  feedRegistryQuoteTick = "feedRegistryQuoteTick",
}