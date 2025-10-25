let handler = (m) => m;
handler.before = async (m, { conn,ctx,sock,client,participants,groupMetadata,user,bot,RafiTampilan,RafiMenu,isROwner,isOwner,isRAdmin,isAdmin,isBotAdmin }) => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isAudio = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiAudio && isAudio) {
    if(isAudio === "audioMessage"){
        if (isAdmin) return m.reply('[❗] *Terdeteksi Admin Kirim Audio!*\nAturan Group Gak Berlaku Sama Admin')
        if (isBotAdmin) {
          m.reply(`*Audio Terdeteksi*\n\nMaaf Ya Kak Pesannya Harus aku Hapus Karna Admin/Owner Mengaktifkan Anti Audio Untuk Chat Ini.`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        }return true
    }
  }
  return true
}
module.exports = handler 