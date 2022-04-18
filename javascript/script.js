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
        element.classList.add('.select')
    }, number -250 );

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
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
    })

    checkOrder();
}