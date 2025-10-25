const fs = require("node:fs");
const beautify = require('js-beautify');

let Rafiganteng = async (m, { conn, text }) => {
        let src = pckg.Package;
        if (!text) return m.reply(`🔥 乂 Cara Penggunaan 乂 🔥
\`--get\` ➠ Ambil Package
\`--add\` ➠ Tambah Package
\`--delete\` ➠ Hapus Package

⚡ List Package Tersedia ⚡:
${Object.keys(src)
  .map((a, i) => `${i + 1}. ${a.split("Package/")[1]} ${i % 2 === 0 ? "" : ""}`)
  .join("\n")}`);

        if (text.includes("--get")) {
            let input = text.replace("--get", "").trim();
            if (!isNaN(input)) {
                let list = Object.keys(src).map((a) => a.split("Package/")[1]);
                let file = pckg.directory + "/" + list[parseInt(input) - 1];
                try {
                    m.reply(fs.readFileSync(beautify(file.trim()).toString()));
                } catch (e) {
                    m.reply(`[❗] *PERINGATAN*\nPackage ${file} tidak ditemukan!`);
                }
            } else {
                try {
                    let file = pckg.directory + "/" + input;
                    m.reply(fs.readFileSync(file.trim()).toString());
                } catch (e) {
                    m.reply(`[❗] *PERINGATAN*\nPackage ${input} Menghilang Entah Kemana`);
                }
            }
        } else if (text.includes("--add")) {
            if (!m.quoted) throw "[❗] *PERINGATAN*\nReply Package Yang Mau Disimpan!";
            let input = text.replace("--add", "").trim();
            try {
                let file = pckg.directory + "/" + input;
                fs.writeFileSync(file.trim(), `/*Script By ${global.developer.nama}\nNomor Developer: ${global.developer.nomor}\nInfo Saluran Developer: ${global.developer.saluran}\nInfo Package: ${input}\n*/\n\n
${beautify(m.quoted.text)}`);
                m.reply(`[❗] *PERINGATAN*\nBerhasil menyimpan Package: ${input}`);
            } catch (e) {
                m.reply(`[❗] *PERINGATAN*\nGagal menyimpan Package!`);
            }
        } else if (text.includes("--delete")) {
            let input = text.replace("--delete", "").trim();
            if (!isNaN(input)) {
                let list = Object.keys(src).map((a) => a.split("Package/")[1]);
                let file = pckg.directory + "/" + list[parseInt(input) - 1];
                try {
                    fs.unlinkSync(file.trim());
                    m.reply(`[❗] *PERINGATAN*\nPackage Berhasil dihapus!`);
                } catch (e) {
                    m.reply(`[❗] *PERINGATAN*\nPackage ${file} Tidak Ditemukan`);
                }
            } else {
                try {
                    let file = pckg.directory + "/" + input;
                    fs.unlinkSync(file.trim());
                    m.reply(`[❗] *PERINGATAN*\nPackage ${input} Hilang Entah Kemana`);
                } catch (e) {
                    m.reply(`[❗] *PERINGATAN*\nGagal menghapus Package`);
                }
            }
        }
};

Rafiganteng.help = ["packages", "package"].map(v => v + " *[ Untuk Mengelola File Package ]* ");
Rafiganteng.tags = ["owner"];
Rafiganteng.command = ["packages", "package", "pckg"];
Rafiganteng.rowner = true;


module.exports = Rafiganteng;
