/* board.js */

class Board{
  constructor(boardHeight){

    this.height = boardHeight/8;
    this.unit = this.height*(2/3);
    this.corner = this.height;

    console.log(height/8);

    this.spaces = [
      //Corners
      new Corner(this.loc("TL"),this.height,"TL","Free Parking"),
      new Corner(this.loc("TR"),this.height,"TR","Go To Jail"),
      new Corner(this.loc("BL"),this.height,"BL","Jail"),
      new Corner(this.loc("BR"),this.height,"BR","Go"),
      // Left Side
      new Space(this.loc("L",9),this.height,"L","New York Avenue","orange",200,false),
      new Space(this.loc("L",8),this.height,"L","Tenessee Avenue","orange",180,false),
      new Space(this.loc("L",7),this.height,"L","Community Chest","blank",0,true),
      new Space(this.loc("L",6),this.height,"L","St. James Place","orange",180,false),
      new Space(this.loc("L",5),this.height,"L","Pennsylvania Railroad","blank",200,true),
      new Space(this.loc("L",4),this.height,"L","Virginia Avenue","pink",160,false),
      new Space(this.loc("L",3),this.height,"L","States Avenue","pink",140,false),
      new Space(this.loc("L",2),this.height,"L","Electric Company","blank",150,true),
      new Space(this.loc("L",1),this.height,"L","St. Charles Place","pink",140,false),
      //Right Side
      new Space(this.loc("R",1),this.height,"R","Pacific Avenue","green",300,false),
      new Space(this.loc("R",2),this.height,"R","North Carolina Avenue","green",300,false),
      new Space(this.loc("R",3),this.height,"R","Community Chest","blank",0,true),
      new Space(this.loc("R",4),this.height,"R","Pennsylvania Avenue","green",320,false),
      new Space(this.loc("R",5),this.height,"R","Short Line","blank",200,true),
      new Space(this.loc("R",6),this.height,"R","Chance","blank",0,true),
      new Space(this.loc("R",7),this.height,"R","Park Place","dark blue",350,false),
      new Space(this.loc("R",8),this.height,"R","Luxury Tax","blank",100,true),
      new Space(this.loc("R",9),this.height,"R","Boardwalk","dark blue",400,false),
      //Top
      new Space(this.loc("T",1),this.height,"T","Kentucky Avenue","red",220,false),
      new Space(this.loc("T",2),this.height,"T","Indiana Avenue","red",220,false),
      new Space(this.loc("T",3),this.height,"T","Chance","blank",0,true),
      new Space(this.loc("T",4),this.height,"T","Illinois Avenue","red",240,false),
      new Space(this.loc("T",5),this.height,"T","B 0 Railroad","blank",200,true),
      new Space(this.loc("T",6),this.height,"T","Atlantic Avenue","yellow",260,false),
      new Space(this.loc("T",7),this.height,"T","Ventor Avenue","yellow",260,false),
      new Space(this.loc("T",8),this.height,"T","Water Works","blank",150,true),
      new Space(this.loc("T",9),this.height,"T","Marvin Gardens","yellow",260,false),
      //Bottom
      new Space(this.loc("B",9),this.height,"B","Connecticut Avenue","light blue",120,false),
      new Space(this.loc("B",8),this.height,"B","Vermont Avenue","light blue",100,false),
      new Space(this.loc("B",7),this.height,"B","Chance","blank",0,true),
      new Space(this.loc("B",6),this.height,"B","Oriental Avenue","light blue",100,false),
      new Space(this.loc("B",5),this.height,"B","Reading Railroad","blank",200,true),
      new Space(this.loc("B",4),this.height,"B","Income Tax","blank",200,true),
      new Space(this.loc("B",3),this.height,"B","Baltic Avenue","brown",60,false),
      new Space(this.loc("B",2),this.height,"B","Community Chest","blank",0,true),
      new Space(this.loc("B",1),this.height,"B","Mediteranean Avenue","brown",60,false)
    ]

  }

  draw(){
    this.spaces.forEach((space, i) => {
      space.draw();
    });

  }

  loc(side,space){  //returns the location on the board for each space
    var location = [0,0];

    if(side == "L"){
      switch(space){
        case 1: location = [0,this.corner+this.unit*8]; break;
        case 2: location = [0,this.corner+this.unit*7]; break;
        case 3: location = [0,this.corner+this.unit*6]; break;
        case 4: location = [0,this.corner+this.unit*5]; break;
        case 5: location = [0,this.corner+this.unit*4]; break;
        case 6: location = [0,this.corner+this.unit*3]; break;
        case 7: location = [0,this.corner+this.unit*2]; break;
        case 8: location = [0,this.corner+this.unit*1]; break;
        case 9: location = [0,this.corner+this.unit*0]; break;
      }
    }
    else if(side == "R"){
      switch(space){
        case 1: location = [this.corner+this.unit*9,this.corner+this.unit*0]; break;
        case 2: location = [this.corner+this.unit*9,this.corner+this.unit*1]; break;
        case 3: location = [this.corner+this.unit*9,this.corner+this.unit*2]; break;
        case 4: location = [this.corner+this.unit*9,this.corner+this.unit*3]; break;
        case 5: location = [this.corner+this.unit*9,this.corner+this.unit*4]; break;
        case 6: location = [this.corner+this.unit*9,this.corner+this.unit*5]; break;
        case 7: location = [this.corner+this.unit*9,this.corner+this.unit*6]; break;
        case 8: location = [this.corner+this.unit*9,this.corner+this.unit*7]; break;
        case 9: location = [this.corner+this.unit*9,this.corner+this.unit*8]; break;
      }
    }
    else if(side == "T"){
      switch(space){
        case 1: location = [this.corner+this.unit*0,0]; break;
        case 2: location = [this.corner+this.unit*1,0]; break;
        case 3: location = [this.corner+this.unit*2,0]; break;
        case 4: location = [this.corner+this.unit*3,0]; break;
        case 5: location = [this.corner+this.unit*4,0]; break;
        case 6: location = [this.corner+this.unit*5,0]; break;
        case 7: location = [this.corner+this.unit*6,0]; break;
        case 8: location = [this.corner+this.unit*7,0]; break;
        case 9: location = [this.corner+this.unit*8,0]; break;
      }
    }
    else if(side == "B"){
      switch(space){
        case 1: location = [this.corner+this.unit*8,this.corner+this.unit*9]; break;
        case 2: location = [this.corner+this.unit*7,this.corner+this.unit*9]; break;
        case 3: location = [this.corner+this.unit*6,this.corner+this.unit*9]; break;
        case 4: location = [this.corner+this.unit*5,this.corner+this.unit*9]; break;
        case 5: location = [this.corner+this.unit*4,this.corner+this.unit*9]; break;
        case 6: location = [this.corner+this.unit*3,this.corner+this.unit*9]; break;
        case 7: location = [this.corner+this.unit*2,this.corner+this.unit*9]; break;
        case 8: location = [this.corner+this.unit*1,this.corner+this.unit*9]; break;
        case 9: location = [this.corner+this.unit*0,this.corner+this.unit*9]; break;
      }
    }
    else if(side == "TL") location = [0,0];
    else if(side == "TR") location = [this.corner+this.unit*9,0];
    else if(side == "BL") location = [0,this.corner+this.unit*9];
    else if(side == "BR") location = [this.corner+this.unit*9,this.corner+this.unit*9];
    return location;
  }


}
