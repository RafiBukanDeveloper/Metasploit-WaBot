const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const moment = require('moment-timezone')
const os = require('os')
let Rafiganteng = {
    help: [],
    command: ["menu", "rafimenu"],
    tags: ["run"],
    code: async (m, {
        conn,
        text,
        bot,
        isROwner,
        isDeveloper,
        usedPrefix,
        command
    }) => {
    let musik = `${random(['https://files.catbox.moe/egsujh.mp3','https://files.catbox.moe/q3nla8.mp3','https://files.catbox.moe/yetxki.mp3','https://files.catbox.moe/7e1zri.mp3','https://files.catbox.moe/1lllm4.mp3','https://files.catbox.moe/wo9d98.mp3','https://files.catbox.moe/gya1sk.mp3','https://files.catbox.moe/2vjss9.mp3','https://files.catbox.moe/txsudo.mp3'])}`
        function getPluginsByTags(selectedTags = []) {
            const tagCount = {};
            const tagHelpMapping = {};

            const selectedTagsLower = selectedTags.map(tag => tag.toLowerCase());

            Object.keys(pckg.Package)
                .filter(name => !pckg.Package[name].disabled)
                .forEach(name => {
                    const Tools = pckg.Package[name];
                    const tagsArray = Array.isArray(Tools.tags) ? Tools.tags : [];
                    const helpArray = Array.isArray(Tools.help) ? Tools.help : [Tools.help];

                    tagsArray.forEach(tag => {
                        if (!tag) return;

                        const tagLower = tag.toLowerCase();

                        if (selectedTags.length > 0 && !selectedTagsLower.includes(tagLower)) {
                            return;
                        }

                        if (tagCount[tag]) {
                            tagCount[tag]++;
                            tagHelpMapping[tag].push(...helpArray);
                        } else {
                            tagCount[tag] = 1;
                            tagHelpMapping[tag] = [...helpArray];
                        }
                    });
                });

            if (Object.keys(tagCount).length === 0) {
                return
            }

            return Object.keys(tagCount)
                .map(tag => {
                    const helpList = tagHelpMapping[tag]
                        .map((helpItem, index) => `│ *( ${index + 1} )* ${usedPrefix + helpItem}`)
                        .join("\n");

                    return `  ━━━ׅ━⁞ ✶ ${tag.toUpperCase()} ✶ ⁞━ׅ━━━\n╭─ׅ──ֹ━━━ׅ━⁞ ✶ ⁞━ׅ━━━ֹ──ׅ─╮  
${helpList}  
╰────────────────╯`;
                })
                .join("\n\n");
        }

        // User info
        const user = {
            name: m.pushName || 'User',
            number: (m.sender || '').split('@')[0] || '62xxx-xxx-xxx',
            limit: db.data.users[m.sender].limit,
            status: isDeveloper ? 'Developer Bot' : isROwner ? 'Owner Bot' : bot ? 'Bot Whatsapp' : 'User Gratisan'
        };

        // Bot info - Handle config.owner properly
        const botNumber = Array.isArray(setting.nomorbot) ?
            setting.nomorowner[0] :
            typeof setting.nomorbot === 'string' ?
            setting.nomorbot :
            '62xxx-xxx-xxx';
        const cleanBotNumber = botNumber.replace('@s.whatsapp.net', '').split('@')[0];

        const botInfo = {
            name: setting.namabot,
            number: cleanBotNumber
        };
        let d = new Date(new Date + 3600000)
        let locale = 'id'
        let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
        let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
        let { age, exp, pacar, level, role, registered, eris, money} = global.db.data.users[m.sender]
        let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Yes': 'No'}`
    let jodoh = pacar ? `Berpacaran @${pacar.split`@`[0]}` : 'Jomblo'
    let mode = global.db.data.settings[conn.user.jid].self ? 'Private' : 'Publik'
        const time = moment().tz('Asia/Jakarta');
const tanggalLebaran = moment("2026-03-19"); // Tanggal Lebaran 2026
  const tanggalPuasa = moment("2026-02-18");  // Tanggal awal Puasa 2026
  const tanggalIdulAdha = moment("2026-05-26"); // Tanggal Idul Adha 2026
  const tanggalNatal = moment("2025-12-25"); // Natal 2026
  
  // Countdown to events
  const mundurLebaran = tanggalLebaran.diff(time, 'days');
  const mundurPuasa = tanggalPuasa.diff(time, 'days');
  const mundurIdulAdha = tanggalIdulAdha.diff(time, 'days');
  const mundurNatal = tanggalNatal.diff(time, 'days');
        const pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/itl427.jpg')

        // Main menu design
        const demonSlayerHeader = `*Halo Adik Adik 👋*  
Saya *${setting.namabot}*, Sebuah Bot Whatsapp Yang Di Kembangkan Oleh *${developer.nama}*.

Bot ini dapat digunakan untuk *tujuan pendidikan*, *unduh media*, *permainan*, *moderasi grup*, dan *banyak fitur lainnya* yang membantu mempermudah aktivitas harian Anda.  

➤ *Semua Menu:* \`.menu all\`  
➤ *Fitur List:* \`.menu list\`  
➤ *Nomor Owner:* \`.owner\``;
        const teksdx = `_*Terima Kasih Semua, Salam Dari ${botInfo.name}!*_`;

        const botInfoSection = `

╭─[ 🤖 Info Bot ]─╮  
│ 🏷️ Nama: ${botInfo.name}  
│ 📞 Nomor: @${botInfo.number}  
│ 🥶 Mode: *${mode}*
╰─────────────────╯

╭─[ ⏳ Waktu ]─╮  
│ Waktu: *${date} WIB*
│ Weton: *${weton}*
│ Lebaran: *${mundurLebaran} hari lagi*
│ Puasa: *${mundurPuasa} hari lagi*
│ Idul Adha: *${mundurIdulAdha} hari lagi*
│ Natal: *${mundurNatal} hari lagi*
╰────────────────╯   ${readmore}
`;

        const userInfoSection = `
╭─[ 👤 Info Pengguna ]─╮  
│ 🏷️ Nama: ${user.name}  
│ 📞 Nomor: @${user.number}  
│ 💵 Uang: ${money}
│ 🎚️ Limit: ${user.limit}  
│ 🏅 Status: ${user.status}  
│ 💏 Pasangan: ${jodoh}
╰──────────────────╯
`;

        if (text === "all") {
            await conn.delay(2000)
            const allCommands = getPluginsByTags();

            const commandsSection = `\n\n\n${allCommands}`;

            const caption = `${demonSlayerHeader}
${botInfoSection}
${userInfoSection}
${commandsSection}

${teksdx}`;

            await conn.sendClearTime(m.chat, {
                document: {
                    url: setting.website
                },
                mimetype: "application/msword",
                fileName: setting.namaowner + ' / ' + setting.namabot,
                fileLength: 10,
                pageCount: 10,
                contextInfo: {
                    mentionedJid: [...conn.parseMention(caption)],
                    isForwarded: true,
                    externalAdReply: {
                        mediaType: 1,
                        title: `© ${setting.namabot}\nDeveloper by:`,
                        body: `${developer.nama}`,
                        thumbnailUrl: pp,
                        sourceUrl: setting.website,
                        renderLargerThumbnail: false,
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: setting.idch,
                        serverMessageId: 103,
                        newsletterName: setting.namach
                    },
                },
                caption: Styles(caption),
            }, { quoted: m });
            conn.sendFile(m.chat, musik, 'tts.opus', true, m, true)
        } else if (text === "list") {
            const allTags = [];
            Object.keys(pckg.Package).forEach(name => {
                if (!pckg.Package[name].disabled && pckg.Package[name].tags) {
                    pckg.Package[name].tags.forEach(tag => {
                        if (tag && !allTags.includes(tag.toLowerCase())) {
                            allTags.push(tag.toLowerCase());
                        }
                    });
                }
            });

            // Format tags menu  
            const tagsList = allTags.map((tag, i) =>
                `│ .menu ${tag.charAt(0).toUpperCase() + tag.slice(1)}`
            ).join('\n');

            const defaultCommands = `

╭─────[ 🏷️ MENU TAGS ]────╮
${tagsList}
│
│ Ketik ${usedPrefix}menu <tag> untuk melihat
│ command dengan tag tertentu
│ Contoh: ${usedPrefix}menu download
╰──────────────────────╯`;

            const caption = `${demonSlayerHeader}

${botInfoSection}
${userInfoSection}
${defaultCommands}

${teksdx}`;

            await conn.sendClearTime(m.chat, {
                document: {
                    url: setting.website
                },
                mimetype: "application/msword",
                fileName: setting.namaowner + ' / ' + setting.namabot,
                fileLength: 10,
                pageCount: 10,
                contextInfo: {
                    mentionedJid: [...conn.parseMention(caption)],
                    isForwarded: true,
                    externalAdReply: {
                        mediaType: 1,
                        title: `© ${setting.namabot}\nDeveloper by:`,
                        body: `${developer.nama}`,
                        thumbnailUrl: pp,
                        sourceUrl: setting.website,
                        renderLargerThumbnail: false,
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: setting.idch,
                        serverMessageId: 103,
                        newsletterName: setting.namach
                    },
                },
                caption: Styles(caption),
            }, { quoted: m });
            conn.sendFile(m.chat, musik, 'tts.opus', true, m, true)
        } else if (text) {
            await conn.delay(2000)
            const tags = text.split(/[,\s]+/).filter(tag => tag.trim() !== '');
            const filteredCommands = getPluginsByTags(tags);
            

            const commandsSection = `
╭─[ 📜 ${tags.join(', ').toUpperCase()} ]─╮  
${filteredCommands}  
╰────────────────────────╯
`;

            const caption = `${demonSlayerHeader}
${botInfoSection}
${userInfoSection}
${commandsSection}

${teksdx}`;

            await conn.sendClearTime(m.chat, {
                document: {
                    url: setting.website
                },
                mimetype: "application/msword",
                fileName: setting.namaowner + ' / ' + setting.namabot,
                fileLength: 10,
                pageCount: 10,
                contextInfo: {
                    mentionedJid: [...conn.parseMention(caption)],
                    isForwarded: true,
                    externalAdReply: {
                        mediaType: 1,
                        title: `© ${setting.namabot}\nDeveloper by:`,
                        body: `${developer.nama}`,
                        thumbnailUrl: pp,
                        sourceUrl: setting.website,
                        renderLargerThumbnail: false,
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: setting.idch,
                        serverMessageId: 103,
                        newsletterName: setting.namach
                    },
                },
                caption: Styles(caption),
            }, { quoted: m });
            conn.sendFile(m.chat, musik, 'tts.opus', true, m, true)
        } else {
            const defaultCommands = `

╭──────[ 🏷️ MENU ]──────╮
│ Kalau Mau Ke Menu List Ke .menu list 
│ Ketik ${usedPrefix}menu <tag> untuk melihat
│ command dengan tag tertentu
│ Contoh: ${usedPrefix}menu download
╰────────────────────╯`;

            const caption = `${demonSlayerHeader}

${botInfoSection}
${userInfoSection}
${defaultCommands}

${teksdx}`;

            await conn.sendClearTime(m.chat, {
                document: {
                    url: setting.website
                },
                mimetype: "application/msword",
                fileName: setting.namaowner + ' / ' + setting.namabot,
                fileLength: 10,
                pageCount: 10,
                contextInfo: {
                    mentionedJid: [...conn.parseMention(caption)],
                    isForwarded: true,
                    externalAdReply: {
                        mediaType: 1,
                        title: `© ${setting.namabot}\nDeveloper by:`,
                        body: `${developer.nama}`,
                        thumbnailUrl: pp,
                        sourceUrl: setting.website,
                        renderLargerThumbnail: false,
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: setting.idch,
                        serverMessageId: 103,
                        newsletterName: setting.namach
                    },
                },
                caption: Styles(caption),
            }, { quoted: m });
            conn.sendFile(m.chat, musik, 'tts.opus', null, m, true)
        }
    }
};

function Styles(text, style = 1) {
    var xStr = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    var yStr = Object.freeze({
      1: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890",
    });
    var replacer = [];
    xStr.map((v, i) =>
      replacer.push({
        original: v,
        convert: yStr[style].split("")[i],
      }),
    );
    var str = text.toLowerCase().split("");
    var output = [];
    str.map((v) => {
      const find = replacer.find((x) => x.original == v);
      find ? output.push(find.convert) : output.push(v);
    });
    return output.join("");
}

module.exports = Rafiganteng;
