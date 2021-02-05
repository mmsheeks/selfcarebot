/* Copy this file into the commands/ directory and update the variables to match your desired command.
 * You can safely remove this comment.
 * When you are finished editing, save this file with your new command name.
 */

module.exports = {
	name: 'name',
	description: '',
    args: true,
    usage: '[arg]',
    guildOnly: true,
	execute(message, args) {
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
