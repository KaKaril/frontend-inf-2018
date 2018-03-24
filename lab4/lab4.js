// ES 6 - 2015
// https://babeljs.io/
// export PATH=$PATH:~/Projekty/frontend-inf-2018/lab4/node_modules/.bin/
var evenPredicate = n => n%2 === 0;
let incremented = [1,2,3].map(n => n + 1);
let evens = [1,2,3,4,5,6,7,8].filter(evenPredicate);

//incremented.forEach(item => console.log(item));
//evens.forEach(item => console.log(item));

var aShape = {
  numbers:[1,2,3,4,5],
  x: 4,
  y: 3,
  scale:2,
//  move : delta => aShape.x += delta,
  move() {
    console.log(this.scale);
    var self = this; // vat that = this; var _this = this;
    this.numbers = this.numbers.map(function(element){
      return element * self.scale;
    })
  },
  move2() {
    console.log(this.scale);
    this.numbers = this.numbers.map(element => element * this.scale);
  }
};

aShape.move2(5);
console.log(aShape.numbers);


//  Lambdy, Classes, Template Strings, Default + rest + spread, let const, interators, for..of
