const economy = require('../../economy')

module.exports = {
  commands: ['beg'],
  cooldown: 2, 
  callback: async (message, arguments) => {
    
    const guildId = message.guild.id
    const userId = message.author.id    
    const OctaCreds = Math.floor(Math.random() * 500) + 1 || 0;

    const newCoins = await economy.addCoins(guildId, userId, OctaCreds)

    message.reply(
      `**You begged and got *${OctaCreds}* Credits.**`
    )
  },
}

