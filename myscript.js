alert("hello");
//validation code for input



let email = document.forms['form']['email']
let pass = document.forms['form']['pass']


const email_error = document.getElementById("email_error")
const password_error = document.getElementById("password_error")

email.addEventListener('textinput', email_verify);
pass.addEventListener('textinput', password_verify);

function validation() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }

    if (pass.value.length < 6) {
        pass.style.border = "1px solid red";
        password_error.style.display = "block";
        pass.focus();
        return false;
    }
}
function email_verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid green";
        email_error.style.display = "none";
        return true;


    }
}

function password_verify() {
    if (pass.value.length >= 5) {
        pass.style.border = "1px solid green";
        pass_error.style.display = "none";
        return true;


    }


}