const Discord = require("discord.js")
module.exports = {
	commands: "helpsteal",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`steal\` `,
			},
			{
				name: `Aliases:`,
				value: `\`rob\` `,
			},
			{
				name: `Description:`,
				value: `\`Steals a random amount of OctaCreds from the mentioned user.\``,
			},
			{
				name: `Usage:`,
				value: `\`[steal <@user>\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}