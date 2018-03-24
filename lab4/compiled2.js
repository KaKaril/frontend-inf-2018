"use strict";

// ES 6 - 2015
// https://babeljs.io/
// export PATH=$PATH:~/Projekty/frontend-inf-2018/lab4/node_modules/.bin/
var incremented = [1, 2, 3].map(function (n) {
  return n + 1;
});
incremented.forEach(function (item) {
  return console.log(item);
});
