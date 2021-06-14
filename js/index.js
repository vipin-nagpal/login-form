
// user name validation js 
function validation() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;


    var usercheck = /^[A-za-z. ]{3,30}$/;
    var passcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/;


    // user validation 
    if (user == "") {
        document.getElementById("message").innerHTML = "*please fill username"
        return false;
    }
    if (user.length < 3) {
        document.getElementById("message").innerHTML = "*username must be 3 character"
        return false;
    }
    if (user.length > 30) {
        document.getElementById("message").innerHTML = "*username must be less than 20 character"
        return false;
    }
    if (usercheck.test(user)) {
        document.getElementById("message").innerHTML = ""
    }
    else {
        document.getElementById("message").innerHTML = "*please enter a valid username"
        return false;
    }
    //  password validation 
    if (pass == "") {
        document.getElementById("message1").innerHTML = "*please fill password"
        return false; ``
    }
    if (pass.length < 8) {
        document.getElementById("message1").innerHTML = "*password is too short (minimum is 8 character)"
        return false; ``
    }

    if (passcheck.test(pass)) {
        document.getElementById("message1").innerHTML = ""
    }
    else {
        document.getElementById("message1").innerHTML = "*Your password must be contain at least one number and have a mixture of uppercase and lowercase letters."
        return false;
    }



}

function validation1() {
    var email = document.getElementById("email").value;

    var emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //    email validation 
    if (email == "") {
        document.getElementById("message2").innerHTML = "*please fill email"
        return false;

    }
    if (email.length < 3) {
        document.getElementById("message2").innerHTML = "*email must be 3 character"
        return false;
    }
    if (email.length > 30) {
        document.getElementById("message2").innerHTML = "*email must be less than 30 character"
        return false;
    }
    if (emailcheck.test(email)) {
        document.getElementById("message2").innerHTML = ""
    }
    else {
        document.getElementById("message2").innerHTML = "*email is invalid"
        return false;
    }
}

// show password js 
var show = document.getElementById("show")
show.addEventListener('click', fn1)
function fn1(event) {
    var pass = document.getElementById("pass");
    if (pass.type === "password") {
        pass.type = "text"
    }
    else {
        pass.type = "password"
    }
}

// reset button js 
var reset = document.getElementById("reset")

reset.addEventListener('click', fn)
function fn(event) {
    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
}

