module.exports = async (client) => {
    const guild = client.guilds.cache.get('755929968172728352')
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('830064627969818654');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        // console.log('Upadating Member Count');
    }, 5000);
}