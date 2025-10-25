/*Script By Rafi Developer
Nomor Developer: 6282286315998
Info Saluran Developer: https://whatsapp.com/channel/0029VbB8JFCJUM2cZIBfUm0K
Info Package: sticker-brat.js
*/


import axios from 'axios';
import {
    Sticker
} from 'wa-sticker-formatter';

let handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    if (!text) throw `Gunakan perintah ini dengan format: ${usedPrefix + command} <teks>`;

    try {
        conn.sendMessage(m.chat, {
            react: {
                text: '⏳',
                key: m.key
            }
        });
        const url = `https://www.sankavolereii.my.id/imagecreator/brat?apikey=planaai&text=${encodeURIComponent(text)}`;

        const response = await axios.get(url, {
            responseType: 'arraybuffer'
        });

        const sticker = new Sticker(response.data, {
            pack: global.stickpack,
            author: global.stickauth,
            type: 'image/png',
        });

        const stikerBuffer = await sticker.toBuffer();
        await conn.sendMessage(m.chat, {
            sticker: stikerBuffer
        }, {
            quoted: m
        });

    } catch (error) {
        await conn.sendMessage(m.chat, {
            react: {
                text: '❌',
                key: m.key
            }
        })
        console.error('Error:', error);
        await conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.', m);
    } finally {
        await conn.sendMessage(m.chat, {
            react: {
                text: '✅',
                key: m.key
            }
        })
    }
};

handler.help = ['brat'];
handler.tags = ['sticker'];
handler.command = ['brat', 'bret', 'brot', 'bratbrot', 'brit', 'bretbrot', 'bratbret']

export default handler 