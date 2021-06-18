const Discord = require("discord.js")
module.exports = {
	commands: "helpwasted",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`wasted\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Wastes you or the mentioned user.\``,
			},
			{
				name: `Usage:`,
				value: `\`[wasted\` or \`[wasted @user\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}