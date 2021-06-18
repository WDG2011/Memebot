const Discord = require("discord.js")
module.exports = {
	commands: "helpdaily",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`daily\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Gives you your daily quota of coins.\``,
			},
			{
				name: `Usage:`,
				value: `\`[daily\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}