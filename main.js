// Setting up Discord Client
const Discord = require("discord.js");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

// Environment Varaiables Setup (Token etc.)
require('dotenv').config();

// Commands Import
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

// Load the Bot
client.login(process.env.TOKEN);