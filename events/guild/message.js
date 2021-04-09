// Environment Varaibles (Prefix)
require('dotenv').config();

module.exports = (Discord, client, message) => {
    // Command Prefix
    const prefix = process.env.PREFIX;

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
    ]

    try {
        if (command.permissions.length) {
            let invalidPerms = []

            for (const perm of command.permissions) {
                if (!validPermissions.includes(perm)) {
                    return console.log(`Invalid Permission [${perm}] in ${command.name} command`)
                }
                if (!message.member.hasPermission(perm)) {
                    invalidPerms.push(perm);
                }
            }

            if (invalidPerms.length) {
                return message.channel.send(`Missing Permissions: \`${invalidPerms}\``)
            }
        }

        command.execute(client, message, cmd, args, Discord);
    } catch (err) {
        message.reply(`There was an error trying to execute this command, try typing \`${prefix}help\``)
        console.log(err);
    }

    /*
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
    } else if (command === 'tempreactionrole') {
        client.commands.get('tempreactionrole').execute(message, args, Discord, client);
    }*/
}