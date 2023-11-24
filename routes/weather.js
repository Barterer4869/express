var express = require('express');
var router = express.Router();
const request = require('request');

// WeatherMap Parameters（大阪梅田）
const latitude = '34.7055';
const longitude = '135.4983';
const language = 'ja';
const apiKey = 'APIKEY';

// WeatherMap Base + Query 
const url = `https://api.openweathermap.org/data/2.5/weather?`
const param = `lat=${latitude}&lon=${longitude}&lang=${language}&appid=${apiKey}`;

router.get('/', async (req, res) => {
    request(url + param, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.json(data);
        }
    });
})

module.exports = router;
