const usuarios = [{
  id: 1,
  nome: 'Daniel Vieira',
  email: 'danielfv@gmail.com',
  idade: 29,
  perfil_id: 1,
  status: 'ATIVO'
}, {
  id: 2,
  nome: 'Airton Vieira',
  email: 'airton@gmail.com',
  idade: 34,
  perfil_id: 2,
  status: 'INATIVO'
}, {
  id: 3,
  nome: 'Iorrana Pinto',
  email: 'iorrana@aaa.com',
  idade: 27,
  perfil_id: 1,
  status: 'BLOQUEADO'
}]

const perfis = [
  { id: 1, nome: 'Comum'},
  { id: 2, nome: 'Administrador' }
]

module.exports = { usuarios, perfis }