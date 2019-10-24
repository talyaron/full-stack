const fetch = require('node-fetch');

let url = 'http://api.openweathermap.org/data/2.5/weather?id=293788&APPID=9c72c68beca5025e3cc723b7e0045386'

fetch(url)
    .then(res => res.json())
    .then(json => {
        // console.log(json);
        console.log(`The temperatur in Ramat Gan is ${(json.main.temp-273).toFixed(1)} deg celesius!`)

    });

// getting after ? parmeters is described here: https://stackoverflow.com/questions/17007997/how-to-access-the-get-parameters-after-in-express
// example taken from this api: https://openweathermap.org/current
