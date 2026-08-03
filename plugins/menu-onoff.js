import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix}) => {
  try {
    const pp = imagen1;
    const str = `╔◊ •═════════════════• ◊╗
║            🟢 \`ON Y OFF\` 🔴
╠◊ •═════════════════• ◊╝
> _${usedPrefix}on *antiprivado*_ 
> _${usedPrefix}on *restrict*_
> _${usedPrefix}on *autoread*_
> _${usedPrefix}on *antispam*_
> _${usedPrefix}on *anticall*_
> _${usedPrefix}on *welcome*_
> _${usedPrefix}on *antilink2*_
> _${usedPrefix}on *antilink*_
> _${usedPrefix}on *detect*_
> _${usedPrefix}on *autosticker*_
> _${usedPrefix}on *antiviewonce*_
> _${usedPrefix}on *antitoxic*_
> _${usedPrefix}on *antiarabes*_
> _${usedPrefix}on *modoadmin*_
> _${usedPrefix}on *antidelete*_
> _${usedPrefix}on *public*_
> _${usedPrefix}on *pconly*_
> _${usedPrefix}on *gconly*_
> •┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•
> _${usedPrefix}off *antiprivado*_ 
> _${usedPrefix}off *restrict*_
> _${usedPrefix}off *autoread*_
> _${usedPrefix}off *antispam*_
> _${usedPrefix}off *anticall*_
> _${usedPrefix}off *welcome*_
> _${usedPrefix}off *antilink2*_
> _${usedPrefix}off *antilink*_
> _${usedPrefix}off *detect*_
> _${usedPrefix}off *autosticker*_
> _${usedPrefix}off *antiviewonce*_
> _${usedPrefix}off *antitoxic*_
> _${usedPrefix}off *antiarabes*_
> _${usedPrefix}off *modoadmin*_
> _${usedPrefix}off *antidelete*_
> _${usedPrefix}off *public*_
> _${usedPrefix}off *pconly*_
> _${usedPrefix}off *gconly*_
╰•─────────────────•╯`.trim();
    conn.sendMessage(m.chat, {image: pp, caption: str, mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrió un error al mostrar el menú.', m);
  }
};
handler.command = /^(menuonoff)$/i;
handler.register = true;
export default handler;
