const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const emailButton = document.querySelector("#email--button");
let inputEmail = document.querySelector("#email");
let emailTextInvalid = document.querySelector(".email--text--invalid");
let emailIconError = document.querySelector(".email--icon--error");

function verifyEmail() {
    if (re.test(inputEmail.value) == false) {
        inputEmail.classList.add("invalid");
        emailTextInvalid.classList.add("invalid");
        emailIconError.classList.add("invalid");
    } else {
        inputEmail.classList.remove("invalid");
        emailTextInvalid.classList.remove("invalid");
        emailIconError.classList.remove("invalid");
    };
}

emailButton.addEventListener("click", verifyEmail);
