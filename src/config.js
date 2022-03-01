const fs = require("fs")

global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  kotzyy: 'https://api.kotzyy.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://api.kotzyy.xyz': 'KotzKey', //Free Register Apikey https://kotzyy.xyz/users/register
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'Ryhnnn',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'Raihans',
}


userbot = {
Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner:  [ "62882009085754", "14063617856", "19378825461", "15094018678" ],
  MONGO_URI: "mongodb+srv://Ren:RenBot@cluster0.a4az3.mongodb.net/Ryen?retryWrites=true&w=majority",
   mess: {
   wait: "⌛ Chottomatte....",
   api: "[❗] Emror", 
   success: "Berhasil",
   SudahAktif: "Perintah Tersebut Sudah Diaktifkan Sebelumnya.",
   SudahNonaktif: "Perintah Tersebut Sudah Dinonaktifkan Sebelumnya.",
   KhususGrup: "Perintah ini hanya bisa digunakan di Grup",
   KhususPribadi: "Perintah ini hanya bisa digunakan di private message",
   GrupAdmin: "Perintah ini hanya bisa digunakan oleh Admin Grup",
   BotAdmin: "Watashi harus menjadi Admin kak >_<",
   KhususOwner: "Perintah ini hanya dapat digunakan oleh owner watashi >_<",
   KhususPremium: "Perintah ini khusus member premium"
   },
   error: {
   Iv: "Linknya tidak valid kak",
   tombol: "Silahkam Masukkan prameter on/off",
   forget: "Teks nya mana kak?"
   },
   simple: {
   expiredQr: "[!] Scan Kode QR Diatas, Expired dalam 30 detik",
   credentials: "credentials updated!",
   opendocs: "open docs is complete!", 
   readBaileys: "berhasil masuk ke dalam baileys",
   connecting: "Menghubungkan",
   refresh: "Berhasil Perbarui Jaringan\n"
   },
   prefix: ['/', '.' ,'#' ,'!', 'Z' , '+', '-'],
   gexp: 100,
   limit: 10000,
   eror: "Sepertinya Eror",
   waits: "Sedang di proses",
   butmag: 'https://i.ibb.co/LvPcFZB/dc74d3adaeb61c919b13e709d6611ce3.jpg',
   packname: "Create By",
   author: 'YaeMikoBot',
    setting: {
    admin: "only admin",
    group: "only group",
    owner: "owner only pack",
    jadibot: "jadibot only",
    botadmin: "Watashi harus menjadi admin",
    daftar: "belum terdaftar, silahkan ketik prefix + verify untuk daftar kak >_<",
    nsfw: "FITUR BELUM DIAKTIFKAN!"
    }
}

module.exports = userbot
