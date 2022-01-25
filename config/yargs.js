const argv = require('yargs')
        .option({
            'b': {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Número base a multiplicar'
            },
            'l': {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'
            },
            'h': {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'Límite de resultados'
            }
        })
        .check((argv, options) => {
            if ( isNaN (argv.b)){
                throw 'La base tiene que ser un número';
            }else if( isNaN(argv.h) ){
                throw 'El limite tiene que ser un número'
            }
            return true;
        }
        
        )
        .argv;


module.exports= argv;