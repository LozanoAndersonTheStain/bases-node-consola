const fs = require('fs')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let tabla = ''
    let tablaArchivo = ''

    for (i = 1; i <= hasta; i++) {
      tabla += `${base.toString().blue} x ${i.toString().blue} = ${base * i}\n`
      tablaArchivo += `${base} x ${i} = ${base * i}\n`
    }

    if (listar) {
      console.log('----------------------'.brightRed)
      console.log('Tabla del'.cyan, base)
      console.log('----------------------'.brightRed)

      console.log(tabla)
    }

    const archivo = `tabla-${base}.txt`

    fs.writeFile(`./tablas/${archivo}`, tablaArchivo, (err) => {
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
