// Setup player and info
document.getElementById('definePlayers').showModal();

let Player1, Player2;

const Player = (sign,starting,name) => 
{ this.name = name;
  this.sign =  sign;
  this.turn = starting;

  function getSign(){return sign;}
  function changeTurn(){this.turn = !this.turn;}

 return {getSign, changeTurn,turn,name}}

const gameBoard = (() => {
 const gameGrid = ["","","","","","","","",""];

 function setGridSign (index, sign){
    gameGrid[index] = sign;}

 function isGridFull(){
    return gameGrid.every(grid => grid !== "")
 }

    return {setGridSign, gameGrid, isGridFull}
})();


const roundProcess = (() => {

    function playRound(event,index, player){
    if(event.target.textContent !== ""){return;}

    gameBoard.setGridSign(index, player.getSign());
     event.target.textContent = gameBoard.gameGrid[index];
    checkWinner();
    checkFullBoard();

    if (player = Player1){Player2.changeTurn()}
     else if (player = Player2){Player1.changeTurn()}
     player.changeTurn();;
    }

    function checkWinner ()
    {
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (const condition of winConditions) {
       const [a, b, c]  = condition;
        if (gameBoard.gameGrid[condition[0]] !== "" && gameBoard.gameGrid[a] === gameBoard.gameGrid[b] && 
            gameBoard.gameGrid[b] === gameBoard.gameGrid[c])

        {document.getElementById("gameResult").textContent = `${gameBoard.gameGrid[a]} won!`;
         gameStatus.stopGame()}

    }}
    function checkFullBoard() {
        if (gameBoard.isGridFull()) {
        gameStatus.stopGame();
            if (document.getElementById("gameResult").textContent == "")
            {document.getElementById("gameResult").textContent = "It's a tie!"}
        }
    }
    function findTurn()
      {if (Player1.turn) {return Player1}
       else {return Player2};}
    return {playRound,findTurn}})();

const gameStatus = (() => {

    let gameActive = true;

    const gridZero = document.getElementById("gridZero");
    const gridOne = document.getElementById("gridOne");
    const gridTwo = document.getElementById("gridTwo");
    const gridThree = document.getElementById("gridThree");
    const gridFour = document.getElementById("gridFour");
    const gridFive = document.getElementById("gridFive");
    const gridSix = document.getElementById("gridSix");
    const gridSeven = document.getElementById("gridSeven");
    const gridEight = document.getElementById("gridEight");

    const allGrids = [gridZero, gridOne,gridTwo,gridThree,gridFour,gridFive,gridSix,gridSeven,gridEight]

    function startGame (){
     gameActive = true;
     document.getElementById("gameResult").textContent = "";
     allGrids.forEach(grid => { grid.textContent = "";});
     gameBoard.gameGrid.forEach(function(value, index, array) {array[index] = "";})

     gridZero.addEventListener('click',(event) => {if(gameActive) {roundProcess.playRound(event,0, roundProcess.findTurn())}});
     gridOne.addEventListener('click', (event) => {if(gameActive) {roundProcess.playRound(event,1, roundProcess.findTurn())}});
     gridTwo.addEventListener('click', (event) => {if(gameActive) {roundProcess.playRound(event,2, roundProcess.findTurn())}});
     gridThree.addEventListener('click', (event) => {if(gameActive) {roundProcess.playRound(event,3, roundProcess.findTurn())}});
     gridFour.addEventListener('click', (event) => {if(gameActive) {roundProcess.playRound(event,4, roundProcess.findTurn())}});
     gridFive.addEventListener('click', (event) => {if(gameActive) {roundProcess.playRound(event,5, roundProcess.findTurn())}});
     gridSix.addEventListener('click', (event) => {if(gameActive) {roundProcess.playRound(event,6, roundProcess.findTurn())}});
     gridSeven.addEventListener('click', (event) => {if(gameActive) {roundProcess.playRound(event,7, roundProcess.findTurn())}});
     gridEight.addEventListener('click', (event) => {if(gameActive) {roundProcess.playRound(event,8, roundProcess.findTurn())}});}

    function stopGame(){
     gameActive = false;
     document.getElementById('endGameDialog').showModal();
}

    function initiateGame(form){
     Player1 = Player("X", true, `${form.player1NewName.value}`);
     Player2 = Player("O", false, `${form.player2NewName.value}`);
   
     document.getElementById('definePlayers').close();
     startGame();
     initiatePlayerInfo();
}

    function initiatePlayerInfo(){
     const player1Name = document.getElementById("player1Name");
     const player1Sign = document.getElementById("player1Sign");
     player1Name.textContent = Player1.name;
     player1Sign.textContent = Player1.getSign();
    
     const player2Name = document.getElementById("player2Name");
     const player2Sign = document.getElementById("player2Sign");
     player2Name.textContent = Player2.name;
     player2Sign.textContent = Player2.getSign();
    }

  return {stopGame, startGame, initiateGame}
})()