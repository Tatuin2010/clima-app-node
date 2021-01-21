const axios = require('axios');


const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=37d7dbb898b2d5e1142ad3714977ee7d&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}