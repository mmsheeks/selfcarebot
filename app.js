'use strict';
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, defaultCooldown } = require('./config.json');

const client = new Discord.Client();

// load commands from files
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for( const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// set up cooldowns
const cooldowns = new Discord.Collection();

client.once('ready', () => {
    console.log( 'I am ready' );
});

client.on('message', message => {
    // ignore messages from the bot or that don't start with the prefix
    if( !message.content.startsWith(prefix) || message.author.bot) return;

    // get the arguments and command name
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    // if we don't have the command, back out. also check for aliases
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    // if we didn't find a command, exit now
    if( !command ) return;

    // if this needs to be in a server, make sure it is.
    if( command.guildOnly && message.channel.type !== 'text' ) {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    // if the command requires arguments and doesn't have them, tell the user
    if( command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}`;

        if( command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    // check the cooldowns
    if( !cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || defaultCooldown) * 1000;

    if( timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if( now < expirationTime ) {
            let timeLeft = (expirationTime - now ) / 1000;
            let timeIn = 'second(s)';

            // if there's more than two minutes, convert to minutes
            if( timeLeft > 120 ) {
                timeLeft = timeLeft / 60;
                timeIn = 'minute(s)';

                // if there's more than two hours, conver to hours
                if( timeLeft > 120 ) {
                    timeLeft = timeLeft / 60;
                    timeIn = 'hour(s)';
                }
            }
            return message.reply(`please wait ${timeLeft.toFixed(1)} more ${timeIn} before using that command again!`);
        }
    } else {
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }

    // try to run the command, catch the error if there is one.
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Uh oh. Something went wrong.');
    }
});
try {
	client.login(token);
} catch( e ) {
	console.log(e);
}
