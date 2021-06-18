const Discord = require("discord.js")
module.exports = {
	commands: "helpwhois",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`whois\` `,
			},
			{
				name: `Aliases:`,
				value: `\`userinfo\` `,
			},
			{
				name: `Description:`,
				value: `\`Shows yours or the mentioned user's basic account information.\``,
			},
			{
				name: `Usage:`,
				value: `\`[whois\` or \`[whois @user\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}