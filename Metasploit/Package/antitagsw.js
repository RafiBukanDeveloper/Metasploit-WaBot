let handler = async (m, { text, usedPrefix, command }) => {
    let list = `*[ ! ]* Pilihan
Mau pilih yang mana?
on
off

*[ ! ]* Pilihan 2
Mau type mana?
--delete
--kick

Contoh:
${usedPrefix + command} on --delete`;
    let [ena, typeRaw] = text.split(' --');
    let type = typeRaw?.trim()?.toLowerCase();
    if (!ena || !type) return m.reply(list);
    ena = ena.trim().toLowerCase();
    const validTypes = ['delete', 'kick'];
    if (!validTypes.includes(type)) return m.reply('Type tidak dikenali.');
    if (ena === "on") {
      db.data.chats[m.chat].tagsw[type] = true;
    } else if (ena === "off") {
      db.data.chats[m.chat].tagsw[type] = false;
    }
    m.reply(`*[ ! ]* Fitur *--${type}* sekarang *${ena === 'on' ? 'aktif' : 'nonaktif'}*`);
};

handler.before = async (m, {
    conn
}) => {
    if (db.data.chats[m.chat]?.tagsw.delete) {
        if (m.isGroup && m?.mtype === "groupStatusMentionMessage") {
            return conn.sendMessage(
                m.chat, {
                    delete: m.key
                }
            ).then(async (a) => {
                if (db.data.chats[m.chat].tagsw.kick) {
                    return conn.groupParticipantsUpdate(
                        m.chat,
                        [m.sender],
                        "remove"
                    ).then(a => conn.sendMessage(m.chat, {
                        text: `Grup ini terdeteksi ditandai dalam Status WhatsApp\n\n@${m.sender.split("@")[0]}, mohon untuk tidak menandai grup dalam status WhatsApp\n\nHal tersebut tidak diperbolehkan dalam grup ini.`
                    }, {
                        quoted: m
                    }))
                } else {
                    return conn.sendMessage(
                        m.chat, {
                            text: `Grup ini terdeteksi ditandai dalam Status WhatsApp\n\n@${m.sender.split("@")[0]}, mohon untuk tidak menandai grup dalam status WhatsApp\n\nHal tersebut tidak diperbolehkan dalam grup ini.`
                        }, {
                            quoted: m
                        }
                    )
                }
            })
        }
    }
}

handler.help = ['antitagsw'];
handler.tags = ['group'];
handler.command = /^antitagsw$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

module.exports = handler;
