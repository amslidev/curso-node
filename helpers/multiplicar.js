const fs = require('fs');
const colors = require('colors');

const getTabla = ( numero, listar = false, hasta = 10,  callback ) => {

    return new Promise((resolve, reject) => {
        try {

            let salida = '';
            let consola = '';

            for(let i = 1; i <= hasta; i ++){
                salida += `${numero} ${'x' } ${i} ${'=' } ${numero * i} \n`;
                consola += `${numero} ${'x'.green } ${i} ${'='.red } ${numero * i} \n`;
            }

            if ( listar ){
                console.log(consola);
            } 


            let nombreArchivo = '';

            nombreArchivo = `tabla-${numero}.txt`;
            fs.writeFileSync('./salida/'+nombreArchivo, salida)
            resolve(colors.random(nombreArchivo));
        } catch (error) {
            reject(error)
        }
    });
}

module.exports = {
    getTabla
}