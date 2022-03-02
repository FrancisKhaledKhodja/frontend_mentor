let text = document.querySelector(".faq__questions--answers--card__text")

let clickedElement = text.addEventListener("click", function(e) {
    if (e.target.classList.contains("question")) {
        // Remove selected className from questions and answers
        ["span.question", ".answer", ".icon--arrow"].forEach( element => {
            document.querySelectorAll(element).forEach( element => {
                element.classList.remove("selected");
            });
        });

        // Add selected className on the question and answer selected
        let ulSelected = e.target.parentElement.parentElement;
        ["span.question", ".answer", ".icon--arrow"].forEach( element => {
            ulSelected.querySelectorAll(element).forEach( element => {
                element.classList.add("selected");
            });
        });
    };
});