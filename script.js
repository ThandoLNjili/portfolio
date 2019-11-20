function getInput() {
    // e.preventDefault();
    var first = document.getElementById('firstname').value;
    var last = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    console.log(first, last, email, subject, message);
}