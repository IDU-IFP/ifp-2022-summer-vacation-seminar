const backCard = document.querySelector(".back");
const frontCard = document.querySelector(".front h1:first-child");

function clickCard(){
    alert(frontCard.innerText);
}

backCard.addEventListener("click", clickCard);
