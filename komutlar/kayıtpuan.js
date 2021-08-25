const Discord = require('discord.js');
const db = require("quick.db")
let kayıtayar = require('../kayıt-ayar.json')
exports.run = async (client, message, args) => {
    
    
  if(!message.member.roles.cache.has(kayıtayar.kayıtsorumlusuID)) return message.channel.send(`Bu komutu kullanabilmek için yeterli yetkiye sahip olmasın.`)

  let üye = message.mentions.users.first() || message.author
  if (!üye) return message.channel.send('Üye Etiketler misin ?')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(üye)
  let erkekpuanlar = db.fetch(`kayıt.puan.erkek.${üye.id}`)
    let kadınpuanlar = db.fetch(`kayıt.puan.kadın.${üye.id}`)
    let total = kadınpuanlar + erkekpuanlar
  let petrichor = new Discord.MessageEmbed()
  .setAuthor(`Kayıt Puan | Kişi : ${üye.username}`)
  .setColor('BLACK')
  .setDescription(`
 Toplam Kadın Kayıtı Puanın : **${kadınpuanlar ? kadınpuanlar : 'Hiç Kadın Birini Kayıt Etmedin'}** 

 Toplam Erkek Kayıtı Puanın : **${erkekpuanlar ? erkekpuanlar : 'Hiç Kadın Birini Erkek Etmedin'}** 

 Tüm Puan Toplamları : **${total ? total : 'Kayıt Puanın Yok'}**
  `)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`)
  .setImage('')
        .setThumbnail(member.user.avatarURL())
        
  return message.channel.send(petrichor)
};

exports.conf = {
  name: "kayıtpuan",
  guildOnly: true,
  aliases: ['stats", stat, kaçkişiyikayıtettim']
};

exports.help = {
  name: "kayıtpuan",
  description: "Kayıt",
  usage: "kayıtpuan"
};

