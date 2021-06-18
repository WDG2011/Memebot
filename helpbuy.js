const Discord = require("discord.js")
module.exports = {
	commands: "helpbuy",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`buy\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Buys an item from the shop.\``,
			},
			{
				name: `Usage:`,
				value: `\`[buy <item>\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}