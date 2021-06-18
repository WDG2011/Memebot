const Discord = require("discord.js")
module.exports = {
	commands: "helpsnake-game",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`snake-game\` `,
			},
			{
				name: `Aliases:`,
				value: `\`snake\` \`sg\` \`snakegame\` `,
			},
			{
				name: `Description:`,
				value: `\`Starts a new classic Snake Game.\``,
			},
			{
				name: `Usage:`,
				value: `\`[snake-game\` or \`[snakegame\` or \`sg\` or \`snake\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}