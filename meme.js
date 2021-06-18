const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    commands: "meme",
    description: "Sends an epic meme",
    callback: async (message, args, client) => {
        const subReddits = [ "meme", "me_irl", "memes", "pewdiepiesubmissions", "dankmemes", "Animemes"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}