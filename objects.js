var cesare = {
  name: 'Cesare',
  sayName: function() {
    console.log(`My name is ${this.name}`);
  }
}

cesare.sayName();


var mary = {
  name: 'Mary',
  sayName: function() {
    console.log(`My name is ${this.name}`);
  }
}

mary.sayName();
