const { Client, Intents } = require('discord.js');
const { token } = "";

// Create a new client instance
const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });



TOKEN = '';
const CHANNEL_ID = "737317681098915933"

MONGO_URI="";


const DiscordJS = require('discord.js')



recording = false
time = 100000000000000
talking = true
debug = false
spoken = false
interval = null
connection = ""
reactcount = 0
reactcount1 = 0
debug1 = false

number = 0

const fs = require('fs');
var connections = []

var cancelled = false
var intervals = []



bot.on('ready', () => {
    console.log('Bot Is Online')
    bot.user.setActivity('Created by DespicableDevil and DpodDolphin')

    
    
    const Guilds = bot.guilds.cache.map(guild => guild.name);
    console.log(Guilds);
})

count = 0
count1 = 0




bot.on('message', async msg => {

    if (msg.content === ";sync") {
      if (msg.author.id === "439495867016413225") {
        try {
          toSay = "Please note this is a test message. We are simply testing a feature." //:craig:, note Lights Out (Sync Moment)

          
          bot.guilds.cache.forEach(guild => {
            const channels = bot.channels.cache.filter(c => c.guild && c.type === 'text');

            //console.log(channels.first())

            count1 = count1 + 1
    
            if (guild.me.permissionsIn(channels.first()).has("SEND_MESSAGES")){
              count = count + 1
              
              channels.first().send(toSay)

              console.log(`Just Sent ${toSay}`)

            }

            //(c => console.log(c.name))
            console.log("Before Filter")
            console.log(count1)
            console.log("After Filter")
            console.log(count)

            console.log("in how many")
            console.log(`Currently in ${bot.guilds.cache.size} servers`)

          });

          

        }
        catch (err) {
          console.log("Could not send message to a (few) guild(s)!");
          console.log(err)
        }
      } else {
        msg.reply("You cant do that!")
      }
    }




    if (msg.content == ";sync"){

      if (msg.guild.name == "ION Media"){

        

      }

    }


    if (msg.content == ";radioSetup1"){
      const member = msg.member
      const channel = member.voice.channel
      connection = await member.voice.channel.join();
        
      channelMain = msg.channel
      message = msg
  
      channelID = msg.member.voice.channel.id
      users = member.voice.channel.members
  
        
  
        
        

      message.channel.send("<@272937604339466240>, join")
        
    }

    if (msg.content == ";radioSetup2"){
      const member = msg.member
      const channel = member.voice.channel
      connection = await member.voice.channel.join();
        
      channelMain = msg.channel
      message = msg
  
      channelID = msg.member.voice.channel.id
      users = member.voice.channel.members
  
        
  
        
        

      message.channel.send("<@486698344429781028>, join")
        
    }
  
    if (msg.content == ";radioSave1" || msg.content == ";radioSave"){
      
      
      
      member = msg.member
  
        
      channelMain = msg.channel
      message = msg
        
      channelMain.messages.fetch({ limit: 100 }).then(messages => {
        let lm = messages.array()
        var i;
        for (i = 0; i < 101; i++) {
          var lastMessage = lm[i]
          
          if (lastMessage.author.username == 'Craig'){
            var ret = lastMessage.content


            user = bot.users.cache.get('439495867016413225');

            user.send("--------------------------------------")
            user.send("**"+message.guild.name+"**")
            user.send(ret);
            
            break
          }
        }
          
          
      })
      .catch(console.error);
  
      message.channel.send("<@272937604339466240>, leave")
  
        
    
    }

    if (msg.content == ";radioSave2" || msg.content == ";radioSave"){
      
      
      
      member = msg.member
  
        
      channelMain = msg.channel
      message = msg
        
      channelMain.messages.fetch({ limit: 100 }).then(messages => {
        let lm = messages.array()
        var i;
        for (i = 0; i < 101; i++) {
          var lastMessage = lm[i]
          
          if (lastMessage.author.username == 'Giarc'){
            var ret = lastMessage.content

            

            user = bot.users.cache.get('439495867016413225');

            user.send("--------------------------------------")
            user.send("**"+message.guild.name+"**")
            user.send(ret);
            
            break
          }
        }
          
          
      })
      .catch(console.error);
  
      message.channel.send("<@486698344429781028>, leave")
  
        
    
    }
  
      
          
  
        
      
});

bot.login(TOKEN);
  