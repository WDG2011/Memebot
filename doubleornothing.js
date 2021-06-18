const Discord = require('discord.js')
const economy = require('../../economy')

module.exports = {
    commands: ['doubleornothing', 'gambledouble'],
    cooldown: 5,
    callback: async(message, args, client) => {

        const { guild, member } = message
        if(!args[0]) return message.channel.send(`👎 **| Please specify an amount to bet!**`)

        if(isNaN(args[0])) return message.channel.send(`👎 **| Please specify a valid number to bet!**`)

        const amountToBet = parseInt(args[0])
        const coinsOwned = await economy.getCoins(guild.id, member.id)

        

        function random() {
            const num = Math.floor(Math.random() * 2);
            return num === 1
        }

        if(coinsOwned < amountToBet){
            message.channel.send(`👎 **| You do not have sufficient funds to bet!**`)
        } else if (random() === true) {
            const winAmount = amountToBet * 2
            const newCoins = await economy.addCoins(guild.id, member.id, winAmount)
            message.channel.send(`**Congratulations! You just won *${winAmount}* Credits!**`)
        } else {
            const remainingCoins = await economy.addCoins(
                guild.id,
                member.id,
                amountToBet * -1
              )

              message.channel.send(`**You lost! You now have ${remainingCoins} Credits!**`)
        }
    }
}