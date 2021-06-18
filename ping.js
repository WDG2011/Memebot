const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
 commands: 'ping', 

 
 callback: (message, arguments, text, client) => {
   message.reply('Calculating ping...').then(resultMessage => {
     const ping = resultMessage.createdTimestamp - message.createdTimestamp

     const pingEmbed = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setColor("RANDOM")
        .setDescription(`🏓 **Bot latency = ${ping}ms**`)
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
        


       resultMessage.edit(pingEmbed)
   })
 }
}