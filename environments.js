const { config } = require('dotenv');
config();

const envirionments = {
    botToken: process.env.BOT_TOKEN,
   
    openAiSecret: process.env.OPENAI_SECRET,
    // openAiTemperature: Number(process.env.OPENAI_TEMPERATURE),
    // openAiMaxTokens: Number(process.env.OPENAI_MAX_TOKENS),
    
    awsApiKey: process.env.AWS_API_KEY,
    awsApiSecret: process.env.AWS_API_SECRET,
    awsRegion: process.env.AWS_REGION,
    awsBucket: process.env.AWS_BUCKET,

    mongoDBUser: process.env.MONGODB_USER,
    mongoDBPassword: process.env.MONGODB_PASSWORD,
    mongoDBHost: process.env.MONGODB_HOST,
    // mongoDBPort: process.env.MONGODB_PORT,
    mongoDBDatabase: process.env.MONGODB_DATABASE,
    // mongoDBCollection: process.env.MONGODB_COLLECTION,
}

module.exports = { envirionments }

