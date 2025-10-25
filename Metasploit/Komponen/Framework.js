const simple = require('./simple')
const util = require('util')
const {
    color
} = require('./color')
const moment = require("moment-timezone")
const fetch = require("node-fetch")
const axios = require("axios");
const fs = require("node:fs");
const js = require('js-beautify');

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
    async handler(chatUpdate) {
        // Add the requested check at the very beginning
        if (global.conn && global.conn.user && global.conn.user.jid != conn.user.jid) return;

        if (global.db.data == null) await loadDatabase()
        this.msgqueque = this.msgqueque || []
        if (!chatUpdate) return
        const userId = chatUpdate.messages[0].key.id;
        global.block_message = new Set();
        let m = chatUpdate.messages[chatUpdate.messages.length - 1]
        global.settings = global.db.data.settings
        global.fkontak = global.fkontak
        global.ctx = global.sock = global.client = conn
        if (!m) return

        try {
            m = simple.smsg(this, m) || m
            if (!m) return
            m.exp = 0
            m.limit = false

            try {
                let user = global.db.data.users[m.sender]
                if (typeof user !== 'object') global.db.data.users[m.sender] = {}
                if (user) {
                    if (!('limit' in user)) user.limit = 100
                    if (!('exp' in user)) user.exp = 100
                    if (!('ojekk' in user)) user.ojekk = 0
                    if (!('warn' in user)) user.warn = 0
                    if (!('lastngewe' in user)) user.lastngewe = 0
                    if (!('afkReason' in user)) user.afk = -1
                    if (!('money' in user)) user.money = 10000
                    if (!('afk' in user)) user.afkReason = ""
                } else global.db.data.users[m.sender] = {
                    limit: 100,
                    exp: 100,
                    ojekk: 0,
                    warn: 0,
                    lastngewe: 0,
                    afk: -1,
                    money: 10000,
                    afkReason: ""
                }

                let chat = global.db.data.chats[m.chat]
                if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
                if (chat) {
                if (!('antiAudio' in chat)) chat.antiAudio = false
                    if (!('antiAcara' in chat)) chat.antiAcara = false
                    if (!('antiDoc' in chat)) chat.antiDoc = false
                    if (!('pembatasan' in chat)) chat.pembatasan = false
                    if (!('antiSticker' in chat)) chat.antiSticker = false
                    if (!('antiFoto' in chat)) chat.antiFoto = false
                    if (!('antiPolling' in chat)) chat.antiPolling = false
                    if (!('antiVideo' in chat)) chat.antiVideo = false
                    if (!('antiPorn' in chat)) chat.antiPorn = false
                    if (!('viewonce' in chat)) chat.viewonce = false
                    if (!('antiVirtex' in chat)) chat.antiVirtex = false
                    if (!('antiToxic' in chat)) chat.antiToxic = false
                    if (!('antiBadword' in chat)) chat.antiBadword = false
                    if (!('simi' in chat)) chat.simi = false
                    if (!('nsfw' in chat)) chat.nsfw = false
                    if (!('rpg' in chat)) chat.rpg = false
                    if (!('game' in chat)) chat.game = false
                    if (!('teks' in chat)) chat.teks = false
                    if (!('isBanned' in chat)) chat.isBanned = false
                    if (!('welcome' in chat)) chat.welcome = false
                    if (!('autoread' in chat)) chat.autoread = false
                    if (!('detect' in chat)) chat.detect = false
                    if (!('sWelcome' in chat)) chat.sWelcome = 'Selamat datang @user!'
                    if (!('sBye' in chat)) chat.sBye = ''
                    if (!('sPromote' in chat)) chat.sPromote = '@user telah di promote'
                    if (!('sDemote' in chat)) chat.sDemote = '@user telah di demote'
                    if (!('delete' in chat)) chat.delete = true
                    if (!('blacklist' in chat)) chat.blacklist = []
                    if (!('tagsw' in chat)) chat.tagsw = {
                        delete: false,
                        kick: false
                    }
                    if (!('antiVirtex' in chat)) chat.antiVirtex = false
                    if (!('antiLink' in chat)) chat.antiLink = false
                    if (!('mute' in chat)) chat.mute = false
                    if (!('badword' in chat)) chat.badword = false
                    if (!('antiSpam' in chat)) chat.antiSpam = false
                    if (!('freply' in chat)) chat.freply = false
                    if (!('antiSticker' in chat)) chat.antiSticker = false
                    if (!('stiker' in chat)) chat.stiker = false
                    if (!('viewonce' in chat)) chat.viewonce = false
                    if (!('antilinkTiktok' in chat)) chat.antilinkTiktok = false
                    if (!('antilinkYt' in chat)) chat.antilinkYt = false
                    if (!('antilinkTele' in chat)) chat.antilinkTele = false
                    if (!('antilinkFb' in chat)) chat.antilinkFb = false
                    if (!('antilinkIg' in chat)) chat.antilinkIg = false
                    if (!('antilinkGroup' in chat)) chat.antilinkGroup = false
                    if (!('antilinkHttp' in chat)) chat.antilinkHttp = false
                    if (!('antilinkWa' in chat)) chat.antilinkWa = false
                    if (!('antilinkCh' in chat)) chat.antilinkCh = false
                    if (!('useDocument' in chat)) chat.useDocument = false
                    if (!('antiToxic' in chat)) chat.antiToxic = false
                    if (!isNumber(chat.expired)) chat.expired = 0
                } else global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: false,
                    autoread: false,
                    blacklist: [],
                    tagsw: {
                        delete: false,
                        kick: false
                    },
                    detect: false,
                    antiAudio: false,
                    antiAcara: false,
                    antiDoc: false,
                    pembatasan: false,
                    antiSticker: false,
                    antiFoto: false,
                    antiPolling: false,
                    antiVideo: false,
                    antiPorn: false,
                    viewonce: false,
                    antiVirtex: false,
                    antiToxic: false,
                    antiBadword: false,
                    simi: false,
                    nsfw: false,
                    rpg: false,
                    game: false,
                    teks: true,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '@user telah di promote!',
                    sDemote: '@user telah di demote',
                    delete: true,
                    antiLink: false,
                    mute: false,
                    stiker: false,
                    antiSticker: false,
                    antiSpam: false,
                    freply: false,
                    viewonce: false,
                    antilinkTiktok: false,
                    antilinkYt: false,
                    antilinkTele: false,
                    antilinkFb: false,
                    antilinkIg: false,
                    antilinkGroup: false,
                    antilinkHttp: false,
                    antilinkWa: false,
                    antilinkCh: false,
                    useDocument: false,
                    antiToxic: false,
                    expired: 0
                }

                let settings = global.db.data.settings[this.user.jid]
                if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
                if (settings) {
                    if (!('self' in settings)) settings.self = false
                    if (!('resetlimit' in settings)) settings.resetlimit = moment.tz("Asia/Jakarta").format("HH:mm")
                    if (!('autoread' in settings)) settings.autoread = false
                    if (!('restrict' in settings)) settings.restrict = false
                    if (!('onlygrup' in settings)) settings.onlygrup = false
                    if (!('autorestart' in settings)) settings.autorestart = true
                    if (!('restartDB' in settings)) settings.restartDB = 0
                    if (!isNumber(settings.status)) settings.status = 0
                    if (!('anticall' in settings)) settings.anticall = true
                    if (!('clear' in settings)) settings.clear = true
                    if (!isNumber(settings.clearTime)) settings.clearTime = 0
                    if (!('freply' in settings)) settings.freply = true
                } else global.db.data.settings[this.user.jid] = {
                    self: false,
                    autoread: false,
                    resetlimit: moment.tz("Asia/Jakarta").format("HH:mm"),
                    restrict: false,
                    onlygrup: false,
                    autorestart: true,
                    restartDB: 0,
                    status: 0,
                    anticall: true,
                    clear: true,
                    clearTime: 0,
                    freply: true
                }
            } catch (e) {
                console.error(e)
            }

/*===============================*/

//         BAGIAN FUNCTION
//                 BY
//           RAFI HACKER

/*===============================*/
async function getLidFromJid(id, conn) {
                if (id.endsWith('@lid')) return id
                const res = await conn.onWhatsApp(id).catch(() => [])
                return res[0]?.lid || id
            }

function isUrl(url) {
    let urlRegex = /(https?:\/\/[^\s]+)/g;
    let result = url.match(urlRegex);
    return result;
  }

function texted(type, text) {
    switch (type) {
      case "bold":
        return "*" + text + "*";
      case "italic":
        return "_" + text + "_";
      case "monospace":
        return "```" + text + "```";
    }
  }

function beautify(text) {
    return js(text)
  }
  
function example(isPrefix, command, args) {
    return `• ${this.texted("bold", "Example")} : ${isPrefix + command} ${args}`;
  }

function toTime(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
  }

function readTime(ms) {
    const days = Math.floor(ms / (24 * 60 * 60 * 1000));
    const daysms = ms % (24 * 60 * 60 * 1000);
    const hours = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = ms % (60 * 60 * 1000);
    const minutes = Math.floor(hoursms / (60 * 1000));
    const minutesms = ms % (60 * 1000);
    const sec = Math.floor(minutesms / 1000);
    const format = [days, hours, minutes, sec].map((v) =>
      v.toString().padStart(2, 0),
    );
    return {
      days: Number(format[0]),
      hours: Number(format[1]),
      minutes: Number(format[2]),
      seconds: Number(format[3]),
    };
  }

function random(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function formatter(integer) {
    let numb = parseInt(integer);
    return Number(numb).toLocaleString().replace(/,/g, ".");
  }

function formatNumber(integer) {
    let numb = parseInt(integer);
    return Number(numb).toLocaleString().replace(/,/g, ".");
  }

function h2k(integer) {
    let numb = parseInt(integer);
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
    }).format(numb);
  }

