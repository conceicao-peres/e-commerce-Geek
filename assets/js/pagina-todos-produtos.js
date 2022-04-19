//Produtos
var produtoItem = document.getElementById("todos-produtos-item")
var  arrayItem = []
function desenharProdutos(){
    for (var i=0; i<produtos.length; i++){
        arrayItem.push('<div class="item">')
        arrayItem.push(produtos[i].imgP)
        arrayItem.push(produtos[i].produto)
        arrayItem.push(produtos[i].preco)
        arrayItem.push('</div>')
    }
    produtoItem.innerHTML=arrayItem
}

//Consoles
var consoleItem = document.getElementById("todos-consoles-item")
var arrayItemConsole = []
function desenharConsole(){
    for (var i=0; i<consoles.length; i++){
        arrayItemConsole.push('<div class="item">')
        arrayItemConsole.push(consoles[i].imgP)
        arrayItemConsole.push(consoles[i].produto)
        arrayItemConsole.push(consoles[i].preco)
        arrayItemConsole.push('</div>')
    } 
    consoleItem.innerHTML=arrayItemConsole
}

//Diversos
var diversosItem = document.getElementById("todos-diversos-item")
var  arrayItemDiversos = []
function desenharDiversos(){
    for (var i=0; i<diversos.length; i++){
        arrayItemDiversos.push('<div class="item">')
        arrayItemDiversos.push(diversos[i].imgP)
        arrayItemDiversos.push(diversos[i].produto)
        arrayItemDiversos.push(diversos[i].preco)
        arrayItemDiversos.push('</div>')
    } 
    diversosItem.innerHTML=arrayItemDiversos
}

desenharProdutos()
desenharConsole()
desenharDiversos()