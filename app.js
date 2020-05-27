/**
 *  IMPORTAR ARCHIVOS DE NUESTRO PROYECTO
 * **/

const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, ` ${ archivo}`.red))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}




// RECIBIR INFORMACION DESDE LINEA DE COMANDO
// console.log(process); PUEDES VER TODO EL PROCESO DE LA PC
// console.log(process.argv); PUEDES VER LA UBICACION DE NODE Y EL ARCHIVO QUE SE ESTA CORRIENDO
// console.log(process.argv);

// let argv2 = process.argv;

// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];