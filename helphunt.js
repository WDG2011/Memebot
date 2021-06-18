const Discord = require("discord.js")
module.exports = {
	commands: "helphunt",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`hunt\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Helps you earn some OctaCreds by hunting.\``,
			},
			{
				name: `Usage:`,
				value: `\`[hunt\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}