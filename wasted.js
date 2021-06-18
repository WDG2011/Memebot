const canva = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    commands: "wasted",
    description: "Trigegr yourself",


    callback: async(message, args, client) => {

            const { member, mentions } = message

                const target = message.mentions.members.first() || message.member
              let xavatar = target.user.displayAvatarURL({dynamic: false, format: "png"})

        
                let ximage = await canva.Canvas.wasted(xavatar)

                let xtriggered = new Discord.MessageAttachment(ximage, "wasted.png")

          
                    message.channel.send(xtriggered)
    }
}