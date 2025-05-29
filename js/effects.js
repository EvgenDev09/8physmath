let curPack = 0, curExtended = false;

function loadEffects(pack=0, extended=false) {
    let effectsSection = document.getElementById("effects-section");
    while (effectsSection.lastElementChild) {
        effectsSection.lastElementChild.remove();
    }

    let neededCards = Object.values(cards)[pack].cards;
    let packName = Object.values(cards)[pack].name;
    let extendedButton = document.getElementById("extended-button");
    if ("extended" in Object.values(cards)[pack]) {
        extendedButton.style.display = "";
        if (extended) {
            neededCards = Object.values(cards)[pack].extended;
            packName += " Extended";
        }
    } else {
        extendedButton.style.display = "none";
    }
    document.getElementById("pack-name").innerText = packName;
    for (const [key, value] of Object.entries(neededCards)) {
        effectsSection.insertAdjacentHTML('beforeend',
            `<div class="effect">
                <div class="effect-symbol">${value.symbol}</div>
                <div class="effect-text">
                    <p>${value.name.toUpperCase()}</p>
                    <p>${value.description}</p>
                </div>
            </div>`
        );
    }

    curPack = pack;
    curExtended = extended;
}

loadEffects();

function nextPack(event) {
    curPack = (curPack + 1) % Object.keys(cards).length;
    loadEffects(curPack, curExtended);
}

function changeExtended(event) {
    curExtended = !curExtended;
    if (curExtended) {
        event.target.classList.add("main-button-active");
    } else {
        event.target.classList.remove("main-button-active");
    }
    loadEffects(curPack, curExtended);
}