import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
    let azan = 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
m.reply('Tunggu Sebentar Kak, Lagi Proses')

await conn.sendMessage(m.chat, { 
                audio: {url: azan}, 
                mimetype: "audio/mpeg",
                ptt: true,
                contextInfo: {
mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.setting.idch,
      serverMessageId: 103,
      newsletterName: global.setting.namach
    },
    externalAdReply: {
title: `Judul Sound`, 
body: 'Suara Adzan Merdu', 
sourceUrl: "https://wa.me/6282286315998?text=Mau%bot%dong%kak",
thumbnailUrl: 'https://files.catbox.moe/at2m4v.jpg', 
renderLargerThumbnail: false
}, 
}}, { quoted: m })
}
handler.command = /^(suara-adzan)$/i
export default handler