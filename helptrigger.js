const Discord = require("discord.js")
module.exports = {
	commands: "helptrigger",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`trigger\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Triggers you or the mentioned user.\``,
			},
			{
				name: `Usage:`,
				value: `\`[trigger\` or \`[trigger @user\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}