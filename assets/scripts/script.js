/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = window.document.querySelector ('#email')
let assunto = document.querySelector('#assunto')

nome.style.width='100%'
email.style.width='100%'

function mostraValor(){
    const limite = 30
    let restante = nome.value.length
    let vr = window.document.getElementById('vr')

    if(restante < 30){

        vr.innerHTML = `Ainda faltam ${limite - restante} caracteres restantes.`
    }
}

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3)
    {
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = 'red'
    }
    else
    {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
    }
}

function validaEmail(){
    let txtEmail= document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
    {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    }
    else
    {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = "green"
    }
}
