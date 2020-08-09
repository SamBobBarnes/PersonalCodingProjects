/* property.js */

class Property{
  constructor(name,value,mortgage,umortgage,r,rc,r1,r2,.r3,r4,rhotel,hc,hotelc){
    this.name = name;

    this.value = value;
    this.mortgage = mortgage;
    this.umortgage = umortgage;
    this.isMortgaged = false;

    this.rent = [r,rc,r1,r2,r3,r4,rhotel];
    this.rentLevel = 0;

    this.houseCost = hc;
    this.hotelCost = hotelc;
  }

  getName(){
    return this.name;
  }

  mortgageCheck(){
    return this.isMortgaged;
  }

  mort(){
    if(this.isMortgaged) this.isMortgaged = false;
    else this.isMortgaged = true;
  }

  getMortgagePrice(){
    return this.mortgage;
  }

  getUMortgagePrice(){
    return this.umortgage;
  }

  rentIncrease(){
    if(this.rentLevel < 6) this.rentLevel += 1;
  }

  rentDecrease(){
    if(this.rentLevel > 0) this.rentLevel -= 1;
  }

  rent(){
    return this.rent[this.rentLevel];
  }

  getHouseCost(){
    return this.houseCost;
  }

  getHotelCost(){
    return this.hotelCost;
  }
}
