let depCount = 0;
let casinoSection = document.getElementById('casino-section');
let slots = document.getElementsByClassName('casino-slot');
let depButton = document.getElementById('dep-button');
let casinoWin = document.getElementById('casino-win');
let casinoScore = document.getElementById('casino-score');
let cards = [0, 0, 0];
let inProgress = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randint(num) {
    return Math.floor(Math.random() * num);
}

function revealScore() {
    let points = 0;
    let enumcards = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let cardtypes = 0;
    cards.forEach(c => {
        if (enumcards[c] == 0)
            cardtypes += 1;
        enumcards[c] += 1;
    });
    points += enumcards[11]*7;
    alaksiej_points = [0, 4, 32, 100];
    points += alaksiej_points[enumcards[0]];
    points += enumcards[1]*(9 + enumcards[2]*14);
    points += enumcards[2]*15;
    if (enumcards[2] == 2)
        points += enumcards[2] * 10;
    points += enumcards[7] * (9 * (enumcards[1] + enumcards[4] + enumcards[5]) + enumcards[11] * 19);
    if (enumcards[1] > 0)
        points += enumcards[7] * 17;
    points += enumcards[4] * (8 + enumcards[3] * 11);
    if (enumcards[11] > 0)
        points += enumcards[4]*12;
    points += enumcards[6] * (13 + enumcards[3] * 9);
    if (enumcards[6] == 1)
        points += enumcards[6]*5;
    olympiad_points = [0, 6, 30, 50];
    points += olympiad_points[enumcards[3]];
    points += enumcards[5] * (15 + enumcards[4] * 13);
    points += enumcards[8] * (16 + enumcards[5] * 15);
    points += enumcards[9] * (4 + cardtypes * 7 - enumcards[0] * 20);
    points += enumcards[10] * (14 + (enumcards[9] + enumcards[6]) * 15 - enumcards[0] * 20);

    casinoScore.innerText = "SCORE: " + points;
    if (points < 52) {
        casinoWin.innerText = "TRY AGAIN";
        casinoWin.style.color = "red";
    } else if (points < 65) {
        casinoWin.innerText = "BIG WIN";
        casinoWin.style.color = "lawngreen";
    } else if (points < 100) {
        casinoWin.innerText = "MEGA WIN";
        casinoWin.style.color = "aqua";
    } else {
        casinoWin.innerText = "EPIC WIN";
        casinoWin.style.color = "violet";
    }
}

function activateDep() {
    inProgress = false;
    depButton.classList.remove("progress-button");
}

function dep(event) {
    if (inProgress) return;
    inProgress = true;
    depButton.classList.add("progress-button");
    casinoWin.innerText = "8 PHYSMATHS";
    casinoWin.style.color = "gold";
    casinoScore.innerText = "SCORE: ???";
    depCount += 1;
    cards = [randint(12), randint(12), randint(12)];
    sleep(8000).then(() => { revealScore(); });
    sleep(10000).then(() => { activateDep(); });
    slots[0].style.setProperty('--target-slot', depCount*60 + cards[0]);
    slots[1].style.setProperty('--target-slot', depCount*48 + cards[1]);
    slots[2].style.setProperty('--target-slot', depCount*36 + cards[2]);
}

function resizeWindow(event) {
    casinoSection.style.setProperty('--size-change', casinoSection.offsetWidth / 515.5);
}
resizeWindow();

window.onresize = resizeWindow;