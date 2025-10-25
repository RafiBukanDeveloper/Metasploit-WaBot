const handler = async (m, { conn, command }) => {
  if (!m.quoted) throw 'Reply pesan yang ingin dihapus';
  let { chat, fromMe } = m.quoted
	let charm = global.db.data.chats[m.chat]
  try {
    let bilek = m.message.extendedTextMessage.contextInfo.participant;
    let banh = m.message.extendedTextMessage.contextInfo.stanzaId;
    return conn.sendMessage(chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
} catch {
    return conn.sendMessage(m.chat, { delete: m.quoted.vM.key });
}
};

handler.help = ['del', 'delete'];
handler.tags = ['tools','group','owner'];
handler.command = /^(del|hps|d|hapus|erase)$/i;
handler.admin = true
export default handler;
