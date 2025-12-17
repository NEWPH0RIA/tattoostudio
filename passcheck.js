const pass = document.querySelector('.auth-pass');
const passRepeat = document.querySelector('.auth-pass-repeat');
const error = document.querySelector('.error');
const button = document.querySelector('.auth-sign-in');

function passwordCheck(){
error.textContent = "";

    if (pass.value != passRepeat.value){
        error.textContent = "Пароли не совпадают!";
        return;
    }
}

button.addEventListener('click', passwordCheck);