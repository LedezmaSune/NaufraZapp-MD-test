import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix}) => {
  try {
    const pp = imagen1;
    const str = `╔◊ •═════════════════• ◊╗
║       👥 \`CONFIG GROUP\` 👥
╠◊ •═════════════════• ◊╝
> _${usedPrefix}add *numero*_
> _${usedPrefix}kick *responder*_
> _${usedPrefix}kick2 *responder*_
> _${usedPrefix}grupo *abrir*_
> _${usedPrefix}grupo *cerrar*_
> _${usedPrefix}promote *@tag*_
> _${usedPrefix}demote *@tag*_
> _${usedPrefix}link_
> _${usedPrefix}setname *texto*_
> _${usedPrefix}setdesc *texto*_
> _${usedPrefix}invocar *texto*_
> _${usedPrefix}setwelcome *texto*_
> _${usedPrefix}setbye *texto*_
> _${usedPrefix}hidetag *texto*_
> _${usedPrefix}hidetag *audio*_
> _${usedPrefix}hidetag *video*_
> _${usedPrefix}hidetag *imagen*_
╰•─────────────────•╯`.trim();
    conn.sendMessage(m.chat, {image: pp, caption: str, mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrió un error al mostrar el menú.', m);
  }
};
handler.command = /^(menugrupos)$/i;
handler.register = true;
export default handler;
