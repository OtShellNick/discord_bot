require("dotenv").config();
const { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker();

broker.loadServices("./services", "*.service.js");

broker
  .start()
  .then(() => broker.ping().then((res) => broker.logger.info(res)))
  .then(() => broker.call("discord.start"))
  .catch((err) => console.log("ERROR:", err));
