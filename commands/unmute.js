module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args) {
        if (message.member.roles.cache.has('755930499104505857')) {
            const member = message.mentions.users.first();
            if (member) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

                let memberTarget = message.guild.members.cache.get(member.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            } else {
                message.channel.send("No user mentioned so could not unmute");
            }
        } else {
            message.channel.send("You do not have permission to use this command");
        }
    }
}