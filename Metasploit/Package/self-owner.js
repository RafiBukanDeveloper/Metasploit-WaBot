let Rafiganteng = async (m, {
    conn,
    command,
    text
}) => {
let settings = db.data.settings[conn.user.jid];
switch (command) {
case "publik" :
case "public" : {
     settings.self = false;
    m.reply(`${settings.self ? "[❗] *Perintah DiTerima*\nBot Sekarang Dalam Mode Self\n Cuman Owner Dan Developer Yang Bisa Pake Bot" : "[❗] *Perintah DiTerima*\nBot Sekarang Dalam Mode Public\nSemua Orang Bisa Pake Bot"}`)
}
break
case "self" :
case "senyap" : {
    settings.self = true;
    m.reply(`${settings.self ? "[❗] *Perintah DiTerima*\nBot Sekarang Dalam Mode Self\n Cuman Owner Dan Developer Yang Bisa Pake Bot" : "[❗] *Perintah DiTerima*\nBot Sekarang Dalam Mode Public\nSemua Orang Bisa Pake Bot"}`)
}
}
}
Rafiganteng.owner = true;
Rafiganteng.help = ['self', 'publik'];
Rafiganteng.command = /^(self|senyap|publik|public)$/i;
Rafiganteng.tags = ['owner'];

module.exports = Rafiganteng;
