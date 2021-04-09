module.exports = {
    name: 'clear',
    aliases: ['cl', 'clr'],
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    description: "Clear messages",
    async execute(client, message, cmd, args) {
        if (!args[0]) return message.reply("Please specify the number of messages to clear");
        if (isNaN(args[0])) return message.reply("Please enter a number");
        if (args[0] > 100) return message.reply("Number must be less than 100");
        if (args[0] < 1) return message.reply("Number must be greater than 0");

        await message.channel.messages.fetch({ limit: (parseInt(args[0]) + 1) }).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}