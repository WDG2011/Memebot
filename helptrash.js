const Discord = require("discord.js")
module.exports = {
	commands: "helptrash",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`trash\` `,
			},
			{
				name: `Aliases:`,
				value: `\`none\` `,
			},
			{
				name: `Description:`,
				value: `\`Makes a meme on you or on the mentioned user, saying how trash you/they are.\``,
			},
			{
				name: `Usage:`,
				value: `\`[trash\` or \`[trash @user\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}