if (process.env.Node_ENV !== "production") {
    require('dotenv').config();
}

const Unsplash_apiKey = process.env.UNSPLASH_API_KEY;
const count = 5;

const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
// const { response } = require('express');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('client'));
app.use(bodyParser.json());

const port = 8081;
app.listen(port, function() {
    console.log(`App is running on port ${port}`);
})

app.get('/', function(req, res) {
    res.sendFile('dist/index.html', { root: __dirname });
})

let photosArray = [];
app.post('/', getPhotos);
async function getPhotos(req, res) {
    let photosArray = await getUnsplashPhotos();
    console.log(photosArray);
    res.send(photosArray);
}

// Fetch Unsplash API Data
const getUnsplashPhotos = async () => {
    const baseURL = "https://api.unsplash.com";
    const subURL = "/photos/random/?client_id=" + Unsplash_apiKey + "&count=" + count;
    const url = baseURL + subURL;
    const res = await fetch(url) 
    try{
        const Data = await res.json();
        return Data;
    }
    catch(error){
        console.log('error', error);
    }
}