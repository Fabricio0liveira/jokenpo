const stone = 1;
const paper = 2;
const scissors = 3;
let result = '';

console.log(juizJokenpo(3, 2))

function juizJokenpo(playerOne, playerTwo) {
    if(playerOne === 1 && playerTwo === 1) {
        result = 'Empate!'
    }else if(playerOne === 1 && playerTwo === 2) {
        result = 'Você perdeu!'
    }else if(playerOne === 1 && playerTwo === 3) {
        result = 'Você ganhou!'
    }

    if(playerOne === 2 && playerTwo === 2) {
        result = 'Empate!'
    }else if(playerOne === 2 && playerTwo === 3) {
        result = 'Você perdeu!'
    }else if(playerOne === 2 && playerTwo === 1) {
        result = 'Você ganhou!'
    }

    if(playerOne === 3 && playerTwo === 3) {
        result = 'Empate!'
    }else if(playerOne === 3 && playerTwo === 1) {
        result = 'Você perdeu!'
    }else if(playerOne === 3 && playerTwo === 2) {
        result = 'Você ganhou!'
    }

    return result; 
}

