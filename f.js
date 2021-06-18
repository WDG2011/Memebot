const Discord = require('discord.js')

module.exports = {
    commands: 'f',
    callback: async(message, args, client) =>{
        const prefix = '['
        const reason = message.content.slice(prefix.length).trim().split(/ +/g)

        const embed = new Discord.MessageEmbed()
          .setTitle(":regional_indicator_f: __Pay Respects!__")
          .setDescription(`
    **Press :regional_indicator_f: to pay respects to *${[[...reason].splice(1).join(' ')]}***`)
          .setColor('RANDOM')
          .setFooter(`${message.author.username}`, message.author.displayAvatarURL())
          .setTimestamp()
        message.channel.send(embed).then(async message => {
          await message.react("🇫")
        })
    }
}