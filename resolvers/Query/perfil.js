const { perfis } = require('../../data/db')
const { indiceListagem } = require('../../data/functions')

module.exports = {
  perfis() {
    return perfis
  },
  perfil(_, { filtro }) {
    const i = indiceListagem(filtro, perfis)
    if (i < 0) return null

    return perfis[i]
  }
}
