class Dice {
  constructor(face,die1,boardHeight) {
    this.face = face;
    this.width = boardHeight/16;
    this.dot = boardHeight/100;
    this.y = boardHeight-(boardHeight/8)*1.6;
    if (die1) this.x = (boardHeight/8)*1.1;
    else this.x = (boardHeight/8)*1.7;
    this.fillColor = "white";
  }

  roll() {
    this.face = Math.floor((Math.random() * 6) + 1);
  }


  draw(){
    fill(this.fillColor);
    square(this.x,this.y,this.width);
    switch (this.face) {
      case 1: fill("black"); circle(this.x+this.width/2,this.y+this.width/2,this.dot); break;
      case 2: fill("black"); circle(this.x+this.width/4,this.y+this.width/4,this.dot); circle(this.x+3*(this.width/4),this.y+3*(this.width/4),this.dot); break;
      case 3: fill("black"); circle(this.x+this.width/2,this.y+this.width/2,this.dot); circle(this.x+this.width/4,this.y+this.width/4,this.dot); circle(this.x+3*(this.width/4),this.y+3*(this.width/4),this.dot); break;
      case 4: fill("black"); circle(this.x+this.width/4,this.y+this.width/4,this.dot); circle(this.x+3*(this.width/4),this.y+3*(this.width/4),this.dot); circle(this.x+this.width/4,this.y+3*(this.width/4),this.dot); circle(this.x+3*(this.width/4),this.y+(this.width/4),this.dot); break;
      case 5: fill("black"); circle(this.x+this.width/4,this.y+this.width/4,this.dot); circle(this.x+3*(this.width/4),this.y+3*(this.width/4),this.dot); circle(this.x+this.width/4,this.y+3*(this.width/4),this.dot); circle(this.x+3*(this.width/4),this.y+(this.width/4),this.dot); circle(this.x+this.width/2,this.y+this.width/2,this.dot); break;
      case 6: fill("black"); circle(this.x+this.width/4,this.y+this.width/4,this.dot); circle(this.x+3*(this.width/4),this.y+3*(this.width/4),this.dot); circle(this.x+this.width/4,this.y+3*(this.width/4),this.dot); circle(this.x+3*(this.width/4),this.y+(this.width/4),this.dot); circle(this.x+this.width/4,this.y+this.width/2,this.dot); circle(this.x+3*(this.width/4),this.y+this.width/2,this.dot); break;
      default: break;
    }

  }


  read(){
    return this.face;
  }

}
