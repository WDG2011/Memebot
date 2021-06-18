const Discord = require("discord.js")
module.exports = {
	commands: "helpshop",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`shop\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Shows a list of items you can buy with your OctaCreds.\``,
			},
			{
				name: `Usage:`,
				value: `\`[shop\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}