var argButtonName, buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    displayResult(argButtonName, computerMove);


    playerMove = argButtonName;
    console.log('wybór ruchu gracza to: ' + playerInput);
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);

}

var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber, x;

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'Kamień';
    } else if (argMoveId == 2) {
        return 'Papier';
    } else if (argMoveId == 3) {
        return 'Nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "Kamień".');
        return 'Kamień';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'Papier' && argComputerMove == 'Kamień') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'Kamień' && argComputerMove == 'Nożyce') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'Nożyce' && argComputerMove == 'Papier') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}


buttonRock.addEventListener('click', function () {
    buttonClicked('Kamień');
});
buttonPaper.addEventListener('click', function () {
    buttonClicked('Papier');
});
buttonScissors.addEventListener('click', function () {
    buttonClicked('Nożyce');
});