{
  function playGame(playerInput) {
  
  /* PROCES GRY */
  function clearMessages(){
  document.getElementById('messages').innerHTML = '';
  }
  // ustalenie wyboru gracza
  const playerMove = getMoveName(playerInput);

  //ustalenie wyboru komputera
  const randomNumber = Math.floor(Math.random() * 3 + 1),
        computerMove = getMoveName(randomNumber);

  // wysietlamy wynik1
  displayResult(playerMove, computerMove);

  /* FUNKCJE */

  // getMoveName
  function getMoveName(argMoveId){

    const choices = ['kamień', 'papier', 'nożyce'];
    if(choices[argMoveId-1]) return choices[argMoveId-1];
    return 'nieznany ruch';

  }

  // siplayResult
  function displayResult(argPlayerMove, argComputerMove) {

    printMessage('Komputer wybrał ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if ((argPlayerMove === 'papier' && argComputerMove === 'kamień') 
      || (argPlayerMove === 'kamień' && argComputerMove === 'nożyce')
      || (argPlayerMove === 'nożyce' && argComputerMove === 'papier')) {
        printMessage('Wygrywasz!');
      } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
      } else {
        printMessage('Przegrywasz :(');
      }
  }
}


document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
});

}