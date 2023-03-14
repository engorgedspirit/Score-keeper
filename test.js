var sel = document.querySelector("#sel");
var maxScore = 3;
var gameover = 0;
var score1 = 0,
    score2 = 0;
var txt1 = document.querySelector("#no1");
var txt2 = document.querySelector("#no2");
const bt1 = document.querySelector("#pl1");
const bt2 = document.querySelector("#pl2");
const reset = document.querySelector("#reset");
sel.addEventListener("change", function(evt) {
    maxScore = parseInt(this.value);
})
bt1.addEventListener("click", () => {
    if (!gameover) {
        score1++;
        txt1.textContent = `${parseInt(score1)}`;
    }
    if (score1 == maxScore) {
        gameover = 1;
        gameOver();
    }
});
bt2.addEventListener("click", () => {
    if (!gameover) {
        score2++;
        txt2.textContent = `${parseInt(score2)}`;
    }
    if (score2 == maxScore) {
        gameover = 1;
        gameOver();
    }
});

function gameOver() {
    bt1.classList.add("gmover");
    bt2.classList.add("gmover");
}
reset.addEventListener("click", () => {
    score1 = score2 = 0;
    gameover = 0;
    txt1.textContent = '0';
    txt2.textContent = '0';
})