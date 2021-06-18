const Discord = require('discord.js')

module.exports = {
	
	commands: 'ship',

	
	callback: async (message, args, client) => {
   
    let user = message.mentions.users.first()
    let RN = Math.floor(Math.random() * 100) + 1

    if(!user) return message.channel.send('Please mention a user to ship.')
    if(user === message.author) return message.channel.send('Please mention someone and not yourself.')

    const UnloveEmbed = new Discord.MessageEmbed() 
    .setTitle(`This isn't a match...`)
    .setThumbnail('https://cdn.discordapp.com/attachments/824906735176253450/828554687229067275/images.png')
    .setDescription(`${message.author} shipped with ${user} and it is ${RN}%`)
    .setColor("RED")

    const loveEmbed = new Discord.MessageEmbed() 
    .setTitle('They are born for each other!')
    .setThumbnail('https://cdn.discordapp.com/attachments/824906735176253450/828555115593859123/9k.png')
    .setDescription(`${message.author} shipped with ${user} and it is ${RN}%`)
    .setColor("GREEN")

    if(RN > 50) {
        message.channel.send(loveEmbed)
    } else {
        message.channel.send(UnloveEmbed)
    }


}
}