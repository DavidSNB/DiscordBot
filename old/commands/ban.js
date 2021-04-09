module.exports = {
    name: 'ban',
    description: "For banning people",
    execute(message, args) {
        if (message.member.roles.cache.has('755930499104505857')) {
            const member = message.mentions.users.first();
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`<@${memberTarget.user.id}> has been banned`);
            } else {
                message.channel.send("No user mentioned so could not ban");
            }
        } else {
            message.channel.send("You do not have permission to use this command");
        }
    }
}