/* sketch.js */

//Canvas Size
let canvasx = 1425;
let canvasy = 800;


function setup() {
  createCanvas(canvasx,canvasy)
  board = new Board(canvasy);
}

function draw(){
  background(220);
  board.draw();
}


function mouseReleased(){

}
