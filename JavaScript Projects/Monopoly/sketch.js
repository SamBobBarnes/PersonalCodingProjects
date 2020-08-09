/* sketch.js */

//Canvas Size
let canvasx = 1425;
let canvasy = 800;


function setup() {
  createCanvas(canvasx,canvasy)
  board = new Board(canvasy);
  dice1 = new Dice(6,true,canvasy);
  dice2 = new Dice(6,false,canvasy);
}

function draw(){
  background(220);
  board.draw();
  dice1.draw();
  dice2.draw();
  gameloop();
}



function keyPressed(){
  if(keyCode === 32) {dice1.roll(); dice2.roll();}

  return false;
}
