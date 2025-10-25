const handler = async (m, { conn, participants }) => {
  const chatID = m.chat;
  const onlineMembers = [];

  const members = await conn.groupMetadata(chatID);
  for (const member of participants) {
    console.log('Member:', member);
    if (member.jid && member.jid && conn.user.jid && member.jid.includes('@s.whatsapp.net')) {
      onlineMembers.push(`- Name: @${member.jid.split(`@`)[0]}\n- Link: https://wa.me/${member.jid.split('@')[0]}\n`);
    }
  }

  if (onlineMembers.length > 0) {
    const onlineList = onlineMembers.join('\n');
    m.reply(`Daftar anggota yang sedang online:\n${onlineList}`);
  } else {
    m.reply('Tidak ada anggota yang sedang online.');
  }
};

handler.command = handler.help = ['listonline'];
handler.tags = ['group'];
handler.group = true

export default handler;