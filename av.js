const Discord = require('discord.js')
module.exports = {
    commands: ['av', 'avatar'],
    callback: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        const embed = new Discord.MessageEmbed()
            .setTitle(`${member.user.tag}'s avatar:`)
            .setImage(member.user.displayAvatarURL({ dynamic: true, size: 256 }))
            .setColor("RANDOM")

        message.channel.send(embed)
    }
}