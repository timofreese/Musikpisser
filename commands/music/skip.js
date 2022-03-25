module.exports = {
    name: 'skip',
    aliases: ['next'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = client.player.getQueue(message.guild.id);
 
        if (!queue || !queue.playing) return message.channel.send(`${message.author}, There is no music currently playing!. ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `**${queue.current.title}**, the song currently playing, has been skipped ✅` : `${message.author}, Something went wrong ❌`);
    },
};