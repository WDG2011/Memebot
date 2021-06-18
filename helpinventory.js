const Discord = require("discord.js")
module.exports = {
	commands: "helpinventory",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`inventory\` `,
			},
			{
				name: `Aliases:`,
				value: `\`inv\` `,
			},
			{
				name: `Description:`,
				value: `\`Shows the list of items you own.\``,
			},
			{
				name: `Usage:`,
				value: `\`[inventory\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}