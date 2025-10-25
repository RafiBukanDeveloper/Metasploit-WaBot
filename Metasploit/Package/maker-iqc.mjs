/*Script By Rafi Developer
Nomor Developer: 6282286315998
Info Saluran Developer: https://whatsapp.com/channel/0029VbB8JFCJUM2cZIBfUm0K
Info Package: maker-iqc.mjs
*/


import fetch from 'node-fetch'

let handler = async (m, {
    conn,
    text,
    RafiTampilan
}) => {
    if (!text) return RafiTampilan('gunakan : .iqc jam|batre|pesan\ncontoh : .iqc 18:00|40|hai hai')
    try {
        await conn.sendMessage(m.chat, {
            react: {
                text: '🕐',
                key: m.key
            }
        })
        let [time, battery, ...msg] = text.split('|')
        if (!time || !battery || msg.length === 0) RafiTampilan('format salahh gunakan :\n.iqc jam|batre|pesan\nContoh:\n.iqc 18:00|40|hai hai')

        let messageText = encodeURIComponent(msg.join('|').trim())
        let url = `https://brat.siputzx.my.id/iphone-quoted?time=${encodeURIComponent(time)}&batteryPercentage=${battery}&carrierName=INDOSAT&messageText=${messageText}&emojiStyle=apple`

        let res = await fetch(url)
        if (!res.ok) return RafiTampilan('gagal fetch url')

        let buffer = await res.buffer()
        await conn.sendMessage(m.sender, {
            image: buffer
        }, {
            quoted: m
        })
        RafiTampilan('Hasil Foto Nya Udah Saya Kirim Ke Pesan Pribadi Kak')
    } finally {
        await conn.sendMessage(m.chat, {
            react: {
                text: '✅',
                key: m.key
            }
        })
    }
}

handler.help = ['iqc *<jam|batre|pesan>* (5 Limit)']
handler.tags = ['tools']
handler.command = ['iqc']
handler.limit = 5
export default handler