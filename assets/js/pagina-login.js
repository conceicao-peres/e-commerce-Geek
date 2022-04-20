var form = document.getElementById('formularioLogin')
var email = document.getElementById('email')
var senha = document.getElementById('senha')

form.addEventListener('submit', function(e) {
    if(email.value == "adm@gmail.com" && senha.value == "adm123"){
        window.location.href="./pagina-adm.html"
    }else{
        alert("Digite um usuário e senha nválidos")
    }
    e.preventDefault();
})