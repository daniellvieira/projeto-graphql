const { perfis } = require('../../data/db')

module.exports = {
  perfis() {
    return perfis
  },
  perfil(_, args) {
    const sels = perfis.filter(p => p.id === args.id)
    return sels ? sels[0] : null
  }
}
