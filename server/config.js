const dotenv = require('dotenv');
dotenv.config();
module.exports.KEY = {
    apiKey: process.env.UNSPLASH_API_KEY,
};