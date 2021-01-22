/*slide button login-registo*/

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

<<<<<<< HEAD
    function register() {
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
    }
    function login() {
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0";
    }


/*butão register*/

function submit_register(){
    var user = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var pass2 = document.getElementById("password2").value;
    var pass = pass2;
    if (user =="" || email =="" || pass != pass2){
        alert("Preencha os campos corretamente")
    }else{
        alert("Conta criada com sucesso")
    }
}


/*butão login*/

function submit_login(){
    var nome = document.getElementById("login_name").value;
    var password = document.getElementById("login_password").value;
    if (nome ==""){
        alert("Introduza um username valido")
    }else if (password ==""){
        alert("Introduza uma password válida")
    
    }else{
        var log_submit = document.getElementById("username");
        log_submit.innerHTML = alert("Bem vindo " + nome);
    }
       
=======
function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}


/*botão register*/
var user
var mail
var pass
var pass2

function submit_register() {

    user = document.querySelector("#username").value
    mail = document.querySelector("#email").value;
    pass = document.querySelector("#password").value;
    pass2 = document.querySelector("#password2").value;

    if (user == "") {
        alert("Nome de utilizador invalido")
    } else if (mail == "") {
        alert("E-mail inexistente")
    } else if (pass == "") {
        alert("Password inexistente")
    } else if (pass2 == "" || pass2 != pass) {
        alert("As duas password's não são iguais")
    } else {
        alert("Conta criada")
    }
}
//estás linhas de codigo impedem de a pagina não dar refresh, porque não estamos a guardar os dados do login em lado nenhum 
document.getElementById("register").addEventListener("click", function (event) {
    event.preventDefault()
});

/*botão login*/
var nome
var password

function submit_login() {

    nome = document.querySelector("#login_name").value;
    password = document.querySelector("#login_password").value;

    if (nome == "" || nome != user) {
        alert("Username não existe");
    } else if (password == "" || password != pass) {
        alert("Password errada");
    } else {
        var log_submit = document.getElementById(nome);
        log_submit.innerHTML = alert("Bem vindo " + nome);
    }
>>>>>>> 2eca932ef5eee15fc66d26fbcd6ff9d6bb5d3926
}