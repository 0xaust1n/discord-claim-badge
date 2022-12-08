const { Client, GatewayIntentBits, Collection } = require('discord.js');
require('dotenv').config();
// init intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
// init commands collection from command folder
client.commands = new Collection();
client.events = new Collection();
// init handler
const handlerAry = ['command_handler', 'event_handler'];
handlerAry.forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});
// discord token
const token = process.env.TOKEN;
client.login(token);
