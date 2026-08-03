import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix}) => {
  try {
    const pp = imagen1;
    const str = `╔◊ •═════════════════• ◊╗
║   👑 \`MENU PARA OWNERS\` 👑
╠◊ •═════════════════• ◊╝
> _${usedPrefix}setprefix *prefix*_
> _${usedPrefix}resetprefix_
> _${usedPrefix}autoadmin_
> _${usedPrefix}addowner *@tag*_
> _${usedPrefix}delownr *@tag*_
> _${usedPrefix}block *@tag*_
> _${usedPrefix}unblock *@tag*_
> _${usedPrefix}banchat_
> _${usedPrefix}unbanchat_
> _${usedPrefix}resetuser *@tag*_
> _${usedPrefix}banuser *@tag*_
> _${usedPrefix}unbanuser *@tag*_
> _${usedPrefix}dardiamantes *@tag*_
> _${usedPrefix}añadirxp *@tag*_
> _${usedPrefix}banuser *@tag*_
> _${usedPrefix}restart_
> _${usedPrefix}update_
╰•─────────────────•╯`.trim();
    conn.sendMessage(m.chat, {image: pp, caption: str, mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrió un error al mostrar el menú.', m);
  }
};
handler.command = /^(menuowner|menuadmin)$/i;
handler.register = true;
export default handler;
