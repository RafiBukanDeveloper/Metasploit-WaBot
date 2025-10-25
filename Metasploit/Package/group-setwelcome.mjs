/*Script By Rafi Developer
Nomor Developer: 6282286315998
Info Saluran Developer: undefined
Info Package: group-setwelcome.mjs
*/


let rafiganteng = async (m, {
            conn,
            text,
            args,
            command,
            usedPrefix
        }) => {
            switch (command) {
                case "setwelcome":
                case "setwlc": {
                    if (!text) return m.reply(`Teksnya mana?\n\ncontoh:\n${usedPrefix + command} hai, @user!\nSelamat datang di grup @subject\n\n@desc\n Atau Ketik ${usedPrefix + command} default Untuk Buat Teksnya Jadi Kayak Biasa`)
                    let group = global.db.data.chats[m.chat]
                    if (text === "default") {
                        group.sWelcome = "_*Selamat Datang @user Di GROUP @subject*_\n*SEBELUM MEMULAI OBROLAN SILAHKAN INTRO DULU DI BAWAH*\n\nƙαɾƚυ іᥒ𝗍r᥆\n 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨\n\nଓ 𝐧𝐚𝐦𝐚:\nଓ 𝐚𝐬𝐤𝐨𝐭:\nଓ 𝐠𝐞𝐧𝐝𝐞𝐫:\nଓ 𝐤𝐞𝐥𝐚𝐬:\nଓ 𝐮𝐦𝐮𝐫:\n\n\nѕємσgα вєтαн' уαଓ\n\n> Semoga Betah"
                    } else {
                        group.sWelcome = text
                    }
                    m.reply(`Teks Welcome berhasil diatur Menjadi\n ${group.sWelcome}\n\nContoh Penggunaan\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)`)
                    }
                    break
                    case "setbye":
                    case "setbay":
                    case "setout":
                    case "setkeluar": {
                    if (!text) return m.reply(`Teksnya mana?\n\ncontoh:\n${usedPrefix + command} Selamat Tinggal @user😊\n Atau Ketik ${usedPrefix + command} default Untuk Buat Teksnya Jadi Kayak Biasa`)
                    let group = global.db.data.chats[m.chat]
                    if (text === "default") {
                        group.sBye = "😢 *Selamat Tinggal, Kak @user* 👋\n\nTerima kasih sudah menjadi bagian dari grup ini. Semoga kita bisa bertemu lagi di lain kesempatan. Hati-hati di perjalanan ya~ 💐"
                    } else {
                        group.sBye = text
                    }
                    m.reply(`Teks Bye berhasil diatur Menjadi\n ${group.sBye}\n\nContoh Penggunaan\n@user (Mention)`)
                    }
                }
            }
            rafiganteng.help = ['setwelcome','setbye']
            rafiganteng.command = ['setwelcome', 'setwlc','setbay','setout','setkeluar','setbye']
            rafiganteng.tags = ['group']
            export default rafiganteng