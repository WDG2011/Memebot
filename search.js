const Discord = require('discord.js')
const economy = require('../../economy')
module.exports = {
    commands: 'search',
    cooldown: 1, 
    callback: async(message, args, client) => {
        const jobs = [`Wallet`, `Tree`, `Bush`, `Air`, `Hospital`, `Office`, `Bank`, 'Car', `Van`, `Basement`, `Street`, `Pantry`, `Couch`, `Bus`, `Bar`, `Fridge`, `Attic`, `Laundromat`, `Purse`, `Coat`]

        const guildId = message.guild.id
       const userId = message.author.id 

        const jobIndex = Math.floor(Math.random() * jobs.length)
        const OctaCreds = Math.floor(Math.random() * 500) + 1;

    const newCoins = await economy.addCoins(guildId, userId, OctaCreds)

    message.reply(`You searched  **${jobs[jobIndex]}** and found ${OctaCreds} Credits. `)
    }
}