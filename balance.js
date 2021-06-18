const Discord  = require('discord.js')
const economy = require('../../economy')

module.exports = {
  commands: ['balance', 'bal'],
  maxArgs: 1,
  expectedArgs: "[Target user's @]",
  callback: async (message) => {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id

    const coins = await economy.getCoins(guildId, userId)
    const bank = await economy.getBank(guildId, userId)

    const embed = new Discord.MessageEmbed()
    .setAuthor('ℭ𝔬𝔫𝔠𝔢𝔯𝔱𝔬 𝔡𝔦 ℭ𝔲𝔩𝔱𝔲𝔯𝔞')
    .setTitle('Balance!')
    .setDescription(`**__*${target.tag}* has__:
    
*${coins}* Credits in their Wallet!

*${bank}* Credits in their Bank!**`)
    .setColor('RANDOM')
    .setFooter(`Balance requested by ${message.author.username}`, message.author.displayAvatarURL())

    message.reply(embed)
  },
}