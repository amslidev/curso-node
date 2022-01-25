//const { argv, options } = require('yargs');
const { getTabla } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');

console.clear();

//const [,, argv3 = 'base=5'] = process.argv;
//const [, base = 5] = argv3.split('=')

//console.log( argv )

//console.log('base: yargs', argv.base);


getTabla( argv.b, argv.l, argv.h )
    .then(nombre => console.log(nombre, 'creado correctamente'))
    .catch(err => console.log(err));