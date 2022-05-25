
var addTodosProdutos = () => {
    var lista = document.querySelector('[data-todos-produtos-list]')
    
    for (i = 0; i < produtos.length; i++){
        var item = document.createElement('li')
        item.classList.add('item')

        var titulo = document.createElement('h1')
        var img = document.createElement('h2')
        var preco = document.createElement('h3')
    
        var conteudoTitulo= produtos[i].produto
        var conteudoImg = produtos[i].imgP
        var conteudoPreco = produtos[i].preco
    
        titulo.innerHTML = conteudoTitulo
        img.innerHTML = conteudoImg
        preco.innerHTML = conteudoPreco
    
        item.appendChild(img)
        item.appendChild(titulo)
        item.appendChild(preco)
        item.appendChild(BotaoDeletar())


        lista.appendChild(item)
    }
}
addTodosProdutos()

var addTodosConsoles = () => {
    var lista = document.querySelector('[data-todos-consoles-list]')
    
    for (i = 0; i < consoles.length; i++){
        var item = document.createElement('li')
        item.classList.add('item')

        var titulo = document.createElement('h1')
        var img = document.createElement('h2')
        var preco = document.createElement('h3')
    
        var conteudoTitulo= consoles[i].produto
        var conteudoImg = consoles[i].imgP
        var conteudoPreco = consoles[i].preco
    
        titulo.innerHTML = conteudoTitulo
        img.innerHTML = conteudoImg
        preco.innerHTML = conteudoPreco
    
        item.appendChild(img)
        item.appendChild(titulo)
        item.appendChild(preco)
        item.appendChild(BotaoDeletar())

        lista.appendChild(item)
    }
}
addTodosConsoles()

var addTodosDiversos = () => {
    var lista = document.querySelector('[data-todos-diversos-list]')
    
    for (i = 0; i < diversos.length; i++){
        var item = document.createElement('li')
        item.classList.add('item')

        var titulo = document.createElement('h1')
        var img = document.createElement('h2')
        var preco = document.createElement('h3')
    
        var conteudoTitulo= diversos[i].produto
        var conteudoImg = diversos[i].imgP
        var conteudoPreco = diversos[i].preco
    
        titulo.innerHTML = conteudoTitulo
        img.innerHTML = conteudoImg
        preco.innerHTML = conteudoPreco
    
        item.appendChild(img)
        item.appendChild(titulo)
        item.appendChild(preco)
        item.appendChild(BotaoDeletar())

        lista.appendChild(item)
    }
}
addTodosDiversos()


function BotaoDeletar() {
    const botao = document.createElement('button')
    botao.classList.add('deletar-produto-button')
    botao.innerText = '🗑'
    botao.addEventListener('click', deletar)
    return botao
}

function deletar(evento) {
    const botaoDeletar = evento.target
    const deleta = botaoDeletar.parentElement
    deleta.remove()
}