const readlineSync = require('readline-sync')

const stone = 1;
const paper = 2;
const scissors = 3;
let result = '';

console.log('Bem vindo ao jogo: Jokenpo! \n As opções são referenciadas por números. Pedra = 1, Papel = 2 e Tesoura = 3.')
let playerOne = parseFloat(readlineSync.question('Jogador 1: '));
let playerTwo = parseFloat(readlineSync.question('Jogador 2: '));

function judgeJokenpo(playerOne, playerTwo) {
    if(playerOne === 1 && playerTwo === 1) {
        result = 'Empate!'
    }else if(playerOne === 1 && playerTwo === 2) {
        result = 'Jogador 2 venceu!'
    }else if(playerOne === 1 && playerTwo === 3) {
        result = 'Jogador 1 venceu!'
    }

    if(playerOne === 2 && playerTwo === 2) {
        result = 'Empate!'
    }else if(playerOne === 2 && playerTwo === 3) {
        result = 'Jogador 2 venceu!'
    }else if(playerOne === 2 && playerTwo === 1) {
        result = 'Jogador 1 venceu!'
    }

    if(playerOne === 3 && playerTwo === 3) {
        result = 'Empate!'
    }else if(playerOne === 3 && playerTwo === 1) {
        result = 'Jogador 2 venceu!'
    }else if(playerOne === 3 && playerTwo === 2) {
        result = 'Jogador 1 venceu!'
    }

    return result; 
}

judgeJokenpo(playerOne, playerTwo);
console.log(result);