function formatSize(size) {
    function round(value, precision) {
      var multiplier = Math.pow(10, precision || 0);
      return Math.round(value * multiplier) / multiplier;
    }
    var kiloByte = 1024;
    var megaByte = kiloByte * kiloByte;
    var gigaByte = kiloByte * megaByte;
    var teraByte = kiloByte * gigaByte;
    if (size < kiloByte) {
      return size + "B";
    } else if (size < megaByte) {
      return round(size / kiloByte, 1) + "KB";
    } else if (size < gigaByte) {
      return round(size / megaByte, 1) + "MB";
    } else if (size < teraByte) {
      return round(size / gigaByte, 1) + "GB";
    } else {
      return round(size / teraByte, 1) + "TB";
    }
  }

function mtype(data) {
    function replaceAll(str) {
      let res = str
        .replace(new RegExp("```", "g"), "")
        .replace(new RegExp("_", "g"), "")
        .replace(new RegExp(/[\*]/, "g"), "");
      return res;
    }
    let type = typeof data.text !== "object" ? replaceAll(data.text) : "";
    return type;
  }

function sizeLimit(str, max) {
    let unitRank = {
      B: 1,
      MB: 1024 * 1024,
      GB: 1024 * 1024 * 1024,
      TB: 1024 * 1024 * 1024 * 1024,
    };
    str = str.trim().toUpperCase();
    let match = str.match(/(\d+\.?\d*)([B|MB|GB|TB]*)/);
    if (!match) {
      return { oversize: true };
    }
    let size = parseFloat(match[1]);
    let unit = match[2];
    if (!unit || !(unit in unitRank)) {
      unit = "B";
    }
    let totalSizeInBytes = size * unitRank[unit];
    let maxMatch = max.match(/(\d+\.?\d*)([B|MB|GB|TB]*)/);
    let maxSize;
    if (maxMatch) {
      let maxValue = parseFloat(maxMatch[1]);
      let maxUnit = maxMatch[2] || "B";
      maxSize = maxValue * unitRank[maxUnit];
    } else {
      return { oversize: true };
    }
    if (totalSizeInBytes > maxSize) {
      return { oversize: true };
    }
    return { oversize: false };
  }

