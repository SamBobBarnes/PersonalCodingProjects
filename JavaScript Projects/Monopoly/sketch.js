/* sketch.js */

//Canvas Size
let canvasx = 1425;
let canvasy = 800;


function setup() {
  createCanvas(canvasx,canvasy)
  gameSetup();
}

function draw(){
  background(220);
  gameloop();
}


// check for pressed keys for interaction
function keyPressed(){
  if(keyCode === 32) {dice1.roll(); dice2.roll();} //spacebar

  return false;
}
