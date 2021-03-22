module.exports = {
  ola() {
    return 'Bom dia!'
  },
  horaAtual() {
    return new Date()
  },
  precoEmDestaque() {
    return {
      nome: 'Notebook Gamer',
      preco: 5000,
      desconto: 0.15
    }
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b
    return Array(6).fill(0)
      .map(() => parseInt(Math.random()*60 + 1))
      .sort(crescente)
  }
}
