/* PLUGINS SENDQUOTE
   DIBUAT OLEH RAFI HACKERRRRRRRRR
   JANGAN DI HAPUS WM GW AWAS
   NOMOR DEV: 6282286315998
   FITURNYA ERROR??
      DI FIX SENDIRI LAA GAK USAH MANJA
         KALO GAK BISA YAA USAHA GBLOK
   SEKIAN DARI GW, SEKIAN DAN TERIMA GAJI:)
*/

async function handler(m) {
    if (!m.quoted) throw 'reply pesan!'
    await m.quoted.copyNForward(m.chat)
}
handler.command = /^q$/i
handler.owner = true
export default handler