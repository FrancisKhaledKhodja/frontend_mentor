let iconShare = document.querySelector(".card_decription__contact__share");
let iconShare2 = document.querySelector(".card_decription__contact__share--2")
let share = document.querySelector(".card__description__share");

iconShare.addEventListener("click", function() {
    if (share.style.display === "") {
        share.style.display = "flex";
    } else {
        share.style.display = "";
    }
});

iconShare2.addEventListener("click", function() {
    share.style.display = "";
});