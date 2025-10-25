let handler = (m) => m;
handler.before = async (m, { conn,ctx,sock,client,participants,groupMetadata,RafiTampilan,RafiMenu,isROwner,isOwner,isRAdmin,isAdmin,isBotAdmin }) => {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isVideo = m.mtype
  let hapus = m.key.participant
  let bang = m.key.id
  if (chat.antiVideo && isVideo) {
    if(isVideo === "videoMessage"){
        if (isAdmin) return m.reply("[ ❗ ] Terdeteksi Admin Kirim Video\n\nPeraturan Group Gak Berlaku Sama Admin Ya Guys")
        if (isBotAdmin) {
          RafiTampilan(`*Video Terdeteksi*\n\nMaaf Kak, Pesan kamu Harus Bot Hapus\n Karna Admin/Owner Mengaktifkan Anti video Untuk Group Ini.`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
        } return true
    }
  }
  return true
}
module.exports = handler