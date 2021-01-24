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


let userArray = localStorage.getItem('user') == null ? [] : JSON.parse(localStorage.getItem('user'));

function submit_register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    let user = { username: username, password: password, email: email }
    console.log(user)
    if (!userArray.filter(user => user.username == username).length) {
        userArray.push(user)
        localStorage.setItem('user', JSON.stringify(userArray));
    } else {
        alert("user Repetido")
    }
}

function submit_login() {

    var login_name = document.getElementById('login_name').value;
    var login_password = document.getElementById('login_password').value;

    if (userArray.filter(user => user.username == login_name)[0].username == login_name && userArray.filter(user => user.username == login_name)[0].password == login_password) {
        alert('You are loged in.');
        localStorage.setItem('loggedUser', JSON.stringify(userArray.filter(user => user.username == login_name)[0].username));
        window.location.href = "/Trabalho_TW-master/index.html"
    }
    else {
        alert("error");

    }
}

document.querySelectorAll(".voltar").addEventListener("click", function (event) {
    window.location.href = "/Trabalho_TW-master/index.html"
})
document.getElementById("register").addEventListener("click", function (event) {
    event.preventDefault()
});

document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault()
});
