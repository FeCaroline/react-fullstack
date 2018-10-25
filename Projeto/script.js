// Criar uma conta
const linkCriarUmaConta = document.createElement('a')
const formularioLogin = document.createElement('form')
const divisaoProjeto = document.getElementById('projeto')
const fazerLogin = document.createElement('a')
linkCriarUmaConta.className = "link"
linkCriarUmaConta.href = "/conta"
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'))


formularioLogin.appendChild(linkCriarUmaConta)


// Criar Login

fazerLogin.className = "link"
fazerLogin.href = "/login"
fazerLogin.appendChild(document.createTextNode('Fazer login'))


formularioLogin.appendChild(fazerLogin)

// formulario login

formularioLogin.className = 'form'
divisaoProjeto.appendChild(formularioLogin)
