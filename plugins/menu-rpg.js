import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix}) => {
  try {
    const pp = imagen1;
    const str = `╔◊ •═════════════════• ◊╗
║     🪙 \`RPG / ECONOMÍA\` 🪙
╠◊ •═════════════════• ◊╝
> _${usedPrefix}cofre_
> _${usedPrefix}balance_
> _${usedPrefix}levelup_
> _${usedPrefix}myns_
> _${usedPrefix}perfil_
> _${usedPrefix}work_
> _${usedPrefix}minar_
> _${usedPrefix}buy_
> _${usedPrefix}buyall_
> _${usedPrefix}verificar_
> _${usedPrefix}robar *@tag*_
> _${usedPrefix}transfer *@tag*_
> _${usedPrefix}unreg_
╰•─────────────────•╯`.trim();
    conn.sendMessage(m.chat, {image: pp, caption: str, mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrió un error al mostrar el menú.', m);
  }
};
handler.command = /^(menurpg)$/i;
handler.register = true;
export default handler;
