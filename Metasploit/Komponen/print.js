let chalk = require('chalk')
let fs = require('fs')
const moment = require('moment-timezone')

module.exports = async function (m, conn = { user: {} }) {
  let d = new Date(new Date + 3600000)
  let date = d.toLocaleDateString('id', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  let info = "";
  info += chalk.green(`\n\n╭─ׅ──ֹ━━━ׅ━⁞ `) + chalk.cyan(`${setting.namabot}`) + chalk.green(` ⁞━ׅ━━━ֹ──ׅ─╮\n╠ `) + chalk.red(`   ${date}, ${wib}\n`)
  info += chalk.green('╠━ ') + chalk.cyan(`Nama Pengirim: ${m.pushName}\n`) + chalk.green('╠━ ') + chalk.cyan(`Pesan: ${m.text.startsWith(m.text) ? m.text : m.text}\n`);
  info += chalk.green('╠━ ') + chalk.cyan(`Pesan Dari: ${m.isGroup ? "Group Chat" : "Private Chat"}\n`);
  if (m.isGroup) {
   info += chalk.green('╠━ ') + chalk.cyan(`Nama Group: ${await conn.groupMetadata(m.chat).then(a => a.subject) || 'private'}\n`);
   info += chalk.green('╠━ ') + chalk.cyan(`Jenis Pesan: ${m.mtype}\n`);
   info += chalk.green('╠━ ') + chalk.cyan(`Nomor Pengirim: ${m.sender}\n`);
   info += chalk.green('╰────────────────────────────────╯')
  } else {
  info += chalk.green('╠━ ') + chalk.cyan(`Jenis Pesan: ${m.mtype}\n`);
    info += chalk.green('╠━ ') + chalk.cyan(`Nomor Pengirim: ${m.sender}\n`);
    info += chalk.green('╰────────────────────────────────╯')
  }
  console.log(info);
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'Komponen/print.js'"))
  delete require.cache[file]
  process.exit(0)
})