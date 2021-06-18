const Discord = require('discord.js')
const items = require('../../shopitems')

module.exports = {
    commands: ['shop', 'store'],
    callback: async(message, args, client) => {
        if(items.length === 0) return message.channel.send(`There are no items for sale!`)

        const shopList = items.map((value, index) => {
                return `**${index+1}. __${value.item}__:**
Price: ${value.price} Credits `
            })

            message.channel.send(
                new Discord.MessageEmbed()
                .setTitle(`Welcome to Shop!`)
                .setDescription(shopList.join("\n\n"))
                .setColor("RANDOM")
                .setFooter(`${message.author.username} has entered the shop!`, message.author.displayAvatarURL())
                .setTimestamp()
            )
    }
}