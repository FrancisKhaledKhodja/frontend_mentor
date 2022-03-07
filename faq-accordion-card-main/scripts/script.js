let text = document.querySelector(".faq__questions--answers--card__text")
console.log(text);

function addSelectedClassName(element) {
    let ulSelected = element.target.parentElement.parentElement;
    ["span.question", ".answer", ".icon--arrow"].forEach( element => {
        ulSelected.querySelectorAll(element).forEach( element => {
            element.classList.add("selected");
        });
    });
};

function removeSelectedClassName() {
    ["span.question", ".answer", ".icon--arrow"].forEach( element => {
        document.querySelectorAll(element).forEach( element => {
            element.classList.remove("selected");
        });
    });
};

let clickedElement = text.addEventListener("click", function(e) {
    if (e.target.classList.contains("question") && e.target.classList.contains("selected")) {
        console.log("Choice 1");
        removeSelectedClassName();
    } else if (e.target.classList.contains("question")) {
        console.log("Choice 2")
        removeSelectedClassName();
        addSelectedClassName(e);
    };
});
            