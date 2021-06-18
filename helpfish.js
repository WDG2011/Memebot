const Discord = require("discord.js")
module.exports = {
	commands: "helpfish",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`fish\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Helps you earn some OctaCreds by fishing.\``,
			},
			{
				name: `Usage:`,
				value: `\`[fish\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}