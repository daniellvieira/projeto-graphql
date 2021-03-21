let id = 1
function proximoId() {
  return id ++
}

const usuarios = [{
  id: proximoId(),
  nome: 'Daniel Vieira',
  email: 'danielfv@gmail.com',
  idade: 29,
  perfil_id: 1,
  status: 'ATIVO'
}, {
  id: proximoId(),
  nome: 'Airton Vieira',
  email: 'airton@gmail.com',
  idade: 34,
  perfil_id: 2,
  status: 'INATIVO'
}, {
  id: proximoId(),
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

module.exports = {
  usuarios,
  perfis,
  proximoId
}