/* sketch.js */

//Canvas Size
let canvasDim = 400;
var turn = true;



function setup() {
  createCanvas(canvasDim,canvasDim);
  board = new Board(canvasDim);

}

function draw(){
  board.draw();
}

function keyPressed(){
  if(turn){ //    1-9 is keyCode 49-57
      if(keyCode === 49) board.set(0,true);//0
      if(keyCode === 50) board.set(1,true);//1
      if(keyCode === 51) board.set(2,true);//2
      if(keyCode === 52) board.set(3,true);//3
      if(keyCode === 53) board.set(4,true);//4
      if(keyCode === 54) board.set(5,true);//5
      if(keyCode === 55) board.set(6,true);//6
      if(keyCode === 56) board.set(7,true);//7
      if(keyCode === 57) board.set(8,true);//8
  }
  return false;
}
