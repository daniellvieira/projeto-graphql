module.exports = {
  precoComDesconto(objeto) {
    if (objeto.desconto === undefined) {
      return (objeto.preco)
    }
    if (objeto.desconto > 1) {
      return 0.0
    }
    return objeto.preco *  (1 - objeto.desconto)
  }
}