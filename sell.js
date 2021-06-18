const Discord = require('discord.js')
const inventory = require('../../schemas/inv-schema')
const items = require('../../shopitems')
const economy = require('../../economy')

module.exports = {
    commands: 'sell',
    callback: async(message, args, client) => {

        const { guild, member } = message
        if(!args[0]) return message.channel.send(`**Please specify an item to buy!**`)
        const itemToBuy = args.join(' ')

        const validItem = !!items.find(
            (val) => val.item.toLowerCase() === itemToBuy
            )
        if(!validItem) return message.channel.send(`**Please specify a _valid_ item to sell!**`)

        const itemPrice = items.find((val) => val.item.toLowerCase() === itemToBuy)
        .price


        const userBalance = await economy.getCoins(guild.id, member.id)

        const params = {
            guildId: guild.id,
            userId: member.id
        } 
        inventory.findOne(params, async(err, data) => {
            if(data) {
                const hasItem = Object.keys(data.Inventory).includes(itemToBuy)
                if(!hasItem) {
                    message.channel.send(`**You do not own this item in your inventory!**`)
                } else {
                    data.Inventory[itemToBuy]--
                }
                console.log(data)
                await inventory.findOneAndUpdate(params, data)
            } else {
                message.channel.send(`**You do not own this item in your inventory!**`)
            }
            message.channel.send(`**You have successfullly sold ${itemToBuy}**`)
            const remainingCoins = await economy.addCoins(guild.id, 
                member.id, 
                itemPrice)
        })
    }
}