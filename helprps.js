const Discord = require("discord.js")
module.exports = {
	commands: "helprps",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`rps\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Starts a new game of rock, paper, scissors with the bot.\` `,
			},
			{
				name: `Usage:`,
				value: `\`[rps\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}