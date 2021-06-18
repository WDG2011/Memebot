const Discord = require("discord.js")
module.exports = {
	commands: "helpemojify",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`emojify\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Emojifies whatever text you send.\``,
			},
			{
				name: `Usage:`,
				value: `\`[emojify <content>\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}