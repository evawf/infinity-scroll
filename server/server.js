if (process.env.Node_ENV !== "production") {
    require('dotenv').config();
}

const Unsplash_apiKey = process.env.UNSPLASH_API_KEY;

const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.json());

const port = 8081;
app.listen(port, function() {
    console.log(`App is running on port ${port}`);
})

app.get('/', function(req, res) {
    res.sendFile('dist/index.html', { root: __dirname });
})

app.post('/', getPhotos);
async function getPhotos(req, res) {
    const photos = req.body.photos;
}

// Fetch Unsplash API Data
const getUnsplashPhotos = async () => {
    const baseURL = "https://api.unsplash.com";
    const subURL = "/photos/random/?client_id=${apiKey}&count=${count}"
}