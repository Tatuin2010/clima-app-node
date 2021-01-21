const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodedUrl }.json?`,
        params: { 'access_token': 'pk.eyJ1IjoidGF0dWluIiwiYSI6ImNrazc1NWk5NjBhaHMyd28wcmI1cTZwM2EifQ.bdeSUwxJL0ckrZNUhbQ6vQ' }
    });

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lng = data.center[0];
    const lat = data.center[1];

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}