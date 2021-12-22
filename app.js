const readlineSync = require('readline-sync')

const stone = 1;
const paper = 2;
const scissors = 3;
let result = '';

console.log('Bem vindo ao jogo: Jokenpo! Os valores são relacionados aos objetos como, pedra = 1, papel = 2, tesoura = 3')
let playerOne = parseFloat(readlineSync.question('Jogador 1: '));
let playerTwo = parseFloat(readlineSync.question('Jogador 2: '));

function juizJokenpo(playerOne, playerTwo) {
    if(playerOne === 1 && playerTwo === 1) {
        result = 'Empate!'
    }else if(playerOne === 1 && playerTwo === 2) {
        result = 'Jogador 2 vencedor!'
    }else if(playerOne === 1 && playerTwo === 3) {
        result = 'Jogador 1 vencedor!'
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

juizJokenpo(playerOne, playerTwo);
console.log(result);