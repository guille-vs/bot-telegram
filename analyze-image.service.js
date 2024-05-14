const fs = require("fs");
const os = require("os");
const path = require("path");
const fetch = require("node-fetch");
const { randomUUID } = require("crypto");

const { analyzeImage } = require('./openai.services');
const { saveReceiptInfo } = require("./mongodb");

async function analyzeImageService(ctx) {
    try {
        const photo = ctx.message.photo[ctx.message.photo.length - 1];

        const tempDir = os.tmpdir();
        const pathFile = path.join(tempDir, `/${photo.file_id}.jpg`);
        console.log(pathFile)
        const id = randomUUID();
        const filename = `${id}.jpg`;

        const file = await ctx.telegram.getFile(photo.file_id);

        const photoUrl = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${file.file_path}`;

        // crear la imagen en local, temporalmente
        const res = await fetch(photoUrl);
        const fileStream = await res.buffer()
        fs.writeFileSync(pathFile, fileStream);

        const {caption} = ctx.message

        let response = "No se ha reconocido el texto en la imagen";

        const {success, data_in_text, ...rest} = await analyzeImage(pathFile, caption)

        //todo const image_key = await saveFileInRepository(filename, path);
        receipt = {
            success,
            ...rest,
            image_key: 'image_key_123'
        }


        if (success) {
            await saveReceiptInfo({ id, ...receipt })
            response = `ID: ${id} ${data_in_text}`;
        }

        ctx.reply(response)
    } catch (error) {
        console.error({ error });
        ctx.reply("Ha ocurrido un error inesperado, por favor vuelve a intentar");
    } 

}
module.exports = {
    analyzeImageService
}