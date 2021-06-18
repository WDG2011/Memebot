const path = require('path')
const fs = require('fs')



const Discord = require('discord.js')
const client = new Discord.Client({
  disableMentions: 'everyone', partials: ["MESSAGE", "CHANNEL", "REACTION"]
})

const config = require('./config.json')
const command = require('./command')
const snipes = new Discord.Collection()
const esnipes = new Discord.Collection()
const mongo = require('./mongo')
const { Database } = require('quickmongo')
const { mongoPath } = require('./config.json')
const mongoDBURL = mongoPath
const quickmongo = new Database(mongoDBURL)

const Levels = require('discord-xp');
Levels.setURL(mongoPath)



client.on('ready', async () => {
  await mongo().then(mongoose => {
    try {
      console.log('Connected to mongo!')
    } catch (err) {
      console.log(err)
    }
  })
})

client.on("guildMemberAdd", async (member) => {
  let UserJSON = JSON.parse(fs.readFileSync("./DB/users.json"));
  UserJSON[member.id] = {
    warns: 0
  }
  fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
})


let badWords = ["nigga", "nigger", "niggger", "niggga", "niga", "niger", "negro", "faggot", "niqqer", "niqer", "niqqqqer", "niqqa"]
client.on("message", async message => {
  let UserJSON = JSON.parse(fs.readFileSync("./DB/users.json"));

  if (!UserJSON[message.author.id]) {
    if (message.author.bot) return;
    UserJSON[message.author.id] = {
      warns: 0
    }
    fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
  }
  for (i = 0; i < badWords.length; i++) {
    if (message.content.toLowerCase().includes(badWords[i])) {
      await message.delete();
      message.reply("**No bad words.**");







      UserJSON[message.author.id].warns += 1;
      fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));

    }
  }
})




client.on('messageDelete', message => {
  snipes.set(message.channel.id, message)
})

client.on('messageUpdate', message => {
  esnipes.set(message.channel.id, message)
})



client.on('ready', () => {
  console.log('The client is ready!')

  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = dir => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(option)
      }
    }
  }



  readCommands('commands');

  commandBase.listen(client);



  command(client, 'test', message => {
    message.channel.send('Hi')
  })

  

  

  command(client, 'snipe', message => {
    let snipe = snipes.get(message.channel.id)
    if (!snipe) return message.channel.send('There is nothing to snipe!')

    const snipeEmbed = new Discord.MessageEmbed()
      .setAuthor(`${snipe.author.tag}`, snipe.author.displayAvatarURL())
      .setColor("RANDOM")
      .setDescription(snipe.content)
      .setFooter('Get sniped lol.')
      .setTimestamp()
    message.channel.send(snipeEmbed)
  })

  command(client, ['esnipe', 'editsnipe'], message => {
    let esnipe = esnipes.get(message.channel.id)
    if (!esnipe) return message.channel.send('There is nothing to snipe!')

    const esnipeEmbed = new Discord.MessageEmbed()
      .setAuthor(`${esnipe.author.tag}`, esnipe.author.displayAvatarURL())
      .setColor("RANDOM")
      .setDescription(esnipe.content)
      .setFooter('Get editsniped lol.')
      .setTimestamp()
    message.channel.send(esnipeEmbed)
  })


  //RULES AND ABOUT THE SERVER EMBEDS.

  
  



})

client.on("ready", () => {
  const arrayOfStatus = [
    `mbhelp for more commands`,
    `Made by Octagone`
  ];

  let index = 0
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0
    const status = arrayOfStatus[index]
    console.log(status)
    client.user.setActivity(status);
    index++
  }, 10000)

})

client.login(config.token)
