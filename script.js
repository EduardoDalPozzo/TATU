function carregar() {
var mensagem = window.document.getElementeById('mensagem')
var imagem = window.document.getElementById('img1')
var data = new Date()
var hora = data.getHours()
mensagem.innerHTML = `Agora são ${hora} horas`
}