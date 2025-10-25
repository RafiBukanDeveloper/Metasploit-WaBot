/*Script By Rafi Developer
Nomor Developer: 6282286315998
Info Saluran Developer: undefined
Info Package: group-welcome.js
*/


let rafiganteng = async (m, {
            conn,
            text,
            args,
            command,
            usedPrefix
        }) => {
            if (!text) return m.reply('[❗] *Penggunaan Salah*\nContoh .welcome on Untuk Menghidupkan welcome\n.welcome off Untuk Mematikan Welcome')
            let group = global.db.data.chats[m.chat]
            if (text === "on") {
                group.welcome = true
                m.reply('[❗] *Peringatan*\nWelcome Berhasil Di Hidupkan Di Group ini')
            } else if (text === "off") {
                    group.welcome = false
                    m.reply('[❗] *Peringatan*\nWelcome Berhasil Di Matikan Di Group ini')
                }
            }
            rafiganteng.help =  ['welcome on/off']
            rafiganteng.command = ['welcome']
            rafiganteng.tags = ['group']
            module.exports = rafiganteng