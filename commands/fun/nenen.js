
module.exports = {
name: ["nenen"],
type: ["fun"],
description: "nenen nenen kepengen nenen",
utilisation: userbot.prefix + "nenen <namakarakter>",

async execute(m) {
let { conn, text } = data

if (!text) return m.reply('contoh' + userbot.prefix + command + 'Yae Miko')

let caption = `
${text} ${text} ${text} NENEN NENEN KEPENGEN NENEN SAMA ${text}. TETEK GEDE NAN KENCANG MILIK ${text} MEMBUATKU KEPENGEN NENEN. DIBALUT PAKAIAN KETAT YANG ADUHAI CROOOOTOTOTOTOTOT ANJING SANGE GUA BANGSAT. ${text} , PLIS DENGERIN BAIK BAIK. TOLONG BUKA BAJU SEBENTAR SAJA PLISSS TOLOOONG BANGET, BIARKAN MULUT KERINGKU BISA MENGECAP NENEN ${text}. BIARKAN AKU MENGENYOT NENENMU ${text}. AKU RELA NGASIH SESEMBAHAN APA AJA BERAPAPUN ITU DUIT YANG AKU BAKAR KHUSUS TERKHUSUS BUATMU. TAPI TOLOOOONG BANGET BUKA BAJUMU AKU MAU NENEN. NENEN NENEEEEN NENEN ${text} WANGIIII!!!!!!!!!!!!!!!!!!
`
m.reply(caption)

}
}
