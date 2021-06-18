const Discord = require("discord.js")
module.exports = {
	commands: "helpakinator",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`akinator\` `,
			},
			{
				name: `Aliases:`,
				value: `\`aki\` `,
			},
			{
				name: `Description:`,
				value: `\`Starts a new game of Akinator.\``,
			},
			{
				name: `Usage:`,
				value: `\`[akinator\` or \`[aki\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}