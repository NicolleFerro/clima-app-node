const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;

//console.log(argv.direccion);


const getInfo = async(direccion) => {


    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

    // let respuesta = await lugar.getLugarLatLng(direccion)
    //     .then(
    //         (respLug) => {
    //             return clima.getClima(respLug.lat, respLug.lng)
    //                 .then(respClima => `El clima de ${direccion} es de ${respClima}`)
    //                 .catch(`No se pudo determinar el clima de ${direccion}`);
    //         })
    //     .catch(`No se pudo determinar el clima de ${direccion}`);

    // return respuesta;

    // let respLug = await lugar.getLugarLatLng(direccion)
    //     .catch(`No se pudo determinar el clima de ${direccion}`);

    // return await clima.getClima(respLug.lat, respLug.lng)
    //     .then(respClima => `El clima de ${direccion} es de ${respClima}`)
    //     .catch(`No se pudo determinar el clima de ${direccion}`);

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)