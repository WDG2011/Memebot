const Discord = require("discord.js")
module.exports = {
	commands: "helppassiveon",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`passiveon\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Turns passive mode on. When in passive mode, you can't be stolen from nor steal from others.\``,
			},
			{
				name: `Usage:`,
				value: `\`[passiveon\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}