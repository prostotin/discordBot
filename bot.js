// Import the discord.js module
const { Client, Attachment } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

client.on('ready', () => {
    console.log('I am ready!');
   var extras = new Array();
   for(var a = 0; a < 100; a ++){
    extras[a] = new Array(2);
    extras[a][1] = 0;
   }
    //REDACTED|REDACTED
    //REDACTED|REDACTED
    //REDACTED|REDACTED
    //REDACTED|REDACTED
    //REDACTED|REDACTED
});

client.on('message', message => {
    
     console.log(message.author.id.toString() + "|" +message.author.username.toString());
     

     if(message.author.id.toString() === 'REDACTED' && !message.content.toString().includes('$w') && !message.content.toString().includes('$mmr') && !message.content.toString().includes('$im')
     && !message.content.toString().includes('$divorce')  && !message.content.toString().includes('$')){ //Shaxx
        var filthyMessage = message.content.toString();
        var mockedMessage = new Array(filthyMessage.length);
        for(var a = 0; a < filthyMessage.length; a++){
            if(a%2===0){
               
                mockedMessage[a] = filthyMessage[a].toLowerCase().toString();
            } else{
                mockedMessage[a] = filthyMessage.charAt(a).toUpperCase();
                
            }
        }
        var mockedResult = mockedMessage.toString().replace(/,/g, '');
        //console.log(mockedResult);
        message.channel.send(mockedResult.toString());
        const attachment = new Attachment('https://imgflip.com/s/meme/Mocking-Spongebob.jpg');
        message.channel.send(attachment);
     }

    if (message.author.id.toString() === 'REDACTED') {
        try {
            console.log(message.embeds[0].author.name);     
            if (!message.embeds[0].description.includes("Claims") && !message.embeds[0].description.includes("AVG") && !message.embeds[0].description.includes("Sum of the 15")){
                setTimeout(function(){ message.channel.send("$im " + message.embeds[0].author.name); }, 500);

            }
        }
        catch (error) {
            console.error(error);
        }
    }
   
    if (message.content === '%extraRoll') {
        message.channel.send("This feature is disabled for now."); 
        /*
        if(!(message.author.id.toString() === '252252849382227969')){ //BigShaxx
            message.channel.send("$w"); 
        } 
        */   
    }
  
   if (message.content === '%help') {
        message.channel.send('📠Owner/dev: prostotin📠\n📖 %help\n👋 %greet\n🍚 %1989\n㊗️ %uwu\n🍝 %pasta\n');
    } else if (message.content === '%uwu') {
        message.channel.send('redacted');
    } else if (message.content === '%greet') {
        message.channel.send('Hey folks');
    }  else if (message.content === '%pasta') {
        var rand = Math.floor(Math.random() * 10);
        var pastas = ['redacted',
        'redacted',
            'redacted',
            'redacted',
            'redacted',
            'redacted',
            'redacted',
            'redacted',
            'redacted',
            'redacted',];
        message.channel.send(pastas[rand]);
    }
 
});

client.login('');