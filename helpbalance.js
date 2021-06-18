const Discord = require("discord.js")
module.exports = {
	commands: "helpbalance",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`balance\` `,
			},
			{
				name: `Aliases:`,
				value: `\`bal\` `,
			},
			{
				name: `Description:`,
				value: `\`Shows your balance.\``,
			},
			{
				name: `Usage:`,
				value: `\`[bal\` or \`[bal @user\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}