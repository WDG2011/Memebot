const Discord = require("discord.js")
module.exports = {
	commands: "helpdeposit",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`deposit\` `,
			},
			{
				name: `Aliases:`,
				value: `\`dep\` `,
			},
			{
				name: `Description:`,
				value: `\`Deposits the specified amount in your bank.\``,
			},
			{
				name: `Usage:`,
				value: `\`[deposit <amount>\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}