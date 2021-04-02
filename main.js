// Setting up Discord Client
const Discord = require("discord.js");
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

// Command Prefix
const prefix = "!";

// File System Setup
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// Environment Varaiables Setup
const dotenv = require('dotenv');
dotenv.config();

// Commands Import
client.commands = new Discord.Collection();
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Initial Status Check
client.once("ready", () => {
    console.log("Online!");
});

// New members joining
client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    guildMember.roles.add(welcomeRole)
    guildMember.guild.channels.cache.get('755930421476458536').send(`Welcome <@${guildMember.user.id}>`);
});

// Message Handler
client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'member') {
        client.commands.get('member').execute(message, args);
    } else if (command === 'command') {
        client.commands.get('command').execute(message, args, Discord);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args, Discord);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args, Discord);
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
});

// Load the Bot
client.login(process.env.TOKEN);
