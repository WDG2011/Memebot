const economy = require('../../economy')

const Discord = require('discord.js')

module.exports = {
  commands: ['withdraw', 'with'],
  callback: async (message, arguments, text) => {
    const { guild, member } = message

    const target = message.mentions.users.first()
    

    const coinsToGive = arguments[0]
    if (isNaN(coinsToGive)) {
      message.reply('Please provide a valid number of Credits to withdraw from the bank.')
      return
    }

    const bankOwned = await economy.getBank(guild.id, member.id)
    if (bankOwned < coinsToGive) {
      message.reply(`You do not have ${coinsToGive} Credits in your bank!`)
      return
    }

    const remainingCoins = await economy.addCoins(
      guild.id,
      member.id,
      coinsToGive
    )
    const newBalance = await economy.addBank(guild.id, member.id, coinsToGive * -1)

    message.channel.send(
      new Discord.MessageEmbed()
      .setTitle('Withdrawn!')
      .setColor('RANDOM')
      .setFooter(`Withdrawn by ${message.author.username}`, message.author.displayAvatarURL())
      .setDescription(`**Withdrawn Amount:** \`${coinsToGive}\`

**Wallet Amount:** \`${remainingCoins}\`

**Bank Amount:** \`${newBalance}\``)
    )
  },
}