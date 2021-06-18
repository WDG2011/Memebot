const Discord = require("discord.js")
module.exports = {
	commands: "helprich",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`rich\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Shows the top 5 richest members of this server.\``,
			},
			{
				name: `Usage:`,
				value: `\`[rich\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}