import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['21265859453p', '🌩️ ẉa.me//senku dev‖.peị!‽ 👑', true], ['201025663589'], ['573155428601'], ['5214531287294'], ['51906662557'], ['5492266466080'], ['593968585383'], ['573026191480'], ['5492266613038'], ['573106040746'], ['5215610314499']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['201012531172']
global.suittag = ['201012531172']
global.mods = []
global.prems = []

global.packname = '『 حقوق سينكو عمك 』'
global.author = '『 سينكـو بــ☠️ـوت 』'
global.wm = '『سينكـؤؤ بــ🐍ـؤؤت 』'
global.wm2 = '『 سيــنكــو بــ💎ـوت 』'
global.azami = '『سيـنكـؤؤ بــ💀ـؤؤ 』'
global.cb = '『 سيــنكــو بــ👾ـوت 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *🛡️ 1.7.9* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© SENKU_BOT'
global.devnum = '+212658594530'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
