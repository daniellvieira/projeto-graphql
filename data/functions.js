function indiceListagem(filtro, listagem) {
  if (!filtro) return -1
  const { id, email, nome } = filtro
  if (id) {
    return listagem.findIndex(u => u.id === id)
  } else if (email) {
    return listagem.findIndex(u => u.email === email)
  } else if (nome) {
    return listagem.findIndex(u => u.nome === nome)
  }
  return -1
}

module.exports = {
  indiceListagem
}