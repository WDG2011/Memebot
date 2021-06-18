const Discord = require("discord.js")
module.exports = {
	commands: "helpf",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`f\` `,
			},
			{
				name: `Aliases:`,
				value: `\`F\` `,
			},
			{
				name: `Description:`,
				value: `\`A simple command used to pay respects.\``,
			},
			{
				name: `Usage:`,
				value: `\`[f <reason>\` or \`[F <reason>\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}