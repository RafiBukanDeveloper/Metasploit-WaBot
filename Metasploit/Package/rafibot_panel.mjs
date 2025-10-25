/*
CPANEL BY Rafi ganteng ahayy mabar hayuk
WhatsApp: wa.me/6282286315998
*/

import fetch from 'node-fetch'
import crypto from 'crypto'
import fs from 'fs'
let handler = async (m, {conn, text, args, command, usedPrefix, isOwner, isAdmin, isGroup, groupMetadata}) => {
const pler = JSON.parse(fs.readFileSync('./Metasploit/Cache/Database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const khususowner = [conn.user.jid, ...global.setting.nomorowner, ...global.developer.nomor].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
const domain = global.domain
const apikey = global.ptla
const capikey = global.ptlc
const eggid = 15
const q = text
const location = 1
const prefix = usedPrefix 
const tanggal = new Date()
const rafiganteng = conn
const pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/itl427.jpg')
switch (command) {
case 'listcommand': {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
let pannel = `
=====> CREATE PANEL <=====

[ *.1gb* ] { _nama,nomor_ }
[ *.2gb* ] { _nama,nomor_ }
[ *.3gb* ] { _nama,nomor_ }
[ *.4gb* ] { _nama,nomor_ }
[ *.5gb* ] { _nama,nomor_ }
[ *.6gb* ] { _nama,nomor_ }
[ *.7gb* ] { _nama,nomor_ }
[ *.8gb* ] { _nama,nomor_ }
[ *.unli* ] { _nama,nomor_ }
[ *.cadmin* ] { _username,@tag/nomor_ }
[ *.createadmin* ] { _username,@tag/nomor_ }


=====> MELIHAT ISI PANEL <=====
[ *.listadmin* ] _Menampilkan Semua Admin_
[ *.listusr* ] _Menampilkan Semua User_
[ *.listsrv* ] _Menampilkan Semua Server_
[ *.delsrv* ] _ID Server_
[ *.delusr* ] _ID User_`
m.reply(pannel)
}
break
case 'addgc': {   
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!khususowner) return m.reply(`Fitur Ini Khusus owner ${global.setting.namaownerowner}`)
pler.push(m.chat)
fs.writeFileSync('./Metasploit/Cache/Database/idgrup.json', JSON.stringify(pler))
m.reply(`*GROUP ${groupMetadata.subject}*\n_Sukses Addgc✅_`)
}
break
  case 'delgc': {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!khususowner) return m.reply(`Fitur Ini Khusus owner ${global.setting.namaowner}`)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./Metasploit/Cache/Database/idgrup.json', JSON.stringify(pler))
m.reply(`*GROUP ${groupMetadata.subject}*\n_Sukses Delgc✅_`)
}
break
case "1gb": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*TULISAN SALAH!*
CONTOH:
📋 ${usedPrefix + command} ${global.setting.namaowner},628xxx`)
let username = t[0];
let nm = t[1]
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + nm + `${global.akhiran}`
if (!u) return
let d = (await rafiganteng.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "1213"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username + nm,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})  
let { key } = await rafiganteng.sendMessage(m.chat, {text: '*🌀 SEDANG MEMBUAT SERVER...*'},{quoted: m})
let kontol = `*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
    let buttons = [
        { buttonId: ".makasih", buttonText: { displayText: `Makasih Admin ${global.setting.namaowner}` } }
    ];

    let buttonMessage = {
        image: { 
            url: global.setting.tampilan, 
            gifPlayback: true
        },
        caption: kontol,
        footer: ``,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                    sections: [
                        {
                            title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                            highlight_label: ``,
                            rows: [
        {
          "header": "🧭 Link Login",
          "title": `${global.domain}`,
          "id": "anu"
        },
        {
          "header": "🧾 Email",
          "title": `${email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${user.username}`,
          "id": "anu"
        },
        {
          "header": "🛒 Password",
          "title": `${password}`,
          "id": "anu"
        },
        {
          "header": "❗ Info Panel",
          "title": `${global.linkgroup}`,
          "id": "anu"
        }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rafiganteng.sendMessage(u, buttonMessage, { quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 1200
DISK : 1200
CPU ${cpu}

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`
await conn.sendMessage(m.chat, {text: p, edit: key},{quoted: m})
}
break
case "2gb": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*TULISAN SALAH!*
CONTOH:
📋 ${usedPrefix + command} ${global.setting.namaowner},628xxx`)
let username = t[0];
let nm = t[1]
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2048"
let cpu = "60"
let disk = "2048"
let email = username + nm + `${global.akhiran}`
if (!u) return
let d = (await rafiganteng.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "019"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username + nm,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})  
let { key } = await rafiganteng.sendMessage(m.chat, {text: '*🌀 SEDANG MEMBUAT SERVER...*'},{quoted: m})
let kontol = `*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
    let buttons = [
        { buttonId: ".makasih", buttonText: { displayText: `Makasih Admin ${global.setting.namaowner}` } }
    ];

    let buttonMessage = {
        image: { 
            url: global.setting.tampilan, 
            gifPlayback: true
        },
        caption: kontol,
        footer: ``,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                    sections: [
                        {
                            title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                            highlight_label: ``,
                            rows: [
        {
          "header": "🧭 Link Login",
          "title": `${global.domain}`,
          "id": "anu"
        },
        {
          "header": "🧾 Email",
          "title": `${email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${user.username}`,
          "id": "anu"
        },
        {
          "header": "🛒 Password",
          "title": `${password}`,
          "id": "anu"
        },
        {
          "header": "❗ Info Panel",
          "title": `${global.linkgroup}`,
          "id": "anu"
        }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rafiganteng.sendMessage(u, buttonMessage, { quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${memo}
DISK : ${disk}
CPU ${cpu}

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`
await conn.sendMessage(m.chat, {text: p, edit: key},{quoted: m})
}
break
case "3gb": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*TULISAN SALAH!*
CONTOH:
📋 ${usedPrefix + command} ${global.setting.namaowner},628xxx`)
let username = t[0];
let nm = t[1]
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3096"
let cpu = "70"
let disk = "3096"
let email = username + nm + `${global.akhiran}`
if (!u) return
let d = (await rafiganteng.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "019"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username + nm,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})  
let { key } = await rafiganteng.sendMessage(m.chat, {text: '*🌀 SEDANG MEMBUAT SERVER...*'},{quoted: m})
let kontol = `*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
    let buttons = [
        { buttonId: ".makasih", buttonText: { displayText: `Makasih Admin ${global.setting.namaowner}` } }
    ];

    let buttonMessage = {
        image: { 
            url: global.setting.tampilan, 
            gifPlayback: true
        },
        caption: kontol,
        footer: ``,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                    sections: [
                        {
                            title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                            highlight_label: ``,
                            rows: [
        {
          "header": "🧭 Link Login",
          "title": `${global.domain}`,
          "id": "anu"
        },
        {
          "header": "🧾 Email",
          "title": `${email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${user.username}`,
          "id": "anu"
        },
        {
          "header": "🛒 Password",
          "title": `${password}`,
          "id": "anu"
        },
        {
          "header": "❗ Info Panel",
          "title": `${global.linkgroup}`,
          "id": "anu"
        }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rafiganteng.sendMessage(u, buttonMessage, { quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${memo}
DISK : ${disk}
CPU ${cpu}

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`
await conn.sendMessage(m.chat, {text: p, edit: key},{quoted: m})
}
break
case "5gb": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*TULISAN SALAH!*
CONTOH:
📋 ${usedPrefix + command} ${global.setting.namaowner},628xxx`)
let username = t[0];
let nm = t[1]
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4200"
let cpu = "80"
let disk = "4200'"
let email = username + nm + `${global.akhiran}`
if (!u) return
let d = (await rafiganteng.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "019"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username + nm,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})  
let { key } = await rafiganteng.sendMessage(m.chat, {text: '*🌀 SEDANG MEMBUAT SERVER...*'},{quoted: m})
let kontol = `*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
    let buttons = [
        { buttonId: ".makasih", buttonText: { displayText: `Makasih Admin ${global.setting.namaowner}` } }
    ];

    let buttonMessage = {
        image: { 
            url: global.setting.tampilan, 
            gifPlayback: true
        },
        caption: kontol,
        footer: ``,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                    sections: [
                        {
                            title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                            highlight_label: ``,
                            rows: [
        {
          "header": "🧭 Link Login",
          "title": `${global.domain}`,
          "id": "anu"
        },
        {
          "header": "🧾 Email",
          "title": `${email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${user.username}`,
          "id": "anu"
        },
        {
          "header": "🛒 Password",
          "title": `${password}`,
          "id": "anu"
        },
        {
          "header": "❗ Info Panel",
          "title": `${global.linkgroup}`,
          "id": "anu"
        }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rafiganteng.sendMessage(u, buttonMessage, { quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${memo}
DISK : ${disk}
CPU ${cpu}

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`
await conn.sendMessage(m.chat, {text: p, edit: key},{quoted: m})
}
break
case "4gb": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*TULISAN SALAH!*
CONTOH:
📋 ${usedPrefix + command} ${global.setting.namaowner},628xxx`)
let username = t[0];
let nm = t[1]
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5200"
let cpu = "100"
let disk = "5200'"
let email = username + nm + `${global.akhiran}`
if (!u) return
let d = (await rafiganteng.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "019"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username + nm,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})  
let { key } = await rafiganteng.sendMessage(m.chat, {text: '*🌀 SEDANG MEMBUAT SERVER...*'},{quoted: m})
let kontol = `*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
    let buttons = [
        { buttonId: ".makasih", buttonText: { displayText: `Makasih Admin ${global.setting.namaowner}` } }
    ];

    let buttonMessage = {
        image: { 
            url: global.setting.tampilan, 
            gifPlayback: true
        },
        caption: kontol,
        footer: ``,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                    sections: [
                        {
                            title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                            highlight_label: ``,
                            rows: [
        {
          "header": "🧭 Link Login",
          "title": `${global.domain}`,
          "id": "anu"
        },
        {
          "header": "🧾 Email",
          "title": `${email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${user.username}`,
          "id": "anu"
        },
        {
          "header": "🛒 Password",
          "title": `${password}`,
          "id": "anu"
        },
        {
          "header": "❗ Info Panel",
          "title": `${global.linkgroup}`,
          "id": "anu"
        }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rafiganteng.sendMessage(u, buttonMessage, { quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${memo}
DISK : ${disk}
CPU ${cpu}

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`
await conn.sendMessage(m.chat, {text: p, edit: key},{quoted: m})
}
break
case "6gb": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*TULISAN SALAH!*
CONTOH:
📋 ${usedPrefix + command} ${global.setting.namaowner},628xxx`)
let username = t[0];
let nm = t[1]
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6200"
let cpu = "120"
let disk = "6200'"
let email = username + nm + `${global.akhiran}`
if (!u) return
let d = (await rafiganteng.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "019"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username + nm,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})  
let { key } = await rafiganteng.sendMessage(m.chat, {text: '*🌀 SEDANG MEMBUAT SERVER...*'},{quoted: m})
let kontol = `*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
    let buttons = [
        { buttonId: ".makasih", buttonText: { displayText: `Makasih Admin ${global.setting.namaowner}` } }
    ];

    let buttonMessage = {
        image: { 
            url: global.setting.tampilan, 
            gifPlayback: true
        },
        caption: kontol,
        footer: ``,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                    sections: [
                        {
                            title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                            highlight_label: ``,
                            rows: [
        {
          "header": "🧭 Link Login",
          "title": `${global.domain}`,
          "id": "anu"
        },
        {
          "header": "🧾 Email",
          "title": `${email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${user.username}`,
          "id": "anu"
        },
        {
          "header": "🛒 Password",
          "title": `${password}`,
          "id": "anu"
        },
        {
          "header": "❗ Info Panel",
          "title": `${global.linkgroup}`,
          "id": "anu"
        }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rafiganteng.sendMessage(u, buttonMessage, { quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${memo}
DISK : ${disk}
CPU ${cpu}

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`
await conn.sendMessage(m.chat, {text: p, edit: key},{quoted: m})
}
break
case "8gb": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*TULISAN SALAH!*
CONTOH:
📋 ${usedPrefix + command} ${global.setting.namaowner},628xxx`)
let username = t[0];
let nm = t[1]
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "7200"
let cpu = "140"
let disk = "7200'"
let email = username + nm + `${global.akhiran}`
if (!u) return
let d = (await rafiganteng.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "019"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username + nm,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})  
let { key } = await rafiganteng.sendMessage(m.chat, {text: '*🌀 SEDANG MEMBUAT SERVER...*'},{quoted: m})
let kontol = `*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
    let buttons = [
        { buttonId: ".makasih", buttonText: { displayText: `Makasih Admin ${global.setting.namaowner}` } }
    ];

    let buttonMessage = {
        image: { 
            url: global.setting.tampilan, 
            gifPlayback: true
        },
        caption: kontol,
        footer: ``,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                    sections: [
                        {
                            title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                            highlight_label: ``,
                            rows: [
        {
          "header": "🧭 Link Login",
          "title": `${global.domain}`,
          "id": "anu"
        },
        {
          "header": "🧾 Email",
          "title": `${email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${user.username}`,
          "id": "anu"
        },
        {
          "header": "🛒 Password",
          "title": `${password}`,
          "id": "anu"
        },
        {
          "header": "❗ Info Panel",
          "title": `${global.linkgroup}`,
          "id": "anu"
        }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rafiganteng.sendMessage(u, buttonMessage, { quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${memo}
DISK : ${disk}
CPU ${cpu}

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`
await conn.sendMessage(m.chat, {text: p, edit: key},{quoted: m})
}
break
case "7gb": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*TULISAN SALAH!*
CONTOH:
📋 ${usedPrefix + command} ${global.setting.namaowner},628xxx`)
let username = t[0];
let nm = t[1]
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "8200"
let cpu = "200"
let disk = "8200'"
let email = username + nm + `${global.akhiran}`
if (!u) return
let d = (await rafiganteng.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "019"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username + nm,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})  
let { key } = await rafiganteng.sendMessage(m.chat, {text: '*🌀 SEDANG MEMBUAT SERVER...*'},{quoted: m})
let kontol = `*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
    let buttons = [
        { buttonId: ".makasih", buttonText: { displayText: `Makasih Admin ${global.setting.namaowner}` } }
    ];

    let buttonMessage = {
        image: { 
            url: global.setting.tampilan, 
            gifPlayback: true
        },
        caption: kontol,
        footer: ``,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                    sections: [
                        {
                            title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                            highlight_label: ``,
                            rows: [
        {
          "header": "🧭 Link Login",
          "title": `${global.domain}`,
          "id": "anu"
        },
        {
          "header": "🧾 Email",
          "title": `${email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Email",
          "title": `${email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${user.username}`,
          "id": "anu"
        },
        {
          "header": "🛒 Password",
          "title": `${password}`,
          "id": "anu"
        },
        {
          "header": "❗ Info Panel",
          "title": `${global.linkgroup}`,
          "id": "anu"
        }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rafiganteng.sendMessage(u, buttonMessage, { quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : ${memo}
DISK : ${disk}
CPU ${cpu}

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`
await conn.sendMessage(m.chat, {text: p, edit: key},{quoted: m})
}
break
case "unli": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let t = text.split(',');
if (t.length < 2) return m.reply(`*TULISAN SALAH!*
CONTOH:
📋 ${usedPrefix + command} ${global.setting.namaowner},628xxx`)
let username = t[0];
let nm = t[1]
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + nm + `${global.akhiran}`
if (!u) return
let d = (await rafiganteng.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "019"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username + nm,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})  
let { key } = await rafiganteng.sendMessage(m.chat, {text: '*🌀 SEDANG MEMBUAT SERVER...*'},{quoted: m})
let kontol = `*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
    let buttons = [
        { buttonId: ".makasih", buttonText: { displayText: `Makasih Admin ${global.setting.namaowner}` } }
    ];

    let buttonMessage = {
        image: { 
            url: global.setting.tampilan, 
            gifPlayback: true
        },
        caption: kontol,
        footer: ``,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                    sections: [
                        {
                            title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                            highlight_label: ``,
                            rows: [
        {
          "header": "🧭 Link Login",
          "title": `${global.domain}`,
          "id": "anu"
        },
        {
          "header": "🧾 Email",
          "title": `${email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${user.username}`,
          "id": "anu"
        },
        {
          "header": "🛒 Password",
          "title": `${password}`,
          "id": "anu"
        },
        {
          "header": "❗ Info Panel",
          "title": `${global.linkgroup}`,
          "id": "anu"
        }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rafiganteng.sendMessage(u, buttonMessage, { quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = `*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : UNLIMITED 
DISK : UNLIMITED 
CPU UNLIMITED 

*USR & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`
await conn.sendMessage(m.chat, {text: p, edit: key},{quoted: m})
}
break
case "delusr": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let usr = args[0]
if (!usr) return m.reply('Id User nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*GADA*')
m.reply('*SUKSES HAPUS USER*')
}
break
case "delsrv": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let srv = args[0]
if (!srv) return m.reply('Id Server nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*GADA*')
m.reply('*SUKSES HAPUS SERVER*')
}
break
case "listusr": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await rafiganteng.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "createadmin": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let s = q.split(',');
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nm = s[1]
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + nm + `${global.akhiran}`,
"username": username + nm,
"first_name": username,
"last_name": "Admin",
"language": "en",
 "root_admin" : true,  
"password": password
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await rafiganteng.sendMessage(m.chat, listMessage)

    let kontol = `*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
    let buttons = [
        { buttonId: ".makasih", buttonText: { displayText: `Makasih Admin ${global.setting.namaowner}` } }
    ];

    let buttonMessage = {
        image: { 
            url: global.setting.tampilan, 
            gifPlayback: true
        },
        caption: kontol,
        footer: ``,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                    sections: [
                        {
                            title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                            highlight_label: ``,
                            rows: [
        {
          "header": "🧭 Link Login",
          "title": `${global.domain}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${user.email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${username}`,
          "id": "anu"
        },
        {
          "header": "🛒 Password",
          "title": `${password}`,
          "id": "anu"
        },
        {
          "header": "❗ Info Panel",
          "title": `${global.linkgroup}`,
          "id": "anu"
        }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rafiganteng.sendMessage(nomornya, buttonMessage, { quoted: m });

} 
break
case "listadmin": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await rafiganteng.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "cadmin": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
let s = q.split(',');
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "0247"
let nm = s[1]
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + nm + `${global.akhiran}`,
"username": username + nm,
"first_name": username,
"last_name": "admin",
"language": "en",
 "root_admin" : true,  
"password": password
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
*SUCCESSFULLY ADD USER ADMIN*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${nomor}
`
    const listMessage = {

        text: tks,

    }

	

    await rafiganteng.sendMessage(m.chat, listMessage)
let kontol = `*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*`
    let buttons = [
        { buttonId: ".makasih", buttonText: { displayText: `Makasih Admin ${global.setting.namaowner}` } }
    ];

    let buttonMessage = {
        image: { 
            url: global.setting.tampilan, 
            gifPlayback: true
        },
        caption: kontol,
        footer: ``,
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' },
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                    sections: [
                        {
                            title: "𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐃𝐚𝐭𝐚 𝐏𝐚𝐧𝐞𝐥 𝐀𝐧𝐝𝐚",
                            highlight_label: ``,
                            rows: [
        {
          "header": "🧭 Link Login",
          "title": `${global.domain}`,
          "id": "anu"
        },
        {
          "header": "🧾 Email",
          "title": `${email}`,
          "id": "anu"
        },
        {
          "header": "🧾 Username",
          "title": `${user.username}`,
          "id": "anu"
        },
        {
          "header": "🛒 Password",
          "title": `${password}`,
          "id": "anu"
        },
        {
          "header": "📖 LinkGroup",
          "title": `${global.linkgroup}`,
          "id": "anu"
        }
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }
    ];

    buttonMessage.buttons.push(...flowActions);

    await rafiganteng.sendMessage(nomornya, buttonMessage, { quoted: m });
}
break
case "listsrv": {
if (!m.isGroup) return m.reply("fitur ini Hanya Bisa Di Gunakan Di Dalam Group")
if (!isAdmin) return global.dfail("admin", m, this)
if (!jangan) return m.reply("Fitur Ini Belum Bisa Di Gunakan Di Group Ini\nKetik .addgc\nBuat Akses Group")
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await rafiganteng.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }        
}
break
case "makasih": {
 m.reply('SAMA SAMA SAYANG')
  }
break
}
}
handler.help = ['listcommand','1gb','2gb','3gb','4gb','5gb','6gb','7gb','8gb','unli','delusr','delsrv','listusr','listsrv','createadmin','cadmin','listadmin','addgc','delgc']
handler.command = ['listcommand','1gb','2gb','3gb','4gb','5gb','6gb','7gb','8gb','unli','delusr','delsrv','listusr','listsrv','createadmin','cadmin','listadmin','makasih','addgc','delgc']
handler.tags = ['cpanel']
export default handler