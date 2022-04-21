//Produtos
var produtoItem = document.getElementById("produto-item")
var  arrayItem = []
function desenharProdutos(){
    for (var i=0; i<produtos.length; i++){
        arrayItem.push('<div class="item" id="item">')
        arrayItem.push(produtos[i].img)
        arrayItem.push(produtos[i].produto)
        arrayItem.push(produtos[i].preco)
        arrayItem.push('<a href="../html/pagina-produto.html" id="link"> Ver Produto </a>')
        arrayItem.push('</div>')
    }
    produtoItem.innerHTML=arrayItem
}


//Consoles
var consoleItem = document.getElementById("console-item")
var arrayItemConsole = []
function desenharConsole(){
    for (var i=0; i<consoles.length; i++){
        arrayItemConsole.push('<div class="item">')
        arrayItemConsole.push(consoles[i].img)
        arrayItemConsole.push(consoles[i].produto)
        arrayItemConsole.push(consoles[i].preco)
        arrayItemConsole.push('<a href="">' + produtos[i].link + '</a>')        
        arrayItemConsole.push('</div>')
    } 
    consoleItem.innerHTML=arrayItemConsole
}

//Diversos
var diversosItem = document.getElementById("diversos-item")
var  arrayItemDiversos = []
function desenharDiversos(){
    for (var i=0; i<diversos.length; i++){
        arrayItemDiversos.push('<div class="item">')
        arrayItemDiversos.push(diversos[i].img)
        arrayItemDiversos.push(diversos[i].produto)
        arrayItemDiversos.push(diversos[i].preco)
        arrayItemDiversos.push('<a href="">' + produtos[i].link + '</a>')
        arrayItemDiversos.push('</div>')
    } 
    diversosItem.innerHTML=arrayItemDiversos
}

desenharProdutos()
desenharConsole()
desenharDiversos()