module.exports = {
    name: 'NAME',
    aliases: ['AL1', 'AL2'],
    permissions: ["PERM1", "PERM2"],
    description: "DESC",
    execute(client, message, cmd, args, Discord) {
        message.channel.send("HI");
    }
}