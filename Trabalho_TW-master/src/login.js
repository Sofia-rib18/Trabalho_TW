/*slide button login-registo*/

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

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
<<<<<<< HEAD


=======
    
>>>>>>> 2eca932ef5eee15fc66d26fbcd6ff9d6bb5d3926
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

<<<<<<< HEAD

=======
>>>>>>> 2eca932ef5eee15fc66d26fbcd6ff9d6bb5d3926
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
       
}