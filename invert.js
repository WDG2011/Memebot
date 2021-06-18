const canva = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    commands: "invert",
    description: "Trigegr yourself",


    callback: async(message, args, client) => {

            const { member, mentions } = message

                const target = message.mentions.members.first() || message.member
              let xavatar = target.user.displayAvatarURL({dynamic: false, format: "png", size: 256})

        
                let ximage = await canva.Canvas.invert(xavatar)

                let xtriggered = new Discord.MessageAttachment(ximage, "inverted.png")

          
                    message.channel.send(xtriggered)
    }
}