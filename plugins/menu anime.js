let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/7c77b8a46acc56bb05273.mp4'
  let { name } = global.db.data.users[who]
m.react('🔮')
let str = `                  ✥━─━⌬ senku_𝒃𝒐𝒕 ⌬━─━✥
【..≼قــســم الانــمـــي≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄
❐..🔮╎❯ .فانرت⌉
❐..🔮╎❯ .هوسبو⌉
❐..🔮╎❯ .كانا⌉
❐..🔮╎❯ .ميغومين⌉
❐..🔮╎❯ .نيكو⌉
❐..🔮╎❯ .شوتا⌉
❐..🔮╎❯ .وايف⌉
❐..🔮╎❯ .الينا⌉
❐..🔮╎❯ .مراتي⌉
❐..🔮╎❯ .بنت⌉
                    ✥━─━⌬ senku_𝒃𝒐𝒕 ⌬━─━✥
                    *انتبه ليما تعانيه فانت لست ملك لنفسك*💫🌹
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['الانمي']

export default handler
