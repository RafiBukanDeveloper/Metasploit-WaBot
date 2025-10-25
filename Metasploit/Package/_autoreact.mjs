let handler = async (m, { conn, text }) => {
  let chat = global.db.data.chats[m.chat]
   if (chat.autoReact) {
    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎','😪','🤔','🤯','🤢','🤮','😛','🤫','🥶','🙈','🙉','🙊','❤️','🧡','💛','💚','💙','💜'])}`,
            key: m.key,
          }})
  }
  }
handler.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|owner|vyna|asu|pantek|ikal|sepong|poke|iya|ga|oh)/i
handler.command = new RegExp
export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }