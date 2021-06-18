  
const { tictactoe } = require('reconlx')

module.exports = {
    commands: ['tictactoe', 'ttt', 'xox'],
    callback: async(message, args, client) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}