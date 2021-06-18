const Discord = require("discord.js")
module.exports = {
	commands: "helpship",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`ship\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Shows the affinity percentage between you and the mentioned user.\``,
			},
			{
				name: `Usage:`,
				value: `\`[ship @user\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}