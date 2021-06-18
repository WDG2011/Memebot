const economy = require('../../economy')

module.exports = {
  commands: ['daily'],
  cooldown: 1440, 
  callback: async (message, arguments) => {
    
    const guildId = message.guild.id
    const userId = message.author.id    
    const OctaCreds = Math.floor(Math.random() * 1000) + 1;

    const newCoins = await economy.addCoins(guildId, userId, OctaCreds)

    message.reply(
      `**You got *${OctaCreds}* Credits.**`
    )
  },
}