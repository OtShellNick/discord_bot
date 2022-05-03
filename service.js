require("dotenv").config();
const { ServiceBroker } = require("moleculer");

const isDev = process.env.NODE_ENV === "development";

const broker = new ServiceBroker({
  hotReload: isDev,
});

broker.loadServices("./services", "*.service.js");

broker
  .start()
  .then(() => broker.call("discord.start"))
  .catch((err) => console.log("ERROR:", err));
