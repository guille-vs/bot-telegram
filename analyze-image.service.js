const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

const {analyzeImage} = require('./openai.services')

 async function analyzeImageService(ctx){
    try {
        const photo = ctx.message.photo[ctx.message.photo.length - 1];
    const pathFile = path.join(__dirname,`/temp/${photo.file_id}.jpg`);
    const id = randomUUID();
    //* const filename = `${id}.jpg`;

    const file = await ctx.telegram.getFile(photo.file_id);

    const photoUrl = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${file.file_path}`;

    // crear la imagen en local, temporalmente
    const res = await fetch(photoUrl);
    const fileStream = await res.buffer()
    fs.writeFileSync(pathFile, fileStream);

    // analizar imagen
    const json = await analyzeImage(pathFile)

    console.log(json)

    // fs.writeFileSync(path.join(__dirname,'/invoice.json'), JSON.stringify(json, null, 2))

    ctx.reply('archivo creado')
    } catch (error) {
        console.error({ error });
        ctx.reply("Ha ocurrido un error inesperado, por favor vuelve a intentar");
    }
    
}
module.exports = {
    analyzeImageService
}