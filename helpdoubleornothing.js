const Discord = require("discord.js")
module.exports = {
	commands: "helpdoubleornothing",
	callback: (message, args, client) => {
		const pinghelp = new Discord.MessageEmbed()
		.setTitle("Command Details!")
		.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
		.setTimestamp()
		.setColor("RANDOM")
		.addFields(
			{
				name: `Command Name:`,
				value: `\`doubleornothing\` `,
			},
			{
				name: `Aliases:`,
				value: `\`gambledouble\` `,
			},
			{
				name: `Description:`,
				value: `\`Does a gamble of double or nothing with your specified amount of OctaCreds.\``,
			},
			{
				name: `Usage:`,
				value: `\`[doubleornothing <amount to bet>\` `,
			}
		)
		message.channel.send(pinghelp)
	}
}