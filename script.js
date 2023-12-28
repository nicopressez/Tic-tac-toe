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

// When a player selects a grid, the array's index changes to the player's sign
// Todo: add a way to get the grid's corresponding index in the array 


function playRound(index, player)
{gameBoard.setGridSign(index, player.getSign())
 gameBoard.consoleGrid()}
