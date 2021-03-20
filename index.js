const { ApolloServer, gql } = require('apollo-server')
const { ImportSchema } = require('graphql-import')

const usuarios = [{
  id: 1,
  nome: 'Daniel Vieira',
  email: 'danielfv@gmail.com',
  idade: 29,
  perfil_id: 1
}, {
  id: 2,
  nome: 'Airton Vieira',
  email: 'airton@gmail.com',
  idade: 34,
  perfil_id: 2
}, {
  id: 3,
  nome: 'Iorrana Pinto',
  email: 'iorrana@aaa.com',
  idade: 27,
  perfil_id: 1
}]

const perfis = [
  { id: 1, nome: 'Comum'},
  { id: 2, nome: 'Administrador' }
]

const resolvers = {
  Produto: {
    precoComDesconto(objeto) {
      if (objeto.desconto === undefined) {
        return (objeto.preco)
      }
      if (objeto.desconto > 1) {
        return 0.0
      }
      return objeto.preco *  (1 - objeto.desconto)
    }
  },
  Usuario: {
    salario(objeto) {
      return objeto.salario_real
    },
    perfil(usuario) {
      const sels = perfis.filter(p => p.id === usuario.perfil_id)
      return sels ? sels[0] : null
    }
  },
  Query: {
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
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Excecutando em ${url}`)
})
