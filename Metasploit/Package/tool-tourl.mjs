/*Script By Rafi Developer
Nomor Developer: 6282286315998
Info Saluran Developer: undefined
Info Package: tool-tourl.mjs
*/


import uploadFile from "../Komponen/uploadFile.js";
import uploadImage from "../Komponen/uploadImage.js";
let handler = async (m, {
    conn
}) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    if (!mime) {
        throw "Tidak ada media yang ditemukan";
    }
    let buffer = await q.download();
    let type = /image\/(png|jpe?g|gif)|video\/mp4\/mp3/.test(mime);
    let sesi = await (uploadImage ? uploadImage : uploadFile)(buffer);
    let hasil = "\n" + sesi + "\n" + buffer.length + " Byte(s)\n" + (type ? "(Tidak Ada Tanggal Kedaluwarsa)" : "(Tidak diketahui)") + "\n";
    m.reply(hasil)
};
handler.help = ["tourl <reply image/video>"];
handler.tags = ["tools"];
handler.command = /^(tourl)$/i;
export default handler;