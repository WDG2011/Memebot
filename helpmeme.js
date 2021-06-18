const Discord = require("discord.js")
module.exports = {
	commands: "helpmeme",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`meme\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Shows memes from various meme SubReddits.\``,
			},
			{
				name: `Usage:`,
				value: `\`[meme\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}