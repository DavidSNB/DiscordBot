module.exports = (Discord, client, message) => {
    // Command Prefix
    const prefix = "!";

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if (command) command.execute(client, message, args, Discord);

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