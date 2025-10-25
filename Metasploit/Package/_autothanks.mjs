let handler = async (m, { conn }) => {
  const thanksWords = ['terima kasih', 'thanks', 'makasi', 'makasih', 'thank you', 'tq', 'ty'];
  const isThanks = thanksWords.some((thanksWord) => m.text.toLowerCase().includes(thanksWord));

  if (isThanks) {
    const replyMessage = "Sama - sama, semoga membantumu!";
    m.reply(replyMessage);
  }
};

handler.customPrefix = /^((thanks?|makasi|makasih|hatur nuhun|terima kasih|thank you|tq|ty)(\s|$))/i;
handler.command = new RegExp();

export default handler;