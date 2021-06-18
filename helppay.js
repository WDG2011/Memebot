const Discord = require("discord.js")
module.exports = {
	commands: "helppay",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`pay\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Pays the mentioned user the specified amount.\``,
			},
			{
				name: `Usage:`,
				value: `\`[pay @user <amount>\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}