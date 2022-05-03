const { Client } = require("discord.js");
const ROOMS = require("../config/rooms");

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  // eslint-disable-next-line no-console
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  const { channelId } = message;
  if (message.author.bot) return;

  const currentRoom = ROOMS.find((room) => room.id === channelId).action(
    client,
    message
  );
});

module.exports = {
  client,
};
