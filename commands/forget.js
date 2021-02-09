/* Copy this file into the commands/ directory and update the variables to match your desired command.
 * You can safely remove this comment.
 * When you are finished editing, save this file with your new command name.
 */

module.exports = {
	name: 'forget',
	description: 'Tells Self Care Trainer to forget about you.',
    args: false,
    usage: ''
    guildOnly: false,
	execute(message, args) {
		timestamps.delete(message.author.id);
		message.channel.send(`You have been forgotten, see ya around stranger!');
	},
};
