import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';
import fs from 'fs';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = pp.startsWith('http') ? await (await fetch(pp)).buffer() : fs.readFileSync(pp);
  const chat = global.db.data.chats[m.chat];
  
  let stub0 = m.messageStubParameters[0] || '';
  try {
      let parsed = JSON.parse(stub0);
      stub0 = parsed.phoneNumber || parsed.id || stub0;
  } catch (e) {}
  
  const mentionsString = [m.sender, stub0, ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, stub0];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `╭•───────────────────◊\n│ ${groupName}\n╰•───────────────────◊\n\n`;
    txt1 += `> \`𝙎𝙚 𝙝𝙖 𝙖𝙜𝙧𝙚𝙜𝙖𝙙𝙤 𝙖 𝙪𝙣 𝙣𝙪𝙚𝙫𝙤 𝙖𝙙𝙢𝙞𝙣 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\`\n\n`;
    txt1 += `𝙀𝙡 𝙣𝙪𝙚𝙫𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙖𝙙𝙢𝙞𝙣 𝙚𝙨: @${stub0.split`@`[0]}\n`;
    txt1 += `𝙥𝙧𝙤𝙢𝙤𝙫𝙞𝙙𝙤 𝙥𝙤𝙧:\n@${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `╭•───────────────────◊\n│ ${groupName}\n╰•───────────────────◊\n\n`;
    txt2 += `> \`𝙐𝙣 𝙖𝙙𝙢𝙞𝙣 𝙛𝙪𝙚 𝙦𝙪𝙞𝙩𝙖𝙙𝙤 𝙘𝙤𝙢𝙤 𝙖𝙙𝙢𝙞𝙣 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\`\n\n`;
    txt2 += `𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤: @${stub0.split`@`[0]} 𝙮𝙖 𝙣𝙤 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\n•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`;
    txt2 += `𝘿𝙚𝙨𝙘𝙖𝙧𝙩𝙖𝙙𝙤 𝙥𝙤𝙧:\n@${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `╭•───────────────────◊\n│ ${groupName}\n╰•───────────────────◊\n\n`;
    txt3 += `> \`𝙎𝙚 𝙝𝙖 𝙪𝙣𝙞𝙙𝙤/𝙖𝙜𝙧𝙚𝙜𝙖𝙙𝙤 𝙪𝙣 𝙣𝙪𝙚𝙫𝙤 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\`\n\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `👋🏻 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤/𝙖 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤: @${stub0.split`@`[0]}, 𝙙𝙞𝙨𝙛𝙧𝙪𝙩𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.\n•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`;
      txt3 += `𝘼𝙣̃𝙖𝙙𝙞𝙙𝙤/𝘼𝙜𝙧𝙚𝙙𝙖𝙙𝙥𝙤𝙧:\n@${m.sender.split`@`[0]}`;
    } else {
      txt3 += `👋🏻 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤/𝙖 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤: @${stub0.split`@`[0]}, 𝙙𝙞𝙨𝙛𝙧𝙪𝙩𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.\n•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `╭•───────────────────◊\n│ ${groupName}\n╰•───────────────────◊\n\n`;
    txt4 += `> \`𝙐𝙣 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙛𝙪𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\`\n\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `👋🏻 𝘼𝙙𝙞𝙤𝙨 @${stub0.split`@`[0]}, 𝙦𝙪𝙚 𝙩𝙚 𝙫𝙖𝙡𝙡𝙖 𝙗𝙞𝙚𝙣.\n•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`;
      txt4 += `𝙁𝙪𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙥𝙤𝙧:\n@${m.sender.split`@`[0]}`;
    } else {
      txt4 += `👋🏻 𝘼𝙙𝙞𝙤𝙨 @${stub0.split`@`[0]}, 𝙦𝙪𝙚 𝙩𝙚 𝙫𝙖𝙡𝙡𝙖 𝙗𝙞𝙚𝙣.\n•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = '𝙨𝙖𝙡𝙞𝙙𝙤';
    } else {
      ax = '𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤';
    }
    let txt5 = `╭•───────────────────◊\n│ ${groupName}\n╰•───────────────────◊\n\n`;
    txt5 += `> \`𝙐𝙣 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙖 ${ax} 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙧𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚.\`\n\n`;
    if (ax === '𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤') {
      txt5 += `𝙀𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: @${m.messageStubParameters[0].split`@`[0]}, 𝙛𝙪𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤.\n•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`;
      txt5 += `𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙥𝙤𝙧:\n@${m.sender.split`@`[0]}`;
    } else {
      txt5 += `𝙀𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚: @${m.messageStubParameters[0].split`@`[0]}, 𝙨𝙖𝙡𝙞𝙤 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.\n•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = '𝙘𝙚𝙧𝙧𝙖𝙙𝙤. ❌';
    } else {
      accion = '𝙖𝙗𝙞𝙚𝙧𝙩𝙤. ✅';
    }
    let txt6 = `╭•───────────────────◊\n│ ${groupName}\n╰•───────────────────◊\n\n`;
    txt6 += `> \`𝙎𝙚 𝙝𝙖𝙣 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙙𝙤 𝙡𝙤𝙨 𝙖𝙟𝙪𝙨𝙩𝙚𝙨 𝙙𝙚 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤.\`\n\n`;
    txt6 += `> 𝘼𝙝𝙤𝙧𝙖 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙚𝙨𝙩𝙖 ${accion}\n•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`;
    txt6 += `𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤:\n@${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `╭•───────────────────◊\n│ ${groupName}\n╰•───────────────────◊\n\n`;
    txt7 += `> 𝙎𝙚 𝙝𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙧𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚.\n•┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•\n`;
    txt7 += `𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙥𝙤𝙧:\n@${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
                            }
    
