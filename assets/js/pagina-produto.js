var imgProduto = document.getElementById("principal__img")
var tituloProduto = document.getElementById("infos__tituloProduto")
var precoProduto = document.getElementById("infos__precooProduto")
var descricaoProduto = document.getElementById("infos__descricaoProduto")

for(var i=0; i<produtos.length; i++){
    imgProduto.innerHTML = produtos[i].img
    tituloProduto.innerHTML = produtos[i].produto
    precoProduto.innerHTML = produtos[i].preco
}


