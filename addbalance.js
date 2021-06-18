const economy = require('../../economy')

module.exports = {
  commands: ['addbalance', 'addbal'],
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<The target's @> <coin amount>",
  permissionError: 'You must be an administrator to use this command.',
  permissions: 'ADMINISTRATOR',
  callback: async (message, arguments) => {
    const mention = message.mentions.users.first()

    if (!mention) {
      message.reply('Please tag a user to add Credits to.')
      return
    }

    const OctaCreds = arguments[1]
    if (isNaN(OctaCreds)) {
      message.reply('Please provide a valid number of Credits.')
      return
    }

    const guildId = message.guild.id
    const userId = mention.id

    const newCoins = await economy.addCoins(guildId, userId, OctaCreds)

    message.reply(
      `**You have given *<@${userId}> ${OctaCreds}* Credits. They now have *${newCoins}* Credits!**`
    )
  },
}