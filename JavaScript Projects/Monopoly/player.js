/* player.js */

class Player{
  constructor(name){
    this.name = name;
    this.money = 1500;
    this.properties = [];
  }

  getName() {
    return this.name;
  }

  balance(){
    return this.money;
  }

  addMoney(sum){
    this.money += sum;
  }

  payMoney(sum){
    this.money -= sum;
  }

  getProperties(){
    return this.properties;
  }

  getNumProperties(){
    return this.properties.length;
  }

  addProperty(property){
    this.properties.push(property);
  }

  removeProperty(prop){
    var newProps = [];
    this.properties.forEach((item, i) => {
      if(item != prop){
        newProps.push(item);
      }
    });
    this.properties = newProps;
  }


}
