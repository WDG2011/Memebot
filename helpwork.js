const Discord = require("discord.js")
module.exports = {
	commands: "helpwork",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`work\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Does a job to earn some coins.\``,
			},
			{
				name: `Usage:`,
				value: `\`[work\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}