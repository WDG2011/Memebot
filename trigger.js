const canva = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    commands: "trigger",
    description: "Trigegr yourself",


    callback: async(message, args, client) => {

            const { member, mentions } = message

                const target = message.mentions.members.first() || message.member
              let xavatar = target.user.displayAvatarURL({dynamic: false, format: "png"})

        
                let ximage = await canva.Canvas.trigger(xavatar)

                let xtriggered = new Discord.MessageAttachment(ximage, "triggered.gif")

          
                    message.channel.send(xtriggered)
    }
}