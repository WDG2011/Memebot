const Discord = require("discord.js")
module.exports = {
	commands: "helpsnipe",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`snipe\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Displays the most recently deleted message.\``,
			},
			{
				name: `Usage:`,
				value: `\`[snipe\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}