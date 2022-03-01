const fs = require("fs")
userbot = {
Prem: JSON.parse(fs.readFileSync('./db/premium.json')),
 owner: [ "62882009085754", "14063617856", "15094018678", "19378825461" ],
  MONGO_URI: "mongodb+srv://Ren:RenBot@cluster0.a4az3.mongodb.net/Ryen?retryWrites=true&w=majority",
   mess: {
   wait: "⌛ Chottomatte...",
   api: "[❗] Eror Kak >_<", 
   success: "Berhasil",
   SudahAktif: "Perintah Tersebut Sudah Diaktifkan Sebelumnya.",
   SudahNonaktif: "Perintah Tersebut Sudah Dinonaktifkan Sebelumnya.",
   KhususGrup: "Perintah ini hanya bisa digunakan di Grup",
   KhususPribadi: "Perintah ini hanya bisa digunakan di private message",
   GrupAdmin: "Perintah ini hanya bisa digunakan oleh Admin Grup",
   BotAdmin: "Watashi Harus menjadi Admin Kak >_<",
   KhususOwner: "Perintah ini hanya dapat digunakan oleh owner watashi >_<",
   KhususPremium: "Perintah ini khusus member premium"
   },
   error: {
   Iv: "Link nya tidak valid Kak",
   tombol: "Silahkam Masukkan prameter on/off",
   forget: "Teks nya mana Kak?"
   },
   simple: {
   expiredQr: "[!] Scan Kode QR Diatas, Expired dalam 30 detik",
   credentials: "credentials updated!",
   opendocs: "open docs is complete!", 
   readBaileys: "berhasil masuk ke dalam baileys",
   connecting: "Menghubungkan"
   },
   prefix: ["/", ".", "#", "+", "-", "Z"],
   gexp: 100,
   limit: 1000,
   eror: "Sepertinya Eror",
   waits: "Sedang di proses",
   butmag: 'https://i.ibb.co/LvPcFZB/dc74d3adaeb61c919b13e709d6611ce3.jpg',
   packname: "Created By",
   author: 'YaeMikoBot',
    setting: {
    admin: "only admin",
    group: "only group",
    owner: "owner only pack",
    jadibot: "jadibot only",
    botadmin: "bot harus menjadi admin",
    nsfw: "FITUR BELUM DIAKTIFKAN!"
    }
}

module.exports = userbot


