const { client } = require("../methods/discord.methods");

module.exports = {
  name: "discord",
  actions: {
    start: () => {
      client.login(process.env.TOKEN);
    },
  },
};
