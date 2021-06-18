const Discord = require("discord.js")
module.exports = {
	commands: "helpeditsnipe",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`editsnipe\` `,
			},
			{
				name: `Aliases:`,
				value: `\`esnipe\` `,
			},
			{
				name: `Description:`,
				value: `\`Displays the most recently edited message before it was edited.\``,
			},
			{
				name: `Usage:`,
				value: `\`[editsnipe\` or \`[esnipe\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}