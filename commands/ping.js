module.exports = {
    name: 'ping',
    description: "This is a ping command to check the bots response",
    execute(client, message, args) {
        message.channel.send('pong!');
    }
}