function ago(time) {
    const date = new Date(time);
    const timestamp = date.getTime();
    const now = Date.now();
    const seconds = Math.floor((now - timestamp) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(seconds / 3600);
    const days = Math.floor(seconds / 86400);
    const months = Math.floor(seconds / 2592000);
    const years = Math.floor(seconds / 31536000);

    if (seconds < 60) {
      return seconds === 1 ? "1 detik yang lalu" : seconds + " detik yang lalu";
    } else if (minutes < 60) {
      return minutes === 1 ? "1 menit yang lalu" : minutes + " menit yang lalu";
    } else if (hours < 24) {
      return hours === 1 ? "1 jam yang lalu" : hours + " jam yang lalu";
    } else if (days < 30) {
      return days === 1 ? "1 hari yang lalu" : days + " hari yang lalu";
    } else if (months < 12) {
      return months === 1 ? "1 bulan yang lalu" : months + " bulan yang lalu";
    } else {
      return years === 1 ? "1 tahun yang lalu" : years + " tahun yang lalu";
    }
  }

function jsonFormat(obj) {
    try {
      let print =
        obj &&
        (obj.constructor.name == "Object" || obj.constructor.name == "Array")
          ? require("node:util").format(JSON.stringify(obj, null, 2))
          : require("node:util").format(obj);
      return print;
    } catch {
      return require("node:util").format(obj);
    }
  }

function ucword(str) {
    return (str + "").replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    });
  }

function arrayJoin(arr) {
    var construct = [];
    for (var i = 0; i < arr.length; i++) construct = construct.concat(arr[i]);
    return construct;
  }

function removeItem(arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) arr.splice(index, 1);
    return arr;
  }

