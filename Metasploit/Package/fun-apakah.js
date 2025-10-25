let handler = async (m, { command, text }) => {
m.reply(`*Pertanyaan:* ${command} ${text}
${texted('bold', 'Jawaban:')} ` + random(['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin']))
}

handler.help = ['apakah <teks>?']
handler.tags = ['fun']
handler.command = /^apakah$/i

module.exports = handler