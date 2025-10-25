<div align="center">
  <h1>Metasploit-WaBot</h1>
  <p>
<a href="https://files.catbox.moe/xpm6r9.jpg">
<img src="https://files.catbox.moe/xpm6r9.jpg" alt="Metasploit-WaBot"/>
</a>
  </p>
  <p>Bot Whatsapp Yang Terintegrasi Sama Rangkaian metasploit framework, server kencang Dan Stabil.</p>
  <p>
    <a href="https://github.com/RafiBukanDeveloper/Metasploit-WaBot"><img alt="Stars" src="https://img.shields.io/github/stars/RafiBukanDeveloper/Metasploit-WaBot?style=flat&logo=github"></a>
    <a href="https://github.com/RafiBukanDeveloper/Metasploit-WaBot/network/members"><img alt="Forks" src="https://img.shields.io/github/forks/RafiBukanDeveloper/Metasploit-WaBot"></a>
    <a href="https://github.com/RafiBukanDeveloper/Metasploit-WaBot/issues"><img alt="Issues" src="https://img.shields.io/github/issues/RafiBukanDeveloper/Metasploit-WaBot"></a>
    <a href="https://github.com/RafiBukanDeveloper/Metasploit-WaBot"><img alt="Last Commit" src="https://img.shields.io/github/last-commit/RafiBukanDeveloper/Metasploit-WaBot"></a>
    <a href="https://github.com/RafiBukanDeveloper/Metasploit-WaBot"><img alt="Repo Size" src="https://img.shields.io/github/repo-size/RafiBukanDeveloper/Metasploit-WaBot"></a>
  </p>
  <p>
    <a href="https://github.com/RafiBukanDeveloper/Metasploit-WaBot/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-informational"></a>
    <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen">
    <a href="https://dsc.gg/natsumiworld"><img alt="Discord" src="https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white"></a>
  </p>
</div>

---

## Ikhtisar

Metasploit-WaBot adalah kerangka kerja bot WhatsApp ramping yang dibangun di atas Baileys. Letakkan berkas plugin di `Metasploit/Package` dan itu akan menjadi Perintah Buat Fitur Fitur Yang Ada Di Script

## Mengapa Metasploit-WaBot? 
- Menggunakan Baileys Resmi Dari Developer
- Desain yang mengutamakan plugin cjs dan esm
- Plugin Mencakup 2 Type cjs or esm
- Plugin Esm Format (.mjs)
- Plugin Cjs Format (.js)

## Mulai Cepat

```bash
git clone https://github.com/RafiBukanDeveloper/Metasploit-WaBot.git
cd Metasploit-WaBot
npm install
npm start
```

Edit Di Bagian File Ruang_Ganti-Ganti.js Sebelum Menjalankan Bot


## Struktur Project

```
Metasploit-WaBot/
├─ Metasploit/
│  ├─ Ruang_Ganti-Ganti.js
│  ├─ Ruang_Rahasia.js
│  ├─ Ruang_Mesin.js
│  ├─ Package/
│  ├─ Scraper/
│  ├─ src/
│  ├─ Cache/
│  │   ├─ Sampah/
│  │   ├─ database/
│  │   ├─ Sesi/
│  │   └─ Storage.json
│  │
│  └─ Komponen/
│      ├─ lowdb/
│      │    ├─ adapters/
│      │    │   ├─ JSONFile.js
│      │    │   ├─ JSONFileSync.js
│      │    │   ├─ LocalStorage.js 
│      │    │   ├─ Memory.js
│      │    │   ├─ MemorySync.js
│      │    │   ├─ TextFile.js
│      │    │   └─ TextFileSync.js
│      │    │
│      │    ├─ index.js
│      │    ├─ Low.js
│      │    ├─ LowSync.js
│      │    └─ MissingAdapterError.js
│      │    
│      ├─ cloudDBAdapter.json
│      ├─ color.js
│      ├─ converter.js
│      ├─ database.js
│      ├─ exif.js
│      ├─ Framework.js
│      ├─ function.js
│      ├─ levelling.js
│      ├─ logs.js
│      ├─ mongoDB.js
│      ├─ myfunc.js
│      ├─ Pengatur_Package.js 
│      ├─ Pengatur_Scraper.js 
│      ├─ print.js 
│      ├─ simple.js
│      ├─ sticker.js
│      ├─ store.js
│      ├─ uploader.js 
│      ├─ uploadFile.js
│      ├─ uploadImage.js
│      ├─ webp.js
│      ├─ webp2mp4.js
│      ├─ welcome.js
│      └─ y2mate.js
│  
├─ package.json
└─ README.md
```

## Membuat Plugin
    Plugin Di Metasploit-WaBot Ada 2 Type:
- Buat Plugin Esm `Metasploit/Package/Testing.mjs`:

```js
import os from "os";
import { performance } from "perf_hooks";

let RafiBukanDeveloper = async (m, { msg,match,usedPrefix,noPrefix,_args,args,command,text,conn: this,ctx,sock,client,participants,isDeveloper,groupMetadata,user,RafiTampilan,RafiMenu,bot,isROwner,isOwner,isRAdmin,isAdmin,isBotAdmin,isPrems,isBans,chatUpdate }) => {
m.reply('Hai Sayang Ini RafiBukanDeveloper')
}
RafiBukanDeveloper.tags = ['RafiBukanDeveloper']
RafiBukanDeveloper.help = ['test']
RafiBukanDeveloper.command = /^(test)$/i;

export default RafiBukanDeveloper
```



- Buat Plugin Cjs `Metasploit/Package/Testing.js`:

```js
const os = require("os");
const { performance } = require("perf_hooks");

let RafiBukanDeveloper = async (m, { msg,match,usedPrefix,noPrefix,_args,args,command,text,conn: this,ctx,sock,client,participants,isDeveloper,groupMetadata,user,RafiTampilan,RafiMenu,bot,isROwner,isOwner,isRAdmin,isAdmin,isBotAdmin,isPrems,isBans,chatUpdate }) => {
m.reply('Hai Sayang Ini RafiBukanDeveloper')
}
RafiBukanDeveloper.tags = ['RafiBukanDeveloper']
RafiBukanDeveloper.help = ['test']
RafiBukanDeveloper.command = /^(test)$/i;

module.exports = RafiBukanDeveloper
```

## Lisensi

MIT. See [LICENSE](./LICENSE).