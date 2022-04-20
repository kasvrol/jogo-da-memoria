let order = [];
let clickOrder = [];
let score = 0;

// lógica de números com cores 
/*
0 - verde
1 - vermelho
2 - amarelo
3 - azul*/

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4)
    order[order.length] = colorOrder

    for (let index in order) {
        let elementColor = createColorElement(order[index])
        lightColor(elementColor, Number(index) + 1)
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected')
    }, number -300 );

    setTimeout(() => {
        element.classList.remove('selected')
    });
}

let checkOrder = () => {
    for( let index in clickOrder) {
        if(clickOrder[index] != order[index]) {
            youLose();
            break;
        }
    }

    if ( clickOrder.length == order.length ) {
        alert (` Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
        nextLevel()
    }
}


let click = (color) => {
    clickOrder[clickOrder.length] = color;

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250)
}

let createColorElement = (color) => {
    if ( color == 0 ) {
        return green;
    }
    else if ( color == 1 ) {
        return red;
    }
    else if ( color == 2 ) {
        return yellow;
    }
    if ( color == 3 ) {
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder()
}

let youLose = () => {
    alert(`Pontuação ${score}\n Você perdeu o jogo\n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickOrder = [];

    playGame();
}

let playGame = () => {
    score = 0;
    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();