const Discord = require("discord.js")
module.exports = {
	commands: "helpvolume",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`volume\` `,
			},
			{
				name: `Aliases:`,
				value: `\`vol\` \`v\` \`set\` \`set-volume\` `,
			},
			{
				name: `Description:`,
				value: `\`Sets the volume of the music stream.\``,
			},
			{
				name: `Usage:`,
				value: `\`[vol <number>\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}