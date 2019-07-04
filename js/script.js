
// computerMove
function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } 
  else if(argMoveId == 2){
    return 'papier';
  } 
  else if(argMoveId == 3){
    return 'nożyce';
  }
  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

// playerMove
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

// Result
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywolano:' + argPlayerMove + ', ' + argComputerMove);
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    
    if ( argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
    }
}
displayResult(playerMove, computerMove);

