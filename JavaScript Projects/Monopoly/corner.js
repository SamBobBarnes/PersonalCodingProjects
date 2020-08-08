/* corner.js */

class Corner{
  constructor(xy,height,corner,name){
    this.name = name;
    this.x = xy[0];
    this.y = xy[1];

    this.corner = corner;
    this.height = height;
    this.rotation = 0;

    switch(corner){
      case "TL": this.rotation = 135; break;
      case "TR": this.rotation = 225; break;
      case "BL": this.rotation = 45; break;
      case "BR": this.rotation = 315; break;
    }


    this.fontSize = this.height/12;



  }

  draw(){
    push();
    translate(this.x,this.y);
    fill("#d0edc2")
    rect(0,0,this.height,this.height);
    if(this.name == "Jail") {fill("#fc7703"); rect(this.height/4,0,this.height*(3/4),this.height*(3/4));}
    fill("black");
    translate(this.height/2,this.height/2);
    angleMode(DEGREES);
    rotate(this.rotation);
    textAlign(CENTER,CENTER);
    text(this.name,0,0)
    pop();
  }


}
