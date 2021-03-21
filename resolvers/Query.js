const { usuarios, perfis } = require('../data/db')

module.exports = {
  ola() {
    return 'Bom dia!'
  },
  horaAtual() {
    return new Date()
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: 'Daniel Vieira',
      email: 'daniel@gmail.com',
      idade: 23,
      salario_real: 1234.56,
      vip: true
    }
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
  },
  usuarios() {
    return usuarios
  },
  // usuario(_, args) {
  usuario(_, { id }) {
    const sels = usuarios.filter(u => u.id === id)
    return sels ? sels[0] : null
  },
  perfis() {
    return perfis
  },
  perfil(_, args) {
    const sels = perfis.filter(p => p.id === args.id)
    return sels ? sels[0] : null
  }
}