function matcher(string, array, options) {
    function levenshtein(value, other, insensitive) {
      var cache = [];
      var codes = [];
      var length;
      var lengthOther;
      var code;
      var result;
      var distance;
      var distanceOther;
      var index;
      var indexOther;

      if (value === other) {
        return 0;
      }

      length = value.length;
      lengthOther = other.length;

      if (length === 0) {
        return lengthOther;
      }

      if (lengthOther === 0) {
        return length;
      }

      if (insensitive) {
        value = value.toLowerCase();
        other = other.toLowerCase();
      }

      index = 0;

      while (index < length) {
        codes[index] = value.charCodeAt(index);
        cache[index] = ++index;
      }

      indexOther = 0;

      while (indexOther < lengthOther) {
        code = other.charCodeAt(indexOther);
        result = distance = indexOther++;
        index = -1;

        while (++index < length) {
          distanceOther = code === codes[index] ? distance : distance + 1;
          distance = cache[index];
          cache[index] = result =
            distance > result
              ? distanceOther > result
                ? result + 1
                : distanceOther
              : distanceOther > distance
                ? distance + 1
                : distanceOther;
        }
      }
      return result;
    }

   function similarity(a, b, options) {
      var left = a || "";
      var right = b || "";
      var insensitive = !(options || {}).sensitive;
      var longest = Math.max(left.length, right.length);
      return (
        (longest === 0
          ? 1
          : (longest - levenshtein(left, right, insensitive)) / longest) * 100
      ).toFixed(1);
    }

    let data = [];
    let isArray = array.constructor.name == "Array" ? array : [array] || [];
    isArray.map((v) =>
      data.push({
        string: v,
        accuracy: similarity(string, v),
      }),
    );
    return data;
  }

