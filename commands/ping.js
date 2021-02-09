module.exports = {
    name: 'ping',
    description: 'Ping!',
    cooldown: 5,
    execute(message, args, cooldowns) {
        message.channel.send('Pong.');
    },
};
