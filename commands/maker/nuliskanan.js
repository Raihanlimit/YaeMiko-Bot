const fs = Ft.fs
const fetch = require('node-fetch')

module.exports = {

name: ["nuliskanan"],

type: ["maker"],
useLimit: true,
description: "menulis dengan text",
utilisation: userbot.prefix + "nuliskanan teks",

async execute(m) {
 let { conn, text } = data
//if (text[1]) return m.reply('teksnya?')

let res = await fetch(`https://hardianto.xyz/api/nuliskanan?text=${text}&apikey=hardianto`)

conn.sendButImg(m.chat, res, 'DONE', 'Awas Ketahuan Guru Kak >_<', m)
   }
}
