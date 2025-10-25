/*Script By Rafi Developer
Nomor Developer: 6282286315998
Info Saluran Developer: https://whatsapp.com/channel/0029VbB8JFCJUM2cZIBfUm0K
Info Package: manajemen-vercel.mjs
*/


import {
    downloadContentFromMessage
} from "@Rafi_Project/baileys"
let rafiganteng = async (m, {
    conn,
    text,
    args,
    command,
    usedPrefix,
    RafiTampilan
}) => {

    switch (command) {
        case "deploy": {
            if (!text) return RafiTampilan(`gunakan format ${command} <NamaWeb>`)
            let q = m.quoted
            if (!q || !/zip|html/.test(q.mimetype)) return RafiTampilan("Reply file .zip atau .html!")
            const webName = text.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "")
            const domainCheckUrl = `https://${webName}.vercel.app`
            try {
                const check = await fetch(domainCheckUrl)
                if (check.status === 200) return RafiTampilan(`Website *${webName}* sudah dipakai, coba nama lain`)
            } catch {}

            const mediaType = q.mtype.replace("Message", "")
            let buffer = Buffer.from([])
            try {
                const stream = await downloadContentFromMessage(q, mediaType)
                for await (const chunk of stream) buffer = Buffer.concat([buffer, chunk])
            } catch (err) {
                return RafiTampilan("Gagal mendownload file, mungkin sudah kadaluarsa atau rusak")
            }
            const filesToUpload = []
            if (q.mimetype.includes("zip")) {
                const unzipper = require("unzipper")
                const directory = await unzipper.Open.buffer(buffer)
                for (const file of directory.files) {
                    if (file.type === "File") {
                        const content = await file.buffer()
                        filesToUpload.push({
                            file: file.path.replace(/^\/+/g, ""),
                            data: content.toString("base64"),
                            encoding: "base64"
                        });
                    }
                }
                if (!filesToUpload.some(x => x.file.toLowerCase().endsWith("index.html"))) {
                    return RafiTampilan("index.html tidak ditemukan di dalam ZIP")
                }
            } else if (q.mimetype.includes("html")) {
                filesToUpload.push({
                    file: "index.html",
                    data: buffer.toString("base64"),
                    encoding: "base64"
                })
            } else {
                return RafiTampilan("File tidak dikenali. Kirim ZIP atau file lain");
            }
            const headers = {
                Authorization: `Bearer ${global.TokenVercel}`,
                "Content-Type": "application/json"
            }
            await fetch("https://api.vercel.com/v9/projects", {
                method: "POST",
                headers,
                body: JSON.stringify({
                    name: webName
                })
            }).catch(() => {})
            const deployRes = await fetch("https://api.vercel.com/v13/deployments", {
                method: "POST",
                headers,
                body: JSON.stringify({
                    name: webName,
                    project: webName,
                    files: filesToUpload,
                    projectSettings: {
                        framework: null
                    }
                })
            })
            const deployData = await deployRes.json().catch(() => null);
            if (!deployData || !deployData.url) {
                console.log("Deploy Error:", deployData);
                return RafiTampilan(`Deploy gagal:\n${JSON.stringify(deployData)}`);
            }
            const wurl = `https://${webName}.vercel.app`;
            await conn.sendMessage(m.chat, {
                text: `WEBSITE URL: *${wurl}*`,
                title: "",
                subtitle: "",
                footer: "©" + setting.namabot,
                interactiveButtons: [{
                        name: "cta_url",
                        buttonParamsJson: JSON.stringify({
                            display_text: "kunjungi web",
                            url: `${wurl}`
                        })
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: JSON.stringify({
                            display_text: "salin URL",
                            copy_code: `${wurl}`
                        })
                    }
                ]
            }, {
                quoted: m
            })
        }
        break
        case "listweb": {
            const headers = {
                Authorization: `Bearer ${global.TokenVercel}`,
            }
            try {
                const res = await fetch(`https://api.vercel.com/v9/projects`, {
                    method: "GET",
                    headers,
                })
                if (!res.ok) {
                    const errText = await res.text()
                    return m.reply(`Gagal mengambil daftar:\n${errText}`)
                }
                const data = await res.json()
                if (!data.projects || data.projects.length === 0) {
                    return m.reply("Tidak ada proyek/web yang ditemukan.");
                }
                let textList = `📄 *Daftar Web yang telah di buat di akun vercel:*\n\n`
                data.projects.forEach((proj, i) => {
                    textList += `${i + 1}. *${proj.name}*\n• ID: ${proj.id}\n• URL: https://${proj.name}.vercel.app\n\n`;
                })
                m.reply(textList.trim())
            } catch (err) {
                console.error("error :", err)
                m.reply("Terjadi kesalahan saat mengambil daftar web")
            }
        }
        break

        case 'delweb': {
            if (!text) return m.reply(`gunakan format ${command} <NamaWeb>`)
            const webName = text.trim().toLowerCase();
            const headers = {
                Authorization: `Bearer ${global.TokenVercel}`
            }
            try {
                const response = await fetch(`https://api.vercel.com/v9/projects/${webName}`, {
                    method: "DELETE",
                    headers,
                }, )
                if (response.status === 200 || response.status === 204) {
                    return m.reply(`Website *${webName}* berhasil dihapus dari Vercel`, )
                } else if (response.status === 404) {
                    return m.reply(`Website *${webName}* tidak ditemukan di akun Vercel kamu`, )
                } else if (response.status === 403 || response.status === 401) {
                    return m.reply(`Token Vercel tidak valid atau tidak punya akses ke project ini`, )
                } else {
                    let result = {}
                    try {
                        result = await response.json()
                    } catch (e) {}
                    return m.reply(`Gagal menghapus website:\n${result.error?.message || "Tidak diketahui"}`, )
                }
            } catch (err) {
                console.error(err)
                m.reply(`Terjadi kesalahan saat mencoba menghapus:\n${err.message}`, )
            }
        }
        break
    }
}
rafiganteng.command = rafiganteng.help = ['deploy', 'listweb', 'delweb']
rafiganteng.tags = ['tools']
rafiganteng.developer = true
export default rafiganteng