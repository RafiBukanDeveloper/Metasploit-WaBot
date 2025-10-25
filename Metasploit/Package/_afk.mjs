let handler = async m => m

handler.before = async m => {
    let user = global.db.data.users[m.sender]
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/itl427.jpg')

if (!m.isGroup) return false
  if (user.afk > -1) {
    let f = `
➠ Masih hidup ternyata wkwk\nKamu Berhenti AFK${user.afkReason ? ' Setelah ' + user.afkReason : ''}
➠ Selama ${clockString(new Date() - user.afk)}
`
conn.sendMessage(m.chat, {
            text: f,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: setting.idch,
                   serverMessageId: null,
                   newsletterName: setting.namach,
                   },
                   externalAdReply: {
                   title: `A F K  S T O P`,
                   body: `❲ ${conn.getName(m.sender)} ❳`,
                   thumbnailUrl: pp,
                   sourceUrl: '',
                   mediaType: 1,
                   renderLargerThumbnail: false
                   },
                },
            }, { quoted: m })
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.db.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    let pp2 = await conn.profilePictureUrl(jid, 'image').catch(_ => 'https://files.catbox.moe/itl427.jpg')
    let z = `
➠ Jangan Tag Dia Kak!
Dia Sedang AFK ${reason ? 'Dengan Alasan ' + reason : 'Tanpa Alasan'}
➠ Selama ${clockString(new Date() - user.afk)}
`
conn.sendMessage(m.chat, {
            text: z,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: setting.idch,
                   serverMessageId: null,
                   newsletterName: setting.namach,
                   },
                   externalAdReply: {
                   title: `S E D A N G  A F K`,
                   body: `❲ ${conn.getName(m.sender)} ❳`,
                   thumbnailUrl: pp2,
                   sourceUrl: '',
                   mediaType: 1,
                   renderLargerThumbnail: false
                   },
                },
            }, { quoted: m })
  }
  return true
}

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
    return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}