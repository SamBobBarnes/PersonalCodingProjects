/* sketch.js */

//Canvas Size
let canvasDim = 400;




function setup() {
  createCanvas(canvasDim,canvasDim);
  board = new Board(canvasDim);

}

function draw(){
  background(220);
  board.draw();
}
