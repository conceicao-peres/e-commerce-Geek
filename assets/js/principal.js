

const data = new Date
monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")
document.getElementById("current_date").innerHTML = monName[data.getMonth()] + ' Promocional'

var addProdutos = () => { 
    var lista = document.querySelector('[data-produto-list]')
    
    for (i = 0; i < produtos.length; i++){
        var item = document.createElement('li')
        item.classList.add('item')

        var titulo = document.createElement('h1')
        var img = document.createElement('h2')
        var preco = document.createElement('h3')

        var conteudoTitulo= produtos[i].produto
        var conteudoImg = produtos[i].img
        var conteudoPreco = produtos[i].preco
    
        titulo.innerHTML = conteudoTitulo
        img.innerHTML = conteudoImg
        preco.innerHTML = conteudoPreco
    
        item.appendChild(img)
        item.appendChild(titulo)
        item.appendChild(preco)
        item.appendChild(BotaoVerProduto())

        lista.appendChild(item)

    }
}
addProdutos()

var addConsoles = () => {
    var lista = document.querySelector('[data-console-list]')

    for (i = 0; i < consoles.length; i++){
        var item = document.createElement('li')
        item.classList.add('item')

        var titulo = document.createElement('h1')
        var img = document.createElement('h2')
        var preco = document.createElement('h3')
    
        var conteudoTitulo= consoles[i].produto
        var conteudoImg = consoles[i].img
        var conteudoPreco = consoles[i].preco
    
        titulo.innerHTML = conteudoTitulo
        img.innerHTML = conteudoImg
        preco.innerHTML = conteudoPreco
    
        item.appendChild(img)
        item.appendChild(titulo)
        item.appendChild(preco)
        item.appendChild(BotaoVerProduto())


        lista.appendChild(item)
    }
}
addConsoles()

var addDiversos = () => {
    var lista = document.querySelector('[data-diversos-list]')

    for (i = 0; i < diversos.length; i++){
        var item = document.createElement('li')
        item.classList.add('item')

        var titulo = document.createElement('h1')
        var img = document.createElement('h2')
        var preco = document.createElement('h3')
    
        var conteudoTitulo= diversos[i].produto
        var conteudoImg = diversos[i].img
        var conteudoPreco = diversos[i].preco
    
        titulo.innerHTML = conteudoTitulo
        img.innerHTML = conteudoImg
        preco.innerHTML = conteudoPreco
    
        item.appendChild(img)
        item.appendChild(titulo)
        item.appendChild(preco)
        item.appendChild(BotaoVerProduto())

        lista.appendChild(item)
    }
}
addDiversos()

function BotaoVerProduto() {
    const botao = document.createElement('button')
    botao.classList.add('ver-produto-button')
    botao.innerText = 'Ver produto'
    botao.addEventListener('click', verProduto)
    return botao
}

function verProduto(evento) {
    const botaoVer = evento.target
    botaoVer.addEventListener('click', abrirModal)
}
