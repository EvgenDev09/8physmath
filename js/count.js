let curPack = 0;

function loadEffects(pack=0) {
    let countSection = document.getElementById("count-section");
    while (countSection.lastElementChild) {
        countSection.lastElementChild.remove();
    }
    countSection.insertAdjacentHTML('beforeend',
        `<div class="count-corner">Карты</div>
        <div class="count-corner" id="count-players">Количество игроков</div>`
    );

    document.getElementById("pack-name").innerText = Object.values(cards)[pack].name;
    let neededCards = Object.values(cards)[pack].cards;
    let playerMin = 3, playerExtendedMin = 7, playerMax = playerExtendedMin;
    if ("extended" in Object.values(cards)[pack]) {
        neededCards = Object.values(cards)[pack].extended;
        playerMax = Object.values(cards)[pack].number.length;
    }
    countSection.style.gridTemplateColumns = `auto repeat(${playerMax-playerMin}, 1fr)`;
    document.getElementById("count-players").style.gridColumn = `2/${playerMax-playerMin+2}`;
    for (let i=playerMin; i<playerMax; i++) {
        countSection.insertAdjacentHTML('beforeend',
            `<div class="count-header${(i >= playerExtendedMin) ? " count-extended" : ""}">${i}</div>`
        );
    }
    for (const [key, value] of Object.entries(neededCards)) {
        countSection.insertAdjacentHTML('beforeend',
            `<div class="count-header${(!(key in Object.values(cards)[pack].cards)) ? " count-extended" : ""}">${value.symbol} ${value.name.toUpperCase()}</div>`
        );
        for (let i=playerMin; i<playerMax; i++) {
            countSection.insertAdjacentHTML('beforeend',
                `<div${(i >= playerExtendedMin || !(key in Object.values(cards)[pack].cards)) ? ' class="count-extended"' : ""}>${Object.values(cards)[pack].number[i][key]}</div>`
            );
        }
    }

    curPack = pack;
}

loadEffects();

function nextPack(event) {
    curPack = (curPack + 1) % Object.keys(cards).length;
    loadEffects(curPack);
}