module.exports = {
    name: 'kick',
    description: "For kicking people",
    execute(message, args) {
        if (message.member.roles.cache.has('755930499104505857')) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send(`<@${memberTarget.user.id}> has been kicked`);
            } else {
                message.channel.send("No user mentioned so could not kick");
            }
        } else {
            message.channel.send("You do not have permission to use this command");
        }
    }
}