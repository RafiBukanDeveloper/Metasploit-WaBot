const TiktokLinkRegex = /tiktok.com\/([0-9A-Za-z])/i
const YoutubeLinkRegex = /youtube.com\/([0-9A-Za-z])|youtu.be\/([0-9A-Za-z])/i
const TelegramLinkRegex = /t.me\/([0-9A-Za-z])/i 
const FacebookLinkRegex = /facebook.com\/([0-9A-Za-z])|fb.me\/([0-9A-Za-z])/i
const InstagramLinkRegex = /instagram.com\/([0-9A-Za-z])/i
const GroupLinkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
const HttpLinkRegex = /http:\/\/([0-9A-Za-z])|https:\/\/([0-9A-Za-z])/i
const WaLinkRegex = /wa.me\/([0-9A-Za-z])/i
const ChLinkRegex = /whatsapp.com\/channel\/([0-9A-Za-z])/i;
require("../Ruang_Ganti-Ganti.js");
let handler = (m) => m;
handler.before = async (m, {
    isBotAdmin, isAdmin
}) => {
   const userAnti = global.settingAnti || 'kick'; // default button
    if (m.isBaileys && m.fromMe) return 
    let chat = global.db.data.chats[m.chat]
    let isLinkTiktok = TiktokLinkRegex.exec(m.text)
    let isLinkYt = YoutubeLinkRegex.exec(m.text)
    let isLinkTele = TelegramLinkRegex.exec(m.text)
    let isLinkFb = FacebookLinkRegex.exec(m.text)
    let isLinkIg = InstagramLinkRegex.exec(m.text)
    let isLinkGroup = GroupLinkRegex.exec(m.text)
    let isLinkHttp = HttpLinkRegex.exec(m.text)
    let isLinkWa = WaLinkRegex.exec(m.text)
    let isLinkCh = ChLinkRegex.exec(m.text)
        if (chat.antilinkTiktok && m.isGroup) {
           if (isLinkTiktok) {
             if (isAdmin) return m.reply('[❗] *Terdeteksi Admin Kirim Link Tiktok*\nTapi Peraturan Gak Berlaku Sama Admin Ya Kak')
             if (!isBotAdmin) return m.reply('[❗] *Terdeteksi Anda Kirim Link Tiktok*\nTindakan Ini Harus Segera Di Hentikan\nMasalahnya Bot Bukan Admin, Kagak Biasa Bertindak!😔')
             if (isBotAdmin) {
if (userAnti === 'kick') {
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Tiktok*\nMaaf Pesan Anda Kami Hapus\nDan Anda Kami Kick${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
    conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Tiktok*\nMaaf Pesan Anda Kami Hapus${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
}}
} else if (chat.antilinkYt && m.isGroup) {
            if (isLinkYt) {
              if (isAdmin) return m.reply('[❗] *Terdeteksi Admin Kirim Link Youtube*\nTapi Peraturan Gak Berlaku Sama Admin Ya Kak')
              if (!isBotAdmin) return m.reply('[❗] *Terdeteksi Anda Kirim Link Youtube*\nTindakan Ini Harus Segera Di Hentikan\nMasalahnya Bot Bukan Admin, Kagak Biasa Bertindak!😔')
              if (isBotAdmin) {
if (userAnti === 'kick') {
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Youtube*\nMaaf Pesan Anda Kami Hapus\nDan Anda Kami Kick${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
    conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Youtube*\nMaaf Pesan Anda Kami Hapus${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
}}
} else if (chat.antilinkTele && m.isGroup) {
            if (isLinkTele) {
              if (isAdmin) return m.reply('[❗] *Terdeteksi Admin Kirim Link Telegram*\nTapi Peraturan Gak Berlaku Sama Admin Ya Kak')
              if (!isBotAdmin) return m.reply('[❗] *Terdeteksi Anda Kirim Link Telegram*\nTindakan Ini Harus Segera Di Hentikan\nMasalahnya Bot Bukan Admin, Kagak Biasa Bertindak!😔')
              if (isBotAdmin) {
if (userAnti === 'kick') {
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Telegram*\nMaaf Pesan Anda Kami Hapus\nDan Anda Kami Kick${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
    conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Telegram*\nMaaf Pesan Anda Kami Hapus${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
}}
} else if (chat.antilinkFb && m.isGroup) {
            if (isLinkFb) {
              if (isAdmin) return m.reply('[❗] *Terdeteksi Admin Kirim Link Facebook*\nTapi Peraturan Gak Berlaku Sama Admin Ya Kak')
              if (!isBotAdmin) return m.reply('[❗] *Terdeteksi Anda Kirim Link Facebook*\nTindakan Ini Harus Segera Di Hentikan\nMasalahnya Bot Bukan Admin, Kagak Biasa Bertindak!😔')
              if (isBotAdmin) {
if (userAnti === 'kick') {
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Facebook*\nMaaf Pesan Anda Kami Hapus\nDan Anda Kami Kick${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
    conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Facebook*\nMaaf Pesan Anda Kami Hapus${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
}}
} else if (chat.antilinkIg && m.isGroup) {
            if (isLinkIg) {
              if (isAdmin) return m.reply('[❗] *Terdeteksi Admin Kirim Link Instagram*\nTapi Peraturan Gak Berlaku Sama Admin Ya Kak')
              if (!isBotAdmin) return m.reply('[❗] *Terdeteksi Anda Kirim Link Instagram*\nTindakan Ini Harus Segera Di Hentikan\nMasalahnya Bot Bukan Admin, Kagak Biasa Bertindak!😔')
              if (isBotAdmin) {
if (userAnti === 'kick') {
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Instagram*\nMaaf Pesan Anda Kami Hapus\nDan Anda Kami Kick${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
    conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Instagram*\nMaaf Pesan Anda Kami Hapus${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
}}
} else if (chat.antilinkGroup && m.isGroup) {
            if (isLinkGroup) {
              if (isAdmin) return m.reply('[❗] *Terdeteksi Admin Kirim Link Group*\nTapi Peraturan Gak Berlaku Sama Admin Ya Kak')
              if (!isBotAdmin) return m.reply('[❗] *Terdeteksi Anda Kirim Link Group*\nTindakan Ini Harus Segera Di Hentikan\nMasalahnya Bot Bukan Admin, Kagak Biasa Bertindak!😔')
              if (isBotAdmin) {
if (userAnti === 'kick') {
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Group*\nMaaf Pesan Anda Kami Hapus\nDan Anda Kami Kick${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
    conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Group*\nMaaf Pesan Anda Kami Hapus${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
}}
} else if (chat.antilinkHttp && m.isGroup) {
            if (isLinkHttp) {
              if (isAdmin) return m.reply('[❗] *Terdeteksi Admin Kirim Link Http*\nTapi Peraturan Gak Berlaku Sama Admin Ya Kak')
              if (!isBotAdmin) return m.reply('[❗] *Terdeteksi Anda Kirim Link Http*\nTindakan Ini Harus Segera Di Hentikan\nMasalahnya Bot Bukan Admin, Kagak Biasa Bertindak!😔')
              if (isBotAdmin) {
if (userAnti === 'kick') {
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Http*\nMaaf Pesan Anda Kami Hapus\nDan Anda Kami Kick${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
    conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Http*\nMaaf Pesan Anda Kami Hapus${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
}}
} else if (chat.antilinkWa && m.isGroup) {
            if (isLinkWa) {
              if (isAdmin) return m.reply('[❗] *Terdeteksi Admin Kirim Link Wa.me*\nTapi Peraturan Gak Berlaku Sama Admin Ya Kak')
              if (!isBotAdmin) return m.reply('[❗] *Terdeteksi Anda Kirim Link Wa.me*\nTindakan Ini Harus Segera Di Hentikan\nMasalahnya Bot Bukan Admin, Kagak Biasa Bertindak!😔')
              if (isBotAdmin) {
if (userAnti === 'kick') {
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Wa.me*\nMaaf Pesan Anda Kami Hapus\nDan Anda Kami Kick${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
    conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Wa.me*\nMaaf Pesan Anda Kami Hapus${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
}}
} else if (chat.antilinkCh && m.isGroup) {
            if (isLinkCh) {
              if (isAdmin) return m.reply('[❗] *Terdeteksi Admin Kirim Link Channel*\nTapi Peraturan Gak Berlaku Sama Admin Ya Kak')
              if (!isBotAdmin) return m.reply('[❗] *Terdeteksi Anda Kirim Link Channel*\nTindakan Ini Harus Segera Di Hentikan\nMasalahnya Bot Bukan Admin, Kagak Biasa Bertindak!😔')
              if (isBotAdmin) {
if (userAnti === 'kick') {
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Channel*\nMaaf Pesan Anda Kami Hapus\nDan Anda Kami Kick${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
    conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
    m.reply(`[❗] *Terdeteksi Anda Kirim Link Channel*\nMaaf Pesan Anda Kami Hapus${isBotAdmin ? '.' : ' *Tapi Bot Bukan Admin*'}`)
    conn.sendMessage(m.chat, { delete: m.key })
}}
}
return
}
module.exports = handler 