let badwordRegex = /anjing|anj|babi|asu|memek|pepek|colmek|coli|ngentot|ngocok|kontol|unggeh|asyu|mmk|kntol|entod|pantek|ptk/i
let handler = (m) => m;
handler.before = async (m, { conn,ctx,sock,client,participants,groupMetadata,RafiTampilan,RafiMenu,isROwner,isOwner,isRAdmin,isAdmin,isBotAdmin }) => {
    if (m.isBaileys && m.fromMe) return 
    const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/itl427.jpg')
    let isBadword = badwordRegex.exec(m.text)
    if (chat.antiBadword && isBadword && m.isGroup) {
        user.warn += 1
        sleep(2000)
        conn.sendMessage(m.chat, {
            text: `${user.warn >= 4 ? '*📮 Warning Kamu Sudah Mencapai 5 Maka Kamu Akan Dikick!*' : '*📮 Kata Kata Toxic Terdeteksi*'}

${global.setting.namabot} Memberi Peringatan: ${user.warn} / 5

[❗] Jika *${global.setting.namabot}* sudah memperingatkanmu sebanyak 5x. Kamu akan dikeluarkan dari group ini.

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.setting.idch,
                   serverMessageId: null,
                   newsletterName: global.setting.namach,
                   },
                   externalAdReply: {
                   title: `Mau Sewa Bot Wa??,  Chat`,
                   body: `Wa Owner:` + setting.nomorowner,
                   thumbnailUrl: pp || setting.tampilan,
                   sourceUrl: '',
                   mediaType: 1,
                   renderLargerThumbnail: true
                   },
                },
            }, { quoted: m })
        if (user.warn >= 5) {
            user.warn = 0
            conn.sendMessage(m.chat, {
            text: `${user.warn >= 4 ? '*📮 Warning Kamu Sudah Mencapai 5 Maka Kamu Akan Dikick!*' : '*📮 Kata Kata Toxic Terdeteksi*'}

${global.setting.namabot} Memberi Peringatan: ${user.warn} / 5

[❗] Jika *${global.setting.namabot}* sudah memperingatkanmu sebanyak 5x. Kamu akan dikeluarkan dari group ini.

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.setting.idch,
                   serverMessageId: null,
                   newsletterName: global.setting.namach,
                   },
                   externalAdReply: {
                   title: `Mau Sewa Bot Wa??,  Chat`,
                   body: `Wa Owner:` + setting.nomorowner,
                   thumbnailUrl: pp || setting.tampilan,
                   sourceUrl: '',
                   mediaType: 1,
                   renderLargerThumbnail: true
                   },
                },
            }, { quoted: m })
            sleep(2000)
            conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
    return !0
}
module.exports = handler 