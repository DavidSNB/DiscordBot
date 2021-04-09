module.exports = {
    name: 'ping',
    aliases: ['test', 'p'],
    description: "This is a ping command to check the bots response",
    execute(client, message, cmd, args) {
        if (cmd === "test") {
            message.channel.send('David Bot Online!');
        } else {
            message.channel.send('pong!');
        }
    }
}