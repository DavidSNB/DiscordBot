module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, Discord) {
        const rulesEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Rules')
            .setURL('https://www.google.com')
            .setAuthor('David')
            .setDescription('This is an embed for the server rules')
            .addFields(
                { name: 'Rule 1', value: 'Be Nice' },
                { name: 'Rule 2', value: 'Be Nicer' },
                { name: 'Rule 3', value: 'Be Nicest' }
            )
            .setFooter('Check out the rules channel');

        message.channel.send(rulesEmbed);
    }
}