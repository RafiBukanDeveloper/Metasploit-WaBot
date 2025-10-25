/*Script By Rafi Developer
Nomor Developer: 6282286315998
Info Saluran Developer: https://whatsapp.com/channel/0029VbB8JFCJUM2cZIBfUm0K
Info Package: downloader-spotify.mjs
*/


import axios from 'axios';

const SEARCH_API = 'https://api.nekolabs.my.id/discovery/spotify/search?q=';
const DOWNLOAD_API = 'https://api.rikishop.my.id/download/spotify?url=';

let handler = async (m, {
    conn,
    text,
    usedPrefix,
    command
}) => {
    if (!text) {
        await conn.sendMessage(m.chat, {
            react: {
                text: "⛔️",
                key: m.key
            }
        });

        const fkontak = {
            key: {
                participant: '0@s.whatsapp.net',
                remoteJid: 'status@broadcast',
                fromMe: false,
                id: 'Halo'
            },
            message: {
                locationMessage: {
                    name: `🎵 Spotify Music Downloader`,
                    jpegThumbnail: ''
                }
            }
        };

        return conn.sendMessage(m.chat, {
            text: `🎯 *Cara Download Musik dari Spotify*\n━━━━━━━━━━━━━━━━\n\n${usedPrefix + command} *query_pencarian*\n\n📝 *Contoh:*\n${usedPrefix + command} Espresso\n${usedPrefix + command} Moonlight Sonata\n${usedPrefix + command} Levitating\n\n✨ *${setting.namabot} siap bantu kakak download musik favorit dari Spotify!*`
        }, {
            quoted: fkontak
        });
    }

    await conn.sendMessage(m.chat, {
        react: {
            text: "⏳",
            key: m.key
        }
    });

    try {
        await conn.sendMessage(m.chat, {
            text: `🔍 *${setting.namabot} sedang mencari lagu *${text}* di Spotify...*\n━━━━━━━━━━━━━━━━\n\n⏰ *Tunggu sebentar ya Kak, sedang proses pencarian...*`
        });

        const searchUrl = `${SEARCH_API}${encodeURIComponent(text)}`;
        const searchResponse = await axios.get(searchUrl);
        const searchData = searchResponse.data;

        if (!searchData.success || !searchData.result || searchData.result.length === 0) {
            await conn.sendMessage(m.chat, {
                react: {
                    text: "❌",
                    key: m.key
                }
            });

            return conn.sendMessage(m.chat, {
                text: `🔎 *Hasil Pencarian Tidak Ditemukan*\n╭━━━━━━━━━━━━━━━━●\n│ 🎵 *Query:* ${text}\n│ 📊 *Status:* Tidak ada hasil\n│ 💫 *Saran:* Coba kata kunci lain\n╰━━━━━━━━━━━━━━━━●\n\n✨ *Maaf Kak, ${setting.namabot} ga nemu lagu *${text}* di Spotify. Mungkin coba dengan judul yang berbeda?*`
            });
        }

        const track = searchData.result[0];

        const metadata = `🎵 *Metadata Spotify*\n╭━━━━━━━━━━━━━━━━●\n│ 📝 *Judul:* ${track.title}\n│ 👤 *Artist:* ${track.artist}\n│ ⏱️ *Durasi:* ${track.duration}\n│ 🔗 *URL:* ${track.url}\n╰━━━━━━━━━━━━━━━━●\n\n🔄 *${setting.namabot} sedang download musiknya...*`;

        await conn.sendMessage(m.chat, {
            image: {
                url: track.cover
            },
            caption: metadata
        });

        await conn.sendMessage(m.chat, {
            react: {
                text: "📥",
                key: m.key
            }
        });

        const downloadUrl = `${DOWNLOAD_API}${encodeURIComponent(track.url)}`;
        const downloadResponse = await axios.get(downloadUrl);
        const downloadData = downloadResponse.data;

        if (!downloadData.status || !downloadData.result?.res_data?.formats?.[0]?.url) {
            throw new Error('Download URL tidak tersedia');
        }

        const audioUrl = downloadData.result.res_data.formats[0].url;
        const audioInfo = downloadData.result.res_data;

        console.log('🔧 Audio Info:', {
            url: audioUrl,
            ext: downloadData.result.res_data.formats[0].ext,
            quality: downloadData.result.res_data.formats[0].quality
        });

        await conn.sendMessage(m.chat, {
            audio: {
                url: audioUrl
            },
            mimetype: 'audio/mpeg',
            ptt: false,
            fileName: `${track.title} - ${track.artist}.mp3`.substring(0, 100),
            contextInfo: {
                externalAdReply: {
                    title: track.title.substring(0, 40),
                    body: track.artist.substring(0, 30),
                    thumbnailUrl: track.cover,
                    mediaType: 2,
                    mediaUrl: track.url,
                    sourceUrl: track.url
                }
            }
        });

        const successCaption = `✨ *Download Spotify Berhasil!*\n╭━━━━━━━━━━━━━━━━●\n│ 🎵 *Judul:* ${track.title}\n│ 👤 *Artist:* ${track.artist}\n│ ⏱️ *Durasi:* ${track.duration}\n│ 📁 *Format:* MP3\n│ 💫 *Quality:* Audio Only\n╰━━━━━━━━━━━━━━━━●\n\n🎉 *Yeay! ${setting.namabot} berhasil download lagu untuk kakak!*\n\n💫 *Gimana Kak? Enak kan lagunya? Mau download lagu lain lagi?*`;

        await conn.sendMessage(m.chat, {
            text: successCaption
        });

        await conn.sendMessage(m.chat, {
            react: {
                text: "✨",
                key: m.key
            }
        });

    } catch (error) {
        await conn.sendMessage(m.chat, {
            react: {
                text: "❌",
                key: m.key
            }
        });

        console.error('Spotify Download Error:', error);

        const fkontak = {
            key: {
                participant: '0@s.whatsapp.net',
                remoteJid: 'status@broadcast',
                fromMe: false,
                id: 'Halo'
            },
            message: {
                locationMessage: {
                    name: `🚫 Error Spotify Downloader`,
                    jpegThumbnail: ''
                }
            }
        };

        let errorMessage = `🚫 *Kak! ${setting.namabot} Mendeteksi Error!*\n━━━━━━━━━━━━━━━━\n\n`;

        if (error.response?.status === 404) {
            errorMessage += `Lagu tidak ditemukan atau server sedang gangguan.`;
        } else if (error.message.includes('Download URL tidak tersedia')) {
            errorMessage += `Gagal mendapatkan link download untuk lagu ini.`;
        } else if (error.code === 'ENOTFOUND') {
            errorMessage += `Tidak dapat terhubung ke server API.`;
        } else {
            errorMessage += `Terjadi kesalahan: ${error.message}`;
        }

        errorMessage += `\n\n🔧 *Tips Troubleshooting:*\n• Coba dengan judul lagu yang berbeda\n• Pastikan koneksi internet stabil\n• Coba beberapa saat lagi\n• Gunakan judul lagu yang lebih spesifik\n\n✨ *Jangan menyerah ya Kak, coba lagi!*`;

        await conn.sendMessage(m.chat, {
            text: errorMessage
        }, {
            quoted: fkontak
        });
    }
};

handler.help = ['spotifyplay <query>'];
handler.tags = ['downloader'];
handler.command = /^(spplay|spotifyplay|playspotify|spotify-play|play-spotify)$/i;
handler.limit = true;
handler.register = true;

export default handler;