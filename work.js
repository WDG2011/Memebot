const Discord = require('discord.js')
const economy = require('../../economy')
module.exports = {
    commands: 'work',
    cooldown: 60, 
    callback: async(message, args, client) => {
        const jobs = [`Programmer`, `Mason`, `YouTuber`, `Waiter`, `Doctor`, `Mechanic`]

        const guildId = message.guild.id
       const userId = message.author.id 

        const jobIndex = Math.floor(Math.random() * jobs.length)
        const OctaCreds = Math.floor(Math.random() * 500) + 1;

    const newCoins = await economy.addCoins(guildId, userId, OctaCreds)

    message.reply(`You worked as a **${jobs[jobIndex]}** and earned ${OctaCreds} Credits. `)
    }
}