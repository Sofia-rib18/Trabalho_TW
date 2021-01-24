
let logged = localStorage.getItem('loggedUser')
let users = JSON.parse(localStorage.getItem('user'))
let userToEdit = JSON.parse(localStorage.getItem('user')).filter(user => user.username)[0];
document.getElementById('username').value = userToEdit.username;
document.getElementById('password').value = userToEdit.password;
document.getElementById('email').value = userToEdit.email;

function submit_acc() {
    let username1 = document.getElementById('username').value;
    let password1 = document.getElementById('password').value;
    let email1 = document.getElementById('email').value;
    let newData = { username: username1, password: password1, email: email1 }
    users = users.map(user => user.username == logged ? "a" : user)
    console.log(logged)
    console.log(users.map(user => user.username == logged ? newData : user))
    localStorage.setItem('user', JSON.stringify(users))


}
document.getElementById("edit").addEventListener("click", function (event) {
    event.preventDefault()
});

