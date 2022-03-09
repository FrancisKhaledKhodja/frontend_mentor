const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const tryButton = document.querySelector(".form--and--buttons__form__button--try--2");
let firstName = document.querySelector("#first_name");
let lastName = document.querySelector("#last_name");
let email = document.querySelector("#email");
let password = document.querySelector("#password")

function verifyText(element) {
    console.log(element);
    if (element.value === "") {
        element.classList.add("error");
        element.parentElement.querySelector(".icon--error").classList.add("error");
        element.parentElement.querySelector(".message--error").classList.add("error");
    } else {
        element.classList.remove("error");
        element.parentElement.querySelector(".icon--error").classList.remove("error");
        element.parentElement.querySelector(".message--error").classList.remove("error");
    }
}

function verifyEmail(element) {
    if (re.test(element.value) == false) {
        element.classList.add("error");
        element.parentElement.querySelector(".icon--error").classList.add("error");
        element.parentElement.querySelector(".message--error").classList.add("error");
    } else {
        element.classList.remove("error");
        element.parentElement.querySelector(".icon--error").classList.remove("error");
        element.parentElement.querySelector(".message--error").classList.remove("error");
    };
}

function verifyInputs() {
    [firstName, lastName, password].forEach(verifyText);
    verifyEmail(email);
}

tryButton.addEventListener("click", verifyInputs);
