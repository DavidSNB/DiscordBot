module.exports = {
    name: 'ping',
    description: "This is a ping command to check the bots response",
    execute(message, args, Discord) {
        message.channel.send('pong!');
    }
}