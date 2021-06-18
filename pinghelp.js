const Discord = require("discord.js")
module.exports = {
	commands: "helpping",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`ping\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Shows the latency of the bot. In other words, shows how much time it takes for the bot to respond.\``,
			},
			{
				name: `Usage:`,
				value: `\`[ping\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}