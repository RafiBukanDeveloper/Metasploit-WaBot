let Rafiganteng = async (m, {
    args,
    command
}) => {
    if (command === 'black') {
        let nomor = m.quoted ? m.quoted.sender : args[0]
        if (!nomor) return m.reply('🚫 Tag, reply, atau ketik nomor.')

        nomor = nomor.replace(/\D/g, '')
        if (!nomor) return m.reply('🚫 Nomor tidak valid.')

        let jid = nomor + '@s.whatsapp.net'

        // Inisialisasi chat jika belum ada
        db.data.chats[m.chat] ||= {}
        db.data.chats[m.chat].blacklist ||= []

        let chats = db.data.chats[m.chat]

        if (chats.blacklist.includes(nomor)) {
            return m.reply('📌 Nomor sudah diblacklist.')
        }

        chats.blacklist.push(nomor)
        m.reply(`✅ Nomor ${nomor} berhasil diblacklist.`)
    } else if (command === 'unblack') {
        let nomor = m.quoted ? m.quoted.sender : args[0]
        if (!nomor) return m.reply('🚫 Tag, reply, atau ketik nomor.')

        nomor = nomor.replace(/\D/g, '')
        if (!nomor) return m.reply('🚫 Nomor tidak valid.')

        let jid = nomor + '@s.whatsapp.net'

        if (!db.data.chats[m.chat] || !db.data.chats[m.chat].blacklist) {
            return m.reply('📌 Nomor tidak ada dalam blacklist.')
        }

        let index = db.data.chats[m.chat].blacklist.indexOf(nomor)
        if (index === -1) return m.reply('📌 Nomor tidak ditemukan di blacklist.')

        db.data.chats[m.chat].blacklist.splice(index, 1)
        m.reply(`✅ Nomor ${nomor} berhasil dihapus dari blacklist.`)
    } else if (command === 'blacklist') {
        let list = []

        for (let jid in db.data.chats) {
            let chat = db.data.chats[m.chat]
            if (chat.blacklist && chat.blacklist.length > 0) {
                chat.blacklist.forEach(nomor => {
                    if (!list.includes(nomor)) list.push(nomor)
                })
            }
        }

        if (list.length === 0) return m.reply('✅ Tidak ada nomor yang diblacklist.')

        let teks = list.map((n, i) => `${i + 1}. wa.me/${n}`).join('\n')
        m.reply(`📋 Daftar blacklist:\n\n${teks}`)
    }
}

Rafiganteng.group = true;
Rafiganteng.admin = true;
Rafiganteng.botAdmin = true;

Rafiganteng.help = ['black', 'blacklist', 'unblack']
Rafiganteng.command = /^(black|blacklist|unblack)$/i
Rafiganteng.tags = ['group']

module.exports = Rafiganteng
