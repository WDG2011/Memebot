const Discord = require("discord.js")
module.exports = {
	commands: "helppassiveoff",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`passiveoff\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Turns off passive mode. When in passive mode, you can't steal nor be stolen from.\``,
			},
			{
				name: `Usage:`,
				value: `\`[passiveoff\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}