/* sketch.js */

//Canvas Size
let canvasDim = 400;




function setup() {
  createCanvas(canvasDim,canvasDim);
  board = new Board(canvasDim);

}

function draw(){
  board.draw();
}
