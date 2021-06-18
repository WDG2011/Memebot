const Discord = require("discord.js")
module.exports = {
	commands: "helptrivia",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`trivia\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Gives you a random trivia question to answer.\``,
			},
			{
				name: `Usage:`,
				value: `\`[trivia\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}