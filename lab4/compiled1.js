"use strict";

// ES 6 - 2015
// https://babeljs.io/
// export PATH=$PATH:~/Projekty/frontend-inf-2018/lab4/node_modules/.bin/
var evenPredicate = function evenPredicate(n) {
  return n % 2 === 0;
};
var incremented = [1, 2, 3].map(function (n) {
  return n + 1;
});
var evens = [1, 2, 3, 4, 5, 6, 7, 8].filter(evenPredicate);

//incremented.forEach(item => console.log(item));
//evens.forEach(item => console.log(item));


var aShape = {
  numbers: [1, 2, 3, 4, 5],
  x: 4,
  y: 3,
  scale: 2,
  move: function move(delta) {
    return aShape.x += delta;
  },
  mov2: aShape.numbers.map(item * aShape.scale)
};

aShape.move(5);
console.log(aShape.x);
aShape.mov2();
