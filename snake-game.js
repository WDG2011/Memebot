const SnakeGame = require('snakecord');

const Discord = require("discord.js");

const client = new Discord.Client()

module.exports = {
	commands: ['snake-game', 'sg', 'snake', 'snakegame'],
	callback: (message, arguments, text, client) => {
		const snakeGame = new SnakeGame({

   title: 'Snake Game',

   color: "RANDOM",

   timestamp: true,

   gameOverTitle: "Game Over! GG WP"

})

snakeGame.newGame(message);;
	}
}