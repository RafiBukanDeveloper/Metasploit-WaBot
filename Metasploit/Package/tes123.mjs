let handler = async (m, { conn, text}) => {
let anu =`*Eh ${global.setting.namabot} Di Sini Kakak, Cieeee Kakak Kangen Ama ${global.setting.namabot} Yaaaa*

Pencet Tombol Di Bawah Ini`
conn.sendMessage(m.chat, {
  image: { url: global.setting.tampilan },
  caption: anu, 
  footer: `${global.setting.namaowner}`,
  buttons: [
  {
    buttonId: '.menu all',
    buttonText: {
      displayText: 'Semua Menu'
    },
    type: 1,
  },
  {
    buttonId: '.owner',
    buttonText: {
      displayText: 'Owner Bot'
    },
    type: 1,
  },
  {
    buttonId: '.developer',
    buttonText: {
      displayText: 'Developer Bot'
    },
    type: 1,
  }
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });
}
handler.customPrefix = /^(tes|bot|test)$/i
handler.command = new RegExp
export default handler
