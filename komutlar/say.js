const Discord = require("discord.js");
exports.run= async (client, message, args) => {       

let Tag = "𐋃" // İSİM TAGINIZ.


   let TotalMember = message.guild.memberCount
          let Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
          let Taglı = message.guild.members.cache.filter(u => u.user.username.includes(Tag)).size;
          
          let toplamTag = Taglı
          let Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
          let Boost = message.guild.premiumSubscriptionCount;

message.channel.send(new Discord.MessageEmbed().setDescription(`
\`•\` Sunucumuzda toplam **${TotalMember}** kullanıcı bulunmaktadır.
\`•\` Sunucumuzda toplam **${Online}** aktif kullanıcı bulunmaktadır.
\`•\` Toplam **${Taglı}** \`${Tag}\` kişi tagımızda bulunuyor.
\`•\` Seste **${Voice}** kullanıcı bulunmaktadır.
\`•\` Sunucuya toplam **${Boost}** takviye yapılmıştır. 
`))



}
exports.conf = {
  name: "say",
  guildOnly: true,
  aliases: ['say']
};

exports.help = {
  name: "say",
  description: "Kayıt.",
  usage: "say"
};