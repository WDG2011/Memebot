const Discord = require("discord.js")
module.exports = {
	commands: "helpwithdraw",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`withdraw\` `,
			},
			{
				name: `Aliases:`,
				value: `\`with\` `,
			},
			{
				name: `Description:`,
				value: `\`Withdraws the specified amount from your bank.\``,
			},
			{
				name: `Usage:`,
				value: `\`[withdraw <amount>\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}