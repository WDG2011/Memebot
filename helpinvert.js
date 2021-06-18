const Discord = require("discord.js")
module.exports = {
	commands: "helpinvert",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`invert\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Color inverts yours or the mentioned user's avatar\``,
			},
			{
				name: `Usage:`,
				value: `\`[invert\` or \`[invert @<user>\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}