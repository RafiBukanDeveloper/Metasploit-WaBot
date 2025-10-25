let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/video/g.test(mime)) {
		let media = await q.download?.()
		conn.sendMessage(setting.nomorowner + '@s.whatsapp.net', { video: media, caption: '' }, { quoted: m })
	} else if (/image/g.test(mime)) {
		let media = await q.download?.()
		conn.sendMessage(setting.nomorowner + '@s.whatsapp.net', { image: media, caption: '' }, { quoted: m })
    } else if (/audio/g.test(mime)) {
		let media = await q.download?.()
		conn.sendMessage(setting.nomorowner + '@s.whatsapp.net', { audio: media, mimetype: 'audio/mpeg' }, { quoted: m });
	}
}
handler.command = /^(kirimowner|culik|culikmedia|ckm)$/i
handler.owner = true
export default handler