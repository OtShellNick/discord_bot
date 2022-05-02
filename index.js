require('dotenv').config();

const {Client} = require("discord.js");
const ROOMS = require("./config/rooms");

const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.login(process.env.TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    const {channelId} = message;
    if (message.author.bot) return;

    ROOMS.find(room => room.id = channelId).action(client, message)
});