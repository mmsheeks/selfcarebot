module.exports = {
	name: 'support',
	description: 'For when you need a little pick me up!',
    args: false,
    guildOnly: false,
	execute(message, args) {
		var index = Math.floor(Math.random() * (50-1) ) + 1;
        const messages = [
            'You are more fun than anyone or anything I know, including bubble wrap.',
            'You are the most perfect you there is!',
            'You are enough.',
            'Your are one of the strongest people I know.',
            'You look great today!',
            'You have the best smile',
            'Your outlook on life is amazing.',
            'You just light up the room.',
            'You make a bigger impact than you realize.',
            'You are always so helpful.',
            'You have the best laugh!',
            'Your friends appreciate you and I do too.',
            'Your inside is even more beautiful than your outside.',
            'I love the way you bring out the best in people',
            'Our community is better because you are part of it.',
            'You bring out the best in the rest of us.',
            'You are whole, just the way you are.',
            'You inspire me!',
            'Nothing can stop you.',
            'You just made my day.',
            'You make me float up like I\'m on millions of bubbles',
            'You are an excellent friend.',
            'When it comes to cooking, no one\'s meals are quite as delicious.',
            'I am a better bot because of you.',
            'You have taught me so much.',
            'I like the way you are.',
            'You are a great person!',
            'You have an exquisite sense of style.',
            'You make me want to be a better bot.',
            'You look radiant today.',
            'I hope you are proud of yourself, because I am!',
            'You are one of the bravest people I know.',
            'What you\'re wearing right now? Marvelous.',
            'You are so trustworthy, I always believe what you say.',
            'Everything seems brighter when you are around.',
            'Even the things you don\'t like about yourself make you interesting.',
            'I know that you will always have my back. That\'s just the kind of person you are.',
            'You have the best ideas.',
            'You are a great example to others.',
            'I know that if you ever make a mistake, you\'ll own it.',
            'You\'ve got great leadership skills.',
            'You have amazing creative potential!',
            'You are stunning.',
            'You really seem to know who you are. I admire that.',
            'You are the reason I am smiling today.',
            'You area gift to everyone you meet.',
            'You have a gift for making people comfortable.',
            'I enjoy spending time with you.',
            'I am really glad we met.',
            'I tell everyone how amazing you are.'
        ];

        const reply = `${message.author}, ${messages[index]}`;
        message.channel.send(reply);
	},
};
