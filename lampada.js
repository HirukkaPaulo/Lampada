var lamp = document.getElementById('ligada')

function ligar() {
    if (!estaQuebrada()){
    lamp.src = 'imagens/ligada.svg'}
}

function desligar() {
    if (!estaQuebrada()){
    lamp.src = 'imagens/desligada.svg'}
}

lamp.addEventListener('click',quebrar)
function quebrar(){
    lamp.src = 'imagens/quebrada.svg'
}

function estaQuebrada() {
    return lamp.src.indexOf('quebrada') > 1
}