module.exports = {
	name: 'clearcooldowns',
    aliases: [ 'cc', 'clear' ],
	description: 'clears cooldowns for a specified command',
    args: true,
    usage: '[command]',
    guildOnly: true,
	admin: true,
	execute(message, args, cooldowns) {
        const commandName = args[0];

        // if we don't have the command, back out. also check for aliases
        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        // if we didn't find a command, exit now
        if( !command ) {
            message.channel.send(`The command ${commandName} does not exist.`);
            return;
        }

        cooldowns.delete(command.name);

		message.channel.send(`Cleared cooldowns for ${command.name}`);
	},
};
