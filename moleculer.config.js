module.exports = {
  nodeID: "node-test",
  logger: true,
  logLevel: "debug",
  requestTimeout: 5 * 1000,
  circuitBreaker: {
    enabled: true,
  },
  metrics: true,
};