function toDate(ms) {
    let temp = ms;
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor(daysms / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor(hoursms / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor(minutesms / 1000);
    if (days == 0 && hours == 0 && minutes == 0) {
      return "Baru saja";
    } else {
      return days + "D " + hours + "H " + minutes + "M";
    }
  }

function timeFormat(value) {
    const sec = parseInt(value, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - hours * 3600) / 60);
    let seconds = sec - hours * 3600 - minutes * 60;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    if (hours == parseInt("00")) return minutes + ":" + seconds;
    return hours + ":" + minutes + ":" + seconds;
  }

function switcher(status, isTrue, isFalse) {
    return status ? this.texted("bold", isTrue) : this.texted("bold", isFalse);
  }

function makeId(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

function timeReverse(duration) {
    let milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
      days = Math.floor(duration / (24 * 60 * 60 * 1000));
    let hoursF = hours < 10 ? "0" + hours : hours;
    let minutesF = minutes < 10 ? "0" + minutes : minutes;
    let secondsF = seconds < 10 ? "0" + seconds : seconds;
    let daysF = days < 10 ? "0" + days : days;

    return daysF + "D " + hoursF + "H " + minutesF + "M";
  }

function Styles(text, style = 1) {
    var xStr = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    var yStr = Object.freeze({
      1: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890",
    });
    var replacer = [];
    xStr.map((v, i) =>
      replacer.push({
        original: v,
        convert: yStr[style].split("")[i],
      }),
    );
    var str = text.toLowerCase().split("");
    var output = [];
    str.map((v) => {
      const find = replacer.find((x) => x.original == v);
      find ? output.push(find.convert) : output.push(v);
    });
    return output.join("");
  }

function fetchJson(url, options = {}) {
    try {
      const result = await (axios.get(url, { ...options })).data;
      return result;
    } catch (e) {
      return {
        status: false,
        msg: e.message,
      };
    }
  }

function fetchBuffer(file, options = {}) {
    try {
      if (this.isUrl(file)) {
        const buffer = await (
          axios.get(file, {
            responseType: "arraybuffer",
            ...options,
          })
        ).data;
        return buffer;
      } else {
        const buffer = fs.readFileSync(file);
        return buffer;
      }
    } catch (e) {
      return {
        status: false,
        msg: e.message,
      };
    }
  }

function jsonRandom(file) {
    let json = JSON.parse(fs.readFileSync(file));
    return json[Math.floor(Math.random() * json.length)];
  }

function getRandom() {
    if (Array.isArray(this) || this instanceof String) return this[Math.floor(Math.random() * this.length)]
    return Math.floor(Math.random() * this)
}

/*===============================*/

//     PENGUBAHAN FUNCTION
//               JADI
//        METHODE GLOBAL

/*===============================*/
global.getLidFromJid = getLidFromJid;
global.isUrl = isUrl
global.texted = texted
global.beautify = beautify
global.example = example
global.toTime = toTime
global.readTime = readTime
global.random = random
global.randomInt = randomInt
global.formatter = formatter
global.formatNumber = formatNumber
global.h2k = h2k
global.formatSize = formatSize
global.sizeLimit = sizeLimit
global.ago = ago
global.jsonFormat = jsonFormat
global.ucword = ucword
global.arrayJoin = arrayJoin
global.removeItem = removeItem
global.toDate = toDate
global.timeFormat = timeFormat
global.switcher = switcher
global.makeId = makeId
global.timeReverse = timeReverse
global.Styles = Styles
global.fetchJson = fetchJson
global.fetchBuffer = fetchBuffer
global.jsonRandom = jsonRandom
global.getRandom = getRandom



            if (db.data.settings[this.user.jid].autoread) await this.readMessages([m.key])
            if (opts['nyimak']) return
            if (opts['pconly'] && m.chat.endsWith('g.us')) return
            if (opts['gconly'] && !m.chat.endsWith('g.us')) return
            if (opts['swonly'] && m.chat !== 'status@broadcast') return
            if (typeof m.text !== 'string') m.text = ''   
                                
            const RafiTampilan = (teks) => {
            m.reply(teks)
            }
            const RafiMenu = (teks) => {
            m.reply(teks)
            }
            
            const msg = m;
            let usedPrefix
            let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]
            
            const detectwhat = m.sender.includes('@lid') ? '@lid' : '@s.whatsapp.net';
            const ownerNumbers = [setting.ownerlid.map(v => v.replace(/[^0-9]/g, '')), ...setting.nomorowner.map(v => v.replace(/[^0-9]/g, ''))]; 
            const mappedOwners = ownerNumbers.map(v => v + detectwhat);
            const isROwner = mappedOwners.includes(m.sender);
            const isOwner = isROwner || m.fromMe
            const isPrems = global.db.data.users[m.sender].premium
            const isBans = global.db.data.users[m.sender].banned
            
            const senderLid = await getLidFromJid(m.sender, this)
            const botLid = await getLidFromJid(this.user.jid, this)
            const senderJid = m.sender
            const botJid = this.user.jid
            const groupMetadata = (m.isGroup ? (conn.chats[m.chat] || {}).metadata : {}) || {}
            const participants = m.isGroup ? (groupMetadata.participants || []) : []
            const user = participants.find(p => p.id === senderLid || p.id === senderJid) || {}
            const bot = participants.find(p => p.id === botLid || p.id === botJid) || {}
            const isRAdmin = user?.admin === "superadmin" || false
            const isAdmin = isRAdmin || user?.admin === "admin" || false
            const isBotAdmin = !!bot?.admin || false

            if (!isOwner && db.data.settings[this.user.jid].self) return
            if (!isOwner && db.data.chats[m.chat].mute) return
            const isBot = m?.id?.startsWith("3EB0") ||
                m?.id?.startsWith("FELZ") ||
                m?.id?.startsWith("F3FD") ||
                m?.id?.startsWith("SSA") ||
                m?.id?.startsWith("B1EY") ||
                m?.id?.startsWith("BAE5") ||
                m?.id?.startsWith("HSK") ||
                m?.id?.indexOf("-") > 1;
            if (isBot) return

            // Variabel kontrol reset
            let isResetting = false
            let lastResetTime = 0

            const DeveloperNumber = [developer.lid.map(v => v.replace(/[^0-9]/g, '')), ...developer.nomor.map(v => v.replace(/[^0-9]/g, ''))]; 
            const mappedDeveloper = DeveloperNumber.map(v => v + detectwhat); 
            const isDeveloper = mappedDeveloper.includes(m.sender);
            // Di dalam handler:
            if (isROwner) {
                if (global.conn.user.jid != conn.user.jid) return;
                db.data.users[m.sender].limit = 100
            }
            if (isDeveloper) {
                if (global.conn.user.jid != conn.user.jid) return;
                db.data.users[m.sender].limit = 1000
            }

            // Pengecekan reset limit yang anti-spam
            const now = Date.now()
            const resetTime = db.data.settings[this.user.jid].resetlimit

            if (resetTime && !isResetting) {
                const [targetHour, targetMinute] = resetTime.split(':').map(Number)
                const currentTime = moment.tz("Asia/Jakarta")

                // Cek jika waktu sekarang sama dengan waktu reset
                if (currentTime.hours() === targetHour &&
                    currentTime.minutes() === targetMinute &&
                    now - lastResetTime > 60000) { // Minimal 1 menit antara reset

                    isResetting = true
                    lastResetTime = now

                    try {
                        const users = Object.keys(db.data.users)
                        for (const user of users) {
                            db.data.users[user].limit = 100
                        }

                        console.log(color(`[ LIMIT RESET ] Berhasil direset pukul ${resetTime} untuk ${users.length} pengguna`, 'green'))
                    } catch (e) {
                        console.error(color('[ LIMIT RESET ERROR ]', 'red'), e)
                    } finally {
                        isResetting = false
                    }
                }
            }

            if (isROwner) {
                db.data.users[m.sender].limit = 100
            }

            if (opts['queque'] && m.text && !(isMods || isPrems)) {
                let queque = this.msgqueque,
                    time = 1000 * 5
                const previousID = queque[queque.length - 1]
                queque.push(m.id || m.key.id)
                setInterval(async function() {
                    if (queque.indexOf(previousID) === -1) clearInterval(this)
                    else await delay(time)
                }, time)
            }

            m.exp += Math.ceil(Math.random() * 10)

            for (let name in pckg.Package) {
                let Tools
                if (typeof pckg.Package[name].code === "function") {
                    let anu = pckg.Package[name]
                    Tools = anu.code
                    for (let prop in anu) {
                        if (prop !== "run") {
                            Tools[prop] = anu[prop]
                        }
                    }
                } else {
                    Tools = pckg.Package[name]
                }
                if (!Tools) return
                if (Tools.disabled) continue

                if (!opts['restrict'])
                    if (Tools.tags && Tools.tags.includes('admin')) {
                        global.dfail('restrict', m, this)
                        continue
                    }
                const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
                let _prefix = Tools.customPrefix ? Tools.customPrefix : conn.prefix ? conn.prefix : global.prefix
                let match = (_prefix instanceof RegExp ? // RegExp Mode?
                    [
                        [_prefix.exec(m.text), _prefix]
                    ] :
                    Array.isArray(_prefix) ? // Array?
                    _prefix.map(p => {
                        let re = p instanceof RegExp ? // RegExp in Array?
                            p :
                            new RegExp(str2Regex(p))
                        return [re.exec(m.text), re]
                    }) :
                    typeof _prefix === 'string' ? // String?
                    [
                        [new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]
                    ] : [
                        [
                            [], new RegExp
                        ]
                    ]
                ).find(p => p[1])

                try {
                    if (typeof Tools.before === 'function')
                        if (await Tools.before.call(this, m, {
                                msg,
                                match,
                                conn: this,
                                ctx,
                                sock,
                                client,
                                participants,
                                groupMetadata,
                                user,
                                bot,
                                isDeveloper,
                                RafiTampilan,
                                RafiMenu,
                                isROwner,
                                isOwner,
                                isRAdmin,
                                isAdmin,
                                isBotAdmin,
                                isPrems,
                                isBans,
                                chatUpdate,
                            })) continue
                    if (typeof Tools !== 'function') continue
                    if ((usedPrefix = (match[0] || '')[0])) {
                        let noPrefix = m.text.replace(usedPrefix, '')
                        let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                        if (!m.isGroup && db.data.settings[this.user.jid].onlygrup) {
                           if (usedPrefix && command) return
                        };
                        args = args || []
                        let _args = noPrefix.trim().split` `.slice(1)
                        let text = _args.join` `
                        command = (command || '').toLowerCase()
                        let fail = Tools.fail || global.dfail // When failed
                        let isAccept = Tools.command instanceof RegExp ? // RegExp Mode?
                            Tools.command.test(command) :
                            Array.isArray(Tools.command) ? // Array?
                            Tools.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                                cmd.test(command) :
                                cmd === command
                            ) :
                            typeof Tools.command === 'string' ? // String?
                            Tools.command === command :
                            false

                        if (!isAccept) continue
                        m.Tools = name
                        if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                            let chat = global.db.data.chats[m.chat]
                            let user = global.db.data.users[m.sender]
                            if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this
                            if (name != 'unbanuser.js' && user && user.banned) return
                        }
                        if (Tools.rowner && Tools.owner && !(isROwner || isOwner || isDeveloper)) { // Both Owner
                            fail('owner', m, this)
                            continue
                        }
                        if (Tools.loading) { // Both Owner
                            await conn.sendMessage(m.chat, { react: { text: '🕑', key: m.key } }) 
                        }
                        if (Tools.rowner && !(isROwner || isOwner || isDeveloper)) { // Real Owner
                            fail('rowner', m, this)
                            continue
                        }
                        if (Tools.owner && !(isOwner || isDeveloper)) { // Number Owner
                            fail('owner', m, this)
                            continue
                        }
                        if (Tools.developer && !isDeveloper) { // Number Owner
                            m.reply('maaf fitur ini hanya untuk developer')
                            continue
                        }
                        if (Tools.mods && !isMods) { // Moderator
                            fail('mods', m, this)
                            continue
                        }
                        if (Tools.premium && !isPrems) { // Premium
                            fail('premium', m, this)
                            continue
                        }
                        if (Tools.banned && !isBans) { // Banned
                            fail('banned', m, this)
                            continue
                        }
                        if (Tools.group && !m.isGroup) { // Group Only
                            fail('group', m, this)
                            continue
                        } else if (Tools.botAdmin && !isBotAdmin) { // You Admin
                            fail('botAdmin', m, this)
                            continue
                        } else if (Tools.admin && !(isAdmin || isOwner || isDeveloper)) { // User Admin
                            fail('admin', m, this)
                            continue
                        }
                        if (Tools.private && m.isGroup) { // Private Chat Only
                            fail('private', m, this)
                            continue
                        }
                        if (Tools.register == true && _user.registered == false) { // Butuh daftar?
                            fail('unreg', m, this)
                            continue
                        }
                        m.isCommand = true
                        let xp = 'exp' in Tools ? parseInt(Tools.exp) : 17 // XP Earning per command
                        if (xp > 9999999999999999999999) m.reply('Ngecit -_-') // Hehehe
                        else m.exp += xp
                        if (Tools.level > _user.level) {
                            this.reply(m.chat, `diperlukan level ${Tools.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
                            continue // If the level has not been reached
                        }
                        let extra = {
                            msg,
                            match,
                            usedPrefix,
                            noPrefix,
                            _args,
                            args,
                            command,
                            text,
                            conn: this,
                            ctx,
                            sock,
                            client,
                            participants,
                            isDeveloper,
                            groupMetadata,
                            user,
                            RafiTampilan,
                            RafiMenu,
                            bot,
                            isROwner,
                            isOwner,
                            isRAdmin,
                            isAdmin,
                            isBotAdmin,
                            isPrems,
                            isBans,
                            chatUpdate,
                        }
                        try {
                            await Tools.call(this, m, extra)
                                .then(async (a) => {
                                    if (Tools?.limit && !isPrems && !isROwner) {
                                        let user = db.data.users[m.sender]
                                        if (user.limit > Tools.limit) {
                                            user.limit -= Tools.limit
                                            conn.reply(
                                                m.chat,
                                                `${Tools.limit} Limit Terpakai Sayang\nLimit Kamu Tinggal ${user.limit}, Jangan Boros Boros Ya😚`,
                                                m
                                            )
                                        } else {
                                            conn.reply(
                                                m.chat,
                                                `[❗] *Peringatan*\nMohon Maaf Limit Anda Sudah Habis\nBot Akan Merestart Ulang Limit Pada Jam 02.00`,
                                                m
                                            )
                                        }
                                    }
                                })
                        } catch (e) {
                            m.error = e;
                            console.error("Error", e);
                            if (e) {
                                let text = util.format(e);
                                conn.logger.error(text);
                                if (text.match("rate-overlimit")) return;
                                if (e.name) {
                                    for (let jid of global.setting.nomorowner) {
                                        let data = (await conn.onWhatsApp(jid))[0] || {};
                                        if (data.exists)
                                            this.reply(
                                                data.jid,
                                                `*[ REPORT ERROR ]*
*• Name Tools :* ${m.Tools}
*• From :* @${m.sender.split("@")[0]} *(wa.me/${m.sender.split("@")[0]})*
*• Jid Chat :* ${m.chat} 
*• Command  :* ${usedPrefix + command}

*• Error Log :*
\`\`\`${text}\`\`\`
`.trim(),
                                                m,
                                            );
                                    }
                                    m.reply("*[ system notice ]* Terjadi kesalahan pada bot !");
                                }
                                m.reply(e);
                            }
                        } finally {
                            if (typeof Tools.after === "function") {
                                try {
                                    await Tools.after.call(this, m, extra);
                                } catch (e) {
                                    console.error(e);
                                }
                            }
                        }
                        break;
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        } catch (e) {
            console.error(e);
        } finally {
            if (opts["queque"] && m.text) {
                const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id);
                if (quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1);
            }
            let user,
                stats = global.db.data.stats;
            if (m) {
                if (m.sender && (user = global.db.data.users[m.sender])) {
                    user.exp += m.exp;
                    user.limit -= m.limit * 1;
                }
                let stat;
                if (m.Tools) {
                    let now = +new Date();
                    if (m.Tools in stats) {
                        stat = stats[m.Tools];
                        if (!isNumber(stat.total)) stat.total = 1;
                        if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1;
                        if (!isNumber(stat.last)) stat.last = now;
                        if (!isNumber(stat.lastSuccess))
                            stat.lastSuccess = m.error != null ? 0 : now;
                    } else
                        stat = stats[m.Tools] = {
                            total: 1,
                            success: m.error != null ? 0 : 1,
                            last: now,
                            lastSuccess: m.error != null ? 0 : now,
                        };
                    stat.total += 1;
                    stat.last = now;
                    if (m.error == null) {
                        stat.success += 1;
                        stat.lastSuccess = now;
                    }
                }
            }
            try {
                require('./print')(m, this)
            } catch (e) {
                console.log(m, m.quoted, e)
            }
            if (opts['autoread']) await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => {})
        }
    },

    async participantsUpdate({
        id,
        participants,
        action
    }) {
        if (global.isInit) return
        let chat = global.db.data.chats[id] || {}
        let text = ''
        switch (action) {
            case 'add':
                if (chat.welcome) {
                    let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                    for (let user of participants) {
                        let pp = './src/avatar_contact.png'
                        try {
                            pp = await this.profilePictureUrl(user, 'image')
                        } catch (e) {} finally {
                            text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '') :
                                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + participants[0].split('@')[0])
                            this.sendMessage(id, {
            text: text,
            contextInfo: {
                mentionedJid: [user],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.setting.idch,
                   serverMessageId: null,
                   newsletterName: global.setting.namach,
                   },
                   externalAdReply: {
                   title: `SELAMAT DATANG`,
                   body: `MEMBER BARU`,
                   thumbnailUrl: pp,
                   sourceUrl: '',
                   mediaType: 1,
                   renderLargerThumbnail: true
                   },
                },
            }, { quoted: null })
                        }
                    }
                }
                break
                case 'remove':
                if (chat.welcome) {
                    let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                    for (let user of participants) {
                        let pp = './src/avatar_contact.png'
                        try {
                            pp = await this.profilePictureUrl(user, 'image')
                        } catch (e) {} finally {
                            text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '') :
                                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + participants[0].split('@')[0])
                                
this.sendMessage(id, {
            text: text,
            contextInfo: {
                mentionedJid: [user],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: global.setting.idch,
                   serverMessageId: null,
                   newsletterName: global.setting.namach,
                   },
                   externalAdReply: {
                   title: `GOOD BYE`,
                   body: `MEMBER KELUAR`,
                   thumbnailUrl: pp,
                   sourceUrl: '',
                   mediaType: 1,
                   renderLargerThumbnail: true
                   },
                },
            }, { quoted: null })
                        }
                    }
                }
                break
            case 'promote':
                text = (chat.sPromote || this.spromote || conn.spromote || '@user sekarang admin!')
            case 'demote':
                if (!text)
                    text = (chat.sDemote || this.sdemote || conn.sdemote || '@user sekarang bukan admin!')
                text = text.replace('@user', '@' + participants[0].split('@')[0])
                if (chat.detect)
                    this.sendMessage(id, {
                        text,
                        mentions: this.parseMention(text)
                    })
                break
        }
    },

    async onCall(json) {
        if (!db.data.settings[this.user.jid].anticall) return
        let jid = json[2][0][1]['from']
        let isOffer = json[2][0][2][0][0] == 'offer'
        let users = global.db.data.users
        let user = users[jid] || {}
        if (user.whitelist) return
        if (jid && isOffer) {
            const tag = this.generateMessageTag()
            const nodePayload = ['action', 'call', ['call', {
                    'from': this.user.jid,
                    'to': `${jid.split`@`[0]}@s.whatsapp.net`,
                    'id': tag
                },
                [
                    ['reject', {
                        'call-id': json[2][0][2][0][1]['call-id'],
                        'call-creator': `${jid.split`@`[0]}@s.whatsapp.net`,
                        'count': '0'
                    }, null]
                ]
            ]]
            this.sendJSON(nodePayload, tag)
            m.reply(`Kamu dibanned karena menelepon bot, owner : @${global.setting.nomorowner[0][0]}`)
        }
    },

    async GroupUpdate({
        jid,
        desc,
        descId,
        descTime,
        descOwner,
        announce
    }) {
        if (!db.data.chats[jid].desc) return
        if (!desc) return
        let caption = `
@${descOwner.split`@`[0]} telah mengubah deskripsi grup.
${desc}
    `.trim()
        this.sendMessage(jid, caption, info.wm, m)
    }
}

