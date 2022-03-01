const quotesAnime = require("../../Lib/scraper.js'")
const fs = Ft.fs

module.exports = {

name: ["quotesanime"],

type: ["quotes"],
useLimit: true,
description: "quotes anime",
utilisation: userbot.prefix + "quotesanime",

async execute(m) {
 let { conn, text } = data

reply(lang.wait())
quotesAnime().then(async anu =>{
gam = await getBuffer(picak + 'quotes anime')
result = anu[Math.floor(Math.random(), anu.length)]
alpha.send5ButLoc(m.chat, `_${result.quotes}_\n\nBy *'${result.karakter}'*, ${result.anime}\n\n*_- ${result.up_at}_*` , '©' + ownername, gam, [{"quickReplyButton": {"displayText": "Next Quotes","id": 'quotesanime'}}], {quoted:m})
   })
 }
 }