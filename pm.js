const Discord = require('discord.js')
const inventory = require('../../schemas/inv-schema')
const items = require('../../shopitems')
const economy = require('../../economy')

module.exports = {
    commands: ['postmeme', 'pm'],
    cooldown: 3,
    callback: async (message, args, client) => {

        const { guild, member } = message

        const itemToBuy = 'laptop'


        const validItem = !!items.find(
            (val) => val.item.toLowerCase() === itemToBuy
        )




        const params = {
            guildId: guild.id,
            userId: member.id
        }

        const guildId = guild.id
        const userId = member.id
        inventory.findOne(params, async (err, data) => {

            if (data) {
                const hasItem = Object.keys(data.Inventory).includes(itemToBuy)
                if (!hasItem) {
                   message.reply(`**You need a laptop to post memes!**`)
                } else {
                    const OctaCreds = Math.floor(Math.random() * 500) + 1;

                    const newCoins = await economy.addCoins(guildId, userId, OctaCreds)

                    message.channel.send(`**You posted a meme on Reddit and got ${OctaCreds} Credits! Nice meme bro!**`)
                }
            } else {
                message.reply(`**You need a laptop to post memes!**`)
            }

        })
    }
}