global.dfail = (type, m, conn) => {
    let msg = {
        rowner: `*( Ditolak )* Perintah ini hanya dapat digunakan oleh *Real Owner*!`,
        owner: `*( Ditolak )* Perintah ini hanya dapat digunakan oleh *Owner*!`,
        banned: `*( Ditolak )* Perintah ini hanya untuk pengguna yang terbanned..`,
        premium: `*( Ditolak )* Perintah ini hanya dapat digunakan oleh *Premium*!`,
        group: `*( Ditolak )* Perintah ini hanya dapat digunakan di grup!`,
        private: `*( Ditolak )* Perintah ini hanya dapat digunakan di Chat Pribadi!`,
        admin: `*( Ditolak )* Perintah ini hanya untuk *Admin* grup!`,
        botAdmin: `*( Ditolak )* Jadikan bot sebagai *Admin* untuk menggunakan perintah ini!`,
        restrict: `*( Ditolak )* Fitur ini di *disable*!`,
        unreg: `*( Hai *@${m.sender.split("@")[0]} )* Anda belum terdaftar!\n\nContoh: *#daftar Manusia.16* atau *#regmail xxx@gmail.com*`
    } [type]
    if (msg) return m.reply(msg)
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright("Update handler.js'"))
    delete require.cache[file]
    if (global.reloadHandler) console.log(global.reloadHandler())
})
