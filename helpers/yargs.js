const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base en la que se basaran las multiplicaciones',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Quieres listar si o no la tabla de multiplicar',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta que número vas a multiplicar',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser un número estrictamente'
    }

    if (isNaN(argv.h)) {
      throw "La variable 'hasta' debe ser un número estrictamente"
    }

    return true
  }).argv

module.exports = argv
