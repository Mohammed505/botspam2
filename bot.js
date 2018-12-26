 const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();

console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526866932419395597")
setInterval(function() {
channel.send(`447 Is here Guys...`);
}, 30)
})


client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == ".13s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});
 


client2.on("ready", () => {
let channel =     client.channels.get("527460579145809950")
setInterval(function() {
channel.send(`447 Is here Guys...`);
}, 30)
})


client2.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == ".14s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});


client.login(process.env.BOT_TOKEN); 
client.login(process.env.BOT_TOKEN2); 
