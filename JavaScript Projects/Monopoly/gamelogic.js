/* gamelogic.js */

function gameSetup(){
  board = new Board(canvasy);
  dice1 = new Dice(6,true,canvasy);
  dice2 = new Dice(6,false,canvasy);
  player1 = new Player("Player1",1,canvasy);
  player2 = new Player("Player2",2,canvasy);
  player3 = new Player("Player3",3,canvasy);
  player4 = new Player("Player4",4,canvasy);
}

function gameloop(){
  board.draw();
  dice1.draw();
  dice2.draw();
  player1.draw();
  player2.draw();
  player3.draw();
  player4.draw();

}
