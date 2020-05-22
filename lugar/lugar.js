const axios = require('axios');

const getLugarLatLng = async(dir) => {
    //hay que escapar la cadena direccion: significa sustituir ciertos caracteres de la cadena, sobre todo para url seguras
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'a5792df29cmshc6de2c42b1ab5b1p13d2c7jsn0b8a2b879f6d' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    // .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!!!!!!', err);
    //     });

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}