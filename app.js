const { crearArchivo } = require('./helpers/multiplicar')

console.clear()

const base = 6

crearArchivo(base)
  .then((archivo) => {
    console.log(`Se creo el archivo ${archivo}`)
  })
  .catch((error) => error)