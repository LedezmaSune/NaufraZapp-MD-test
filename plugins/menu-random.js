import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix}) => {
  try {
    const pp = imagen1;
    const str = `╔◊ •═════════════════• ◊╗
║     ♻️ \`MENU ALEATORIO\` ♻️
╠◊ •═════════════════• ◊╝
> _${usedPrefix}inspect *url grupal*_
> _${usedPrefix}chatgpt *texto*_
> _${usedPrefix}delchatgpt_
> _${usedPrefix}dsowner_
> _${usedPrefix}join *url grupal*_
> _${usedPrefix}consejo_
> _${usedPrefix}piropo_
> _${usedPrefix}yoayudo *texto*_
> _${usedPrefix}reporte *texto*_
> _${usedPrefix}s *img*_
> _${usedPrefix}sticker *img*_
> _${usedPrefix}ocr *img*_
> _${usedPrefix}hd *img*_
> _${usedPrefix}acortar *url*_
> _${usedPrefix}calc_
> _${usedPrefix}del_
> _${usedPrefix}whatmusic *audio*_
> _${usedPrefix}traducir *texto*_
╰•─────────────────•╯`.trim();
    conn.sendMessage(m.chat, {image: pp, caption: str, mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrió un error al mostrar el menú.', m);
  }
};
handler.command = /^(menurandom)$/i;
handler.register = true;
export default handler;
