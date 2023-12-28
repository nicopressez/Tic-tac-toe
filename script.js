const gridZero = document.getElementById("gridZero");
const gridOne = document.getElementById("gridOne");
const gridTwo = document.getElementById("gridTwo");
const gridThree = document.getElementById("gridThree");
const gridFour = document.getElementById("gridFour");
const gridFive = document.getElementById("gridFive");
const gridSix = document.getElementById("gridSix");
const gridSeven = document.getElementById("gridSeven");
const gridEight = document.getElementById("gridEight");



const Player = (sign) => 
{ this.sign =  sign;
  function getSign(){return sign;}
 return {getSign}}

const Player1 = Player("X");
const Player2 = Player("O");

const gameBoard = (() => {
 const gameGrid = ["","","","","","","","",""];

 function setGridSign (index, sign){
    gameGrid[index] = sign;}

 function consoleGrid (){
    console.log(gameGrid[0] + "||" + gameGrid[1] + "||" + gameGrid[2] )
    console.log(gameGrid[3] + "||" + gameGrid[4] + "||" + gameGrid[5] )
    console.log(gameGrid[6] + "||" + gameGrid[7] + "||" + gameGrid[8] )
 }
    return {setGridSign, gameGrid, consoleGrid}
})();


function playRound(event,index, player){
 gameBoard.setGridSign(index, player.getSign());
 gameBoard.consoleGrid();
 event.target.textContent = gameBoard.gameGrid[index];
 checkWinner();
}

 // Add every win possibility and check if the array equals any of them.

function checkWinner ()
{
    const winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (const condition of winConditions) {
       const [a, b, c]  = condition;
        if (gameBoard.gameGrid[condition[0]] !== "" && gameBoard.gameGrid[a] === gameBoard.gameGrid[b] && 
            gameBoard.gameGrid[b] === gameBoard.gameGrid[c])
        {console.log (gameBoard.gameGrid[a] + "wins");}
    }
}

gridZero.addEventListener('click', (event) => playRound(event,0, Player2));
gridOne.addEventListener('click', (event) => playRound(event,1, Player2));
gridTwo.addEventListener('click', (event) => playRound(event,2, Player2));
gridThree.addEventListener('click', (event) => playRound(event,3, Player2));
gridFour.addEventListener('click', (event) => playRound(event,4, Player2));
gridFive.addEventListener('click', (event) => playRound(event,5, Player2));
gridSix.addEventListener('click', (event) => playRound(event,6, Player2));
gridSeven.addEventListener('click', (event) => playRound(event,7, Player2));
gridEight.addEventListener('click', (event) => playRound(event,8, Player2));

// Add a round system: Player1 plays, then Player2 etc