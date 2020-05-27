/**
 *  IMPORTAR ARCHIVOS DE NUESTRO PROYECTO
 * **/

// Requireds
const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, litime = 10) => {

    console.log('==========================');
    console.log(` Tabla de ${ base } `.green);
    console.log('==========================');


    for (let i = 1; i <= litime; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}




let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número!`);
            return;
        }


        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}