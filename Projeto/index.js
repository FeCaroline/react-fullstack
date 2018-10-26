import React from 'react'
import ReactDOM from 'react-dom'
// import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import './index.css'




// const props = {url:'/conta', children: 'Criar uma conta'}
 const divisaoProjeto = document.getElementById('projeto')

const pagina = <Conta />

ReactDOM.render(pagina, divisaoProjeto)

// const linkCriarUmaConta = <a class="link" href="/conta">Ciar uma conta</a>
// const linkFazerLogin = <a class="link" href="/login">Fazer login</a>
//
// const formularioLogin = (
//   <form>
//   {[linkCriarUmaConta, linkFazerLogin]}
//   </form>
// )
//
// const divisaoProjeto = document.getElementById('projeto')
//
// // ReactDOM.render(elementReact, tagHtml) - tag virtual e tag real
// ReactDOM.render(formularioLogin, divisaoProjeto)


// const formularioLogin = document.createElement('form')
// const divisaoProjeto = document.getElementById('projeto')
// const fazerLogin = document.createElement('a')
// linkCriarUmaConta.className = "link"
// linkCriarUmaConta.href = "/conta"
// linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'))
//
//
// formularioLogin.appendChild(linkCriarUmaConta)
//
//
// // Criar Login
//
// fazerLogin.className = "link"
// fazerLogin.href = "/login"
// fazerLogin.appendChild(document.createTextNode('Fazer login'))
//
//
// formularioLogin.appendChild(fazerLogin)
//
// // formulario login
//
// formularioLogin.className = 'form'
// divisaoProjeto.appendChild(formularioLogin)
