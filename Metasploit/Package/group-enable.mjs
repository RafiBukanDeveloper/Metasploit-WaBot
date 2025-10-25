import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, isDeveloper, RafiTampilan }) => {
    let isEnable = /hidupkan|1/i.test(command)
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let bot = global.db.data.settings[conn.user.jid] || {}
    let name = `${user.registered ? user.name : conn.getName(m.sender)}`
    let type = (args[0] || '').toLowerCase()
    let isAll = false,
    isUser = false
    let caption = `
╭━━━━°「 A D M I N  F I T U R 」°
┃• *• antilinktiktok* ${chat.antilinkTiktok ? '( Hidup )' : '( Mati )'}
┃• *• antilinkyt* ${chat.antilinkYt ? '( Hidup )' : '( Mati )'}
┃• *• antilinktele* ${chat.antilinkTele ? '( Hidup )' : '( Mati )'}
┃• *• antilinkfb* ${chat.antilinkFb ? '( Hidup )' : '( Mati )'}
┃• *• antilinkig* ${chat.antilinkIg ? '( Hidup )' : '( Mati )'}
┃• *• antilinkgroup* ${chat.antilinkGroup ? '( Hidup )' : '( Mati )'}
┃• *• antilinkhttp* ${chat.antilinkHttp ? '( Hidup )' : '( Mati )'}
┃• *• delete* ${chat.delete ? '( Hidup )' : '( Mati )'}
┃• *• antidelete* ${chat.delete ? '( Hidup )' : '( Mati )'}
┃• *• antilinkwa* ${chat.antilinkWa ? '( Hidup )' : '( Mati )'}
┃• *• antilinkch* ${chat.antilinkCh ? '( Hidup )' : '( Mati )'}
┃• *• antiporn* ${chat.antiPorn ? '( Hidup )' : '( Mati )'}
┃• *• antiacara* ${chat.antiAcara ? '( Hidup )' : '( Mati )'}
┃• *• antifile* ${chat.antiDoc ? '( Hidup )' : '( Mati )'}
┃• *• antitagsw* ${chat.antitagsw ? '( Hidup )' : '( Mati )'}
┃• *• antiaudio* ${chat.antiAudio ? '( Hidup )' : '( Mati )'}
┃• *• antifoto* ${chat.antiFoto ?  '( Hidup )' : '( Mati )'}
┃• *• antipolling* ${chat.antiPolling ? '( Hidup )' : '( Mati )'}
┃• *• antivideo* ${chat.antiVideo ? '( Hidup )' : '( Mati )'}
┃• *• antitoxic* ${chat.antiToxic ? '( Hidup )' : '( Mati )'}
┃• *• antibadword* ${chat.antiBadword ? '( Hidup )' : '( Mati )'}
┃• *• antisticker* ${chat.antiSticker ? '( Hidup )' : '( Mati )'}
┃• *• antibot* ${chat.antiBot ? '( Hidup )' : '( Mati )'}
┃• *• game* ${chat.game ? '( Hidup )' : '( Mati )'}  
┃• *• rpg* ${chat.rpg ? '( Hidup )' : '( Mati )'}
┃• *• nsfw* ${chat.nsfw ? '( Hidup )' : '( Mati )'}
┃• *• welcome* ${chat.welcome ? '( Hidup )' : '( Mati )'}
╰═┅═━––––––๑

╭━━━━°「 O W N E R  F I T U R 」°
┊• *• autobackup* ${bot.backup ? '( Hidup )' : '( Mati )'}
┊• *• antivirus* ${bot.antivirus ? '( Hidup )' : '( Mati )'}
┊• *• autosholat* ${chat.autoSholat ? '( Hidup )' : '( Mati )'} 
┊• *• autoreact* ${chat.autoReact ? '( Hidup )' : '( Mati )'} 
┊• *• autosticker* ${chat.autoSticker ? '( Hidup )' : '( Mati )'} 
┊• *• antispam* ${chat.antiSpam ? '( Hidup )' : '( Mati )'}
┃• *• autocleartmp* ${bot.cleartmp ? '( Hidup )' : '( Mati )'}
┃• *• autoresetlimit* ${bot.resetlimit ? '( Hidup )' : '( Mati )'}
┃• *• autoread* ${bot.autoread ? '( Hidup )' : '( Mati )'}
┃• *• composing* ${bot.composing ? '( Hidup )' : '( Mati )'}
┃• *• gconly* ${opts.gconly ? '( Hidup )' : '( Mati )'}
┃• *• pconly* ${opts.pconly ? '( Hidup )' : '( Mati )'}
┃• *• public* ${!opts.self ? '( Hidup )' : '( Mati )'}
┃• *• self* ${opts.self ? '( Hidup )' : '( Mati )'}
┃• *• anticall* ${bot.anticall ? '( Hidup )' : '( Mati )'}
╰═┅═━––––––๑
*Contoh Penggunaan* :
.hidupkan welcome <untuk mengaktifkan>
.matikan welcome <untuk menonaktifkan>

Developer By: @${global.developer.nomor}
`.trim()
    switch (type) {
        case 'antilinktiktok':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antilinkTiktok = isEnable
            break
        case 'antilinkyt':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antilinkYt = isEnable
            break
        case 'antilinktele':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antilinkTele = isEnable
            break
        case 'antilinkfb':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antilinkFb = isEnable
            break
         case 'antilinkig':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antilinkIg = isEnable
            break
            case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
        case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
        case 'antilinkgroup':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antilinkGroup = isEnable
            break
        case 'antilinkhttp':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antilinkHttp = isEnable
            break
        case 'antilinkwa':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antilinkWa = isEnable
            break
        case 'antilinkch':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antilinkCh = isEnable
            break
        case 'welcome':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.welcome = isEnable
            break
            case 'autoreact':
                isAll = true
                if (!(isOwner || isDeveloper)) {
                    global.dfail('owner', m, conn)
                    throw false
            }
            chat.autoReact = isEnable
            break
            case 'autosticker':
               isAll = true
                if (!(isOwner || isDeveloper)) {
                    global.dfail('owner', m, conn)
                    throw false
            }
            chat.autoSticker = isEnable
            break
            case 'autosholat':
                isAll = true
                if (!(isOwner || isDeveloper)) {
                    global.dfail('owner', m, conn)
                    throw false
            }
            chat.autoSholat = isEnable
            break
            case 'antitagsw':
                if (!(isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
            }
            chat.antitagsw = isEnable
            break
        case 'autolevelup':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.autolevelup = isEnable
            break
        case 'adminonly':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.adminonly = isEnable
            case 'antispam':
            if (!(isOwner || isDeveloper)) {
                global.dfail('owner', m, conn)
                throw false
            }
            chat.antiSpam = isEnable
            break
        case 'antibot':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiBot = isEnable
            break
        case 'detect':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.detect = isEnable
            break
        case 'antiviewonce':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.viewonce = isEnable
            break
        case 'text':
            isAll = true
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.teks = isEnable
            break
        case 'public':
        case 'self':
            isAll = true
            if (!isROwner) {
                global.dfail('rowner', m, conn)
                throw false
            }
            global.opts['self'] = !isEnable
            break
        case 'antiporn':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiPorn = isEnable
            break
        case 'antifoto':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiFoto = isEnable
            break
        case 'antiaudio':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiAudio = isEnable
            break
        case 'antiacara':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiAcara = isEnable
            break
        case 'antifile':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiDoc = isEnable
            break
        case 'antivideo':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiVideo = isEnable
            break
        case 'antipolling':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiPolling = isEnable
            break
        case 'nsfw':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.nsfw = isEnable
            break
        case 'rpg':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.rpg = isEnable
            break
        case 'allfitur':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.xmaze = isEnable
            break
        case 'antivirtex':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiVirtex = isEnable
            break
        case 'simi':
            if (!(isAdmin || isOwner || isDeveloper)) {
                global.dfail('admin', m, conn)
                throw false
            }
            chat.simi = isEnable
            break
        case 'composing':
            isAll = true
            if (!(isOwner || isDeveloper)) {
                global.dfail('rowner', m, conn)
                throw false
            }
            bot.composing = isEnable
            case 'recording':
            isAll = true
            if (!(isOwner || isDeveloper)) {
                global.dfail('rowner', m, conn)
                throw false
            }
            bot.recording = isEnable
            break
        case 'antisticker':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiSticker = isEnable
            break
        case 'antibadword':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiBadword = isEnable
            break
        case 'antitoxic':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.antiToxic = isEnable
            break
        case 'restrict':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.pembatasan = isEnable
            break
        case 'game':
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            chat.game = isEnable
            break
        case 'anticall':
            isAll = true
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            bot.anticall = isEnable
            break
            case 'antivirus':
            isAll = true
            if (m.isGroup) {
                if (!(isAdmin || isOwner || isDeveloper)) {
                    global.dfail('admin', m, conn)
                    throw false
                }
            }
            bot.antivirus = isEnable
            break
        case 'whitelistmycontacts':
            if (!(isOwner || isDeveloper)) {
                global.dfail('owner', m, conn)
                throw false
            }
            conn.callWhitelistMode = isEnable
            break
        case 'autobackup':
            isAll = true
            if (!(isOwner || isDeveloper)) {
                global.dfail('owner', m, conn)
                throw false
            }
            bot.backup = isEnable
            break
        case 'autocleartmp':
            isAll = true
            if (!(isOwner || isDeveloper)) {
                global.dfail('owner', m, conn)
                throw false
            }
            bot.cleartmp = isEnable
            break
        case 'autoresetlimit':
            isAll = true
            if (!(isOwner || isDeveloper)) {
                global.dfail('owner', m, conn)
                throw false
            }
            bot.resetlimit = isEnable
            break
        case 'autoread':
            isAll = true
            if (!(isOwner || isDeveloper)) {
                global.dfail('rowner', m, conn)
                throw false
            }
            bot.autoread = isEnable
            break
        case 'pconly':
            isAll = true
            if (!(isOwner || isDeveloper)) {
                global.dfail('rowner', m, conn)
                throw false
            }
            global.opts['pconly'] = isEnable
            break
        case 'gconly':
            isAll = true
            if (!(isOwner || isDeveloper)) {
                global.dfail('rowner', m, conn)
                throw false
            }
            global.opts['gconly'] = isEnable
            break
        case 'swonly':
            isAll = true
            if (!(isOwner || isDeveloper)) {
                global.dfail('rowner', m, conn)
                throw false
            }
            global.opts['swonly'] = isEnable
            break
        default:
            return RafiTampilan(caption)
    }
    await conn.sendMessage(m.chat, {
            text: `${type} berhasil ${isEnable ? 'dinyalakan': 'dimatikan'} untuk ${isAll ? 'bot ini': 'chat ini'} !`,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.idch,
                   serverMessageId: null,
                   newsletterName: global.namach,
                   },
                   externalAdReply: {
                   title: `${wish()} kak ${conn.getName(m.sender)}`,
                   body: `AKSES DI TERIMA`,
                   thumbnailUrl: global.setting.tampilan,
                   sourceUrl: '',
                   mediaType: 1,
                   renderLargerThumbnail: false
                   },
                },
            }, { quoted: m })
}
handler.help = ['matikan']
handler.tags = ['group']
handler.command = /^(hidupkan|matikan)$/i

export default handler

function wish() {
    let wishloc = ''
    const time = moment.tz('Asia/Jakarta').format('HH')
    wishloc = ('Selamat Menjelang Pagi')
    if (time >= 0) {
        wishloc = ('Selamat Malam')
    }
    if (time >= 4) {
        wishloc = ('Selamat Pagi')
    }
    if (time >= 11) {
        wishloc = ('Selamat Siang')
    }
    if (time >= 15) {
        wishloc = ('️Selamat Sore')
    }
    if (time >= 18) {
        wishloc = ('Selamat Malam')
    }
    if (time >= 23) {
        wishloc = ('Selamat Malam')
    }
    return wishloc
}