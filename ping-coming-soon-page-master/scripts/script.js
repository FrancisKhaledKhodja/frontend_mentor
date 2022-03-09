const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let button = document.querySelector(".send--email--button");
let email = document.querySelector("#email");

function verifyEmail(element) {
    if (re.test(element.value) == false) {
        element.classList.add("error");
        element.parentElement.querySelector(".message--error").classList.add("error");
    } else {
        element.classList.remove("error");
        element.parentElement.querySelector(".message--error").classList.remove("error");
    };
}

button.addEventListener("click", function(event){
    event.preventDefault();
    verifyEmail(email);
});

