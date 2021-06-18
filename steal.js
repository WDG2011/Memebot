const economy = require('../../economy')
const profileSchema = require('../../schemas/profile-schema')

module.exports = {
  commands: ['steal', 'rob'],
  cooldown: 1,
  callback: async (message, arguments, text) => {
    const { guild, member } = message

    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to steal Credits from.')
      return
    }


    const coinsToSteal = Math.floor(Math.random() * 500) + 1 || 0
   

    const coinsOwned = await economy.getCoins(guild.id, target.id)
    if (coinsOwned < coinsToSteal) {
      message.reply(`That user does not have enough OctaCreds to steal from!`)
      return
    }


    
    profileSchema.findOne({ guildId: guild.id, userId: member.id}, async(err, data) => {
      const passive = data.Passive === 1
      if(passive){
        message.reply(`Exit passive mode to start stealing!`)
      } else {
        profileSchema.findOne({ guildId: guild.id, userId: target.id}, async(err, data) => {
          const passive = data.Passive === 1
          if(passive){
            message.reply(`That user is in passive mode! Leave the peace loving hippies alone!`)
          } else if (coinsToSteal === 0) {
              const punishCoins = Math.floor(Math.random() * 500) + 1
              await economy.addCoins(guild.id, member.id, punishCoins * -1)
              await economy.addCoins(guild.id, target.id, punishCoins)
      
              message.channel.send(`**You got caught trying to steal from ${target.id} and paid them ${punishCoins} OctaCreds!**`)
          } else {
          const remainingCoins = await economy.addCoins(
          guild.id,
            member.id,
            coinsToSteal
          )
          const newBalance = await economy.addCoins(guild.id, target.id, coinsToSteal * -1)
      
          message.reply(
            `**You just stole *${coinsToSteal}* OctaCreds from *<@${target.id}>* ! They now have *${newBalance}* OctaCreds and you have *${remainingCoins}* OctaCreds!**`
          )
          }
        
        }) 
      }
    })
      
      
    

    
  },
}