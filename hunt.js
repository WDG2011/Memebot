const Discord = require('discord.js')
const inventory = require('../../schemas/inv-schema')
const items = require('../../shopitems')
const economy = require('../../economy')

module.exports = {
    commands: ['hunt'],
    cooldown: 3,
    callback: async (message, args, client) => {

        const { guild, member } = message

        const itemToBuy = 'hunting rifle'


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
                   message.reply(`**You need a hunting rifle to hunt!**`)
                } else {
                    const OctaCreds = Math.floor(Math.random() * 1000) + 1 || 0;

                    const newCoins = await economy.addCoins(guildId, userId, OctaCreds)
                    if (OctaCreds === 0) {
                        message.channel.send(`**You didn't find anything to hunt, what a loser lol**`)
                    } else { 
                    message.channel.send(`**You went hunting and got ${OctaCreds} Credits from selling your prey!**`)
                }
            }
            
            } else {
                message.reply(`**You need a Hunting Rifle to hunt!**`)
            }

        })
    }
}