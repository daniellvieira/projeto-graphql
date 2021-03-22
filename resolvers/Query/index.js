const usuario = require('./usuario')
const produto = require('./produto')
const perfil = require('./perfil')

module.exports = {
  ...usuario,
  ...produto,
  ...perfil  
}