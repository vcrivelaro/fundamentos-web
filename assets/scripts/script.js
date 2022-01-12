let nome = window.document.getElementById('nome')

function mostraValor(){
    const limite = 30
    let restante = nome.value.length
    let vr = window.document.getElementById('vr')

    if(restante < 30){

        vr.innerHTML = `Ainda faltam ${limite - restante} caracteres restantes.`
    }
}