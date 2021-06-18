const Discord = require("discord.js")
module.exports = {
	commands: "helpwanted",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`wanted\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Puts up a wanted poster for you or the mentioned user.\``,
			},
			{
				name: `Usage:`,
				value: `\`[wanted\` or \`[wanted @user\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}