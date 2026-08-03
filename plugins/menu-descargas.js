import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix}) => {
  try {
    const pp = imagen1;
    const str = `╔◊ •═════════════════• ◊╗
║        ⬇️ \`DESCARGADOR\` ⬇️
╠◊ •═════════════════• ◊╝
> _${usedPrefix}instagram *url*_
> _${usedPrefix}mediafire *url*_
> _${usedPrefix}gitclone *url*_
> _${usedPrefix}tiktok *url*_
> _${usedPrefix}twitter *url*_
> _${usedPrefix}fb *url*_
> _${usedPrefix}ytshort *url*_
> _${usedPrefix}apk *texto*_
> _${usedPrefix}modapk *texto*_
> _${usedPrefix}google *texto*_
> _${usedPrefix}ytsearch *texto*_
> _${usedPrefix}playstore *texto*_
> _${usedPrefix}play *texto*_
> _${usedPrefix}youtube *texto*_
> _${usedPrefix}playlist *texto*_
> _${usedPrefix}imagen *texto*_
╰•─────────────────•╯`.trim();
    conn.sendMessage(m.chat, {image: pp, caption: str, mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrió un error al mostrar el menú.', m);
  }
};
handler.command = /^(menudescargas)$/i;
handler.register = true;
export default handler;
