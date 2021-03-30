module.exports = {
    name: 'member',
    description: "Sends the youtube link!",
    execute(message, args, Discord) {
        if (message.member.roles.cache.has('826211448937119744')) {
            message.channel.send("You are already a member I will remove the role");
            message.member.roles.remove('826211448937119744').catch(console.error);
        } else {
            message.channel.send("@" + message.member.name + "You have been made a member");
            message.member.roles.add('826211448937119744').catch(console.error);
        }
    }
}