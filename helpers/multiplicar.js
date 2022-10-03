const fs = require('fs')

const crearArchivo = async (base = 5) => {
  try {
    console.log('----------------------')
    console.log('Tablas de multiplicar', base)
    console.log('----------------------')

    let tabla = ''

    for (i = 1; i <= 12; i++) {
      tabla += `${base} x ${i} = ${base * i}\n`
    }

    console.log(tabla)

    const archivo = `tabla-${base}.txt`

    fs.writeFile(archivo, tabla, (err) => {
      if (err) throw err
    })

    return archivo
  } catch (error) {
    throw error
  }
}

module.exports = {
  crearArchivo,
}
