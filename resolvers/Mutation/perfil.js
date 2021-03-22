const { perfis, proximoId } = require('../../data/db')
const { indiceListagem } = require('../../data/functions')

module.exports = {
  novoPerfil(_, { dados }) {
    const nomeExistente = perfis.some(u => u.nome === dados.nome)
    if (nomeExistente) {
      throw new Error('Nome já cadastrado.')
    }

    const novo = {
      id: proximoId(),
      ...dados
    }

    perfis.push(novo)
    return novo
  },
  excluirPerfil(_, { filtro }) {
    const i = indiceListagem(filtro, perfis)
    if (i < 0) return null
    const excluidos = perfis.splice(i, 1)
    return excluidos ? excluidos[0] : null
  },
  alterarPerfil(_, { dados, filtro }) {
    const i = indiceListagem(filtro, perfis)
    if (i < 0) return null
    
    const perfil = {
      ...perfis[i],
      ...dados
    }

    perfis.splice(i, 1, perfil)
    return perfil
  }
}