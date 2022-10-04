const colors = require('colors')

const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./helpers/yargs')

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
  .then((archivo) => {
    console.log(`Se creo el archivo ${archivo.red}`.red)
  })
  .catch((error) => error)
