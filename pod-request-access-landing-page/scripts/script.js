let email = document.querySelector(".site--presentation__email");
let button = document.querySelector(".site--presentation__button--email");

const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function verifyEmail(element) {
    if (re.test(element.value) == false) {
        element.classList.add("error");
        element.parentElement.querySelector(".error--message").classList.add("error");
    } else {
        element.classList.remove("error");
        element.parentElement.querySelector(".error--message").classList.remove("error");
    };
}

button.addEventListener("click", function(event){
    event.preventDefault();
    verifyEmail(email);
});

