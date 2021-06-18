const Discord = require("discord.js")
module.exports = {
	commands: "helpsearch",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`search\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Searches a random location for OctaCreds\``,
			},
			{
				name: `Usage:`,
				value: `\`[search\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}