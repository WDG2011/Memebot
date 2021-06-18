const Discord = require('discord.js')
const profileSchema = require('../../schemas/profile-schema')
const items = require('../../shopitems')
const economy = require('../../economy')

module.exports = {
    commands: 'passiveoff',
    cooldown: 60,
    callback: async(message, args, client) => {

        const { guild, member } = message
        




        
        const params = {
            guildId: guild.id,
            userId: member.id
        } 
        profileSchema.findOne(params, async(err, data) => {
            if(data) {
                const hasItem = data.Passive === 1
                if(!hasItem) {
                    message.channel.send(`**You are not in passive mode!**`)
                } else {
                    message.channel.send(`**You have successfullly switched off Passive mode!**`)
                    data.Passive = 0
                }
                console.log(data)
                await profileSchema.findOneAndUpdate(params, data)
            } else if(!data){
                message.channel.send(`**You are not in passive mode!**`)
            }
            
            
        })
    }
}