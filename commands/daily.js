module.exports = {
	name: 'daily',
	description: 'Get your daily self care mission!',
    args: false,
    usage: '',
    guildOnly: false,
    cooldown: 86400,
	execute(message, args) {
        function diceRoller(n, x) {
            function roll(x) {
                return Math.floor(Math.random() * (x-1) ) + 1;
            }

            var total = 0;
            for(i = 0; i < n; i++ ) {
                total += roll(x);
            }

            return total;
        }

        const data = [];

        data.push( `${message.author}, here is your daily mission!`);

        var exercise = diceRoller(4, 10);
        data.push( `:person_running: exercise for ${exercise} minutes`);

        var stretch = diceRoller(3, 6);
        data.push( `:person_gesturing_ok: stretch for ${stretch} minutes`);

        var drink = diceRoller(4, 4);
        data.push( `:droplet: drink ${drink} glasses of water`);

        var talk = diceRoller(1, 4);
        data.push( `:wave: talk to ${talk} friends`);

        var relax = diceRoller(5, 12);
        data.push( `:sleeping: relax for at least ${relax} minutes`);

        data.push( `I believe in you!` );

		message.channel.send(data);
	},
};
