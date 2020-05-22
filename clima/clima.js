const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c6ec6c44e0ffbb569115009464485a07&units=metric`);

    if (resp.data.main.length === 0) {
        throw new Error(`No hay resultados para lat: ${lat} y long: ${lng}`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}