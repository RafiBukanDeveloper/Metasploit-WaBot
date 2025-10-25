import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
    let owner = 'https://files.catbox.moe/gxw25w.mp3'
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/itl427.jpg')
        
await conn.sendFile(m.chat, owner, 'tts.opus', true, m, true)
}
handler.customPrefix = /^(anjay|anjayy|wanjay|wanjayy|enjay|enjayy|)$/i
handler.command = new RegExp
export default handler 
