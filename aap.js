
let btn = document.querySelector("button");
let options = document.querySelectorAll("options");

btn.addEventListener("click", btn_sayHello);
btn.addEventListener("click", opt_sayHello);
btn.addEventListener("click", navigateToGame);

function opt_sayHello() {
    console.log("Clicked me again");
}

function btn_sayHello() {
    console.log("Clicked me");
}

function navigateToGame() {
    const gameSelect = document.getElementById('game');
    const selectedGame = gameSelect.value;
            
    if (selectedGame) {
        window.location.href = selectedGame;
    } else {
        alert('Please select a game first!');
    }
}
