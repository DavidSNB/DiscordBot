module.exports = {
    name: 'status',
    aliases: ['stat'],
    permissions: [],
    description: "Updates the current status of the bot",
    execute(client, message, cmd, args, Discord) {
        if (!args[0]) {
            client.user.setStatus(null);
            return message.reply("Please specify a status for the bot");
        } else {
            client.user.setPresence({
                activity: {
                    name: args.join(' '),
                    type: 0,
                },
            })
        }


    }
}