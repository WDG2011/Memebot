const Discord = require("discord.js")
module.exports = {
	commands: "helppostmeme",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`postmeme\` `,
			},
			{
				name: `Aliases:`,
				value: `\`pm\` `,
			},
			{
				name: `Description:`,
				value: `\`Posts a meme to earn OctaCreds!\``,
			},
			{
				name: `Usage:`,
				value: `\`[postmeme\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}