const Discord = require("discord.js")
module.exports = {
	commands: "helptictactoe",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`tictactoe\` `,
			},
			{
				name: `Aliases:`,
				value: `\`ttt\` \`xox\` `,
			},
			{
				name: `Description:`,
				value: `\`Starts a new match of tic-tac-toe with the mentioned user.\``,
			},
			{
				name: `Usage:`,
				value: `\`[tictactoe @user\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}