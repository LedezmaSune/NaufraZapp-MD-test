import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix}) => {
  try {
    const pp = imagen1;
    const str = `╔◊ •═════════════════• ◊╗
║        🗂️ \`INFORMACION\` 🗂️
╠◊ •═════════════════• ◊╝
> _${usedPrefix}contactos_
> _${usedPrefix}cuentasnz_
> _${usedPrefix}creador_
> _${usedPrefix}donar_
> _${usedPrefix}tipobot_
> _${usedPrefix}mirecurso_
> _${usedPrefix}estado_
> _${usedPrefix}infobot_
> _${usedPrefix}gruponz_
╰•─────────────────•╯`.trim();
    conn.sendMessage(m.chat, {image: pp, caption: str, mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrió un error al mostrar el menú.', m);
  }
};
handler.command = /^(menuinfo)$/i;
handler.register = true;
export default handler;
