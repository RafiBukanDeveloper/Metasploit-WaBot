/*Script By Rafi Developer
Nomor Developer: 6282286315998
Info Saluran Developer: undefined
Info Package: downloader-tiktok.mjs
*/


import axios from 'axios';

let handler = async (m, {
    conn,
    args
}) => {
    if (!args[0]) return m.reply('Mana Link Tiktok Nya')

    let url = args[0];
    if (!url.match(/tiktok\.com/)) return m.reply('Link Mya Yang Valid Lah')

    try {
        await conn.sendMessage(m.chat, {
            react: {
                text: '🕐',
                key: m.key
            }
        })
        let {
            data
        } = await axios.post('https://downloader.bot/api/tiktok/info', {
            url
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let result = data.data;
        await conn.sendMessage(m.chat, {
            video: {
                url: result.mp4
            },
            caption: '',
            viewOnce: true
        }, {
            quoted: m
        });

        await conn.sendFile(m.chat, result.mp3, 'tts.opus', null, m, true)

    } catch (e) {
        await conn.sendMessage(m.chat, {
            react: {
                text: '❌',
                key: m.key
            }
        })
        m.reply(`${e.message}`);
    } finally {
        await conn.sendMessage(m.chat, {
            react: {
                text: '✅',
                key: m.key
            }
        })
    }
};

handler.help = ['tiktok'];
handler.command = ['tiktok', 'tt', 'ttd'];
handler.tags = ['downloader'];
handler.limit = 5
export default handler;