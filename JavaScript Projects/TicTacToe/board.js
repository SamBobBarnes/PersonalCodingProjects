/* board.js */

class Board{
  constructor(boardDim){
    this.dim = boardDim;
    this.off = this.dim/10;
    this.pos0 = true;
    this.pos1 = true;
    this.pos2 = true;
    this.pos3 = true;
    this.pos4 = true;
    this.pos5 = true;
    this.pos6 = true;
    this.pos7 = true;
    this.pos8 = true;

    this.pos0xo = false;
    this.pos1xo = false;
    this.pos2xo = false;
    this.pos3xo = false;
    this.pos4xo = false;
    this.pos5xo = false;
    this.pos6xo = false;
    this.pos7xo = false;
    this.pos8xo = false;
  }

  xyGen(pos){
    var xy = [0,0];

    switch(pos){
        case 0: xy = [this.dim*(1/6),this.dim*(1/6)]; break;
        case 1: xy = [this.dim*(3/6),this.dim*(1/6)]; break;
        case 2: xy = [this.dim*(5/6),this.dim*(1/6)]; break;
        case 3: xy = [this.dim*(1/6),this.dim*(3/6)]; break;
        case 4: xy = [this.dim*(3/6),this.dim*(3/6)]; break;
        case 5: xy = [this.dim*(5/6),this.dim*(3/6)]; break;
        case 6: xy = [this.dim*(1/6),this.dim*(5/6)]; break;
        case 7: xy = [this.dim*(3/6),this.dim*(5/6)]; break;
        case 8: xy = [this.dim*(5/6),this.dim*(5/6)]; break;
    }

    return xy;
  }

  x(pos){
    var xy = this.xyGen(pos);
    strokeWeight(5);
    line(xy[0]-this.off,xy[1]-this.off,xy[0]+this.off,xy[1]+this.off);
    line(xy[0]+this.off,xy[1]-this.off,xy[0]-this.off,xy[1]+this.off);
  }

  o(pos){
    var xy = this.xyGen(pos);
    strokeWeight(5);
    circle(xy[0],xy[1],this.off*2);
  }

  mark(pos,x,blank){
    if(!blank){
      if(x){
        this.x(pos);
      } else {
        this.o(pos);
      }
    }
  }

  set(pos,x){
    switch(pos){
      case 0: if(this.pos0) {this.pos0 = false; if(x){this.pos0xo = true;}} break;
      case 1: if(this.pos1) {this.pos1 = false; if(x){this.pos1xo = true;}} break;
      case 2: if(this.pos2) {this.pos2 = false; if(x){this.pos2xo = true;}} break;
      case 3: if(this.pos3) {this.pos3 = false; if(x){this.pos3xo = true;}} break;
      case 4: if(this.pos4) {this.pos4 = false; if(x){this.pos4xo = true;}} break;
      case 5: if(this.pos5) {this.pos5 = false; if(x){this.pos5xo = true;}} break;
      case 6: if(this.pos6) {this.pos6 = false; if(x){this.pos6xo = true;}} break;
      case 7: if(this.pos7) {this.pos7 = false; if(x){this.pos7xo = true;}} break;
      case 8: if(this.pos8) {this.pos8 = false; if(x){this.pos8xo = true;}} break;
    }
  }

  draw(){
    strokeWeight(10);
    line(this.dim/3,0,this.dim/3,this.dim);
    line(this.dim*(2/3),0,this.dim*(2/3),this.dim);
    line(0,this.dim/3,this.dim,this.dim/3);
    line(0,this.dim*(2/3),this.dim,this.dim*(2/3));
    strokeWeight(20);
    line(0,0,this.dim,0);
    line(0,0,0,this.dim);
    line(0,this.dim,this.dim,this.dim);
    line(this.dim,0,this.dim,this.dim);
    this.mark(0,this.pos0xo,this.pos0);
    this.mark(1,this.pos1xo,this.pos1);
    this.mark(2,this.pos2xo,this.pos2);
    this.mark(3,this.pos3xo,this.pos3);
    this.mark(4,this.pos4xo,this.pos4);
    this.mark(5,this.pos5xo,this.pos5);
    this.mark(6,this.pos6xo,this.pos6);
    this.mark(7,this.pos7xo,this.pos7);
    this.mark(8,this.pos8xo,this.pos8);
  }
}
