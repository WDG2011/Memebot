const Discord = require("discord.js")
module.exports = {
	commands: "helpbeg",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`beg\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Gives you your alms.\``,
			},
			{
				name: `Usage:`,
				value: `\`[beg\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}