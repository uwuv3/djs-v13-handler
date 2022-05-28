require("dotenv").config();
const chalk = require("chalk");
const { Client, Collection } = require("discord.js");
const fs = require("fs");
const { global } = require("./config");
const client = new Client({
  intents: [
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING",
    "GUILDS",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_INTEGRATIONS",
    "GUILD_INVITES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "GUILD_PRESENCES",
    "GUILD_SCHEDULED_EVENTS",
    "GUILD_VOICE_STATES",
    "GUILD_WEBHOOKS",
  ],
  partials: [
    "CHANNEL",
    "GUILD_MEMBER",
    "GUILD_SCHEDULED_EVENT",
    "MESSAGE",
    "REACTION",
    "USER",
  ],
  shardCount: 5,
});
//all intents
require("./antiCrash")(client, chalk);
module.exports = client;
//global variables
client.config = { global };
client.commands = new Collection();
client.aliases = new Collection();
client.slashCommands = new Collection();
["command"].forEach(handler => {
  require(`./handler/${handler}`)(client);
});
client.login(process.env.token);
