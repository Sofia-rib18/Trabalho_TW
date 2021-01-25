let messageArray = localStorage.getItem('message') == null ? [] : JSON.parse(localStorage.getItem('message'));

function submit_message() {
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;

    let message = { fname: fname, email: email, subject: subject }
    console.log(message)
    messageArray.push(message)
    localStorage.setItem('message', JSON.stringify(messageArray),);

}

