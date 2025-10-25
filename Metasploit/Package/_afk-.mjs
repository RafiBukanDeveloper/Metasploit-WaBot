let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/itl427.jpg')
    user.afk = +new Date()
    user.afkReason = text
    let k = `➠ ${conn.getName(m.sender)} AFK Dengan Alasan ${text ? ': ' + text : ''}`
    conn.sendMessage(m.chat, {
            text: k,
            contextInfo: {
                mentionedJid: [null],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: setting.idch,
                   serverMessageId: null,
                   newsletterName: setting.namach,
                   },
                   externalAdReply: {
                   title: `M U L A I  A F K`,
                   body: `❲ ${conn.getName(m.sender)} ❳`,
                   thumbnailUrl: pp,
                   sourceUrl: '',
                   mediaType: 1,
                   renderLargerThumbnail: false
                   },
                },
            }
            )
}
handler.help = ['afk']
handler.tags = ['main']
handler.command = /^afk$/i
handler.group = true

export default handler