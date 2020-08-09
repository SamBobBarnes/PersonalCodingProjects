/* space.js */

class Space{
  constructor(xy,height,side/*T-top, B-bottom, L-left, R-right*/,name,color/*orange, red, pink, green, dark blue, light blue, brown, yellow*/,price,blank){
    this.name = name;
    this.x = xy[0];
    this.y = xy[1];
    this.color = this.colorPick(color);
    this.price = price;
    this.blank = blank;

    this.side = side;
    this.height = height;
    this.width = this.height*(2/3);

    this.fontSize = this.height/12;

    switch(this.sideDegree()){
      case 90: this.x += this.height; break;
      case 270: this.y += this.width; break;
      case 180: this.x += this.width; this.y += this.height; break;
      case 0: break;
    }

  }

  draw(){
    push();
    translate(this.x,this.y);
    angleMode(DEGREES);
    rotate(this.sideDegree());
    fill("#d0edc2");
    rect(0,0,this.width,this.height);
    if(!this.blank){
      fill(this.color);
      rect(0,0,this.width,this.height/6);
    }
    translate(0,this.height/6);
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(this.fontSize);
    text(this.name,0,0,this.width,this.height*(4/6));
    translate(0, this.height*(4/6));

    if(this.price != 0) text("$" + this.price,0,0,this.width,this.height*(1/6));
    pop();
  }

  sideDegree(){ //translates L,R,T,B to the proper angle of rotation
    var deg = 0;
    switch(this.side){
      case "L": deg = 90; break;
      case "R": deg = 270; break;
      case "T": deg = 180; break;
      case "B": deg = 0; break;
    }
    return deg;
  }

  colorPick(color){ //translates color to hex value
    var hex = "";
    switch(color){
      case "orange": hex = "#fc7703"; break;
      case "red": hex = "#fc0303"; break;
      case "pink": hex = "#fc03d2"; break;
      case "green": hex = "#07db0a"; break;
      case "dark blue": hex = "#071cdb"; break;
      case "light blue": hex = "#5eb6db"; break;
      case "brown": hex = "#593a00"; break;
      case "yellow": hex = "#f2ef13"; break;
      case "blank": break;
    }
    return hex;
  }

}
