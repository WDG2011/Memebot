const Discord = require("discord.js")

module.exports = {
	commands: 'help',
	callback: (message, arguments, client) => {
		const helpembed = new Discord.MessageEmbed()
		.setAuthor(`Hi! I am MemeBot, a custom bot made for this server!`)
		.setTitle(`These are my supported commands!`)
		.setColor("RANDOM")
		.setFooter(`Help requested by ${message.author.username}  |  A bot made by Octagone#7350`, message.author.displayAvatarURL())
		.setDescription(`**My prefix is \`mb\`**.
		
**For additional info on a command, use \`mbhelp<command>\` (Without a space between "[help" and "<command>")**`)
		.addFields(
			
			{
				name: `❯❯ \`🎮\` FUN `,
				value: `\`akinator\` \`avatar\` \`rps\` \`meme\` \`ship\` \`snake-game\` \`f\` \`invert\` \`trash\` \`trigger\` \`wanted\` \`wasted\` \`emojify\` \`tictactoe\` \`trivia\``,
			}, 
			
			{
				name: `❯❯ \`💸\` ECONOMY`,
				value: `\`balance\` \`beg\` \`daily\` \`pay\` \`work\` \`doubleornothing\` \`search\` \`rich\` \`shop\` \`buy\` \`inventory\` \`postmeme\` \`steal\` \`deposit\` \`withdraw\` \`passiveon\` \`passiveoff\` \`fish\` \`hunt\``
			}
		)
		message.channel.send(helpembed)
	}
}