// Beckend start biar bisa online
const express = require("express")
const app = express();
const port = 3000

app.get('/', (reg,res) => res.send('Wo'))

app.listen(port, () =>
  console.log(`Aplikasi anda berjalan pada port : https://localhoist:${port}`)
)
// Beckend end
// Input start
const Discord = require('discord.js')
const client = new Discord.Client()
const { EmbedBuilder } = require('discord.js');
const config = require("./config.json")
// input end
// Output start
client.on("ready", async () => {
  console.log(`Bot Telah Online!!🚀`)
  client.user
    .setActivity(`Pagar Ayu`, { type: "Watching" }) //status aktifitas bot
    .catch(error => console.log(error))
})

client.on("guildMemberAdd", async member => {
  
  const message = `Selamat Datang di Server **Warkop Ujang** <@${member.id}> 🥰` //Ucapan sambutan

  const channel = member.guild.channels.cache.get(config.channelId);//channelId isi di config oke ;)
  

  const embed = new Discord.MessageEmbed()
  
  .setColor(0x3498DB)
  .setAuthor("Mang Ujang☕", "https://cdn.discordapp.com/avatars/909420653449469992/e84b77e3528cb79cdf5c32d3c85db8ec.png?size=256")//Nama author
  .setTitle("Warkop Ujang☕")
  .setURL("https://discord.gg/pzWeqaRQrZ")//Tittle bisa di klik
  .setDescription("Sebuah server yang diperuntukan untuk melepas penat setelah malakukan kegiatan yang membuat pikiran ada lelah :)") //isi tentang server
  .setImage("https://cdn.discordapp.com/attachments/910087909024075776/910088185067999232/welcome.gif")//Gambar sambutan    
  .setThumbnail("https://cdn.discordapp.com/avatars/910018612289499146/de5e660bcda6a1cdbef7b8f204e19ac1.png?size=256")//Thumnail
  
  
  .setTimestamp()
  .setFooter("© 2022 Warkop Ujang || Have a nice day😄🥰", "https://cdn.discordapp.com/avatars/910018612289499146/de5e660bcda6a1cdbef7b8f204e19ac1.png?size=256");//footer yakali masa ga tau footer
  
  channel.send(message,embed);
      
});
// Output end
  


client.login(config.token)//isi token di file conf
//kalo mau pake .env, tinggal ganti "config.token" jadi "process.env.token" abis itu lu buat env pake nama token