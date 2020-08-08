/* piece.js */

class Piece{
  constructor(player,boardHeight){
    this.player = player;
    this.corner = boardHeight/8;
    this.bottom = boardHeight;
    this.unit = this.corner*(2/3);
    this.height = boardHeight/60;
    this.offset3 = this.corner/25;                            //names were used when designing and numbers have no real meaning
    this.offset15 = this.corner/5;                            //these offests are relative
    this.offset37 = this.unit - this.corner/25 - this.height;


    this.position = 11;

  }

  advancePos(){ //Advance piece by 1
    if(this.position < 40) this.position += 1;
    else this.position = 1;
  }

  setPos(pos){  //set position of piece on board
    if(pos <=40 && pos >0) this.position = pos;
  }

  getPos(){ //returns position of piece
    return this.position;
  }

  draw(){
    fill("#FF0000");
    if(this.player == 1) {
      switch(this.position){
        case 0: square(this.corner - this.offset3*2 - this.height*2, this.bottom - this.corner + this.offset3,this.height); break; //jail
        case 1: square(this.bottom - this.offset3*3 - this.height*3,this.bottom - this.offset3 - this.height,this.height); break; //1
        case 2: square(this.offset3 + this.corner + this.unit*8,this.bottom - this.offset3 - this.height,this.height); break; //2
        case 3: square(this.offset3 + this.corner + this.unit*7,this.bottom - this.offset3 - this.height,this.height); break; //3
        case 4: square(this.offset3 + this.corner + this.unit*6,this.bottom - this.offset3 - this.height,this.height); break; //4
        case 5: square(this.offset3 + this.corner + this.unit*5,this.bottom - this.offset3 - this.height,this.height); break; //5
        case 6: square(this.offset3 + this.corner + this.unit*4,this.bottom - this.offset3 - this.height,this.height); break; //6
        case 7: square(this.offset3 + this.corner + this.unit*3,this.bottom - this.offset3 - this.height,this.height); break; //7
        case 8: square(this.offset3 + this.corner + this.unit*2,this.bottom - this.offset3 - this.height,this.height); break; //8
        case 9: square(this.offset3 + this.corner + this.unit*1,this.bottom - this.offset3 - this.height,this.height); break; //9
        case 10: square(this.offset3 + this.corner + this.unit*0,this.bottom - this.offset3 - this.height,this.height); break; //10
        case 11: square(this.offset3,this.bottom - this.offset3*3 - this.height*3,this.height); break;  //11
        case 12: square(this.offset3,this.offset3 + this.corner + this.unit*8,this.height); break; //12
        case 13: square(this.offset3,this.offset3 + this.corner + this.unit*7,this.height); break; //13
        case 14: square(this.offset3,this.offset3 + this.corner + this.unit*6,this.height); break; //14
        case 15: square(this.offset3,this.offset3 + this.corner + this.unit*5,this.height); break; //15
        case 16: square(this.offset3,this.offset3 + this.corner + this.unit*4,this.height); break; //16
        case 17: square(this.offset3,this.offset3 + this.corner + this.unit*3,this.height); break; //17
        case 18: square(this.offset3,this.offset3 + this.corner + this.unit*2,this.height); break; //18
        case 19: square(this.offset3,this.offset3 + this.corner + this.unit*1,this.height); break; //19
        case 20: square(this.offset3,this.offset3 + this.corner + this.unit*0,this.height); break; //20
        case 21: square(this.height*2 + this.offset3*3,this.offset3,this.height); break;  //21
        case 22: square(this.offset37 + this.corner + this.unit*0,this.offset3,this.height); break; //22
        case 23: square(this.offset37 + this.corner + this.unit*1,this.offset3,this.height); break; //23
        case 24: square(this.offset37 + this.corner + this.unit*2,this.offset3,this.height); break; //24
        case 25: square(this.offset37 + this.corner + this.unit*3,this.offset3,this.height); break; //25
        case 26: square(this.offset37 + this.corner + this.unit*4,this.offset3,this.height); break; //26
        case 27: square(this.offset37 + this.corner + this.unit*5,this.offset3,this.height); break; //27
        case 28: square(this.offset37 + this.corner + this.unit*6,this.offset3,this.height); break; //28
        case 29: square(this.offset37 + this.corner + this.unit*7,this.offset3,this.height); break; //28
        case 30: square(this.offset37 + this.corner + this.unit*8,this.offset3,this.height); break; //30
        case 31: square(this.bottom - this.height - this.offset3,this.height*2 + this.offset3*3,this.height); break; //31
        case 32: square(this.bottom - this.offset3 - this.height,this.offset37 + this.corner + this.unit*0,this.height); break; //32
        case 33: square(this.bottom - this.offset3 - this.height,this.offset37 + this.corner + this.unit*1,this.height); break; //33
        case 34: square(this.bottom - this.offset3 - this.height,this.offset37 + this.corner + this.unit*2,this.height); break; //34
        case 35: square(this.bottom - this.offset3 - this.height,this.offset37 + this.corner + this.unit*3,this.height); break; //35
        case 36: square(this.bottom - this.offset3 - this.height,this.offset37 + this.corner + this.unit*4,this.height); break; //36
        case 37: square(this.bottom - this.offset3 - this.height,this.offset37 + this.corner + this.unit*5,this.height); break; //37
        case 38: square(this.bottom - this.offset3 - this.height,this.offset37 + this.corner + this.unit*6,this.height); break; //38
        case 39: square(this.bottom - this.offset3 - this.height,this.offset37 + this.corner + this.unit*7,this.height); break; //39
        case 40: square(this.bottom - this.offset3 - this.height,this.offset37 + this.corner + this.unit*8,this.height); break; //40
      }
    }
    fill("#0000FF");
    if(this.player == 2) {
      switch(this.position){
        case 0: square(this.corner - this.offset3 - this.height, this.bottom - this.corner + this.offset3,this.height); break; //jail
        case 1: square(this.bottom - this.offset3*2 - this.height*2,this.bottom - this.offset3 - this.height,this.height); break;  //1
        case 2: square(this.offset37 + this.corner + this.unit*8,this.bottom - this.offset3 - this.height,this.height); break; //2
        case 3: square(this.offset37 + this.corner + this.unit*7,this.bottom - this.offset3 - this.height,this.height); break; //3
        case 4: square(this.offset37 + this.corner + this.unit*6,this.bottom - this.offset3 - this.height,this.height); break; //4
        case 5: square(this.offset37 + this.corner + this.unit*5,this.bottom - this.offset3 - this.height,this.height); break; //5
        case 6: square(this.offset37 + this.corner + this.unit*4,this.bottom - this.offset3 - this.height,this.height); break; //6
        case 7: square(this.offset37 + this.corner + this.unit*3,this.bottom - this.offset3 - this.height,this.height); break; //7
        case 8: square(this.offset37 + this.corner + this.unit*2,this.bottom - this.offset3 - this.height,this.height); break; //8
        case 9: square(this.offset37 + this.corner + this.unit*1,this.bottom - this.offset3 - this.height,this.height); break; //9
        case 10: square(this.offset37 + this.corner + this.unit*0,this.bottom - this.offset3 - this.height,this.height); break; //10
        case 11: square(this.offset3,this.bottom - this.offset3*2 - this.height*2,this.height); break;  //11
        case 12: square(this.offset3,this.offset37 + this.corner + this.unit*8,this.height); break; //12
        case 13: square(this.offset3,this.offset37 + this.corner + this.unit*7,this.height); break; //13
        case 14: square(this.offset3,this.offset37 + this.corner + this.unit*6,this.height); break; //14
        case 15: square(this.offset3,this.offset37 + this.corner + this.unit*5,this.height); break; //15
        case 16: square(this.offset3,this.offset37 + this.corner + this.unit*4,this.height); break; //16
        case 17: square(this.offset3,this.offset37 + this.corner + this.unit*3,this.height); break; //17
        case 18: square(this.offset3,this.offset37 + this.corner + this.unit*2,this.height); break; //18
        case 19: square(this.offset3,this.offset37 + this.corner + this.unit*1,this.height); break; //19
        case 20: square(this.offset3,this.offset37 + this.corner + this.unit*0,this.height); break; //20
        case 21: square(this.height + this.offset3*2,this.offset3,this.height); break; //21
        case 22: square(this.offset3 + this.corner + this.unit*0,this.offset3,this.height); break;  //22
        case 23: square(this.offset3 + this.corner + this.unit*1,this.offset3,this.height); break;  //23
        case 24: square(this.offset3 + this.corner + this.unit*2,this.offset3,this.height); break;  //24
        case 25: square(this.offset3 + this.corner + this.unit*3,this.offset3,this.height); break;  //25
        case 26: square(this.offset3 + this.corner + this.unit*4,this.offset3,this.height); break;  //26
        case 27: square(this.offset3 + this.corner + this.unit*5,this.offset3,this.height); break;  //27
        case 28: square(this.offset3 + this.corner + this.unit*6,this.offset3,this.height); break;  //28
        case 29: square(this.offset3 + this.corner + this.unit*7,this.offset3,this.height); break;  //29
        case 30: square(this.offset3 + this.corner + this.unit*8,this.offset3,this.height); break;  //30
        case 31: square(this.bottom - this.height - this.offset3,this.height + this.offset3*2,this.height); break; //31
        case 32: square(this.bottom - this.offset3 - this.height,this.offset3 + this.corner + this.unit*0,this.height); break; //32
        case 33: square(this.bottom - this.offset3 - this.height,this.offset3 + this.corner + this.unit*1,this.height); break; //33
        case 34: square(this.bottom - this.offset3 - this.height,this.offset3 + this.corner + this.unit*2,this.height); break; //34
        case 35: square(this.bottom - this.offset3 - this.height,this.offset3 + this.corner + this.unit*3,this.height); break; //35
        case 36: square(this.bottom - this.offset3 - this.height,this.offset3 + this.corner + this.unit*4,this.height); break; //36
        case 37: square(this.bottom - this.offset3 - this.height,this.offset3 + this.corner + this.unit*5,this.height); break; //37
        case 38: square(this.bottom - this.offset3 - this.height,this.offset3 + this.corner + this.unit*6,this.height); break; //38
        case 39: square(this.bottom - this.offset3 - this.height,this.offset3 + this.corner + this.unit*7,this.height); break; //39
        case 40: square(this.bottom - this.offset3 - this.height,this.offset3 + this.corner + this.unit*8,this.height); break; //40
      }
    }
    fill("#00FF00");
    if(this.player == 3) {
      switch(this.position){
        case 0: square(this.corner - this.offset3*2 - this.height*2, this.bottom - this.corner + this.offset3*2 + this.height,this.height); break; //jail
        case 1: square(this.bottom - this.offset3 - this.height,this.bottom - this.offset3*2 - this.height*2,this.height); break; //1
        case 2: square(this.offset3 + this.corner + this.unit*8,this.bottom - this.offset15 - this.height,this.height); break; //2
        case 3: square(this.offset3 + this.corner + this.unit*7,this.bottom - this.offset15 - this.height,this.height); break; //3
        case 4: square(this.offset3 + this.corner + this.unit*6,this.bottom - this.offset15 - this.height,this.height); break; //4
        case 5: square(this.offset3 + this.corner + this.unit*5,this.bottom - this.offset15 - this.height,this.height); break; //5
        case 6: square(this.offset3 + this.corner + this.unit*4,this.bottom - this.offset15 - this.height,this.height); break; //6
        case 7: square(this.offset3 + this.corner + this.unit*3,this.bottom - this.offset15 - this.height,this.height); break; //7
        case 8: square(this.offset3 + this.corner + this.unit*2,this.bottom - this.offset15 - this.height,this.height); break; //8
        case 9: square(this.offset3 + this.corner + this.unit*1,this.bottom - this.offset15 - this.height,this.height); break; //9
        case 10: square(this.offset3 + this.corner + this.unit*0,this.bottom - this.offset15 - this.height,this.height); break; //10
        case 11: square(this.height + this.offset3*2,this.bottom - this.offset3 - this.height,this.height); break; //11
        case 12: square(this.offset15,this.offset3 + this.corner + this.unit*8,this.height); break; //12
        case 13: square(this.offset15,this.offset3 + this.corner + this.unit*7,this.height); break; //13
        case 14: square(this.offset15,this.offset3 + this.corner + this.unit*6,this.height); break; //14
        case 15: square(this.offset15,this.offset3 + this.corner + this.unit*5,this.height); break; //15
        case 16: square(this.offset15,this.offset3 + this.corner + this.unit*4,this.height); break; //16
        case 17: square(this.offset15,this.offset3 + this.corner + this.unit*3,this.height); break; //17
        case 18: square(this.offset15,this.offset3 + this.corner + this.unit*2,this.height); break; //18
        case 19: square(this.offset15,this.offset3 + this.corner + this.unit*1,this.height); break; //19
        case 20: square(this.offset15,this.offset3 + this.corner + this.unit*0,this.height); break; //20
        case 21: square(this.offset3,this.offset3*2 + this.height,this.height); break;              //21
        case 22: square(this.offset37 + this.corner + this.unit*0,this.offset15,this.height); break;  //22
        case 23: square(this.offset37 + this.corner + this.unit*1,this.offset15,this.height); break;  //23
        case 24: square(this.offset37 + this.corner + this.unit*2,this.offset15,this.height); break;  //24
        case 25: square(this.offset37 + this.corner + this.unit*3,this.offset15,this.height); break;  //25
        case 26: square(this.offset37 + this.corner + this.unit*4,this.offset15,this.height); break;  //26
        case 27: square(this.offset37 + this.corner + this.unit*5,this.offset15,this.height); break;  //27
        case 28: square(this.offset37 + this.corner + this.unit*6,this.offset15,this.height); break;  //28
        case 29: square(this.offset37 + this.corner + this.unit*7,this.offset15,this.height); break;  //29
        case 30: square(this.offset37 + this.corner + this.unit*8,this.offset15,this.height); break;  //30
        case 31: square(this.bottom - this.height*2 - this.offset3*2,this.offset3,this.height); break; //31
        case 32: square(this.bottom - this.offset15 - this.height,this.offset37 + this.corner + this.unit*0,this.height); break; //32
        case 33: square(this.bottom - this.offset15 - this.height,this.offset37 + this.corner + this.unit*1,this.height); break; //33
        case 34: square(this.bottom - this.offset15 - this.height,this.offset37 + this.corner + this.unit*2,this.height); break; //34
        case 35: square(this.bottom - this.offset15 - this.height,this.offset37 + this.corner + this.unit*3,this.height); break; //35
        case 36: square(this.bottom - this.offset15 - this.height,this.offset37 + this.corner + this.unit*4,this.height); break; //36
        case 37: square(this.bottom - this.offset15 - this.height,this.offset37 + this.corner + this.unit*5,this.height); break; //37
        case 38: square(this.bottom - this.offset15 - this.height,this.offset37 + this.corner + this.unit*6,this.height); break; //38
        case 39: square(this.bottom - this.offset15 - this.height,this.offset37 + this.corner + this.unit*7,this.height); break; //39
        case 40: square(this.bottom - this.offset15 - this.height,this.offset37 + this.corner + this.unit*8,this.height); break; //40
      }
    }
    fill("#F00000F");
    if(this.player == 4){
      switch(this.position){
        case 0: square(this.corner - this.offset3 - this.height, this.bottom - this.corner + this.offset3*2 + this.height,this.height); break; //jail
        case 1: square(this.bottom - this.offset3 - this.height,this.bottom - this.offset3*3 - this.height*3,this.height); break; //1
        case 2: square(this.offset37 + this.corner + this.unit*8,this.bottom - this.offset15 - this.height,this.height); break; //2
        case 3: square(this.offset37 + this.corner + this.unit*7,this.bottom - this.offset15 - this.height,this.height); break; //3
        case 4: square(this.offset37 + this.corner + this.unit*6,this.bottom - this.offset15 - this.height,this.height); break; //4
        case 5: square(this.offset37 + this.corner + this.unit*5,this.bottom - this.offset15 - this.height,this.height); break; //5
        case 6: square(this.offset37 + this.corner + this.unit*4,this.bottom - this.offset15 - this.height,this.height); break; //6
        case 7: square(this.offset37 + this.corner + this.unit*3,this.bottom - this.offset15 - this.height,this.height); break; //7
        case 8: square(this.offset37 + this.corner + this.unit*2,this.bottom - this.offset15 - this.height,this.height); break; //8
        case 9: square(this.offset37 + this.corner + this.unit*1,this.bottom - this.offset15 - this.height,this.height); break; //9
        case 10: square(this.offset37 + this.corner + this.unit*0,this.bottom - this.offset15 - this.height,this.height); break; //10
        case 11: square(this.height*2 + this.offset3*3,this.bottom - this.offset3 - this.height,this.height); break; //11
        case 12: square(this.offset15,this.offset37 + this.corner + this.unit*8,this.height); break; //12
        case 13: square(this.offset15,this.offset37 + this.corner + this.unit*7,this.height); break; //13
        case 14: square(this.offset15,this.offset37 + this.corner + this.unit*6,this.height); break; //14
        case 15: square(this.offset15,this.offset37 + this.corner + this.unit*5,this.height); break; //15
        case 16: square(this.offset15,this.offset37 + this.corner + this.unit*4,this.height); break; //16
        case 17: square(this.offset15,this.offset37 + this.corner + this.unit*3,this.height); break; //17
        case 18: square(this.offset15,this.offset37 + this.corner + this.unit*2,this.height); break; //18
        case 19: square(this.offset15,this.offset37 + this.corner + this.unit*1,this.height); break; //19
        case 20: square(this.offset15,this.offset37 + this.corner + this.unit*0,this.height); break; //20
        case 21: square(this.offset3,this.offset3*3 + this.height*2,this.height); break;              //21
        case 22: square(this.offset3 + this.corner + this.unit*0,this.offset15,this.height); break;   //22
        case 23: square(this.offset3 + this.corner + this.unit*1,this.offset15,this.height); break;   //23
        case 24: square(this.offset3 + this.corner + this.unit*2,this.offset15,this.height); break;   //24
        case 25: square(this.offset3 + this.corner + this.unit*3,this.offset15,this.height); break;   //25
        case 26: square(this.offset3 + this.corner + this.unit*4,this.offset15,this.height); break;   //26
        case 27: square(this.offset3 + this.corner + this.unit*5,this.offset15,this.height); break;   //27
        case 28: square(this.offset3 + this.corner + this.unit*6,this.offset15,this.height); break;   //28
        case 29: square(this.offset3 + this.corner + this.unit*7,this.offset15,this.height); break;   //29
        case 30: square(this.offset3 + this.corner + this.unit*8,this.offset15,this.height); break;   //30
        case 31: square(this.bottom - this.height*3 - this.offset3*3,this.offset3,this.height); break; //31
        case 32: square(this.bottom - this.offset15 - this.height,this.offset3 + this.corner + this.unit*0,this.height); break; //32
        case 33: square(this.bottom - this.offset15 - this.height,this.offset3 + this.corner + this.unit*1,this.height); break; //33
        case 34: square(this.bottom - this.offset15 - this.height,this.offset3 + this.corner + this.unit*2,this.height); break; //34
        case 35: square(this.bottom - this.offset15 - this.height,this.offset3 + this.corner + this.unit*3,this.height); break; //35
        case 36: square(this.bottom - this.offset15 - this.height,this.offset3 + this.corner + this.unit*4,this.height); break; //35
        case 37: square(this.bottom - this.offset15 - this.height,this.offset3 + this.corner + this.unit*5,this.height); break; //37
        case 38: square(this.bottom - this.offset15 - this.height,this.offset3 + this.corner + this.unit*6,this.height); break; //38
        case 39: square(this.bottom - this.offset15 - this.height,this.offset3 + this.corner + this.unit*7,this.height); break; //39
        case 40: square(this.bottom - this.offset15 - this.height,this.offset3 + this.corner + this.unit*8,this.height); break; //40
      }
    }
  }



}
