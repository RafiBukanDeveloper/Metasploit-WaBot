const fs = require('node:fs')
module.exports = {
    command: ["delsesi", "clearsesi", "deletesesi"],
    help: ["delsesi", "clearsesi", "deletesesi"],
    tags: ["owner"],
    owner: true,
    async code(m, {
        conn
    }) {
        fs.readdir(`./Metasploit/Cache/Sesi`, async function(err, files) {
            if (err) {
                console.log('Unable to scan directory: ' + err);
                return m.reply('Tidak Ada File Yang Di Scan: ' + err);
            }
            let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
            )
            console.log(filteredArray.length);
            let teks = `Terdeteksi ${filteredArray.length} file Sesi <3\n\n`
            if (filteredArray.length == 0) return m.reply(`${teks}`)
            filteredArray.map(function(e, i) {
                teks += (i + 1) + `. ${e}\n`
            })
            m.reply(`${teks}`)
            await sleep(2000)
            m.reply("Menghapus File Sesi")
            await filteredArray.forEach(function(file) {
                fs.unlinkSync(`./Metasploit/Cache/Sesi/${file}`)
            });
            await sleep(2000)
            m.reply("Berhasil Menghapus Semua File Sesi")
        });
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
