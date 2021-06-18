const Discord = require("discord.js")
module.exports = {
	commands: "helpavatar",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`avatar\` `,
			},
			{
				name: `Aliases:`,
				value: `\`av\` `,
			},
			{
				name: `Description:`,
				value: `\`Shows an enlarged version of yours or the mentioned user's profile picture.\``,
			},
			{
				name: `Usage:`,
				value: `\`[avatar\` or \`[avatar @user\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}