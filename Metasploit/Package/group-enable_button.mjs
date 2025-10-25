import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let bot = global.db.data.settings[conn.user.jid] || {}
    let name = `${user.registered ? user.name : conn.getName(m.sender)}`
    let type = (args[0] || '').toLowerCase()
    let isAll = false,
    isUser = false
  
if (command == 'welcome') {
let rafiganteng = chat.welcome
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'delete') {
let rafiganteng = chat.delete
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antidelete') {
let rafiganteng = chat.delete
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antitagsw') {
let rafiganteng = chat.antitagsw
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinktiktok') {
let rafiganteng = chat.antilinkTiktok
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinkyt') {
let rafiganteng = chat.antilinkYt
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinktele') {
let rafiganteng = chat.antilinkTele
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinkfb') {
let rafiganteng = chat.antilinkFb
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinkig') {
let rafiganteng = chat.antilinkIg
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinkgroup') {
let rafiganteng = chat.antilinkGroup
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinkhttp') {
let rafiganteng = chat.antilinkHttp
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinkwa') {
let rafiganteng = chat.antilinkWa
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinkch') {
let rafiganteng = chat.antilinkCh
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'autoacc') {
let rafiganteng = chat.autoAcc
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'autoreact') {
let rafiganteng = chat.autoReact
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'autosticker') {
let rafiganteng = chat.autoSticker
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'autosholat') {
let rafiganteng = chat.autoSholat
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'autolevelup') {
let rafiganteng = chat.autolevelup
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'adminonly') {
let rafiganteng = chat.adminonly
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antispam') {
let rafiganteng = chat.antiSpam
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antibot') {
let rafiganteng = chat.antiBot
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'detect') {
let rafiganteng = chat.detect
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'delete') {
let rafiganteng = chat.delete
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antiviewonce') {
let rafiganteng = chat.viewonce
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'text') {
let rafiganteng = chat.teks
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinkkick') {
let rafiganteng = chat.antiLinkkick
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinkdelete') {
let rafiganteng = chat.antiLinkdelete
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antilinkwa') {
let rafiganteng = chat.antiLinkWa
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antiporn') {
let rafiganteng = chat.antiPorn
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antifoto') {
let rafiganteng = chat.antiFoto
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antiaudio') {
let rafiganteng = chat.antiAudio
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antiacara') {
let rafiganteng = chat.antiAcara
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antifile') {
let rafiganteng = chat.antiDoc
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antivideo') {
let rafiganteng = chat.antiVideo
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antipolling') {
let rafiganteng = chat.antiPolling
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'nsfw') {
let rafiganteng = chat.nsfw
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'rpg') {
let rafiganteng = chat.rpg
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'allfitur') {
let rafiganteng = chat.xmaze
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antivirtex') {
let rafiganteng = chat.antiVirtex
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'simi') {
let rafiganteng = chat.simi
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'composing') {
let rafiganteng = bot.composing
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

    if (command == 'recording') {
let rafiganteng = bot.recording
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antisticker') {
let rafiganteng = chat.antiSticker
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antibadword') {
let rafiganteng = chat.antiBadword
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'antitoxic') {
let rafiganteng = chat.antiToxic
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'restrict') {
let rafiganteng = chat.pembatasan
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'game') {
let rafiganteng = chat.game
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR ADMIN`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'anticall') {
let rafiganteng = bot.anticall
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}
if (command == 'antivirus') {
let rafiganteng = bot.antivirus
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'whitelistmycontacts') {
let rafiganteng = conn.callWhitelistMode
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'autobackup') {
let rafiganteng = bot.backup
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'autocleartmp') {
let rafiganteng = bot.cleartmp
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'autoresetlimit') {
let rafiganteng = bot.resetlimit
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'autoread') {
let rafiganteng = bot.autoread
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'pconly') {
let rafiganteng = global.opts['pconly']
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'gconly') {
let rafiganteng = global.opts['gconly']
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}

if (command == 'swonly') {
let rafiganteng = global.opts['swonly']
conn.sendMessage(m.chat, {
  text: `${command} sekarang Dalam Keadaan\n${rafiganteng ? '( HIDUP KETUA )' : '( MATI KETUA )'}`,
  footer: `FITUR OWNER`,
  buttons: [
  {
    buttonId: `.hidupkan ${command}`,
    buttonText: {
      displayText: `HIDUPKAN DEKSS`
    },
    type: 1,
  },
  {
    buttonId: `.matikan ${command}`,
    buttonText: {
      displayText: `MATIKAN DEKSS`
    },
    type: 1,
  }
  ],
  headerType: 1,
     viewOnce: true
 }, { quoted: m })
}
}
 handler.help = handler.command = ['welcome','autoreact','autosticker','antivirus','antiporn','autosholat','antitagsw','antispam','antidelete','delete','antibot','antilinkwa','antifoto','antiaudio','antiacara','antifile','antivideo','antipolling','nsfw','detect','autoresetlimit','rpg','composing','antisticker','antibadword','autocleartmp','antitoxic','game','anticall','pconly','gconly','antilinktiktok','antilinkyt','antilinktele','antilinkig','antilinkgroup','antilinkhttp','antilinkwa','antilinkch','antilinkfb']
handler.tags = ['adminowner']
handler.admin = true
export default handler