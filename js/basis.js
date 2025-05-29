function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}

let possibleCards = [];
for (const [key, value] of Object.entries(cards.classic.number[4])) {
    for (let i=0; i<value; i++) {
        possibleCards.push(key);
    }
}
shuffle(possibleCards);

let playerCards = [0, 11, 22, 33, 4, 39];
shuffle(playerCards);
let cardsExample = document.getElementsByClassName("basis-cards-example-card");
for (let i=0; i<6; i++) {
    cardsExample[i].children[0].textContent = cards.classic.cards[possibleCards[playerCards[i]]].name.toUpperCase();
    cardsExample[i].children[1].textContent = cards.classic.cards[possibleCards[playerCards[i]]].symbol;
}
document.getElementById("basis-card-example").textContent = cards.classic.cards[possibleCards[0]].symbol;

if (Math.random() <= 0.5) {
    let playersExample = document.getElementsByClassName("basis-players-example-player");
    playersExample[1].textContent = "▫️ Игрок 2";
    playersExample[2].textContent = "▫️ Вы";
    playersExample[5].textContent = "▫️ Игрок 2";
    playersExample[6].textContent = "▫️ Вы";
}

let playersCards = [];
for (let i=0; i<4; i++) {
    let curPlayerCards = [];
    for (let j=0; j<10; j++) {
        if (!isPlayable(possibleCards[i*10 + j], curPlayerCards) || Math.random() <= 0.2) {
            curPlayerCards.push("closed");
        } else {
            curPlayerCards.push(possibleCards[i*10 + j]);
        }
    }
    playersCards.push([countPoints(curPlayerCards), curPlayerCards]);
}
playersCards.sort(function(a, b) { return b[0] - a[0]; });
let endExample = document.getElementsByClassName("basis-end-example-player");
let medals = ["🥇", "🥈", "🥉", "▫️"];
let curMedal = 0;
for (let i=0; i<4; i++) {
    if (i == 0 || playersCards[i-1][0] > playersCards[i][0])
        curMedal = i;
    let cardStr = `${medals[curMedal]} ${(i == 0) ? "Вы" : "Игрок " + i}: `;
    playersCards[i][1].forEach(key => {
        if (key == "closed") 
            cardStr += "❌";
        else
            cardStr += cards.classic.cards[key].symbol;
    });
    cardStr += ` (${playersCards[i][0]})`;
    endExample[i].textContent = cardStr;
}

let cardsObj = document.getElementById("basis-cards-example");
function resizeWindow(event) {
    document.body.style.setProperty('--size-change', cardsObj.offsetWidth / 645.0);
}
resizeWindow();

window.onresize = resizeWindow;