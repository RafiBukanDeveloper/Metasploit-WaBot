/*Script By Rafi Developer
Nomor Developer: 6282286315998
Info Saluran Developer: https://whatsapp.com/channel/0029VbB8JFCJUM2cZIBfUm0K
Info Package: owner-enchard.mjs
*/


import JsConfuser from 'js-confuser'
import fs from "fs"

let handler = async (m, {
    conn,
}) => {
    if (!m.quoted) return m.reply("dengan reply file .js")
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (mime !== "application/javascript") return m.reply("dengan reply file .js")
    let media = await m.quoted.download()
    let filename = q.fileName || 'file'
    await fs.writeFileSync(`./Metasploit/Cache/Sampah/${filename}`, media)
    await m.reply("Memproses encrypt code . . .")
    await JsConfuser.obfuscate(await fs.readFileSync(`./Metasploit/Cache/Sampah/${filename}`).toString(), {
        target: "node",
        preset: "high",
        calculator: true,
        compact: true,
        hexadecimalNumbers: true,
        controlFlowFlattening: 0.75,
        deadCode: 0.2,
        dispatcher: true,
        duplicateLiteralsRemoval: 0.75,
        flatten: true,
        globalConcealing: true,
        identifierGenerator: "randomized",
        minify: true,
        movedDeclarations: true,
        objectExtraction: true,
        opaquePredicates: 0.75,
        renameVariables: true,
        renameGlobals: true,
        shuffle: {
            hash: 0.5,
            true: 0.5
        },
        stack: true,
        stringConcealing: true,
        stringCompression: true,
        stringEncoding: true,
        stringSplitting: 0.75,
        rgf: false
    }).then(async (obfuscated) => {
        await fs.writeFileSync(`./Metasploit/Cache/Sampah/${filename}`, obfuscated)
        await conn.sendMessage(m.chat, {
            document: fs.readFileSync(`./Metasploit/Cache/Sampah/${filename}`),
            mimetype: "application/javascript",
            fileName: filename,
            caption: "Encrypt file sukses ✅"
        }, {
            quoted: m
        })
    }).catch(e => m.reply("Error :" + e))
}
handler.tag = ["tools", "premium"]
handler.help = handler.command = ["enchard", "encrypthard"]
handler.owner = true
export default handler