let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
try {
    if (!text) return m.reply('Link Groupnya Mana Kocak🗿')
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    m.reply(`Berhasil Join Grup`)
} catch (e) {
throw 'Maaf Tidak Bisa Masuk Ke Dalam Group Tersebut, Coba Cari Group Lain'
}
}
handler.help = ['join']
handler.tags = ['owner']

handler.command = /^join$/i
handler.rowner = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))